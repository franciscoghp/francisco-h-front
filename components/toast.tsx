import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';

export const notifySuccess = () => toast.custom((t: any) => (
    <div className="w-[510px] h-24 p-6 bg-green-100 rounded-lg shadow border-l-4 border-emerald-400 flex-col justify-start items-start gap-2 inline-flex">
      <div className="justify-start items-center gap-4 inline-flex">
        <div className="w-10 h-10 relative">
            <CheckCircleIcon className="fill-emerald-400"/>  
        </div>
        <div className="flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-gray-800 text-base font-semibold leading-normal">Acción completada</div>
          <div className="text-gray-500 text-sm font-normal leading-tight">Se realizó con éxito</div>
        </div>
      </div>
    </div>
))

export const notifyError = (message = 'Ha ocurrido un error; intenta nuevamente') => toast.custom((t: any) => (
  console.log(message),
  <div className="w-[510px] h-24 p-6 bg-rose-100 rounded-lg shadow border-l-4 border-red-400 flex-col justify-start items-start gap-2 inline-flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-10 h-10 relative">
        <XCircleIcon className="fill-red-400"/>
      </div>
      <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-gray-800 text-base font-semibold leading-normal">Acción sin completar</div>
        <div className="text-gray-500 text-sm font-normal leading-tight">{message}</div>
      </div>
    </div>
  </div>
))

