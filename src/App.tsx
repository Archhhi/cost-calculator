import { FC } from 'react'
import styles from './app.module.css'

import { TariffConfigurator } from './components/TariffConfigurator'

const App: FC = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <TariffConfigurator />
    </div>
  )
}

export default App
