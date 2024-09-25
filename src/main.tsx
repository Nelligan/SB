import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BotProvider } from './context/BotContext.tsx'

createRoot(document.getElementById('root')!).render(

    <BotProvider>
      <App />
    </BotProvider>

)
