// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../_src/service/NodeService.js';

export default function DragDropDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} dragdropScope="demo" onDragDrop={(e) => setNodes(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        