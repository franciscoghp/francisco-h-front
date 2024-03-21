import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { panelSignIn } from "../../store/thunk/panelLogin";
import { Toaster } from "react-hot-toast";
import { notifyError, notifySuccess } from "../../components/toast";
import ModalRegister from "../register/modal-register";
import UserCreateNew from "../register/create-new";

export default function Login() {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [openCreateNew, setOpenCreateNew] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useSelector((state: any) => {
        return state.auth;
    });

    useEffect(() => {
        if (auth.userLogged) router.push('/');
    }, [auth]);


    const onFormSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        // @ts-ignore
        const logged = await dispatch(panelSignIn({ user }));
        setLoading(false);
        if (logged.error) notifyError('Error al iniciar sesión')
        console.log({logged})
    }

    return (
        <div className="flex justify-center items-center h-screen bg-slate-700">
            <div className="flex flex-col-reverse md:flex-row shadow w-2/3 md:w-1/2 md:h-1/2">
                <div className="flex flex-col justify-center px-8 p-6 w-1/2 bg-white">
                    <h1 className="font-bold">Ingresar a la Mejor App del Mundo!!</h1>
                    <form>
                        <div>
                            <label className="text-gray-400 text-xs">Usuario</label> <br/>
                            <input onChange={(e) => setUser(e.target.value)} 
                                type="email" className="shadow rounded w-full" name="user" id="user" />
                        </div>
                        {auth.errorLogin && <p className="text-red-500 text-xs mt-2">Credenciales inválidas</p>}
                        {loading && <p className="text-blue-500 text-xs mt-2">Cargando...</p>}
                        <button onClick={onFormSubmit} className="bg-blue-600 p-1 text-xs w-full rounded text-white mt-4"><b>Ingresar</b></button>
                        <div className="mt-8">
                            <span className="p-1 text-xs text-blue-600 inline-flex justify-center">¿No tienes cuenta?, regístrate gratis</span>
                            <button type="button" onClick={() => setOpenCreateNew(true)} className="bg-blue-600 p-1 text-md w-full rounded text-white">Regístrate</button>
                        </div>
                   </form>
                </div>
                <div className="bg-blue-600 p-6 text-white flex items-end md:w-1/2">
                    <h1 className="font-bold">Bienvenido de vuelta</h1>
                </div>
            </div>

            {/* Modal De Crear Fotografo Nuevo */}
            {openCreateNew && 
            <ModalRegister open={openCreateNew} onClose={() => setOpenCreateNew(false)}>
                <UserCreateNew
                    onClose={(ok?: boolean, message?: any) => {
                        if( !!ok ) notifySuccess();
                        if( ok == false ) notifyError(message)
                        setOpenCreateNew(false);
                    }}/>
            </ModalRegister>}
            <Toaster  position="top-right"/>
        </div>
        
    )
}