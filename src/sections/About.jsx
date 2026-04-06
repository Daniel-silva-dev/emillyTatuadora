import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="sobre">

      <div className="about-container">

        {/* TEXTO PRINCIPAL */}
        <div className="about-text">
          <h2>Minha relação com a arte</h2>

          <p>
            Comecei no mundo da arte desde muito nova, sempre me interessei por desenhos,
            pinturas e tudo no geral envolvendo arte. Trabalhei por alguns anos fazendo
            desenhos por encomenda.
          </p>

          <p>
            Conheci o mundo da tatuagem através de uma pessoa incrível que admiro muito,
            <strong> @eliselmartins.ttt</strong>. A partir disso me apaixonei pela área.
          </p>

          <p>
            Em 2024 comecei meus estudos e treinos. Em 2025 comecei a tatuar
            profissionalmente, e em 2026 fiz um mini curso de Bio Segurança
            para oferecer mais segurança aos meus clientes.
          </p>

          <p className="destaque">
            A tatuagem não é apenas um rabisco na pele, é arte, sentimento,
            estilo e liberdade de expressão.
          </p>
        </div>

        {/* INFO LATERAL */}
        <div className="about-info">

          <h3>Sobre Mim</h3>

          <ul>
            <li><strong>Nome:</strong> Emilly Agostinho</li>
            <li><strong>Idade:</strong> 21 anos</li>
            <li><strong>Profissão:</strong> Tatuadora e estudante de Enfermagem</li>
            <li><strong>Certificação:</strong> Bio Segurança em Tatuagem</li>
          </ul>

          <h3>Serviços</h3>

          <ul className="services">
            <li>Fine Line</li>
            <li>Realismo</li>
            <li>Lettering</li>
            <li>Florais</li>
            <li>Encomendas de Arte</li>
          </ul>

        </div>

      </div>
    </section>
  );
}