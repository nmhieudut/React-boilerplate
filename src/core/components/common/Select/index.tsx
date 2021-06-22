interface IChildrenOption {
  option: any
  text: string
}

interface ISelectProps {
  options: IChildrenOption[]
  onChangeSelect: (e: string) => void
  selected: string | undefined
  style?: React.CSSProperties | undefined
  className?: string | undefined
}

const Select = (props: ISelectProps) => {
  const { options, onChangeSelect, selected, style, className } = props
  return (
    <select
      className={className}
      style={style}
      defaultValue={selected}
      onChange={(e) => onChangeSelect(e.currentTarget.value)}
    >
      {options.map(({ option, text }, i) => (
        <option key={i} value={option}>
          {text}
        </option>
      ))}
    </select>
  )
}
export default Select
