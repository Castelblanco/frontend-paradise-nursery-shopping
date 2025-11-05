import { createBrowserRouter } from 'react-router';
import { ROUTES } from './constants/routes';
import { lazy } from 'react';
import { Layout } from './layout';

const PageHome = lazy(() => import('./components/pages/home'));
const PageProducts = lazy(() => import('./components/pages/products'));
const PageShopping = lazy(() => import('./components/pages/shopping'));

export const Router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <PageHome />,
    },
    {
        element: <Layout />,
        children: [
            {
                path: ROUTES.PRODUCTS,
                element: <PageProducts />,
            },
            {
                path: ROUTES.SHOPPING,
                element: <PageShopping />,
            },
        ],
    },
]);
