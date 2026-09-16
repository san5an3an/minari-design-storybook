// @ts-nocheck

import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function AutoResizeDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        