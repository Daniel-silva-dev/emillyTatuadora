import "./../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">

        <div className="hero-content">
          <h1>
            Portfólio <br />
            <span>Emilly Agostinho</span>
          </h1>

          <p>
           Saiba um pouco mais sobre mim através desse post.
           irei te mostrar e falar sobre pontos da minha vida que me fizeram ser quem
           sou e chegar aonde estou.
          </p>

          <div className="hero-buttons">
            <a href="/tattos" className="btn-outline">
              Ver trabalhos
            </a>

            <a
              href="/contact"
              target="_blank"
              className="btn-primary"
            >
              Agendar
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}