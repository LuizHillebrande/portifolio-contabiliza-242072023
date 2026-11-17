import { useState } from "react";

import dashboardImage from "../IMAGENS DO SISTEMA/Dashboard_Inicial.png";
import tasksImage from "../IMAGENS DO SISTEMA/Gec_Tarefas.png";
import companiesImage from "../IMAGENS DO SISTEMA/Gec_Empresas.png";
import usersImage from "../IMAGENS DO SISTEMA/Gec_Usuarios.png";
import reportsImage from "../IMAGENS DO SISTEMA/Exportar_Relatorios.png";
import classDiagram from "../CLASS_DIAGRAM/Class Diagram.png";
import useCaseDiagram from "../CASO DE USO/UseCase Diagram Contabiliza.png";
import deploymentDiagram from "../DEPLOYMENT DIAGRAM/Deployment Diagram.png";
import taskSequence from "../SEQUENCE_DIAGRAM/Sequence Diagram Gerenciar Tarefas.png";
import companySequence from "../SEQUENCE_DIAGRAM/Sequence_Gec_Empresas.png";
import userSequence from "../SEQUENCE_DIAGRAM/Seq_Gerenciar_Usuarios.png";
import reportSequence from "../SEQUENCE_DIAGRAM/Sequence Diagram Gerenciar Relatórios.png";
import taskState from "../STATE_DIAGRAM/State_Tarefa.png";
import userState from "../STATE_DIAGRAM/State_Usuario.png";
import passwordState from "../STATE_DIAGRAM/State_Senha.png";
import obligationState from "../STATE_DIAGRAM/State_Obrigacao.png";
import importState from "../STATE_DIAGRAM/State_Importacao.png";
import companyState from "../STATE_DIAGRAM/State_Empresa.png";
import derDiagram from "../DER/der_contabiliza_completo.png";
import merDiagram from "../DER/MER_CONTABILIZA.png";
import workflowDiagram from "../WORKFLOW AS-IS/bpmn_contabiliza.png";
import internshipReport from "../Relatorio_Estagio_Luiz_Hillebrande.pdf";
import demoVideo from "../video/demonstracao-contabiliza.mp4";

const DEMO_VIDEO_URL = demoVideo;

const screenshots = [
  {
    title: "Dashboard inicial",
    description: "Visão consolidada das tarefas, prazos e indicadores.",
    src: dashboardImage,
  },
  {
    title: "Gerenciamento de tarefas",
    description: "Cadastro, edição, consulta e acompanhamento de atividades.",
    src: tasksImage,
  },
  {
    title: "Gerenciamento de empresas",
    description: "Empresas, certificados digitais e importação de dados.",
    src: companiesImage,
  },
  {
    title: "Gerenciamento de usuários",
    description: "Controle de usuários, perfis e situação de acesso.",
    src: usersImage,
  },
  {
    title: "Exportação de relatórios",
    description: "Filtros e exportação das informações em PDF e Excel.",
    src: reportsImage,
  },
];

const useCases = [
  {
    name: "Gerenciar tarefas",
    actor: "Usuário autenticado",
    description:
      "Permite cadastrar, consultar, editar e inativar tarefas, definindo responsável, prazo, observações e status.",
    status: "Concluído",
    date: "15/05/2026",
  },
  {
    name: "Cadastrar obrigação",
    actor: "Encarregado",
    description:
      "Cadastra obrigações contábeis recorrentes ou pontuais e permite vinculá-las a uma ou mais tarefas.",
    status: "Em desenvolvimento",
    date: "10/12/2026",
  },
  {
    name: "Gerar relatórios",
    actor: "Encarregado",
    description:
      "Gera relatórios por período, empresa, status e tipo de obrigação, com exportação das informações.",
    status: "Concluído",
    date: "01/11/2026",
  },
  {
    name: "Gerenciar empresas",
    actor: "Encarregado ou administrador",
    description:
      "Permite cadastrar, consultar, editar e inativar empresas, além de importar registros por planilha.",
    status: "Concluído",
    date: "13/08/2026",
  },
  {
    name: "Gerenciar usuários",
    actor: "Administrador",
    description:
      "Administra usuários, perfis de acesso e situação da conta, preservando o histórico de atividades.",
    status: "Concluído",
    date: "05/11/2026",
  },
  {
    name: "Enviar notificações",
    actor: "Administrador",
    description:
      "Envia notificações manuais ou automáticas e registra destinatário, conteúdo, data e hora do envio.",
    status: "Em desenvolvimento",
    date: "10/01/2027",
  },
];

const documentGroups = [
  {
    title: "Diagramas UML",
    items: [
      ["Diagrama de classes", classDiagram],
      ["Diagrama de casos de uso", useCaseDiagram],
      ["Diagrama de implantação", deploymentDiagram],
    ],
  },
  {
    title: "Diagramas de sequência",
    items: [
      ["Gerenciar tarefas", taskSequence],
      ["Gerenciar empresas", companySequence],
      ["Gerenciar usuários", userSequence],
      ["Gerenciar relatórios", reportSequence],
    ],
  },
  {
    title: "Diagramas de estados",
    items: [
      ["Estado de tarefa", taskState],
      ["Estado de usuário", userState],
      ["Estado de senha", passwordState],
      ["Estado de obrigação", obligationState],
      ["Estado de importação", importState],
      ["Estado de empresa", companyState],
    ],
  },
  {
    title: "Dados e processos",
    items: [
      ["Diagrama entidade-relacionamento", derDiagram],
      ["Modelo entidade-relacionamento", merDiagram],
      ["Workflow AS-IS (BPMN)", workflowDiagram],
    ],
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Início", "inicio"],
    ["Sobre", "sobre"],
    ["Casos de uso", "casos-de-uso"],
    ["Documentação", "documentacao"],
    ["Evidências", "evidencias"],
    ["Relatório", "relatorio"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Contabiliza - início">
        <span className="brand-mark">C</span>
        <span>Contabiliza</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Navegação principal">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          href="https://github.com/LuizHillebrande/portifolio-contabiliza-242072023"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const reportUrl = internshipReport;

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-label">Portfólio acadêmico • 2026</span>
              <h1>
                Gestão contábil com <em>clareza e controle.</em>
              </h1>
              <p>
                O Contabiliza centraliza tarefas, obrigações, empresas e prazos da
                Logika Contabilidade em um ambiente web organizado e seguro.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#sobre">
                  Conhecer o projeto <span aria-hidden="true">→</span>
                </a>
                <a className="button secondary" href="#evidencias">
                  Ver evidências
                </a>
              </div>
            </div>
            <div className="hero-card">
              <div className="mock-browser">
                <div className="browser-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <img src={screenshots[0].src} alt="Dashboard do Contabiliza" />
              </div>
              <div className="floating-stat stat-one">
                <strong>6</strong>
                <span>casos de uso</span>
              </div>
              <div className="floating-stat stat-two">
                <span className="status-dot" />
                <span>Projeto em evolução</span>
              </div>
            </div>
          </div>
          <div className="identity-strip">
            <div>
              <span>Aluno</span>
              <strong>Luiz Fernando Hillebrande</strong>
            </div>
            <div>
              <span>Matrícula</span>
              <strong>242072023</strong>
            </div>
            <div>
              <span>Professor orientador</span>
              <strong>Marcelo Yukio Yamamoto</strong>
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <SectionTitle
            eyebrow="01 • Sobre o projeto"
            title="Do controle manual a uma operação centralizada"
            text="Uma solução desenvolvida para reduzir desorganização, atrasos e perda de informações nas rotinas do escritório."
          />
          <div className="problem-grid">
            <article className="feature-card dark-card">
              <span className="card-number">01</span>
              <h3>O problema</h3>
              <p>
                O controle por planilhas compartilhadas e registros manuais dificulta
                o acompanhamento de tarefas e prazos, reduz a rastreabilidade e aumenta
                o risco de alterações indevidas e perda de obrigações importantes.
              </p>
            </article>
            <article className="feature-card">
              <span className="card-number">02</span>
              <h3>A solução</h3>
              <p>
                Uma aplicação web independente para cadastrar, distribuir e acompanhar
                atividades, empresas e obrigações, com permissões adequadas aos perfis
                de usuário, encarregado e administrador.
              </p>
            </article>
            <article className="feature-card">
              <span className="card-number">03</span>
              <h3>O objetivo</h3>
              <p>
                Melhorar a organização e a eficiência operacional, facilitar a
                comunicação entre setores e oferecer uma visão clara das demandas,
                responsáveis, status e datas de vencimento.
              </p>
            </article>
          </div>

          <div className="architecture">
            <div className="architecture-copy">
              <span className="eyebrow">Arquitetura da solução</span>
              <h3>Aplicação web em camadas</h3>
              <p>
                O navegador acessa a interface desenvolvida em React e Next.js. O
                back-end em Python e Django processa as regras de negócio e se comunica
                com o PostgreSQL. A implantação prevista utiliza servidor Linux.
              </p>
            </div>
            <div className="tech-flow" aria-label="Fluxo das tecnologias">
              <div><small>Interface</small><strong>React + Next.js</strong></div>
              <span>→</span>
              <div><small>Aplicação</small><strong>Python + Django</strong></div>
              <span>→</span>
              <div><small>Dados</small><strong>PostgreSQL</strong></div>
            </div>
          </div>

          <div className="tech-list" aria-label="Tecnologias utilizadas">
            {["Python 3.11.7", "Django 5.2.14", "Next.js 16.2.9", "PostgreSQL 15.13", "Git + GitHub", "VPS Linux"].map(
              (technology) => <span key={technology}>{technology}</span>,
            )}
          </div>
        </section>

        <section className="section section-tinted" id="casos-de-uso">
          <SectionTitle
            eyebrow="02 • Casos de uso"
            title="Funcionalidades previstas"
            text="O escopo funcional contempla seis casos de uso e três níveis de acesso."
          />
          <div className="use-case-grid">
            {useCases.map((item, index) => (
              <article className="use-case-card" key={item.name}>
                <div className="use-case-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className={item.status === "Concluído" ? "badge done" : "badge progress"}>
                    {item.status}
                  </span>
                </div>
                <h3>{item.name}</h3>
                <small>{item.actor}</small>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="schedule-wrap">
            <div className="schedule-heading">
              <div>
                <span className="eyebrow">Cronograma atualizado</span>
                <h3>Evolução do desenvolvimento</h3>
              </div>
              <span className="schedule-note">Atualizado em novembro de 2026</span>
            </div>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Caso de uso</th>
                    <th>Situação atual</th>
                    <th>Conclusão / previsão</th>
                  </tr>
                </thead>
                <tbody>
                  {useCases.map((item) => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>
                        <span className={item.status === "Concluído" ? "table-status done" : "table-status progress"}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="documentacao">
          <SectionTitle
            eyebrow="03 • Documentação técnica"
            title="Diagramas e artefatos do projeto"
            text="Acesse os documentos visuais produzidos para modelar estrutura, comportamento, dados e processos."
          />
          <div className="document-grid">
            {documentGroups.map((group) => (
              <article className="document-group" key={group.title}>
                <div className="folder-icon" aria-hidden="true">⌁</div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(([label, url]) => (
                    <li key={label}>
                      <a href={url} target="_blank" rel="noreferrer">
                        <span className="document-preview">
                          <img src={url} alt={`Prévia: ${label}`} loading="lazy" />
                        </span>
                        <span className="document-link">
                          <span>{label}</span>
                          <span aria-hidden="true">Abrir ↗</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="evidencias">
          <SectionTitle
            eyebrow="04 • Telas e vídeo"
            title="Evidências do funcionamento"
            text="Registros das principais funcionalidades já desenvolvidas no sistema."
          />
          <div className="gallery">
            {screenshots.map((image) => (
              <button
                className="gallery-item"
                type="button"
                key={image.title}
                onClick={() => setSelectedImage(image)}
              >
                <div className="gallery-image">
                  <img src={image.src} alt="" />
                  <span>Ampliar ↗</span>
                </div>
                <strong>{image.title}</strong>
                <small>{image.description}</small>
              </button>
            ))}
          </div>

          <div className="video-card">
            <div className="video-placeholder">
              <video controls preload="metadata" poster={dashboardImage}>
                <source src={DEMO_VIDEO_URL} type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
            <div className="video-copy">
              <span className="eyebrow">Demonstração do sistema</span>
              <h3>Contabiliza em funcionamento</h3>
              <p>
                Demonstração das principais funcionalidades implementadas no
                Contabiliza, com duração de aproximadamente 3 minutos e 33 segundos.
              </p>
            </div>
          </div>
        </section>

        <section className="section report-section" id="relatorio">
          <div className="report-card">
            <div className="pdf-icon" aria-hidden="true">PDF</div>
            <div>
              <span className="eyebrow">05 • Relatório de estágio</span>
              <h2>Relatório atualizado do projeto</h2>
              <p>
                Documento correspondente às atividades desenvolvidas até a data de
                elaboração deste portfólio.
              </p>
            </div>
            <a className="button primary" href={reportUrl} target="_blank" rel="noreferrer">
              Abrir relatório <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">C</span>
          <div><strong>Contabiliza</strong><small>Portfólio acadêmico</small></div>
        </div>
        <p>Luiz Fernando Hillebrande • Matrícula 242072023</p>
        <div className="footer-links">
          <a href="https://github.com/LuizHillebrande/portifolio-contabiliza-242072023" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </footer>

      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title}>
          <button type="button" onClick={() => setSelectedImage(null)} aria-label="Fechar imagem">
            ×
          </button>
          <img src={selectedImage.src} alt={selectedImage.title} />
          <strong>{selectedImage.title}</strong>
        </div>
      )}
    </>
  );
}

export default App;
