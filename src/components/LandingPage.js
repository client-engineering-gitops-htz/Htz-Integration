import React from 'react';
import SubmitForm from './SubmitForm';
import { Routes, Route, Link } from "react-router-dom";
import { Card } from '@blueprintjs/core';


const LandingPage=() => {
    return( 
        <div className='landing-page'>
            <div className='request-info'>
            <h1>Car Class Results</h1>
            <Card className='request-info-card'> 
                <div className='request-info-title'>
                    Request Information
                </div>
                <div className='request-details'>
                    Pick Up Date 
                    RAT-BASE-PERIOD
                </div>
                <div className='request-details'>
                    Drop Off Date 
                </div>
                <div className='request-details'>
                    Location
                    RTC-PU-LOC-NM
                    RTC-DO-LOC-NM
                </div>
            </Card>
            </div>
            <div className='car-results'>
            <Card className='results-card'>
                <div>
                    Class Title: RAT-CODE
                </div>
                <div>
                    Car description: [RAT-SIPP-CAR-TYPE]
                </div>
                <div>
                    Car Description: RAT-MODEL-DESC 
                </div>
                <div>
                   Price per day
                   RAT-BASE-RATE
                </div>
                <div>
                    Total Price
                    RAT-GRANDTOTAL
                </div>
                <div>
                    RAT-PREPAY-FG
                </div>
                <div>
                    RAT-STATUS
                </div>
            </Card>
            </div>
        </div>
    )
}

export default LandingPage;