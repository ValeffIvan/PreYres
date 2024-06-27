import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileConfig = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUrl, setEditedUrl] = useState('');

  const handleEditPost = async () => {
    if (true) {
      try {
        // await EditPost(idPost, editedTitle, editedText);
      } catch (error) {
        console.error('Error al crear el comentario:', error);
      }
    } else {
      navigate('/login');
    }
  };

  const handleDeletePost = async () => {
    if (true) {
      try {
        // await DeletePost(postId);
      } catch (error) {
        console.error('Error al crear el comentario:', error);
      }
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    setEditedUrl('');
  }, []);

  return (
    <div className="container mx-auto py-10 flex flex-col px-4 sm:px-0">
      <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="font-bold tracking-normal text-3xl mb-4">Url del Perfil</h1>
        {isEditing === false ? (
          <div className="flex flex-col sm:flex-row items-center">
            <input type="text" disabled className="w-full rounded-full sm:mr-5 mb-2 sm:mb-0 border-2 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" value={editedUrl} />
            <button onClick={() => setIsEditing(true)} className="m-1 sm:m-0  bg-indigo-600 tracking-wide hover:bg-blue-600 text-white py-2 px-4 rounded-full">Modificar</button>
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row items-center" onSubmit={(e) => { e.preventDefault(); setIsEditing(false); handleEditPost(); }}>
            <input type="text" className="w-full rounded-full sm:mr-5 mb-2 sm:mb-0 border-2 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={editedUrl} onChange={(e) => setEditedUrl(e.target.value)} />
            <button type="submit" className="m-1 sm:m-0 text-white bg-indigo-600 tracking-wide hover:bg-blue-600 py-2 px-4 rounded-full">Aceptar</button>
            <button type="button" onClick={() => setIsEditing(false)} className="m-1 sm:m-0  bg-indigo-600 tracking-wide hover:bg-blue-600 text-white py-2 px-4 rounded-full">Cancelar</button>
          </form>
        )}
        <div className="flex items-center mt-4">
          <label htmlFor="link-checkbox" className="text-black text-sm font-medium mr-3">¿Pueden realizarme preguntas de forma anónima?</label>
          <input id="link-checkbox" type="checkbox" value="" className="rounded"/>
        </div>
      </div>
    </div>
  );
}

export default ProfileConfig;
