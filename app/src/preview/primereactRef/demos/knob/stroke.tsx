// @ts-nocheck

import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StrokeDemo() {
    const [value, setValue] = useState(40);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} strokeWidth={5} onChange={(e) => setValue(e.value)} strokeWidth={5} />
        </div>
    )
}
        