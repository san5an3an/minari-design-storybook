// @ts-nocheck

import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../_src/service/NodeService.js';

export default function CheckboxDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} onChange={(e) => setSelectedNodeKeys(e.value)} options={nodes} 
                metaKeySelection={false} className="md:w-20rem w-full" selectionMode="checkbox" display="chip" placeholder="Select Items"></TreeSelect>
        </div>    
    );
}
        