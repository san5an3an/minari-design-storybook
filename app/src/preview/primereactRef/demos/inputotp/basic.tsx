// @ts-nocheck

import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
        </div>
    );
}
        