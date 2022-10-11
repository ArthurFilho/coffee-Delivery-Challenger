import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { HomePage } from './pages/HomePage'

export function App() {

  return (
    <div className="App">
      <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <HomePage />
      </ThemeProvider>
    </div>
  )
}


