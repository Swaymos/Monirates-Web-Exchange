import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import style from '../styling/styles.module.css';


export default function WalletDropdown (props) {
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
        customLabels={{"US": "US Dollar Wallet","GB": "Pound Sterling Wallet","NG": "Nigerian Naira Wallet","EU": "Euros Wallet","NZ": "New Zealand Dollar Wallet"}}
        defaultCountry="US" />
        </>
    );
}
