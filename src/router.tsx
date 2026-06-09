import { createBrowserRouter} from 'react-router-dom';
import CreateOrder from './components/CreateOrder';
import OrdersList from './components/OrdersList';
import Layout from './components/Layout';
import OrderDetails from './components/OrdersList/OrderDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <CreateOrder /> },
            { path: 'orders/', element: <OrdersList />},
            { path: 'order/:id', element: <OrderDetails/>}
        ]
    }
])