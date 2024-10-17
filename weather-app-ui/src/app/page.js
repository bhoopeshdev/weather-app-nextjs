import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div className="flex bg-day">
      <Sidebar />
      <div className="bg-[#e8edf4] flex-grow p-6 text-black rounded-3xl rounded-tr-none rounded-br-none">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ml-4">
            <h1 className="flex flex-col text-xl font-bold">Welcome Guest</h1>
            <p className="flex flex-col text-sm">What weather are you looking for?</p>
          </div>
          <img src="/images/menu.png" alt="menu" className="w-10 h-10 rounded-full m-4"/>
        </div>
        <div className="h-80 bg-white rounded-3xl m-4"></div>
        <h1 className="ml-4 my-8">More details of today's weather</h1>
      </div>
    </div>
  );
}