// @ts-nocheck

import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function FilledDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips variant="filled" value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        