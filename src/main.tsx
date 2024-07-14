
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ReduxProvider } from './global/store/ReduxProvider.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from "react-router-dom";


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider>
    <ChakraProvider>
		<QueryClientProvider client={queryClient}>
			<Router>
				<App />
			</Router>
		</QueryClientProvider>
	</ChakraProvider>
  </ReduxProvider>,
)
