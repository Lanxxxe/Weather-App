import { useState, useEffect } from 'react';
import cloudRainSun from '../assets/rain-cloud-sun.jpg'
import { grid } from 'ldrs'


const Introduction = () => {
    grid.register();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-slate-800 dark:bg-slate-100">
                <l-grid
                size="80"
                stroke="5"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="2" 
                color="#11FF00" 
                ></l-grid>
                <h1 
                    className='text-slate-100 dark:text-slate800 font-bold text-xl mt-4'
                    data-aos='fade-left' data-aos-duration='800' data-aos-delay='300'    
                >
                    <i className='wi wi-horizon text-[#11FF00] font-bold text-5xl me-2'></i> 
                    SkyCast
                </h1>
            </div>
        );
    }
    return (
        <div className='h-screen flex items-center justify-center bg-slate-800 overflow-hidden' >
            <div className='grid grid-cols-2 justify-items-stretch size-3/4 rounded-md overflow-hidden'>
                <img className='mx-auto col-span-1 rounded-s-md hidden md:block h-[100%]' src={cloudRainSun} alt="Cloud Rain Sun" data-aos='fade-up' data-aos-duration='800' data-aos-delay='400' />

                <div className='col-span-2 md:col-span-1 bg-slate-700 rounded-e-md flex flex-col items-center justify-center' data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
                    <i className='wi wi-horizon text-[#11FF00] font-bold text-5xl bg-slate-800 rounded-md p-3'></i> 
                    <p className='text-white font-bold text-4xl mt-6'>SkyCast</p>
                    <p className='text-slate-400 mt-2'>Weather App</p>
                    <a href="/homepage" className='mt-12 font-bold text-sm rounded-full bg-green-500 shadow-2xl hover:bg-green-600 px-6 py-2'>Get started</a>
                </div>
            </div>
        </div>
    )
    }

export default Introduction