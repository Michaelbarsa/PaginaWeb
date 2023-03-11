
import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Inicio" },
    { url: "#", title: "Contacto " },
    { url: "#", title: "Login" },
  ];

  return (
    <div className="App"> 
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"Quienes somos"}
        subtitle={
          "Somos una empresa nueva, con experiencia en el mercado de seguridad y aseo & otros. nosotros le brindaremos las 24 horas. Seguridad y tranquilidad en sus bienes personales como también su persona. Además de brindar servicio de aseo profesional dependiendo de las necesidades del cliente."
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Que ofrecemos"}
        subtitle={"La empresa Servipro 71 se especializa en la seguridad, gracias a su rápida respuesta comparada con otras empresas, dado que como empresa tenemos un servicio 24/7, además sus guardias están capacitados con os10"}
        flipped={true}
      />
    </div>
  );
}

export default App;

