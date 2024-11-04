import {getHumidityStatusText, getUVIndexText} from '../../../utils/weatherUtils';
import './styles/subbar.css';

const SubBar = ({dayData}) => {
  
    return (
        <div className="h-60 flex flex-row overscroll-auto overflow-auto">
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-white h-full rounded-3xl flex flex-col justify-between">
            <p className="text-sm font-bold text-slate-400">Humidity</p>
            <p className='text-7xl font-bold text-slate-700'>{dayData.avghumidity}<span class="percentage-sub">%</span></p>
            <p className='text-sm text-slate-400'>{getHumidityStatusText(dayData.avghumidity)}</p>
          </div>
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-white h-full rounded-3xl flex flex-col justify-between">
            <p className="text-sm font-bold text-slate-400">Max Wind Speed</p>
            <div className='flex flex-row justify-between'>
              <p className='text-7xl font-bold text-slate-700'>{dayData.maxwind_kph}</p>
            </div>
            <p className='text-sm text-slate-400'>In Kph</p>
          </div>
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-white h-full rounded-3xl flex flex-col justify-between">
            <p className="text-sm font-bold text-slate-400">Avg Visibility</p>
            <div className='flex flex-row justify-between'>
              <p className='text-7xl font-bold text-slate-700'>{dayData.avgvis_km}</p>
            </div>
            <p className='text-sm text-slate-400'>In km</p>
          </div>
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-white h-full rounded-3xl flex flex-col justify-between">
            <p className="text-sm font-bold text-slate-400">UV Index</p>
            <div className='flex flex-row justify-between'>
              <p className='text-7xl font-bold text-slate-700'>{dayData.uv}</p>
            </div>
            <p className='text-sm text-slate-400'>{getUVIndexText(dayData.uv)}</p>
          </div>
          <div className="col-span-1 p-8 mr-4 min-w-60 bg-white h-full rounded-3xl flex flex-col justify-between">
            <p className="text-sm font-bold text-slate-400">Precipitation</p>
            <div className='flex flex-row justify-between'>
              <p className='text-7xl font-bold text-slate-700'>{dayData.totalprecip_in}</p>
            </div>
            <p className='text-sm text-slate-400'>in inches</p>
          </div>
      </div>
    );
};  

export default SubBar;