import React from 'react'

import styles from './CardHoras.module.css';

import Clock from 'react-live-clock';

import { useEffect, useState } from "react";

import axios from 'axios';

function CardHoras({ cidade }) {

    const [localData, setLocalData] = useState();

    const [timezone, setTimeZone] = useState('US/Pacific')

    const getLocalData = async (url) => {

        

        const options = {
            method: 'GET',
            url: url,
            params: { q: cidade },
            headers: {
                'X-RapidAPI-Key': 'aa57a71a86msh797eb071c0f6057p1fdb5ejsn3d7fa6579a8a',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log("location1",response.data.location);
            setLocalData(response.data.location);
        } catch (error) {
            console.error(error);
        }

        
        
        
        
    };



    useEffect(() => {
        const Url = 'https://weatherapi-com.p.rapidapi.com/current.json';
        console.log(Url);
        getLocalData(Url);
    }, [getLocalData]);


    return (
        <div className={styles.card}>
    
            <Clock format={'HH:mm:ss'} ticking={true} timezone={timezone} />
        </div>
    )
}

export default CardHoras
