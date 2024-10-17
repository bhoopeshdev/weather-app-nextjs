import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-80 text-white justify-between align-center">
      <div className="flex items-center justify-center h-20">
        <h1 className="text-2xl font-bold">My App</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-16">
        <p className='text-7xl font-bold'>25</p>
        <p className='text-lg font-bold'>C</p>
        <p className='text-sm font-bold'>Sunny</p>
        <img src="/images/sunny.png" alt="sun" className="w-36 h-36" />
      </div>
      <div className="flex items-center justify-center h-16">
        <span className="text-sm">© 2024 My App</span>
      </div>
    </div>
  );
};

export default Sidebar;