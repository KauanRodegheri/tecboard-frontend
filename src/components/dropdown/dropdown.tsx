import type { Ref } from 'react';
import './dropdown.css';

interface DropdownDto {
    options: string[];
    ref: Ref<HTMLOptionElement>
}
const Dropdown = ({options, ref}: DropdownDto) => {
    return (
        <select className="dropdown-class" name="" id="">
           {options.map((option, index) => (
            <option ref={ref} key={index} value={option}>
                {option}
            </option>
           ))}
        </select>
    )
}

export default Dropdown;