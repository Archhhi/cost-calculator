import { FC } from 'react'
import styles from './styles.module.css'
import { Sliders } from '../Sliders'
import { ExtraServices } from '../ExtraServices'
import { ButtonTotalCost } from '../ButtonTotalCost'

import { useAppSelector } from '../../hooks/redux'

export const TariffConfigurator: FC = (): JSX.Element => {
  const { tariffData } = useAppSelector((state) => state.tariffSlice)

  const onSubmitValues = (totalCost: number) => {
    const jsonModel = {
      minute: tariffData.tariffSliderData.find(
        (tariffSlider) => tariffSlider.name === 'minute'
      )!.value,
      sms: tariffData.tariffSliderData.find(
        (tariffSlider) => tariffSlider.name === 'sms'
      )!.value,
      gb: tariffData.tariffSliderData.find(
        (tariffSlider) => tariffSlider.name === 'gb'
      )!.value,
      rent: tariffData.extraServices.find(
        (service) => service.title === 'Аренда'
      )!.checked,
      installments: tariffData.extraServices.find(
        (service) => service.title === 'Рассрочка'
      )!.checked,
      totalCost: totalCost
    }
    alert(JSON.stringify(jsonModel))
  }

  return (
    <div className={styles.wrapper}>
      <h1>Настройте тариф</h1>

      <form onSubmit={() => onSubmitValues} className={styles.form}>
        <Sliders data={tariffData.tariffSliderData} />

        <ExtraServices data={tariffData.extraServices} />

        <ButtonTotalCost
          data={tariffData}
          type={'primary'}
          onSubmit={onSubmitValues}
        />
      </form>
    </div>
  )
}
