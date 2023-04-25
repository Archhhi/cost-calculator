import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITariffData } from '../../types'

import { tariffData } from '../../constants/tariffData'

interface ISetValueSliderAction {
  tariffSliderId: string
  value: number
}

interface ISetValueCheckboxAction {
  serviceId: string
  checked: boolean
}

interface ITariffState {
  tariffData: ITariffData
}

const initialState: ITariffState = {
  tariffData: tariffData
}

export const tariffSlice = createSlice({
  name: 'tariff',
  initialState,
  reducers: {
    setValueSlider(state, action: PayloadAction<ISetValueSliderAction>) {
      const { tariffSliderId, value } = action.payload

      state.tariffData.tariffSliderData = state.tariffData.tariffSliderData.map(
        (tariffSlider) =>
          tariffSlider.id === tariffSliderId
            ? { ...tariffSlider, value: value }
            : tariffSlider
      )
    },
    setValueCheckbox(state, action: PayloadAction<ISetValueCheckboxAction>) {
      const { serviceId, checked } = action.payload

      state.tariffData.extraServices = state.tariffData.extraServices.map(
        (service) =>
          service.id === serviceId ? { ...service, checked: checked } : service
      )
    }
  }
})

export default tariffSlice.reducer
export const { setValueSlider, setValueCheckbox } = tariffSlice.actions
