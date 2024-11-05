import './styles/sidebar.css';
import { getWeatherIconFromCurrent } from '../../../utils/weatherUtils';
import ThemeToggle from './ThemeToggle';

const Sidebar = ({current}) => {

  const currentDataKeys = [
    {
      'key' : 'feelslike_c',
      'label' : 'feels like'
    },
    {
      'key' : 'humidity',
      'label' : 'humidity'
    },
    {
      'key' : 'pressure_in',
      'label' : 'pressure'
    },
    {
      'key' : 'wind_kph',
      'label' : 'wind speed'
    },
    {
      'key' : 'last_updated',
      'label' : 'last updated'
    }
  ]

  return (
    <div className="flex flex-col h-screen w-1/4 min-w-80 justify-between align-center bg-gradient text-white">
      <div className="flex flex-row items-center justify-between h-20 border-b-2">
        <p className="text-2xl font-bold mx-2">My Weather App</p>
        <ThemeToggle />
      </div>
      
      <div className="flex flex-col items-center justify-center h-16">
        <img src={getWeatherIconFromCurrent(current)} alt="" className="w-48 h-48" />
        <p className='text-7xl font-bold degree-symbol'>{current ? current.temp_c : "--"}</p>
        <p className='text-lg font-bold mt-4 w-48 text-center'>{current != null ? current.condition.text : "--"}</p>
        {current ? (
          <>
            <div className='w-11/12 h-auto p-2 mx-4 mt-4 rounded-3xl bg-white opacity-30'>
              {currentDataKeys.map((keyMap, index) => (
                <div key={index} className='flex flex-row justify-between gap-8 p-2'>
                  <p className='text-sm text-black capitalize'>{keyMap.label}</p>
                  <p className='text-sm text-black'>
                    {current[keyMap.key] !== undefined ? current[keyMap.key] : '--'}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center justify-center h-16 border-t-2">
        <span className="text-sm">© 2024 My Weather App</span>
      </div>
    </div>
  );
};

export default Sidebar;