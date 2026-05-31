import { type PropsWithChildren, useEffect, useRef, useState } from 'react'

export function DraggableZoom(props: PropsWithChildren<object>) {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  })

  const [scale, setScale] = useState(1)

  const [dragging, setDragging] = useState(false)
  const offsetRef = useRef({
    x: 0,
    y: 0,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef(position)
  positionRef.current = position

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) return

      setDragging(true)

      offsetRef.current = {
        x: event.clientX - positionRef.current.left,
        y: event.clientY - positionRef.current.top,
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!dragging) return

      setPosition({
        left: event.clientX - offsetRef.current.x,
        top: event.clientY - offsetRef.current.y,
      })
    }

    const handleMouseUp = () => {
      setDragging(false)
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [dragging])

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault()

    const nextScale = event.deltaY < 0 ? scale * 1.25 : scale / 1.25

    const clampedScale = Math.min(50, Math.max(0.1, nextScale))

    if (clampedScale !== scale) {
      const mouseX = event.clientX
      const mouseY = event.clientY

      const scaleRatio = clampedScale / scale

      setPosition({
        left: mouseX - (mouseX - position.left) * scaleRatio,
        top: mouseY - (mouseY - position.top) * scaleRatio,
      })
      setScale(clampedScale)
    }
  }

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        cursor: dragging ? 'grabbing' : 'grab',
      }}>
      <div
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          scale,
          userSelect: 'none',
          transformOrigin: 'top left',
        }}>
        {props.children}
      </div>
    </div>
  )
}
