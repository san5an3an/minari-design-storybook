// @ts-nocheck

import React from 'react'; 
import { Steps } from 'primereact/steps';

export default function BasicDemo() {
    const items = [
        {
            label: 'Personal Info'
        },
        {
            label: 'Reservation'
        },
        {
            label: 'Review'
        }
    ];

    return (
        <div className="card">
            <Steps model={items} />
        </div>
    )
}
        