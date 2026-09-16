// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../_src/service/CustomerService.js';

export default function HorizontalScrollDemo() {
    const [customers, setCustomers] = useState([]);

    const balanceTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px">
                <Column field="id" header="Id" footer="Id" style={{ minWidth: '100px' }}></Column>
                <Column field="name" header="Name" footer="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" footer="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" footer="Date" style={{ minWidth: '200px' }}></Column>
                <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" footer="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" footer="Status" style={{ minWidth: '200px' }}></Column>
                <Column field="activity" header="Activity" footer="Activity" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" footer="Representative" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        