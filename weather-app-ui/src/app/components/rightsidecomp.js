import { getWeatherIconFromStatusText } from "../../../utils/weatherUtils";
import SunriseAndSunset from "./SunriseAndSunset";

const RightSideComp = ({forecastday}) => {

    return (
        <div className="col-span-2 h-full flex flex-col">
            <div className="p-6 bg-secondary rounded-3xl basis-3/5">
                <p> 3 Day forecast</p>
                <div className="flex flex-col justify-evenly h-full divide-y divide-gray-200">
                    {forecastday.map((data, index) => { 
                        return <div className="flex flex-row items-center justify-between pt-2" key={index}>
                            <div className="flex flex-col gap-2 items-center basis-1/3">
                                <img src={getWeatherIconFromStatusText(data.day.condition.text)} className="w-10 h-10" alt=""></img>
                                <p className="text-xs">{data.day.condition.text}</p>
                            </div>
                            <div className="flex flex-col justify-between items-center gap-2 basis-1/3">
                                <p className="text-xs">min {data.day.mintemp_c}</p>
                                <p className="text-xs">max {data.day.maxtemp_c}</p>
                            </div>
                            <p className="text-xs basis-1/3">{data.date}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className="mt-4 p-6 bg-secondary rounded-3xl basis-2/5">
                <SunriseAndSunset data={forecastday[0].astro}/>
            </div>
        </div>
    );
}

export default RightSideComp;