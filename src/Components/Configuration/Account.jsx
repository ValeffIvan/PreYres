import { useState, useEffect } from "react";

const Account = () => {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [editedUser, setEditedUser] = useState('');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedEmail, setEditedEmail] = useState('');
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [editedPassword, setEditedPassword] = useState('');

  useEffect(() => {
    setEditedUser('');
    setEditedEmail('');
    setEditedPassword('')
  }, []);

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto p-4 pt-6 md:p-6 lg:p-12">
      {isEditingUser ? (
        <div className="mb-4">
          <p className="text-lg font-bold">Nombre de usuario</p>
          <div className="flex flex-col items-center">
            <div className="w-full mb-2">
              <input
                type="text"
                placeholder="Bruno Donati"
                className="w-full text-sm text-gray-700 rounded-full px-4 py-2 border"
                value={editedUser}
                onChange={(e)=>setEditedUser(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-2 w-full">
              <button
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
              >
                Aceptar
              </button>
              <button
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
                onClick={()=>{setIsEditingUser(false)}}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg font-bold">Nombre de usuario</p>
          <div className="flex flex-col items-center">
            <div className="w-full mb-2">
              <input
                disabled
                type="text"
                placeholder="Bruno Donati"
                className="w-full text-sm text-gray-700 rounded-full px-4 py-2 border"
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
                onClick={() => setIsEditingUser(true)}
              >
                Modificar
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditingEmail ? (
        <div className="mb-4">
          <p className="text-lg font-bold">Correo electrónico</p>
          <div className="flex flex-col items-center">
            <div className="w-full mb-2">
              <input
                type="text"
                placeholder="brunodonati1997@hotmail.com"
                className="w-full text-sm text-gray-700 rounded-full px-4 py-2 border"
                value={editedEmail}
                onChange={(e)=>setEditedEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-2 w-full">
              <button
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
              >
                Aceptar
              </button>
              <button
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
                onClick={() => setIsEditingEmail(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg font-bold">Correo electrónico</p>
          <div className="flex flex-col items-center">
            <div className="w-full mb-2">
              <input
                type="text"
                placeholder="brunodonati1997@hotmail.com"
                disabled
                className="w-full text-sm text-gray-700 rounded-full px-4 py-2 border"
              />
            </div>
            <div className="flex justify-end w-full">
              <button 
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
                onClick={() => setIsEditingEmail(true)}
              >
                Modificar
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditingPassword ? (
        <div className="mb-4">
          <p className="text-lg font-bold">Contraseña</p>
          <div className="flex flex-col items-center">
            <div className="w-full mb-2">
              <input
                type="text"
                placeholder="**********"
                className="w-full text-sm text-gray-700 rounded-full px-4 py-2 border"
                value={editedPassword}
                onChange={(e)=>setEditedPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-2 w-full">
              <button
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
              >
                Aceptar
              </button>
              <button
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
                onClick={()=>setIsEditingPassword(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg font-bold">Contraseña</p>
          <div className="flex flex-col items-center">
            <div className="w-full mb-2">
              <input
                type="text"
                placeholder="**********"
                disabled
                className="w-full text-sm text-gray-700 rounded-full px-4 py-2 border"
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full"
                onClick={()=>setIsEditingPassword(true)}
              >
                Modificar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
