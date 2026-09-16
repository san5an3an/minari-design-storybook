// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../_src/service/ProductService.js';

export default function ConditionalStyleDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const rowClass = (data) => {
        return {
            'bg-primary': data.category === 'Fitness'
        };
    };

    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames('border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm', {
            'bg-red-100 text-red-900': rowData.quantity === 0,
            'bg-blue-100 text-blue-900': rowData.quantity > 0 && rowData.quantity < 10,
            'bg-teal-100 text-teal-900': rowData.quantity > 10
        });

        return <div className={stockClassName}>{rowData.quantity}</div>;
    };

    return (
        <DataTable value={products} rowClassName={rowClass} tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
        </DataTable>
    );
}
        