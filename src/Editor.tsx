import styles from './Editor.module.css'

export const Editor = (props: {
  code: string
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
  onChangeCode: ((code: string) => void) | undefined
  onChangeDarkMode: () => void
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
        className={styles.button + ' ' + styles.buttonOpenEditor}
        style={
          !props.isVisible ?
            {
              right: '-46px',
            }
            : undefined
        }>
        <div>{props.isVisible ? <div>×</div> : <div style={{transform: 'translateY(-1px)'}}>✎</div>}</div>
      </button>
      <button
        type="button"
        onClick={() => props.onChangeDarkMode()}
        className={styles.button + ' ' + styles.buttonDarkMode}
        style={
          !props.isVisible ?
            {
              right: '-46px',
            }
            : undefined
        }>
        <div>◐</div>
      </button>
    </div>
  )
}
