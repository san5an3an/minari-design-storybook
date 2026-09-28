// @ts-nocheck

import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function LayoutDemo() {
    const [first, setFirst] = useState(0);

    const onPageChange = (event) => {
        setFirst(event.first);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
        </div>
    );
}
        