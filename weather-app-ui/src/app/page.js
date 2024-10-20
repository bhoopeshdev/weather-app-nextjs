import MainBar from "./components/mainbar";
import Sidebar from "./components/sidebar";
import SubBar from "./components/subbar";
import RightSideComp from "./components/rightsidecomp";

export default function Home() {
  return (
    <div className="flex bg-day">
      <Sidebar />
      <div className="bg-[#e8edf4] flex-grow p-6 text-black rounded-3xl rounded-tr-none rounded-br-none">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ml-4">
            <p className="flex flex-col text-xl font-bold">Welcome Guest</p>
            <p className="flex flex-col text-sm">What weather are you looking for?</p>
          </div>
          <img src="/images/menu.png" alt="menu" className="w-10 h-10 rounded-full m-4"/>
        </div>
        <div className="grid grid grid-cols-6 gap-4">
          <div className="col-span-4 flex flex-col rounded-3xl h-full">
            <MainBar />
            <p className="ml-4 my-8">More details of today's weather</p>
            <SubBar />
          </div>
          <RightSideComp />
        </div>
        
      </div>
    </div>
  );
}