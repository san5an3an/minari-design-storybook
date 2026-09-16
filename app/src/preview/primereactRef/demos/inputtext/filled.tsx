// @ts-nocheck

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function FilledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText variant="filled" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        