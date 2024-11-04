"use client"
import MainBar from "./components/mainbar";
import Sidebar from "./components/sidebar";
import SubBar from "./components/subbar";
import RightSideComp from "./components/rightsidecomp";
import axios from "axios";  
import { useState,useEffect } from "react";


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
    <div className="flex bg-day">
      <Sidebar current={weatherData.current}/>
      <div className="bg-[#e8edf4] h-screen box-border flex-grow p-4 text-black rounded-3xl rounded-tr-none rounded-br-none">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ml-4">
            <p className="flex flex-col text-xl font-bold">Welcome Guest</p>
            <p className="flex flex-col text-sm">What weather are you looking for?</p>
          </div>
          <img src="/images/menu.png" alt="menu" className="w-10 h-10 rounded-full m-4"/>
        </div>
        <div className="grid grid grid-cols-6 gap-4">
          <div className="col-span-4 flex flex-col rounded-3xl h-full">
            <MainBar forecast={weatherData.forecast}/>
            <p className="ml-4 my-4">More details of today's weather</p>
            <SubBar dayData={weatherData.forecast.forecastday[0].day}/>
          </div>
          <RightSideComp forecastday={weatherData.forecast.forecastday}/>
        </div>
        
      </div>
    </div>
  );
}