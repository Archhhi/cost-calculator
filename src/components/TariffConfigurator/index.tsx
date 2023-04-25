import { FC } from 'react'
import styles from './styles.module.css'
import { Sliders } from '../Sliders'
import { ExtraServices } from '../ExtraServices'
import { ButtonTotalCost } from '../ButtonTotalCost'

import { useAppSelector } from '../../hooks/redux'

export const TariffConfigurator: FC = (): JSX.Element => {
  const { tariffData } = useAppSelector((state) => state.tariffSlice)

  return (
    <div className={styles.wrapper}>
      <h1>Настройте тариф</h1>

      <Sliders data={tariffData.tariffSliderData} />

      <ExtraServices data={tariffData.extraServices} />

      <ButtonTotalCost data={tariffData} type={'primary'} />
    </div>
  )
}
