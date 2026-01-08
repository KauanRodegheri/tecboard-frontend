import Logo from '../../assets/logo.png';
import LabelForm from '../label/label';
import './footer.css';

interface FooterDto {
    label: string;
    has_year?: boolean;
}

const Footer = ({label, has_year}: FooterDto) => {
    const date = new Date();
    let year: number | null = null;
    
    if (has_year) {
        year = date.getFullYear();    
    }

    return (
        <footer>
            <img className="logo--footer" src={Logo} alt="logo-footer" />
            <LabelForm label={`${label}${has_year ? ' - ' + year : ''}`}/>
        </footer>
    )
}

export default Footer;