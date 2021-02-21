import React from 'react'
import ReactDOM from 'react-dom'
// import { MemoryRouter as Router } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/global.scss'
import App from './App'
import AboutPage from './pages/about'
import HomePage from './pages/home'
import FormPage from './pages/form'
import ThanksPage from './pages/thankyou'

import './styles/global.css'
import './styles/global.scss'
import reportWebVitals from './reportWebVitals'
// import 'semantic-ui-css/semantic.min.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={AboutPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/form" component={FormPage} />
          <Route path="/thankyou" component={ThanksPage} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
