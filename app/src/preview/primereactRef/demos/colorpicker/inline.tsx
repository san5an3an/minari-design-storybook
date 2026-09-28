// @ts-nocheck

import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function InlineDemo() {
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
        </div>
    )
}
        