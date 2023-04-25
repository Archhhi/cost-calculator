import { FC } from 'react'
import { Button } from 'antd'

import { ButtonType } from 'antd/es/button'
import { ITariffData } from '../../types'

interface ButtonTotalCostProps {
  data: ITariffData
  type: ButtonType
  onSubmit: (totalCost: number) => void
}

export const ButtonTotalCost: FC<ButtonTotalCostProps> = ({
  data,
  type,
  onSubmit
}): JSX.Element => {
  const totalSliderCost = data.tariffSliderData.reduce(
    (acc, curr) => acc + curr.value * 2,
    0
  )
  const totalExtraServiceCost = data.extraServices.reduce((acc, curr) => {
    return curr.checked ? acc + curr.cost : acc
  }, 0)

  const totalCost = totalSliderCost + totalExtraServiceCost

  return (
    <Button type={type} onClick={() => onSubmit(totalCost)}>
      {totalCost} ₽ в месяц
    </Button>
  )
}
