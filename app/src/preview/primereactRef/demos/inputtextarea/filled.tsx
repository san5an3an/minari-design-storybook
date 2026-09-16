// @ts-nocheck

import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function FilledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea variant="filled" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        