import styles from './Editor.module.css'

export const Editor = (props: {
  code: string
  setIsVisible: (isVisible: boolean) => void
  isVisible: boolean
  onChangeCode: ((code: string) => void) | undefined
}) => {
  return (
    <div
      className={styles.root}
      style={
        props.isVisible ? undefined : (
          {
            transform: 'translateX(calc(-100% - 21px))',
          }
        )
      }>
      <textarea
        value={props.code}
        onChange={(e) => props.onChangeCode?.(e.target.value)}
        className={styles.textarea}
        spellCheck="false"
      />
      <button
        type="button"
        onClick={() => props.setIsVisible(!props.isVisible)}
        className={styles.buttonOpenEditor}
        style={
          !props.isVisible ?
            {
              right: '-46px',
            }
            : undefined
        }>
        {props.isVisible ? '×' : '✎'}
      </button>
    </div>
  )
}
