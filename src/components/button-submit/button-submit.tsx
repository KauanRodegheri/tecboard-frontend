import type { MouseEventHandler } from "react";
import './button-submit.css';

interface ButtonSubmitDto {
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSubmit = ({label, onClick}: ButtonSubmitDto) => {
    return (
        <button type="submit" onClick={onClick}>
            {label}
        </button>
    )
}

export default ButtonSubmit;