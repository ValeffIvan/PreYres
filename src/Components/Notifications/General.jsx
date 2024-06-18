const General = () => {
  return (
    <div className='items-center justify-center'>
      <div className="p-5 shadow-md bg-white">
        <div className="w-full items-center justify-between pb-2">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
            <div className="flex flex-col">
              <div className="text-xs text-neutral-500">Hace 14 minutos</div>
              <div className="text-sm text-slate-700">A Juan Gomez <strong>le gustó</strong>  tu pregunta a Esperanza Gomez</div>
            </div>               
          </div>
        </div>
      </div>
      <hr/>
      {/***************************/}
      <div className="p-5 shadow-md bg-white">
        <div className="w-full items-center justify-between pb-2">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
            <div className="flex flex-col">
              <div className="text-xs text-neutral-500">Hace 14 minutos</div>
              <div className="text-sm text-slate-700">A Juan Gomez <strong>le gustó</strong>  tu pregunta a Esperanza Gomez</div>
            </div>               
          </div>
        </div>
      </div>
    </div>
      
   
  );
};

export default General;
