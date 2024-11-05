import { getWeatherIconFromCurrent,formatTo12HourTime } from "../../../utils/weatherUtils";

const MainBar = ({forecast}) => {

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

    return (
        <div className="h-80 flex flex-col bg-secondary rounded-3xl">
            <div className="w-full px-8 mt-8 flex flex-row gap-4">
                <p className="text-xl font-bold">Today</p>
            </div>
            <div className="flex-1 flex flex-row justify-start mx-4 mb-2 gap-4 overflow-auto">
                {forecast.forecastday[0].hour.map((data, index) => {
                    return (
                        <div className="h-full flex flex-col items-center justify-center w-36 shrink-0" key={index}>
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