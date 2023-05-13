import React from 'react'

import styles from './CardHoras.module.css';

import Clock from 'react-live-clock';

import { useEffect, useState } from "react";

import axios from 'axios';

function CardHoras({ cidade }) {

    const [localData, setLocalData] = useState();

    const [timezone, setTimeZone] = useState('US/Pacific')




    useEffect(() => {

        const getLocalData = async (url) => {

            const options = {
                method: 'GET',
                url: url,
                params: { q: cidade },
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log("location1", response.data.location);
                setLocalData(response.data);
                setTimeZone(response.data.location.tz_id)
            } catch (error) {
                console.error(error);
            }


        }


        const Url = 'https://weatherapi-com.p.rapidapi.com/current.json';
        console.log(Url);
        getLocalData(Url);
        

    }, [setLocalData,localData, setTimeZone, timezone]);


    return (
        <div className={styles.card}>
            <h2>{localData ?(localData.location.name):("")}</h2>
            <h3>Hora local: <Clock format={'HH:mm:ss'} ticking={true} timezone={timezone} /></h3>
            <div>
               <h3>Temperatura: {localData ?(localData.current.temp_c):(0)}&deg; C</h3>    
            </div>
            <div>
               <h3>Tempo: {localData ?(localData.current.condition.text):("")}</h3>    
            </div>
        </div>
    )
}

export default CardHoras
