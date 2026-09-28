// @ts-nocheck

import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function FormatDemo() {
    const [colorHEX, setColorHEX] = useState('6466f1');
    const [colorRGB, setColorRGB] = useState({ r: 100, g: 102, b: 241 });
    const [colorHSB, setColorHSB] = useState({ h: 239, s: 59, b: 95 });

    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hex" className="font-bold block mb-2">
                    HEX
                </label>
                <ColorPicker inputId="cp-hex" format="hex" value={colorHEX} onChange={(e) => setColorHEX(e.value)} className="mb-3" />
                <span>{colorHEX}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-rgb" className="font-bold block mb-2">
                    RGB
                </label>
                <ColorPicker inputId="cp-rgb" format="rgb" value={colorRGB} onChange={(e) => setColorRGB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorRGB)}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hsb" className="font-bold block mb-2">
                    HSB
                </label>
                <ColorPicker inputId="cp-hsb" format="hsb" value={colorHSB} onChange={(e) => setColorHSB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorHSB)}</span>
            </div>
        </div>
    )
}
        