import { useState } from "react";
import CreatePost from "../Home/CreatePost";

const Questions = () => {
  const [isAnswer, setIsAnswer] = useState(false);

  return (
    <>
      <div className='items-center justify-center'>  
        <div className="p-5 shadow-md bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
              <div className="text-lg font-bold text-slate-700">Joe Smith</div>
              <div className="text-xs text-neutral-500">2 hours ago</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">¿Qué opinas sobre la nueva película que salió esta semana?</div>
          </div>

          {isAnswer === false? (
          <div className="flex justify-center"> 
            <div className="flex items-center  text-slate-500 text-center">
              <button className="flex cursor-pointer items-center transition hover:text-white bg-green-500 hover:bg-green-700 mr-5 rounded-full p-3 text-lg text-white" onClick={() => setIsAnswer(true)}>
                Responder
              </button>
              <button className="flex cursor-pointer items-center transition hover:text-white bg-red-500 hover:bg-red-700  rounded-full p-3 text-lg text-white">
                Eliminar
              </button>
            </div>
          </div>
          ) : (
            <div>
              <CreatePost/>
              <div className="flex justify-end mt-2"> 
                <button className="cursor-pointer transition hover:text-white bg-red-500 hover:bg-red-700 rounded-full p-3 text-ms text-white " onClick={()=>setIsAnswer(false)}>
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </div>
        <hr/>
      </div>
    </>
  )
}

export default Questions;