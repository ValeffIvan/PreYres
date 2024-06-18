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
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      {isEditingUser === true ? (

      <div className="mb-4">
        <p className="text-lg font-bold">Nombre de usuario</p>
        <div className="flex">
          <div className="w-full pr-4">
            <input
              type="text"
              placeholder="Bruno Donati"
              className="w-full text-sm text-gray-700 rounded-full"
              value={editedUser}
              onChange={(e)=>setEditedUser(e.tarjet.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Aceptar
            </button>
            <button
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={()=>{setIsEditingUser(false)}}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div> ) : ( 
      <div className="mb-4">
        <p className="text-lg font-bold">Nombre de usuario</p>
        <div className="flex">
          <div className="w-full pr-4">
            <input
              disabled
              type="text"
              placeholder="Bruno Donati"
              className="w-full text-sm text-gray-700 rounded-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditingUser(true)}
            >
              Modificar
            </button>
          </div>
        </div>
      </div>
      )}

      {isEditingEmail === true ? (

      <div className="mb-4">
        <p className="text-lg font-bold">Correo electrónico</p>
        <div className="flex">
          <div className="w-full pr-4">
            <input
              type="text"
              placeholder="brunodonati1997@hotmail.com"
              className="w-full text-sm text-gray-700 rounded-full"
              value={editedEmail}
              onChange={(e)=>setEditedEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Aceptar
            </button>
            <button
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditingEmail(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div> ) : (
        <div className="mb-4">
        <p className="text-lg font-bold">Correo electrónico</p>
        <div className="flex">
          <div className="w-full pr-4">
            <input
              type="text"
              placeholder="brunodonati1997@hotmail.com"
              disabled
              className="w-full text-sm text-gray-700 rounded-full"
            />
          </div>
          <div className="flex justify-end">
            <button 
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => setIsEditingEmail(true)}
            >
              Modificar
            </button>
          </div>
        </div>
      </div>
      )}
      {isEditingPassword === true ? (
      <div className="mb-4">
        <p className="text-lg font-bold">Contraseña</p>
        <div className="flex">
          <div className="w-full pr-4">
            <input
              type="text"
              placeholder="**********"
              className="w-full text-sm text-gray-700 rounded-full"
              value={editedPassword}
              onChange={(e)=>setEditedPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Aceptar
            </button>
            <button
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={setIsEditingPassword(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      ) : (
        <div className="mb-4">
        <p className="text-lg font-bold">Contraseña</p>
        <div className="flex">
          <div className="w-full pr-4">
            <input
              type="text"
              placeholder="**********"
              className="w-full text-sm text-gray-700 rounded-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-indigo-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setIsEditingPassword(true)}
            >
              Modificar
            </button>
          </div>
        </div>
      </div>
      ) }
    </div>
  );
};

export default Account;