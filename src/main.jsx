import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Toaster position="top-right" reverseOrder={false} />
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
