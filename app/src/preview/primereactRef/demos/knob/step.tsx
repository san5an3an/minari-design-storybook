// @ts-nocheck

import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StepDemo() {
    const [value, setValue] = useState(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} step={10} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        