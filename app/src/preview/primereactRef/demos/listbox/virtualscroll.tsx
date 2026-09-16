// @ts-nocheck

import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function VirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} 
                virtualScrollerOptions={{ itemSize: 38 }} className="w-full md:w-14rem" listStyle={{ height: '250px' }} />
        </div>
    )
}
        