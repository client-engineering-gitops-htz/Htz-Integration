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
                <Button>Submit</Button>
                </Card>
            </div>
            <Card className='submit-card'>
                {/* Gonna have to switch this to blueprint Select: 
                https://blueprintjs.com/docs/#select/select-component.querying */}
                <div>
                    For this section: we want to have Select for PU/DO Locations and 
                    then Date Picker and Time Picker for PU/DO date and time as seen 
                    in: https://codesandbox.io/s/blueprint-sandbox-et9xy?file=/src/SelectExample.tsx
                </div>
                <InputGroup type="search" placeholder='Pick Up Location' />
                <InputGroup type="search" placeholder='Pick Up Date' />
                <InputGroup type="search" placeholder='Pick Up Time' />
                <InputGroup type="search" placeholder='Drop Off Location' />
                <InputGroup type="search" placeholder='Drop Off Date' />
                <InputGroup type="search" placeholder='Drop Off Time' />

            </Card>
            

        </div>

    )
}

export default SubmitForm;