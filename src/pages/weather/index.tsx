import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TutorialService from '../api';

const Weather = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['getWeather'],
    queryFn: TutorialService.getWeather,
  });

  // const [weather, setWeather] = useState(data && data);
  console.log('dta', data);

  const weatherIcon = (text: string) => {
    switch (text) {
      case 'clear sky':
        return (
          <picture>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="날씨" />
          </picture>
        )
      case 'scattered clouds':
        return (
          <picture>
            <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="날씨" />
          </picture>
        )
      default:
        break;
    }
  }

  return (
    <div>
      날씨
      {
        isSuccess &&
        <>
          <div>{(data.main.temp - 273.15).toFixed(0)}℃</div>
          <picture>
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="날씨" />
          </picture>
        </>
      }
    </div>
  )
}

export default Weather