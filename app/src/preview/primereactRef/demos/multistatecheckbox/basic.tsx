// @ts-nocheck

import React, { useState } from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function BasicDemo() {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <MultiStateCheckbox value={value} onChange={(e) => setValue(e.value)} options={options} optionValue="value" />
            <span>{value || 'no value'}</span>
        </div>
    );
}
        