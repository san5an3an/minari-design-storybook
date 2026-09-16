// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { Tree } from 'primereact/tree';
import { NodeService } from '../_src/service/NodeService.js';

export default function MultipleSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(null);
    const [metaKey, setMetaKey] = useState(false);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <div className="flex align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        