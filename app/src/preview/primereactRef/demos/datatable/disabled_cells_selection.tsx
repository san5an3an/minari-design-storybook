// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from '../_src/service/ProductService.js';

export default function DisabledCellSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedCell, setSelectedCell] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    const isCellSelectable = (event) => (event.data.field === 'category' && event.data.value === 'Fitness' ? false : true);

    const cellClassName = (data) => (data === 'Fitness' ? 'p-disabled' : '');

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
                    onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={metaKey}
                    isDataSelectable={isCellSelectable} cellClassName={cellClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        