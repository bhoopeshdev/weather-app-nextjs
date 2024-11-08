import {getHumidityStatusText, getUVIndexText} from '../../../utils/weatherUtils';
import './styles/subbar.css';

const SubBar = ({dayData}) => {
  
    return (
        <div className="h-60 flex flex-row overscroll-auto overflow-auto">
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-secondary h-full rounded-3xl flex flex-col justify-between entry-animate" >
            <p className="text-sm font-bold ">Humidity</p>
            <p className='text-7xl font-bold '>{dayData.avghumidity}<span className="percentage-sub">%</span></p>
            <p className='text-sm '>{getHumidityStatusText(dayData.avghumidity)}</p>
          </div>
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-secondary h-full rounded-3xl flex flex-col justify-between entry-animate" >
            <p className="text-sm font-bold ">Max Wind Speed</p>
            <div className='flex flex-row justify-between'>
              <p className='text-7xl font-bold '>{dayData.maxwind_kph}</p>
            </div>
            <p className='text-sm '>In Kph</p>
          </div>
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-secondary h-full rounded-3xl flex flex-col justify-between entry-animate" >
            <p className="text-sm font-bold ">Avg Visibility</p>
            <div className='flex flex-row justify-between'>
              <p className='text-7xl font-bold '>{dayData.avgvis_km}</p>
            </div>
            <p className='text-sm '>In km</p>
          </div>
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-secondary h-full rounded-3xl flex flex-col justify-between entry-animate" >
            <p className="text-sm font-bold ">UV Index</p>
            <div className='flex flex-row justify-between'>
              <p className='text-7xl font-bold '>{dayData.uv}</p>
            </div>
            <p className='text-sm '>{getUVIndexText(dayData.uv)}</p>
          </div>
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-secondary h-full rounded-3xl flex flex-col justify-between entry-animate" >
            <p className="text-sm font-bold ">Precipitation</p>
            <div className='flex flex-row justify-between'>
              <p className='text-7xl font-bold '>{dayData.totalprecip_in}</p>
            </div>
            <p className='text-sm '>in inches</p>
          </div>
      </div>
    );
};  

export default SubBar;