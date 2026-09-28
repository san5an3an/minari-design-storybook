// @ts-nocheck

import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function TemplateDemo() {
    const [value, setValue] = useState([]);
    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active)</span>
                <i className="pi pi-user-plus"></i>
            </div>
        );
    };

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
        </div>
    )
}
        