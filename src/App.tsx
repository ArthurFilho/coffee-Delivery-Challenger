import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ContextProvider } from './context/Context'

export function App() {

  return (
    <div className="App">
      
      <ThemeProvider theme={DefaultTheme}>
      
      <BrowserRouter>
      <ContextProvider>
      <Router/>
      </ContextProvider>
      </BrowserRouter>

      <GlobalStyle />
      </ThemeProvider>
    
    </div>
  )
}


