const MainBar = () => {
    const todayData = [
        {
            status: "Sunny",
            degree: 25,
            icon: "/images/sunny.png"
        },
        {
            status: "Partial Cloud",
            degree: 23,
            icon: "/images/cloud_n_sunny.png"
        },
        {
            status: "Rainy",
            degree: 21,
            icon: "/images/rainy.png"
        },
        {
            status: "Thunderstorm",
            degree: 19,
            icon: "/images/thunderstorm.png"
        },
        {
            status: "Thunderstorm",
            degree: 19,
            icon: "/images/thunderstorm.png"
        },
        {
            status: "Thunderstorm",
            degree: 19,
            icon: "/images/thunderstorm.png"
        },
        {
            status: "Thunderstorm",
            degree: 19,
            icon: "/images/thunderstorm.png"
        },
        {
            status: "Thunderstorm",
            degree: 19,
            icon: "/images/thunderstorm.png"
        },
        {
            status: "Rainy",
            degree: 21,
            icon: "/images/rainy.png"
        }
    ]
    return (
        <div className="h-80 flex flex-col bg-white rounded-3xl">
            <div className="w-full px-8 mt-8">
                <p className="text-2xl font-bold text-gray-700">Today</p>
            </div>
            <div className="w-full flex-1 flex flex-row justify-start px-4 mb-2 gap-4 overscroll-auto overflow-auto">
                {todayData.map((data, index) => {
                    return (
                        <div className="h-full flex flex-col items-center justify-center w-36 shrink-0">
                            <p className="mb-2 text-md">{data.status}</p>
                            <img src={data.icon} alt="sunny" className="w-24 h-24"/>
                            <p className="text-md text-gray-700 degree-symbol">{data.degree}</p>
                        </div>
                    )
                })}
            </div>
         </div>
    )
}    

export default MainBar;