// @ts-nocheck

import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function LocaleDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)}
                promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"/>
        </div>
    )
}
        