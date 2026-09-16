// @ts-nocheck

import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function FilledDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask variant="filled" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        