import { useState } from "react";
import "./App.css";
import Banner from "../../assets/banner.png";
import Logo from "../../assets/logo.png";
import FormEvent from "../../components/form/form";
import Footer from "../../components/footer/footer";
import Theme from "../../components/theme/theme";
import Card from "../../components/card/card";

export interface ThemesDto {
  id: number;
  name: string;
}

export interface EventsDto {
  id: number;
  image: string;
  theme: ThemesDto;
  date: Date;
  title: string;
}

export function Home() {
  const themes: ThemesDto[] = [
    {
      id: 1,
      name: "front-end",
    },
    {
      id: 2,
      name: "back-end",
    },
    {
      id: 3,
      name: "devops",
    },
    {
      id: 4,
      name: "inteligência artificial",
    },
    {
      id: 5,
      name: "data science",
    },
    {
      id: 6,
      name: "cloud",
    },
  ];

  const getEvents: EventsDto[] = [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      theme: themes[0],
      date: new Date(),
      title: "Mulheres no Front",
    },
    {
      id: 2,
      image:
        "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png",
      theme: themes[1],
      date: new Date(),
      title: "Mulheres no Back",
    },
    // {
    //   id: 3,
    //   image:
    //     "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_3.png",
    //   theme: themes[1],
    //   date: new Date(),
    //   title: "Homens no Back",
    // },
  ];

  function agroupEvents(events) {
    const eventsAgroup = events.reduce((acc, value) => {
      const themeName = value.theme.name;
      if (!acc[themeName]) {
        acc[themeName] = [];
      }

      acc[themeName].push(value);

      return acc;
    }, {} as Record<string, EventsDto[]>);

    return eventsAgroup;
  }

  const [events, setEvents] = useState(getEvents);
  const agroup = agroupEvents(events);

  function createEvent(event: EventsDto) {
    setEvents((prevs) => [...prevs, event]);
  }

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img className="logo-tecboard" src={Logo} alt="logo-tecboard" />
        </div>
        <img className="banner-tec-board" src={Banner} alt="banner-tec-board" />
      </header>
      <main>
        <section className="form--section">
          <FormEvent dropdown={themes} callBack={createEvent} />
        </section>
        <div className="card--container">
          {themes.map((theme) => {
            if (!events.find((event) => event.theme.id === theme.id)) {
              return null;
            }
            return (
            <section key={theme.id} className="theme--section">
              <div>
                <Theme theme={theme.name} />
              </div>
              <div className="agroup--container">
                {(agroup[theme.name] ?? []).map((event, index) => (
                  <section key={index}>
                    <Card event={event} />
                  </section>
                ))}
              </div>
            </section>
            )
          })}
        </div>
      </main>
      <Footer label="Desenvolvido por Kauan Rodegheri" has_year={true} />
    </div>
  );
}
