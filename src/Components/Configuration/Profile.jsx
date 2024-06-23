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
    <div className="container mx-auto py-10 flex flex-col w-3/4 justify-between">
        <div> 
          <h1 className="font-bold tracking-normal text-3xl">Url del Perfil</h1>  
          {isEditing === false ?(
            <div className="flex">
              <input type="text" disabled className="w-full rounded-full mr-5 border-2 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" value={editedUrl}/>
              <button onClick={() => setIsEditing(true)} className="m-1 ml-4 text-white bg-indigo-600 tracking-wide hover:bg-blue-600 text-white py-2 px-4 rounded-full">Modificar</button>
            </div>
          ) : (
          <form className="flex">
              <input type="text" className="w-full rounded-full mr-5 border-2 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" value={editedUrl} onChange={(e) => setEditedUrl(e.target.value)} />
              <button type="submite" className="m-1 ml-4 text-white bg-indigo-600 tracking-wide hover:bg-blue-600 text-white py-2 px-4 rounded-full">Aceptar</button>
              <button onClick={() => setIsEditing(false)} className="m-1 ml-4 text-white bg-indigo-600 tracking-wide hover:bg-blue-600 text-white py-2 px-4 rounded-full">Cancelar</button>
          </form>
          )}
        </div>
        <div className="items-center mt-2">
          <label htmlFor="link-checkbox" className="text-black ms-2 text-sm font-medium mr-3">¿Pueden realizarme preguntas de forma anonima?</label>
          <input id="link-checkbox" type="checkbox" value="" className="rounded"/>
      </div>
    </div>
  );
}

export default ProfileConfig;

    {/*
    <div className="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">Blog</h1>
        <p className="max-w-screen-sm text-lg text-gray-600 sm:text-2xl">We write about tips, best tools, and resources to create and sell interactive online programming courses.</p>
        <form className="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"><input type="email" required="" className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="you@website.com" value="" /><button type="submit" className="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max">Subscribe</button></form>
      </div>
    </div>  */}
