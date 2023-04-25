import { v4 as uuidv4 } from 'uuid'
import { ITariffData } from '../types'

export const tariffData: ITariffData = {
  tariffSliderData: [
    {
      id: uuidv4(),
      name: 'minute',
      marks: {
        10: '100',
        20: '200',
        30: '300',
        40: '600'
      },
      min: 10,
      max: 40,
      step: 10,
      value: 20,
      stepPrice: 3,
      defaultValue: 20
    },
    {
      id: uuidv4(),
      name: 'sms',
      marks: {
        10: '0',
        20: '50',
        30: '100',
        40: '150'
      },
      min: 10,
      max: 40,
      step: 10,
      value: 30,
      stepPrice: 2,
      defaultValue: 30
    },
    {
      id: uuidv4(),
      name: 'gb',
      marks: {
        10: '5',
        20: '10',
        30: '15',
        40: '25'
      },
      min: 10,
      max: 40,
      step: 10,
      value: 40,
      stepPrice: 3,
      defaultValue: 40
    }
  ],
  extraServices: [
    {
      id: uuidv4(),
      title: 'Аренда',
      cost: 99,
      checked: true
    },
    {
      id: uuidv4(),
      title: 'Рассрочка',
      cost: 199,
      checked: false
    }
  ]
}
