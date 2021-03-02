/* eslint-disable @typescript-eslint/no-empty-interface */
import Light from '../../Styles/Themes/light'
import 'styled-components'

export type ThemesType = typeof Light
declare module 'styled-components' {
  interface DefaultTheme extends ThemesType {}
}
