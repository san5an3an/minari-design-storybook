// @ts-nocheck

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

export default function CheckboxDoc() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [radioValue, setRadioValue] = useState('');

    return (
        <div className="card flex flex-column md:flex-row gap-3">
            <div className="p-inputgroup flex-1">
                <InputText placeholder="Price" />
                <span className="p-inputgroup-addon">
                    <RadioButton name="rb1" value="rb1" checked={radioValue === 'rb1'} onChange={(e) => setRadioValue(e.value)} />
                </span>
            </div>

            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <Checkbox checked={checked1} onChange={(e) => setChecked1(!checked1)} />
                </span>
                <InputText placeholder="Username" />
            </div>

            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <Checkbox checked={checked2} onChange={(e) => setChecked2(!checked2)} />
                </span>
                <InputText placeholder="Website" />
                <span className="p-inputgroup-addon">
                    <RadioButton name="rb2" value="rb2" checked={radioValue === 'rb2'} onChange={(e) => setRadioValue(e.value)} />
                </span>
            </div>
        </div>
    )
}
        