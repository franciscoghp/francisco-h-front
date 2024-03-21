import {useRouter} from 'next/router';
import { JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogged } from '../store/authSlice';
import Loading from '../components/loading';

const RouteGuard = (props : {
    children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}) => {
    const {children} = props;
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const userLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('user-logged') : null;

    const dispatch = useDispatch();
    const loading = useSelector((state: any) => {
        return state.loading.loading;
    });

    useEffect(() => {
        const authCheck = () => {
            if (userLocalStorage) {
                setAuthorized(true);
                dispatch( setUserLogged(true) )
            } else {
                router.push('/login');
            }
        };
        authCheck();

        const preventAccess = () => setAuthorized(false);

        router.events.on('routeChangeStart', preventAccess);
        router.events.on('routeChangeComplete', authCheck);

        return () => {
            router.events.off('routeChangeStart', preventAccess);
            router.events.off('routeChangeComplete', authCheck);
        };
    }
    , [dispatch, router, router.events, userLocalStorage]);

    return(
        <>
        { loading &&  <Loading/>  }
        { authorized ? ( children ) : <Loading/>  }
        </>
    )

}

export default RouteGuard;