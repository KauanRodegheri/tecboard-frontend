import FormTitle from "../title/title";
import Input from "../input/input";
import LabelForm from "../label/label";
import ButtonSubmit from "../button-submit/button-submit";
import { type MouseEventHandler, type Ref } from "react";
import './form.css';
import Dropdown from "../dropdown/dropdown";

interface FormEventInput {
  inputName: Ref<HTMLInputElement>;
  inputDate: Ref<HTMLInputElement>;
  inputTheme: Ref<HTMLOptionElement>;
  callBack: MouseEventHandler<HTMLButtonElement>
}

export default function FormEvent({inputName, inputDate, inputTheme, callBack}: FormEventInput) {
  

  return (
    <form action="POST">
          <FormTitle title='Preencha para criar um evento: ' />
          <div className='inputs'>
            <div className='event-name'>
              <LabelForm label="Qual o nome do evento" htmlFor="name"/>
              <Input className="input-event-name" type="text" placeholder="Nome do evento" ref={inputName}/>
            </div>
            <div className='event-date'>
              <LabelForm label="Data do evento" htmlFor="date"/>
              <Input 
                className="input-event-date" 
                type="date" 
                placeholder={undefined} 
                ref={inputDate}>  
              </Input>
            </div>
            <div className='event-theme'>
              <LabelForm label="Qual o tema do evento" htmlFor="theme"/>
              <Dropdown options={['maçã', 'abacate', 'pera']} ref={inputTheme}/>
            </div>
          </div>
          <ButtonSubmit label="Criar Evento" onClick={callBack} />
        </form>
  )
}