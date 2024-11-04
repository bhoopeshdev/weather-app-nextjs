export function getWeatherIconFromCurrent(current) {
    if(current.is_day === 1) {
      if(current.condition.text.includes('rain')) {
        if(current.condition.text.includes('slight') || current.condition.text.includes('light') || current.condition.text.includes('patchy')) {
          return 'images/day/slight_rain.png'
        } else if(current.condition.text.includes('heavy') || current.condition.text.includes('showers') || current.condition.text.includes('thunder')){
          return 'images/day/rain-thunder.png'
        }
        return 'images/day/rain.png'
      } else if(current.condition.text.includes('snow')) {
        return 'images/day/snow.png'
      } else if(current.condition.text.includes('cloud') || current.condition.text.includes('cloudy')) {
        return 'images/day/cloud_sunny.png'
      }
      return 'images/day/sunny.png'
    } else {
      if(current.condition.text.includes('rain')) {
        if(current.condition.text.includes('slight') || current.condition.text.includes('light') || current.condition.text.includes('patchy')) {
          return 'images/night/slight_rain.png'
        } else if(current.condition.text.includes('heavy') || current.condition.text.includes('showers') || current.condition.text.includes('thunder')){
          return 'images/night/rain-thunder.png'
        }
        return 'images/night/rain.png'
      } else if(current.condition.text.includes('snow')) {
        return 'images/night/snow.png'
      } else if(current.condition.text.includes('cloud')) {
        return 'images/night/cloudy_moon.png'
      }
      return 'images/night/moon.png'
    }
  }

  export function getWeatherIconFromStatusText(text) {
    if(text.includes('rain')) {
      if(text.includes('slight') || text.includes('light') || text.includes('patchy')) {
        return 'images/day/slight_rain.png'
      } else if(text.includes('heavy') || text.includes('showers') || text.includes('thunder')){
        return 'images/day/rain-thunder.png'
      }
      return 'images/day/rain.png'
    } else if(text.includes('snow')) {
      return 'images/day/snow.png'
    } else if(text.includes('cloud') || text.includes('cloudy')) {
      return 'images/day/cloud_sunny.png'
    }
  }

export function formatTo12HourTime(dateTimeString) {
    // Convert the 'YYYY-MM-DD HH:mm' string to a Date object
    const date = new Date(dateTimeString.replace(" ", "T")); // Replace space with 'T' to conform to ISO format

    // Extract hours and minutes
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight case

    // Ensure two-digit minutes
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Return formatted time as 'HH:MM AM/PM'
    return `${hours}:${minutes} ${ampm}`;
}

export function getHumidityStatusText(humidity) {
  if (humidity < 30) {
    return "Dry"; 
  } else if (humidity >= 30 && humidity < 60) {
    return "Comfortable";
  } else if (humidity >= 60 && humidity < 80) {
    return "Little Humid";
  } else {
    return "Very Humid";
  }
}

export function getUVIndexText(uv) {
  if(uv < 2) {
    return "Low";
  } else if (uv >= 2 && uv < 5) {
    return "Moderate";
  } else if (uv >= 5 && uv < 7) {
    return "High";
  }
  return "Very High";
}

   