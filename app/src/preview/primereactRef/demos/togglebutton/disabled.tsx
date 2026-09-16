// @ts-nocheck

import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function DisabledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton disabled checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        