interface IValue {
  value: any
  text: string
}

interface ISelectProps {
  values: IValue[]
  callback: (e: string) => void
  selected: string | undefined
}
const Select = (props: ISelectProps) => {
  const { values, callback, selected } = props
  return (
    <select
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
