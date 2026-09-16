// @ts-nocheck

import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function VerticalDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} onValueChange={(e) => setValue(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }} 
                    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
)
}
        