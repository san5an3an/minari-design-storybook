// @ts-nocheck

import React from 'react'; 
import { Steps } from 'primereact/steps';

export default function LinearDemo() {
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
            <Steps readOnly model={items} />
        </div>
    )
}
        