"use client"
import {useEffect,useState,useRef} from "react";
import { getWeatherIconFromCurrent,formatTo12HourTime } from "../../../utils/weatherUtils";

const MainBar = ({current, forecast}) => {

    const [hourData, setHourData] = useState([])
    const [activeIndex, setActiveIndex] = useState(null); // To track the active hour index
    const hourRefs = useRef([]); // To store refs to each hourly item

    if (!forecast) {
        return <div className="h-80 flex flex-col bg-white rounded-3xl text-center justify-center"> <p>Loading data...</p></div>  // Handle loading or no data case
    } else {
        // In case there are no future hours (just for a fallback display)
        if (forecast.forecastday[0].hour === 0) {
            return (
                <div className="h-80 flex flex-col bg-white rounded-3xl text-center justify-center">
                <p>No more hourly data available for today.</p>
                </div>
            );
        }
    }

    useEffect(() => {
        let hourDataList = []
        for(let i = 0; i < forecast.forecastday[0].hour.length; i++) {
            let data = {
                time: forecast.forecastday[0].hour[i].time,
                temp_c: forecast.forecastday[0].hour[i].temp_c,
                condition: forecast.forecastday[0].hour[i].condition
            }
            hourDataList = [...hourDataList, data]
        }
        let currentData = {
            time: current.last_updated,
            temp_c: current.temp_c,
            condition: current.condition
        }
        hourDataList = [...hourDataList, currentData]
        
        // Sort the data by time and remove dupliactes
        hourDataList.sort((a, b) => new Date(a.time) - new Date(b.time));
        hourDataList = hourDataList.filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.time === item.time
            ))
        );

        setHourData(hourDataList)

        // Find the index of the closest hour to the current time
        const now = new Date(current.last_updated).getHours();
        const closestIndex = hourDataList.findIndex(data => {
            const hour = new Date(data.time).getHours();
            return hour >= now;
        });
        setActiveIndex(closestIndex);

        // Scroll to the active hour after data is set
        if (closestIndex >= 0 && hourRefs.current[closestIndex]) {
            hourRefs.current[closestIndex].scrollIntoView({ behavior: "smooth", inline: "center" });
        }

    }, [forecast, current])

    return (
        <div className="h-80 flex flex-col bg-secondary rounded-3xl entry-animate">
            <div className="w-full px-8 mt-8 flex flex-row gap-4">
                <p className="text-xl font-bold">Today</p>
            </div>
            <div className="flex-1 flex flex-row justify-start mx-4 mb-2 gap-4 overflow-auto">
                {hourData.map((data, index) => {
                    return (
                        <div
                            ref={el => hourRefs.current[index] = el}
                            key={index}
                            className={`h-full flex flex-col items-center justify-center w-36 shrink-0
                                ${index === activeIndex ? 'bg-active rounded-lg' : ''}`}
                        >
                            <p className="mb-2 text-xs">{data.condition.text}</p>
                            <img src={getWeatherIconFromCurrent(data)} alt="sunny" className="w-20 h-20 mb-2"/>
                            <p className="text-xs">{formatTo12HourTime(data.time)}</p>
                            <p className="text-xs degree-symbol">{data.temp_c}</p>
                        </div>
                    )
                })}
            </div>
         </div>
    )
}    

export default MainBar;