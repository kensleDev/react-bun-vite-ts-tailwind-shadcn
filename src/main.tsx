import ReactDOM from 'react-dom/client'
import './globals.css'

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Layout } from './layouts/Layout';


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>

		<Layout>
			<RouterProvider router={router} />
		</Layout>

		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
)
