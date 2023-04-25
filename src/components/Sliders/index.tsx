import { FC } from 'react'
import { Slider } from '../Slider'
import { ITariffSliderData } from '../../types'

import { useAppDispatch } from '../../hooks/redux'

import { setValueSlider } from '../../redux/reducers/tariffSlice'

interface SlidersProps {
  data: ITariffSliderData[]
}

export const Sliders: FC<SlidersProps> = ({ data }): JSX.Element => {
  const dispatch = useAppDispatch()

  const onChangeSlider = (value: number, id: string) => {
    dispatch(setValueSlider({ tariffSliderId: id, value }))
  }

  const sliders = data.map((slider) => (
    <Slider
      key={slider.id}
      id={slider.id}
      min={slider.min}
      max={slider.max}
      marks={slider.marks}
      tooltipVisible={false}
      step={slider.step}
      value={slider.value}
      defaultValue={slider.defaultValue}
      onChange={onChangeSlider}
    />
  ))

  return <div>{sliders}</div>
}
