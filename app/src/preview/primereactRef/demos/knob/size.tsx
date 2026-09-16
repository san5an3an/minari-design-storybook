// @ts-nocheck

import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function SizeDemo() {
    const [value, setValue] = useState(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
        </div>
    )
}
        