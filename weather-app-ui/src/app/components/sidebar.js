import './styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-1/4 text-white justify-between align-center">
      <div className="flex items-center justify-center h-20 border-b-2">
        <p className="text-2xl font-bold">My Weather App</p>
      </div>
      <div className="flex flex-col items-center justify-center h-16">
      <img src="/images/cloud_n_sunny.png" alt="sun" className="w-48 h-48" />
        <p className='text-7xl font-bold degree-symbol'>25</p>
        <p className='text-lg font-bold mt-4 w-48'>Partial Cloud</p>
      </div>
      <div className="flex items-center justify-center h-16 border-t-2">
        <span className="text-sm">© 2024 My Weather App</span>
      </div>
    </div>
  );
};

export default Sidebar;