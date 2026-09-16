// @ts-nocheck

import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function KeyFilterDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} keyfilter="int" />
        </div>
    )
}
        