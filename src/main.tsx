
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ReduxProvider } from './global/store/ReduxProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <ReduxProvider>
		<App />
	</ReduxProvider>
  </ChakraProvider>,
)
