
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <div className='max-w-7xl px-5 mx-auto'>
                <NavBar></NavBar>
               <div>
                <ScrollRestoration></ScrollRestoration>
                <Outlet></Outlet>
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;