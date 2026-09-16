// @ts-nocheck

import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function VirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
                placeholder="Select Item" className="w-full md:w-14rem" />
        </div>
    )
}
        