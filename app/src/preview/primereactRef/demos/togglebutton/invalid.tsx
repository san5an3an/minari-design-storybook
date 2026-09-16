// @ts-nocheck

import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function InvalidDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        