import { Header } from './components/header';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
