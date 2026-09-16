// @ts-nocheck

import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function BasicDemo() {
    const items = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        