import CreatePost from "../Home/CreatePost";
import Post from "../Home/Post";
import { FaArrowLeft } from 'react-icons/fa';

const Publication= () => {
  return (
    <>
    <div className="sm:ml-96 sm:mr-64 justify-center  p-4">
      <div className="items-center justify-center xl:pr-24 xl:pl-24 l:pl-10 mt-5">
        <div className="flex items-center">
          <button className="flex items-center text-gray-900" onClick={() => setRegistered(3)}>
            <FaArrowLeft className="mr-2" /> Volver
          </button>
        </div>
        <br />
        <button className='items-center justify-center w-full'>
          <div className="p-5 shadow-md bg-white ">
            <div className="flex w-full justify-between pb-3">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                <div className="text-lg font-bold text-slate-700">Pregunta de Joe Smith</div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-xs text-neutral-500">2 hours ago</div>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="mb-3 text-xl text-left font-bold">¿Qué opinas sobre la nueva película que salió esta semana?</div>
            </div>
            <hr/>
            <div>
            <div className="mt-4 mb-6">
              <div className="mb-3 text-xl text-left font-bold text-gray-400">Muy Buena</div>
            </div>
            <div className="flex w-full justify-between pb-3">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                <div className="text-lg  text-gray-400">Respuesta de Joe Smith</div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-xs  text-gray-400">2 hours ago</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span>4</span>
              </div>
            </div>
          </div>
          <br/>
          <CreatePost/>
        </div>
       </button>
      
      </div>
    </div>
    
    <div className="sm:ml-96 sm:mr-64 justify-center  p-4 ">
   
    <div className="flex cursor-pointer items-center transition hover:text-slate-600">
  <h1 className="text-black pl-24 flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
    <span className="ml-2">COMENTARIOS</span>
  </h1>
</div>
      <div className="items-center justify-center xl:pr-24 xl:pl-24 l:pl-10 mt-5 ">
    <button className='items-center justify-center w-full bg-gray-200'>  
      <div className="p-5 shadow-md  ">
        <div className="flex w-full justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
            <div className="text-lg font-bold text-slate-700">Joe Smith</div>
          </div>
          <div className="flex items-center space-x-8">
            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">Modificar</button>
            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">Eliminar</button>
            <div className="text-xs text-neutral-500">2 hours ago</div>
            
          </div>

        </div>

        <div className="mt-4 mb-6">
            <div className="mb-3 text-xl text-left font-bold">¿Qué opinas sobre la nueva película que salió esta semana?</div>
        </div>

        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span>125</span>
              </div>
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
    <hr/>
    </div>
    
    <div className="items-center justify-center xl:pr-24 xl:pl-24 l:pl-10  ">
    <button className='items-center justify-center w-full bg-gray-200'>  
      <div className="p-5 shadow-md  ">
        <div className="flex w-full justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
            <div className="text-lg font-bold text-slate-700">Joe Smith</div>
          </div>
          <div className="flex items-center space-x-8">
            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">Modificar</button>
            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">Eliminar</button>
            <div className="text-xs text-neutral-500">2 hours ago</div>
            
          </div>

        </div>

        <div className="mt-4 mb-6">
            <div className="mb-3 text-xl text-left font-bold">¿Qué opinas sobre la nueva película que salió esta semana?</div>
        </div>

        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span>125</span>
              </div>
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
    </div>
    </div>
    </>
  );
}

export default Publication;

