import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Card } from '@blueprintjs/core';

const LogConversions=({inboundBooking}) => {
    return( 
        <div className='logs-dashboard'>
        <div className='input-container'>
            <h1>Seamless Input:</h1>
            <Card className='input-log-card'>
                <div><pre>{JSON.stringify(inboundBooking, null, 2) }</pre></div>
            </Card>
        </div>
        <div className='output-container'>
            <h1>Seamless Output:</h1>
            <Card className='output-log-card'>


            </Card>
        </div>

        </div>
        

    )
}

export default LogConversions;