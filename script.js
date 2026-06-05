const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");

const languages = {
  es: {
    label: "ES",
    nav: ["Inicio", "Nosotros", "Productos", "Servicios", "Divisiones", "Inversionistas", "Contacto"],
    headerAction: "Agendar conversación",
    writeAction: "Escribir",
    openNav: "Abrir navegación",
    closeNav: "Cerrar navegación",
    brandHome: "Tecnotitan inicio",
    mainNav: "Navegación principal",
    footerNav: "Navegación secundaria",
    pages: {
      "index.html": {
        title: "Tecnotitan | Tecnología aplicada para mercados globales",
        description:
          "Tecnotitan crea software, inteligencia artificial, videojuegos y robótica para empresas e inversionistas globales.",
        content: {
          heroTitle: ["Tecnología que", "convierte ideas", "en sistemas", "globales"],
          heroText:
            "Tecnotitan desarrolla software, inteligencia artificial, videojuegos y robótica para empresas que buscan transformación tecnológica.",
          primaryCta: "Visión para inversionistas",
          secondaryCta: "Explorar productos",
          nextPreview: "Software, IA, videojuegos, robótica y consultoría",
          gatewayTitle: "Una compañía tecnológica construida por divisiones",
          gatewayText:
            "Separamos la historia corporativa en páginas claras para clientes, aliados e inversionistas globales.",
          cards: [
            ["01", "Nosotros", "Misión, tesis tecnológica y principios de ejecución."],
            ["02", "Productos", "Software, IA, videojuegos y robótica convertidos en plataformas."],
            ["03", "Servicios", "Consultoría en inteligencia artificial y transformación tecnológica."],
            ["04", "Divisiones", "Un portafolio operacional para construir múltiples mercados."],
            ["05", "Inversionistas", "Visión, oportunidad, modelo y ruta de crecimiento."],
            ["06", "Contacto", "Conversaciones comerciales, alianzas e inversión."]
          ]
        }
      },
      "nosotros.html": {
        title: "Nosotros | Tecnotitan",
        description:
          "Conoce la visión, misión y principios de Tecnotitan como compañía de tecnología aplicada.",
        content: {
          label: "Nosotros",
          titleLines: ["Construimos tecnología", "con ambición global"],
          intro:
            "Tecnotitan nace para convertir capacidades de software, IA, videojuegos y robótica en productos y servicios que eleven la competitividad de empresas.",
          thesisLabel: "Visión",
          thesisTitle: "Ser una fábrica de tecnología aplicada para mercados globales.",
          paragraphs: [
            "Nuestra tesis es simple: las compañías que dominen software, datos, inteligencia artificial, experiencias interactivas y sistemas físicos inteligentes podrán crear ventajas duraderas.",
            "Tecnotitan integra esas disciplinas para construir soluciones propias, acompañar transformaciones empresariales y abrir nuevas divisiones de crecimiento."
          ],
          cards: [
            ["01", "Producto antes que presentación", "Priorizamos sistemas funcionales, medibles y escalables sobre promesas abstractas."],
            ["02", "IA como infraestructura", "Tratamos la inteligencia artificial como una capa central para automatizar, decidir y aprender."],
            ["03", "Multidisciplina ejecutable", "Software, juegos, robótica y consultoría trabajan como un solo portafolio tecnológico."]
          ]
        }
      },
      "productos.html": {
        title: "Productos | Tecnotitan",
        description:
          "Productos de Tecnotitan en software empresarial, inteligencia artificial, videojuegos y robótica.",
        content: {
          label: "Productos",
          titleLines: ["Plataformas para", "empresas que escalan"],
          intro:
            "Construimos productos propios y sistemas a medida que pueden evolucionar hacia plataformas repetibles.",
          cards: [
            ["Software", "Titan Business Systems", "Aplicaciones web, paneles operativos, CRM interno, automatización de procesos y portales empresariales."],
            ["IA", "Titan AI Agents", "Agentes inteligentes para soporte, ventas, operaciones, análisis documental y automatización de tareas."],
            ["Games", "Titan Interactive", "Videojuegos, simuladores, experiencias inmersivas y gamificación para entrenamiento y marca."],
            ["Robótica", "Titan Robotics Stack", "Interfaces, sensores, control, datos y software para sistemas físico-digitales inteligentes."]
          ]
        }
      },
      "servicios.html": {
        title: "Servicios | Tecnotitan",
        description:
          "Servicios de consultoría en inteligencia artificial y transformación tecnológica para empresas.",
        content: {
          label: "Servicios",
          titleLines: ["Consultoría para", "transformación tecnológica"],
          intro:
            "Ayudamos a empresas a identificar, diseñar e implementar inteligencia artificial y software con impacto operativo.",
          timelineLabel: "Servicios",
          cards: [
            ["01", "Diagnóstico IA", "Evaluación de procesos, datos, automatizaciones posibles y retorno esperado."],
            ["02", "Roadmap tecnológico", "Arquitectura, prioridades, stack, riesgos y plan de ejecución."],
            ["03", "Implementación", "Desarrollo de software, agentes IA, integraciones y prototipos funcionales."],
            ["04", "Adopción", "Capacitación, medición, mejoras continuas y transferencia de capacidades."]
          ]
        }
      },
      "divisiones.html": {
        title: "Divisiones | Tecnotitan",
        description:
          "Divisiones de Tecnotitan en software, IA, videojuegos, robótica y ventures tecnológicos.",
        content: {
          label: "Divisiones",
          titleLines: ["Un portafolio", "de motores tecnológicos"],
          intro:
            "Cada división crea capacidades reutilizables, propiedad intelectual y oportunidades comerciales independientes.",
          cards: [
            ["Software", "Tecnotitan Software", "Productos web, sistemas empresariales y plataformas digitales."],
            ["AI", "Tecnotitan AI", "Agentes, automatización, analítica e infraestructura de inteligencia artificial."],
            ["Games", "Tecnotitan Games", "Videojuegos, simuladores, gamificación y experiencias interactivas."],
            ["Robotics", "Tecnotitan Robotics", "Sistemas físico-digitales, control, sensores e integración."],
            ["Consulting", "Tecnotitan Advisory", "Transformación tecnológica, estrategia IA y adopción empresarial."],
            ["Ventures", "Tecnotitan Ventures", "Experimentación, spin-offs y nuevos productos escalables."]
          ]
        }
      },
      "inversionistas.html": {
        title: "Inversionistas | Tecnotitan",
        description:
          "Página para inversionistas globales de Tecnotitan: tesis, mercado, modelo y visión.",
        content: {
          label: "Inversionistas",
          titleLines: ["Una tesis tecnológica", "para mercados globales"],
          intro:
            "Tecnotitan combina servicios de alto valor, productos propios y divisiones técnicas para construir una compañía escalable de tecnología aplicada.",
          metrics: [
            ["Mercado", "Software + IA", "Digitalización empresarial acelerada por automatización inteligente."],
            ["Expansión", "Multidivisión", "Software, IA, videojuegos, robótica y consultoría como motores conectados."],
            ["Modelo", "Servicios a producto", "Aprendizaje con clientes, IP propia y plataformas repetibles."]
          ],
          thesisLabel: "Tesis",
          thesisTitle: "Las empresas necesitan socios que construyan, no solo asesoren.",
          paragraphs: [
            "El mercado está migrando de software tradicional a sistemas con agentes, automatización, datos y experiencias interactivas. Tecnotitan se posiciona en esa convergencia.",
            "Nuestra ruta combina ingresos por servicios, desarrollo de productos, propiedad intelectual y oportunidades de spin-off por división."
          ],
          cards: [
            ["01", "Tracción inicial", "Construir casos reales con empresas y convertirlos en capacidades repetibles."],
            ["02", "Productos propios", "Empaquetar soluciones internas como plataformas y herramientas comerciales."],
            ["03", "Escala global", "Vender tecnología desde Latinoamérica hacia empresas con necesidades globales."]
          ]
        }
      },
      "contacto.html": {
        title: "Contacto | Tecnotitan",
        description:
          "Contacta a Tecnotitan para proyectos, servicios, alianzas e inversión.",
        content: {
          label: "Contacto",
          titleLines: ["Hablemos de", "la siguiente tecnología"],
          intro:
            "Proyectos empresariales, alianzas, inversión y nuevas oportunidades tecnológicas.",
          cards: [
            ["Empresas", "Proyectos y consultoría", "Transformación tecnológica, IA, software y automatización."],
            ["Partners", "Alianzas estratégicas", "Construcción conjunta de productos, integraciones o nuevas divisiones."],
            ["Capital", "Inversionistas", "Conversaciones sobre visión, crecimiento y rondas futuras."]
          ]
        }
      }
    }
  },
  en: {
    label: "EN",
    nav: ["Home", "About", "Products", "Services", "Divisions", "Investors", "Contact"],
    headerAction: "Schedule a call",
    writeAction: "Email us",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    brandHome: "Tecnotitan home",
    mainNav: "Main navigation",
    footerNav: "Secondary navigation",
    pages: {
      "index.html": {
        title: "Tecnotitan | Applied technology for global markets",
        description:
          "Tecnotitan builds software, artificial intelligence, video games and robotics for companies and global investors.",
        content: {
          heroTitle: ["Technology that", "turns ideas", "into global", "systems"],
          heroText:
            "Tecnotitan develops software, artificial intelligence, video games and robotics for companies pursuing technological transformation.",
          primaryCta: "Investor vision",
          secondaryCta: "Explore products",
          nextPreview: "Software, AI, video games, robotics and consulting",
          gatewayTitle: "A technology company built through focused divisions",
          gatewayText:
            "We organize the corporate story into clear pages for customers, partners and global investors.",
          cards: [
            ["01", "About", "Mission, technology thesis and execution principles."],
            ["02", "Products", "Software, AI, video games and robotics shaped into platforms."],
            ["03", "Services", "Artificial intelligence consulting and technological transformation."],
            ["04", "Divisions", "An operational portfolio designed to build multiple markets."],
            ["05", "Investors", "Vision, opportunity, model and growth path."],
            ["06", "Contact", "Commercial conversations, partnerships and investment."]
          ]
        }
      },
      "nosotros.html": {
        title: "About | Tecnotitan",
        description:
          "Learn about Tecnotitan's vision, mission and principles as an applied technology company.",
        content: {
          label: "About",
          titleLines: ["We build technology", "with global ambition"],
          intro:
            "Tecnotitan exists to turn software, AI, video games and robotics capabilities into products and services that raise enterprise competitiveness.",
          thesisLabel: "Vision",
          thesisTitle: "To become an applied technology factory for global markets.",
          paragraphs: [
            "Our thesis is simple: companies that master software, data, artificial intelligence, interactive experiences and intelligent physical systems will create durable advantages.",
            "Tecnotitan integrates those disciplines to build proprietary solutions, support enterprise transformation and open new growth divisions."
          ],
          cards: [
            ["01", "Product before presentation", "We prioritize functional, measurable and scalable systems over abstract promises."],
            ["02", "AI as infrastructure", "We treat artificial intelligence as a core layer for automation, decision-making and learning."],
            ["03", "Executable multidiscipline", "Software, games, robotics and consulting operate as one technology portfolio."]
          ]
        }
      },
      "productos.html": {
        title: "Products | Tecnotitan",
        description:
          "Tecnotitan products across enterprise software, artificial intelligence, video games and robotics.",
        content: {
          label: "Products",
          titleLines: ["Platforms for", "companies that scale"],
          intro:
            "We build proprietary products and custom systems that can evolve into repeatable platforms.",
          cards: [
            ["Software", "Titan Business Systems", "Web applications, operating dashboards, internal CRM, process automation and enterprise portals."],
            ["AI", "Titan AI Agents", "Intelligent agents for support, sales, operations, document analysis and task automation."],
            ["Games", "Titan Interactive", "Video games, simulators, immersive experiences and gamification for training and brand engagement."],
            ["Robotics", "Titan Robotics Stack", "Interfaces, sensors, control, data and software for intelligent physical-digital systems."]
          ]
        }
      },
      "servicios.html": {
        title: "Services | Tecnotitan",
        description:
          "Artificial intelligence consulting and technological transformation services for companies.",
        content: {
          label: "Services",
          titleLines: ["Consulting for", "technological transformation"],
          intro:
            "We help companies identify, design and implement artificial intelligence and software with operational impact.",
          timelineLabel: "Services",
          cards: [
            ["01", "AI diagnosis", "Assessment of processes, data, automation opportunities and expected return."],
            ["02", "Technology roadmap", "Architecture, priorities, stack, risks and execution plan."],
            ["03", "Implementation", "Software development, AI agents, integrations and functional prototypes."],
            ["04", "Adoption", "Training, measurement, continuous improvement and capability transfer."]
          ]
        }
      },
      "divisiones.html": {
        title: "Divisions | Tecnotitan",
        description:
          "Tecnotitan divisions across software, AI, video games, robotics and technology ventures.",
        content: {
          label: "Divisions",
          titleLines: ["A portfolio", "of technology engines"],
          intro:
            "Each division creates reusable capabilities, intellectual property and independent commercial opportunities.",
          cards: [
            ["Software", "Tecnotitan Software", "Web products, enterprise systems and digital platforms."],
            ["AI", "Tecnotitan AI", "Agents, automation, analytics and artificial intelligence infrastructure."],
            ["Games", "Tecnotitan Games", "Video games, simulators, gamification and interactive experiences."],
            ["Robotics", "Tecnotitan Robotics", "Physical-digital systems, control, sensors and integration."],
            ["Consulting", "Tecnotitan Advisory", "Technological transformation, AI strategy and enterprise adoption."],
            ["Ventures", "Tecnotitan Ventures", "Experimentation, spin-offs and new scalable products."]
          ]
        }
      },
      "inversionistas.html": {
        title: "Investors | Tecnotitan",
        description:
          "Tecnotitan's global investor page: thesis, market, model and vision.",
        content: {
          label: "Investors",
          titleLines: ["A technology thesis", "for global markets"],
          intro:
            "Tecnotitan combines high-value services, proprietary products and technical divisions to build a scalable applied technology company.",
          metrics: [
            ["Market", "Software + AI", "Enterprise digitization accelerated by intelligent automation."],
            ["Expansion", "Multi-division", "Software, AI, video games, robotics and consulting as connected engines."],
            ["Model", "Services to product", "Customer learning, proprietary IP and repeatable platforms."]
          ],
          thesisLabel: "Thesis",
          thesisTitle: "Companies need partners who build, not only advise.",
          paragraphs: [
            "The market is moving from traditional software to systems powered by agents, automation, data and interactive experiences. Tecnotitan is positioned at that convergence.",
            "Our path combines service revenue, product development, intellectual property and division-level spin-off opportunities."
          ],
          cards: [
            ["01", "Initial traction", "Build real enterprise cases and convert them into repeatable capabilities."],
            ["02", "Proprietary products", "Package internal solutions as commercial platforms and tools."],
            ["03", "Global scale", "Sell technology from Latin America to companies with global needs."]
          ]
        }
      },
      "contacto.html": {
        title: "Contact | Tecnotitan",
        description:
          "Contact Tecnotitan for projects, services, partnerships and investment.",
        content: {
          label: "Contact",
          titleLines: ["Let's talk about", "the next technology"],
          intro:
            "Enterprise projects, partnerships, investment and new technology opportunities.",
          cards: [
            ["Companies", "Projects and consulting", "Technological transformation, AI, software and automation."],
            ["Partners", "Strategic partnerships", "Joint product development, integrations or new divisions."],
            ["Capital", "Investors", "Conversations about vision, growth and future rounds."]
          ]
        }
      }
    }
  },
  pt: {
    label: "PT",
    nav: ["Início", "Sobre", "Produtos", "Serviços", "Divisões", "Investidores", "Contato"],
    headerAction: "Agendar conversa",
    writeAction: "Enviar email",
    openNav: "Abrir navegação",
    closeNav: "Fechar navegação",
    brandHome: "Início da Tecnotitan",
    mainNav: "Navegação principal",
    footerNav: "Navegação secundária",
    pages: {
      "index.html": {
        title: "Tecnotitan | Tecnologia aplicada para mercados globais",
        description:
          "A Tecnotitan cria software, inteligência artificial, videogames e robótica para empresas e investidores globais.",
        content: {
          heroTitle: ["Tecnologia que", "transforma ideias", "em sistemas", "globais"],
          heroText:
            "A Tecnotitan desenvolve software, inteligência artificial, videogames e robótica para empresas que buscam transformação tecnológica.",
          primaryCta: "Visão para investidores",
          secondaryCta: "Explorar produtos",
          nextPreview: "Software, IA, videogames, robótica e consultoria",
          gatewayTitle: "Uma empresa de tecnologia construída por divisões",
          gatewayText:
            "Organizamos a história corporativa em páginas claras para clientes, parceiros e investidores globais.",
          cards: [
            ["01", "Sobre", "Missão, tese tecnológica e princípios de execução."],
            ["02", "Produtos", "Software, IA, videogames e robótica transformados em plataformas."],
            ["03", "Serviços", "Consultoria em inteligência artificial e transformação tecnológica."],
            ["04", "Divisões", "Um portfólio operacional para construir múltiplos mercados."],
            ["05", "Investidores", "Visão, oportunidade, modelo e rota de crescimento."],
            ["06", "Contato", "Conversas comerciais, parcerias e investimento."]
          ]
        }
      },
      "nosotros.html": {
        title: "Sobre | Tecnotitan",
        description:
          "Conheça a visão, missão e princípios da Tecnotitan como empresa de tecnologia aplicada.",
        content: {
          label: "Sobre",
          titleLines: ["Construímos tecnologia", "com ambição global"],
          intro:
            "A Tecnotitan existe para transformar capacidades de software, IA, videogames e robótica em produtos e serviços que elevam a competitividade das empresas.",
          thesisLabel: "Visão",
          thesisTitle: "Ser uma fábrica de tecnologia aplicada para mercados globais.",
          paragraphs: [
            "Nossa tese é simples: empresas que dominam software, dados, inteligência artificial, experiências interativas e sistemas físicos inteligentes poderão criar vantagens duradouras.",
            "A Tecnotitan integra essas disciplinas para construir soluções próprias, apoiar transformações empresariais e abrir novas divisões de crescimento."
          ],
          cards: [
            ["01", "Produto antes da apresentação", "Priorizamos sistemas funcionais, mensuráveis e escaláveis acima de promessas abstratas."],
            ["02", "IA como infraestrutura", "Tratamos a inteligência artificial como uma camada central para automatizar, decidir e aprender."],
            ["03", "Multidisciplina executável", "Software, jogos, robótica e consultoria atuam como um único portfólio tecnológico."]
          ]
        }
      },
      "productos.html": {
        title: "Produtos | Tecnotitan",
        description:
          "Produtos da Tecnotitan em software empresarial, inteligência artificial, videogames e robótica.",
        content: {
          label: "Produtos",
          titleLines: ["Plataformas para", "empresas que escalam"],
          intro:
            "Construímos produtos próprios e sistemas sob medida que podem evoluir para plataformas repetíveis.",
          cards: [
            ["Software", "Titan Business Systems", "Aplicações web, painéis operacionais, CRM interno, automação de processos e portais empresariais."],
            ["IA", "Titan AI Agents", "Agentes inteligentes para suporte, vendas, operações, análise documental e automação de tarefas."],
            ["Games", "Titan Interactive", "Videogames, simuladores, experiências imersivas e gamificação para treinamento e marca."],
            ["Robótica", "Titan Robotics Stack", "Interfaces, sensores, controle, dados e software para sistemas físico-digitais inteligentes."]
          ]
        }
      },
      "servicios.html": {
        title: "Serviços | Tecnotitan",
        description:
          "Serviços de consultoria em inteligência artificial e transformação tecnológica para empresas.",
        content: {
          label: "Serviços",
          titleLines: ["Consultoria para", "transformação tecnológica"],
          intro:
            "Ajudamos empresas a identificar, desenhar e implementar inteligência artificial e software com impacto operacional.",
          timelineLabel: "Serviços",
          cards: [
            ["01", "Diagnóstico IA", "Avaliação de processos, dados, automações possíveis e retorno esperado."],
            ["02", "Roadmap tecnológico", "Arquitetura, prioridades, stack, riscos e plano de execução."],
            ["03", "Implementação", "Desenvolvimento de software, agentes IA, integrações e protótipos funcionais."],
            ["04", "Adoção", "Capacitação, medição, melhorias contínuas e transferência de capacidades."]
          ]
        }
      },
      "divisiones.html": {
        title: "Divisões | Tecnotitan",
        description:
          "Divisões da Tecnotitan em software, IA, videogames, robótica e ventures tecnológicos.",
        content: {
          label: "Divisões",
          titleLines: ["Um portfólio", "de motores tecnológicos"],
          intro:
            "Cada divisão cria capacidades reutilizáveis, propriedade intelectual e oportunidades comerciais independentes.",
          cards: [
            ["Software", "Tecnotitan Software", "Produtos web, sistemas empresariais e plataformas digitais."],
            ["AI", "Tecnotitan AI", "Agentes, automação, analítica e infraestrutura de inteligência artificial."],
            ["Games", "Tecnotitan Games", "Videogames, simuladores, gamificação e experiências interativas."],
            ["Robotics", "Tecnotitan Robotics", "Sistemas físico-digitais, controle, sensores e integração."],
            ["Consulting", "Tecnotitan Advisory", "Transformação tecnológica, estratégia IA e adoção empresarial."],
            ["Ventures", "Tecnotitan Ventures", "Experimentação, spin-offs e novos produtos escaláveis."]
          ]
        }
      },
      "inversionistas.html": {
        title: "Investidores | Tecnotitan",
        description:
          "Página para investidores globais da Tecnotitan: tese, mercado, modelo e visão.",
        content: {
          label: "Investidores",
          titleLines: ["Uma tese tecnológica", "para mercados globais"],
          intro:
            "A Tecnotitan combina serviços de alto valor, produtos próprios e divisões técnicas para construir uma empresa escalável de tecnologia aplicada.",
          metrics: [
            ["Mercado", "Software + IA", "Digitalização empresarial acelerada por automação inteligente."],
            ["Expansão", "Multidivisão", "Software, IA, videogames, robótica e consultoria como motores conectados."],
            ["Modelo", "Serviços para produto", "Aprendizado com clientes, IP própria e plataformas repetíveis."]
          ],
          thesisLabel: "Tese",
          thesisTitle: "As empresas precisam de parceiros que constroem, não apenas aconselham.",
          paragraphs: [
            "O mercado está migrando de software tradicional para sistemas com agentes, automação, dados e experiências interativas. A Tecnotitan se posiciona nessa convergência.",
            "Nossa rota combina receitas por serviços, desenvolvimento de produtos, propriedade intelectual e oportunidades de spin-off por divisão."
          ],
          cards: [
            ["01", "Tração inicial", "Construir casos reais com empresas e convertê-los em capacidades repetíveis."],
            ["02", "Produtos próprios", "Empacotar soluções internas como plataformas e ferramentas comerciais."],
            ["03", "Escala global", "Vender tecnologia da América Latina para empresas com necessidades globais."]
          ]
        }
      },
      "contacto.html": {
        title: "Contato | Tecnotitan",
        description:
          "Entre em contato com a Tecnotitan para projetos, serviços, parcerias e investimento.",
        content: {
          label: "Contato",
          titleLines: ["Vamos falar sobre", "a próxima tecnologia"],
          intro:
            "Projetos empresariais, parcerias, investimento e novas oportunidades tecnológicas.",
          cards: [
            ["Empresas", "Projetos e consultoria", "Transformação tecnológica, IA, software e automação."],
            ["Partners", "Parcerias estratégicas", "Construção conjunta de produtos, integrações ou novas divisões."],
            ["Capital", "Investidores", "Conversas sobre visão, crescimento e rodadas futuras."]
          ]
        }
      }
    }
  }
};

const pageName = window.location.pathname.split("/").pop() || "index.html";
const supportedLanguages = Object.keys(languages);
const queryLanguage = new URLSearchParams(window.location.search).get("lang");
let activeLanguage = supportedLanguages.includes(queryLanguage)
  ? queryLanguage
  : localStorage.getItem("tecnotitan-language") || "es";

if (!supportedLanguages.includes(activeLanguage)) {
  activeLanguage = "es";
}

function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element && value) {
    element.textContent = value;
  }
}

function setTitleLines(selector, lines) {
  const element = document.querySelector(selector);
  if (!element || !lines) {
    return;
  }

  element.innerHTML = lines.map((line) => `<span>${line}</span>`).join("");
}

function setCards(selector, cards) {
  if (!cards) {
    return;
  }

  document.querySelectorAll(selector).forEach((card, index) => {
    const content = cards[index];
    if (!content) {
      return;
    }

    setText("span", content[0], card);
    setText("h3", content[1], card);
    setText("p", content[2], card);
  });
}

function setMetaDescription(value) {
  const meta = document.querySelector('meta[name="description"]');
  if (meta && value) {
    meta.setAttribute("content", value);
  }
}

function buildLanguageSwitcher() {
  if (!header || header.querySelector(".language-switcher")) {
    return;
  }

  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", "Language selector");

  supportedLanguages.forEach((language) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.language = language;
    button.textContent = languages[language].label;
    button.addEventListener("click", () => applyLanguage(language));
    switcher.appendChild(button);
  });

  header.insertBefore(switcher, menuButton);
}

function applyLanguage(language) {
  const dictionary = languages[language] || languages.es;
  const page = dictionary.pages[pageName] || dictionary.pages["index.html"];
  const content = page.content;

  activeLanguage = language;
  localStorage.setItem("tecnotitan-language", language);

  document.documentElement.lang = language;
  document.title = page.title;
  setMetaDescription(page.description);

  document.querySelectorAll(".brand, .footer-brand").forEach((brand) => {
    brand.setAttribute("aria-label", dictionary.brandHome);
  });

  const nav = document.querySelector(".nav");
  const footerNav = document.querySelector(".footer nav");
  if (nav) {
    nav.setAttribute("aria-label", dictionary.mainNav);
  }
  if (footerNav) {
    footerNav.setAttribute("aria-label", dictionary.footerNav);
  }

  document.querySelectorAll(".nav a").forEach((link, index) => {
    if (dictionary.nav[index]) {
      link.textContent = dictionary.nav[index];
    }
  });

  document.querySelectorAll(".footer nav a").forEach((link) => {
    const file = link.getAttribute("href")?.replace("./", "");
    const navFiles = [
      "index.html",
      "nosotros.html",
      "productos.html",
      "servicios.html",
      "divisiones.html",
      "inversionistas.html",
      "contacto.html"
    ];
    const index = navFiles.indexOf(file);
    if (index >= 0) {
      link.textContent = dictionary.nav[index];
    }
  });

  const headerAction = document.querySelector(".header-action");
  if (headerAction) {
    headerAction.textContent = pageName === "contacto.html" ? dictionary.writeAction : dictionary.headerAction;
  }

  if (menuButton) {
    menuButton.setAttribute("aria-label", header.classList.contains("is-open") ? dictionary.closeNav : dictionary.openNav);
  }

  document.querySelectorAll(".language-switcher button").forEach((button) => {
    const isCurrent = button.dataset.language === language;
    button.classList.toggle("is-active", isCurrent);
    button.setAttribute("aria-pressed", String(isCurrent));
  });

  if (pageName === "index.html") {
    setTitleLines("#hero-title", content.heroTitle);
    setText(".hero-copy p", content.heroText);
    setText(".button-primary", content.primaryCta);
    setText(".button-secondary", content.secondaryCta);
    setText(".next-preview strong", content.nextPreview);
    setText("#gateway-title", content.gatewayTitle);
    setText(".section-copy p", content.gatewayText);
    setCards(".gateway-grid a", content.cards);
    return;
  }

  setText(".page-label", content.label);
  setTitleLines(".page-hero h1", content.titleLines);
  setText(".page-hero p:not(.page-label)", content.intro);
  setCards(".page-grid article", content.cards);

  if (content.timelineLabel) {
    const timeline = document.querySelector(".timeline");
    if (timeline) {
      timeline.setAttribute("aria-label", content.timelineLabel);
    }
  }

  if (content.metrics) {
    document.querySelectorAll(".metric-strip article").forEach((metric, index) => {
      const item = content.metrics[index];
      if (!item) {
        return;
      }
      setText("span", item[0], metric);
      setText("strong", item[1], metric);
      setText("p", item[2], metric);
    });
  }

  if (content.thesisLabel) {
    setText(".text-columns article:first-child span", content.thesisLabel);
    setText(".text-columns h2", content.thesisTitle);
    document.querySelectorAll(".text-columns article:last-child p").forEach((paragraph, index) => {
      if (content.paragraphs[index]) {
        paragraph.textContent = content.paragraphs[index];
      }
    });
  }
}

buildLanguageSwitcher();
applyLanguage(activeLanguage);

const navLinks = document.querySelectorAll(".nav a");
const revealItems = document.querySelectorAll(".reveal");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  header.classList.remove("is-open");
  menuButton.setAttribute("aria-label", languages[activeLanguage].openNav);
}

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? languages[activeLanguage].closeNav : languages[activeLanguage].openNav);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
