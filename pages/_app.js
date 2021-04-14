// Libraries
import { Provider } from 'react-redux'
import { store } from 'store'

// Styles
import 'styles/globals.scss'

// Components
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
