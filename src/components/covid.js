import React from 'react'
import { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {

  const[data,setData] = useState([]);

  const getCovidData = async () => {
    try{
      const res = await fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json();
      //console.log(actualData.statewise[0]actualData.statewise[0]);
      setData(actualData.statewise[0])
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getCovidData();
  }, [])

  return (
    <>
      <section>
        <h1>LIVE 🔴 </h1>
        <h2>COVID-19  LIVE  TRACKER </h2>
        <ul>
          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'> OUR COUNTRY</p>
                <p className='card__total card__small'>INDIA</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'>TOTAL CONFIRMED</p>
                <p className='card__total card__small'>{data.confirmed}</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'>TOTAL RECOVERED</p>
                <p className='card__total card__small'>{data.recovered}</p>
              </div>
            </div>
          </li>

          
          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'>TOTAL ACTIVE</p>
                <p className='card__total card__small'>{data.active}</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'>TOTAL DEATHS</p>
                <p className='card__total card__small'>{data.deaths}</p>
              </div>
            </div>
          </li>

          <li className='card'>
            <div className='card__main'>
              <div className='card__inner'>
                <p className='card__name'>LAST  UPDATED</p>
                <p className='card__total card__small'>{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Covid
