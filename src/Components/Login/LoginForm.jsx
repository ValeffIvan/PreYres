import { useState } from "react";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      localStorage.setItem('isAuth', 1);
      location.reload();
      /*const user_data = { email, password };
      await signin(user_data);
      if (!isAuth){
        setErrorMessage('Credenciales invalidas');
      }*/
    } catch (ex) {
      console.error('Error al iniciar sesión:', ex);
    }
  };

  return (
    <>
      {login ? (
        <div className="w-full rounded-lg shadow border md:mt-0 max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6">
            <h1 className="text-l font-bold leading-tight text-center tracking-tight md:text-2xl text-white">
              Inicia sesión
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Correo electrónico
                </label>
                <input type="email" name="email" id="email" className="bg-gray-700 border-gray-600 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Correo Electrónico" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                  Contraseña
                </label>
                <input type="password" name="password" id="password" className="bg-gray-700 border-gray-600 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Contraseña" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-700 focus:ring-3 focus:ring-primary-300 focus:ring-primary-600 ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">Recuerdame</label>
                  </div>
                </div>
                <button type="button" className="text-sm font-medium text-primary-600 hover:underline text-white">
                  Olvidé la contraseña
                </button>
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-blue-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold" onClick={()=>navigate("/")}>
                Iniciar sesión
              </button>
              <p className="text-sm font-light text-gray-400 text-center">
                <button type="button" className="font-medium text-primary-600 hover:underline text-primary-500" onClick={() => setLogin(false)}>
                  No tengo cuenta, quiero registrarme
                </button>
              </p>
            </form>
          </div>
        </div>
      ) : (
        <RegisterForm />
      )}
    </>
  );
};

export default LoginForm;
