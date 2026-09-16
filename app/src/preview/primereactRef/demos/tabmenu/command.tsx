// @ts-nocheck

import { useRef } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef(null);
    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
            }
        },
        {
            label: 'Transactions',
            icon: 'pi pi-chart-line',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
            }
        },
        {
            label: 'Products',
            icon: 'pi pi-list',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
            }
        },
        {
            label: 'Messages',
            icon: 'pi pi-inbox',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
            }
        }
    ];

    return (
        <div className="card">
            <Toast ref={toast} />
            <TabMenu model={items} />
        </div>
    )
}
        