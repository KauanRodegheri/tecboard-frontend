import './label.css';

interface LabelDto {
    label: string;
    htmlFor?: string;
}

export default function LabelForm({label, htmlFor}: LabelDto) {
    return (
        <p><label htmlFor={htmlFor}>{label}</label></p>
    )
}