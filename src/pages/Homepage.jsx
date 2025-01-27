import { useState, useEffect } from 'react'
import { mirage } from 'ldrs'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Navigation from '../components/Navigation'
import axios from 'axios'

const Homepage = () => {
    mirage.register();
    const [input, setInput] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";
    const DEFAULT_CITY = "Tacloban";
  
    const start_time = 6;
    const gap_time = 3;
    const end_time = 21
  
    useEffect(() => {
      fetchWeatherData(DEFAULT_CITY);
    }, []);
  
    const fetchWeatherData = async (city) => {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            key: API_KEY,
            q: city,
          },
        });
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setWeatherData(null);
        setError("City not found. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    const handleSearch = () => {
      if (input.trim()) {
        fetchWeatherData(input);
      } else {
        setError("Please enter a city name.");
      }
    };
  
    return (
      <>
        <div className='h-full max-w-dvw bg-slate-800 dark:bg-slate-100 p-4 duration-300 transition-all overflow-hidden'> 
          <Navigation />
  
          <div className='flex justify-center'>
            <div className='flex items-center w-full sm:w-2/4 lg:w-1/4 gap-2 border border-slate-400 py-2 px-3 rounded-md'>
                <input 
                  type="text" 
                  className='w-full py-px px-3 rounded-md text-white placeholder-white focus:outline-none dark:text-slate-800 dark:placeholder-slate-800' 
                  placeholder='Search for cities'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button 
                className='p-px rounded-md'
                  onClick={handleSearch}
                >
                  <MagnifyingGlassIcon className='h-6 text-white dark:text-slate-800' />
                </button>
            </div>
          </div>

          {loading ? (
            <div className='h-screen flex items-center justify-center'>
              <l-mirage
                size="80"
                stroke="5"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="2" 
                color="#11FF00" 
                ></l-mirage>
            </div>
          ): (
            weatherData && (
              <div className='mt-12 grid grid-cols-3 justify-items-stretch gap-2'>
                <div className='col-span-3 md:col-span-2 md:p-6'>

                  <div className='flex md:grid md:grid-cols-2 justify-content-between' data-aos='fade-right' data-aos-duration='800' data-aos-delay='300'>
                      <div className='flex items-center justify-between md:grid content-start w-full'>
                        <p className='text-2xl md:text-3xl font-bold text-slate-100 dark:text-slate-800'>{weatherData.location.name}, {weatherData.location.country}</p>
                        <span className='text-md text-slate-300 dark:text-slate-600 mt-px hidden md:block'>Humidity: {weatherData.current.humidity}%</span>
                        <p className='text-3xl md:text-5xl font-bold text-slate-100 dark:text-slate-800 md:mt-10'>{weatherData.current.temp_c}°</p>
                      </div>
                          {console.log(weatherData)}
                          <img src={`https:${weatherData.current.condition.icon}`} className="h-36 justify-self-center hidden md:block" alt="Weather Icon" />
                  </div>

                  <div 
                    className='rounded-xl mt-6 bg-slate-600 dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4 min-w-[270px] overflow-y-scroll md:overflow-hidden'
                    data-aos='fade-up' data-aos-duration='800' data-aos-delay='500'
                  >
                    <h2 className='text-slate-300 font-bold text-xs md:text-md'>TODAY'S FORECAST</h2>
                      {/* {console.log(weatherData.forecast.forecastday[0].hour[0].temp_c)} */}
                      {weatherData.forecast.forecastday.map((item, index) => (
                        <div className='grid md:grid-cols-6 grid-cols-3 mt-4' key={index}>
                          {item.hour.filter((_, index) => index >= start_time && index <= end_time && (index - start_time) % gap_time === 0).map((data, indx) => (
                            <div className={`border-slate-400 grid grid-row-3 justify-items-center col-span-1 ${indx === 5 ? '' : 'border-e'} ${indx === 2 ? 'border-none' : ''}`} key={indx}>
                              <p className='text-slate-300 text-sm'>{data.time.split(' ')[1]}</p>
                              <img src={`https:${data.condition.icon}`} className="h-20 justify-self-center" alt="Weather Icon" />
                              <p className='text-slate-100 font-bold'>{data.temp_c}°</p>
                            </div> 
                          ))}
                      </div>
                      ))}
                  </div>

                  <div 
                    className='rounded-xl mt-6 bg-slate-600 dark:bg-green-500 p-4'
                    data-aos='fade-up' data-aos-duration='800' data-aos-delay='700'
                  >
                    <h2 className='text-slate-300 font-bold text-xs md:text-md'>AIR CONDITIONS</h2>
                    <div className='grid grid-cols-2 px-2 py-4 gap-4'>
                        <div className='col-span-1 flex item-start gap-2 '>
                          <i className='wi wi-thermometer text-slate-100 text-2xl mt-2'></i>
                          <div className=''>
                            <p className='text-sm md:text-md font-bold text-slate-300'>Real Feel</p>
                            <p className='text-xl md:text-3xl font-bold text-slate-100'>{weatherData.current.humidity}°</p>
                          </div>
                        </div>
                        <div className='col-span-1 flex item-start gap-2 '>
                          <i className='wi wi-strong-wind text-slate-100 text-2xl mt-2'></i>
                          <div className=''>
                            <p className='text-sm md:text-md font-bold text-slate-300'>Wind</p>
                            <p className='text-xl md:text-3xl font-bold text-slate-100'>{weatherData.current.wind_kph} kph</p>
                          </div>
                        </div>
                        <div className='col-span-1 flex item-start gap-2 '>
                          <i className='wi wi-humidity text-slate-100 text-2xl mt-2'></i>
                          <div className=''>
                            <p className='text-sm md:text-md font-bold text-slate-300'>Chance of Rain</p>
                            <p className='text-xl md:text-3xl font-bold text-slate-100'>{weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                          </div>
                        </div>
                        <div className='col-span-1 flex item-start gap-2 '>
                          <i className='wi wi-day-sunny text-slate-100 text-2xl mt-2'></i>
                          <div className=''>
                            <p className='text-sm md:text-md font-bold text-slate-300'>UV</p>
                            <p className='text-xl md:text-3xl font-bold text-slate-100'>{weatherData.forecast.forecastday[0].day.uv}</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className='h-min col-span-3 md:col-span-1 p-4 mt-4 md:mt-0 rounded-xl bg-slate-600 dark:bg-slate-200' data-aos='fade-left' data-aos-duration='800' data-aos-delay='300'>
                  <p className='text-sm font-bold text-slate-400'>ASTRO</p>
                  <div className='border-b border-slate-400 flex justify-between mt-4 py-8 px-2'>
                      <p className='text-sm font-bold text-slate-300 dark:text-slate-700'>SUNRISE</p>
                      <i className='wi wi-sunrise text-3xl text-yellow-500'></i>
                      <p className='text-sm font-bold text-slate-300 dark:text-slate-700'>{weatherData.forecast.forecastday[0].astro.moonrise}</p>
                  </div>
                  <div className='border-b border-slate-400 flex justify-between mt-4 py-8 px-2'>
                      <p className='text-sm font-bold text-slate-300 dark:text-slate-700'>SUNSET</p>
                      <i className='wi wi-sunset text-3xl text-orange-500'></i>
                      <p className='text-sm font-bold text-slate-300 dark:text-slate-700'>{weatherData.forecast.forecastday[0].astro.moonrise}</p>
                  </div>
                  <div className='border-b border-slate-400 flex justify-between mt-4 py-8 px-2'>
                      <p className='text-sm font-bold text-slate-300 dark:text-slate-700'>MOONRISE</p>
                      <i className='wi wi-moonrise text-3xl text-slate-400'></i>
                      <p className='text-sm font-bold text-slate-300 dark:text-slate-700'>{weatherData.forecast.forecastday[0].astro.moonrise}</p>
                  </div>
                  <div className='border-b border-slate-400 flex justify-between mt-4 py-8 px-2'>
                      <p className='text-sm font-bold text-slate-300 dark:text-slate-700'>MOONSET</p>
                      <i className='wi wi-moonset text-3xl text-slate-400'></i>
                      <p className='text-sm font-bold text-slate-300 dark:text-slate-700'>{weatherData.forecast.forecastday[0].astro.moonrise}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>  
      </>
  )
}

export default Homepage