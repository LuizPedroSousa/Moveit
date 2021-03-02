import React, { useState } from 'react'
import Dark from '../../../Styles/Themes/dark'
import Light from '../../../Styles/Themes/light'

import ThemeSwitcherContext from './context'

const { Provider, Consumer } = ThemeSwitcherContext

const ThemeSwitcherProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(Light)

  const toggleTheme = () => setTheme(theme.title === 'light' ? Dark : Light)
  return (
    <Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </Provider>
  )
}

export { ThemeSwitcherProvider, Consumer }
