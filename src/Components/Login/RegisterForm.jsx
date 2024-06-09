import { FaArrowLeft } from 'react-icons/fa'; // Importa un ícono de flecha, asegúrate de tener 'react-icons' instalado

const RegisterForm = () => {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700">
      <div className="flex items-center">
        <button className="flex items-center text-gray-900 dark:text-white">
          <FaArrowLeft className="mr-2" /> Volver
        </button>
      </div>
      <form className="space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">Registrate</h1>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="username">Usuario</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="username" id="username" placeholder="username" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Correo Electronico</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="email" id="email" placeholder="@email" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Contraseña</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="password" id="password" placeholder="password" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="confirm">Confirmar contraseña</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="confirm" id="confirm" placeholder="confirm password" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 rounded-lg py-2 text-lg text-white tracking-wide font-semibold font-sans hover:bg-blue-600">Registrarme</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center">
          <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">
            Ya tengo cuenta, iniciar sesión
          </button>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
