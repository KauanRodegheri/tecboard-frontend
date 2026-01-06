import { useRef } from 'react';
import './App.css'
import Banner from '../../assets/banner.png';
import Logo from '../../assets/logo.png';
import FormEvent from '../../components/form/form';
import Footer from '../../components/footer/footer';



export function Home() {
  const inputEventName = useRef<HTMLInputElement>(null as unknown as HTMLInputElement);
  const inputEventDate = useRef<HTMLInputElement>(null);
  const inputEventTheme = useRef<HTMLOptionElement>(null);
  
    function consoleInputs(): void {
      console.log({
        name: inputEventName.current?.value,
        date: inputEventDate.current?.value,
        theme: inputEventTheme.current?.value,
      })
    }

  return (
    <div className='container'>
        <header>
          <div className='logo'>
          <img className="logo-tecboard" src={Logo} alt="logo-tecboard"/>
          </div>
          <img className="banner-tec-board" src={Banner} alt="banner-tec-board" />
        </header>
      <main>
        <FormEvent inputDate={inputEventDate} inputName={inputEventName} inputTheme={inputEventTheme} callBack={consoleInputs}/>
      </main>
      <Footer label='Desenvolvido por Kauan Rodegheri' has_year={true}/>
    </div>
  )
}
