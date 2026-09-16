// @ts-nocheck

import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function CustomizedDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" 
                checked={checked} onChange={(e) => setChecked(e.value)} className="w-9rem" />
        </div>
    );
}
        