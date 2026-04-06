import "../styles/tattos.css";

import tatto1 from "../imagens/tatto1.jpg";
import tatto2 from "../imagens/tatto2.jpg";
import tatto3 from "../imagens/tatto3.jpg";
import tatto4 from "../imagens/tatto4.jpg";
import tatto5 from "../imagens/tatto5.jpg";
import tatto6 from "../imagens/tatto6.jpg";
import tatto7 from "../imagens/tatto7.jpg";
import tatto8 from "../imagens/tatto8.jpg";
import tatto9 from "../imagens/tatto9.jpg";
import tatto10 from "../imagens/tatto10.jpg";
import tatto11 from "../imagens/tatto11.jpg";
import tatto12 from "../imagens/tatto12.jpg"; 
import tatto13 from "../imagens/tatto13.jpg";

import arte1 from "../imagens/arte1.jpg";
import arte2 from "../imagens/arte2.jpg";
import arte3 from "../imagens/arte3.jpg";
import arte4 from "../imagens/arte4.jpg";
import arte5 from "../imagens/arte5.jpg";
import arte6 from "../imagens/arte6.jpg";


export default function Tattos() {
  const tatuagens = [
    tatto1,
    tatto2,
    tatto3,
    tatto4,
    tatto5,
    tatto6,
    tatto7,
    tatto8, 
    tatto9,
    tatto10,
    tatto11,
    tatto12,
    tatto13,


  ];

  const artes = [
    arte1,
    arte2,
    arte3,
    arte4,
    arte5,
    arte6,
  ];
  

  return (
    <section className="tattos">
      <h2 className="tattos-title">Tatuagens</h2>

      <div className="tattos-grid">
        {tatuagens.map((img, index) => (
          <div className="tattos-card" key={index}>
            <img src={img} alt="tatuagem" />
          </div>
        ))}
      </div>
            <h2 className="tattos-title">artes</h2>

      <div className="tattos-grid">
        {artes.map((img, index) => (
          <div className="tattos-card" key={index}>
            <img src={img} alt="tatuagem" />
          </div>
        ))}
      </div>
    </section>
  );
}