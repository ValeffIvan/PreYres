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
        <div className="w-full p-4 rounded-lg shadow-lg bg-gray-800 border border-gray-700 max-w-md">
          <div className="flex items-center">
            <button className="flex items-center text-white" onClick={() => setRegistered(3)}>
              <FaArrowLeft className="mr-2" /> Volver
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3 sm:p-8">
            <h1 className="text-l font-bold leading-tight text-center tracking-tight md:text-2xl text-white">Regístrate</h1>
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="username">Usuario</label>
              <input
                className="bg-gray-700 border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="email">Correo Electrónico</label>
              <input
                className="bg-gray-700 border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@electronico.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="password">Contraseña</label>
              <input
                className="bg-gray-700 border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white" htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                className="bg-gray-700 border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar Contraseña"
                required
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-blue-600 rounded-lg py-2 text-lg text-white tracking-wide font-semibold">
              Registrarme
            </button>
            <p className="text-sm font-light text-gray-400 text-center">
              <button type="button" className="font-medium text-primary-600 hover:underline text-primary-500" onClick={() => setRegistered(3)}>
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
