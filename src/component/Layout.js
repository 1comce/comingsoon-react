import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="Container">
            <Outlet />
        </div>
    );
};

export default Layout;
