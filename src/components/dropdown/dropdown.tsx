/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Ref } from 'react';
import './dropdown.css';

interface DropdownDto {
    options: string[];
    name?: string;
    ref?: Ref<HTMLSelectElement>;
    value?: string;
    onChange?: any;
}
const Dropdown = ({options, name, ...rest}: DropdownDto) => {
    return (
        <select {...rest} name={name} className="dropdown-class" defaultValue="">
            <option value="" disabled>
                Selecione uma opção
            </option>
           {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
           ))}
        </select>
    )
}

export default Dropdown;