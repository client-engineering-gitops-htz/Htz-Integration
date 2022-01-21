import React from 'react';
import '../styles/DigitalMesh.css';
import { Card, InputGroup, Button} from '@blueprintjs/core';
import {DatePicker, TimePicker} from '@blueprintjs/datetime';
import { Select } from "@blueprintjs/select";

const SubmitForm=() => {
    return( 
        <div>
            <div className="card-container">
                <Card className="car-card" interactive={true}>
                <h5>
                    <a href="#">IBM_1</a>
                </h5>
                <p>Card content</p>
                <div className='drop-down-menu'>
                <InputGroup type="search" placeholder='Pick Up Location' />
                <InputGroup type="search" placeholder='Pick Up Date' />
                <InputGroup type="search" placeholder='Pick Up Time' />
                <InputGroup type="search" placeholder='Drop Off Location' />
                <InputGroup type="search" placeholder='Drop Off Date' />
                <InputGroup type="search" placeholder='Drop Off Time' />
                </div>
                <Button>Submit</Button>
                </Card>
            </div>

        </div>

    )
}

export default SubmitForm;