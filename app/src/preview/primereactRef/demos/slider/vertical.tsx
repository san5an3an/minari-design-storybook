// @ts-nocheck

import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function VerticalDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" className="h-14rem" />
        </div>
    )
}
        