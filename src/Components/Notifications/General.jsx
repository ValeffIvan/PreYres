const General = () => {
  return (
    <div className='items-center justify-center'>
      <button className="p-5 shadow-md bg-white w-full hover:bg-gray-100 active:bg-gray-200 pb-7">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
          <div className="flex flex-col">
            <div className="text-xs text-left text-neutral-500">Hace 14 minutos</div>
            <div className="text-sm text-slate-700">A Juan Gomez <strong>le gustó</strong>  tu pregunta a Esperanza Gomez</div>
          </div>               
        </div>
      </button>
      <hr/>
      <button className="p-5 shadow-md bg-white w-full hover:bg-gray-100 active:bg-gray-200 pb-7">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
          <div className="flex flex-col">
            <div className="text-xs text-left text-neutral-500">Hace 14 minutos</div>
            <div className="text-sm text-slate-700">A Juan Gomez <strong>le gustó</strong>  tu pregunta a Esperanza Gomez</div>
          </div>               
        </div>
      </button>
    </div>
  );
};

export default General;