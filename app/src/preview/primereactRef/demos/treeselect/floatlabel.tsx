// @ts-nocheck

import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { FloatLabel } from 'primereact/floatlabel';
import { NodeService } from '../_src/service/NodeService.js';

export default function FloatLabelDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel className="w-full md:w-20rem">
                <TreeSelect inputId="treeselect" value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes}
                    className="w-full"></TreeSelect>
                <label htmlFor="treeselect">TreeSelect</label>
            </FloatLabel>
        </div>
    );
}
        