const General = () => {
  const notifications = [
    {
      id: 1,
      time: "Hace 14 minutos",
      userAction: "A Juan Perez",
      action: "le gustó",
      target: "tu respuesta a Maria Lopez",
      avatar: "https://i.pravatar.cc/32?img=1"
    },
    {
      id: 2,
      time: "Hace 1 hora",
      userAction: "A Ana Martinez",
      action: "le gustó",
      target: "tu respuesta a Carlos Garcia",
      avatar: "https://i.pravatar.cc/32?img=2"
    }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {notifications.map((notification, index) => (
        <div key={notification.id} className={`${index < notifications.length - 1 ? 'border-b' : ''} border-gray-200`}>
          <button className="w-full flex items-center space-x-3 hover:bg-gray-100 active:bg-gray-200 p-5">
            <div className="h-8 w-8 rounded-full" style={{ backgroundImage: `url(${notification.avatar})`, backgroundSize: 'cover' }}></div>
            <div className="flex flex-col">
              <div className="text-xs text-left text-neutral-500">{notification.time}</div>
              <div className="text-sm text-left text-slate-700">{notification.userAction} <strong>{notification.action}</strong> {notification.target}</div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default General;
