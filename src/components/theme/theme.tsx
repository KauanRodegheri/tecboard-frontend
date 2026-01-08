import './theme.css';

interface ThemePropsDto {
    theme: string;
}

const Theme = ({theme}: ThemePropsDto) => {
    return (
        <h3>{theme}</h3>
    )
}

export default Theme;