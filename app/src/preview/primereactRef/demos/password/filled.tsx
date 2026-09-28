// @ts-nocheck

import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function FilledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password variant="filled" value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        </div>
    )
}
        