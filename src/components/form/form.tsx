/* eslint-disable @typescript-eslint/no-explicit-any */
import FormTitle from "../title/title";
import Input from "../input/input";
import LabelForm from "../label/label";
import ButtonSubmit from "../button-submit/button-submit";
import { useState, type ChangeEvent, type FormEvent } from "react";
import './form.css';
import Dropdown from "../dropdown/dropdown";
import type { EventsDto, ThemesDto } from "../../pages/home/App";

interface FormEventInput {
  dropdown: ThemesDto[];
  callBack: any;
}

export default function FormEvent({dropdown, callBack}: FormEventInput) {

  //AQUI CRIAMOS O ESTADO DOS CAMPOS DO FORMULARIO
  const [form, setForm] = useState<Record<string, string>>({
    eventName: "",
    eventTheme: "",
    eventDate: "",
    eventImage: "",
  });

  /*
    AQUI É A FUNÇÃO DE ONCHANGE, A CADA MUDANÇA NUM CAMPO DO FORMULARIO
    É ATUALIZADO O ESTADO
  */
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log(name, value)

    setForm((prev: Record<string, string>) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function inSubmit(e: FormEvent<HTMLFormElement>) {
    //FUNÇÃO USADA PARA NÃO RECARREGAR A PAGINA
    e.preventDefault();

    //CRIANDO O OBJETO PARA ENVIAR PARA A FUNÇÃO DE SAVE
    const event: EventsDto = {
      id: Math.random(),
      image: form.eventImage,
      title: form.eventName,
      date: new Date(form.eventDate),
      theme: (dropdown.find((item) => item.name === form.eventTheme) as ThemesDto)
    }

    const arrayEvent = Object.entries(event);
    const isValid = arrayEvent.every(([_, item]) => item)
    if (!isValid) {
      alert('Insira todos os dados');
      return;
    }

    //AQUI RESETAMOS O FORMULARIO AO FAZER O SUBMIT
    setForm({
      eventName: "",
    eventTheme: "",
    eventDate: "",
    eventImage: "",
    })
    callBack(event);
  }
  return (
    <form onSubmit={inSubmit}>
          <FormTitle title='Preencha para criar um evento: ' />
          <div className='inputs'>
            <div className='event-name'>
              <LabelForm label="Qual o nome do evento" htmlFor="name"/>
              <Input 
                type="text" 
                placeholder="Nome do evento" 
                name="eventName"
                value={form.eventName}
                onChange={handleChange}
              />
            </div>
            <div className="event-image">
                <LabelForm label="Qual o endereço da imagem" htmlFor="image"/>
                <Input
                  type="text" 
                  placeholder="Insira a URL da imagem" 
                  name="eventImage"
                  value={form.eventImage}
                  onChange={handleChange}
                />
            </div>
            <div className='event-date'>
              <LabelForm label="Data do evento" htmlFor="date"/>
              <Input 
                type="date" 
                placeholder={undefined} 
                name="eventDate"
                value={form.eventDate}
                onChange={handleChange}
                >
              </Input>
            </div>
            <div className='event-theme'>
              <LabelForm label="Qual o tema do evento" htmlFor="theme"/>
              <Dropdown 
              value={form.eventTheme ?? ''}
              onChange={handleChange}
              name="eventTheme" options={dropdown.map((item) => item.name)}/>
            </div>
          </div>
          <ButtonSubmit label="Criar Evento"/>
        </form>
  )
}