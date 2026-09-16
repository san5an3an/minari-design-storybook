// @ts-nocheck

import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function BasicDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
    );
}
        