"use client"
import { useEffect, useState } from "react";

const SunriseAndSunset = ({data}) => {

    const [progressBarSunWidth, setProgressBarSunWidth] = useState(0)
    const [progressBarMoonWidth, setProgressBarMoonWidth] = useState(0)

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
    const getTimeDifference = (hour1,minutes1,hour2,minutes2) => {
        const time1 = hour1 * 60 + minutes1;
        const time2 = hour2 * 60 + minutes2;
        const difference = time2 - time1;
        return difference
    }

    useEffect(() => {
        const setProgressBar = () => {
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();
            
            const sunrise = parseTime(data.sunrise);
            const sunset = parseTime(data.sunset); 
            setProgressBarSunWidth((
                getTimeDifference(sunrise.hours,sunrise.minutes,currentHour,currentMinute) / 
                getTimeDifference(sunrise.hours,sunrise.minutes,sunset.hours,sunset.minutes)
            ) * 100.0)

            const moonrise = parseTime(data.moonrise);
            const moonset = parseTime(data.moonset);
            setProgressBarMoonWidth((
                getTimeDifference(moonrise.hours,moonrise.minutes,currentHour,currentMinute) / 
                getTimeDifference(moonrise.hours,moonrise.minutes,moonset.hours,moonset.minutes)
            ) * 100.0)
        }
        setProgressBar();
    }, []);


    return <div className="h-full flex flex-col justify-evenly">
        <div className="flex flex-col justify-center">
            <div className="w-full bg-gray-200 rounded-full mt-4 h-2.5 items-center dark:bg-gray-700 flex flex-row">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{'width': `${progressBarSunWidth}%`}}></div>
                <div className="bg-secondary rounded-full p-1 border border-orange-600"><img src="/images/day/sun.png" className="h-6 w-6" alt="" /></div>
            </div>
            <div className="mt-4 flex flex-row w-full justify-between">
                <div className="flex flex-row items-center"><img src="/images/day/sunrise.png" className="h-8 w-8" alt=""/><p className="text-xs ">{data.sunrise}</p></div>
                <div className="flex flex-row items-center"><img src="/images/day/sunset.png" className="h-8 w-8" alt=""/><p className="text-xs ">{data.sunset}</p></div>
            </div>
        </div>

        <div className="flex flex-col justify-center">
            <div className="w-full bg-gray-200 rounded-full mt-4 h-2.5 items-center dark:bg-gray-700 flex flex-row">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{'width': `${progressBarMoonWidth}%`}}></div>
                <div className="bg-secondary rounded-full p-1 border border-orange-600"><img src="/images/night/moon.png" className="h-6 w-6" alt="" /></div>
            </div>
            <div className="mt-4 flex flex-row w-full justify-between">
                <div className="flex flex-row items-center"><img src="/images/night/moonrise.png" className="h-8 w-8" alt=""/><p className="text-xs ">{data.moonrise}</p></div>
                <div className="flex flex-row items-center"><img src="/images/night/moonset.png" className="h-8 w-8" alt=""/><p className="text-xs ">{data.moonset}</p></div>
            </div>
        </div>
    </div>
}

export default SunriseAndSunset;