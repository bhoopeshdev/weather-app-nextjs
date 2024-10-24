import './styles/sidebar.css';

const Sidebar = (data) => {

  if(data.current) {
    console.log('Weather Data:', data.current);
  }

  return (
    <div className="flex flex-col h-screen w-1/4 min-w-80 text-white justify-between align-center">
      <div className="flex items-center justify-center h-20 border-b-2">
        <p className="text-2xl font-bold">My Weather App</p>
      </div>
      <div className="flex flex-col items-center justify-center h-16">
        <img src="/images/cloud_n_sunny.png" alt="sun" className="w-48 h-48" />
        <p className='text-7xl font-bold degree-symbol'>{data.current != null ? data.current.temp_c : "--"}</p>
        <p className='text-lg font-bold mt-4 w-48 text-center'>{data.current != null ? data.current.condition.text : "--"}</p>
      </div>
      <div className="flex items-center justify-center h-16 border-t-2">
        <span className="text-sm">© 2024 My Weather App</span>
      </div>
    </div>
  );
};

export default Sidebar;