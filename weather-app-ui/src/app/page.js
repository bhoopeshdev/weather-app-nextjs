"use client"
import MainBar from "./components/mainbar";
import Sidebar from "./components/sidebar";
import SubBar from "./components/subbar";
import RightSideComp from "./components/rightsidecomp";
import AuthModal from "./components/AuthModal";
import axios from "axios";  
import { useState,useEffect,useRef } from "react";


const currentCity = "Bangalore"
const currentDataUrl = "https://api.weatherapi.com/v1/current.json"


const fetchCurrentData = async () => {
  try {
    let response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
      params: {
        q: currentCity,
        days: 3,
        key: '24a68752bad649c7be3175829241710'
      },
      headers: {
        'Accept': 'application/json'
      }
    });

    let data = await response.data
    console.log('Weather Data:', data);
    return data
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

export default function Home() {

  const [weatherData, setWeatherData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null); // Simulate a user state

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAvatarOnClick = () => {
    if(!user) {
      setIsModalOpen(true);
      return;
    }
    toggleDropdown();
  }

  // Toggle Modal open/close
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    toggleDropdown(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      let data = await fetchCurrentData(); // Wait for data to be fetched
      setWeatherData(data); // Set the fetched data to state
    };
    getData();
  }, []); // Empty dependency array to run once on mount

  if (!weatherData) {
    return <p className="text-2xl font-bold flex flex-col text-center justify-center">Loading...</p>; // Show loading state while data is being fetched
  }

  return (
    <div className="flex bg-theme-gradient">
      <Sidebar current={weatherData.current}/>
      <div className="bg-primary h-screen box-border flex-grow p-4 text-black rounded-3xl rounded-tr-none rounded-br-none text-primary">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col ml-4">
            <p className="flex flex-col text-xl font-bold">Welcome</p>
            <p className="flex flex-col text-sm">What weather are you looking for ?</p>
          </div>
          <div className="relative" ref={dropdownRef}>
            <img src="/images/profile_pic.png" alt="menu" className="w-10 h-10 rounded-full m-4 cursor-pointer" onClick={handleAvatarOnClick}/>
            {isOpen && (
              <div className="absolute right-0 w-48 bg-secondary text-primary rounded-lg shadow-xl z-10 border border-gray">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-active">
                    <a className="block" onClick={() => toggleModal()}>Profile</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-active">
                    <a className="block" onClick={() => handleLogout()}>Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <AuthModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={user}
          setUser={setUser}
        />
        <div className="grid grid grid-cols-6 gap-4">
          <div className="col-span-4 flex flex-col rounded-3xl h-full">
            <MainBar current={weatherData.current} forecast={weatherData.forecast}/>
            <p className="ml-4 my-4">More details of today's weather</p>
            <SubBar dayData={weatherData.forecast.forecastday[0].day}/>
          </div>
          <RightSideComp forecastday={weatherData.forecast.forecastday}/>
        </div>
        
      </div>
    </div>
  );
}