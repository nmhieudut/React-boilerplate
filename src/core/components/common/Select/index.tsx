interface IValue {
  value: any
  text: string
}

interface ISelectProps {
  values: IValue[]
  callback: (e: string) => void
  selected: string | undefined
  style?: React.CSSProperties | undefined
  className?: string | undefined
}
const Select = (props: ISelectProps) => {
  const { values, callback, selected, style, className } = props
  return (
    <select
      className={className}
      style={style}
      defaultValue={selected}
      onChange={(e) => callback(e.currentTarget.value)}
    >
      {values.map(({ value, text }, i) => (
        <option key={i} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}
export default Select
