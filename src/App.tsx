import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { MainPage } from './pages/MainPage'

export function App() {

  return (
    <div className="App">
      <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Header />
      <MainPage />
      </ThemeProvider>
    </div>
  )
}


