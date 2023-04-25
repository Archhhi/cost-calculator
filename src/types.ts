import { SliderMarks } from 'antd/es/slider'

export interface ITariffSliderData {
  id: string
  name: string
  marks: SliderMarks
  min: number
  max: number
  step: number
  value: number
  stepPrice: number
  defaultValue: number
}

export interface IExtraServiceData {
  id: string
  title: string
  cost: number
  checked: boolean
}

export interface ITariffData {
  tariffSliderData: ITariffSliderData[]
  extraServices: IExtraServiceData[]
}
