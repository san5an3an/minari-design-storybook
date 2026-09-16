// @ts-nocheck

import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function FilledDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar variant="filled" value={date} onChange={(e) => setDate(e.value)} />
        </div>
    )
}
        