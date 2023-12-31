
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './styles/styles.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
<<<<<<< HEAD
import "../index.css"
=======
import '../index.css'
>>>>>>> origin/front-end

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
