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
          heroTitle: ["IA, software y", "robótica para", "empresas que", "escalan"],
          heroText:
            "Tecnotitan crea tecnología aplicada para empresas: sistemas de IA, software operativo, productos interactivos y robótica con potencial de convertirse en plataformas globales.",
          primaryCta: "Tesis para inversionistas",
          secondaryCta: "Explorar productos",
          nextPreview: "Servicios de alto valor, productos propios e IP escalable",
          visionLabel: "Visión corporativa",
          visionTitle: "Construir una compañía de tecnología aplicada con alcance global.",
          visionParagraphs: [
            "Tecnotitan avanza hacia un modelo donde servicios, productos y divisiones técnicas alimentan una misma base de conocimiento, propiedad intelectual y capacidades reutilizables.",
            "La visión es crear software empresarial, sistemas de IA, experiencias interactivas y robótica que puedan escalar desde Latinoamérica hacia mercados globales."
          ],
          visionCards: [
            ["Software", "Sistemas operativos para empresas", "Plataformas internas, automatización, datos y productos web que mejoran ejecución."],
            ["IA", "Inteligencia aplicada al trabajo", "Agentes, análisis, copilotos y flujos inteligentes integrados al negocio."],
            ["Interactivo", "Videojuegos y simulación", "Experiencias inmersivas para entrenamiento, marca, educación y nuevos productos."],
            ["Robótica", "Sistemas físico-digitales", "Software, sensores, control y datos para conectar operaciones con inteligencia."]
          ],
          marketTitle: "Mercados donde la tecnología aplicada puede crear ventaja.",
          marketText:
            "Tecnotitan apunta a clientes con necesidades reales de digitalización, automatización, experiencias interactivas y sistemas inteligentes.",
          marketCards: [
            ["Empresas", "Software operativo", "Compañías que necesitan CRM interno, portales, tableros, flujos y automatización."],
            ["Operaciones", "IA para productividad", "Equipos de ventas, soporte, finanzas y operaciones con tareas repetibles."],
            ["Educación", "Simulación y aprendizaje", "Instituciones y empresas que requieren entrenamiento, evaluación y experiencias inmersivas."],
            ["Entretenimiento", "Videojuegos y marca", "Productos interactivos, gamificación, experiencias de marca y nuevos contenidos digitales."],
            ["Industria", "Robótica y datos", "Procesos que pueden conectar sensores, software, control e inteligencia operativa."],
            ["Institucional", "Transformación tecnológica", "Organizaciones públicas o privadas que necesitan estrategia, implementación y adopción."]
          ],
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
            ["Videojuegos", "Titan Interactive", "Videojuegos, simuladores, experiencias inmersivas y gamificación para entrenamiento y marca."],
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
            ["02", "Hoja de ruta tecnológica", "Arquitectura, prioridades, stack, riesgos y plan de ejecución."],
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
            ["IA", "Tecnotitan AI", "Agentes, automatización, analítica e infraestructura de inteligencia artificial."],
            ["Videojuegos", "Tecnotitan Games", "Videojuegos, simuladores, gamificación y experiencias interactivas."],
            ["Robótica", "Tecnotitan Robotics", "Sistemas físico-digitales, control, sensores e integración."],
            ["Consultoría", "Tecnotitan Advisory", "Transformación tecnológica, estrategia IA y adopción empresarial."],
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
            ["Aliados", "Alianzas estratégicas", "Construcción conjunta de productos, integraciones o nuevas divisiones."],
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
        title: "Tecnotitan | Applied AI, software and robotics for global markets",
        description:
          "Tecnotitan builds enterprise software, AI systems, interactive products and robotics capabilities for global markets.",
        content: {
          heroTitle: ["AI, software", "and robotics", "for companies", "that scale"],
          heroText:
            "Tecnotitan builds applied technology for enterprises: AI systems, operating software, interactive products and robotics capabilities with a path toward global platforms.",
          primaryCta: "Investor thesis",
          secondaryCta: "Explore products",
          nextPreview: "High-value services, proprietary products and scalable IP",
          visionLabel: "Corporate vision",
          visionTitle: "Build an applied technology company with global reach.",
          visionParagraphs: [
            "Tecnotitan is moving toward a model where services, products and technical divisions compound into shared knowledge, proprietary IP and reusable capabilities.",
            "The vision is to create enterprise software, AI systems, interactive products and robotics capabilities that can scale from Latin America into global markets."
          ],
          visionCards: [
            ["Software", "Operating systems for companies", "Internal platforms, automation, data and web products that improve execution."],
            ["AI", "Applied intelligence at work", "Agents, analytics, copilots and intelligent workflows embedded into business operations."],
            ["Interactive", "Games and simulation", "Immersive experiences for training, brand engagement, education and new products."],
            ["Robotics", "Physical-digital systems", "Software, sensors, control and data to connect operations with intelligence."]
          ],
          marketTitle: "Markets where applied technology can create durable advantage.",
          marketText:
            "Tecnotitan targets customers with real needs in digitization, automation, interactive experiences and intelligent systems.",
          marketCards: [
            ["Enterprises", "Operating software", "Companies that need internal CRM, portals, dashboards, workflows and automation."],
            ["Operations", "AI for productivity", "Sales, support, finance and operations teams with repeatable work."],
            ["Education", "Simulation and learning", "Institutions and companies that need training, evaluation and immersive experiences."],
            ["Entertainment", "Games and brand", "Interactive products, gamification, brand experiences and new digital content."],
            ["Industry", "Robotics and data", "Processes that can connect sensors, software, control and operational intelligence."],
            ["Institutional", "Technology transformation", "Public or private organizations that need strategy, implementation and adoption."]
          ],
          gatewayTitle: "A multi-division technology company built for compounding IP",
          gatewayText:
            "Tecnotitan is structured so services, products and technical divisions reinforce each other across markets.",
          cards: [
            ["01", "About", "Operating thesis, ambition and execution principles."],
            ["02", "Products", "Software, AI, interactive products and robotics evolving into platforms."],
            ["03", "Services", "AI advisory and technology transformation for enterprise operators."],
            ["04", "Divisions", "A portfolio architecture designed to enter multiple technology markets."],
            ["05", "Investors", "Market thesis, business model, roadmap and growth narrative."],
            ["06", "Contact", "Commercial partnerships, strategic alliances and capital conversations."]
          ]
        }
      },
      "nosotros.html": {
        title: "About | Tecnotitan",
        description:
          "Learn about Tecnotitan's vision, mission and principles as an applied technology company.",
        content: {
          label: "About",
          titleLines: ["An applied technology", "company with global ambition"],
          intro:
            "Tecnotitan turns software, AI, interactive technology and robotics capabilities into products and services that improve enterprise performance.",
          thesisLabel: "Vision",
          thesisTitle: "To become a Latin American applied technology company with global reach.",
          paragraphs: [
            "Our thesis is simple: the next generation of companies will be built on software, data, artificial intelligence, interactive interfaces and intelligent physical systems.",
            "Tecnotitan integrates those disciplines to create proprietary solutions, support enterprise transformation and open new growth divisions over time."
          ],
          cards: [
            ["01", "Execution over narrative", "We prioritize functional, measurable and scalable systems over abstract promises."],
            ["02", "AI as an operating layer", "We treat artificial intelligence as core infrastructure for automation, decision-making and learning."],
            ["03", "Multidisciplinary leverage", "Software, interactive products, robotics and advisory operate as one technology portfolio."]
          ]
        }
      },
      "productos.html": {
        title: "Products | Tecnotitan",
        description:
          "Tecnotitan products across enterprise software, artificial intelligence, video games and robotics.",
        content: {
          label: "Products",
          titleLines: ["Products that can", "compound into platforms"],
          intro:
            "We build proprietary products and custom systems with a path toward repeatable software, data and AI platforms.",
          cards: [
            ["Software", "Titan Business Systems", "Web applications, operating dashboards, internal CRM, process automation and enterprise portals."],
            ["AI", "Titan AI Agents", "Intelligent agents for support, sales, operations, document analysis and task automation."],
            ["Interactive", "Titan Interactive", "Video games, simulators, immersive experiences and gamification for training and brand engagement."],
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
          titleLines: ["Advisory that leads", "to implementation"],
          intro:
            "We help companies identify, design and implement AI and software systems that produce measurable operational impact.",
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
          titleLines: ["A portfolio of", "technology engines"],
          intro:
            "Each division is designed to create reusable capabilities, proprietary IP and independent commercial opportunities.",
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
          "Tecnotitan's investor page: applied AI, enterprise software, interactive technology, robotics and a services-to-products growth model.",
        content: {
          label: "Investors",
          titleLines: ["Applied technology", "built from Latin America", "for global markets"],
          intro:
            "Tecnotitan combines high-value services, proprietary products and technical divisions to build a scalable applied technology company with multiple paths to IP creation.",
          metrics: [
            ["Market", "AI + software", "Enterprise budgets are moving toward automation, data infrastructure and intelligent workflows."],
            ["Expansion", "Multi-division", "Software, AI, interactive technology, robotics and advisory as connected growth engines."],
            ["Model", "Services to products", "Use client work to learn, generate revenue, build IP and package repeatable platforms."]
          ],
          thesisLabel: "Thesis",
          thesisTitle: "The best technology partners will combine advisory depth with product execution.",
          paragraphs: [
            "Enterprise technology is shifting from traditional software delivery toward agentic systems, automation, data infrastructure, interactive interfaces and robotics-enabled operations. Tecnotitan is positioned at that convergence.",
            "Our growth path combines service revenue, proprietary product development, technical IP and future division-level spin-off opportunities."
          ],
          cards: [
            ["01", "Build traction through services", "Work with companies on real operational problems and convert delivery patterns into reusable capabilities."],
            ["02", "Package proprietary products", "Turn internal tools and proven workflows into commercial platforms with repeatable value."],
            ["03", "Scale globally from LatAm", "Sell applied technology from Latin America into companies facing global transformation pressure."]
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
            "Enterprise projects, strategic partnerships, investment conversations and new technology opportunities.",
          cards: [
            ["Companies", "Projects and consulting", "Technological transformation, AI, software and automation."],
            ["Partners", "Strategic partnerships", "Joint product development, integrations or new divisions."],
            ["Capital", "Investors", "Conversations about thesis, growth strategy and future financing rounds."]
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
        title: "Tecnotitan | IA aplicada, software e robótica para Brasil e mercados globais",
        description:
          "A Tecnotitan cria software empresarial, sistemas de IA, produtos interativos e capacidades de robótica para Brasil, América Latina e mercados globais.",
        content: {
          heroTitle: ["IA, software", "e robótica para", "empresas que", "escalam"],
          heroText:
            "A Tecnotitan cria tecnologia aplicada para empresas: sistemas de IA, software operacional, produtos interativos e robótica com caminho para plataformas globais.",
          primaryCta: "Tese para investidores",
          secondaryCta: "Explorar produtos",
          nextPreview: "Serviços de alto valor, produtos próprios e IP escalável",
          visionLabel: "Visão corporativa",
          visionTitle: "Construir uma empresa de tecnologia aplicada com alcance global.",
          visionParagraphs: [
            "A Tecnotitan avança para um modelo em que serviços, produtos e divisões técnicas alimentam uma mesma base de conhecimento, propriedade intelectual e capacidades reutilizáveis.",
            "A visão é criar software empresarial, sistemas de IA, produtos interativos e robótica que possam escalar da América Latina para mercados globais."
          ],
          visionCards: [
            ["Software", "Sistemas operacionais para empresas", "Plataformas internas, automação, dados e produtos web que melhoram a execução."],
            ["IA", "Inteligência aplicada ao trabalho", "Agentes, análise, copilotos e fluxos inteligentes integrados ao negócio."],
            ["Interativo", "Videogames e simulação", "Experiências imersivas para treinamento, marca, educação e novos produtos."],
            ["Robótica", "Sistemas físico-digitais", "Software, sensores, controle e dados para conectar operações com inteligência."]
          ],
          marketTitle: "Mercados onde tecnologia aplicada pode criar vantagem.",
          marketText:
            "A Tecnotitan mira clientes com necessidades reais de digitalização, automação, experiências interativas e sistemas inteligentes.",
          marketCards: [
            ["Empresas", "Software operacional", "Companhias que precisam de CRM interno, portais, painéis, fluxos e automação."],
            ["Operações", "IA para produtividade", "Equipes de vendas, suporte, finanças e operações com tarefas repetíveis."],
            ["Educação", "Simulação e aprendizagem", "Instituições e empresas que precisam de treinamento, avaliação e experiências imersivas."],
            ["Entretenimento", "Videogames e marca", "Produtos interativos, gamificação, experiências de marca e novos conteúdos digitais."],
            ["Indústria", "Robótica e dados", "Processos que podem conectar sensores, software, controle e inteligência operacional."],
            ["Institucional", "Transformação tecnológica", "Organizações públicas ou privadas que precisam de estratégia, implementação e adoção."]
          ],
          gatewayTitle: "Uma empresa multivisão com potencial de IP acumulável",
          gatewayText:
            "A Tecnotitan conecta serviços, produtos e divisões técnicas para criar capacidades reutilizáveis em diferentes mercados.",
          cards: [
            ["01", "Sobre", "Tese operacional, ambição regional e princípios de execução."],
            ["02", "Produtos", "Software, IA, produtos interativos e robótica com caminho para plataformas."],
            ["03", "Serviços", "Consultoria em IA e transformação tecnológica para empresas."],
            ["04", "Divisões", "Arquitetura de portfólio para entrar em vários mercados de tecnologia."],
            ["05", "Investidores", "Tese, oportunidade, modelo e narrativa de crescimento."],
            ["06", "Contato", "Conversas comerciais, alianças estratégicas e investimento."]
          ]
        }
      },
      "nosotros.html": {
        title: "Sobre | Tecnotitan",
        description:
          "Conheça a visão, missão e princípios da Tecnotitan como empresa de tecnologia aplicada.",
        content: {
          label: "Sobre",
          titleLines: ["Construímos tecnologia", "com ambição regional e global"],
          intro:
            "A Tecnotitan transforma capacidades de software, IA, tecnologia interativa e robótica em produtos e serviços para elevar a competitividade das empresas.",
          thesisLabel: "Visão",
          thesisTitle: "Ser uma empresa latino-americana de tecnologia aplicada com alcance global.",
          paragraphs: [
            "Nossa tese é simples: a próxima geração de empresas será construída sobre software, dados, inteligência artificial, interfaces interativas e sistemas físicos inteligentes.",
            "A Tecnotitan integra essas disciplinas para criar soluções próprias, apoiar transformações empresariais e abrir novas divisões de crescimento ao longo do tempo."
          ],
          cards: [
            ["01", "Execução antes da narrativa", "Priorizamos sistemas funcionais, mensuráveis e escaláveis acima de promessas abstratas."],
            ["02", "IA como camada operacional", "Tratamos a inteligência artificial como infraestrutura para automatizar, decidir e aprender."],
            ["03", "Alavancagem multidisciplinar", "Software, produtos interativos, robótica e consultoria atuam como um único portfólio tecnológico."]
          ]
        }
      },
      "productos.html": {
        title: "Produtos | Tecnotitan",
        description:
          "Produtos da Tecnotitan em software empresarial, inteligência artificial, videogames e robótica.",
        content: {
          label: "Produtos",
          titleLines: ["Produtos com caminho", "para plataformas"],
          intro:
            "Construímos produtos próprios e sistemas sob medida que podem evoluir para plataformas repetíveis de software, dados e IA.",
          cards: [
            ["Software", "Titan Business Systems", "Aplicações web, painéis operacionais, CRM interno, automação de processos e portais empresariais."],
            ["IA", "Titan AI Agents", "Agentes inteligentes para suporte, vendas, operações, análise documental e automação de tarefas."],
            ["Interativo", "Titan Interactive", "Videogames, simuladores, experiências imersivas e gamificação para treinamento e marca."],
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
          titleLines: ["Consultoria que leva", "à implementação"],
          intro:
            "Ajudamos empresas a identificar, desenhar e implementar IA e software com impacto operacional mensurável.",
          timelineLabel: "Serviços",
          cards: [
            ["01", "Diagnóstico IA", "Avaliação de processos, dados, automações possíveis e retorno esperado."],
            ["02", "Roteiro tecnológico", "Arquitetura, prioridades, stack, riscos e plano de execução."],
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
          titleLines: ["Um portfólio de", "motores tecnológicos"],
          intro:
            "Cada divisão é desenhada para criar capacidades reutilizáveis, propriedade intelectual e oportunidades comerciais independentes.",
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
          "Página para investidores da Tecnotitan: IA aplicada, software empresarial, tecnologia interativa, robótica e modelo de serviços para produtos.",
        content: {
          label: "Investidores",
          titleLines: ["Tecnologia aplicada", "da América Latina", "para mercados globais"],
          intro:
            "A Tecnotitan combina serviços de alto valor, produtos próprios e divisões técnicas para construir uma empresa escalável de tecnologia aplicada, com potencial de criação de IP.",
          metrics: [
            ["Mercado", "IA + software", "Empresas estão direcionando orçamento para automação, dados e fluxos inteligentes."],
            ["Expansão", "Multidivisão", "Software, IA, tecnologia interativa, robótica e consultoria como motores conectados."],
            ["Modelo", "Serviços para produtos", "Usar projetos reais para gerar receita, aprender, criar IP e empacotar plataformas."]
          ],
          thesisLabel: "Tese",
          thesisTitle: "As melhores empresas de tecnologia combinam profundidade consultiva com execução de produto.",
          paragraphs: [
            "A tecnologia empresarial está migrando do software tradicional para sistemas com agentes, automação, dados, interfaces interativas e operações habilitadas por robótica. A Tecnotitan se posiciona nessa convergência.",
            "Nossa rota combina receita por serviços, desenvolvimento de produtos próprios, propriedade intelectual e futuras oportunidades de spin-off por divisão."
          ],
          cards: [
            ["01", "Tração via serviços", "Resolver problemas reais de empresas e transformar padrões de entrega em capacidades reutilizáveis."],
            ["02", "Produtos próprios", "Converter ferramentas internas e fluxos validados em plataformas comerciais."],
            ["03", "Escala Brasil e LatAm", "Expandir tecnologia aplicada para empresas no Brasil, América Latina e mercados globais."]
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
            "Projetos empresariais, alianças estratégicas, conversas de investimento e novas oportunidades tecnológicas.",
          cards: [
            ["Empresas", "Projetos e consultoria", "Transformação tecnológica, IA, software e automação."],
            ["Aliados", "Parcerias estratégicas", "Construção conjunta de produtos, integrações ou novas divisões."],
            ["Capital", "Investidores", "Conversas sobre tese, estratégia de crescimento e futuras rodadas."]
          ]
        }
      }
    }
  }
};

const pageName = window.location.pathname.split("/").pop() || "index.html";
const supportedLanguages = Object.keys(languages);
const languageNames = {
  es: "Español",
  en: "English",
  pt: "Português"
};
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
  switcher.setAttribute("aria-label", "Selector de idioma");

  supportedLanguages.forEach((language) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.language = language;
    button.textContent = languages[language].label;
    button.setAttribute("aria-label", languageNames[language]);
    button.setAttribute("title", languageNames[language]);
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
    button.setAttribute("aria-label", `${languageNames[button.dataset.language]}${isCurrent ? " activo" : ""}`);
  });

  if (pageName === "index.html") {
    setTitleLines("#hero-title", content.heroTitle);
    setText(".hero-copy p", content.heroText);
    setText(".button-primary", content.primaryCta);
    setText(".button-secondary", content.secondaryCta);
    setText(".next-preview strong", content.nextPreview);
    setText(".corporate-vision .text-columns span", content.visionLabel);
    setText("#vision-title", content.visionTitle);
    document.querySelectorAll(".corporate-vision .text-columns article:last-child p").forEach((paragraph, index) => {
      if (content.visionParagraphs[index]) {
        paragraph.textContent = content.visionParagraphs[index];
      }
    });
    setCards(".vision-grid article", content.visionCards);
    setText("#market-title", content.marketTitle);
    setText(".market-copy p", content.marketText);
    setCards(".market-grid article", content.marketCards);
    setText("#gateway-title", content.gatewayTitle);
    setText(".gateway-copy p", content.gatewayText);
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
