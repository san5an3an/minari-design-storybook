// @ts-nocheck

import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function FilledDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox variant="filled" value={value} onChange={(e) => setValue(e.value)} />
        </div>
    );
}
        