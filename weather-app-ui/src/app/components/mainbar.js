"use client"
import { useEffect,useState } from "react"

const MainBar = (data) => {
    // const todayData = [
    //     {
    //         id : 1,
    //         status: "Sunny",
    //         degree: 25,
    //         icon: "/images/sunny-.png"
    //     },
    //     {
    //         id : 2,
    //         status: "Partial Cloud",
    //         degree: 23,
    //         icon: "/images/cloud_n_sunny.png"
    //     },
    //     {
    //         id : 3,
    //         status: "Rainy",
    //         degree: 21,
    //         icon: "/images/rainy.png"
    //     },
    //     {
    //         id : 4,
    //         status: "Thunderstorm",
    //         degree: 19,
    //         icon: "/images/thunderstorm.png"
    //     },
    //     {
    //         id : 5,
    //         status: "Thunderstorm",
    //         degree: 19,
    //         icon: "/images/thunderstorm.png"
    //     },
    //     {
    //         id : 6,
    //         status: "Thunderstorm",
    //         degree: 19,
    //         icon: "/images/thunderstorm.png"
    //     },
    //     {
    //         id : 7,
    //         status: "Thunderstorm",
    //         degree: 19,
    //         icon: "/images/thunderstorm.png"
    //     },
    //     {
    //         id : 8,
    //         status: "Thunderstorm",
    //         degree: 19,
    //         icon: "/images/thunderstorm.png"
    //     },
    //     {
    //         id : 9,
    //         status: "Rainy",
    //         degree: 21,
    //         icon: "/images/rainy.png"
    //     }
    // ]

    const [forecastData, setForecastData] = useState([])

    useEffect(() => {
        if (data.forecast) {
            setForecastData(data.forecast.forecastday[0].hour)
        }
    }, [data.forecast])

    if (!forecastData || forecastData.length === 0) {
        return <div className="h-80 flex flex-col bg-white rounded-3xl text-center justify-center"> <p>Loading data...</p></div>  // Handle loading or no data case
    }

    return (
        <div className="h-80 flex flex-col bg-white rounded-3xl">
            <div className="w-full px-8 mt-8">
                <p className="text-2xl font-bold text-gray-700">Today</p>
            </div>
            <div className="w-full flex-1 flex flex-row justify-start px-4 mb-2 gap-4 overscroll-auto overflow-auto">
                {forecastData.map((data, index) => {
                    return (
                        <></>
                        // <div className="h-full flex flex-col items-center justify-center w-36 shrink-0" key={index}>
                        //     <p className="mb-2 text-md">{data.status}</p>
                        //     <img src={data.icon} alt="sunny" className="w-24 h-24"/>
                        //     <p className="text-md text-gray-700 degree-symbol">{data.degree}</p>
                        // </div>
                    )
                })}
            </div>
         </div>
    )
}    

export default MainBar;