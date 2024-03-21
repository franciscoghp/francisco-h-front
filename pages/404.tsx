import Link from "next/link";

export default function Custom404() {
  return <div className="flex justify-center items-center h-screen">
    <div className="flex justify-center items-center flex-col bg-violet-700 text-white px-16 py-24 rounded-xl">
      <h1 className="text-8xl font-semibold mb-6">
        404
      </h1>
      <p className="text-2xl font-semibold mb-3">
        Ha ocurrido un problema
      </p>
      <p className="mb-6">
        No se encuentra la pagina a la cual quieres ingresar
      </p>
      <Link href="/" className="text-blue-700 px-4 py-2 rounded bg-white mt-4 font-semibold">
        Volver a inicio
      </Link>
    </div>
  </div>
}