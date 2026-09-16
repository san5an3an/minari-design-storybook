// @ts-nocheck

import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function ColorDemo() {
    const [value, setValue] = useState(75);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} valueColor="#708090" rangeColor="#48d1cc" />
        </div>
    )
}
        