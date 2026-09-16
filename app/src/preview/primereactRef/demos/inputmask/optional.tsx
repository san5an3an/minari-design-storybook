// @ts-nocheck

import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function OptionalDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
        </div>
    )
}
        