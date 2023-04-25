import { FC } from 'react'
import { Button } from 'antd'

import { ButtonType } from 'antd/es/button'
import { ITariffData } from '../../types'

interface ButtonTotalCostProps {
  data: ITariffData
  type: ButtonType
}

export const ButtonTotalCost: FC<ButtonTotalCostProps> = ({
  data,
  type
}): JSX.Element => {
  const totalSliderCost = data.tariffSliderData.reduce(
    (acc, curr) => acc + curr.value * 2,
    0
  )
  const totalExtraServiceCost = data.extraServices.reduce((acc, curr) => {
    return curr.checked ? acc + curr.cost : acc
  }, 0)

  const totalCost = totalSliderCost + totalExtraServiceCost

  console.log('ButtonTotalCost')

  return <Button type={type}>{totalCost} ₽ в месяц</Button>
}
