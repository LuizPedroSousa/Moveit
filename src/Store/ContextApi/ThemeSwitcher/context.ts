/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'
import { ThemesType } from '../../../@types/Styled-Components'
import Light from '../../../Styles/Themes/light'

interface IThemeSwitcherContext {
  theme: ThemesType
  toggleTheme: () => void
}
const ThemeSwitcherContext = createContext<IThemeSwitcherContext>({
  theme: Light,
  toggleTheme: () => {}
})

export default ThemeSwitcherContext
