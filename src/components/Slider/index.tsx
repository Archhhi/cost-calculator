import { FC } from 'react'
import { Slider as AntSlider } from 'antd'
import { SliderMarks } from 'antd/es/slider'

interface SliderProps {
  id: string
  marks: SliderMarks
  step: number
  min?: number
  max?: number
  tooltipVisible?: boolean
  value: number
  defaultValue: number
  onChange: (valueChange: number, id: string) => void
}

export const Slider: FC<SliderProps> = ({
  id,
  marks,
  step,
  min,
  max,
  tooltipVisible,
  value,
  defaultValue,
  onChange
}): JSX.Element => {
  return (
    <div>
      <AntSlider
        min={min}
        max={max}
        marks={marks}
        tooltip={{ open: tooltipVisible }}
        step={step}
        value={value}
        defaultValue={defaultValue}
        onChange={(valueChange) => onChange(valueChange, id)}
      />
    </div>
  )
}
