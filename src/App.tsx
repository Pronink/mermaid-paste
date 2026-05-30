import mermaid from 'mermaid'
import {MermaidViewer} from './MermaidViewer.tsx'
import {DraggableZoom} from './DraggableDiv.tsx'
import {useEffect, useState} from 'react'
import LZString from 'lz-string'
import styles from './App.module.css'
import {Editor} from './Editor.tsx'

mermaid.initialize({
    startOnLoad: false,
})

export const App = () => {
    const [mermaidCode, setMermaidCode] = useState<string>("")
    const [isEditorVisible, setIsEditorVisible] = useState(mermaidCode === "")

    // Load URL at startup
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const compressed = params.get('m')
        if (compressed) {
            const decompressed = LZString.decompressFromEncodedURIComponent(compressed)
            if (decompressed) {
                setMermaidCode(decompressed)
            }
        }
    }, [])

    // Update URL
    useEffect(() => {
        if (!isEditorVisible) return
        const compressed = LZString.compressToEncodedURIComponent(mermaidCode)
        const newUrl = `${window.location.origin}${window.location.pathname}?m=${compressed}`
        window.history.replaceState(null, '', newUrl)
    }, [mermaidCode, isEditorVisible]);

    return (
        <div className={styles.root}>
            <DraggableZoom>
                <MermaidViewer mermaidCode={mermaidCode}/>
            </DraggableZoom>
            <Editor
                code={mermaidCode}
                onChangeCode={isEditorVisible ? (code) => setMermaidCode(code) : undefined}
                isVisible={isEditorVisible}
                setIsVisible={setIsEditorVisible}
            />
        </div>
    )
}
