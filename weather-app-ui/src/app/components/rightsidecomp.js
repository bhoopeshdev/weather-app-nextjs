import { getWeatherIconFromStatusText } from "../../../utils/weatherUtils";

const RightSideComp = ({forecastday}) => {

    return (
        <div className="col-span-2 h-full flex flex-col">
            <div className="p-6 bg-white rounded-3xl basis-3/5">
                <p> 3 Day forecast</p>
                <div className="flex flex-col justify-evenly h-full">
                    {forecastday.map((data, index) => { 
                        return <div className="flex flex-row items-center justify-between" key={index}>
                            <div className="flex flex-col gap-2 items-center">
                                <img src={getWeatherIconFromStatusText(data.day.condition.text)} className="w-10 h-10" alt=""></img>
                                <p className="text-xs">{data.day.condition.text}</p>
                            </div>
                            <div className="flex flex-col justify-between items-center gap-2">
                                <p className="text-xs">min {data.day.mintemp_c}</p>
                                <p className="text-xs">max {data.day.maxtemp_c}</p>
                            </div>
                            <p className="text-xs">{data.date}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className="mt-4 p-6 bg-white rounded-3xl basis-2/5">
                <p className="text-md font-bold text-slate-400">Sunrise and Sunset</p>
                <div className="h-40 mt-4 mx-8 border-t-8 border-dashed border-stone-600 rounded-t-full"></div>
                <div className="flex flex-row w-full justify-between">
                    <p className="text-sm font-bold text-slate-600">Sunrise {forecastday[0].astro.sunrise}</p>
                    <p className="text-sm font-bold text-slate-600">Sunset {forecastday[0].astro.sunset}</p>
                </div>
            </div>
        </div>
    );
}

export default RightSideComp;