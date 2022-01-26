import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import style from '../styling/styles.module.css';


export default function CurrencyDropdown (props) {
    const [selected, setSelected] = useState('');
    return (
        <>
        <p className={style.dropdownLabel}>{props.placeholder}</p>
        <ReactFlagsSelect
            placeholder={props.placeholder}
            className={style.currencyDropdown}
            selected={selected}
            onSelect={code => setSelected(code)}
            countries={["US", "GB", "NG","EU","NZ"]}
            customLabels={{"US": "US Dollar","GB": "Pound Sterling","NG": "Nigerian Naira","EU": "Euros","NZ": "New Zealand Dollar"}}
            defaultCountry="US" />
        </>
    );
}
