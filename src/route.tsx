import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import SignIn from './views/sign/SignIn';
import SignUp from './views/sign/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    }
]);

export default router;