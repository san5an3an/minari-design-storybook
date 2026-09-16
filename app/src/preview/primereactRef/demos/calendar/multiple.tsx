// @ts-nocheck

import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleDemo() {
    const [dates, setDates] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        </div>
    )
}
        