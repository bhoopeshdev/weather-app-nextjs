"use client"
import { useEffect, useState } from "react";

const SunriseAndSunset = ({data}) => {

    const [isDay, setIsDay] = useState(true)

    useEffect(() => {
        const isDayFunc = (data) => {
            const parseTime = (timeStr) => {
              const [time, modifier] = timeStr.split(' ');
              let [hours, minutes] = time.split(':').map(Number);
          
              if (modifier === 'PM' && hours !== 12) {
                hours += 12;
              }
              if (modifier === 'AM' && hours === 12) {
                hours = 0;
              }
          
              return { hours, minutes };
            };
          
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();
          
            const sunrise = parseTime(data.sunrise);
            const sunset = parseTime(data.sunset);
          
            const isAfterSunrise = currentHour > sunrise.hours || (currentHour === sunrise.hours && currentMinute >= sunrise.minutes);
            const isBeforeSunset = currentHour < sunset.hours || (currentHour === sunset.hours && currentMinute < sunset.minutes);
          
            setIsDay(isAfterSunrise && isBeforeSunset);
        };
        isDayFunc(data);
    },[])

    return <>
        <p className="text-md">{isDay ? "Sunrise and Sunset" : "Moonrise and Moonset"}</p>
        <div className="flex flex-col gap-4 h-full justify-center">
            <div className="w-full bg-gray-200 rounded-full mt-4 h-2.5 items-center dark:bg-gray-700 flex flex-row">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{'width': '45%'}}></div>
                <div className="bg-secondary rounded-full p-1 border border-orange-600"><img src={isDay ? "/images/day/sun.png" : "/images/night/moon.png"} className="h-6 w-6" alt="" /></div>
            </div>
            <div className="mt-4 flex flex-row w-full justify-between">
                <div className="flex flex-row items-center"><img src={isDay ? "/images/day/sunrise.png" : "/images/night/moonrise.png"} className="h-8 w-8" alt=""/><p className="text-xs ">{isDay ? data.sunrise : data.moonrise}</p></div>
                <div className="flex flex-row items-center"><img src={isDay ? "/images/day/sunset.png" : "/images/night/moonset.png"} className="h-8 w-8" alt=""/><p className="text-xs ">{isDay ? data.sunset : data.moonset}</p></div>
            </div>
        </div>
    </>
}

export default SunriseAndSunset;