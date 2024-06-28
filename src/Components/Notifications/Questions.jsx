import { useState } from "react";
import CreatePost from "../Home/CreatePost";

const Questions = () => {
  const [isAnswer, setIsAnswer] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
      <div className="p-5">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
            <div className="text-lg font-bold text-slate-700">Joe Smith</div>
            <div className="text-xs text-neutral-500">2 hours ago</div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="text-xl font-bold mb-3">¿Qué opinas sobre la nueva película que salió esta semana?</div>
        </div>

        {!isAnswer ? (
          <div className="flex justify-center">
            <div className="flex items-center space-x-3">
              <button
                className="flex cursor-pointer items-center transition hover:text-white bg-green-500 hover:bg-green-700 rounded-full px-5 py-2 text-lg text-white"
                onClick={() => setIsAnswer(true)}
              >
                Responder
              </button>
              <button className="flex cursor-pointer items-center transition hover:text-white bg-red-500 hover:bg-red-700 rounded-full px-5 py-2 text-lg text-white">
                Eliminar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <CreatePost />
            <div className="flex justify-end mt-2">
              <button
                className="cursor-pointer transition hover:text-white bg-red-500 hover:bg-red-700 rounded-full px-5 py-2 text-ms text-white"
                onClick={() => setIsAnswer(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Questions;
