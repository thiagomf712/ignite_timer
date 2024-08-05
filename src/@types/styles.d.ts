import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
