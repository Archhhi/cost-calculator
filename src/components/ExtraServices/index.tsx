import { FC } from 'react'
import styles from './styles.module.css'

import { Checkbox } from 'antd'
import { IExtraServiceData } from '../../types'

import { useAppDispatch } from '../../hooks/redux'

import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { setValueCheckbox } from '../../redux/reducers/tariffSlice'

interface ExtraServicesProps {
  data: IExtraServiceData[]
}

export const ExtraServices: FC<ExtraServicesProps> = ({
  data
}): JSX.Element => {
  const dispatch = useAppDispatch()

  const onChangeCheckbox = (event: CheckboxChangeEvent, id: string) => {
    dispatch(setValueCheckbox({ serviceId: id, checked: event.target.checked }))
  }

  const services = data.map((service) => (
    <Checkbox
      key={service.id}
      className={styles.checkbox}
      checked={service.checked}
      defaultChecked={service.checked}
      onChange={(event) => onChangeCheckbox(event, service.id)}
    >
      {service.title} {service.cost} р/мес.
    </Checkbox>
  ))

  return <div className={styles.wrapper}>{services}</div>
}
