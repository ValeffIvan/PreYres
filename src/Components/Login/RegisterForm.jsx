import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import ConfirmationCode from './ConfirmationCode';
import LoginForm from './LoginForm';

const RegisterForm = () => {
  const [registered, setRegistered] = useState(1);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Submit the form data to your server for registration
    try {
      // Implement your registration logic here
      setRegistered(2);
    } catch (ex) {
      console.error('Error al registrarse:', ex);
    }
  };

  return (
    <>
      {registered === 1 ? (
        <div className="w-full p-4 bg-white rounded-lg shadow-lg bg-gray-800 border border-gray-700">
          <div className="flex items-center">
            <button className="flex items-center text-gray-900 text-white" onClick={()=> setRegistered(3)}>
              <FaArrowLeft className="mr-2" /> Volver
            </button>
          </div>
          <form onSubmit={handleSubmit} className='space-y-3 sm:p-8'>
            <h1 className="text-l font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl text-white">Registrate</h1>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-white" htmlFor="username">Usuario</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-white" htmlFor="email">Correo Electronico</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="@email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-white" htmlFor="password">Contraseña</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 text-white" htmlFor="confirm">Confirmar contraseña</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                type="password"
                name="confirm"
                id="confirm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="confirm password"
              />
            </div>
            <br />
            <button type="submit" className="w-full bg-indigo-600 rounded-lg py-2 text-lg text-white tracking-wide font-semibold font-sans hover:bg-blue-600">Registrarme</button>
            <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
              <button className="font-medium text-primary-600 hover:underline text-primary-500" onClick={() => setRegistered(3)}>
                Ya tengo cuenta, iniciar sesión
              </button>
            </p>
          </form>
        </div>
      ) : registered === 2 ? (
        <ConfirmationCode />
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default RegisterForm;

/*
<>
    {registered===1 ?
      (<div className="w-full p-4 bg-white rounded-lg shadow-lg bg-gray-800 border border-gray-700">
        <div className="flex items-center">
          <button className="flex items-center text-gray-900 text-white">
            <FaArrowLeft className="mr-2" /> Volver
          </button>
        </div>
        <form className="space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl text-white">Registrate</h1>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-white" htmlFor="username">Usuario</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" type="text" name="username" id="username" placeholder="username" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-white" htmlFor="email">Correo Electronico</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" type="text" name="email" id="email" placeholder="@email" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-white" htmlFor="password">Contraseña</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" type="text" name="password" id="password" placeholder="password" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-white" htmlFor="confirm">Confirmar contraseña</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" type="text" name="confirm" id="confirm" placeholder="confirm password" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 rounded-lg py-2 text-lg text-white tracking-wide font-semibold font-sans hover:bg-blue-600" onClick={()=>{setRegistered(false)}}>Registrarme</button>
          <p className="text-sm font-light text-gray-500 text-gray-400 flex justify-center">
            <button className="font-medium text-primary-600 hover:underline text-primary-500">
              Ya tengo cuenta, iniciar sesión
            </button>
          </p>
        </form>
      </div>) : 
      registered===2 ?
        ( <ConfirmationCode/>) : 
        (<LoginForm/>)}
    </>
*/