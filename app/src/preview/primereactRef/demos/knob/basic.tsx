// @ts-nocheck

import React, { useState } from "react";
import { Knob } from 'primereact/knob';

export default function BasicDemo() {
    const [value, setValue] = useState(0);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        