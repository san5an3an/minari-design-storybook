// @ts-nocheck

import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function BasicDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
        </div>
    )
}
        