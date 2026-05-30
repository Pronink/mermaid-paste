import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

import styles from './MermaidViewer.module.css'

export const MermaidViewer = (props: { mermaidCode: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const render = async () => {
      if (!containerRef.current) {
        return
      }

      const id = `mermaid-${crypto.randomUUID()}`

      try {
        await mermaid.parse(props.mermaidCode)

        const { svg } = await mermaid.render(id, props.mermaidCode)

        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = svg
          setError(null)
        }
      } catch (e: any) {
        if (isMounted) {
          console.error('Mermaid render error:', e)
          setError(e.str || e.message || 'Syntax error in mermaid code')
        }
      }
    }

    render()
    return () => {
      isMounted = false
    }
  }, [props.mermaidCode])

  return (
    <div className={styles.wrapper}>
      {error && <div className={styles.error}>{error}</div>}
      <div
        ref={containerRef}
        className={styles.mermaidContainer}
      />
    </div>
  )
}
