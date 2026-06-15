const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");

const languages = {
  es: {
    label: "ES",
    nav: ["Inicio", "Nosotros", "Productos", "Servicios", "Guias", "Divisiones", "Inversionistas", "Contacto"],
    headerAction: "Agendar conversación",
    writeAction: "Escribir",
    openNav: "Abrir navegación",
    closeNav: "Cerrar navegación",
    brandHome: "Tecnotitan inicio",
    mainNav: "Navegación principal",
    footerNav: "Navegación secundaria",
    footerMeta: [
      "Tecnotitan Corporate",
      "Software, inteligencia artificial, videojuegos, robótica y transformación tecnológica.",
      "Colombia | Atención global para inversionistas y empresas.",
      "Aviso legal · LinkedIn · Facebook · Instagram",
      "© 2026 Tecnotitan. Todos los derechos reservados."
    ],
    deckUi: ["Solicitar deck", "Ver deck PDF", "Descargar PDF"],
    pages: {
      "index.html": {
        title: "Tecnotitan | Tecnología aplicada para mercados globales",
        description:
          "Tecnotitan crea software, inteligencia artificial, videojuegos y robótica para empresas e inversionistas globales.",
        content: {
          heroTitle: ["Eficiencia", "infinita", "para empresas", "que escalan"],
          heroText:
            "Tecnotitan diseña sistemas de IA, software empresarial y automatización para convertir procesos complejos en operaciones más rápidas, inteligentes y medibles.",
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
          investorCtaTitle: "Acciones para inversionistas",
          investorCtaText: "Accesos directos para revisar la oportunidad, contactar al equipo fundador o iniciar una conversación.",
          investorCtaCards: [
            ["01", "Solicitar investor deck", "Recibe el resumen de tesis, mercado, roadmap y oportunidad de Tecnotitan."],
            ["02", "Contactar al equipo", "Conecta directamente con Tecnotitan para preguntas estratégicas o seguimiento."],
            ["03", "Agendar conversación", "Inicia una conversación sobre inversión, alianzas o crecimiento global."]
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
          leadershipTitle: "Liderazgo y equipo inicial",
          leadershipText:
            "Tecnotitan se construye con una estructura compacta, técnica y orientada a ejecución: liderazgo fundador, consultoría dedicada y capacidad de desarrollo.",
          leadershipCards: [
            ["CEO / Founder", "David Arias Giraldo", "Dirección estratégica, visión de producto, desarrollo corporativo y construcción del portafolio tecnológico."],
            ["Consultoría full-time", "Consultora dedicada", "Acompañamiento en estrategia, operaciones, investigación, documentación y transformación tecnológica."],
            ["Ingeniería", "2 programadores", "Equipo inicial de desarrollo para construir software, prototipos, automatizaciones y productos propios."]
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
            ["IA para pymes", "Copiloto Pyme", "Asistente de IA para ventas, soporte, documentos y automatización operativa de pequeñas y medianas empresas."],
            ["Sistema operativo", "Tecnotitan OS", "Plataforma empresarial para centralizar procesos, datos, automatizaciones, agentes IA y flujos internos."],
            ["Móvil + IA", "Life Copilot", "App móvil de productividad personal con copiloto IA para organizar metas, tareas, hábitos y decisiones."],
            ["Videojuegos", "Tecnotitan Engine", "Motor y toolkit para prototipar videojuegos, simuladores, experiencias interactivas y mundos gamificados."],
            ["Educación", "Academia Tecnotitan", "Plataforma de aprendizaje para IA, software, videojuegos, robótica y transformación tecnológica."],
            ["Atención IA", "Call Center AI Tecnotitan", "Agentes conversacionales para soporte, ventas, seguimiento de clientes y automatización de contact centers."]
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
          divisionThesisLabel: "Arquitectura operacional",
          divisionThesisTitle: "Divisiones conectadas por software, datos e inteligencia aplicada.",
          divisionThesisParagraphs: [
            "Cada división de Tecnotitan puede operar como unidad comercial, laboratorio de propiedad intelectual y fuente de capacidades reutilizables para las demás.",
            "El objetivo es que consultoría, productos y tecnología propia se refuercen entre sí para crear mercados, no solo proyectos aislados."
          ],
          cards: [
            ["Software empresarial", "Tecnotitan Software", "Plataformas web, CRM internos, portales, dashboards y automatización para empresas que necesitan operar mejor."],
            ["Inteligencia artificial", "Tecnotitan AI", "Agentes, copilotos, analítica, automatización documental y flujos inteligentes integrados a procesos reales."],
            ["Videojuegos e interactivo", "Tecnotitan Games", "Videojuegos, simuladores, gamificación y experiencias inmersivas para entrenamiento, marca y nuevos productos."],
            ["Robótica", "Tecnotitan Robotics", "Software, sensores, control y datos para crear sistemas físico-digitales conectados con inteligencia operativa."],
            ["Consultoría tecnológica", "Tecnotitan Advisory", "Estrategia de IA, transformación tecnológica, adopción empresarial y acompañamiento ejecutivo."],
            ["Ventures", "Tecnotitan Ventures", "Experimentación, spin-offs, productos propios y nuevas oportunidades construidas desde capacidades internas."]
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
          opportunityTitle: "Oportunidad de inversión",
          opportunityText:
            "Tecnotitan busca capturar demanda empresarial en IA, software y robótica mientras convierte aprendizaje de servicios en productos propios e IP escalable.",
          opportunityCards: [
            ["01", "Demanda estructural", "Las empresas necesitan automatizar procesos, datos y decisiones para competir."],
            ["02", "Modelo híbrido", "Servicios de alto valor generan ingresos, aprendizaje de mercado y oportunidades de producto."],
            ["03", "IP acumulable", "Cada proyecto puede convertirse en herramientas, agentes, frameworks y plataformas repetibles."],
            ["04", "Expansión regional", "Construir desde Latinoamérica permite vender tecnología aplicada a mercados globales."]
          ],
          indicatorTitle: "Indicadores para seguimiento",
          indicatorText:
            "Un marco profesional para monitorear el avance de Tecnotitan hacia ingresos, productos propios, clientes objetivo y escala regional.",
          indicatorMetrics: [
            ["Mercado objetivo", "Empresas + IA", "Software, automatización, experiencias interactivas y robótica aplicada."],
            ["Áreas de negocio", "5 divisiones", "Software, IA, videojuegos, robótica y consultoría tecnológica."],
            ["Productos", "6 líneas", "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia y Call Center AI."]
          ],
          indicatorCards: [
            ["Clientes objetivo", "Empresas medianas y grandes", "Organizaciones con procesos repetibles, datos subutilizados y presión por automatizar."],
            ["Roadmap", "Servicios a plataformas", "Convertir entregas recurrentes en herramientas internas, módulos comerciales y productos."],
            ["Expansión", "LatAm hacia global", "Validar casos regionales y escalar tecnología aplicada hacia mercados con necesidades similares."]
          ],
          roadmapTitle: "Roadmap estratégico",
          roadmapText:
            "Una ruta de crecimiento por fases para convertir capacidades técnicas en servicios, productos propios y oportunidades de expansión.",
          roadmapCards: [
            ["2026", "Validación y casos reales", "Consolidar servicios de IA/software, construir casos empresariales y documentar patrones repetibles."],
            ["2027", "Productos y propiedad intelectual", "Empaquetar herramientas internas, lanzar primeras líneas comerciales y fortalecer divisiones técnicas."],
            ["2028", "Escala regional y plataformas", "Expandir ventas regionales, convertir soluciones en plataformas y evaluar spin-offs por división."]
          ],
          deckTitle: "Investor Deck / Data Room",
          deckText: "Material preparado para inversionistas que necesitan evaluar la tesis, el mercado, el portafolio y la ruta de ejecución de Tecnotitan.",
          deckCards: [
            ["01", "Tesis y mercado", "Problema, oportunidad, clientes objetivo y razones por las que IA, software y automatización convergen ahora."],
            ["02", "Productos e IP", "Portafolio actual, líneas propias y capacidades que pueden convertirse en plataformas repetibles."],
            ["03", "Equipo y ejecución", "Estructura inicial, liderazgo fundador, capacidades técnicas y forma de operar con foco en producto."],
            ["04", "Roadmap", "Fases de validación, empaquetamiento, expansión regional y construcción de propiedad intelectual."],
            ["05", "Uso de capital", "Prioridades para acelerar producto, ventas, talento técnico, automatización interna y validación comercial."],
            ["06", "Conversación", "Acceso directo para solicitar información adicional, compartir tesis o coordinar una reunión con Tecnotitan."]
          ],
          deckPageButton: "Ver página del deck",
          deckButton: "Solicitar investor deck",
          investorCtaTitle: "Acciones para inversionistas",
          investorCtaText: "Elige el siguiente paso para recibir información, contactar al equipo o abrir una conversación estratégica.",
          investorCtaCards: [
            ["01", "Solicitar investor deck", "Solicita el resumen ejecutivo de tesis, mercado, roadmap y oportunidad."],
            ["02", "Contactar al equipo", "Envía preguntas sobre estrategia, portafolio, equipo o etapa de crecimiento."],
            ["03", "Agendar conversación", "Abre una conversación sobre inversión, alianzas estratégicas o expansión."]
          ],
          formTitle: "Contacto especial para inversionistas",
          formText: "Comparte tu perfil, tesis o interés estratégico y el equipo de Tecnotitan responderá desde info@tecnotitan.com.",
          formLabels: ["Nombre", "Firma / fondo", "País", "Email", "Tipo de interés", "Mensaje"],
          formOptions: ["Seleccionar", "Inversión", "Alianza estratégica", "Investor deck", "Contactar al equipo", "Agendar conversación"],
          formButton: "Enviar a info@tecnotitan.com",
          formSending: "Enviando...",
          formErrorTitle: "No se pudo enviar",
          formErrorText: "Inténtalo de nuevo o escribe directamente a info@tecnotitan.com.",
          formNewsletter: "Quiero suscribirme al newsletter oficial de Tecnotitan.",
          formSuccessTitle: "Solicitud enviada",
          formSuccessText: "Gracias. El equipo de Tecnotitan revisará tu mensaje de inversión y responderá a info@tecnotitan.com.",
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
            "Canal general para quejas, reclamos, sugerencias y solicitudes sobre Tecnotitan.",
          cards: [
            ["Atención", "Solicitudes generales", "Preguntas, comentarios y mensajes sobre Tecnotitan y sus servicios."],
            ["Calidad", "Quejas y reclamos", "Reportes sobre experiencias, procesos o respuestas que necesitan revisión."],
            ["Mejora", "Sugerencias", "Ideas para mejorar productos, servicios, comunicación o experiencia de usuario."]
          ],
          formTitle: "Contacto general",
          formText: "Envía quejas, reclamos, sugerencias o solicitudes generales a info@tecnotitan.com.",
          formLabels: ["Nombre", "Email", "Empresa", "País", "Tipo de solicitud", "Mensaje"],
          formOptions: ["Seleccionar", "Queja", "Reclamo", "Sugerencia", "Solicitud general"],
          formButton: "Enviar a info@tecnotitan.com",
          formSending: "Enviando...",
          formErrorTitle: "No se pudo enviar",
          formErrorText: "Inténtalo de nuevo o escribe directamente a info@tecnotitan.com.",
          formNewsletter: "Quiero suscribirme al newsletter oficial de Tecnotitan.",
          formSuccessTitle: "Mensaje enviado",
          formSuccessText: "Gracias. Recibimos tu solicitud general y responderemos a info@tecnotitan.com."
        }
      },
      "investor-deck.html": {
        title: "Investor Deck | Tecnotitan",
        description:
          "Solicita el futuro Investor Deck PDF de Tecnotitan: tesis, mercado, productos, equipo, roadmap y prioridades de capital.",
        content: {
          label: "Investor Deck",
          titleLines: ["PDF para", "inversionistas"],
          intro:
            "El deck formal de Tecnotitan está preparado como activo futuro. Mientras se publica, puedes solicitar acceso directo desde el formulario de inversionistas.",
          cards: [
            ["01", "Tesis", "Problema, oportunidad de mercado y tesis de tecnología aplicada para empresas globales."],
            ["02", "Portafolio", "Productos, divisiones, propiedad intelectual potencial y rutas hacia plataformas repetibles."],
            ["03", "Ejecución", "Equipo inicial, roadmap, prioridades de capital y próximos hitos de validación."]
          ]
        }
      }
    }
  },
  en: {
    label: "EN",
    nav: ["Home", "About", "Products", "Services", "Guides", "Divisions", "Investors", "Contact"],
    headerAction: "Schedule a call",
    writeAction: "Email us",
    openNav: "Open navigation",
    closeNav: "Close navigation",
    brandHome: "Tecnotitan home",
    mainNav: "Main navigation",
    footerNav: "Secondary navigation",
    footerMeta: [
      "Tecnotitan Corporate",
      "Software, artificial intelligence, video games, robotics and technology transformation.",
      "Colombia | Global attention for investors and companies.",
      "Legal notice · LinkedIn · Facebook · Instagram",
      "© 2026 Tecnotitan. All rights reserved."
    ],
    deckUi: ["Request deck", "View PDF deck", "Download PDF"],
    pages: {
      "index.html": {
        title: "Tecnotitan | Applied AI, software and robotics for global markets",
        description:
          "Tecnotitan builds enterprise software, AI systems, interactive products and robotics capabilities for global markets.",
        content: {
          heroTitle: ["Infinite", "efficiency", "for companies", "that scale"],
          heroText:
            "Tecnotitan designs AI systems, business software and automation to turn complex processes into faster, smarter and measurable operations.",
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
          investorCtaTitle: "Investor actions",
          investorCtaText: "Direct paths to review the opportunity, contact the founding team or start a conversation.",
          investorCtaCards: [
            ["01", "Request investor deck", "Receive Tecnotitan's thesis, market, roadmap and opportunity summary."],
            ["02", "Contact the team", "Connect directly with Tecnotitan for strategic questions or follow-up."],
            ["03", "Schedule a call", "Start a conversation about investment, partnerships or global growth."]
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
          leadershipTitle: "Leadership and initial team",
          leadershipText:
            "Tecnotitan is being built with a compact, technical and execution-oriented structure: founder leadership, dedicated consulting and development capacity.",
          leadershipCards: [
            ["CEO / Founder", "David Arias Giraldo", "Strategic direction, product vision, corporate development and construction of the technology portfolio."],
            ["Full-time consulting", "Dedicated consultant", "Support across strategy, operations, research, documentation and technology transformation."],
            ["Engineering", "2 programmers", "Initial development team for software, prototypes, automations and proprietary products."]
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
            ["SMB AI", "Copiloto Pyme", "AI assistant for sales, support, documents and operational automation for small and medium businesses."],
            ["Operating system", "Tecnotitan OS", "Enterprise platform to centralize processes, data, automations, AI agents and internal workflows."],
            ["Mobile + AI", "Life Copilot", "Personal productivity mobile app with an AI copilot for goals, tasks, habits and decisions."],
            ["Video games", "Tecnotitan Engine", "Engine and toolkit for prototyping games, simulators, interactive experiences and gamified worlds."],
            ["Education", "Academia Tecnotitan", "Learning platform for AI, software, video games, robotics and technology transformation."],
            ["AI support", "Call Center AI Tecnotitan", "Conversational agents for support, sales, customer follow-up and contact center automation."]
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
          divisionThesisLabel: "Operating architecture",
          divisionThesisTitle: "Divisions connected by software, data and applied intelligence.",
          divisionThesisParagraphs: [
            "Each Tecnotitan division can operate as a business unit, an IP lab and a source of reusable capabilities for the others.",
            "The goal is for advisory, products and proprietary technology to reinforce each other and create markets, not isolated projects."
          ],
          cards: [
            ["Enterprise software", "Tecnotitan Software", "Web platforms, internal CRM, portals, dashboards and automation for companies that need better operations."],
            ["Artificial intelligence", "Tecnotitan AI", "Agents, copilots, analytics, document automation and intelligent workflows integrated into real processes."],
            ["Games and interactive", "Tecnotitan Games", "Video games, simulators, gamification and immersive experiences for training, brand and new products."],
            ["Robotics", "Tecnotitan Robotics", "Software, sensors, control and data to create physical-digital systems connected with operational intelligence."],
            ["Technology advisory", "Tecnotitan Advisory", "AI strategy, technology transformation, enterprise adoption and executive guidance."],
            ["Ventures", "Tecnotitan Ventures", "Experimentation, spin-offs, proprietary products and new opportunities built from internal capabilities."]
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
          opportunityTitle: "Investment opportunity",
          opportunityText:
            "Tecnotitan aims to capture enterprise demand in AI, software and robotics while converting service learning into proprietary products and scalable IP.",
          opportunityCards: [
            ["01", "Structural demand", "Companies need to automate processes, data and decisions to stay competitive."],
            ["02", "Hybrid model", "High-value services generate revenue, market learning and product opportunities."],
            ["03", "Compounding IP", "Each project can become tools, agents, frameworks and repeatable platforms."],
            ["04", "Regional expansion", "Building from Latin America creates a path to sell applied technology into global markets."]
          ],
          indicatorTitle: "Tracking indicators",
          indicatorText:
            "A professional framework for tracking Tecnotitan's progress toward revenue, proprietary products, target customers and regional scale.",
          indicatorMetrics: [
            ["Target market", "Enterprise + AI", "Software, automation, interactive experiences and applied robotics."],
            ["Business areas", "5 divisions", "Software, AI, video games, robotics and technology advisory."],
            ["Products", "6 lines", "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia and Call Center AI."]
          ],
          indicatorCards: [
            ["Target customers", "Mid-market and enterprise", "Organizations with repeatable processes, underused data and pressure to automate."],
            ["Roadmap", "Services to platforms", "Convert recurring delivery patterns into internal tools, commercial modules and products."],
            ["Expansion", "LatAm to global", "Validate regional use cases and scale applied technology into markets with similar needs."]
          ],
          roadmapTitle: "Strategic roadmap",
          roadmapText:
            "A phased growth path for turning technical capabilities into services, proprietary products and expansion opportunities.",
          roadmapCards: [
            ["2026", "Validation and real cases", "Consolidate AI/software services, build enterprise cases and document repeatable patterns."],
            ["2027", "Products and intellectual property", "Package internal tools, launch first commercial lines and strengthen technical divisions."],
            ["2028", "Regional scale and platforms", "Expand regional sales, convert solutions into platforms and evaluate division-level spin-offs."]
          ],
          deckTitle: "Investor Deck / Data Room",
          deckText: "Material prepared for investors who need to evaluate Tecnotitan's thesis, market, portfolio and execution path.",
          deckCards: [
            ["01", "Thesis and market", "Problem, opportunity, target customers and why AI, software and automation are converging now."],
            ["02", "Products and IP", "Current portfolio, proprietary lines and capabilities that can become repeatable platforms."],
            ["03", "Team and execution", "Initial structure, founder leadership, technical capabilities and product-focused operating model."],
            ["04", "Roadmap", "Validation, packaging, regional expansion and intellectual property buildout phases."],
            ["05", "Use of capital", "Priorities to accelerate product, sales, technical talent, internal automation and commercial validation."],
            ["06", "Conversation", "Direct access to request additional information, share a thesis or coordinate a meeting with Tecnotitan."]
          ],
          deckPageButton: "View deck page",
          deckButton: "Request investor deck",
          investorCtaTitle: "Investor actions",
          investorCtaText: "Choose the next step to receive information, contact the team or open a strategic conversation.",
          investorCtaCards: [
            ["01", "Request investor deck", "Request the executive summary of thesis, market, roadmap and opportunity."],
            ["02", "Contact the team", "Send questions about strategy, portfolio, team or growth stage."],
            ["03", "Schedule a call", "Open a conversation about investment, strategic partnerships or expansion."]
          ],
          formTitle: "Dedicated investor contact",
          formText: "Share your profile, thesis or strategic interest and the Tecnotitan team will reply through info@tecnotitan.com.",
          formLabels: ["Name", "Firm / fund", "Country", "Email", "Type of interest", "Message"],
          formOptions: ["Select", "Investment", "Strategic partnership", "Investor deck", "Contact the team", "Schedule a call"],
          formButton: "Send to info@tecnotitan.com",
          formSending: "Sending...",
          formErrorTitle: "Could not send",
          formErrorText: "Please try again or write directly to info@tecnotitan.com.",
          formNewsletter: "I want to subscribe to the official Tecnotitan newsletter.",
          formSuccessTitle: "Request sent",
          formSuccessText: "Thank you. The Tecnotitan team will review your investment message and reply through info@tecnotitan.com.",
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
            "General channel for complaints, claims, suggestions and requests about Tecnotitan.",
          cards: [
            ["Support", "General requests", "Questions, comments and messages about Tecnotitan and its services."],
            ["Quality", "Complaints and claims", "Reports about experiences, processes or responses that need review."],
            ["Improvement", "Suggestions", "Ideas to improve products, services, communication or user experience."]
          ],
          formTitle: "General contact",
          formText: "Send complaints, claims, suggestions or general requests to info@tecnotitan.com.",
          formLabels: ["Name", "Email", "Company", "Country", "Request type", "Message"],
          formOptions: ["Select", "Complaint", "Claim", "Suggestion", "General request"],
          formButton: "Send to info@tecnotitan.com",
          formSending: "Sending...",
          formErrorTitle: "Could not send",
          formErrorText: "Please try again or write directly to info@tecnotitan.com.",
          formNewsletter: "I want to subscribe to the official Tecnotitan newsletter.",
          formSuccessTitle: "Message sent",
          formSuccessText: "Thank you. We received your general request and will reply through info@tecnotitan.com."
        }
      },
      "investor-deck.html": {
        title: "Investor Deck | Tecnotitan",
        description:
          "Request Tecnotitan's future Investor Deck PDF: thesis, market, products, team, roadmap and capital priorities.",
        content: {
          label: "Investor Deck",
          titleLines: ["PDF for", "investors"],
          intro:
            "Tecnotitan's formal deck is prepared as a future asset. Until it is published, you can request direct access through the investor form.",
          cards: [
            ["01", "Thesis", "Problem, market opportunity and applied technology thesis for global companies."],
            ["02", "Portfolio", "Products, divisions, potential intellectual property and paths toward repeatable platforms."],
            ["03", "Execution", "Initial team, roadmap, capital priorities and upcoming validation milestones."]
          ]
        }
      }
    }
  },
  pt: {
    label: "PT",
    nav: ["Início", "Sobre", "Produtos", "Serviços", "Guias", "Divisões", "Investidores", "Contato"],
    headerAction: "Agendar conversa",
    writeAction: "Enviar email",
    openNav: "Abrir navegação",
    closeNav: "Fechar navegação",
    brandHome: "Início da Tecnotitan",
    mainNav: "Navegação principal",
    footerNav: "Navegação secundária",
    footerMeta: [
      "Tecnotitan Corporate",
      "Software, inteligência artificial, videogames, robótica e transformação tecnológica.",
      "Colômbia | Atendimento global para investidores e empresas.",
      "Aviso legal · LinkedIn · Facebook · Instagram",
      "© 2026 Tecnotitan. Todos os direitos reservados."
    ],
    deckUi: ["Solicitar deck", "Ver deck PDF", "Baixar PDF"],
    pages: {
      "index.html": {
        title: "Tecnotitan | IA aplicada, software e robótica para Brasil e mercados globais",
        description:
          "A Tecnotitan cria software empresarial, sistemas de IA, produtos interativos e capacidades de robótica para Brasil, América Latina e mercados globais.",
        content: {
          heroTitle: ["Eficiência", "infinita", "para empresas", "que escalam"],
          heroText:
            "A Tecnotitan projeta sistemas de IA, software empresarial e automação para transformar processos complexos em operações mais rápidas, inteligentes e mensuráveis.",
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
          investorCtaTitle: "Ações para investidores",
          investorCtaText: "Acessos diretos para revisar a oportunidade, contatar a equipe fundadora ou iniciar uma conversa.",
          investorCtaCards: [
            ["01", "Solicitar investor deck", "Receba o resumo da tese, mercado, roadmap e oportunidade da Tecnotitan."],
            ["02", "Contatar a equipe", "Conecte-se diretamente com a Tecnotitan para perguntas estratégicas ou acompanhamento."],
            ["03", "Agendar conversa", "Inicie uma conversa sobre investimento, parcerias ou crescimento global."]
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
          leadershipTitle: "Liderança e equipe inicial",
          leadershipText:
            "A Tecnotitan está sendo construída com uma estrutura compacta, técnica e orientada à execução: liderança fundadora, consultoria dedicada e capacidade de desenvolvimento.",
          leadershipCards: [
            ["CEO / Founder", "David Arias Giraldo", "Direção estratégica, visão de produto, desenvolvimento corporativo e construção do portfólio tecnológico."],
            ["Consultoria full-time", "Consultora dedicada", "Apoio em estratégia, operações, pesquisa, documentação e transformação tecnológica."],
            ["Engenharia", "2 programadores", "Equipe inicial de desenvolvimento para construir software, protótipos, automações e produtos próprios."]
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
            ["IA para PMEs", "Copiloto Pyme", "Assistente de IA para vendas, suporte, documentos e automação operacional de pequenas e médias empresas."],
            ["Sistema operacional", "Tecnotitan OS", "Plataforma empresarial para centralizar processos, dados, automações, agentes IA e fluxos internos."],
            ["Mobile + IA", "Life Copilot", "Aplicativo móvel de produtividade pessoal com copiloto IA para metas, tarefas, hábitos e decisões."],
            ["Videogames", "Tecnotitan Engine", "Engine e toolkit para prototipar jogos, simuladores, experiências interativas e mundos gamificados."],
            ["Educação", "Academia Tecnotitan", "Plataforma de aprendizagem para IA, software, videogames, robótica e transformação tecnológica."],
            ["Atendimento IA", "Call Center AI Tecnotitan", "Agentes conversacionais para suporte, vendas, acompanhamento de clientes e automação de contact centers."]
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
          divisionThesisLabel: "Arquitetura operacional",
          divisionThesisTitle: "Divisões conectadas por software, dados e inteligência aplicada.",
          divisionThesisParagraphs: [
            "Cada divisão da Tecnotitan pode operar como unidade comercial, laboratório de propriedade intelectual e fonte de capacidades reutilizáveis para as demais.",
            "O objetivo é que consultoria, produtos e tecnologia própria se reforcem entre si para criar mercados, não apenas projetos isolados."
          ],
          cards: [
            ["Software empresarial", "Tecnotitan Software", "Plataformas web, CRM interno, portais, painéis e automação para empresas que precisam operar melhor."],
            ["Inteligência artificial", "Tecnotitan AI", "Agentes, copilotos, análise, automação documental e fluxos inteligentes integrados a processos reais."],
            ["Videogames e interativo", "Tecnotitan Games", "Videogames, simuladores, gamificação e experiências imersivas para treinamento, marca e novos produtos."],
            ["Robótica", "Tecnotitan Robotics", "Software, sensores, controle e dados para criar sistemas físico-digitais conectados com inteligência operacional."],
            ["Consultoria tecnológica", "Tecnotitan Advisory", "Estratégia de IA, transformação tecnológica, adoção empresarial e acompanhamento executivo."],
            ["Ventures", "Tecnotitan Ventures", "Experimentação, spin-offs, produtos próprios e novas oportunidades construídas a partir de capacidades internas."]
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
          opportunityTitle: "Oportunidade de investimento",
          opportunityText:
            "A Tecnotitan busca capturar demanda empresarial em IA, software e robótica enquanto converte aprendizado de serviços em produtos próprios e IP escalável.",
          opportunityCards: [
            ["01", "Demanda estrutural", "Empresas precisam automatizar processos, dados e decisões para competir."],
            ["02", "Modelo híbrido", "Serviços de alto valor geram receita, aprendizado de mercado e oportunidades de produto."],
            ["03", "IP acumulável", "Cada projeto pode se tornar ferramentas, agentes, frameworks e plataformas repetíveis."],
            ["04", "Expansão regional", "Construir a partir da América Latina permite vender tecnologia aplicada para mercados globais."]
          ],
          indicatorTitle: "Indicadores de acompanhamento",
          indicatorText:
            "Um marco profissional para acompanhar o avanço da Tecnotitan em receita, produtos próprios, clientes-alvo e escala regional.",
          indicatorMetrics: [
            ["Mercado-alvo", "Empresas + IA", "Software, automação, experiências interativas e robótica aplicada."],
            ["Áreas de negócio", "5 divisões", "Software, IA, videogames, robótica e consultoria tecnológica."],
            ["Produtos", "6 linhas", "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia e Call Center AI."]
          ],
          indicatorCards: [
            ["Clientes-alvo", "Médias e grandes empresas", "Organizações com processos repetíveis, dados subutilizados e pressão para automatizar."],
            ["Roadmap", "Serviços para plataformas", "Converter entregas recorrentes em ferramentas internas, módulos comerciais e produtos."],
            ["Expansão", "LatAm para global", "Validar casos regionais e escalar tecnologia aplicada para mercados com necessidades semelhantes."]
          ],
          roadmapTitle: "Roadmap estratégico",
          roadmapText:
            "Uma rota de crescimento por fases para converter capacidades técnicas em serviços, produtos próprios e oportunidades de expansão.",
          roadmapCards: [
            ["2026", "Validação e casos reais", "Consolidar serviços de IA/software, construir casos empresariais e documentar padrões repetíveis."],
            ["2027", "Produtos e propriedade intelectual", "Empacotar ferramentas internas, lançar primeiras linhas comerciais e fortalecer divisões técnicas."],
            ["2028", "Escala regional e plataformas", "Expandir vendas regionais, converter soluções em plataformas e avaliar spin-offs por divisão."]
          ],
          deckTitle: "Investor Deck / Data Room",
          deckText: "Material preparado para investidores que precisam avaliar a tese, o mercado, o portfólio e a rota de execução da Tecnotitan.",
          deckCards: [
            ["01", "Tese e mercado", "Problema, oportunidade, clientes-alvo e por que IA, software e automação convergem agora."],
            ["02", "Produtos e IP", "Portfólio atual, linhas próprias e capacidades que podem virar plataformas repetíveis."],
            ["03", "Equipe e execução", "Estrutura inicial, liderança fundadora, capacidades técnicas e operação com foco em produto."],
            ["04", "Roadmap", "Fases de validação, empacotamento, expansão regional e construção de propriedade intelectual."],
            ["05", "Uso de capital", "Prioridades para acelerar produto, vendas, talento técnico, automação interna e validação comercial."],
            ["06", "Conversa", "Acesso direto para solicitar informações adicionais, compartilhar tese ou coordenar uma reunião com a Tecnotitan."]
          ],
          deckPageButton: "Ver página do deck",
          deckButton: "Solicitar investor deck",
          investorCtaTitle: "Ações para investidores",
          investorCtaText: "Escolha o próximo passo para receber informações, contatar a equipe ou abrir uma conversa estratégica.",
          investorCtaCards: [
            ["01", "Solicitar investor deck", "Solicite o resumo executivo de tese, mercado, roadmap e oportunidade."],
            ["02", "Contatar a equipe", "Envie perguntas sobre estratégia, portfólio, equipe ou estágio de crescimento."],
            ["03", "Agendar conversa", "Abra uma conversa sobre investimento, parcerias estratégicas ou expansão."]
          ],
          formTitle: "Contato especial para investidores",
          formText: "Compartilhe seu perfil, tese ou interesse estratégico e a equipe da Tecnotitan responderá por info@tecnotitan.com.",
          formLabels: ["Nome", "Firma / fundo", "País", "Email", "Tipo de interesse", "Mensagem"],
          formOptions: ["Selecionar", "Investimento", "Parceria estratégica", "Investor deck", "Contatar a equipe", "Agendar conversa"],
          formButton: "Enviar para info@tecnotitan.com",
          formSending: "Enviando...",
          formErrorTitle: "Não foi possível enviar",
          formErrorText: "Tente novamente ou escreva diretamente para info@tecnotitan.com.",
          formNewsletter: "Quero assinar a newsletter oficial da Tecnotitan.",
          formSuccessTitle: "Solicitação enviada",
          formSuccessText: "Obrigado. A equipe da Tecnotitan analisará sua mensagem de investimento e responderá por info@tecnotitan.com.",
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
            "Canal geral para queixas, reclamações, sugestões e solicitações sobre a Tecnotitan.",
          cards: [
            ["Atendimento", "Solicitações gerais", "Perguntas, comentários e mensagens sobre a Tecnotitan e seus serviços."],
            ["Qualidade", "Queixas e reclamações", "Relatos sobre experiências, processos ou respostas que precisam de revisão."],
            ["Melhoria", "Sugestões", "Ideias para melhorar produtos, serviços, comunicação ou experiência do usuário."]
          ],
          formTitle: "Contato geral",
          formText: "Envie queixas, reclamações, sugestões ou solicitações gerais para info@tecnotitan.com.",
          formLabels: ["Nome", "Email", "Empresa", "País", "Tipo de solicitação", "Mensagem"],
          formOptions: ["Selecionar", "Queixa", "Reclamação", "Sugestão", "Solicitação geral"],
          formButton: "Enviar para info@tecnotitan.com",
          formSending: "Enviando...",
          formErrorTitle: "Não foi possível enviar",
          formErrorText: "Tente novamente ou escreva diretamente para info@tecnotitan.com.",
          formNewsletter: "Quero assinar a newsletter oficial da Tecnotitan.",
          formSuccessTitle: "Mensagem enviada",
          formSuccessText: "Obrigado. Recebemos sua solicitação geral e responderemos por info@tecnotitan.com."
        }
      },
      "investor-deck.html": {
        title: "Investor Deck | Tecnotitan",
        description:
          "Solicite o futuro Investor Deck PDF da Tecnotitan: tese, mercado, produtos, equipe, roadmap e prioridades de capital.",
        content: {
          label: "Investor Deck",
          titleLines: ["PDF para", "investidores"],
          intro:
            "O deck formal da Tecnotitan está preparado como ativo futuro. Enquanto ele é publicado, você pode solicitar acesso direto pelo formulário de investidores.",
          cards: [
            ["01", "Tese", "Problema, oportunidade de mercado e tese de tecnologia aplicada para empresas globais."],
            ["02", "Portfólio", "Produtos, divisões, propriedade intelectual potencial e caminhos para plataformas repetíveis."],
            ["03", "Execução", "Equipe inicial, roadmap, prioridades de capital e próximos marcos de validação."]
          ]
        }
      }
    }
  }
};

function buildLocalizedLanguage(baseLanguage, overrides) {
  return {
    ...baseLanguage,
    ...overrides,
    footerMeta: overrides.footerMeta || baseLanguage.footerMeta,
    deckUi: overrides.deckUi || baseLanguage.deckUi,
    pages: {
      ...baseLanguage.pages,
      ...overrides.pages
    }
  };
}

languages.zh = buildLocalizedLanguage(languages.en, {
  label: "中文",
  nav: ["首页", "关于我们", "产品", "服务", "指南", "事业部", "投资者", "联系"],
  headerAction: "预约沟通",
  writeAction: "留言",
  openNav: "打开导航",
  closeNav: "关闭导航",
  brandHome: "Tecnotitan 首页",
  mainNav: "主导航",
  footerNav: "页脚导航",
  footerMeta: [
    "Tecnotitan Corporate",
    "软件、人工智能、电子游戏、机器人与技术转型。",
    "哥伦比亚 | 面向全球投资者与企业服务。",
    "法律声明 · LinkedIn · Facebook · Instagram",
    "© 2026 Tecnotitan。保留所有权利。"
  ],
  deckUi: ["索取 Deck", "查看 PDF Deck", "下载 PDF"],
  pages: {
    "index.html": {
      title: "Tecnotitan | 面向全球市场的应用技术",
      description: "Tecnotitan 为全球企业与投资者打造软件、人工智能、电子游戏和机器人技术。",
      content: {
        heroTitle: ["无限", "效率", "助力企业", "规模化增长"],
        heroText: "Tecnotitan 设计 AI 系统、商业软件和自动化方案，将复杂流程转化为更快速、更智能、可衡量的运营。",
        primaryCta: "投资者论点",
        secondaryCta: "探索产品",
        nextPreview: "高价值服务、自有产品与可扩展知识产权",
        visionLabel: "企业愿景",
        visionTitle: "打造一家具有全球影响力的应用技术公司。",
        visionParagraphs: [
          "Tecnotitan 正在构建一个模式，让服务、产品和技术事业部共享知识、知识产权和可复用能力。",
          "我们的愿景是从拉丁美洲出发，打造可走向全球市场的企业软件、AI 系统、交互体验和机器人技术。"
        ],
        visionCards: [
          ["软件", "企业运营系统", "内部平台、自动化、数据和 Web 产品，提升执行力。"],
          ["AI", "应用于工作的智能", "代理、分析、copilot 和嵌入业务流程的智能工作流。"],
          ["互动", "电子游戏与仿真", "面向培训、品牌、教育和新产品的沉浸式体验。"],
          ["机器人", "物理数字系统", "软件、传感器、控制和数据，把运营与智能连接起来。"]
        ],
        marketTitle: "应用技术能够创造优势的市场。",
        marketText: "Tecnotitan 面向真正需要数字化、自动化、交互体验和智能系统的客户。",
        marketCards: [
          ["企业", "运营软件", "需要内部 CRM、门户、仪表盘、流程和自动化的公司。"],
          ["运营", "生产力 AI", "销售、支持、财务和运营团队中可重复的工作。"],
          ["教育", "仿真与学习", "需要培训、评估和沉浸体验的机构与企业。"],
          ["娱乐", "电子游戏与品牌", "互动产品、游戏化、品牌体验和新的数字内容。"],
          ["工业", "机器人与数据", "可连接传感器、软件、控制和运营智能的流程。"],
          ["机构", "技术转型", "需要战略、实施和采用路径的公共或私营组织。"]
        ],
        investorCtaTitle: "投资者行动",
        investorCtaText: "快速查看机会、联系创始团队或开启对话。",
        investorCtaCards: [
          ["01", "索取投资者 Deck", "获取 Tecnotitan 的论点、市场、路线图和机会摘要。"],
          ["02", "联系团队", "就战略问题或后续沟通直接联系 Tecnotitan。"],
          ["03", "预约沟通", "围绕投资、合作或全球增长开启对话。"]
        ],
        gatewayTitle: "由多个事业部构建的科技公司",
        gatewayText: "我们用清晰页面向客户、伙伴和全球投资者讲述公司故事。",
        cards: [
          ["01", "关于我们", "使命、技术论点与执行原则。"],
          ["02", "产品", "把软件、AI、电子游戏和机器人技术转化为平台。"],
          ["03", "服务", "人工智能与技术转型咨询。"],
          ["04", "事业部", "用于构建多个市场的运营组合。"],
          ["05", "投资者", "愿景、机会、模式和增长路径。"],
          ["06", "联系", "商业、合作与投资对话。"]
        ]
      }
    },
    "nosotros.html": {
      title: "关于我们 | Tecnotitan",
      description: "了解 Tecnotitan 作为应用技术公司的愿景、使命和原则。",
      content: {
        label: "关于我们",
        titleLines: ["一家有全球雄心的", "应用技术公司"],
        intro: "Tecnotitan 致力于把软件、AI、电子游戏和机器人能力转化为提升企业竞争力的产品与服务。",
        thesisLabel: "愿景",
        thesisTitle: "成为一家具有全球影响力的拉丁美洲应用技术公司。",
        paragraphs: [
          "我们的论点很简单：掌握软件、数据、AI、交互体验和智能物理系统的公司，将创造持久优势。",
          "Tecnotitan 整合这些学科，构建自有解决方案，陪伴企业转型，并打开新的增长事业部。"
        ],
        leadershipTitle: "领导力与初始团队",
        leadershipText: "Tecnotitan 以精简、技术导向和执行导向的结构建设：创始人领导、专职咨询和开发能力。",
        leadershipCards: [
          ["CEO / Founder", "David Arias Giraldo", "负责战略方向、产品愿景、企业发展和技术组合建设。"],
          ["全职咨询", "专职顾问", "支持战略、运营、研究、文档和技术转型。"],
          ["工程", "2 名程序员", "初始开发团队，构建软件、原型、自动化和自有产品。"]
        ],
        cards: [
          ["01", "产品优先于展示", "我们优先构建可运行、可衡量、可扩展的系统。"],
          ["02", "AI 作为基础设施", "把 AI 作为自动化、决策和学习的核心层。"],
          ["03", "可执行的多学科能力", "软件、游戏、机器人和咨询作为一个技术组合协同工作。"]
        ]
      }
    },
    "productos.html": {
      title: "产品 | Tecnotitan",
      description: "Tecnotitan 在企业软件、人工智能、电子游戏和机器人领域的产品。",
      content: {
        label: "产品",
        titleLines: ["能够沉淀为", "平台的产品"],
        intro: "我们构建自有产品和定制系统，并让它们逐步演进为可复制的平台。",
        cards: [
          ["中小企业 AI", "Copiloto Pyme", "面向销售、支持、文档和运营自动化的中小企业 AI 助手。"],
          ["企业操作系统", "Tecnotitan OS", "集中流程、数据、自动化、AI 代理和内部工作流的企业平台。"],
          ["移动 + AI", "Life Copilot", "用于目标、任务、习惯和决策管理的个人生产力 AI 移动应用。"],
          ["电子游戏", "Tecnotitan Engine", "用于原型化游戏、仿真器、互动体验和游戏化世界的引擎与工具包。"],
          ["教育", "Academia Tecnotitan", "面向 AI、软件、电子游戏、机器人和技术转型的学习平台。"],
          ["AI 客服", "Call Center AI Tecnotitan", "用于支持、销售、客户跟进和联络中心自动化的对话式代理。"]
        ]
      }
    },
    "servicios.html": {
      title: "服务 | Tecnotitan",
      description: "面向企业的人工智能咨询与技术转型服务。",
      content: {
        label: "服务",
        titleLines: ["从咨询走向", "真正实施"],
        intro: "我们帮助企业识别、设计并实施具有运营影响力的 AI 和软件。",
        timelineLabel: "服务",
        cards: [
          ["01", "AI 诊断", "评估流程、数据、自动化机会和预期回报。"],
          ["02", "技术路线图", "架构、优先级、技术栈、风险和执行计划。"],
          ["03", "实施", "开发软件、AI 代理、集成和可运行原型。"],
          ["04", "采用", "培训、衡量、持续改进和能力转移。"]
        ]
      }
    },
    "divisiones.html": {
      title: "事业部 | Tecnotitan",
      description: "Tecnotitan 在软件、AI、电子游戏、机器人和技术 ventures 方面的事业部。",
      content: {
        label: "事业部",
        titleLines: ["技术引擎", "组成的组合"],
        intro: "每个事业部都创造可复用能力、知识产权和独立商业机会。",
        divisionThesisLabel: "运营架构",
        divisionThesisTitle: "由软件、数据和应用智能连接的事业部。",
        divisionThesisParagraphs: [
          "Tecnotitan 的每个事业部都可以作为商业单元、知识产权实验室和其他事业部的能力来源。",
          "目标是让咨询、产品和自有技术相互增强，创造市场，而不仅是孤立项目。"
        ],
        cards: [
          ["企业软件", "Tecnotitan Software", "面向企业运营优化的 Web 平台、内部 CRM、门户、仪表盘和自动化。"],
          ["人工智能", "Tecnotitan AI", "代理、copilot、分析、文档自动化和嵌入真实流程的智能工作流。"],
          ["电子游戏与互动", "Tecnotitan Games", "游戏、仿真器、游戏化和沉浸式体验，用于培训、品牌和新产品。"],
          ["机器人", "Tecnotitan Robotics", "软件、传感器、控制和数据，构建与运营智能连接的物理数字系统。"],
          ["技术咨询", "Tecnotitan Advisory", "AI 战略、技术转型、企业采用和高管陪伴。"],
          ["Ventures", "Tecnotitan Ventures", "实验、spin-off、自有产品和由内部能力构建的新机会。"]
        ]
      }
    },
    "inversionistas.html": {
      title: "投资者 | Tecnotitan",
      description: "Tecnotitan 面向全球投资者的页面：论点、市场、模式和愿景。",
      content: {
        label: "投资者",
        titleLines: ["从拉丁美洲出发", "面向全球市场的", "应用技术"],
        intro: "Tecnotitan 结合高价值服务、自有产品和技术事业部，构建一家可扩展的应用技术公司。",
        metrics: [
          ["市场", "软件 + AI", "由智能自动化推动的企业数字化。"],
          ["扩张", "多事业部", "软件、AI、电子游戏、机器人和咨询作为互联引擎。"],
          ["模式", "服务到产品", "客户学习、自有 IP 和可复制平台。"]
        ],
        thesisLabel: "论点",
        thesisTitle: "最好的技术伙伴会把咨询深度与产品执行结合起来。",
        paragraphs: [
          "市场正在从传统软件转向包含代理、自动化、数据和交互体验的系统。Tecnotitan 位于这一交汇点。",
          "我们的路径结合服务收入、产品开发、知识产权和按事业部形成 spin-off 的机会。"
        ],
        opportunityTitle: "投资机会",
        opportunityText: "Tecnotitan 旨在捕捉 AI、软件和机器人领域的企业需求，并把服务学习转化为自有产品和可扩展 IP。",
        opportunityCards: [
          ["01", "结构性需求", "企业需要自动化流程、数据和决策以保持竞争力。"],
          ["02", "混合模式", "高价值服务带来收入、市场学习和产品机会。"],
          ["03", "可积累 IP", "每个项目都能沉淀为工具、代理、框架和可复制平台。"],
          ["04", "区域扩张", "从拉丁美洲构建应用技术，并销售给全球类似需求的市场。"]
        ],
        indicatorTitle: "跟踪指标",
        indicatorText: "用于专业跟踪 Tecnotitan 在收入、自有产品、目标客户和区域规模化方面的进展。",
        indicatorMetrics: [
          ["目标市场", "企业 + AI", "软件、自动化、互动体验和应用机器人。"],
          ["业务领域", "5 个事业部", "软件、AI、电子游戏、机器人和技术咨询。"],
          ["产品", "6 条产品线", "Copiloto Pyme、Tecnotitan OS、Life Copilot、Tecnotitan Engine、Academia 和 Call Center AI。"]
        ],
        indicatorCards: [
          ["目标客户", "中大型企业", "拥有重复流程、未充分利用数据和自动化压力的组织。"],
          ["路线图", "服务到平台", "把重复交付转化为内部工具、商业模块和产品。"],
          ["扩张", "LatAm 到全球", "验证区域案例，并向类似需求的市场扩展应用技术。"]
        ],
        roadmapTitle: "战略路线图",
        roadmapText: "分阶段把技术能力转化为服务、自有产品和扩张机会。",
        roadmapCards: [
          ["2026", "验证与真实案例", "巩固 AI/软件服务，构建企业案例并记录可复制模式。"],
          ["2027", "产品与知识产权", "打包内部工具，推出第一批商业产品线并强化技术事业部。"],
          ["2028", "区域规模与平台", "扩大区域销售，把解决方案变为平台，并评估按事业部 spin-off。"]
        ],
        deckTitle: "Investor Deck / Data Room",
        deckText: "为需要评估 Tecnotitan 论点、市场、组合和执行路径的投资者准备的材料。",
        deckCards: [
          ["01", "论点与市场", "问题、机会、目标客户，以及 AI、软件和自动化为何在此刻融合。"],
          ["02", "产品与 IP", "当前组合、自有产品线和可变成可复制平台的能力。"],
          ["03", "团队与执行", "初始结构、创始人领导、技术能力和以产品为中心的运营方式。"],
          ["04", "路线图", "验证、打包、区域扩张和知识产权建设阶段。"],
          ["05", "资本用途", "加速产品、销售、技术人才、内部自动化和商业验证。"],
          ["06", "对话", "直接索取更多信息、分享论点或安排会议。"]
        ],
        deckPageButton: "查看 Deck 页面",
        deckButton: "索取投资者 Deck",
        investorCtaTitle: "投资者行动",
        investorCtaText: "选择下一步以获取信息、联系团队或开启战略对话。",
        investorCtaCards: [
          ["01", "索取投资者 Deck", "索取论点、市场、路线图和机会的执行摘要。"],
          ["02", "联系团队", "发送关于战略、组合、团队或增长阶段的问题。"],
          ["03", "预约沟通", "开启关于投资、战略合作或扩张的对话。"]
        ],
        formTitle: "投资者专用联系表",
        formText: "分享你的背景、投资论点或战略兴趣，Tecnotitan 团队将通过 info@tecnotitan.com 回复。",
        formLabels: ["姓名", "机构 / 基金", "国家", "电子邮件", "兴趣类型", "留言"],
        formOptions: ["选择", "投资", "战略合作", "Investor deck", "联系团队", "预约沟通"],
        formButton: "发送至 info@tecnotitan.com",
        formSending: "正在发送...",
        formErrorTitle: "无法发送",
        formErrorText: "请重试，或直接写信至 info@tecnotitan.com。",
        formNewsletter: "我想订阅 Tecnotitan 官方 newsletter。",
        formSuccessTitle: "请求已发送",
        formSuccessText: "谢谢。Tecnotitan 团队将审阅你的投资信息，并通过 info@tecnotitan.com 回复。",
        cards: [
          ["01", "服务牵引", "解决真实企业问题，并把交付模式转化为可复用能力。"],
          ["02", "自有产品", "把内部工具和已验证流程转化为商业平台。"],
          ["03", "全球规模", "从拉丁美洲向全球企业销售应用技术。"]
        ]
      }
    },
    "contacto.html": {
      title: "联系 | Tecnotitan",
      description: "联系 Tecnotitan，咨询项目、服务、合作与投资。",
      content: {
        label: "联系",
        titleLines: ["让我们聊聊", "下一项技术"],
        intro: "用于投诉、申诉、建议和 Tecnotitan 一般请求的渠道。",
        cards: [
          ["服务", "一般请求", "关于 Tecnotitan 及其服务的问题、评论和消息。"],
          ["质量", "投诉与申诉", "关于需要复核的体验、流程或回复的反馈。"],
          ["改进", "建议", "改进产品、服务、沟通或用户体验的想法。"]
        ],
        formTitle: "一般联系",
        formText: "请将投诉、申诉、建议或一般请求发送至 info@tecnotitan.com。",
        formLabels: ["姓名", "电子邮件", "公司", "国家", "请求类型", "留言"],
        formOptions: ["选择", "投诉", "申诉", "建议", "一般请求"],
        formButton: "发送至 info@tecnotitan.com",
        formSending: "正在发送...",
        formErrorTitle: "无法发送",
        formErrorText: "请重试，或直接写信至 info@tecnotitan.com。",
        formNewsletter: "我想订阅 Tecnotitan 官方 newsletter。",
        formSuccessTitle: "消息已发送",
        formSuccessText: "谢谢。我们已收到你的一般请求，并将通过 info@tecnotitan.com 回复。"
      }
    },
    "investor-deck.html": {
      title: "Investor Deck | Tecnotitan",
      description: "索取 Tecnotitan 未来的 Investor Deck PDF：论点、市场、产品、团队、路线图和资本重点。",
      content: {
        label: "Investor Deck",
        titleLines: ["面向投资者的", "PDF"],
        intro: "Tecnotitan 的正式 deck 已作为未来资产准备。在发布之前，你可以通过投资者表单直接索取访问。",
        cards: [
          ["01", "论点", "问题、市场机会和面向全球企业的应用技术论点。"],
          ["02", "组合", "产品、事业部、潜在知识产权和可复制平台路径。"],
          ["03", "执行", "初始团队、路线图、资本重点和下一阶段验证里程碑。"]
        ]
      }
    }
  }
});

languages.ja = buildLocalizedLanguage(languages.en, {
  label: "日",
  nav: ["ホーム", "会社情報", "製品", "サービス", "ガイド", "部門", "投資家", "お問い合わせ"],
  headerAction: "面談を予約",
  writeAction: "送信",
  openNav: "ナビゲーションを開く",
  closeNav: "ナビゲーションを閉じる",
  brandHome: "Tecnotitan ホーム",
  mainNav: "メインナビゲーション",
  footerNav: "フッターナビゲーション",
  footerMeta: [
    "Tecnotitan Corporate",
    "ソフトウェア、人工知能、ビデオゲーム、ロボティクス、テクノロジー変革。",
    "コロンビア | 投資家と企業に向けたグローバル対応。",
    "法的通知 · LinkedIn · Facebook · Instagram",
    "© 2026 Tecnotitan. All rights reserved."
  ],
  deckUi: ["Deck を請求", "PDF Deck を表示", "PDF をダウンロード"],
  pages: {
    "index.html": {
      title: "Tecnotitan | グローバル市場のための応用テクノロジー",
      description: "Tecnotitan は、世界の企業と投資家向けにソフトウェア、AI、ゲーム、ロボティクスを構築します。",
      content: {
        heroTitle: ["無限の", "効率性を", "成長企業へ", "届ける"],
        heroText: "Tecnotitan は AI システム、業務ソフトウェア、自動化を設計し、複雑なプロセスをより速く、賢く、測定可能なオペレーションへ変えます。",
        primaryCta: "投資家向けテーゼ",
        secondaryCta: "製品を見る",
        nextPreview: "高付加価値サービス、自社製品、拡張可能な IP",
        visionLabel: "企業ビジョン",
        visionTitle: "グローバルに展開する応用テクノロジー企業を構築する。",
        visionParagraphs: [
          "Tecnotitan は、サービス、製品、技術部門が知識、IP、再利用可能な能力を共有するモデルへ進んでいます。",
          "ラテンアメリカから世界市場へ展開できる企業ソフトウェア、AI システム、インタラクティブ体験、ロボティクスをつくります。"
        ],
        visionCards: [
          ["ソフトウェア", "企業向け業務システム", "社内プラットフォーム、自動化、データ、Web 製品で実行力を高めます。"],
          ["AI", "仕事に適用する知能", "エージェント、分析、copilot、業務に統合されたスマートフロー。"],
          ["インタラクティブ", "ゲームとシミュレーション", "研修、ブランド、教育、新製品向けの没入型体験。"],
          ["ロボティクス", "フィジカル・デジタルシステム", "ソフトウェア、センサー、制御、データで業務と知能を接続します。"]
        ],
        marketTitle: "応用テクノロジーが優位性を生む市場。",
        marketText: "Tecnotitan は、デジタル化、自動化、インタラクティブ体験、インテリジェントシステムを本当に必要とする顧客を対象にします。",
        marketCards: [
          ["企業", "業務ソフトウェア", "社内 CRM、ポータル、ダッシュボード、フロー、自動化を必要とする会社。"],
          ["オペレーション", "生産性のための AI", "反復可能な業務を持つ営業、サポート、財務、運用チーム。"],
          ["教育", "シミュレーションと学習", "研修、評価、没入型体験を必要とする機関と企業。"],
          ["エンタメ", "ゲームとブランド", "インタラクティブ製品、ゲーミフィケーション、ブランド体験、新しいデジタルコンテンツ。"],
          ["産業", "ロボティクスとデータ", "センサー、ソフトウェア、制御、業務知能を接続できるプロセス。"],
          ["組織", "テクノロジー変革", "戦略、実装、導入を必要とする公共・民間組織。"]
        ],
        investorCtaTitle: "投資家向けアクション",
        investorCtaText: "機会を確認し、創業チームに連絡し、会話を始めるための入口です。",
        investorCtaCards: [
          ["01", "Investor Deck を請求", "Tecnotitan のテーゼ、市場、ロードマップ、機会の要約を受け取る。"],
          ["02", "チームに連絡", "戦略的な質問やフォローアップについて Tecnotitan と直接つながる。"],
          ["03", "面談を予約", "投資、提携、グローバル成長について会話を始める。"]
        ],
        gatewayTitle: "複数部門で構築されるテクノロジー企業",
        gatewayText: "顧客、パートナー、世界の投資家に向けて、会社のストーリーを明確なページに分けています。",
        cards: [
          ["01", "会社情報", "ミッション、技術テーゼ、実行原則。"],
          ["02", "製品", "ソフトウェア、AI、ゲーム、ロボティクスをプラットフォームへ。"],
          ["03", "サービス", "人工知能とテクノロジー変革のコンサルティング。"],
          ["04", "部門", "複数市場を構築するための運用ポートフォリオ。"],
          ["05", "投資家", "ビジョン、機会、モデル、成長ルート。"],
          ["06", "お問い合わせ", "商談、提携、投資の会話。"]
        ]
      }
    },
    "nosotros.html": {
      title: "会社情報 | Tecnotitan",
      description: "応用テクノロジー企業としての Tecnotitan のビジョン、ミッション、原則。",
      content: {
        label: "会社情報",
        titleLines: ["グローバルな野心を持つ", "応用テクノロジー企業"],
        intro: "Tecnotitan は、ソフトウェア、AI、ゲーム、ロボティクスの能力を、企業競争力を高める製品とサービスへ変換するために生まれました。",
        thesisLabel: "ビジョン",
        thesisTitle: "グローバルに展開するラテンアメリカ発の応用テクノロジー企業になる。",
        paragraphs: [
          "私たちのテーゼは明確です。ソフトウェア、データ、AI、インタラクティブ体験、知的な物理システムを使いこなす企業が、持続的な優位性を生みます。",
          "Tecnotitan はこれらの領域を統合し、自社ソリューションを構築し、企業変革を支援し、新しい成長部門を開きます。"
        ],
        leadershipTitle: "リーダーシップと初期チーム",
        leadershipText: "Tecnotitan は、創業者のリーダーシップ、専任コンサルティング、開発能力を備えた小さく技術志向の実行型チームで構築されています。",
        leadershipCards: [
          ["CEO / Founder", "David Arias Giraldo", "戦略、製品ビジョン、企業開発、技術ポートフォリオ構築を主導。"],
          ["専任コンサルティング", "専任コンサルタント", "戦略、運用、調査、ドキュメント、テクノロジー変革を支援。"],
          ["エンジニアリング", "2 名のプログラマー", "ソフトウェア、プロトタイプ、自動化、自社製品を構築する初期開発チーム。"]
        ],
        cards: [
          ["01", "プレゼンより製品", "抽象的な約束より、機能し、測定でき、拡張できるシステムを優先します。"],
          ["02", "AI をインフラとして扱う", "自動化、意思決定、学習の中核レイヤーとして AI を扱います。"],
          ["03", "実行可能な複合領域", "ソフトウェア、ゲーム、ロボティクス、コンサルティングを一つの技術ポートフォリオとして動かします。"]
        ]
      }
    },
    "productos.html": {
      title: "製品 | Tecnotitan",
      description: "企業ソフトウェア、AI、ゲーム、ロボティクスにおける Tecnotitan の製品。",
      content: {
        label: "製品",
        titleLines: ["プラットフォームへ", "発展し得る製品"],
        intro: "自社製品とカスタムシステムを構築し、再現可能なプラットフォームへ進化させます。",
        cards: [
          ["中小企業 AI", "Copiloto Pyme", "営業、サポート、文書、業務自動化のための中小企業向け AI アシスタント。"],
          ["企業 OS", "Tecnotitan OS", "プロセス、データ、自動化、AI エージェント、社内フローを一元化する企業プラットフォーム。"],
          ["モバイル + AI", "Life Copilot", "目標、タスク、習慣、意思決定を整理する個人向け AI 生産性アプリ。"],
          ["ゲーム", "Tecnotitan Engine", "ゲーム、シミュレーター、インタラクティブ体験、ゲーミフィケーション世界を試作するエンジンとツールキット。"],
          ["教育", "Academia Tecnotitan", "AI、ソフトウェア、ゲーム、ロボティクス、テクノロジー変革の学習プラットフォーム。"],
          ["AI コールセンター", "Call Center AI Tecnotitan", "サポート、営業、顧客フォロー、コンタクトセンター自動化のための会話型エージェント。"]
        ]
      }
    },
    "servicios.html": {
      title: "サービス | Tecnotitan",
      description: "企業向けの AI コンサルティングとテクノロジー変革サービス。",
      content: {
        label: "サービス",
        titleLines: ["実装につながる", "コンサルティング"],
        intro: "企業が業務インパクトのある AI とソフトウェアを特定、設計、実装できるよう支援します。",
        timelineLabel: "サービス",
        cards: [
          ["01", "AI 診断", "プロセス、データ、自動化機会、期待リターンを評価。"],
          ["02", "技術ロードマップ", "アーキテクチャ、優先順位、スタック、リスク、実行計画。"],
          ["03", "実装", "ソフトウェア、AI エージェント、連携、機能するプロトタイプを開発。"],
          ["04", "導入", "トレーニング、測定、継続改善、能力移転。"]
        ]
      }
    },
    "divisiones.html": {
      title: "部門 | Tecnotitan",
      description: "ソフトウェア、AI、ゲーム、ロボティクス、技術 ventures における Tecnotitan の部門。",
      content: {
        label: "部門",
        titleLines: ["テクノロジーエンジンの", "ポートフォリオ"],
        intro: "各部門は再利用可能な能力、知的財産、独立した商業機会を生みます。",
        divisionThesisLabel: "運用アーキテクチャ",
        divisionThesisTitle: "ソフトウェア、データ、応用知能でつながる部門。",
        divisionThesisParagraphs: [
          "Tecnotitan の各部門は、商業ユニット、IP ラボ、他部門への能力供給源として機能できます。",
          "目的は、コンサルティング、製品、自社技術が互いを強化し、孤立した案件ではなく市場をつくることです。"
        ],
        cards: [
          ["企業ソフトウェア", "Tecnotitan Software", "企業がより良く運営するための Web プラットフォーム、社内 CRM、ポータル、ダッシュボード、自動化。"],
          ["人工知能", "Tecnotitan AI", "実際のプロセスに統合されるエージェント、copilot、分析、文書自動化、スマートフロー。"],
          ["ゲームとインタラクティブ", "Tecnotitan Games", "研修、ブランド、新製品向けのゲーム、シミュレーター、ゲーミフィケーション、没入型体験。"],
          ["ロボティクス", "Tecnotitan Robotics", "業務知能と接続されたフィジカル・デジタルシステムをつくるソフトウェア、センサー、制御、データ。"],
          ["技術コンサルティング", "Tecnotitan Advisory", "AI 戦略、テクノロジー変革、企業導入、経営層支援。"],
          ["Ventures", "Tecnotitan Ventures", "実験、spin-off、自社製品、内部能力から生まれる新しい機会。"]
        ]
      }
    },
    "inversionistas.html": {
      title: "投資家 | Tecnotitan",
      description: "Tecnotitan のグローバル投資家向けページ：テーゼ、市場、モデル、ビジョン。",
      content: {
        label: "投資家",
        titleLines: ["ラテンアメリカから", "世界市場へ向けた", "応用テクノロジー"],
        intro: "Tecnotitan は高付加価値サービス、自社製品、技術部門を組み合わせ、拡張可能な応用テクノロジー企業を構築します。",
        metrics: [
          ["市場", "ソフトウェア + AI", "知的自動化によって加速する企業デジタル化。"],
          ["拡張", "複数部門", "ソフトウェア、AI、ゲーム、ロボティクス、コンサルティングが接続されたエンジン。"],
          ["モデル", "サービスから製品へ", "顧客からの学習、自社 IP、再現可能なプラットフォーム。"]
        ],
        thesisLabel: "テーゼ",
        thesisTitle: "最高の技術パートナーは、コンサルティングの深さと製品実行力を組み合わせます。",
        paragraphs: [
          "市場は従来型ソフトウェアから、エージェント、自動化、データ、インタラクティブ体験を持つシステムへ移行しています。Tecnotitan はその交差点に位置します。",
          "私たちの道筋は、サービス収益、製品開発、知的財産、部門ごとの spin-off 機会を組み合わせます。"
        ],
        opportunityTitle: "投資機会",
        opportunityText: "Tecnotitan は AI、ソフトウェア、ロボティクスにおける企業需要を捉え、サービスで得た学習を自社製品と拡張可能な IP へ変換します。",
        opportunityCards: [
          ["01", "構造的需要", "企業は競争するためにプロセス、データ、意思決定の自動化を必要としています。"],
          ["02", "ハイブリッドモデル", "高付加価値サービスが収益、市場学習、製品機会を生みます。"],
          ["03", "蓄積可能な IP", "各プロジェクトはツール、エージェント、フレームワーク、再現可能なプラットフォームになり得ます。"],
          ["04", "地域拡張", "ラテンアメリカから応用技術を構築し、同様の課題を持つ世界市場へ販売します。"]
        ],
        indicatorTitle: "進捗指標",
        indicatorText: "Tecnotitan の収益、自社製品、対象顧客、地域スケールへの進捗を追跡するためのプロフェッショナルな枠組み。",
        indicatorMetrics: [
          ["対象市場", "企業 + AI", "ソフトウェア、自動化、インタラクティブ体験、応用ロボティクス。"],
          ["事業領域", "5 部門", "ソフトウェア、AI、ゲーム、ロボティクス、技術コンサルティング。"],
          ["製品", "6 ライン", "Copiloto Pyme、Tecnotitan OS、Life Copilot、Tecnotitan Engine、Academia、Call Center AI。"]
        ],
        indicatorCards: [
          ["対象顧客", "中堅・大企業", "反復プロセス、未活用データ、自動化圧力を持つ組織。"],
          ["ロードマップ", "サービスからプラットフォームへ", "反復する納品を社内ツール、商用モジュール、製品へ変換します。"],
          ["拡張", "LatAm から世界へ", "地域の事例を検証し、類似ニーズの市場へ応用技術を拡張します。"]
        ],
        roadmapTitle: "戦略ロードマップ",
        roadmapText: "技術能力をサービス、自社製品、拡張機会へ変える段階的な成長ルート。",
        roadmapCards: [
          ["2026", "検証と実案件", "AI/ソフトウェアサービスを強化し、企業事例を構築し、再現可能なパターンを記録。"],
          ["2027", "製品と IP", "内部ツールをパッケージ化し、初期の商用ラインを立ち上げ、技術部門を強化。"],
          ["2028", "地域スケールとプラットフォーム", "地域販売を拡大し、ソリューションをプラットフォーム化し、部門ごとの spin-off を検討。"]
        ],
        deckTitle: "Investor Deck / Data Room",
        deckText: "Tecnotitan のテーゼ、市場、ポートフォリオ、実行ルートを評価する投資家向けの資料。",
        deckCards: [
          ["01", "テーゼと市場", "課題、機会、対象顧客、AI・ソフトウェア・自動化が今融合する理由。"],
          ["02", "製品と IP", "現在のポートフォリオ、自社ライン、再現可能なプラットフォームになり得る能力。"],
          ["03", "チームと実行", "初期体制、創業者リーダーシップ、技術能力、製品中心の運営方法。"],
          ["04", "ロードマップ", "検証、パッケージ化、地域拡張、知的財産構築のフェーズ。"],
          ["05", "資本用途", "製品、営業、技術人材、内部自動化、商業検証を加速。"],
          ["06", "対話", "追加情報の請求、テーゼ共有、Tecnotitan との面談調整。"]
        ],
        deckPageButton: "Deck ページを見る",
        deckButton: "Investor Deck を請求",
        investorCtaTitle: "投資家向けアクション",
        investorCtaText: "情報を受け取り、チームに連絡し、戦略的な会話を始める次のステップを選択してください。",
        investorCtaCards: [
          ["01", "Investor Deck を請求", "テーゼ、市場、ロードマップ、機会のエグゼクティブサマリーを請求。"],
          ["02", "チームに連絡", "戦略、ポートフォリオ、チーム、成長段階について質問を送る。"],
          ["03", "面談を予約", "投資、戦略提携、拡張について会話を始める。"]
        ],
        formTitle: "投資家専用フォーム",
        formText: "プロフィール、投資テーゼ、戦略的関心を共有してください。Tecnotitan チームが info@tecnotitan.com から返信します。",
        formLabels: ["名前", "会社 / ファンド", "国", "メール", "関心タイプ", "メッセージ"],
        formOptions: ["選択", "投資", "戦略提携", "Investor deck", "チームに連絡", "面談を予約"],
        formButton: "info@tecnotitan.com へ送信",
        formSending: "送信中...",
        formErrorTitle: "送信できませんでした",
        formErrorText: "もう一度お試しください。または info@tecnotitan.com へ直接ご連絡ください。",
        formNewsletter: "Tecnotitan 公式 newsletter を購読します。",
        formSuccessTitle: "リクエストを送信しました",
        formSuccessText: "ありがとうございます。Tecnotitan チームが投資メッセージを確認し、info@tecnotitan.com から返信します。",
        cards: [
          ["01", "サービスによる牽引", "企業の実課題を解決し、納品パターンを再利用可能な能力へ変換します。"],
          ["02", "自社製品", "内部ツールと検証済みフローを商用プラットフォームへ変換します。"],
          ["03", "グローバルスケール", "ラテンアメリカから世界の企業へ応用テクノロジーを販売します。"]
        ]
      }
    },
    "contacto.html": {
      title: "お問い合わせ | Tecnotitan",
      description: "プロジェクト、サービス、提携、投資について Tecnotitan へお問い合わせください。",
      content: {
        label: "お問い合わせ",
        titleLines: ["次のテクノロジーについて", "話しましょう"],
        intro: "苦情、申し立て、提案、Tecnotitan への一般的な依頼のための窓口です。",
        cards: [
          ["サポート", "一般的な依頼", "Tecnotitan とサービスに関する質問、コメント、メッセージ。"],
          ["品質", "苦情と申し立て", "見直しが必要な体験、プロセス、回答についての報告。"],
          ["改善", "提案", "製品、サービス、コミュニケーション、ユーザー体験を改善するアイデア。"]
        ],
        formTitle: "一般お問い合わせ",
        formText: "苦情、申し立て、提案、一般的な依頼を info@tecnotitan.com へ送信してください。",
        formLabels: ["名前", "メール", "会社", "国", "依頼タイプ", "メッセージ"],
        formOptions: ["選択", "苦情", "申し立て", "提案", "一般的な依頼"],
        formButton: "info@tecnotitan.com へ送信",
        formSending: "送信中...",
        formErrorTitle: "送信できませんでした",
        formErrorText: "もう一度お試しください。または info@tecnotitan.com へ直接ご連絡ください。",
        formNewsletter: "Tecnotitan 公式 newsletter を購読します。",
        formSuccessTitle: "メッセージを送信しました",
        formSuccessText: "ありがとうございます。一般リクエストを受け取りました。info@tecnotitan.com から返信します。"
      }
    },
    "investor-deck.html": {
      title: "Investor Deck | Tecnotitan",
      description: "Tecnotitan の将来の Investor Deck PDF を請求：テーゼ、市場、製品、チーム、ロードマップ、資本優先事項。",
      content: {
        label: "Investor Deck",
        titleLines: ["投資家向け", "PDF"],
        intro: "Tecnotitan の正式 deck は将来公開予定の資産として準備されています。公開までの間、投資家フォームから直接アクセスを請求できます。",
        cards: [
          ["01", "テーゼ", "グローバル企業向けの課題、市場機会、応用テクノロジーのテーゼ。"],
          ["02", "ポートフォリオ", "製品、部門、潜在 IP、再現可能なプラットフォームへの道筋。"],
          ["03", "実行", "初期チーム、ロードマップ、資本優先事項、次の検証マイルストーン。"]
        ]
      }
    }
  }
});

languages.ko = buildLocalizedLanguage(languages.en, {
  label: "한",
  nav: ["홈", "회사 소개", "제품", "서비스", "가이드", "부문", "투자자", "문의"],
  headerAction: "미팅 예약",
  writeAction: "문의하기",
  openNav: "내비게이션 열기",
  closeNav: "내비게이션 닫기",
  brandHome: "Tecnotitan 홈",
  mainNav: "주 내비게이션",
  footerNav: "푸터 내비게이션",
  footerMeta: [
    "Tecnotitan Corporate",
    "소프트웨어, 인공지능, 비디오게임, 로보틱스, 기술 전환.",
    "콜롬비아 | 투자자와 기업을 위한 글로벌 대응.",
    "법적 고지 · LinkedIn · Facebook · Instagram",
    "© 2026 Tecnotitan. 모든 권리 보유."
  ],
  deckUi: ["Deck 요청", "PDF Deck 보기", "PDF 다운로드"],
  pages: {
    "index.html": {
      title: "Tecnotitan | 글로벌 시장을 위한 응용 기술",
      description: "Tecnotitan은 글로벌 기업과 투자자를 위해 소프트웨어, AI, 비디오게임, 로보틱스를 만듭니다.",
      content: {
        heroTitle: ["무한한", "효율성", "성장하는", "기업을 위해"],
        heroText: "Tecnotitan은 AI 시스템, 비즈니스 소프트웨어와 자동화를 설계해 복잡한 프로세스를 더 빠르고 지능적이며 측정 가능한 운영으로 바꿉니다.",
        primaryCta: "투자자 논리",
        secondaryCta: "제품 보기",
        nextPreview: "고부가 서비스, 자체 제품, 확장 가능한 IP",
        visionLabel: "기업 비전",
        visionTitle: "글로벌 확장성을 가진 응용 기술 회사를 구축합니다.",
        visionParagraphs: [
          "Tecnotitan은 서비스, 제품, 기술 부문이 지식, 지식재산, 재사용 가능한 역량을 공유하는 모델로 나아가고 있습니다.",
          "라틴아메리카에서 출발해 글로벌 시장으로 확장 가능한 기업 소프트웨어, AI 시스템, 인터랙티브 경험, 로보틱스를 만듭니다."
        ],
        visionCards: [
          ["소프트웨어", "기업 운영 시스템", "내부 플랫폼, 자동화, 데이터, 웹 제품으로 실행력을 높입니다."],
          ["AI", "업무에 적용되는 지능", "에이전트, 분석, 코파일럿, 비즈니스에 통합된 스마트 플로우."],
          ["인터랙티브", "게임과 시뮬레이션", "교육, 브랜드, 학습, 신제품을 위한 몰입형 경험."],
          ["로보틱스", "물리-디지털 시스템", "소프트웨어, 센서, 제어, 데이터로 운영과 지능을 연결합니다."]
        ],
        marketTitle: "응용 기술이 경쟁 우위를 만드는 시장.",
        marketText: "Tecnotitan은 디지털화, 자동화, 인터랙티브 경험, 지능형 시스템이 실제로 필요한 고객을 목표로 합니다.",
        marketCards: [
          ["기업", "운영 소프트웨어", "내부 CRM, 포털, 대시보드, 플로우, 자동화가 필요한 회사."],
          ["운영", "생산성을 위한 AI", "반복 업무가 있는 영업, 지원, 재무, 운영 팀."],
          ["교육", "시뮬레이션과 학습", "교육, 평가, 몰입형 경험이 필요한 기관과 기업."],
          ["엔터테인먼트", "게임과 브랜드", "인터랙티브 제품, 게이미피케이션, 브랜드 경험, 새로운 디지털 콘텐츠."],
          ["산업", "로보틱스와 데이터", "센서, 소프트웨어, 제어, 운영 지능을 연결할 수 있는 프로세스."],
          ["기관", "기술 전환", "전략, 구현, 도입이 필요한 공공 또는 민간 조직."]
        ],
        investorCtaTitle: "투자자 액션",
        investorCtaText: "기회를 검토하고 창업팀에 연락하거나 대화를 시작할 수 있는 바로가기입니다.",
        investorCtaCards: [
          ["01", "Investor Deck 요청", "Tecnotitan의 논리, 시장, 로드맵, 기회 요약을 받습니다."],
          ["02", "팀에 연락", "전략적 질문이나 후속 논의를 위해 Tecnotitan과 직접 연결됩니다."],
          ["03", "미팅 예약", "투자, 파트너십, 글로벌 성장에 대한 대화를 시작합니다."]
        ],
        gatewayTitle: "여러 부문으로 구축되는 기술 회사",
        gatewayText: "고객, 파트너, 글로벌 투자자를 위해 회사의 이야기를 명확한 페이지로 나눴습니다.",
        cards: [
          ["01", "회사 소개", "미션, 기술 논리, 실행 원칙."],
          ["02", "제품", "소프트웨어, AI, 게임, 로보틱스를 플랫폼으로 전환."],
          ["03", "서비스", "인공지능과 기술 전환 컨설팅."],
          ["04", "부문", "여러 시장을 만들기 위한 운영 포트폴리오."],
          ["05", "투자자", "비전, 기회, 모델, 성장 경로."],
          ["06", "문의", "비즈니스, 파트너십, 투자 대화."]
        ]
      }
    },
    "nosotros.html": {
      title: "회사 소개 | Tecnotitan",
      description: "응용 기술 회사 Tecnotitan의 비전, 미션, 원칙을 소개합니다.",
      content: {
        label: "회사 소개",
        titleLines: ["글로벌 야망을 가진", "응용 기술 회사"],
        intro: "Tecnotitan은 소프트웨어, AI, 게임, 로보틱스 역량을 기업 경쟁력을 높이는 제품과 서비스로 전환하기 위해 탄생했습니다.",
        thesisLabel: "비전",
        thesisTitle: "글로벌 확장성을 가진 라틴아메리카 응용 기술 회사가 되는 것.",
        paragraphs: [
          "우리의 논리는 단순합니다. 소프트웨어, 데이터, AI, 인터랙티브 경험, 지능형 물리 시스템을 지배하는 기업이 지속 가능한 우위를 만듭니다.",
          "Tecnotitan은 이 영역들을 통합해 자체 솔루션을 만들고, 기업 전환을 지원하며, 새로운 성장 부문을 엽니다."
        ],
        leadershipTitle: "리더십과 초기 팀",
        leadershipText: "Tecnotitan은 창업자 리더십, 전담 컨설팅, 개발 역량을 갖춘 작고 기술 중심적인 실행 조직으로 구축되고 있습니다.",
        leadershipCards: [
          ["CEO / Founder", "David Arias Giraldo", "전략 방향, 제품 비전, 기업 개발, 기술 포트폴리오 구축을 이끕니다."],
          ["전담 컨설팅", "전담 컨설턴트", "전략, 운영, 리서치, 문서화, 기술 전환을 지원합니다."],
          ["엔지니어링", "프로그래머 2명", "소프트웨어, 프로토타입, 자동화, 자체 제품을 구축하는 초기 개발팀입니다."]
        ],
        cards: [
          ["01", "발표보다 제품", "추상적 약속보다 작동하고 측정 가능하며 확장 가능한 시스템을 우선합니다."],
          ["02", "AI를 인프라로", "자동화, 의사결정, 학습을 위한 핵심 레이어로 AI를 다룹니다."],
          ["03", "실행 가능한 다학제", "소프트웨어, 게임, 로보틱스, 컨설팅이 하나의 기술 포트폴리오로 움직입니다."]
        ]
      }
    },
    "productos.html": {
      title: "제품 | Tecnotitan",
      description: "기업 소프트웨어, 인공지능, 비디오게임, 로보틱스 분야의 Tecnotitan 제품.",
      content: {
        label: "제품",
        titleLines: ["플랫폼으로 축적될", "수 있는 제품"],
        intro: "우리는 자체 제품과 맞춤형 시스템을 만들고, 이를 반복 가능한 플랫폼으로 발전시킵니다.",
        cards: [
          ["중소기업 AI", "Copiloto Pyme", "영업, 지원, 문서, 운영 자동화를 위한 중소기업용 AI 어시스턴트."],
          ["기업 운영체제", "Tecnotitan OS", "프로세스, 데이터, 자동화, AI 에이전트, 내부 플로우를 중앙화하는 기업 플랫폼."],
          ["모바일 + AI", "Life Copilot", "목표, 업무, 습관, 의사결정을 정리하는 개인 생산성 AI 모바일 앱."],
          ["비디오게임", "Tecnotitan Engine", "게임, 시뮬레이터, 인터랙티브 경험, 게이미피케이션 세계를 프로토타이핑하는 엔진과 툴킷."],
          ["교육", "Academia Tecnotitan", "AI, 소프트웨어, 게임, 로보틱스, 기술 전환을 위한 학습 플랫폼."],
          ["AI 콜센터", "Call Center AI Tecnotitan", "지원, 영업, 고객 후속관리, 컨택센터 자동화를 위한 대화형 에이전트."]
        ]
      }
    },
    "servicios.html": {
      title: "서비스 | Tecnotitan",
      description: "기업을 위한 인공지능 컨설팅과 기술 전환 서비스.",
      content: {
        label: "서비스",
        titleLines: ["구현으로 이어지는", "컨설팅"],
        intro: "기업이 운영 효과가 있는 AI와 소프트웨어를 식별, 설계, 구현하도록 돕습니다.",
        timelineLabel: "서비스",
        cards: [
          ["01", "AI 진단", "프로세스, 데이터, 자동화 기회, 예상 수익을 평가합니다."],
          ["02", "기술 로드맵", "아키텍처, 우선순위, 스택, 리스크, 실행 계획."],
          ["03", "구현", "소프트웨어, AI 에이전트, 통합, 작동하는 프로토타입 개발."],
          ["04", "도입", "교육, 측정, 지속 개선, 역량 이전."]
        ]
      }
    },
    "divisiones.html": {
      title: "부문 | Tecnotitan",
      description: "소프트웨어, AI, 게임, 로보틱스, 기술 ventures 분야의 Tecnotitan 부문.",
      content: {
        label: "부문",
        titleLines: ["기술 엔진들의", "포트폴리오"],
        intro: "각 부문은 재사용 가능한 역량, 지식재산, 독립적인 상업 기회를 만듭니다.",
        divisionThesisLabel: "운영 아키텍처",
        divisionThesisTitle: "소프트웨어, 데이터, 응용 지능으로 연결된 부문.",
        divisionThesisParagraphs: [
          "Tecnotitan의 각 부문은 비즈니스 유닛, IP 연구소, 다른 부문을 위한 역량 공급원으로 운영될 수 있습니다.",
          "목표는 컨설팅, 제품, 자체 기술이 서로를 강화해 고립된 프로젝트가 아니라 시장을 만드는 것입니다."
        ],
        cards: [
          ["기업 소프트웨어", "Tecnotitan Software", "기업 운영을 개선하는 웹 플랫폼, 내부 CRM, 포털, 대시보드, 자동화."],
          ["인공지능", "Tecnotitan AI", "실제 프로세스에 통합되는 에이전트, 코파일럿, 분석, 문서 자동화, 스마트 플로우."],
          ["게임과 인터랙티브", "Tecnotitan Games", "교육, 브랜드, 신제품을 위한 게임, 시뮬레이터, 게이미피케이션, 몰입형 경험."],
          ["로보틱스", "Tecnotitan Robotics", "운영 지능과 연결된 물리-디지털 시스템을 만드는 소프트웨어, 센서, 제어, 데이터."],
          ["기술 컨설팅", "Tecnotitan Advisory", "AI 전략, 기술 전환, 기업 도입, 경영진 지원."],
          ["Ventures", "Tecnotitan Ventures", "실험, spin-off, 자체 제품, 내부 역량에서 만들어지는 새로운 기회."]
        ]
      }
    },
    "inversionistas.html": {
      title: "투자자 | Tecnotitan",
      description: "Tecnotitan의 글로벌 투자자 페이지: 논리, 시장, 모델, 비전.",
      content: {
        label: "투자자",
        titleLines: ["라틴아메리카에서", "글로벌 시장으로 가는", "응용 기술"],
        intro: "Tecnotitan은 고부가 서비스, 자체 제품, 기술 부문을 결합해 확장 가능한 응용 기술 회사를 구축합니다.",
        metrics: [
          ["시장", "소프트웨어 + AI", "지능형 자동화로 가속되는 기업 디지털화."],
          ["확장", "다중 부문", "소프트웨어, AI, 게임, 로보틱스, 컨설팅이 연결된 엔진."],
          ["모델", "서비스에서 제품으로", "고객 학습, 자체 IP, 반복 가능한 플랫폼."]
        ],
        thesisLabel: "논리",
        thesisTitle: "최고의 기술 파트너는 깊은 컨설팅과 제품 실행력을 결합합니다.",
        paragraphs: [
          "시장은 전통 소프트웨어에서 에이전트, 자동화, 데이터, 인터랙티브 경험을 가진 시스템으로 이동하고 있습니다. Tecnotitan은 이 교차점에 있습니다.",
          "우리의 경로는 서비스 매출, 제품 개발, 지식재산, 부문별 spin-off 기회를 결합합니다."
        ],
        opportunityTitle: "투자 기회",
        opportunityText: "Tecnotitan은 AI, 소프트웨어, 로보틱스의 기업 수요를 포착하고, 서비스에서 얻은 학습을 자체 제품과 확장 가능한 IP로 전환합니다.",
        opportunityCards: [
          ["01", "구조적 수요", "기업은 경쟁을 위해 프로세스, 데이터, 의사결정을 자동화해야 합니다."],
          ["02", "하이브리드 모델", "고부가 서비스는 매출, 시장 학습, 제품 기회를 만듭니다."],
          ["03", "축적 가능한 IP", "각 프로젝트는 도구, 에이전트, 프레임워크, 반복 가능한 플랫폼이 될 수 있습니다."],
          ["04", "지역 확장", "라틴아메리카에서 응용 기술을 구축해 유사한 니즈를 가진 글로벌 시장에 판매합니다."]
        ],
        indicatorTitle: "추적 지표",
        indicatorText: "Tecnotitan의 매출, 자체 제품, 목표 고객, 지역 확장 진행 상황을 전문적으로 추적하기 위한 프레임입니다.",
        indicatorMetrics: [
          ["목표 시장", "기업 + AI", "소프트웨어, 자동화, 인터랙티브 경험, 응용 로보틱스."],
          ["사업 영역", "5개 부문", "소프트웨어, AI, 게임, 로보틱스, 기술 컨설팅."],
          ["제품", "6개 라인", "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia, Call Center AI."]
        ],
        indicatorCards: [
          ["목표 고객", "중견 및 대기업", "반복 프로세스, 미활용 데이터, 자동화 압력을 가진 조직."],
          ["로드맵", "서비스에서 플랫폼으로", "반복 납품을 내부 도구, 상업 모듈, 제품으로 전환합니다."],
          ["확장", "LatAm에서 글로벌로", "지역 사례를 검증하고 유사한 니즈의 시장으로 응용 기술을 확장합니다."]
        ],
        roadmapTitle: "전략 로드맵",
        roadmapText: "기술 역량을 서비스, 자체 제품, 확장 기회로 전환하는 단계별 성장 경로.",
        roadmapCards: [
          ["2026", "검증과 실제 사례", "AI/소프트웨어 서비스를 강화하고 기업 사례를 만들며 반복 가능한 패턴을 문서화합니다."],
          ["2027", "제품과 지식재산", "내부 도구를 패키징하고 첫 상업 제품 라인을 출시하며 기술 부문을 강화합니다."],
          ["2028", "지역 확장과 플랫폼", "지역 판매를 확대하고 솔루션을 플랫폼으로 전환하며 부문별 spin-off를 검토합니다."]
        ],
        deckTitle: "Investor Deck / Data Room",
        deckText: "Tecnotitan의 논리, 시장, 포트폴리오, 실행 경로를 평가해야 하는 투자자를 위한 자료입니다.",
        deckCards: [
          ["01", "논리와 시장", "문제, 기회, 목표 고객, AI·소프트웨어·자동화가 지금 결합되는 이유."],
          ["02", "제품과 IP", "현재 포트폴리오, 자체 라인, 반복 가능한 플랫폼으로 발전할 수 있는 역량."],
          ["03", "팀과 실행", "초기 구조, 창업자 리더십, 기술 역량, 제품 중심 운영 방식."],
          ["04", "로드맵", "검증, 패키징, 지역 확장, 지식재산 구축 단계."],
          ["05", "자본 사용", "제품, 영업, 기술 인재, 내부 자동화, 상업 검증을 가속합니다."],
          ["06", "대화", "추가 정보 요청, 논리 공유, Tecnotitan과의 미팅 조율."]
        ],
        deckPageButton: "Deck 페이지 보기",
        deckButton: "Investor Deck 요청",
        investorCtaTitle: "투자자 액션",
        investorCtaText: "정보를 받고, 팀에 연락하거나 전략적 대화를 시작할 다음 단계를 선택하세요.",
        investorCtaCards: [
          ["01", "Investor Deck 요청", "논리, 시장, 로드맵, 기회의 요약본을 요청합니다."],
          ["02", "팀에 연락", "전략, 포트폴리오, 팀, 성장 단계에 대한 질문을 보냅니다."],
          ["03", "미팅 예약", "투자, 전략적 파트너십, 확장에 대한 대화를 시작합니다."]
        ],
        formTitle: "투자자 전용 문의",
        formText: "프로필, 투자 논리, 전략적 관심을 공유하면 Tecnotitan 팀이 info@tecnotitan.com에서 답변합니다.",
        formLabels: ["이름", "회사 / 펀드", "국가", "이메일", "관심 유형", "메시지"],
        formOptions: ["선택", "투자", "전략적 파트너십", "Investor deck", "팀에 연락", "미팅 예약"],
        formButton: "info@tecnotitan.com으로 보내기",
        formSending: "전송 중...",
        formErrorTitle: "전송할 수 없습니다",
        formErrorText: "다시 시도하거나 info@tecnotitan.com으로 직접 연락해 주세요.",
        formNewsletter: "Tecnotitan 공식 newsletter를 구독하겠습니다.",
        formSuccessTitle: "요청이 전송되었습니다",
        formSuccessText: "감사합니다. Tecnotitan 팀이 투자 메시지를 검토하고 info@tecnotitan.com에서 답변합니다.",
        cards: [
          ["01", "서비스 기반 초기 견인", "기업의 실제 문제를 해결하고 납품 패턴을 재사용 가능한 역량으로 전환합니다."],
          ["02", "자체 제품", "내부 도구와 검증된 플로우를 상업 플랫폼으로 전환합니다."],
          ["03", "글로벌 확장", "라틴아메리카에서 글로벌 기업으로 응용 기술을 판매합니다."]
        ]
      }
    },
    "contacto.html": {
      title: "문의 | Tecnotitan",
      description: "프로젝트, 서비스, 파트너십, 투자에 대해 Tecnotitan에 문의하세요.",
      content: {
        label: "문의",
        titleLines: ["다음 기술에 대해", "이야기합시다"],
        intro: "불만, 클레임, 제안, Tecnotitan에 대한 일반 요청을 위한 채널입니다.",
        cards: [
          ["지원", "일반 요청", "Tecnotitan과 서비스에 대한 질문, 의견, 메시지."],
          ["품질", "불만과 클레임", "검토가 필요한 경험, 프로세스, 답변에 대한 보고."],
          ["개선", "제안", "제품, 서비스, 커뮤니케이션, 사용자 경험을 개선하기 위한 아이디어."]
        ],
        formTitle: "일반 문의",
        formText: "불만, 클레임, 제안 또는 일반 요청을 info@tecnotitan.com으로 보내주세요.",
        formLabels: ["이름", "이메일", "회사", "국가", "요청 유형", "메시지"],
        formOptions: ["선택", "불만", "클레임", "제안", "일반 요청"],
        formButton: "info@tecnotitan.com으로 보내기",
        formSending: "전송 중...",
        formErrorTitle: "전송할 수 없습니다",
        formErrorText: "다시 시도하거나 info@tecnotitan.com으로 직접 연락해 주세요.",
        formNewsletter: "Tecnotitan 공식 newsletter를 구독하겠습니다.",
        formSuccessTitle: "메시지가 전송되었습니다",
        formSuccessText: "감사합니다. 일반 요청을 받았으며 info@tecnotitan.com에서 답변하겠습니다."
      }
    },
    "investor-deck.html": {
      title: "Investor Deck | Tecnotitan",
      description: "Tecnotitan의 향후 Investor Deck PDF 요청: 논리, 시장, 제품, 팀, 로드맵, 자본 우선순위.",
      content: {
        label: "Investor Deck",
        titleLines: ["투자자를 위한", "PDF"],
        intro: "Tecnotitan의 공식 deck은 향후 공개될 자산으로 준비되어 있습니다. 공개 전에는 투자자 양식을 통해 직접 접근을 요청할 수 있습니다.",
        cards: [
          ["01", "논리", "글로벌 기업을 위한 문제, 시장 기회, 응용 기술 논리."],
          ["02", "포트폴리오", "제품, 부문, 잠재 IP, 반복 가능한 플랫폼으로 가는 경로."],
          ["03", "실행", "초기 팀, 로드맵, 자본 우선순위, 다음 검증 마일스톤."]
        ]
      }
    }
  }
});

languages.es.pages["aviso-legal.html"] = {
  title: "Aviso legal y privacidad | Tecnotitan",
  description:
    "Aviso legal y privacidad de Tecnotitan: información corporativa, formularios, geolocalización por país, propiedad intelectual y contacto oficial.",
  content: {
    label: "Aviso legal",
    titleLines: ["Aviso legal", "y privacidad"],
    intro:
      "Información institucional sobre el uso del sitio web, formularios, datos técnicos, propiedad intelectual y canales oficiales de contacto.",
    cards: [
      ["01", "Información del sitio", "Este sitio presenta información corporativa de Tecnotitan, sus productos, servicios, divisiones y comunicaciones para inversionistas."],
      ["02", "Geolocalización por país", "Usamos datos técnicos aproximados del país entregados por Vercel para seleccionar automáticamente el idioma inicial. No mostramos ni vendemos la IP del visitante."],
      ["03", "Formularios", "Los datos enviados por formularios se usan para responder solicitudes, mensajes generales, quejas, reclamos, sugerencias o conversaciones con inversionistas."],
      ["04", "Propiedad intelectual", "Marcas, textos, imágenes, diseños, productos, conceptos y materiales del sitio pertenecen a Tecnotitan o se usan con autorización."],
      ["05", "Información para inversionistas", "El contenido para inversionistas es informativo y no constituye oferta pública de valores, recomendación financiera ni promesa de rendimiento."],
      ["06", "Contacto oficial", "Para solicitudes legales, privacidad, correcciones o contacto institucional, escribe a info@tecnotitan.com."]
    ]
  }
};

languages.en.pages["aviso-legal.html"] = {
  title: "Legal Notice and Privacy | Tecnotitan",
  description:
    "Tecnotitan legal notice and privacy information: corporate information, forms, country-level geolocation, intellectual property and official contact.",
  content: {
    label: "Legal notice",
    titleLines: ["Legal notice", "and privacy"],
    intro:
      "Institutional information about website use, forms, technical data, intellectual property and official contact channels.",
    cards: [
      ["01", "Website information", "This website presents corporate information about Tecnotitan, its products, services, divisions and investor communications."],
      ["02", "Country-level geolocation", "We use approximate country data provided by Vercel to automatically select the initial language. We do not display or sell the visitor IP."],
      ["03", "Forms", "Data submitted through forms is used to respond to requests, general messages, complaints, claims, suggestions or investor conversations."],
      ["04", "Intellectual property", "Trademarks, copy, images, designs, products, concepts and materials on this site belong to Tecnotitan or are used with authorization."],
      ["05", "Investor information", "Investor content is informational and does not constitute a public securities offering, financial recommendation or promise of return."],
      ["06", "Official contact", "For legal requests, privacy matters, corrections or institutional contact, write to info@tecnotitan.com."]
    ]
  }
};

languages.pt.pages["aviso-legal.html"] = {
  title: "Aviso legal e privacidade | Tecnotitan",
  description:
    "Aviso legal e privacidade da Tecnotitan: informações corporativas, formulários, geolocalização por país, propriedade intelectual e contato oficial.",
  content: {
    label: "Aviso legal",
    titleLines: ["Aviso legal", "e privacidade"],
    intro:
      "Informações institucionais sobre uso do site, formulários, dados técnicos, propriedade intelectual e canais oficiais de contato.",
    cards: [
      ["01", "Informações do site", "Este site apresenta informações corporativas da Tecnotitan, seus produtos, serviços, divisões e comunicações para investidores."],
      ["02", "Geolocalização por país", "Usamos dados técnicos aproximados do país fornecidos pela Vercel para selecionar automaticamente o idioma inicial. Não exibimos nem vendemos o IP do visitante."],
      ["03", "Formulários", "Os dados enviados por formulários são usados para responder solicitações, mensagens gerais, queixas, reclamações, sugestões ou conversas com investidores."],
      ["04", "Propriedade intelectual", "Marcas, textos, imagens, designs, produtos, conceitos e materiais do site pertencem à Tecnotitan ou são usados com autorização."],
      ["05", "Informações para investidores", "O conteúdo para investidores é informativo e não constitui oferta pública de valores, recomendação financeira nem promessa de retorno."],
      ["06", "Contato oficial", "Para solicitações legais, privacidade, correções ou contato institucional, escreva para info@tecnotitan.com."]
    ]
  }
};

languages.zh.pages["aviso-legal.html"] = {
  title: "法律声明与隐私 | Tecnotitan",
  description: "Tecnotitan 法律声明与隐私信息：公司信息、表单、按国家识别语言、知识产权和官方联系渠道。",
  content: {
    label: "法律声明",
    titleLines: ["法律声明", "与隐私"],
    intro: "关于网站使用、表单、技术数据、知识产权和官方联系渠道的机构信息。",
    cards: [
      ["01", "网站信息", "本网站展示 Tecnotitan 的公司信息、产品、服务、事业部和投资者沟通内容。"],
      ["02", "按国家识别语言", "我们使用 Vercel 提供的近似国家数据来自动选择初始语言。我们不展示或出售访问者 IP。"],
      ["03", "表单", "通过表单提交的数据用于回复请求、一般消息、投诉、申诉、建议或投资者对话。"],
      ["04", "知识产权", "本网站的商标、文本、图片、设计、产品、概念和材料属于 Tecnotitan 或经授权使用。"],
      ["05", "投资者信息", "投资者内容仅供参考，不构成公开证券发行、财务建议或收益承诺。"],
      ["06", "官方联系", "如有法律、隐私、更正或机构联系请求，请写信至 info@tecnotitan.com。"]
    ]
  }
};

languages.ja.pages["aviso-legal.html"] = {
  title: "法的通知とプライバシー | Tecnotitan",
  description: "Tecnotitan の法的通知とプライバシー情報：会社情報、フォーム、国別の言語選択、知的財産、公式連絡先。",
  content: {
    label: "法的通知",
    titleLines: ["法的通知", "とプライバシー"],
    intro: "ウェブサイトの利用、フォーム、技術データ、知的財産、公式連絡先に関する機関情報です。",
    cards: [
      ["01", "サイト情報", "このサイトは Tecnotitan の会社情報、製品、サービス、部門、投資家向けコミュニケーションを掲載しています。"],
      ["02", "国別の言語選択", "Vercel が提供するおおよその国データを使用して初期言語を自動選択します。訪問者の IP を表示または販売しません。"],
      ["03", "フォーム", "フォームで送信されたデータは、依頼、一般メッセージ、苦情、申し立て、提案、投資家との会話への返信に使用されます。"],
      ["04", "知的財産", "サイト上の商標、文章、画像、デザイン、製品、概念、資料は Tecnotitan に属するか、許可を得て使用されています。"],
      ["05", "投資家向け情報", "投資家向けコンテンツは情報提供を目的としており、有価証券の公募、金融助言、収益の約束ではありません。"],
      ["06", "公式連絡先", "法務、プライバシー、訂正、機関連絡については info@tecnotitan.com へご連絡ください。"]
    ]
  }
};

languages.ko.pages["aviso-legal.html"] = {
  title: "법적 고지 및 개인정보 | Tecnotitan",
  description: "Tecnotitan 법적 고지 및 개인정보: 회사 정보, 양식, 국가 기반 언어 선택, 지식재산, 공식 연락처.",
  content: {
    label: "법적 고지",
    titleLines: ["법적 고지", "및 개인정보"],
    intro: "웹사이트 이용, 양식, 기술 데이터, 지식재산, 공식 연락 채널에 대한 기관 정보입니다.",
    cards: [
      ["01", "사이트 정보", "이 사이트는 Tecnotitan의 회사 정보, 제품, 서비스, 부문, 투자자 커뮤니케이션을 제공합니다."],
      ["02", "국가 기반 언어 선택", "Vercel이 제공하는 대략적인 국가 데이터를 사용해 초기 언어를 자동 선택합니다. 방문자 IP를 표시하거나 판매하지 않습니다."],
      ["03", "양식", "양식으로 제출된 데이터는 요청, 일반 메시지, 불만, 클레임, 제안 또는 투자자 대화에 응답하기 위해 사용됩니다."],
      ["04", "지식재산", "사이트의 상표, 텍스트, 이미지, 디자인, 제품, 개념, 자료는 Tecnotitan에 속하거나 허가를 받아 사용됩니다."],
      ["05", "투자자 정보", "투자자 콘텐츠는 정보 제공 목적이며, 공모, 금융 조언 또는 수익 약속을 구성하지 않습니다."],
      ["06", "공식 연락처", "법무, 개인정보, 수정 요청 또는 기관 연락은 info@tecnotitan.com으로 보내주세요."]
    ]
  }
};

const languagePathSegments = {
  es: "es",
  en: "en",
  pt: "pt",
  zh: "zh",
  ja: "ja",
  ko: "ko"
};
const guideHubDirectories = {
  en: "guides",
  pt: "guias",
  zh: "guides",
  ja: "guides",
  ko: "guides"
};
const englishCleanPageRoutes = {
  about: "nosotros.html",
  products: "productos.html",
  services: "servicios.html",
  divisions: "divisiones.html",
  investors: "inversionistas.html",
  contact: "contacto.html",
  "investor-deck": "investor-deck.html",
  legal: "aviso-legal.html",
  careers: "trabaja-con-nosotros.html"
};
const englishCleanUrlsByPage = Object.fromEntries(
  Object.entries(englishCleanPageRoutes).map(([slug, file]) => [file, `/${slug}/`])
);
const pathSegmentLanguages = Object.fromEntries(Object.entries(languagePathSegments).map(([language, segment]) => [segment, language]));
const cleanPathSegments = window.location.pathname.split("/").filter(Boolean);
const pathLanguage = pathSegmentLanguages[cleanPathSegments[0]] || "";
const englishCleanRouteSlug = !pathLanguage ? cleanPathSegments[0] || "" : "";
const isEnglishCleanGuideHubRoute = !pathLanguage && cleanPathSegments.length === 1 && cleanPathSegments[0] === "guides";
const isEnglishCleanGuideArticleRoute = !pathLanguage && cleanPathSegments.length === 2 && cleanPathSegments[0] === "guides";
const englishCleanPageName = englishCleanPageRoutes[englishCleanRouteSlug] || "";
const inferredPathLanguage = pathLanguage || (englishCleanPageName || isEnglishCleanGuideHubRoute || isEnglishCleanGuideArticleRoute ? "en" : "");
const rawPageName = englishCleanPageName || cleanPathSegments.at(pathLanguage ? 1 : 0) || "index.html";
const routeAfterLanguage = pathLanguage ? cleanPathSegments.slice(1) : cleanPathSegments;
const isGuideHubRoute = isEnglishCleanGuideHubRoute || Boolean(pathLanguage && guideHubDirectories[pathLanguage] && routeAfterLanguage.length === 1 && routeAfterLanguage[0] === guideHubDirectories[pathLanguage]);
const isGuideArticleRoute = isEnglishCleanGuideArticleRoute || Boolean(pathLanguage && guideHubDirectories[pathLanguage] && routeAfterLanguage.length === 2 && routeAfterLanguage[0] === guideHubDirectories[pathLanguage]);
const pageName = isGuideHubRoute || isGuideArticleRoute ? "guias.html" : rawPageName;
const cleanGuideArticleSlug = isGuideArticleRoute ? routeAfterLanguage[1].replace(/\.html$/, "") : "";
const guideArticleRoutes = {
  aiForSmbs: {
    es: "guia-ia-para-pymes",
    en: "ai-for-small-business"
  },
  officeAutomation: {
    es: "guia-automatizacion-administrativa-pymes",
    en: "office-automation-for-small-business"
  },
  crmImplementation: {
    es: "guia-implementar-crm-pymes",
    en: "crm-implementation-for-small-business"
  },
  cybersecurityBasics: {
    es: "guia-ciberseguridad-basica-pymes",
    en: "small-business-cybersecurity-basics"
  },
  dashboardsKpis: {
    es: "guia-dashboard-kpis-pymes",
    en: "business-dashboard-kpis-for-small-business"
  },
  omnichannelSupport: {
    es: "guia-soporte-omnicanal-pymes",
    en: "omnichannel-customer-support-for-small-business"
  },
  inventoryAutomation: {
    es: "guia-control-inventario-automatizado",
    en: "inventory-control-automation-small-business"
  },
  billingAutomation: {
    es: "guia-automatizar-facturacion-cobros",
    en: "billing-and-collections-automation"
  },
  aiProductivity: {
    es: "guia-productividad-ia-equipos",
    en: "ai-productivity-for-business-teams"
  },
  cloudMigration: {
    es: "guia-migracion-nube-pymes",
    en: "cloud-migration-for-small-business"
  },
  aiAgents: {
    es: "guia-agentes-ia-procesos-empresariales",
    en: "ai-agents-for-business-workflows",
    pt: "agentes-ia-processos-empresariais",
    zh: "ai-agents-business-workflows",
    ja: "ai-agents-business-workflows",
    ko: "ai-agents-business-workflows"
  },
  dataStrategy: {
    es: "guia-estrategia-datos-ia-empresas",
    en: "ai-data-strategy-for-companies",
    pt: "estrategia-dados-ia-empresas",
    zh: "ai-data-strategy-companies",
    ja: "ai-data-strategy-companies",
    ko: "ai-data-strategy-companies"
  },
  buildBuyAutomate: {
    es: "guia-software-medida-saas-automatizacion",
    en: "custom-software-vs-saas-vs-automation",
    pt: "software-sob-medida-saas-automacao",
    zh: "custom-software-saas-automation",
    ja: "custom-software-saas-automation",
    ko: "custom-software-saas-automation"
  },
  chatgptWork: {
    es: "guia-como-usar-chatgpt-en-el-trabajo",
    en: "how-to-use-chatgpt-at-work",
    pt: "como-usar-chatgpt-no-trabalho",
    zh: "chatgpt-work-guide",
    ja: "chatgpt-work-guide",
    ko: "chatgpt-work-guide"
  },
  aiCustomerService: {
    es: "guia-automatizar-atencion-cliente-con-ia",
    en: "automate-customer-service-with-ai",
    pt: "automatizar-atendimento-cliente-com-ia",
    zh: "ai-customer-service-automation",
    ja: "ai-customer-service-automation",
    ko: "ai-customer-service-automation"
  },
  businessSoftware: {
    es: "guia-software-empresarial-para-pymes",
    en: "business-software-for-smbs",
    pt: "software-empresarial-para-pmes",
    zh: "business-software-smbs",
    ja: "business-software-smbs",
    ko: "business-software-smbs"
  },
  b2bSalesPrompts: {
    es: "guia-prompts-chatgpt-ventas-b2b",
    en: "chatgpt-prompts-for-b2b-sales",
    pt: "prompts-chatgpt-vendas-b2b",
    zh: "chatgpt-prompts-b2b-sales",
    ja: "chatgpt-prompts-b2b-sales",
    ko: "chatgpt-prompts-b2b-sales"
  },
  aiGovernance: {
    es: "guia-gobernanza-ia-empresas",
    en: "ai-governance-for-companies",
    pt: "governanca-ia-empresas",
    zh: "ai-governance-companies",
    ja: "ai-governance-companies",
    ko: "ai-governance-companies"
  },
  aiAutomationRoi: {
    es: "guia-roi-automatizacion-ia",
    en: "ai-automation-roi",
    pt: "roi-automacao-ia",
    zh: "ai-automation-roi",
    ja: "ai-automation-roi",
    ko: "ai-automation-roi"
  },
  aiCrm: {
    es: "guia-crm-ia-ventas-soporte",
    en: "ai-crm-for-sales-and-support",
    pt: "crm-com-ia-vendas-suporte",
    zh: "ai-crm-sales-support",
    ja: "ai-crm-sales-support",
    ko: "ai-crm-sales-support"
  },
  digitalRoadmap: {
    es: "guia-roadmap-transformacion-digital-pymes",
    en: "digital-transformation-roadmap-for-smbs",
    pt: "roadmap-transformacao-digital-pmes",
    zh: "digital-transformation-roadmap-smbs",
    ja: "digital-transformation-roadmap-smbs",
    ko: "digital-transformation-roadmap-smbs"
  },
  aiEmployeeOnboarding: {
    es: "guia-onboarding-ia-empleados",
    en: "ai-onboarding-for-employees",
    pt: "onboarding-ia-colaboradores",
    zh: "ai-onboarding-employees",
    ja: "ai-onboarding-employees",
    ko: "ai-onboarding-employees"
  },
  executiveReportsAutomation: {
    es: "guia-automatizar-reportes-ejecutivos",
    en: "executive-reporting-automation",
    pt: "automatizar-relatorios-executivos",
    zh: "executive-reporting-automation",
    ja: "executive-reporting-automation",
    ko: "executive-reporting-automation"
  },
  systemsApiIntegration: {
    es: "guia-integracion-sistemas-api-pymes",
    en: "system-integration-api-for-smbs",
    pt: "integracao-sistemas-api-pmes",
    zh: "system-integration-api-smbs",
    ja: "system-integration-api-smbs",
    ko: "system-integration-api-smbs"
  },
  aiVendorEvaluation: {
    es: "guia-evaluar-proveedores-ia-empresas",
    en: "evaluate-ai-vendors-for-companies",
    pt: "avaliar-fornecedores-ia-empresas",
    zh: "evaluate-ai-vendors-companies",
    ja: "evaluate-ai-vendors-companies",
    ko: "evaluate-ai-vendors-companies"
  }
};
const guideArticleRouteIndex = Object.entries(guideArticleRoutes).reduce((index, [key, routes]) => {
  Object.values(routes).forEach((slug) => {
    index[slug] = key;
  });
  return index;
}, {});
const cleanGuideArticleKey = guideArticleRouteIndex[cleanGuideArticleSlug] || "";
const supportedLanguages = Object.keys(languages);
const languageNames = {
  es: "Español",
  en: "English",
  pt: "Português",
  zh: "中文",
  ja: "日本語",
  ko: "한국어"
};
const languageLocales = {
  es: "es_ES",
  en: "en_US",
  pt: "pt_BR",
  zh: "zh_CN",
  ja: "ja_JP",
  ko: "ko_KR"
};
const contactWhatsApp = {
  href: "https://wa.me/573108229935",
  label: "WhatsApp +57 310 822 9935"
};
const deckDownloadContent = {
  es: {
    title: "Ver Investor Deck en el navegador",
    text: "Lee el PDF ligero del deck para inversionistas de Tecnotitan, cambia de idioma sin salir de la página y descarga el archivo si lo necesitas.",
    privacy: "Medimos aperturas y descargas de forma agregada para entender el interés por idioma. No guardamos nombre, email, IP ni huellas digitales.",
    actions: ["Abrir PDF en navegador", "Descargar PDF", "Descargar PPTX editable"],
    cards: [
      ["ES", "Español", "Deck para inversionistas en español."],
      ["EN", "English", "Investor deck in English."],
      ["PT", "Português", "Deck para investidores em português."],
      ["ZH", "中文", "中文投资者演示文稿。"],
      ["JA", "日本語", "日本語の投資家向けデッキ。"],
      ["KO", "한국어", "한국어 투자자용 데크."]
    ]
  },
  en: {
    title: "View the Investor Deck in your browser",
    text: "Read Tecnotitan's lightweight investor deck PDF, switch languages without leaving the page and download the file when needed.",
    privacy: "We measure opens and downloads in aggregate to understand interest by language. We do not store name, email, IP address or fingerprints.",
    actions: ["Open PDF in browser", "Download PDF", "Download editable PPTX"],
    cards: [
      ["ES", "Spanish", "Investor deck in Spanish."],
      ["EN", "English", "Investor deck in English."],
      ["PT", "Portuguese", "Investor deck in Portuguese."],
      ["ZH", "Chinese", "Investor deck in Chinese."],
      ["JA", "Japanese", "Investor deck in Japanese."],
      ["KO", "Korean", "Investor deck in Korean."]
    ]
  },
  pt: {
    title: "Veja o Investor Deck no navegador",
    text: "Leia o PDF leve do deck para investidores da Tecnotitan, alterne idiomas sem sair da página e baixe o arquivo se precisar.",
    privacy: "Medimos aberturas e downloads de forma agregada para entender o interesse por idioma. Não guardamos nome, email, IP nem fingerprints.",
    actions: ["Abrir PDF no navegador", "Baixar PDF", "Baixar PPTX editável"],
    cards: [
      ["ES", "Espanhol", "Deck para investidores em espanhol."],
      ["EN", "Inglês", "Deck para investidores em inglês."],
      ["PT", "Português", "Deck para investidores em português."],
      ["ZH", "Chinês", "Deck para investidores em chinês."],
      ["JA", "Japonês", "Deck para investidores em japonês."],
      ["KO", "Coreano", "Deck para investidores em coreano."]
    ]
  },
  zh: {
    title: "在浏览器中查看 Investor Deck",
    text: "阅读 Tecnotitan 的轻量级投资者 PDF，在页面内切换语言，并可按需下载文件。",
    privacy: "我们以汇总方式统计打开和下载，以了解不同语言的兴趣。不保存姓名、邮箱、IP 或指纹。",
    actions: ["在浏览器中打开 PDF", "下载 PDF", "下载可编辑 PPTX"],
    cards: [
      ["ES", "西班牙语", "西班牙语投资者演示文稿。"],
      ["EN", "英语", "英语投资者演示文稿。"],
      ["PT", "葡萄牙语", "葡萄牙语投资者演示文稿。"],
      ["ZH", "中文", "中文投资者演示文稿。"],
      ["JA", "日语", "日语投资者演示文稿。"],
      ["KO", "韩语", "韩语投资者演示文稿。"]
    ]
  },
  ja: {
    title: "ブラウザでInvestor Deckを表示",
    text: "Tecnotitanの軽量PDFデッキを読み、ページを離れずに言語を切り替え、必要に応じてダウンロードできます。",
    privacy: "言語別の関心を把握するため、表示とダウンロードを集計形式で測定します。名前、メール、IP、フィンガープリントは保存しません。",
    actions: ["ブラウザでPDFを開く", "PDFをダウンロード", "編集可能なPPTXをダウンロード"],
    cards: [
      ["ES", "スペイン語", "スペイン語の投資家向けデッキ。"],
      ["EN", "英語", "英語の投資家向けデッキ。"],
      ["PT", "ポルトガル語", "ポルトガル語の投資家向けデッキ。"],
      ["ZH", "中国語", "中国語の投資家向けデッキ。"],
      ["JA", "日本語", "日本語の投資家向けデッキ。"],
      ["KO", "韓国語", "韓国語の投資家向けデッキ。"]
    ]
  },
  ko: {
    title: "브라우저에서 Investor Deck 보기",
    text: "Tecnotitan의 가벼운 투자자용 PDF를 읽고, 페이지 안에서 언어를 바꾸며 필요할 때 파일을 다운로드할 수 있습니다.",
    privacy: "언어별 관심을 이해하기 위해 열람과 다운로드를 집계 형태로 측정합니다. 이름, 이메일, IP, 지문 정보는 저장하지 않습니다.",
    actions: ["브라우저에서 PDF 열기", "PDF 다운로드", "편집 가능한 PPTX 다운로드"],
    cards: [
      ["ES", "스페인어", "스페인어 투자자용 데크."],
      ["EN", "영어", "영어 투자자용 데크."],
      ["PT", "포르투갈어", "포르투갈어 투자자용 데크."],
      ["ZH", "중국어", "중국어 투자자용 데크."],
      ["JA", "일본어", "일본어 투자자용 데크."],
      ["KO", "한국어", "한국어 투자자용 데크."]
    ]
  }
};
const deckFileLanguages = ["es", "en", "pt", "zh", "ja", "ko"];
let activeDeckLanguage = "es";

function deckFilePath(language, extension) {
  const safeLanguage = deckFileLanguages.includes(language) ? language : "es";
  return `/assets/investor-deck/Tecnotitan-Investor-Deck-${safeLanguage.toUpperCase()}.${extension}`;
}

function getDeckVisitorId() {
  const storageKey = "tecnotitan-deck-visitor";
  let visitorId = localStorage.getItem(storageKey);

  if (!visitorId) {
    visitorId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

function trackDeckEvent(event, details = {}) {
  const payload = JSON.stringify({
    event,
    language: details.language || activeDeckLanguage,
    format: details.format || "viewer",
    visitorId: getDeckVisitorId(),
    path: window.location.pathname
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/deck-track", new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch("/api/deck-track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    keepalive: true
  }).catch(() => {});
}

function getServiceVisitorId() {
  const storageKey = "tecnotitan-service-visitor";
  let visitorId = localStorage.getItem(storageKey);

  if (!visitorId) {
    visitorId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

function trackServiceEvent(event, details = {}) {
  const payloadData = {
    event,
    language: activeLanguage,
    intent: details.intent || "general",
    cta: details.cta || "ai-diagnosis",
    visitorId: getServiceVisitorId(),
    path: window.location.pathname
  };
  const payload = JSON.stringify(payloadData);

  if (typeof window.va === "function") {
    try {
      window.va("event", "service_cta_click", {
        language: payloadData.language,
        intent: payloadData.intent,
        cta: payloadData.cta
      });
    } catch (error) {
      // Vercel custom events require supported analytics setup; KV tracking remains the source of record.
    }
  }

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/service-track", new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch("/api/service-track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    keepalive: true
  }).catch(() => {});
}

function getTrafficVisitorId() {
  const storageKey = "tecnotitan-traffic-visitor";
  let visitorId = localStorage.getItem(storageKey);

  if (!visitorId) {
    visitorId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

function trackSitePageView() {
  const payload = JSON.stringify({
    language: activeLanguage,
    path: window.location.pathname || "/",
    referrer: document.referrer || "direct",
    visitorId: getTrafficVisitorId()
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/traffic-track", new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch("/api/traffic-track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    keepalive: true
  }).catch(() => {});
}

function updateDeckViewer(language, options = {}) {
  const safeLanguage = deckFileLanguages.includes(language) ? language : "es";
  activeDeckLanguage = safeLanguage;
  const pdfPath = deckFilePath(safeLanguage, "pdf");
  const pptxPath = deckFilePath(safeLanguage, "pptx");
  const viewer = document.querySelector(".pdf-viewer");
  if (viewer) {
    viewer.src = `${pdfPath}#view=FitH`;
  }
  document.querySelectorAll(".deck-view-link").forEach((link) => {
    link.href = pdfPath;
  });
  document.querySelectorAll(".deck-download-link").forEach((link) => {
    link.href = pdfPath;
  });
  document.querySelectorAll(".deck-pptx-link").forEach((link) => {
    link.href = pptxPath;
  });
  document.querySelectorAll(".deck-language-grid a").forEach((link) => {
    const linkLanguage = link.dataset.deckLang;
    link.href = deckFilePath(linkLanguage, "pdf");
    link.setAttribute("aria-current", linkLanguage === safeLanguage ? "true" : "false");
  });

  if (options.trackView) {
    trackDeckEvent("view_pdf", { language: safeLanguage, format: "viewer" });
  }
}

function applyDeckFileActionLabels(language) {
  const content = deckDownloadContent[language] || deckDownloadContent.es;
  if (!content.actions) {
    return;
  }
  document.querySelectorAll(".deck-file-actions .button").forEach((button, index) => {
    if (content.actions[index]) {
      button.textContent = content.actions[index];
    }
  });
}

const queryLanguage = new URLSearchParams(window.location.search).get("lang");
const storedLanguage = localStorage.getItem("tecnotitan-language");
let activeLanguage = supportedLanguages.includes(pathLanguage)
  ? pathLanguage
  : supportedLanguages.includes(inferredPathLanguage)
    ? inferredPathLanguage
  : supportedLanguages.includes(queryLanguage)
    ? queryLanguage
    : supportedLanguages.includes(storedLanguage)
      ? storedLanguage
      : "es";
const shouldAutoDetectLanguage =
  !supportedLanguages.includes(inferredPathLanguage) &&
  !supportedLanguages.includes(queryLanguage) &&
  !supportedLanguages.includes(storedLanguage);

if (!supportedLanguages.includes(activeLanguage)) {
  activeLanguage = "es";
}

activeDeckLanguage = deckFileLanguages.includes(activeLanguage) ? activeLanguage : "es";

const spanishCountries = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "SV",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PY",
  "PE",
  "PR",
  "ES",
  "UY",
  "VE"
]);
const portugueseCountries = new Set(["AO", "BR", "CV", "GW", "MZ", "PT", "ST", "TL"]);
const englishCountries = new Set(["AU", "CA", "GB", "IE", "IN", "NZ", "PH", "SG", "US", "ZA"]);
const chineseCountries = new Set(["CN", "HK", "MO", "TW"]);
const japaneseCountries = new Set(["JP"]);
const koreanCountries = new Set(["KR", "KP"]);

function languageFromCountry(country) {
  const countryCode = String(country || "").toUpperCase();

  if (chineseCountries.has(countryCode)) {
    return "zh";
  }

  if (japaneseCountries.has(countryCode)) {
    return "ja";
  }

  if (koreanCountries.has(countryCode)) {
    return "ko";
  }

  if (portugueseCountries.has(countryCode)) {
    return "pt";
  }

  if (spanishCountries.has(countryCode)) {
    return "es";
  }

  if (englishCountries.has(countryCode)) {
    return "en";
  }

  return "en";
}

function languageFromBrowser() {
  const locale = (navigator.languages?.[0] || navigator.language || "").toLowerCase();

  if (locale.startsWith("zh")) {
    return "zh";
  }

  if (locale.startsWith("ja")) {
    return "ja";
  }

  if (locale.startsWith("ko")) {
    return "ko";
  }

  if (locale.startsWith("pt")) {
    return "pt";
  }

  if (locale.startsWith("es")) {
    return "es";
  }

  return "en";
}

async function detectVisitorLanguage() {
  try {
    const response = await fetch("/api/geo", { cache: "no-store" });

    if (response.ok) {
      const data = await response.json();
      return data.country ? languageFromCountry(data.country) : languageFromBrowser();
    }
  } catch (error) {
    return languageFromBrowser();
  }

  return languageFromBrowser();
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

const homeVisualTranslations = {
  es: {
    ops: {
      kicker: "Capa operativa",
      title: "Tecnología que conecta decisiones, procesos y productos.",
      text: "Una vista viva de Tecnotitan como sistema de tecnología aplicada: software, IA, robótica, videojuegos y consultoría trabajando desde la misma inteligencia operativa.",
      signals: ["Flujos IA", "Software empresarial", "IP reutilizable"],
      nodes: [["AI", "Agents"], ["OS", "Software"], ["RB", "Robotics"], ["GX", "Games"]],
      metrics: [["Velocidad", "+42%"], ["Señal", "LIVE"]]
    },
    architecture: {
      kicker: "Arquitectura escalable",
      title: "Del aprendizaje en servicios a inteligencia de producto.",
      text: "Cada proyecto puede convertirse en un patrón reutilizable: flujos, componentes, agentes, tableros y conocimiento operativo que se acumula entre divisiones de Tecnotitan.",
      modules: [["01", "Datos", "Fuentes claras"], ["02", "Agentes", "Tareas guiadas"], ["03", "Productos", "IP reutilizable"], ["04", "Mercados", "Alcance global"]],
      buttons: ["Explorar productos", "Ver divisiones"]
    },
    posters: [
      ["Inteligencia operacional", "La empresa como un sistema vivo, medible y automatizado.", "Tecnotitan conecta datos, software, IA y robótica para que cada proceso crítico pueda observarse, mejorarse y escalarse con precisión."],
      ["Productos globales", "Un portafolio que puede viajar de Colombia al mundo.", "Copilotos, plataformas empresariales, simulación, motores de videojuegos e IA conversacional nacen de una misma arquitectura tecnológica."]
    ],
    final: {
      kicker: "Siguiente movimiento",
      title: "Construyamos la ventaja operativa antes de que el mercado acelere.",
      text: "Habla con Tecnotitan sobre inversión, software empresarial, consultoría IA o alianzas estratégicas de tecnología.",
      buttons: ["Agendar conversación", "Ver investor deck", "Solicitar diagnóstico IA"]
    }
  },
  en: {
    ops: {
      kicker: "Operating layer",
      title: "Technology that connects decisions, processes and products.",
      text: "A living view of Tecnotitan as an applied technology system: software, AI, robotics, games and advisory working from the same operational intelligence.",
      signals: ["AI workflows", "Business software", "Reusable IP"],
      nodes: [["AI", "Agents"], ["OS", "Software"], ["RB", "Robotics"], ["GX", "Games"]],
      metrics: [["Velocity", "+42%"], ["Signal", "LIVE"]]
    },
    architecture: {
      kicker: "Scalable architecture",
      title: "From service learning to product intelligence.",
      text: "Every project can become a reusable pattern: workflows, components, agents, dashboards and operating knowledge that compound across Tecnotitan divisions.",
      modules: [["01", "Data", "Clean sources"], ["02", "Agents", "Guided tasks"], ["03", "Products", "Reusable IP"], ["04", "Markets", "Global reach"]],
      buttons: ["Explore products", "View divisions"]
    },
    posters: [
      ["Operational intelligence", "The company as a living, measurable and automated system.", "Tecnotitan connects data, software, AI and robotics so every critical process can be observed, improved and scaled with precision."],
      ["Global products", "A portfolio built to travel from Colombia to the world.", "Copilots, enterprise platforms, simulation, game engines and conversational AI grow from one shared technology architecture."]
    ],
    final: {
      kicker: "Next move",
      title: "Build the operating advantage before the market gets faster.",
      text: "Talk to Tecnotitan about investment, enterprise software, AI consulting or strategic technology partnerships.",
      buttons: ["Schedule conversation", "View investor deck", "Request AI diagnosis"]
    }
  },
  pt: {
    ops: {
      kicker: "Camada operacional",
      title: "Tecnologia que conecta decisões, processos e produtos.",
      text: "Uma visão viva da Tecnotitan como sistema de tecnologia aplicada: software, IA, robótica, videogames e consultoria trabalhando a partir da mesma inteligência operacional.",
      signals: ["Fluxos IA", "Software empresarial", "IP reutilizável"],
      nodes: [["AI", "Agentes"], ["OS", "Software"], ["RB", "Robótica"], ["GX", "Games"]],
      metrics: [["Velocidade", "+42%"], ["Sinal", "LIVE"]]
    },
    architecture: {
      kicker: "Arquitetura escalável",
      title: "Do aprendizado em serviços à inteligência de produto.",
      text: "Cada projeto pode se tornar um padrão reutilizável: fluxos, componentes, agentes, dashboards e conhecimento operacional que se acumulam entre divisões da Tecnotitan.",
      modules: [["01", "Dados", "Fontes claras"], ["02", "Agentes", "Tarefas guiadas"], ["03", "Produtos", "IP reutilizável"], ["04", "Mercados", "Alcance global"]],
      buttons: ["Explorar produtos", "Ver divisões"]
    },
    posters: [
      ["Inteligência operacional", "A empresa como um sistema vivo, mensurável e automatizado.", "A Tecnotitan conecta dados, software, IA e robótica para que cada processo crítico possa ser observado, melhorado e escalado com precisão."],
      ["Produtos globais", "Um portfólio que pode viajar da Colômbia para o mundo.", "Copilotos, plataformas empresariais, simulação, engines de jogos e IA conversacional nascem de uma mesma arquitetura tecnológica."]
    ],
    final: {
      kicker: "Próximo movimento",
      title: "Vamos construir vantagem operacional antes que o mercado acelere.",
      text: "Fale com a Tecnotitan sobre investimento, software empresarial, consultoria IA ou alianças estratégicas de tecnologia.",
      buttons: ["Agendar conversa", "Ver investor deck", "Solicitar diagnóstico IA"]
    }
  },
  zh: {
    ops: {
      kicker: "运营层",
      title: "连接决策、流程与产品的技术系统。",
      text: "Tecnotitan 是一个应用技术系统：软件、人工智能、机器人、游戏和咨询共享同一套运营智能。",
      signals: ["AI 工作流", "企业软件", "可复用 IP"],
      nodes: [["AI", "智能代理"], ["OS", "软件"], ["RB", "机器人"], ["GX", "游戏"]],
      metrics: [["速度", "+42%"], ["信号", "LIVE"]]
    },
    architecture: {
      kicker: "可扩展架构",
      title: "从服务经验走向产品智能。",
      text: "每个项目都可以沉淀为可复用模式：流程、组件、智能代理、仪表盘和跨业务部门复利增长的运营知识。",
      modules: [["01", "数据", "清晰来源"], ["02", "代理", "引导任务"], ["03", "产品", "可复用 IP"], ["04", "市场", "全球触达"]],
      buttons: ["探索产品", "查看部门"]
    },
    posters: [
      ["运营智能", "把企业变成可衡量、可自动化的生命系统。", "Tecnotitan 连接数据、软件、AI 与机器人，让关键流程可以被观察、优化并精确扩展。"],
      ["全球产品", "从哥伦比亚走向世界的产品组合。", "智能助手、企业平台、仿真、游戏引擎和对话式 AI 都来自同一套技术架构。"]
    ],
    final: {
      kicker: "下一步",
      title: "在市场加速之前，建立运营优势。",
      text: "与 Tecnotitan 讨论投资、企业软件、AI 咨询或战略技术合作。",
      buttons: ["预约沟通", "查看投资人 Deck", "申请 AI 诊断"]
    }
  },
  ja: {
    ops: {
      kicker: "オペレーション層",
      title: "意思決定、プロセス、製品をつなぐテクノロジー。",
      text: "Tecnotitan は、ソフトウェア、AI、ロボティクス、ゲーム、アドバイザリーを同じ運用インテリジェンスで結ぶ応用技術システムです。",
      signals: ["AI ワークフロー", "企業ソフトウェア", "再利用可能 IP"],
      nodes: [["AI", "Agents"], ["OS", "Software"], ["RB", "Robotics"], ["GX", "Games"]],
      metrics: [["速度", "+42%"], ["シグナル", "LIVE"]]
    },
    architecture: {
      kicker: "拡張可能なアーキテクチャ",
      title: "サービスでの学習をプロダクト知能へ。",
      text: "各プロジェクトは、ワークフロー、コンポーネント、エージェント、ダッシュボード、運用知識として再利用できるパターンになります。",
      modules: [["01", "データ", "明確なソース"], ["02", "エージェント", "誘導されたタスク"], ["03", "製品", "再利用 IP"], ["04", "市場", "グローバル展開"]],
      buttons: ["製品を見る", "部門を見る"]
    },
    posters: [
      ["運用インテリジェンス", "企業を測定可能で自動化された生きたシステムへ。", "Tecnotitan はデータ、ソフトウェア、AI、ロボティクスをつなぎ、重要なプロセスを観測、改善、拡張できるようにします。"],
      ["グローバル製品", "コロンビアから世界へ展開できるポートフォリオ。", "コパイロット、企業プラットフォーム、シミュレーション、ゲームエンジン、会話型 AI は同じ技術アーキテクチャから生まれます。"]
    ],
    final: {
      kicker: "次の一手",
      title: "市場が加速する前に、運用優位性を構築しましょう。",
      text: "投資、企業ソフトウェア、AI コンサルティング、戦略的技術提携について Tecnotitan と話しましょう。",
      buttons: ["相談を予約", "Investor Deckを見る", "AI診断を依頼"]
    }
  },
  ko: {
    ops: {
      kicker: "운영 레이어",
      title: "의사결정, 프로세스, 제품을 연결하는 기술.",
      text: "Tecnotitan은 소프트웨어, AI, 로보틱스, 게임, 컨설팅을 하나의 운영 인텔리전스로 연결하는 응용 기술 시스템입니다.",
      signals: ["AI 워크플로", "기업 소프트웨어", "재사용 IP"],
      nodes: [["AI", "Agents"], ["OS", "Software"], ["RB", "Robotics"], ["GX", "Games"]],
      metrics: [["속도", "+42%"], ["신호", "LIVE"]]
    },
    architecture: {
      kicker: "확장 가능한 아키텍처",
      title: "서비스 학습에서 제품 인텔리전스로.",
      text: "각 프로젝트는 워크플로, 컴포넌트, 에이전트, 대시보드, 운영 지식으로 재사용 가능한 패턴이 될 수 있습니다.",
      modules: [["01", "데이터", "명확한 소스"], ["02", "에이전트", "가이드 작업"], ["03", "제품", "재사용 IP"], ["04", "시장", "글로벌 확장"]],
      buttons: ["제품 보기", "부문 보기"]
    },
    posters: [
      ["운영 인텔리전스", "기업을 측정 가능하고 자동화된 살아있는 시스템으로.", "Tecnotitan은 데이터, 소프트웨어, AI, 로보틱스를 연결해 핵심 프로세스를 관찰하고 개선하며 정밀하게 확장하도록 돕습니다."],
      ["글로벌 제품", "콜롬비아에서 세계로 확장되는 포트폴리오.", "코파일럿, 기업 플랫폼, 시뮬레이션, 게임 엔진, 대화형 AI는 하나의 공유 기술 아키텍처에서 성장합니다."]
    ],
    final: {
      kicker: "다음 움직임",
      title: "시장이 더 빨라지기 전에 운영 우위를 만듭니다.",
      text: "투자, 기업 소프트웨어, AI 컨설팅 또는 전략적 기술 파트너십에 대해 Tecnotitan과 대화하세요.",
      buttons: ["상담 예약", "Investor Deck 보기", "AI 진단 요청"]
    }
  }
};

function applyHomeVisualContent(language) {
  const content = homeVisualTranslations[language] || homeVisualTranslations.es;
  setText(".home-ops-kicker", content.ops.kicker);
  setText("#home-ops-title", content.ops.title);
  setText(".home-ops-copy > p:not(.section-kicker)", content.ops.text);
  document.querySelectorAll(".home-signal-list span").forEach((item, index) => {
    if (content.ops.signals[index]) {
      item.textContent = content.ops.signals[index];
    }
  });
  document.querySelectorAll(".ops-node").forEach((node, index) => {
    const nodeContent = content.ops.nodes[index];
    if (nodeContent) {
      setText("span", nodeContent[0], node);
      setText("strong", nodeContent[1], node);
    }
  });
  document.querySelectorAll(".ops-metric").forEach((metric, index) => {
    const metricContent = content.ops.metrics[index];
    if (metricContent) {
      setText("span", metricContent[0], metric);
      setText("strong", metricContent[1], metric);
    }
  });
  setText(".home-architecture-kicker", content.architecture.kicker);
  setText("#home-architecture-title", content.architecture.title);
  setText(".architecture-copy > p:not(.section-kicker)", content.architecture.text);
  document.querySelectorAll(".architecture-module").forEach((module, index) => {
    const moduleContent = content.architecture.modules[index];
    if (moduleContent) {
      setText("span", moduleContent[0], module);
      setText("strong", moduleContent[1], module);
      setText("small", moduleContent[2], module);
    }
  });
  document.querySelectorAll(".architecture-copy .actions .button").forEach((button, index) => {
    if (content.architecture.buttons[index]) {
      button.textContent = content.architecture.buttons[index];
    }
  });
  const posterSelectors = [
    [".home-poster-one-kicker", ".home-poster-one-title", ".home-poster-one-text"],
    [".home-poster-two-kicker", ".home-poster-two-title", ".home-poster-two-text"]
  ];
  posterSelectors.forEach((selectors, index) => {
    const poster = content.posters?.[index];
    if (!poster) {
      return;
    }
    setText(selectors[0], poster[0]);
    setText(selectors[1], poster[1]);
    setText(selectors[2], poster[2]);
  });
  setText(".home-final-kicker", content.final.kicker);
  setText("#home-final-title", content.final.title);
  setText(".final-cta-inner > p:not(.section-kicker)", content.final.text);
  document.querySelectorAll(".final-cta-actions .button").forEach((button, index) => {
    if (content.final.buttons[index]) {
      button.textContent = content.final.buttons[index];
    }
  });
}

function setDetailedCards(selector, cards) {
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
    setText("strong", content[3], card);
    setText("a", content[3], card);
  });
}

function setSelectOptions(selector, options) {
  const select = document.querySelector(selector);
  if (!select || !options) {
    return;
  }

  Array.from(select.options).forEach((option, index) => {
    if (options[index]) {
      option.textContent = options[index];
    }
  });
}

function applyServicePageContent(language, content) {
  const serviceContent = servicePageTranslations[language] || servicePageTranslations.es;

  setCards(".timeline article", content.cards);
  setText(".service-detail-index .section-copy h2", serviceContent.serviceIndex.title);
  setText(".service-detail-index .section-copy p", serviceContent.serviceIndex.text);
  setCards(".service-link-grid a", serviceContent.serviceIndex.cards);

  setText(".work-method-section .section-copy h2", serviceContent.method.title);
  setText(".work-method-section .section-copy p", serviceContent.method.text);
  setDetailedCards(".work-method-grid article", serviceContent.method.cards);

  setText(".technology-capabilities-section .section-copy h2", serviceContent.technology.title);
  setText(".technology-capabilities-section .section-copy p", serviceContent.technology.text);
  setCards(".technology-capability-grid article", serviceContent.technology.cards);

  setText(".industry-use-cases .section-copy h2", serviceContent.industries.title);
  setText(".industry-use-cases .section-copy p", serviceContent.industries.text);
  setDetailedCards(".industry-use-grid article", serviceContent.industries.cards);

  setText(".service-faq-section .section-copy h2", serviceContent.faq.title);
  setText(".service-faq-section .section-copy p", serviceContent.faq.text);
  document.querySelectorAll(".service-faq-list details").forEach((item, index) => {
    const faq = serviceContent.faq.items[index];
    if (!faq) {
      return;
    }

    setText("summary", faq[0], item);
    setText("p", faq[1], item);
  });

  setText(".service-conversion-section .section-copy h2", serviceContent.conversion.title);
  setText(".service-conversion-section .section-copy p", serviceContent.conversion.text);
  setCards(".service-conversion-grid a", serviceContent.conversion.cards);

  setText(".contact-form-copy span", serviceContent.form.kicker);
  setText("[data-service-form-title]", serviceContent.form.title);
  setText("[data-service-form-text]", serviceContent.form.text);
  const successMessage = document.querySelector("[data-form-success]");
  if (successMessage) {
    setText("strong", serviceContent.form.successTitle, successMessage);
    setText("p", serviceContent.form.successText, successMessage);
  }
  document.querySelectorAll(".service-request-form label:not(.newsletter-check):not(.form-honeypot) > span").forEach((label, index) => {
    if (serviceContent.form.labels[index]) {
      label.textContent = serviceContent.form.labels[index];
    }
  });
  setSelectOptions('.service-request-form select[name="Servicio"]', serviceContent.form.serviceOptions);
  setSelectOptions('.service-request-form select[name="Tamaño de empresa"]', serviceContent.form.companySizeOptions);
  setSelectOptions('.service-request-form select[name="Presupuesto"]', serviceContent.form.budgetOptions);
  setSelectOptions('.service-request-form select[name="Urgencia"]', serviceContent.form.urgencyOptions);
  const message = document.querySelector('.service-request-form textarea[name="Mensaje"]');
  if (message) {
    message.setAttribute("placeholder", serviceContent.form.placeholder);
  }
  setText("[data-newsletter-label]", serviceContent.form.newsletter);
  setText(".service-request-form button", serviceContent.form.button);
}

function setMetaDescription(value) {
  const meta = document.querySelector('meta[name="description"]');
  if (meta && value) {
    meta.setAttribute("content", value);
  }
}

function setMetaContent(selector, value) {
  const meta = document.querySelector(selector);
  if (meta && value) {
    meta.setAttribute("content", value);
  }
}

function getCanonicalUrl() {
  return getLocalizedUrl(activeLanguage || pathLanguage || "es");
}

function getGuideHubUrl(language) {
  if (language === "en") {
    return new URL("/guides/", window.location.origin).toString();
  }
  const segment = languagePathSegments[language] || languagePathSegments.es;
  const directory = guideHubDirectories[language];
  if (directory) {
    return new URL(`/${segment}/${directory}/`, window.location.origin).toString();
  }
  return new URL(`/${segment}/guias.html`, window.location.origin).toString();
}

function getGuideArticleUrl(language) {
  const guideRoutes = guideArticleRoutes[cleanGuideArticleKey];
  if (!guideRoutes) {
    return getGuideHubUrl(language);
  }
  if (language === "en" && guideRoutes.en) {
    return new URL(`/guides/${guideRoutes.en}.html`, window.location.origin).toString();
  }
  const segment = languagePathSegments[language] || languagePathSegments.es;
  if (language === "es") {
    return new URL(`/${segment}/${guideRoutes.es}.html`, window.location.origin).toString();
  }
  const directory = guideHubDirectories[language];
  if (directory && guideRoutes[language]) {
    return new URL(`/${segment}/${directory}/${guideRoutes[language]}.html`, window.location.origin).toString();
  }
  if (guideRoutes.en) {
    return new URL(`/en/guides/${guideRoutes.en}.html`, window.location.origin).toString();
  }
  return new URL(`/${segment}/${guideRoutes.es}.html`, window.location.origin).toString();
}

function getLocalizedUrl(language) {
  if (language === "en" && englishCleanUrlsByPage[pageName]) {
    return new URL(englishCleanUrlsByPage[pageName], window.location.origin).toString();
  }
  const segment = languagePathSegments[language] || languagePathSegments.es;
  if (isGuideArticleRoute) {
    return getGuideArticleUrl(language);
  }
  if (pageName === "guias.html") {
    return getGuideHubUrl(language);
  }
  const filePath = pageName === "index.html" ? "" : pageName;
  return new URL(`/${segment}/${filePath}`, window.location.origin).toString();
}

function getDefaultUrl() {
  if (isGuideArticleRoute && cleanGuideArticleKey) {
    return new URL(`/${guideArticleRoutes[cleanGuideArticleKey].es}.html`, window.location.origin).toString();
  }
  if (pageName === "guias.html") {
    return new URL("/guias.html", window.location.origin).toString();
  }
  const filePath = pageName === "index.html" ? "" : pageName;
  return new URL(`/${filePath}`, window.location.origin).toString();
}

function syncBrowserLanguagePath(language) {
  const current = new URL(window.location.href);
  current.searchParams.delete("lang");
  const target = new URL(getLocalizedUrl(language));
  window.history.replaceState({}, "", `${target.pathname}${current.search}${current.hash}`);
}

function updateLanguageSeoLinks(language) {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.href = getLocalizedUrl(language);
  }

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => {
    link.remove();
  });

  supportedLanguages.forEach((supportedLanguage) => {
    const alternate = document.createElement("link");
    alternate.rel = "alternate";
    alternate.hreflang = supportedLanguage;
    alternate.href = getLocalizedUrl(supportedLanguage);
    document.head.appendChild(alternate);
  });

  const defaultAlternate = document.createElement("link");
  defaultAlternate.rel = "alternate";
  defaultAlternate.hreflang = "x-default";
  defaultAlternate.href = getDefaultUrl();
  document.head.appendChild(defaultAlternate);
}

function setSeoMetadata(page, language) {
  const image = document.querySelector('meta[property="og:image"]')?.getAttribute("content");

  updateLanguageSeoLinks(language);
  document.title = page.title;
  setMetaDescription(page.description);
  setMetaContent('meta[property="og:title"]', page.title);
  setMetaContent('meta[property="og:description"]', page.description);
  setMetaContent('meta[property="og:url"]', getCanonicalUrl());
  setMetaContent('meta[property="og:locale"]', languageLocales[language]);
  setMetaContent('meta[name="twitter:title"]', page.title);
  setMetaContent('meta[name="twitter:description"]', page.description);
  setMetaContent('meta[name="twitter:image"]', image);
}

function upsertJsonLd(id, payload) {
  const existing = document.querySelector(`script[data-schema-id="${id}"]`);
  const script = existing || document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.schemaId = id;
  script.textContent = JSON.stringify(payload);

  if (!existing) {
    document.head.appendChild(script);
  }
}

function injectGlobalStructuredData(language) {
  const siteUrl = "https://www.tecnotitan.com/";
  upsertJsonLd("global-entity", {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        "name": "Tecnotitan",
        "url": siteUrl,
        "logo": `${siteUrl}assets/logo-tecnotitan.svg`,
        "email": "info@tecnotitan.com",
        "founder": {
          "@type": "Person",
          "name": "David Arias Giraldo"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "info@tecnotitan.com",
            "telephone": "+573108229935",
            "availableLanguage": ["Spanish", "English", "Portuguese"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "investor relations",
            "email": "info@tecnotitan.com",
            "availableLanguage": ["Spanish", "English", "Portuguese", "Chinese", "Japanese", "Korean"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/tecnotitan",
          "https://www.facebook.com/tecnotitan",
          "https://www.instagram.com/tecnotitan"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": "Tecnotitan",
        "inLanguage": language,
        "publisher": {
          "@id": `${siteUrl}#organization`
        }
      }
    ]
  });
}

function injectBreadcrumbStructuredData(currentPageName, pageTitle, language) {
  if (currentPageName === "index.html") {
    return;
  }

  const currentUrl = getLocalizedUrl(language);
  upsertJsonLd("breadcrumb", {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Tecnotitan",
        "item": getLocalizedUrl(language).replace(currentPageName, "")
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle.replace(" | Tecnotitan", ""),
        "item": currentUrl
      }
    ]
  });
}

function injectServiceStructuredData(currentPageName) {
  const service = serviceStructuredSeo[currentPageName];

  if (!service) {
    return;
  }

  const serviceUrl = `https://www.tecnotitan.com/${currentPageName}`;
  upsertJsonLd("service-detail", {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        "name": service.name,
        "description": service.description,
        "provider": {
          "@id": "https://www.tecnotitan.com/#organization"
        },
        "areaServed": "Global",
        "serviceType": service.name
      },
      {
        "@type": "FAQPage",
        "@id": `${serviceUrl}#faq`,
        "mainEntity": service.faq.map(([question, answer]) => ({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
          }
        }))
      }
    ]
  });
}

function injectProductStructuredData(currentPageName) {
  const product = productStructuredSeo[currentPageName];

  if (!product) {
    return;
  }

  const productUrl = `https://www.tecnotitan.com/${currentPageName}`;
  upsertJsonLd("product-detail", {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${productUrl}#software-application`,
    "name": product.name,
    "description": product.description,
    "category": product.category,
    "applicationCategory": product.applicationCategory,
    "operatingSystem": product.operatingSystem,
    "publisher": {
      "@id": "https://www.tecnotitan.com/#organization"
    },
    "url": productUrl,
    "image": product.image,
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": product.audience
    },
    "offers": {
      "@type": "Offer",
      "url": productUrl,
      "availability": "https://schema.org/PreOrder",
      "priceCurrency": "USD",
      "price": "0",
      "description": "Pricing is defined after business discovery, scope and implementation requirements."
    }
  });
}

const languageCarryPages = new Set([
  "index.html",
  "nosotros.html",
  "productos.html",
  "servicios.html",
  "servicio-inteligencia-artificial.html",
  "servicio-software-empresarial.html",
  "servicio-consultoria-tecnologica.html",
  "servicio-robotica.html",
  "servicio-videojuegos.html",
  "servicio-transformacion-tecnologica.html",
  "ia-para-empresas.html",
  "software-para-pymes-con-inteligencia-artificial.html",
  "automatizar-atencion-cliente-con-ia.html",
  "consultoria-ia-para-empresas-colombia.html",
  "guias.html",
  "guia-como-usar-chatgpt-en-el-trabajo.html",
  "guia-automatizar-atencion-cliente-con-ia.html",
  "guia-software-empresarial-para-pymes.html",
  "guia-prompts-chatgpt-ventas-b2b.html",
  "guia-gobernanza-ia-empresas.html",
  "guia-roi-automatizacion-ia.html",
  "guia-crm-ia-ventas-soporte.html",
  "guia-roadmap-transformacion-digital-pymes.html",
  "producto-copiloto-pyme.html",
  "producto-tecnotitan-os.html",
  "producto-life-copilot.html",
  "producto-tecnotitan-engine.html",
  "producto-academia-tecnotitan.html",
  "producto-call-center-ai.html",
  "trabaja-con-nosotros.html",
  "divisiones.html",
  "inversionistas.html",
  "contacto.html",
  "investor-deck.html",
  "aviso-legal.html"
]);

const serviceSeoPages = {
  "servicio-inteligencia-artificial.html": [
    "Servicio de inteligencia artificial | Tecnotitan",
    "Agentes, copilotos, automatizacion documental, analitica y flujos inteligentes para empresas."
  ],
  "servicio-software-empresarial.html": [
    "Servicio de software empresarial | Tecnotitan",
    "Plataformas web, CRM internos, dashboards, portales e integraciones para empresas."
  ],
  "servicio-consultoria-tecnologica.html": [
    "Consultoria tecnologica | Tecnotitan",
    "Diagnostico, arquitectura, roadmap, adopcion y acompanamiento ejecutivo para empresas."
  ],
  "servicio-robotica.html": [
    "Servicio de robotica | Tecnotitan",
    "Software, sensores, control, datos y sistemas fisico-digitales para empresas."
  ],
  "servicio-videojuegos.html": [
    "Servicio de videojuegos y experiencias interactivas | Tecnotitan",
    "Videojuegos, simuladores, gamificacion y entrenamiento inmersivo para empresas."
  ],
  "servicio-transformacion-tecnologica.html": [
    "Servicio de transformacion tecnologica | Tecnotitan",
    "Modernizacion operativa, automatizacion, adopcion digital y cambio organizacional."
  ]
};

supportedLanguages.forEach((language) => {
  Object.entries(serviceSeoPages).forEach(([file, [title, description]]) => {
    languages[language].pages[file] ||= { title, description };
  });
});

const staticSeoPages = {
  "ia-para-empresas.html": [
    "IA para empresas: automatización, agentes y copilotos | Tecnotitan",
    "Guía de IA para empresas: automatización, agentes, copilotos, casos de uso y ruta de implementación."
  ],
  "software-para-pymes-con-inteligencia-artificial.html": [
    "Software para pymes con inteligencia artificial | Tecnotitan",
    "Guía para pymes que buscan software con IA para ventas, soporte, documentos y automatización operativa."
  ],
  "automatizar-atencion-cliente-con-ia.html": [
    "Automatizar atención al cliente con IA | Tecnotitan",
    "Guía para automatizar atención al cliente con agentes IA, clasificación, seguimiento y métricas."
  ],
  "consultoria-ia-para-empresas-colombia.html": [
    "Consultoría IA para empresas en Colombia | Tecnotitan",
    "Consultoría IA para empresas en Colombia: diagnóstico, casos de uso, agentes, copilotos y roadmap tecnológico."
  ],
  "producto-copiloto-pyme.html": [
    "Copiloto Pyme | Tecnotitan",
    "Asistente de IA para ventas, soporte, documentos y automatización operativa de pymes."
  ],
  "producto-tecnotitan-os.html": [
    "Tecnotitan OS | Tecnotitan",
    "Plataforma empresarial para procesos, datos, automatizaciones, agentes IA y flujos internos."
  ],
  "producto-life-copilot.html": [
    "Life Copilot | Tecnotitan",
    "App móvil de productividad personal con copiloto IA para metas, tareas, hábitos y decisiones."
  ],
  "producto-tecnotitan-engine.html": [
    "Tecnotitan Engine | Tecnotitan",
    "Motor y toolkit para videojuegos, simuladores, experiencias interactivas y mundos gamificados."
  ],
  "producto-academia-tecnotitan.html": [
    "Academia Tecnotitan | Tecnotitan",
    "Plataforma de aprendizaje para IA, software, videojuegos, robótica y transformación tecnológica."
  ],
  "producto-call-center-ai.html": [
    "Call Center AI Tecnotitan | Tecnotitan",
    "Agentes conversacionales para soporte, ventas, seguimiento de clientes y contact centers."
  ],
  "trabaja-con-nosotros.html": [
    "Trabaja con nosotros | Tecnotitan",
    "Oportunidades para talento técnico, consultores, aliados y constructores de tecnología aplicada."
  ]
};

supportedLanguages.forEach((language) => {
  Object.entries(staticSeoPages).forEach(([file, [title, description]]) => {
    languages[language].pages[file] ||= { title, description };
  });
});

const seoMetadataOverrides = {
  es: {
    "index.html": [
      "Tecnotitan | IA, software empresarial y automatización para empresas",
      "Creamos software empresarial, agentes IA, automatización, videojuegos, robótica y consultoría tecnológica para empresas que quieren escalar."
    ],
    "nosotros.html": [
      "Nosotros | Tecnotitan, compañía de IA y software empresarial",
      "Conoce la visión, misión, liderazgo y equipo inicial de Tecnotitan, compañía colombiana de IA, software empresarial y tecnología aplicada."
    ],
    "productos.html": [
      "Productos de IA, software y automatización empresarial | Tecnotitan",
      "Explora Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia Tecnotitan y Call Center AI para empresas."
    ],
    "servicios.html": [
      "Servicios de IA, software empresarial y automatización | Tecnotitan",
      "Consultoría e implementación de IA, desarrollo de software empresarial, automatización, robótica y transformación tecnológica para empresas."
    ],
    "divisiones.html": [
      "Divisiones de tecnología aplicada, IA y robótica | Tecnotitan",
      "Conoce las divisiones de Tecnotitan: software empresarial, inteligencia artificial, videojuegos, robótica, consultoría tecnológica y ventures."
    ],
    "inversionistas.html": [
      "Tecnotitan para inversionistas | IA, software e IP escalable",
      "Revisa la tesis de inversión de Tecnotitan: IA aplicada, software empresarial, productos propios, IP escalable, equipo, roadmap e investor deck."
    ],
    "contacto.html": [
      "Contacto Tecnotitan | IA, software y transformación tecnológica",
      "Contacta a Tecnotitan para proyectos de IA, software empresarial, automatización, servicios, alianzas, inversión, quejas, reclamos y sugerencias."
    ],
    "servicio-inteligencia-artificial.html": [
      "Consultoría e implementación de inteligencia artificial para empresas | Tecnotitan",
      "Diseñamos agentes IA, copilotos, automatización documental, analítica e integraciones para procesos empresariales."
    ],
    "servicio-software-empresarial.html": [
      "Desarrollo de software empresarial a medida | Tecnotitan",
      "Construimos plataformas web, CRM internos, dashboards, portales, integraciones y automatización para empresas."
    ],
    "servicio-consultoria-tecnologica.html": [
      "Consultoría tecnológica para empresas | Tecnotitan",
      "Diagnóstico, arquitectura, roadmap, adopción y acompañamiento ejecutivo para tomar mejores decisiones tecnológicas."
    ],
    "servicio-robotica.html": [
      "Robótica aplicada para empresas | Tecnotitan",
      "Prototipos, sensores, software de control, telemetría y sistemas físico-digitales conectados a datos."
    ],
    "servicio-videojuegos.html": [
      "Videojuegos, simuladores y gamificación para empresas | Tecnotitan",
      "Creamos videojuegos web, simuladores, experiencias interactivas y gamificación para capacitación, marca y educación."
    ],
    "servicio-transformacion-tecnologica.html": [
      "Transformación tecnológica para empresas | Tecnotitan",
      "Modernización operativa, automatización, adopción digital, datos y mejora continua para empresas."
    ],
    "producto-copiloto-pyme.html": [
      "Copiloto Pyme | Asistente IA para pequeñas y medianas empresas",
      "Asistente de IA para ventas, soporte, documentos y automatización operativa de pymes."
    ],
    "producto-tecnotitan-os.html": [
      "Tecnotitan OS | Plataforma empresarial con IA y automatización",
      "Centraliza procesos, datos, automatizaciones, agentes IA y flujos internos en una plataforma empresarial."
    ],
    "producto-life-copilot.html": [
      "Life Copilot | App móvil de productividad con inteligencia artificial",
      "Aplicación móvil de productividad personal con copiloto IA para metas, tareas, hábitos y decisiones."
    ],
    "producto-tecnotitan-engine.html": [
      "Tecnotitan Engine | Motor para videojuegos, simuladores y experiencias interactivas",
      "Toolkit para prototipar videojuegos, simuladores, experiencias interactivas y mundos gamificados."
    ],
    "producto-academia-tecnotitan.html": [
      "Academia Tecnotitan | Formación en IA, software, videojuegos y robótica",
      "Plataforma de aprendizaje para inteligencia artificial, software, videojuegos, robótica y transformación tecnológica."
    ],
    "producto-call-center-ai.html": [
      "Call Center AI Tecnotitan | Agentes IA para soporte y ventas",
      "Agentes conversacionales para soporte, ventas, seguimiento de clientes y automatización de contact centers."
    ]
  },
  en: {
    "index.html": [
      "Tecnotitan | AI, business software and automation for companies",
      "We build business software, AI agents, automation, games, robotics and technology consulting for companies ready to scale."
    ],
    "nosotros.html": [
      "About Tecnotitan | AI and business software company",
      "Meet Tecnotitan's vision, mission, leadership and early team as a Colombian AI, business software and applied technology company."
    ],
    "productos.html": [
      "AI, software and business automation products | Tecnotitan",
      "Explore Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia Tecnotitan and Call Center AI for companies."
    ],
    "servicios.html": [
      "AI, business software and automation services | Tecnotitan",
      "AI consulting and implementation, business software development, automation, robotics and technology transformation for companies."
    ],
    "divisiones.html": [
      "Applied technology, AI and robotics divisions | Tecnotitan",
      "Explore Tecnotitan divisions: business software, artificial intelligence, video games, robotics, technology consulting and ventures."
    ],
    "inversionistas.html": [
      "Tecnotitan for investors | AI, software and scalable IP",
      "Review Tecnotitan's investment thesis: applied AI, business software, proprietary products, scalable IP, team, roadmap and investor deck."
    ],
    "contacto.html": [
      "Contact Tecnotitan | AI, software and technology transformation",
      "Contact Tecnotitan for AI projects, business software, automation, services, partnerships, investment, complaints, claims and suggestions."
    ],
    "servicio-inteligencia-artificial.html": [
      "AI consulting and implementation for companies | Tecnotitan",
      "We design AI agents, copilots, document automation, analytics and integrations for business processes."
    ],
    "servicio-software-empresarial.html": [
      "Custom business software development | Tecnotitan",
      "We build web platforms, internal CRMs, dashboards, portals, integrations and automation for companies."
    ],
    "servicio-consultoria-tecnologica.html": [
      "Technology consulting for companies | Tecnotitan",
      "Diagnosis, architecture, roadmap, adoption and executive guidance for better technology decisions."
    ],
    "servicio-robotica.html": [
      "Applied robotics for companies | Tecnotitan",
      "Prototypes, sensors, control software, telemetry and physical-digital systems connected to data."
    ],
    "servicio-videojuegos.html": [
      "Games, simulators and gamification for companies | Tecnotitan",
      "We create web games, simulators, interactive experiences and gamification for training, brand and education."
    ],
    "servicio-transformacion-tecnologica.html": [
      "Technology transformation for companies | Tecnotitan",
      "Operational modernization, automation, digital adoption, data and continuous improvement for companies."
    ]
  },
  pt: {
    "index.html": [
      "Tecnotitan | IA, software empresarial e automação para empresas",
      "Criamos software empresarial, agentes de IA, automação, jogos, robótica e consultoria tecnológica para empresas que querem escalar."
    ],
    "nosotros.html": [
      "Sobre a Tecnotitan | Empresa de IA e software empresarial",
      "Conheça a visão, missão, liderança e equipe inicial da Tecnotitan, empresa colombiana de IA, software empresarial e tecnologia aplicada."
    ],
    "productos.html": [
      "Produtos de IA, software e automação empresarial | Tecnotitan",
      "Explore Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia Tecnotitan e Call Center AI para empresas."
    ],
    "servicios.html": [
      "Serviços de IA, software empresarial e automação | Tecnotitan",
      "Consultoria e implementação de IA, desenvolvimento de software empresarial, automação, robótica e transformação tecnológica para empresas."
    ],
    "divisiones.html": [
      "Divisões de tecnologia aplicada, IA e robótica | Tecnotitan",
      "Conheça as divisões da Tecnotitan: software empresarial, inteligência artificial, games, robótica, consultoria tecnológica e ventures."
    ],
    "inversionistas.html": [
      "Tecnotitan para investidores | IA, software e IP escalável",
      "Revise a tese de investimento da Tecnotitan: IA aplicada, software empresarial, produtos próprios, IP escalável, equipe, roadmap e investor deck."
    ],
    "contacto.html": [
      "Contato Tecnotitan | IA, software e transformação tecnológica",
      "Entre em contato com a Tecnotitan para projetos de IA, software empresarial, automação, serviços, parcerias, investimento, reclamações e sugestões."
    ]
  },
  zh: {
    "index.html": [
      "Tecnotitan | 面向企业的 AI、商业软件与自动化",
      "Tecnotitan 为希望扩展的企业构建商业软件、AI 代理、自动化、游戏、机器人与技术咨询服务。"
    ],
    "nosotros.html": [
      "关于 Tecnotitan | AI 与商业软件公司",
      "了解 Tecnotitan 的愿景、使命、领导团队和早期团队：一家来自哥伦比亚的 AI、商业软件与应用技术公司。"
    ],
    "productos.html": [
      "AI、软件与企业自动化产品 | Tecnotitan",
      "探索 Copiloto Pyme、Tecnotitan OS、Life Copilot、Tecnotitan Engine、Academia Tecnotitan 与 Call Center AI。"
    ],
    "servicios.html": [
      "AI、商业软件与自动化服务 | Tecnotitan",
      "为企业提供 AI 咨询与实施、商业软件开发、自动化、机器人和技术转型服务。"
    ],
    "divisiones.html": [
      "应用技术、AI 与机器人事业部 | Tecnotitan",
      "了解 Tecnotitan 的商业软件、人工智能、游戏、机器人、技术咨询与 ventures 事业部。"
    ],
    "inversionistas.html": [
      "Tecnotitan 投资者页面 | AI、软件与可扩展 IP",
      "查看 Tecnotitan 的投资论点：应用 AI、商业软件、自有产品、可扩展 IP、团队、路线图与 investor deck。"
    ],
    "contacto.html": [
      "联系 Tecnotitan | AI、软件与技术转型",
      "联系 Tecnotitan，讨论 AI 项目、商业软件、自动化、服务、合作、投资、投诉、申诉与建议。"
    ]
  },
  ja: {
    "index.html": [
      "Tecnotitan | 企業向けAI、業務ソフトウェア、自動化",
      "Tecnotitan は、成長を目指す企業向けに業務ソフトウェア、AIエージェント、自動化、ゲーム、ロボティクス、技術コンサルティングを構築します。"
    ],
    "nosotros.html": [
      "Tecnotitanについて | AIと業務ソフトウェア企業",
      "Tecnotitan のビジョン、ミッション、リーダーシップ、初期チームをご覧ください。コロンビア発のAI、業務ソフトウェア、応用技術企業です。"
    ],
    "productos.html": [
      "AI、ソフトウェア、企業自動化プロダクト | Tecnotitan",
      "Copiloto Pyme、Tecnotitan OS、Life Copilot、Tecnotitan Engine、Academia Tecnotitan、Call Center AI をご覧ください。"
    ],
    "servicios.html": [
      "AI、業務ソフトウェア、自動化サービス | Tecnotitan",
      "企業向けにAIコンサルティングと実装、業務ソフトウェア開発、自動化、ロボティクス、技術変革を提供します。"
    ],
    "divisiones.html": [
      "応用技術、AI、ロボティクス部門 | Tecnotitan",
      "Tecnotitan の業務ソフトウェア、AI、ゲーム、ロボティクス、技術コンサルティング、ventures 部門をご覧ください。"
    ],
    "inversionistas.html": [
      "Tecnotitan 投資家向け | AI、ソフトウェア、拡張可能なIP",
      "Tecnotitan の投資テーゼ：応用AI、業務ソフトウェア、自社プロダクト、拡張可能なIP、チーム、ロードマップ、investor deck。"
    ],
    "contacto.html": [
      "Tecnotitanへお問い合わせ | AI、ソフトウェア、技術変革",
      "AIプロジェクト、業務ソフトウェア、自動化、サービス、提携、投資、苦情、申立て、提案についてお問い合わせください。"
    ]
  },
  ko: {
    "index.html": [
      "Tecnotitan | 기업을 위한 AI, 비즈니스 소프트웨어와 자동화",
      "Tecnotitan은 성장하는 기업을 위해 비즈니스 소프트웨어, AI 에이전트, 자동화, 게임, 로보틱스, 기술 컨설팅을 만듭니다."
    ],
    "nosotros.html": [
      "Tecnotitan 소개 | AI 및 비즈니스 소프트웨어 기업",
      "콜롬비아 기반 AI, 비즈니스 소프트웨어, 응용 기술 기업 Tecnotitan의 비전, 미션, 리더십과 초기 팀을 소개합니다."
    ],
    "productos.html": [
      "AI, 소프트웨어, 기업 자동화 제품 | Tecnotitan",
      "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia Tecnotitan, Call Center AI를 살펴보세요."
    ],
    "servicios.html": [
      "AI, 비즈니스 소프트웨어, 자동화 서비스 | Tecnotitan",
      "기업을 위한 AI 컨설팅 및 구현, 비즈니스 소프트웨어 개발, 자동화, 로보틱스, 기술 전환 서비스를 제공합니다."
    ],
    "divisiones.html": [
      "응용 기술, AI, 로보틱스 부문 | Tecnotitan",
      "Tecnotitan의 비즈니스 소프트웨어, 인공지능, 게임, 로보틱스, 기술 컨설팅, ventures 부문을 살펴보세요."
    ],
    "inversionistas.html": [
      "Tecnotitan 투자자 페이지 | AI, 소프트웨어, 확장 가능한 IP",
      "Tecnotitan의 투자 논리: 응용 AI, 비즈니스 소프트웨어, 자체 제품, 확장 가능한 IP, 팀, 로드맵, investor deck."
    ],
    "contacto.html": [
      "Tecnotitan 문의 | AI, 소프트웨어, 기술 전환",
      "AI 프로젝트, 비즈니스 소프트웨어, 자동화, 서비스, 파트너십, 투자, 불만, 청구 및 제안에 대해 문의하세요."
    ]
  }
};

Object.entries(seoMetadataOverrides).forEach(([language, pages]) => {
  Object.entries(pages).forEach(([file, [title, description]]) => {
    languages[language].pages[file] ||= {};
    languages[language].pages[file].title = title;
    languages[language].pages[file].description = description;
  });
});

const serviceStructuredSeo = {
  "servicio-inteligencia-artificial.html": {
    name: "Implementación de inteligencia artificial para empresas",
    description: "Diagnóstico, agentes IA, copilotos, automatización, integración y medición para procesos empresariales.",
    faq: [
      ["¿Qué incluye un diagnóstico de IA?", "Incluye mapa de procesos, revisión de datos, riesgos, oportunidades y priorización de casos de uso viables."],
      ["¿Cuándo conviene crear un agente IA?", "Conviene cuando existe un flujo repetible con información disponible, reglas claras y necesidad de respuesta o seguimiento frecuente."],
      ["¿Cómo se mide el impacto de la IA?", "Se mide por ahorro de tiempo, reducción de trabajo repetitivo, calidad de respuesta, adopción del equipo y mejora en indicadores operativos."]
    ]
  },
  "servicio-software-empresarial.html": {
    name: "Desarrollo de software empresarial a medida",
    description: "Plataformas internas, CRM, dashboards, portales, integraciones y automatización para empresas.",
    faq: [
      ["¿Cuándo una empresa necesita software a medida?", "Cuando las herramientas genéricas no cubren procesos críticos, datos, roles, integraciones o reportes del negocio."],
      ["¿Qué puede construir Tecnotitan?", "Plataformas internas, CRM ligeros, portales operativos, dashboards, formularios, automatizaciones e integraciones con APIs."],
      ["¿Cómo empieza un proyecto de software empresarial?", "Empieza con alcance, flujos, usuarios, datos, prioridades y un MVP que valide la operación antes de escalar."]
    ]
  },
  "servicio-consultoria-tecnologica.html": {
    name: "Consultoría tecnológica para empresas",
    description: "Diagnóstico, arquitectura, roadmap, adopción y acompañamiento ejecutivo para decisiones tecnológicas.",
    faq: [
      ["¿Para qué sirve una consultoría tecnológica?", "Sirve para ordenar prioridades, reducir riesgo, definir arquitectura y convertir necesidades de negocio en una ruta ejecutable."],
      ["¿Qué entrega un roadmap tecnológico?", "Entrega prioridades, quick wins, dependencias, presupuesto estimado, responsables e hitos de implementación."],
      ["¿Quién debería solicitar consultoría?", "Empresas que necesitan modernizar procesos, evaluar IA, mejorar software interno o decidir inversiones tecnológicas."]
    ]
  },
  "servicio-robotica.html": {
    name: "Robótica aplicada para empresas",
    description: "Prototipos, sensores, software de control, telemetría y sistemas físico-digitales conectados a datos.",
    faq: [
      ["¿Qué es robótica aplicada para empresas?", "Es la integración de sensores, actuadores, software, datos e interfaces para resolver procesos físicos u operativos."],
      ["¿Cómo se valida un proyecto de robótica?", "Con una prueba técnica que evalúa sensores, control, datos, restricciones, entorno y factibilidad antes de escalar."],
      ["¿Qué papel tiene el software en robótica?", "El software coordina control, interfaces, telemetría, reglas, alertas y conexión con sistemas internos."]
    ]
  },
  "servicio-videojuegos.html": {
    name: "Videojuegos, simuladores y experiencias interactivas para empresas",
    description: "Simuladores, gamificación, videojuegos web y experiencias interactivas para capacitación, marca y educación.",
    faq: [
      ["¿Para qué sirven los simuladores empresariales?", "Sirven para entrenar equipos, evaluar decisiones, practicar escenarios y medir aprendizaje en entornos interactivos."],
      ["¿Qué es gamificación corporativa?", "Es el uso de progreso, retos, recompensas y retroalimentación para aumentar participación y aprendizaje."],
      ["¿Qué puede crear Tecnotitan en videojuegos?", "Prototipos, juegos web, simuladores, experiencias educativas, activaciones de marca y mundos interactivos."]
    ]
  },
  "servicio-transformacion-tecnologica.html": {
    name: "Transformación tecnológica para empresas",
    description: "Modernización operativa, automatización, adopción digital, datos y mejora continua para empresas.",
    faq: [
      ["¿Qué es transformación tecnológica?", "Es la modernización de procesos, herramientas, datos y capacidades para operar con más claridad, automatización y medición."],
      ["¿Cómo se inicia una transformación tecnológica?", "Con diagnóstico de madurez, mapa de procesos, quick wins, roadmap, adopción y seguimiento de indicadores."],
      ["¿Por qué falla una transformación digital?", "Suele fallar por falta de prioridades, baja adopción, herramientas desconectadas, datos desordenados o ausencia de seguimiento."]
    ]
  }
};

const productStructuredSeo = {
  "producto-copiloto-pyme.html": {
    name: "Copiloto Pyme",
    description: "Asistente de inteligencia artificial para ventas, soporte, documentos y automatización operativa de pequeñas y medianas empresas.",
    category: "AI business assistant",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    audience: "Small and medium-sized businesses",
    image: "https://www.tecnotitan.com/assets/bg-process-ai.jpg"
  },
  "producto-tecnotitan-os.html": {
    name: "Tecnotitan OS",
    description: "Plataforma empresarial para centralizar procesos, datos, automatizaciones, agentes IA y flujos internos.",
    category: "Enterprise software platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    audience: "Companies and operations teams",
    image: "https://www.tecnotitan.com/assets/bg-hero-tech.jpg"
  },
  "producto-life-copilot.html": {
    name: "Life Copilot",
    description: "Aplicación móvil de productividad personal con copiloto IA para organizar metas, tareas, hábitos y decisiones.",
    category: "AI productivity app",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "iOS, Android, Web",
    audience: "Professionals and consumers",
    image: "https://www.tecnotitan.com/assets/bg-capabilities-tech.jpg"
  },
  "producto-tecnotitan-engine.html": {
    name: "Tecnotitan Engine",
    description: "Motor y toolkit para prototipar videojuegos, simuladores, experiencias interactivas y mundos gamificados.",
    category: "Game engine and interactive toolkit",
    applicationCategory: "GameApplication",
    operatingSystem: "Web, Windows, macOS",
    audience: "Game studios, brands and enterprise training teams",
    image: "https://www.tecnotitan.com/assets/bg-games-experiences.jpg"
  },
  "producto-academia-tecnotitan.html": {
    name: "Academia Tecnotitan",
    description: "Plataforma de aprendizaje para inteligencia artificial, software, videojuegos, robótica y transformación tecnológica.",
    category: "Technology education platform",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    audience: "Students, professionals and companies",
    image: "https://www.tecnotitan.com/assets/bg-capabilities-tech.jpg"
  },
  "producto-call-center-ai.html": {
    name: "Call Center AI Tecnotitan",
    description: "Agentes conversacionales para soporte, ventas, seguimiento de clientes y automatización de contact centers.",
    category: "AI customer support platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    audience: "Sales, support and contact center teams",
    image: "https://www.tecnotitan.com/assets/bg-process-ai.jpg"
  }
};

const servicePageTranslations = {
  es: {
    serviceIndex: {
      title: "Servicios especializados",
      text: "Explora cada línea de servicio con enfoque, entregables y tipo de impacto esperado para empresas.",
      cards: [
        ["IA", "Inteligencia artificial", "Agentes, copilotos, automatización documental, analítica y flujos inteligentes."],
        ["SW", "Software empresarial", "Plataformas web, CRM internos, dashboards, portales e integraciones."],
        ["AD", "Consultoría tecnológica", "Diagnóstico, arquitectura, roadmap, adopción y acompañamiento ejecutivo."],
        ["RB", "Robótica", "Software, sensores, datos y sistemas físico-digitales conectados a operaciones."],
        ["VG", "Videojuegos", "Simuladores, experiencias interactivas, gamificación y entrenamiento inmersivo."],
        ["TX", "Transformación tecnológica", "Modernización operativa, automatización, adopción digital y cambio organizacional."]
      ]
    },
    method: {
      title: "Cómo trabajamos",
      text: "Un proceso claro para pasar de diagnóstico a despliegue, con entregables visibles y decisiones de avance en cada fase.",
      cards: [
        ["01", "Diagnóstico", "Entendemos procesos, datos, herramientas, usuarios, restricciones y oportunidad de impacto.", "Entregable: mapa de oportunidad"],
        ["02", "Diseño", "Definimos arquitectura, alcance, experiencia, integraciones, riesgos y criterios de éxito.", "Entregable: plan técnico y funcional"],
        ["03", "Desarrollo", "Construimos el sistema, agente, plataforma, prototipo o automatización con ciclos cortos.", "Entregable: versión funcional"],
        ["04", "Validación", "Probamos con usuarios, datos y escenarios reales para ajustar experiencia, precisión y flujo.", "Entregable: reporte de validación"],
        ["05", "Despliegue", "Publicamos, integramos, documentamos y dejamos el sistema listo para uso operativo.", "Entregable: sistema en producción"],
        ["06", "Soporte", "Medimos adopción, corregimos fricción, priorizamos mejoras y transferimos capacidades.", "Entregable: plan de evolución"]
      ]
    },
    technology: {
      title: "Tecnologías y capacidades",
      text: "Integramos herramientas modernas con criterio operativo: elegimos tecnología por impacto, mantenibilidad y capacidad de escalar dentro de la empresa.",
      cards: [
        ["AI", "IA generativa", "Modelos de lenguaje, asistencia documental, clasificación, extracción, generación y análisis de información."],
        ["Agents", "Agentes y copilotos", "Asistentes conectados a procesos, datos, herramientas internas, atención, ventas y operaciones."],
        ["APIs", "Integraciones", "Conexión entre formularios, CRM, bases de datos, correo, dashboards, automatizaciones y sistemas existentes."],
        ["Data", "Dashboards y analítica", "Indicadores, reportes ejecutivos, seguimiento de procesos, visualización y lectura accionable de datos."],
        ["Cloud", "Web y cloud", "Aplicaciones web, funciones serverless, despliegue continuo, almacenamiento, seguridad y observabilidad."],
        ["Automation", "Automatización", "Flujos repetibles, alertas, generación de reportes, sincronización de datos y reducción de trabajo manual."],
        ["Games", "Videojuegos y simulación", "Mecánicas interactivas, gamificación, simuladores, experiencias web y aprendizaje inmersivo."],
        ["Robotics", "Robótica aplicada", "Sensores, control, telemetría, prototipos, sistemas físico-digitales y visualización de operación."]
      ]
    },
    industries: {
      title: "Casos de uso por industria",
      text: "Aplicamos software, IA, videojuegos, robótica y consultoría tecnológica a problemas concretos de operación, crecimiento y adopción digital.",
      cards: [
        ["Servicios profesionales", "Automatizar atención, documentos y seguimiento comercial", "Copilotos para responder clientes, clasificar solicitudes, generar documentos, priorizar oportunidades y medir productividad.", "Solicitar diagnóstico IA"],
        ["Retail y comercio", "Unificar ventas, inventario, soporte y datos de clientes", "Portales internos, dashboards, agentes de atención, campañas interactivas y automatización de procesos repetibles.", "Explorar software"],
        ["Educación", "Crear experiencias de aprendizaje con IA y simulación", "Academias digitales, tutores IA, simuladores, evaluaciones interactivas, gamificación y seguimiento de progreso.", "Crear experiencia"],
        ["Salud y bienestar", "Ordenar información, seguimiento y comunicación operativa", "Automatización documental, agendas, paneles internos, flujos de atención y asistentes para tareas administrativas.", "Modernizar operación"],
        ["Logística y operaciones", "Conectar procesos, datos, alertas y trazabilidad", "Dashboards operativos, flujos de aprobación, automatización de reportes, seguimiento de tareas y analítica aplicada.", "Diseñar roadmap"],
        ["Industria y manufactura", "Integrar sensores, software y sistemas físico-digitales", "Prototipos de robótica, telemetría, control, mantenimiento, captura de datos y visualización de procesos críticos.", "Explorar robótica"]
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      text: "Respuestas claras para iniciar una conversación comercial con expectativas realistas sobre alcance, tiempos, seguridad y soporte.",
      items: [
        ["¿Cuánto tarda un proyecto típico?", "Depende del alcance. Un diagnóstico puede tomar pocos días; un prototipo funcional suele requerir semanas; una plataforma o implementación completa se define por fases para reducir riesgo."],
        ["¿Cómo se define el costo?", "Se estima según alcance, complejidad, integraciones, nivel de soporte, urgencia y entregables. Por eso el primer paso recomendado es una conversación de diagnóstico."],
        ["¿Trabajan con información confidencial?", "Sí. Podemos trabajar bajo acuerdos de confidencialidad y limitar el acceso a datos sensibles según las necesidades del proyecto y las políticas de la empresa."],
        ["¿Qué pasa con la propiedad intelectual?", "La propiedad intelectual se acuerda por contrato según el tipo de proyecto. Podemos construir software a medida para el cliente o desarrollar componentes reutilizables bajo condiciones claras."],
        ["¿La empresa necesita tener equipo técnico interno?", "No necesariamente. Tecnotitan puede acompañar desde diagnóstico hasta despliegue. Si ya existe equipo interno, trabajamos como socio técnico para acelerar arquitectura, desarrollo y adopción."],
        ["¿Ofrecen soporte después del despliegue?", "Sí. Podemos incluir mantenimiento, mejoras evolutivas, monitoreo, documentación, capacitación y soporte operativo según el nivel de servicio requerido."],
        ["¿Cómo manejan seguridad y datos?", "Diseñamos cada solución considerando permisos, control de acceso, trazabilidad, exposición mínima de datos, proveedores adecuados y prácticas de despliegue responsables."],
        ["¿Pueden empezar con algo pequeño?", "Sí. Recomendamos comenzar con un diagnóstico, MVP o piloto medible. Eso permite validar valor antes de comprometer inversiones mayores."]
      ]
    },
    conversion: {
      title: "Elige el siguiente paso",
      text: "Atajos comerciales para llegar al formulario con el servicio correcto preseleccionado.",
      cards: [
        ["IA", "Solicitar diagnóstico IA", "Para identificar automatizaciones, agentes, copilotos y casos con retorno operativo."],
        ["Software", "Cotizar software empresarial", "Para construir plataformas, CRM internos, dashboards, portales e integraciones."],
        ["Advisory", "Agendar consultoría", "Para definir roadmap tecnológico, arquitectura, adopción y prioridades ejecutivas."],
        ["Robótica", "Explorar robótica aplicada", "Para conectar sensores, software, telemetría y sistemas físico-digitales."],
        ["Interactivo", "Crear experiencia interactiva", "Para simuladores, videojuegos, gamificación, entrenamiento y experiencias web."],
        ["Transformación", "Diseñar transformación tecnológica", "Para modernizar procesos, automatizar operación y acelerar adopción digital."]
      ]
    },
    form: {
      kicker: "Solicitud comercial",
      title: "Cuéntanos qué necesita construir tu empresa",
      text: "Este formulario es para proyectos de IA, software, consultoría, robótica, videojuegos o transformación tecnológica.",
      successTitle: "Solicitud enviada",
      successText: "Gracias. Recibimos tu solicitud de servicios y responderemos a info@tecnotitan.com.",
      labels: ["Nombre", "Email", "Empresa", "País", "Servicio de interés", "Tamaño de empresa", "Presupuesto aproximado", "Urgencia", "Mensaje"],
      serviceOptions: ["Seleccionar", "Inteligencia artificial", "Software empresarial", "Consultoría tecnológica", "Robótica", "Videojuegos y experiencias interactivas", "Transformación tecnológica"],
      companySizeOptions: ["Seleccionar", "1-10 personas", "11-50 personas", "51-200 personas", "201-1000 personas", "Más de 1000 personas"],
      budgetOptions: ["Seleccionar", "Menos de USD 5K", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "Por definir"],
      urgencyOptions: ["Seleccionar", "Este mes", "1-3 meses", "3-6 meses", "Exploratorio"],
      placeholder: "Cuéntanos el problema, objetivo o proceso que quieres mejorar.",
      newsletter: "Quiero suscribirme al newsletter oficial de Tecnotitan.",
      button: "Solicitar conversación comercial"
    }
  },
  en: {
    serviceIndex: {
      title: "Specialized services",
      text: "Explore each service line by focus, deliverables and expected business impact.",
      cards: [
        ["AI", "Artificial intelligence", "Agents, copilots, document automation, analytics and intelligent workflows."],
        ["SW", "Enterprise software", "Web platforms, internal CRM, dashboards, portals and integrations."],
        ["AD", "Technology advisory", "Diagnosis, architecture, roadmap, adoption and executive guidance."],
        ["RB", "Robotics", "Software, sensors, data and physical-digital systems connected to operations."],
        ["VG", "Video games", "Simulators, interactive experiences, gamification and immersive training."],
        ["TX", "Technology transformation", "Operational modernization, automation, digital adoption and organizational change."]
      ]
    },
    method: {
      title: "How we work",
      text: "A clear process from diagnosis to deployment, with visible deliverables and progress decisions at every stage.",
      cards: [
        ["01", "Diagnosis", "We understand processes, data, tools, users, constraints and impact opportunities.", "Deliverable: opportunity map"],
        ["02", "Design", "We define architecture, scope, experience, integrations, risks and success criteria.", "Deliverable: technical and functional plan"],
        ["03", "Development", "We build the system, agent, platform, prototype or automation in short cycles.", "Deliverable: functional version"],
        ["04", "Validation", "We test with users, data and real scenarios to adjust experience, accuracy and flow.", "Deliverable: validation report"],
        ["05", "Deployment", "We publish, integrate, document and leave the system ready for operational use.", "Deliverable: production system"],
        ["06", "Support", "We measure adoption, reduce friction, prioritize improvements and transfer capabilities.", "Deliverable: evolution plan"]
      ]
    },
    technology: {
      title: "Technologies and capabilities",
      text: "We integrate modern tools with operational judgment: technology is chosen for impact, maintainability and enterprise scalability.",
      cards: [
        ["AI", "Generative AI", "Language models, document assistance, classification, extraction, generation and information analysis."],
        ["Agents", "Agents and copilots", "Assistants connected to processes, data, internal tools, support, sales and operations."],
        ["APIs", "Integrations", "Connections across forms, CRM, databases, email, dashboards, automations and existing systems."],
        ["Data", "Dashboards and analytics", "Indicators, executive reports, process tracking, visualization and actionable data reading."],
        ["Cloud", "Web and cloud", "Web apps, serverless functions, continuous deployment, storage, security and observability."],
        ["Automation", "Automation", "Repeatable workflows, alerts, report generation, data synchronization and reduced manual work."],
        ["Games", "Games and simulation", "Interactive mechanics, gamification, simulators, web experiences and immersive learning."],
        ["Robotics", "Applied robotics", "Sensors, control, telemetry, prototypes, physical-digital systems and operational visualization."]
      ]
    },
    industries: {
      title: "Industry use cases",
      text: "We apply software, AI, games, robotics and technology advisory to concrete problems in operations, growth and digital adoption.",
      cards: [
        ["Professional services", "Automate support, documents and commercial follow-up", "Copilots to answer clients, classify requests, generate documents, prioritize opportunities and measure productivity.", "Request AI diagnosis"],
        ["Retail and commerce", "Unify sales, inventory, support and customer data", "Internal portals, dashboards, support agents, interactive campaigns and repeatable process automation.", "Explore software"],
        ["Education", "Create learning experiences with AI and simulation", "Digital academies, AI tutors, simulators, interactive assessments, gamification and progress tracking.", "Create experience"],
        ["Health and wellness", "Organize information, follow-up and operational communication", "Document automation, scheduling, internal panels, service flows and assistants for administrative tasks.", "Modernize operations"],
        ["Logistics and operations", "Connect processes, data, alerts and traceability", "Operational dashboards, approval flows, report automation, task tracking and applied analytics.", "Design roadmap"],
        ["Industry and manufacturing", "Integrate sensors, software and physical-digital systems", "Robotics prototypes, telemetry, control, maintenance, data capture and critical process visualization.", "Explore robotics"]
      ]
    },
    faq: {
      title: "Frequently asked questions",
      text: "Clear answers to begin a commercial conversation with realistic expectations about scope, timing, security and support.",
      items: [
        ["How long does a typical project take?", "It depends on scope. A diagnosis can take a few days; a functional prototype usually takes weeks; a complete platform or implementation is defined in phases to reduce risk."],
        ["How is pricing defined?", "It is estimated based on scope, complexity, integrations, support level, urgency and deliverables. That is why the recommended first step is a diagnosis conversation."],
        ["Do you work with confidential information?", "Yes. We can work under confidentiality agreements and limit access to sensitive data according to project needs and company policies."],
        ["What happens with intellectual property?", "Intellectual property is agreed by contract depending on the project type. We can build custom software for the client or reusable components under clear conditions."],
        ["Does the company need an internal technical team?", "Not necessarily. Tecnotitan can support from diagnosis to deployment. If an internal team exists, we work as a technical partner to accelerate architecture, development and adoption."],
        ["Do you offer support after deployment?", "Yes. We can include maintenance, evolutionary improvements, monitoring, documentation, training and operational support according to the required service level."],
        ["How do you handle security and data?", "We design every solution considering permissions, access control, traceability, minimal data exposure, suitable providers and responsible deployment practices."],
        ["Can we start with something small?", "Yes. We recommend starting with a diagnosis, MVP or measurable pilot. That allows value validation before larger investments."]
      ]
    },
    conversion: {
      title: "Choose the next step",
      text: "Commercial shortcuts that take visitors to the form with the right service preselected.",
      cards: [
        ["AI", "Request AI diagnosis", "Identify automations, agents, copilots and use cases with operational return."],
        ["Software", "Quote enterprise software", "Build platforms, internal CRM, dashboards, portals and integrations."],
        ["Advisory", "Schedule advisory", "Define technology roadmap, architecture, adoption and executive priorities."],
        ["Robotics", "Explore applied robotics", "Connect sensors, software, telemetry and physical-digital systems."],
        ["Interactive", "Create interactive experience", "For simulators, games, gamification, training and web experiences."],
        ["Transformation", "Design technology transformation", "Modernize processes, automate operations and accelerate digital adoption."]
      ]
    },
    form: {
      kicker: "Commercial request",
      title: "Tell us what your company needs to build",
      text: "This form is for AI, software, advisory, robotics, video games or technology transformation projects.",
      successTitle: "Request sent",
      successText: "Thank you. We received your service request and will reply through info@tecnotitan.com.",
      labels: ["Name", "Email", "Company", "Country", "Service of interest", "Company size", "Approximate budget", "Urgency", "Message"],
      serviceOptions: ["Select", "Artificial intelligence", "Enterprise software", "Technology advisory", "Robotics", "Video games and interactive experiences", "Technology transformation"],
      companySizeOptions: ["Select", "1-10 people", "11-50 people", "51-200 people", "201-1000 people", "More than 1000 people"],
      budgetOptions: ["Select", "Less than USD 5K", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "To be defined"],
      urgencyOptions: ["Select", "This month", "1-3 months", "3-6 months", "Exploratory"],
      placeholder: "Tell us the problem, objective or process you want to improve.",
      newsletter: "I want to subscribe to the official Tecnotitan newsletter.",
      button: "Request a commercial conversation"
    }
  },
  pt: {
    serviceIndex: {
      title: "Serviços especializados",
      text: "Explore cada linha de serviço por foco, entregáveis e impacto esperado para empresas.",
      cards: [
        ["IA", "Inteligência artificial", "Agentes, copilotos, automação documental, analytics e fluxos inteligentes."],
        ["SW", "Software empresarial", "Plataformas web, CRM interno, dashboards, portais e integrações."],
        ["AD", "Consultoria tecnológica", "Diagnóstico, arquitetura, roadmap, adoção e acompanhamento executivo."],
        ["RB", "Robótica", "Software, sensores, dados e sistemas físico-digitais conectados às operações."],
        ["VG", "Videogames", "Simuladores, experiências interativas, gamificação e treinamento imersivo."],
        ["TX", "Transformação tecnológica", "Modernização operacional, automação, adoção digital e mudança organizacional."]
      ]
    },
    method: {
      title: "Como trabalhamos",
      text: "Um processo claro do diagnóstico ao deploy, com entregáveis visíveis e decisões de avanço em cada fase.",
      cards: [
        ["01", "Diagnóstico", "Entendemos processos, dados, ferramentas, usuários, restrições e oportunidades de impacto.", "Entregável: mapa de oportunidade"],
        ["02", "Desenho", "Definimos arquitetura, escopo, experiência, integrações, riscos e critérios de sucesso.", "Entregável: plano técnico e funcional"],
        ["03", "Desenvolvimento", "Construímos o sistema, agente, plataforma, protótipo ou automação em ciclos curtos.", "Entregável: versão funcional"],
        ["04", "Validação", "Testamos com usuários, dados e cenários reais para ajustar experiência, precisão e fluxo.", "Entregável: relatório de validação"],
        ["05", "Deploy", "Publicamos, integramos, documentamos e deixamos o sistema pronto para uso operacional.", "Entregável: sistema em produção"],
        ["06", "Suporte", "Medimos adoção, reduzimos fricção, priorizamos melhorias e transferimos capacidades.", "Entregável: plano de evolução"]
      ]
    },
    technology: {
      title: "Tecnologias e capacidades",
      text: "Integramos ferramentas modernas com critério operacional: escolhemos tecnologia por impacto, manutenção e capacidade de escala dentro da empresa.",
      cards: [
        ["AI", "IA generativa", "Modelos de linguagem, assistência documental, classificação, extração, geração e análise de informação."],
        ["Agents", "Agentes e copilotos", "Assistentes conectados a processos, dados, ferramentas internas, atendimento, vendas e operações."],
        ["APIs", "Integrações", "Conexão entre formulários, CRM, bases de dados, email, dashboards, automações e sistemas existentes."],
        ["Data", "Dashboards e analytics", "Indicadores, relatórios executivos, acompanhamento de processos, visualização e leitura acionável de dados."],
        ["Cloud", "Web e cloud", "Aplicações web, funções serverless, deploy contínuo, armazenamento, segurança e observabilidade."],
        ["Automation", "Automação", "Fluxos repetíveis, alertas, geração de relatórios, sincronização de dados e redução de trabalho manual."],
        ["Games", "Videogames e simulação", "Mecânicas interativas, gamificação, simuladores, experiências web e aprendizagem imersiva."],
        ["Robotics", "Robótica aplicada", "Sensores, controle, telemetria, protótipos, sistemas físico-digitais e visualização operacional."]
      ]
    },
    industries: {
      title: "Casos de uso por indústria",
      text: "Aplicamos software, IA, videogames, robótica e consultoria tecnológica a problemas concretos de operação, crescimento e adoção digital.",
      cards: [
        ["Serviços profissionais", "Automatizar atendimento, documentos e acompanhamento comercial", "Copilotos para responder clientes, classificar solicitações, gerar documentos, priorizar oportunidades e medir produtividade.", "Solicitar diagnóstico IA"],
        ["Retail e comércio", "Unificar vendas, estoque, suporte e dados de clientes", "Portais internos, dashboards, agentes de atendimento, campanhas interativas e automação de processos repetíveis.", "Explorar software"],
        ["Educação", "Criar experiências de aprendizagem com IA e simulação", "Academias digitais, tutores IA, simuladores, avaliações interativas, gamificação e acompanhamento de progresso.", "Criar experiência"],
        ["Saúde e bem-estar", "Organizar informação, acompanhamento e comunicação operacional", "Automação documental, agendas, painéis internos, fluxos de atendimento e assistentes para tarefas administrativas.", "Modernizar operação"],
        ["Logística e operações", "Conectar processos, dados, alertas e rastreabilidade", "Dashboards operacionais, fluxos de aprovação, automação de relatórios, acompanhamento de tarefas e analytics aplicada.", "Desenhar roadmap"],
        ["Indústria e manufatura", "Integrar sensores, software e sistemas físico-digitais", "Protótipos de robótica, telemetria, controle, manutenção, captura de dados e visualização de processos críticos.", "Explorar robótica"]
      ]
    },
    faq: {
      title: "Perguntas frequentes",
      text: "Respostas claras para iniciar uma conversa comercial com expectativas realistas sobre escopo, prazos, segurança e suporte.",
      items: [
        ["Quanto tempo leva um projeto típico?", "Depende do escopo. Um diagnóstico pode levar poucos dias; um protótipo funcional costuma exigir semanas; uma plataforma ou implementação completa é definida por fases para reduzir risco."],
        ["Como o custo é definido?", "É estimado conforme escopo, complexidade, integrações, nível de suporte, urgência e entregáveis. Por isso o primeiro passo recomendado é uma conversa de diagnóstico."],
        ["Vocês trabalham com informação confidencial?", "Sim. Podemos trabalhar sob acordos de confidencialidade e limitar o acesso a dados sensíveis conforme as necessidades do projeto e as políticas da empresa."],
        ["O que acontece com a propriedade intelectual?", "A propriedade intelectual é acordada em contrato conforme o tipo de projeto. Podemos construir software sob medida para o cliente ou componentes reutilizáveis sob condições claras."],
        ["A empresa precisa ter equipe técnica interna?", "Não necessariamente. A Tecnotitan pode acompanhar do diagnóstico ao deploy. Se já existir equipe interna, atuamos como parceiro técnico para acelerar arquitetura, desenvolvimento e adoção."],
        ["Vocês oferecem suporte após o deploy?", "Sim. Podemos incluir manutenção, melhorias evolutivas, monitoramento, documentação, treinamento e suporte operacional conforme o nível de serviço necessário."],
        ["Como vocês tratam segurança e dados?", "Desenhamos cada solução considerando permissões, controle de acesso, rastreabilidade, exposição mínima de dados, provedores adequados e práticas responsáveis de deploy."],
        ["Podemos começar com algo pequeno?", "Sim. Recomendamos iniciar com diagnóstico, MVP ou piloto mensurável. Isso permite validar valor antes de investimentos maiores."]
      ]
    },
    conversion: {
      title: "Escolha o próximo passo",
      text: "Atalhos comerciais para chegar ao formulário com o serviço correto pré-selecionado.",
      cards: [
        ["IA", "Solicitar diagnóstico IA", "Para identificar automações, agentes, copilotos e casos com retorno operacional."],
        ["Software", "Cotar software empresarial", "Para construir plataformas, CRM interno, dashboards, portais e integrações."],
        ["Advisory", "Agendar consultoria", "Para definir roadmap tecnológico, arquitetura, adoção e prioridades executivas."],
        ["Robótica", "Explorar robótica aplicada", "Para conectar sensores, software, telemetria e sistemas físico-digitais."],
        ["Interativo", "Criar experiência interativa", "Para simuladores, videogames, gamificação, treinamento e experiências web."],
        ["Transformação", "Desenhar transformação tecnológica", "Para modernizar processos, automatizar operação e acelerar adoção digital."]
      ]
    },
    form: {
      kicker: "Solicitação comercial",
      title: "Conte-nos o que sua empresa precisa construir",
      text: "Este formulário é para projetos de IA, software, consultoria, robótica, videogames ou transformação tecnológica.",
      successTitle: "Solicitação enviada",
      successText: "Obrigado. Recebemos sua solicitação de serviços e responderemos por info@tecnotitan.com.",
      labels: ["Nome", "Email", "Empresa", "País", "Serviço de interesse", "Tamanho da empresa", "Orçamento aproximado", "Urgência", "Mensagem"],
      serviceOptions: ["Selecionar", "Inteligência artificial", "Software empresarial", "Consultoria tecnológica", "Robótica", "Videogames e experiências interativas", "Transformação tecnológica"],
      companySizeOptions: ["Selecionar", "1-10 pessoas", "11-50 pessoas", "51-200 pessoas", "201-1000 pessoas", "Mais de 1000 pessoas"],
      budgetOptions: ["Selecionar", "Menos de USD 5K", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "A definir"],
      urgencyOptions: ["Selecionar", "Este mês", "1-3 meses", "3-6 meses", "Exploratório"],
      placeholder: "Conte-nos o problema, objetivo ou processo que você quer melhorar.",
      newsletter: "Quero me inscrever no newsletter oficial da Tecnotitan.",
      button: "Solicitar conversa comercial"
    }
  }
};

servicePageTranslations.zh = {
  serviceIndex: {
    title: "专业服务",
    text: "按服务重点、交付物和预期业务影响了解 Tecnotitan 的服务线。",
    cards: [
      ["AI", "人工智能", "智能代理、copilot、文档自动化、分析和智能流程。"],
      ["SW", "企业软件", "Web 平台、内部 CRM、仪表盘、门户和系统集成。"],
      ["AD", "技术咨询", "诊断、架构、路线图、落地采用和高管陪伴。"],
      ["RB", "机器人", "连接运营的软件、传感器、数据和物理数字系统。"],
      ["VG", "电子游戏", "模拟器、互动体验、游戏化和沉浸式训练。"],
      ["TX", "技术转型", "运营现代化、自动化、数字化采用和组织变革。"]
    ]
  },
  method: {
    title: "我们的工作方式",
    text: "从诊断到部署的清晰流程，每个阶段都有可见交付物和推进决策。",
    cards: [
      ["01", "诊断", "理解流程、数据、工具、用户、限制和影响机会。", "交付物：机会地图"],
      ["02", "设计", "定义架构、范围、体验、集成、风险和成功标准。", "交付物：技术与功能计划"],
      ["03", "开发", "以短周期构建系统、代理、平台、原型或自动化。", "交付物：可用版本"],
      ["04", "验证", "用真实用户、数据和场景测试，调整体验、准确性和流程。", "交付物：验证报告"],
      ["05", "部署", "发布、集成、文档化，并让系统可投入运营使用。", "交付物：生产系统"],
      ["06", "支持", "衡量采用度、减少摩擦、排序改进并转移能力。", "交付物：演进计划"]
    ]
  },
  technology: {
    title: "技术与能力",
    text: "我们以运营判断整合现代工具：按影响、可维护性和企业扩展能力选择技术。",
    cards: [
      ["AI", "生成式 AI", "语言模型、文档辅助、分类、抽取、生成和信息分析。"],
      ["Agents", "代理与 copilots", "连接流程、数据、内部工具、支持、销售和运营的助手。"],
      ["APIs", "系统集成", "连接表单、CRM、数据库、邮件、仪表盘、自动化和现有系统。"],
      ["Data", "仪表盘与分析", "指标、管理报告、流程追踪、可视化和可行动的数据阅读。"],
      ["Cloud", "Web 与云", "Web 应用、serverless 函数、持续部署、存储、安全和可观测性。"],
      ["Automation", "自动化", "可重复流程、提醒、报告生成、数据同步和减少人工工作。"],
      ["Games", "游戏与仿真", "互动机制、游戏化、模拟器、Web 体验和沉浸式学习。"],
      ["Robotics", "应用机器人", "传感器、控制、遥测、原型、物理数字系统和运营可视化。"]
    ]
  },
  industries: {
    title: "行业用例",
    text: "我们把软件、AI、游戏、机器人和技术咨询应用到运营、增长和数字化采用的具体问题。",
    cards: [
      ["专业服务", "自动化客服、文档和商业跟进", "用于回复客户、分类请求、生成文档、排序机会并衡量生产力的 copilots。", "申请 AI 诊断"],
      ["零售与商业", "统一销售、库存、支持和客户数据", "内部门户、仪表盘、客服代理、互动活动和可重复流程自动化。", "探索软件"],
      ["教育", "用 AI 与仿真创建学习体验", "数字学院、AI 导师、模拟器、互动评估、游戏化和进度追踪。", "创建体验"],
      ["健康与 wellness", "整理信息、跟进和运营沟通", "文档自动化、排期、内部面板、服务流程和行政任务助手。", "现代化运营"],
      ["物流与运营", "连接流程、数据、提醒和可追溯性", "运营仪表盘、审批流程、报告自动化、任务追踪和应用分析。", "设计路线图"],
      ["工业与制造", "集成传感器、软件和物理数字系统", "机器人原型、遥测、控制、维护、数据采集和关键流程可视化。", "探索机器人"]
    ]
  },
  faq: {
    title: "常见问题",
    text: "以清晰答案开启商业沟通，建立关于范围、时间、安全和支持的现实预期。",
    items: [
      ["典型项目需要多久？", "取决于范围。诊断可能只需几天；功能原型通常需要数周；完整平台或实施会按阶段定义以降低风险。"],
      ["成本如何确定？", "会根据范围、复杂度、集成、支持级别、紧急程度和交付物估算。因此建议第一步先做诊断沟通。"],
      ["你们处理保密信息吗？", "是的。我们可以在保密协议下工作，并根据项目需求和公司政策限制敏感数据访问。"],
      ["知识产权如何处理？", "知识产权会按项目类型在合同中约定。我们可以为客户构建定制软件，也可以在清晰条件下构建可复用组件。"],
      ["公司需要内部技术团队吗？", "不一定。Tecnotitan 可以从诊断支持到部署。如果已有内部团队，我们会作为技术伙伴加速架构、开发和采用。"],
      ["部署后提供支持吗？", "是的。可包含维护、演进式改进、监控、文档、培训和运营支持，具体取决于所需服务级别。"],
      ["你们如何处理安全和数据？", "每个方案都会考虑权限、访问控制、可追溯性、最小数据暴露、合适供应商和负责任的部署实践。"],
      ["可以从小项目开始吗？", "可以。我们建议从诊断、MVP 或可衡量试点开始，在更大投入前验证价值。"]
    ]
  },
  conversion: {
    title: "选择下一步",
    text: "商业快捷入口会把访客带到已预选正确服务的表单。",
    cards: [
      ["AI", "申请 AI 诊断", "识别自动化、智能代理、copilot 和具备运营回报的用例。"],
      ["Software", "估算企业软件", "构建平台、内部 CRM、仪表盘、门户和系统集成。"],
      ["Advisory", "预约技术咨询", "定义技术路线图、架构、采用路径和高管优先级。"],
      ["Robotics", "探索应用机器人", "连接传感器、软件、遥测和物理数字系统。"],
      ["Interactive", "创建互动体验", "用于模拟器、电子游戏、游戏化、培训和 Web 体验。"],
      ["Transformation", "设计技术转型", "现代化流程、自动化运营并加速数字化采用。"]
    ]
  },
  form: {
    kicker: "商业需求",
    title: "告诉我们你的公司需要构建什么",
    text: "此表单适用于 AI、软件、咨询、机器人、电子游戏或技术转型项目。",
    successTitle: "请求已发送",
    successText: "谢谢。我们已收到你的服务请求，并将通过 info@tecnotitan.com 回复。",
    labels: ["姓名", "邮箱", "公司", "国家", "感兴趣的服务", "公司规模", "预算范围", "紧急程度", "消息"],
    serviceOptions: ["选择", "人工智能", "企业软件", "技术咨询", "机器人", "电子游戏与互动体验", "技术转型"],
    companySizeOptions: ["选择", "1-10 人", "11-50 人", "51-200 人", "201-1000 人", "1000 人以上"],
    budgetOptions: ["选择", "低于 USD 5K", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "待定"],
    urgencyOptions: ["选择", "本月", "1-3 个月", "3-6 个月", "探索阶段"],
    placeholder: "告诉我们你想改进的问题、目标或流程。",
    newsletter: "我想订阅 Tecnotitan 官方 newsletter。",
    button: "申请商业沟通"
  }
};

servicePageTranslations.ja = {
  serviceIndex: {
    title: "専門サービス",
    text: "各サービスラインの焦点、成果物、企業への期待インパクトを確認できます。",
    cards: [
      ["AI", "人工知能", "エージェント、copilot、文書自動化、分析、スマートワークフロー。"],
      ["SW", "企業ソフトウェア", "Web プラットフォーム、社内 CRM、ダッシュボード、ポータル、連携。"],
      ["AD", "技術コンサルティング", "診断、アーキテクチャ、ロードマップ、導入、経営層支援。"],
      ["RB", "ロボティクス", "運用につながるソフトウェア、センサー、データ、フィジカルデジタルシステム。"],
      ["VG", "ゲーム", "シミュレーター、インタラクティブ体験、ゲーミフィケーション、没入型トレーニング。"],
      ["TX", "技術変革", "業務近代化、自動化、デジタル導入、組織変革。"]
    ]
  },
  method: {
    title: "進め方",
    text: "診断からデプロイまで、各段階で明確な成果物と意思決定を持つプロセスです。",
    cards: [
      ["01", "診断", "プロセス、データ、ツール、ユーザー、制約、インパクト機会を理解します。", "成果物：機会マップ"],
      ["02", "設計", "アーキテクチャ、範囲、体験、連携、リスク、成功基準を定義します。", "成果物：技術・機能計画"],
      ["03", "開発", "システム、エージェント、プラットフォーム、プロトタイプ、自動化を短いサイクルで構築します。", "成果物：機能版"],
      ["04", "検証", "実ユーザー、データ、シナリオで体験、精度、フローを調整します。", "成果物：検証レポート"],
      ["05", "デプロイ", "公開、連携、文書化を行い、運用利用できる状態にします。", "成果物：本番システム"],
      ["06", "サポート", "導入状況を測定し、摩擦を減らし、改善を優先し、能力移転します。", "成果物：進化計画"]
    ]
  },
  technology: {
    title: "技術と能力",
    text: "影響、保守性、企業内での拡張性を基準に、現代的なツールを運用視点で統合します。",
    cards: [
      ["AI", "生成 AI", "言語モデル、文書支援、分類、抽出、生成、情報分析。"],
      ["Agents", "エージェントと copilots", "プロセス、データ、社内ツール、サポート、営業、運用に接続されたアシスタント。"],
      ["APIs", "連携", "フォーム、CRM、データベース、メール、ダッシュボード、自動化、既存システムの接続。"],
      ["Data", "ダッシュボードと分析", "指標、経営レポート、プロセス追跡、可視化、実行可能なデータ読解。"],
      ["Cloud", "Web とクラウド", "Web アプリ、serverless 関数、継続デプロイ、ストレージ、セキュリティ、可観測性。"],
      ["Automation", "自動化", "反復可能なフロー、アラート、レポート生成、データ同期、手作業削減。"],
      ["Games", "ゲームとシミュレーション", "インタラクティブな仕組み、ゲーミフィケーション、シミュレーター、Web 体験、没入型学習。"],
      ["Robotics", "応用ロボティクス", "センサー、制御、テレメトリー、プロトタイプ、フィジカルデジタルシステム、運用可視化。"]
    ]
  },
  industries: {
    title: "業界別ユースケース",
    text: "ソフトウェア、AI、ゲーム、ロボティクス、技術コンサルティングを、運用・成長・デジタル導入の具体課題に適用します。",
    cards: [
      ["プロフェッショナルサービス", "対応、文書、営業フォローを自動化", "顧客対応、依頼分類、文書生成、機会優先順位付け、生産性測定のための copilots。", "AI 診断を依頼"],
      ["小売・コマース", "販売、在庫、サポート、顧客データを統合", "社内ポータル、ダッシュボード、対応エージェント、インタラクティブキャンペーン、反復プロセス自動化。", "ソフトウェアを見る"],
      ["教育", "AI とシミュレーションで学習体験を作る", "デジタルアカデミー、AI チューター、シミュレーター、インタラクティブ評価、ゲーミフィケーション、進捗追跡。", "体験を作る"],
      ["ヘルスケア・ウェルネス", "情報、フォロー、運用コミュニケーションを整理", "文書自動化、予約、社内パネル、対応フロー、管理業務アシスタント。", "運用を近代化"],
      ["物流・オペレーション", "プロセス、データ、アラート、トレーサビリティを接続", "運用ダッシュボード、承認フロー、レポート自動化、タスク追跡、応用分析。", "ロードマップ設計"],
      ["産業・製造", "センサー、ソフトウェア、フィジカルデジタルシステムを統合", "ロボティクス試作、テレメトリー、制御、保守、データ取得、重要プロセス可視化。", "ロボティクスを見る"]
    ]
  },
  faq: {
    title: "よくある質問",
    text: "範囲、期間、セキュリティ、サポートについて現実的な期待値で商談を始めるための明確な回答です。",
    items: [
      ["一般的なプロジェクト期間は？", "範囲によります。診断は数日、機能プロトタイプは通常数週間、完全なプラットフォームや実装はリスクを下げるため段階的に定義します。"],
      ["費用はどう決まりますか？", "範囲、複雑性、連携、サポートレベル、緊急度、成果物に基づいて見積もります。そのため最初の診断相談を推奨します。"],
      ["機密情報を扱えますか？", "はい。秘密保持契約のもとで作業し、プロジェクト要件と企業ポリシーに応じて機密データへのアクセスを制限できます。"],
      ["知的財産はどうなりますか？", "知的財産はプロジェクト種別に応じて契約で合意します。顧客向けカスタムソフトウェア、または明確な条件の再利用可能コンポーネントを構築できます。"],
      ["社内技術チームは必要ですか？", "必須ではありません。Tecnotitan は診断からデプロイまで支援できます。社内チームがある場合は技術パートナーとして加速します。"],
      ["デプロイ後のサポートはありますか？", "はい。必要なサービスレベルに応じて、保守、改善、監視、文書化、トレーニング、運用サポートを含められます。"],
      ["セキュリティとデータはどう扱いますか？", "権限、アクセス制御、追跡性、最小限のデータ露出、適切なプロバイダー、責任あるデプロイを考慮して設計します。"],
      ["小さく始められますか？", "はい。診断、MVP、測定可能なパイロットから始めることを推奨します。大きな投資の前に価値を検証できます。"]
    ]
  },
  conversion: {
    title: "次のステップを選択",
    text: "適切なサービスが事前選択されたフォームへ進むための商談ショートカットです。",
    cards: [
      ["AI", "AI 診断を依頼", "自動化、エージェント、copilot、運用リターンのあるユースケースを特定します。"],
      ["Software", "企業ソフトウェアを見積もる", "プラットフォーム、社内 CRM、ダッシュボード、ポータル、連携を構築します。"],
      ["Advisory", "コンサルティングを予約", "技術ロードマップ、アーキテクチャ、導入、経営優先度を定義します。"],
      ["Robotics", "応用ロボティクスを検討", "センサー、ソフトウェア、テレメトリー、フィジカルデジタルシステムを接続します。"],
      ["Interactive", "インタラクティブ体験を作る", "シミュレーター、ゲーム、ゲーミフィケーション、研修、Web 体験向けです。"],
      ["Transformation", "技術変革を設計", "プロセスを近代化し、運用を自動化し、デジタル導入を加速します。"]
    ]
  },
  form: {
    kicker: "商談リクエスト",
    title: "貴社が構築したいものを教えてください",
    text: "AI、ソフトウェア、コンサルティング、ロボティクス、ゲーム、技術変革プロジェクト向けのフォームです。",
    successTitle: "送信されました",
    successText: "ありがとうございます。サービス依頼を受け取りました。info@tecnotitan.com から返信します。",
    labels: ["氏名", "メール", "会社", "国", "関心のあるサービス", "会社規模", "概算予算", "緊急度", "メッセージ"],
    serviceOptions: ["選択", "人工知能", "企業ソフトウェア", "技術コンサルティング", "ロボティクス", "ゲームとインタラクティブ体験", "技術変革"],
    companySizeOptions: ["選択", "1-10 人", "11-50 人", "51-200 人", "201-1000 人", "1000 人以上"],
    budgetOptions: ["選択", "USD 5K 未満", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "未定"],
    urgencyOptions: ["選択", "今月", "1-3 か月", "3-6 か月", "探索中"],
    placeholder: "改善したい問題、目的、プロセスを教えてください。",
    newsletter: "Tecnotitan 公式 newsletter を購読したいです。",
    button: "商談を依頼"
  }
};

servicePageTranslations.ko = {
  serviceIndex: {
    title: "전문 서비스",
    text: "각 서비스 라인의 초점, 산출물, 기업에 기대되는 영향을 확인하세요.",
    cards: [
      ["AI", "인공지능", "에이전트, copilot, 문서 자동화, 분석, 지능형 워크플로우."],
      ["SW", "기업 소프트웨어", "웹 플랫폼, 내부 CRM, 대시보드, 포털, 통합."],
      ["AD", "기술 컨설팅", "진단, 아키텍처, 로드맵, 도입, 경영진 지원."],
      ["RB", "로보틱스", "운영과 연결되는 소프트웨어, 센서, 데이터, 물리-디지털 시스템."],
      ["VG", "비디오게임", "시뮬레이터, 인터랙티브 경험, 게이미피케이션, 몰입형 교육."],
      ["TX", "기술 전환", "운영 현대화, 자동화, 디지털 도입, 조직 변화."]
    ]
  },
  method: {
    title: "일하는 방식",
    text: "진단부터 배포까지 각 단계에서 명확한 산출물과 진행 결정을 갖춘 프로세스입니다.",
    cards: [
      ["01", "진단", "프로세스, 데이터, 도구, 사용자, 제약, 영향 기회를 이해합니다.", "산출물: 기회 지도"],
      ["02", "설계", "아키텍처, 범위, 경험, 통합, 위험, 성공 기준을 정의합니다.", "산출물: 기술 및 기능 계획"],
      ["03", "개발", "시스템, 에이전트, 플랫폼, 프로토타입 또는 자동화를 짧은 주기로 구축합니다.", "산출물: 기능 버전"],
      ["04", "검증", "사용자, 데이터, 실제 시나리오로 경험, 정확도, 흐름을 조정합니다.", "산출물: 검증 보고서"],
      ["05", "배포", "게시, 통합, 문서화를 통해 시스템을 운영 사용 가능한 상태로 만듭니다.", "산출물: 프로덕션 시스템"],
      ["06", "지원", "도입률을 측정하고 마찰을 줄이며 개선 우선순위를 정하고 역량을 이전합니다.", "산출물: 발전 계획"]
    ]
  },
  technology: {
    title: "기술과 역량",
    text: "영향, 유지보수성, 기업 내 확장성을 기준으로 현대적 도구를 운영 관점에서 통합합니다.",
    cards: [
      ["AI", "생성형 AI", "언어 모델, 문서 지원, 분류, 추출, 생성, 정보 분석."],
      ["Agents", "에이전트와 copilots", "프로세스, 데이터, 내부 도구, 지원, 영업, 운영에 연결된 어시스턴트."],
      ["APIs", "통합", "양식, CRM, 데이터베이스, 이메일, 대시보드, 자동화, 기존 시스템 연결."],
      ["Data", "대시보드와 분석", "지표, 경영 보고서, 프로세스 추적, 시각화, 실행 가능한 데이터 해석."],
      ["Cloud", "웹과 클라우드", "웹 앱, serverless 함수, 지속 배포, 스토리지, 보안, 관측 가능성."],
      ["Automation", "자동화", "반복 가능한 흐름, 알림, 보고서 생성, 데이터 동기화, 수작업 감소."],
      ["Games", "게임과 시뮬레이션", "인터랙티브 메커닉, 게이미피케이션, 시뮬레이터, 웹 경험, 몰입형 학습."],
      ["Robotics", "응용 로보틱스", "센서, 제어, 텔레메트리, 프로토타입, 물리-디지털 시스템, 운영 시각화."]
    ]
  },
  industries: {
    title: "산업별 활용 사례",
    text: "소프트웨어, AI, 게임, 로보틱스, 기술 컨설팅을 운영, 성장, 디지털 도입의 구체적 문제에 적용합니다.",
    cards: [
      ["전문 서비스", "고객 응대, 문서, 영업 후속 조치 자동화", "고객 답변, 요청 분류, 문서 생성, 기회 우선순위, 생산성 측정을 위한 copilots.", "AI 진단 요청"],
      ["리테일과 커머스", "판매, 재고, 지원, 고객 데이터 통합", "내부 포털, 대시보드, 지원 에이전트, 인터랙티브 캠페인, 반복 프로세스 자동화.", "소프트웨어 탐색"],
      ["교육", "AI와 시뮬레이션으로 학습 경험 구축", "디지털 아카데미, AI 튜터, 시뮬레이터, 인터랙티브 평가, 게이미피케이션, 진도 추적.", "경험 만들기"],
      ["헬스케어와 웰니스", "정보, 후속 조치, 운영 커뮤니케이션 정리", "문서 자동화, 일정, 내부 패널, 서비스 흐름, 행정 업무 어시스턴트.", "운영 현대화"],
      ["물류와 운영", "프로세스, 데이터, 알림, 추적성 연결", "운영 대시보드, 승인 흐름, 보고서 자동화, 작업 추적, 응용 분석.", "로드맵 설계"],
      ["산업과 제조", "센서, 소프트웨어, 물리-디지털 시스템 통합", "로보틱스 프로토타입, 텔레메트리, 제어, 유지보수, 데이터 수집, 중요 프로세스 시각화.", "로보틱스 탐색"]
    ]
  },
  faq: {
    title: "자주 묻는 질문",
    text: "범위, 일정, 보안, 지원에 대해 현실적인 기대를 가지고 상업적 대화를 시작하기 위한 명확한 답변입니다.",
    items: [
      ["일반적인 프로젝트 기간은?", "범위에 따라 다릅니다. 진단은 며칠이면 가능하고, 기능 프로토타입은 보통 몇 주가 필요하며, 전체 플랫폼이나 구현은 위험을 줄이기 위해 단계별로 정의합니다."],
      ["비용은 어떻게 정해지나요?", "범위, 복잡도, 통합, 지원 수준, 긴급도, 산출물을 기준으로 산정합니다. 그래서 첫 단계로 진단 대화를 권장합니다."],
      ["기밀 정보를 다루나요?", "네. 비밀유지계약 아래 작업할 수 있으며 프로젝트 필요와 회사 정책에 따라 민감 데이터 접근을 제한할 수 있습니다."],
      ["지식재산권은 어떻게 되나요?", "지식재산권은 프로젝트 유형에 따라 계약으로 합의합니다. 고객 맞춤 소프트웨어 또는 명확한 조건의 재사용 가능한 구성요소를 구축할 수 있습니다."],
      ["내부 기술팀이 필요하나요?", "반드시 필요하지는 않습니다. Tecnotitan은 진단부터 배포까지 지원할 수 있습니다. 내부 팀이 있다면 기술 파트너로서 아키텍처, 개발, 도입을 가속합니다."],
      ["배포 후 지원을 제공하나요?", "네. 필요한 서비스 수준에 따라 유지보수, 개선, 모니터링, 문서화, 교육, 운영 지원을 포함할 수 있습니다."],
      ["보안과 데이터는 어떻게 처리하나요?", "권한, 접근 제어, 추적성, 최소 데이터 노출, 적절한 공급자, 책임 있는 배포 관행을 고려해 설계합니다."],
      ["작게 시작할 수 있나요?", "네. 진단, MVP 또는 측정 가능한 파일럿부터 시작하는 것을 권장합니다. 더 큰 투자 전에 가치를 검증할 수 있습니다."]
    ]
  },
  conversion: {
    title: "다음 단계를 선택하세요",
    text: "올바른 서비스가 미리 선택된 양식으로 이동하는 상업용 바로가기입니다.",
    cards: [
      ["AI", "AI 진단 요청", "자동화, 에이전트, copilot, 운영 수익이 있는 활용 사례를 식별합니다."],
      ["Software", "기업 소프트웨어 견적", "플랫폼, 내부 CRM, 대시보드, 포털, 통합을 구축합니다."],
      ["Advisory", "컨설팅 예약", "기술 로드맵, 아키텍처, 도입, 경영 우선순위를 정의합니다."],
      ["Robotics", "응용 로보틱스 탐색", "센서, 소프트웨어, 텔레메트리, 물리-디지털 시스템을 연결합니다."],
      ["Interactive", "인터랙티브 경험 만들기", "시뮬레이터, 게임, 게이미피케이션, 교육, 웹 경험을 위한 것입니다."],
      ["Transformation", "기술 전환 설계", "프로세스를 현대화하고 운영을 자동화하며 디지털 도입을 가속합니다."]
    ]
  },
  form: {
    kicker: "상업 요청",
    title: "회사가 무엇을 구축해야 하는지 알려주세요",
    text: "이 양식은 AI, 소프트웨어, 컨설팅, 로보틱스, 비디오게임 또는 기술 전환 프로젝트를 위한 것입니다.",
    successTitle: "요청이 전송되었습니다",
    successText: "감사합니다. 서비스 요청을 받았으며 info@tecnotitan.com 으로 답변드리겠습니다.",
    labels: ["이름", "이메일", "회사", "국가", "관심 서비스", "회사 규모", "예상 예산", "긴급도", "메시지"],
    serviceOptions: ["선택", "인공지능", "기업 소프트웨어", "기술 컨설팅", "로보틱스", "비디오게임과 인터랙티브 경험", "기술 전환"],
    companySizeOptions: ["선택", "1-10명", "11-50명", "51-200명", "201-1000명", "1000명 이상"],
    budgetOptions: ["선택", "USD 5K 미만", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "미정"],
    urgencyOptions: ["선택", "이번 달", "1-3개월", "3-6개월", "탐색 단계"],
    placeholder: "개선하려는 문제, 목표 또는 프로세스를 알려주세요.",
    newsletter: "Tecnotitan 공식 newsletter를 구독하고 싶습니다.",
    button: "상업 대화 요청"
  }
};

function carryLanguageAcrossLinks(language) {
  document.querySelectorAll("a[href]").forEach((link) => {
    const rawHref = link.getAttribute("href") || "";

    if (
      !rawHref ||
      rawHref.startsWith("#") ||
      rawHref.startsWith("mailto:") ||
      rawHref.startsWith("tel:") ||
      rawHref.includes("/assets/") ||
      rawHref.endsWith(".pdf") ||
      rawHref.endsWith(".pptx") ||
      link.dataset.deckLang
    ) {
      return;
    }

    const url = new URL(rawHref, window.location.href);

    if (url.origin !== window.location.origin) {
      return;
    }

    const file = url.pathname.endsWith("/") ? "index.html" : url.pathname.split("/").pop();

    if (!languageCarryPages.has(file)) {
      return;
    }

    const segment = languagePathSegments[language] || languagePathSegments.es;
    const cleanPath = file === "guias.html"
      ? new URL(getGuideHubUrl(language)).pathname
      : file === "index.html"
        ? `/${segment}/`
        : language === "en" && englishCleanUrlsByPage[file]
          ? englishCleanUrlsByPage[file]
        : `/${segment}/${file}`;
    link.setAttribute("href", `${cleanPath}${url.search}${url.hash}`);
  });
}

function buildLanguageSwitcher() {
  if (document.querySelector(".language-switcher")) {
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
    button.addEventListener("click", () => {
      localStorage.setItem("tecnotitan-language", language);
      const target = new URL(getLocalizedUrl(language));
      const current = new URL(window.location.href);
      const targetPath = target.pathname.replace(/\/$/, "");
      const currentPath = current.pathname.replace(/\/$/, "");

      if (targetPath !== currentPath) {
        window.location.assign(`${target.pathname}${target.search}${current.hash}`);
        return;
      }

      applyLanguage(language);
    });
    switcher.appendChild(button);
  });

  document.body.appendChild(switcher);
}

const guideChromeTranslations = {
  "guia-como-usar-chatgpt-en-el-trabajo.html": {
    es: {
      label: "Guia Tecnotitan / Inteligencia artificial en el trabajo",
      title: "Como usar ChatGPT en el trabajo: guia practica para empresas",
      intro: "Un manual para usar ChatGPT con productividad, criterio y seguridad en ventas, soporte, documentos, reuniones, analisis y automatizacion.",
      meta: ["Actualizado: junio 2026", "Lectura: 18 min", "PDF descargable"],
      actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia"],
      sidebarTitle: "En esta guia",
      sidebar: ["Que es ChatGPT en el trabajo", "Reglas de uso responsable", "Como escribir buenos prompts", "Casos por area de empresa", "Politica interna sugerida", "Checklist para empezar"]
    },
    en: {
      label: "Tecnotitan Guide / AI at work",
      title: "How to use ChatGPT at work: a practical guide for companies",
      intro: "A manual for using ChatGPT with productivity, judgment and safety across sales, support, documents, meetings, analysis and automation.",
      meta: ["Updated: June 2026", "Reading time: 18 min", "Downloadable PDF"],
      actions: ["Download PDF", "Save as PDF", "Share guide"],
      sidebarTitle: "In this guide",
      sidebar: ["What ChatGPT means at work", "Responsible use rules", "How to write prompts", "Use cases by area", "Suggested internal policy", "Start this week"]
    },
    pt: {
      label: "Guia Tecnotitan / IA no trabalho",
      title: "Como usar ChatGPT no trabalho: guia pratica para empresas",
      intro: "Um manual para usar ChatGPT com produtividade, criterio e seguranca em vendas, suporte, documentos, reunioes, analise e automacao.",
      meta: ["Atualizado: junho de 2026", "Leitura: 18 min", "PDF para baixar"],
      actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia"],
      sidebarTitle: "Neste guia",
      sidebar: ["O que e ChatGPT no trabalho", "Regras de uso responsavel", "Como escrever bons prompts", "Casos por area", "Politica interna sugerida", "Checklist para comecar"]
    },
    zh: {
      label: "Tecnotitan 指南 / 工作中的 AI",
      title: "如何在工作中使用 ChatGPT：企业实用指南",
      intro: "一本帮助团队在销售、支持、文档、会议、分析和自动化中安全、高效使用 ChatGPT 的指南。",
      meta: ["更新：2026 年 6 月", "阅读时间：18 分钟", "可下载 PDF"],
      actions: ["下载 PDF", "保存为 PDF", "分享指南"],
      sidebarTitle: "本指南内容",
      sidebar: ["工作中的 ChatGPT 是什么", "负责任使用规则", "如何写好提示词", "各部门用例", "建议的内部政策", "本周开始清单"]
    },
    ja: {
      label: "Tecnotitan ガイド / 仕事で使う AI",
      title: "仕事で ChatGPT を使う方法：企業向け実践ガイド",
      intro: "営業、サポート、文書、会議、分析、自動化で ChatGPT を安全かつ生産的に使うためのガイドです。",
      meta: ["更新：2026年6月", "読了時間：18分", "PDF ダウンロード"],
      actions: ["PDF をダウンロード", "PDF として保存", "ガイドを共有"],
      sidebarTitle: "このガイド",
      sidebar: ["仕事での ChatGPT とは", "責任ある利用ルール", "良いプロンプトの書き方", "部門別ユースケース", "推奨社内ポリシー", "今週始めるチェックリスト"]
    },
    ko: {
      label: "Tecnotitan 가이드 / 업무용 AI",
      title: "업무에서 ChatGPT를 사용하는 방법: 기업 실무 가이드",
      intro: "영업, 지원, 문서, 회의, 분석, 자동화에서 ChatGPT를 생산적이고 안전하게 쓰기 위한 가이드입니다.",
      meta: ["업데이트: 2026년 6월", "읽는 시간: 18분", "PDF 다운로드"],
      actions: ["PDF 다운로드", "PDF로 저장", "가이드 공유"],
      sidebarTitle: "이 가이드",
      sidebar: ["업무에서 ChatGPT란", "책임 있는 사용 규칙", "좋은 프롬프트 작성법", "부서별 활용 사례", "권장 내부 정책", "이번 주 시작 체크리스트"]
    }
  },
  "guia-automatizar-atencion-cliente-con-ia.html": {
    es: { label: "Guia Tecnotitan / IA para soporte", title: "Automatizar atencion al cliente con IA sin perder calidad humana", intro: "Una guia para empresas que quieren responder mas rapido, ordenar solicitudes y escalar casos complejos con agentes inteligentes.", meta: ["Actualizado: junio 2026", "Lectura: 16 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver Call Center AI"], sidebarTitle: "En esta guia", sidebar: ["Modelo operativo", "Datos y conocimiento", "Escalamiento humano", "Metricas", "Checklist"] },
    en: { label: "Tecnotitan Guide / AI support", title: "Automate customer service with AI without losing human quality", intro: "A guide for companies that want faster responses, cleaner request handling and smarter escalation with AI agents.", meta: ["Updated: June 2026", "Reading time: 16 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View Call Center AI"], sidebarTitle: "In this guide", sidebar: ["Operating model", "Data and knowledge", "Human escalation", "Metrics", "Checklist"] },
    pt: { label: "Guia Tecnotitan / IA para suporte", title: "Automatizar atendimento ao cliente com IA sem perder qualidade humana", intro: "Guia para empresas que querem responder mais rapido, organizar solicitacoes e escalar casos complexos com agentes inteligentes.", meta: ["Atualizado: junho de 2026", "Leitura: 16 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver Call Center AI"], sidebarTitle: "Neste guia", sidebar: ["Modelo operacional", "Dados e conhecimento", "Escalamento humano", "Metricas", "Checklist"] },
    zh: { label: "Tecnotitan 指南 / AI 客服", title: "用 AI 自动化客户服务，同时保留人工服务质量", intro: "帮助企业更快响应、整理请求并用智能体升级复杂案例的指南。", meta: ["更新：2026 年 6 月", "阅读时间：16 分钟", "可下载 PDF"], actions: ["下载 PDF", "保存为 PDF", "分享指南", "查看 Call Center AI"], sidebarTitle: "本指南内容", sidebar: ["运营模型", "数据与知识", "人工升级", "指标", "清单"] },
    ja: { label: "Tecnotitan ガイド / AI サポート", title: "人の品質を保ちながら AI でカスタマーサービスを自動化する", intro: "AI エージェントで応答を速め、問い合わせを整理し、複雑な案件を引き継ぐためのガイドです。", meta: ["更新：2026年6月", "読了時間：16分", "PDF ダウンロード"], actions: ["PDF をダウンロード", "PDF として保存", "ガイドを共有", "Call Center AI を見る"], sidebarTitle: "このガイド", sidebar: ["運用モデル", "データと知識", "人への引き継ぎ", "指標", "チェックリスト"] },
    ko: { label: "Tecnotitan 가이드 / AI 지원", title: "고객 서비스 품질을 유지하며 AI로 자동화하기", intro: "AI 에이전트로 더 빠르게 응답하고 요청을 정리하며 복잡한 케이스를 사람에게 넘기는 가이드입니다.", meta: ["업데이트: 2026년 6월", "읽는 시간: 16분", "PDF 다운로드"], actions: ["PDF 다운로드", "PDF로 저장", "가이드 공유", "Call Center AI 보기"], sidebarTitle: "이 가이드", sidebar: ["운영 모델", "데이터와 지식", "사람 에스컬레이션", "지표", "체크리스트"] }
  },
  "guia-software-empresarial-para-pymes.html": {
    es: { label: "Guia Tecnotitan / Software empresarial", title: "Software empresarial para pymes: como elegir sin comprar problemas", intro: "Una guia para evaluar sistemas, costos, integraciones, datos y adopcion antes de invertir en una plataforma.", meta: ["Actualizado: junio 2026", "Lectura: 15 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver Tecnotitan OS"], sidebarTitle: "En esta guia", sidebar: ["Diagnostico", "Compra vs construccion", "Integraciones", "Seguridad", "Checklist"] },
    en: { label: "Tecnotitan Guide / Business software", title: "Business software for SMBs: how to choose without buying problems", intro: "A guide to evaluate systems, costs, integrations, data and adoption before investing in a platform.", meta: ["Updated: June 2026", "Reading time: 15 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View Tecnotitan OS"], sidebarTitle: "In this guide", sidebar: ["Diagnosis", "Buy vs build", "Integrations", "Security", "Checklist"] },
    pt: { label: "Guia Tecnotitan / Software empresarial", title: "Software empresarial para pymes: como escolher sem comprar problemas", intro: "Guia para avaliar sistemas, custos, integracoes, dados e adocao antes de investir em uma plataforma.", meta: ["Atualizado: junho de 2026", "Leitura: 15 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver Tecnotitan OS"], sidebarTitle: "Neste guia", sidebar: ["Diagnostico", "Comprar vs construir", "Integracoes", "Seguranca", "Checklist"] },
    zh: { label: "Tecnotitan 指南 / 企业软件", title: "中小企业业务软件：如何选择而不是购买麻烦", intro: "在投资平台之前评估系统、成本、集成、数据和采用情况的指南。", meta: ["更新：2026 年 6 月", "阅读时间：15 分钟", "可下载 PDF"], actions: ["下载 PDF", "保存为 PDF", "分享指南", "查看 Tecnotitan OS"], sidebarTitle: "本指南内容", sidebar: ["诊断", "购买或构建", "集成", "安全", "清单"] },
    ja: { label: "Tecnotitan ガイド / 業務ソフトウェア", title: "中小企業向け業務ソフトウェア：問題を買わない選び方", intro: "プラットフォーム投資前に、システム、コスト、連携、データ、定着を評価するためのガイドです。", meta: ["更新：2026年6月", "読了時間：15分", "PDF ダウンロード"], actions: ["PDF をダウンロード", "PDF として保存", "ガイドを共有", "Tecnotitan OS を見る"], sidebarTitle: "このガイド", sidebar: ["診断", "購入 vs 構築", "連携", "セキュリティ", "チェックリスト"] },
    ko: { label: "Tecnotitan 가이드 / 업무 소프트웨어", title: "중소기업용 업무 소프트웨어: 문제를 사지 않는 선택법", intro: "플랫폼 투자 전에 시스템, 비용, 통합, 데이터, 도입을 평가하는 가이드입니다.", meta: ["업데이트: 2026년 6월", "읽는 시간: 15분", "PDF 다운로드"], actions: ["PDF 다운로드", "PDF로 저장", "가이드 공유", "Tecnotitan OS 보기"], sidebarTitle: "이 가이드", sidebar: ["진단", "구매 vs 구축", "통합", "보안", "체크리스트"] }
  },
  "guia-prompts-chatgpt-ventas-b2b.html": {
    es: { label: "Guia Tecnotitan / Ventas con IA", title: "Prompts de ChatGPT para ventas B2B que no suenan genericos", intro: "Una biblioteca practica para investigar cuentas, preparar reuniones, responder objeciones y escribir seguimiento comercial con mas precision.", meta: ["Actualizado: junio 2026", "Lectura: 14 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver Copiloto Pyme"], sidebarTitle: "En esta guia", sidebar: ["Investigacion", "Correos", "Objeciones", "Reuniones", "Seguimiento"] },
    en: { label: "Tecnotitan Guide / AI sales", title: "ChatGPT prompts for B2B sales that do not sound generic", intro: "A practical library for account research, meeting prep, objection handling and sharper commercial follow-up.", meta: ["Updated: June 2026", "Reading time: 14 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View Copiloto Pyme"], sidebarTitle: "In this guide", sidebar: ["Research", "Emails", "Objections", "Meetings", "Follow-up"] },
    pt: { label: "Guia Tecnotitan / Vendas com IA", title: "Prompts de ChatGPT para vendas B2B que nao soam genericos", intro: "Biblioteca pratica para pesquisar contas, preparar reunioes, responder objecoes e fazer acompanhamento comercial.", meta: ["Atualizado: junho de 2026", "Leitura: 14 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver Copiloto Pyme"], sidebarTitle: "Neste guia", sidebar: ["Pesquisa", "Emails", "Objecoes", "Reunioes", "Acompanhamento"] },
    zh: { label: "Tecnotitan 指南 / AI 销售", title: "不会显得模板化的 B2B 销售 ChatGPT 提示词", intro: "用于客户研究、会议准备、异议处理和更精准商业跟进的实用提示词库。", meta: ["更新：2026 年 6 月", "阅读时间：14 分钟", "可下载 PDF"], actions: ["下载 PDF", "保存为 PDF", "分享指南", "查看 Copiloto Pyme"], sidebarTitle: "本指南内容", sidebar: ["研究", "邮件", "异议", "会议", "跟进"] },
    ja: { label: "Tecnotitan ガイド / AI 営業", title: "汎用的に聞こえない B2B 営業向け ChatGPT プロンプト", intro: "アカウント調査、商談準備、反論対応、フォローアップをより具体的にするプロンプト集です。", meta: ["更新：2026年6月", "読了時間：14分", "PDF ダウンロード"], actions: ["PDF をダウンロード", "PDF として保存", "ガイドを共有", "Copiloto Pyme を見る"], sidebarTitle: "このガイド", sidebar: ["調査", "メール", "反論", "商談", "フォロー"] },
    ko: { label: "Tecnotitan 가이드 / AI 영업", title: "뻔하게 들리지 않는 B2B 영업용 ChatGPT 프롬프트", intro: "계정 조사, 미팅 준비, 반론 처리, 더 정확한 영업 후속 조치를 위한 실용 프롬프트 모음입니다.", meta: ["업데이트: 2026년 6월", "읽는 시간: 14분", "PDF 다운로드"], actions: ["PDF 다운로드", "PDF로 저장", "가이드 공유", "Copiloto Pyme 보기"], sidebarTitle: "이 가이드", sidebar: ["조사", "이메일", "반론", "미팅", "후속 조치"] }
  },
  "guia-gobernanza-ia-empresas.html": {
    es: { label: "Guia Tecnotitan / Gobernanza de IA", title: "Gobernanza de IA para empresas: como innovar con control", intro: "Una guia para crear reglas, responsables, permisos y controles antes de conectar IA a procesos reales.", meta: ["Actualizado: junio 2026", "Lectura: 15 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver servicios IA"], sidebarTitle: "En esta guia", sidebar: ["Politica", "Datos", "Riesgos", "Responsables", "Checklist"] },
    en: { label: "Tecnotitan Guide / AI governance", title: "AI governance for companies: innovate with control", intro: "A guide for creating rules, owners, permissions and controls before connecting AI to real business processes.", meta: ["Updated: June 2026", "Reading time: 15 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View AI services"], sidebarTitle: "In this guide", sidebar: ["Policy", "Data", "Risks", "Owners", "Checklist"] },
    pt: { label: "Guia Tecnotitan / Governanca de IA", title: "Governanca de IA para empresas: inovar com controle", intro: "Guia para criar regras, responsaveis, permissoes e controles antes de conectar IA a processos reais.", meta: ["Atualizado: junho de 2026", "Leitura: 15 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver servicos IA"], sidebarTitle: "Neste guia", sidebar: ["Politica", "Dados", "Riscos", "Responsaveis", "Checklist"] },
    zh: { label: "Tecnotitan 指南 / AI 治理", title: "企业 AI 治理：在控制中创新", intro: "在将 AI 连接到真实业务流程之前，建立规则、负责人、权限和控制。", meta: ["更新：2026 年 6 月", "阅读时间：15 分钟", "可下载 PDF"], actions: ["下载 PDF", "保存为 PDF", "分享指南", "查看 AI 服务"], sidebarTitle: "本指南内容", sidebar: ["政策", "数据", "风险", "负责人", "清单"] },
    ja: { label: "Tecnotitan ガイド / AI ガバナンス", title: "企業向け AI ガバナンス：管理しながら革新する", intro: "AI を業務プロセスに接続する前に、ルール、責任者、権限、管理を作るためのガイドです。", meta: ["更新：2026年6月", "読了時間：15分", "PDF ダウンロード"], actions: ["PDF をダウンロード", "PDF として保存", "ガイドを共有", "AI サービスを見る"], sidebarTitle: "このガイド", sidebar: ["ポリシー", "データ", "リスク", "責任者", "チェックリスト"] },
    ko: { label: "Tecnotitan 가이드 / AI 거버넌스", title: "기업 AI 거버넌스: 통제 속에서 혁신하기", intro: "AI를 실제 업무 프로세스에 연결하기 전에 규칙, 책임자, 권한, 통제를 만드는 가이드입니다.", meta: ["업데이트: 2026년 6월", "읽는 시간: 15분", "PDF 다운로드"], actions: ["PDF 다운로드", "PDF로 저장", "가이드 공유", "AI 서비스 보기"], sidebarTitle: "이 가이드", sidebar: ["정책", "데이터", "위험", "책임자", "체크리스트"] }
  },
  "guia-roi-automatizacion-ia.html": {
    es: { label: "Guia Tecnotitan / ROI de IA", title: "ROI de automatizacion con IA: como medir valor real", intro: "Una guia para priorizar automatizaciones por impacto, costo, riesgo y capacidad de adopcion.", meta: ["Actualizado: junio 2026", "Lectura: 14 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver servicios"], sidebarTitle: "En esta guia", sidebar: ["Formula", "Costos", "Impacto", "Tablero", "Checklist"] },
    en: { label: "Tecnotitan Guide / AI ROI", title: "AI automation ROI: how to measure real value", intro: "A guide to prioritize automations by impact, cost, risk and adoption capacity.", meta: ["Updated: June 2026", "Reading time: 14 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View services"], sidebarTitle: "In this guide", sidebar: ["Formula", "Costs", "Impact", "Dashboard", "Checklist"] },
    pt: { label: "Guia Tecnotitan / ROI de IA", title: "ROI de automacao com IA: como medir valor real", intro: "Guia para priorizar automacoes por impacto, custo, risco e capacidade de adocao.", meta: ["Atualizado: junho de 2026", "Leitura: 14 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver servicos"], sidebarTitle: "Neste guia", sidebar: ["Formula", "Custos", "Impacto", "Painel", "Checklist"] },
    zh: { label: "Tecnotitan 指南 / AI ROI", title: "AI 自动化 ROI：如何衡量真实价值", intro: "按影响、成本、风险和采用能力优先排序自动化项目。", meta: ["更新：2026 年 6 月", "阅读时间：14 分钟", "可下载 PDF"], actions: ["下载 PDF", "保存为 PDF", "分享指南", "查看服务"], sidebarTitle: "本指南内容", sidebar: ["公式", "成本", "影响", "看板", "清单"] },
    ja: { label: "Tecnotitan ガイド / AI ROI", title: "AI 自動化 ROI：本当の価値を測る方法", intro: "影響、コスト、リスク、定着可能性で自動化を優先順位付けするためのガイドです。", meta: ["更新：2026年6月", "読了時間：14分", "PDF ダウンロード"], actions: ["PDF をダウンロード", "PDF として保存", "ガイドを共有", "サービスを見る"], sidebarTitle: "このガイド", sidebar: ["式", "コスト", "影響", "ダッシュボード", "チェックリスト"] },
    ko: { label: "Tecnotitan 가이드 / AI ROI", title: "AI 자동화 ROI: 실제 가치를 측정하는 법", intro: "영향, 비용, 위험, 도입 가능성으로 자동화를 우선순위화하는 가이드입니다.", meta: ["업데이트: 2026년 6월", "읽는 시간: 14분", "PDF 다운로드"], actions: ["PDF 다운로드", "PDF로 저장", "가이드 공유", "서비스 보기"], sidebarTitle: "이 가이드", sidebar: ["공식", "비용", "영향", "대시보드", "체크리스트"] }
  },
  "guia-crm-ia-ventas-soporte.html": {
    es: { label: "Guia Tecnotitan / CRM con IA", title: "CRM con IA para ventas y soporte: menos registros, mas decisiones", intro: "Una guia para conectar seguimiento comercial, atencion, datos y automatizacion inteligente.", meta: ["Actualizado: junio 2026", "Lectura: 13 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver Copiloto Pyme"], sidebarTitle: "En esta guia", sidebar: ["Datos", "Seguimiento", "Agentes", "Reportes", "Checklist"] },
    en: { label: "Tecnotitan Guide / AI CRM", title: "AI CRM for sales and support: fewer records, better decisions", intro: "A guide to connect commercial follow-up, support, data and intelligent automation.", meta: ["Updated: June 2026", "Reading time: 13 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View Copiloto Pyme"], sidebarTitle: "In this guide", sidebar: ["Data", "Follow-up", "Agents", "Reports", "Checklist"] },
    pt: { label: "Guia Tecnotitan / CRM com IA", title: "CRM com IA para vendas e suporte: menos registros, mais decisoes", intro: "Guia para conectar acompanhamento comercial, atendimento, dados e automacao inteligente.", meta: ["Atualizado: junho de 2026", "Leitura: 13 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver Copiloto Pyme"], sidebarTitle: "Neste guia", sidebar: ["Dados", "Acompanhamento", "Agentes", "Relatorios", "Checklist"] },
    zh: { label: "Tecnotitan 指南 / AI CRM", title: "销售与支持 AI CRM：少填记录，多做决策", intro: "连接销售跟进、客户支持、数据和智能自动化的指南。", meta: ["更新：2026 年 6 月", "阅读时间：13 分钟", "可下载 PDF"], actions: ["下载 PDF", "保存为 PDF", "分享指南", "查看 Copiloto Pyme"], sidebarTitle: "本指南内容", sidebar: ["数据", "跟进", "智能体", "报告", "清单"] },
    ja: { label: "Tecnotitan ガイド / AI CRM", title: "営業とサポートのための AI CRM：入力を減らし意思決定を増やす", intro: "営業フォロー、サポート、データ、インテリジェント自動化をつなぐガイドです。", meta: ["更新：2026年6月", "読了時間：13分", "PDF ダウンロード"], actions: ["PDF をダウンロード", "PDF として保存", "ガイドを共有", "Copiloto Pyme を見る"], sidebarTitle: "このガイド", sidebar: ["データ", "フォロー", "エージェント", "レポート", "チェックリスト"] },
    ko: { label: "Tecnotitan 가이드 / AI CRM", title: "영업과 지원을 위한 AI CRM: 기록은 줄이고 결정은 늘리기", intro: "영업 후속 조치, 지원, 데이터, 지능형 자동화를 연결하는 가이드입니다.", meta: ["업데이트: 2026년 6월", "읽는 시간: 13분", "PDF 다운로드"], actions: ["PDF 다운로드", "PDF로 저장", "가이드 공유", "Copiloto Pyme 보기"], sidebarTitle: "이 가이드", sidebar: ["데이터", "후속 조치", "에이전트", "보고서", "체크리스트"] }
  },
  "guia-roadmap-transformacion-digital-pymes.html": {
    es: { label: "Guia Tecnotitan / Transformacion digital", title: "Roadmap de transformacion digital para pymes en 90 dias", intro: "Una guia para ordenar tecnologia, procesos, datos e IA con prioridades ejecutables.", meta: ["Actualizado: junio 2026", "Lectura: 16 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver transformacion"], sidebarTitle: "En esta guia", sidebar: ["Diagnostico", "Prioridades", "90 dias", "Adopcion", "Checklist"] },
    en: { label: "Tecnotitan Guide / Digital transformation", title: "Digital transformation roadmap for SMBs in 90 days", intro: "A guide to organize technology, processes, data and AI into executable priorities.", meta: ["Updated: June 2026", "Reading time: 16 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View transformation"], sidebarTitle: "In this guide", sidebar: ["Diagnosis", "Priorities", "90 days", "Adoption", "Checklist"] },
    pt: { label: "Guia Tecnotitan / Transformacao digital", title: "Roadmap de transformacao digital para pymes em 90 dias", intro: "Guia para organizar tecnologia, processos, dados e IA com prioridades executaveis.", meta: ["Atualizado: junho de 2026", "Leitura: 16 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver transformacao"], sidebarTitle: "Neste guia", sidebar: ["Diagnostico", "Prioridades", "90 dias", "Adocao", "Checklist"] },
    zh: { label: "Tecnotitan 指南 / 数字化转型", title: "中小企业 90 天数字化转型路线图", intro: "将技术、流程、数据和 AI 整理为可执行优先级的指南。", meta: ["更新：2026 年 6 月", "阅读时间：16 分钟", "可下载 PDF"], actions: ["下载 PDF", "保存为 PDF", "分享指南", "查看转型服务"], sidebarTitle: "本指南内容", sidebar: ["诊断", "优先级", "90 天", "采用", "清单"] },
    ja: { label: "Tecnotitan ガイド / デジタル変革", title: "中小企業向け 90 日デジタル変革ロードマップ", intro: "技術、業務、データ、AI を実行可能な優先順位に整理するガイドです。", meta: ["更新：2026年6月", "読了時間：16分", "PDF ダウンロード"], actions: ["PDF をダウンロード", "PDF として保存", "ガイドを共有", "変革サービスを見る"], sidebarTitle: "このガイド", sidebar: ["診断", "優先順位", "90日", "定着", "チェックリスト"] },
    ko: { label: "Tecnotitan 가이드 / 디지털 전환", title: "중소기업을 위한 90일 디지털 전환 로드맵", intro: "기술, 프로세스, 데이터, AI를 실행 가능한 우선순위로 정리하는 가이드입니다.", meta: ["업데이트: 2026년 6월", "읽는 시간: 16분", "PDF 다운로드"], actions: ["PDF 다운로드", "PDF로 저장", "가이드 공유", "전환 서비스 보기"], sidebarTitle: "이 가이드", sidebar: ["진단", "우선순위", "90일", "도입", "체크리스트"] }
  }
};

const guideEditorialTranslations = {
  es: {
    authorLabel: "Autor institucional",
    authorName: "Tecnotitan Editorial",
    authorText: "Equipo de software, IA y transformacion tecnologica.",
    updatedLabel: "Actualizado",
    updatedText: "Junio de 2026",
    reviewedLabel: "Revisado por",
    reviewedText: "Direccion de producto y consultoria IA.",
    methodLabel: "Metodo editorial",
    methodLink: "Politica editorial y metodologia",
    sidebarTitle: "Criterio editorial",
    sidebarText: "Guias creadas por Tecnotitan con experiencia practica, revision humana y enfoque empresarial.",
    sectionKicker: "Confianza editorial",
    sectionTitle: "Como revisamos esta guia",
    cards: [
      ["Autor institucional", "La guia es publicada por Tecnotitan Editorial, el equipo que documenta aprendizaje de software, IA, automatizacion y transformacion tecnologica."],
      ["Revision humana", "El contenido se revisa para mantener claridad, utilidad practica, limites de uso de IA y coherencia con servicios reales de Tecnotitan."],
      ["Fuentes y metodologia", "Usamos experiencia operativa, criterios de implementacion, documentacion tecnica y mejores practicas publicas cuando aplica."],
      ["Actualizaciones", "Las guias se actualizan cuando cambian productos, tecnologias, riesgos, procesos o recomendaciones relevantes para empresas."]
    ],
    note: "Estas guias no reemplazan asesoria legal, financiera o tecnica especializada. Su objetivo es ayudar a lideres y equipos a tomar mejores decisiones antes de implementar tecnologia.",
    aboutUrl: "sobre-guias-tecnotitan.html"
  },
  en: {
    authorLabel: "Institutional author",
    authorName: "Tecnotitan Editorial",
    authorText: "Software, AI and technology transformation team.",
    updatedLabel: "Updated",
    updatedText: "June 2026",
    reviewedLabel: "Reviewed by",
    reviewedText: "Product leadership and AI consulting.",
    methodLabel: "Editorial method",
    methodLink: "Editorial policy and methodology",
    sidebarTitle: "Editorial standard",
    sidebarText: "Guides created by Tecnotitan with practical experience, human review and a business implementation lens.",
    sectionKicker: "Editorial trust",
    sectionTitle: "How we review this guide",
    cards: [
      ["Institutional author", "The guide is published by Tecnotitan Editorial, the team that documents software, AI, automation and technology transformation learning."],
      ["Human review", "Content is reviewed for clarity, practical usefulness, responsible AI limits and alignment with real Tecnotitan services."],
      ["Sources and methodology", "We use operational experience, implementation criteria, technical documentation and public best practices when relevant."],
      ["Updates", "Guides are updated when products, technologies, risks, processes or business recommendations change."]
    ],
    note: "These guides do not replace specialized legal, financial or technical advice. They help leaders and teams make better decisions before implementing technology.",
    aboutUrl: "guides/about-tecnotitan-guides.html"
  },
  pt: {
    authorLabel: "Autor institucional",
    authorName: "Tecnotitan Editorial",
    authorText: "Equipe de software, IA e transformacao tecnologica.",
    updatedLabel: "Atualizado",
    updatedText: "Junho de 2026",
    reviewedLabel: "Revisado por",
    reviewedText: "Lideranca de produto e consultoria de IA.",
    methodLabel: "Metodo editorial",
    methodLink: "Politica editorial e metodologia",
    sidebarTitle: "Criterio editorial",
    sidebarText: "Guias criados pela Tecnotitan com experiencia pratica, revisao humana e foco empresarial.",
    sectionKicker: "Confianca editorial",
    sectionTitle: "Como revisamos este guia",
    cards: [
      ["Autor institucional", "O guia e publicado pela Tecnotitan Editorial, equipe que documenta aprendizados de software, IA, automacao e transformacao tecnologica."],
      ["Revisao humana", "O conteudo e revisado para manter clareza, utilidade pratica, limites responsaveis de IA e alinhamento com servicos reais."],
      ["Fontes e metodologia", "Usamos experiencia operacional, criterios de implementacao, documentacao tecnica e boas praticas publicas quando aplicavel."],
      ["Atualizacoes", "Os guias sao atualizados quando produtos, tecnologias, riscos, processos ou recomendacoes empresariais mudam."]
    ],
    note: "Estes guias nao substituem assessoria legal, financeira ou tecnica especializada. Eles ajudam equipes a decidir melhor antes de implementar tecnologia.",
    aboutUrl: "guias/sobre-guias-tecnotitan.html"
  },
  zh: {
    authorLabel: "机构作者",
    authorName: "Tecnotitan Editorial",
    authorText: "软件、人工智能与技术转型团队。",
    updatedLabel: "更新日期",
    updatedText: "2026 年 6 月",
    reviewedLabel: "审核",
    reviewedText: "产品负责人和 AI 咨询团队。",
    methodLabel: "编辑方法",
    methodLink: "编辑政策与方法",
    sidebarTitle: "编辑标准",
    sidebarText: "Tecnotitan 基于实践经验、人工审核和企业实施视角创建指南。",
    sectionKicker: "编辑可信度",
    sectionTitle: "我们如何审核本指南",
    cards: [
      ["机构作者", "本指南由 Tecnotitan Editorial 发布，记录软件、AI、自动化和技术转型经验。"],
      ["人工审核", "内容经过人工审核，确保清晰、实用、负责任并符合 Tecnotitan 的真实服务。"],
      ["来源与方法", "我们结合运营经验、实施标准、技术文档和公开最佳实践。"],
      ["更新机制", "当产品、技术、风险、流程或企业建议发生变化时，我们会更新指南。"]
    ],
    note: "这些指南不替代专业法律、财务或技术建议，目的是帮助团队在实施技术前做出更好的决策。",
    aboutUrl: "guides/about-tecnotitan-guides.html"
  },
  ja: {
    authorLabel: "機関著者",
    authorName: "Tecnotitan Editorial",
    authorText: "ソフトウェア、AI、技術変革チーム。",
    updatedLabel: "更新日",
    updatedText: "2026年6月",
    reviewedLabel: "レビュー",
    reviewedText: "プロダクト責任者とAIコンサルティングチーム。",
    methodLabel: "編集方法",
    methodLink: "編集ポリシーと方法論",
    sidebarTitle: "編集基準",
    sidebarText: "Tecnotitanのガイドは実務経験、人によるレビュー、企業導入の視点で作成されています。",
    sectionKicker: "編集上の信頼性",
    sectionTitle: "このガイドのレビュー方法",
    cards: [
      ["機関著者", "このガイドは、ソフトウェア、AI、自動化、技術変革の学びを記録するTecnotitan Editorialが公開しています。"],
      ["人によるレビュー", "明確さ、実用性、責任あるAI利用、Tecnotitanの実サービスとの整合性を確認します。"],
      ["情報源と方法", "実務経験、導入基準、技術文書、公開ベストプラクティスを必要に応じて参照します。"],
      ["更新", "製品、技術、リスク、プロセス、企業向け推奨事項が変わると更新します。"]
    ],
    note: "これらのガイドは専門的な法務、財務、技術助言の代替ではありません。技術導入前の意思決定を支援するものです。",
    aboutUrl: "guides/about-tecnotitan-guides.html"
  },
  ko: {
    authorLabel: "기관 저자",
    authorName: "Tecnotitan Editorial",
    authorText: "소프트웨어, AI, 기술 전환 팀.",
    updatedLabel: "업데이트",
    updatedText: "2026년 6월",
    reviewedLabel: "검토",
    reviewedText: "제품 리더십 및 AI 컨설팅 팀.",
    methodLabel: "편집 방법",
    methodLink: "편집 정책 및 방법론",
    sidebarTitle: "편집 기준",
    sidebarText: "Tecnotitan 가이드는 실무 경험, 인간 검토, 기업 구현 관점으로 제작됩니다.",
    sectionKicker: "편집 신뢰",
    sectionTitle: "이 가이드를 검토하는 방법",
    cards: [
      ["기관 저자", "이 가이드는 소프트웨어, AI, 자동화, 기술 전환 학습을 문서화하는 Tecnotitan Editorial이 발행합니다."],
      ["인간 검토", "명확성, 실용성, 책임 있는 AI 사용, 실제 Tecnotitan 서비스와의 일관성을 검토합니다."],
      ["출처와 방법론", "운영 경험, 구현 기준, 기술 문서, 공개 모범 사례를 필요에 따라 활용합니다."],
      ["업데이트", "제품, 기술, 위험, 프로세스 또는 비즈니스 권장 사항이 바뀌면 가이드를 업데이트합니다."]
    ],
    note: "이 가이드는 전문 법률, 재무 또는 기술 자문을 대체하지 않습니다. 기술 구현 전 더 나은 결정을 돕기 위한 자료입니다.",
    aboutUrl: "guides/about-tecnotitan-guides.html"
  }
};

function updateGuideEditorial(language) {
  if (!document.querySelector(".guide-page")) {
    return;
  }

  const editorial = guideEditorialTranslations[language] || guideEditorialTranslations.es;
  const prefix = isGuideArticleRoute ? "../" : pathLanguage ? "./" : "./";
  const aboutHref = isGuideArticleRoute ? `./${editorial.aboutUrl.split("/").pop()}` : `${prefix}${editorial.aboutUrl}`;

  document.querySelectorAll("[data-editorial-field]").forEach((field) => {
    const key = field.dataset.editorialField;
    if (editorial[key]) {
      field.textContent = editorial[key];
    }
  });

  document.querySelectorAll("[data-editorial-method-link]").forEach((link) => {
    link.textContent = editorial.methodLink;
    link.setAttribute("href", aboutHref);
  });

  const sidebar = document.querySelector("[data-guide-editorial-sidebar]");
  if (sidebar) {
    setText("strong", editorial.sidebarTitle, sidebar);
    setText("p", editorial.sidebarText, sidebar);
  }

  const eeat = document.querySelector("[data-guide-eeat]");
  if (eeat) {
    setText(".section-kicker", editorial.sectionKicker, eeat);
    setText("h2", editorial.sectionTitle, eeat);
    eeat.querySelectorAll(".guide-eeat-grid article").forEach((card, index) => {
      const copy = editorial.cards[index];
      if (copy) {
        setText("h3", copy[0], card);
        setText("p", copy[1], card);
      }
    });
    setText(".guide-eeat-note", editorial.note, eeat);
  }
}

function updateGuideChrome(language) {
  const guide = guideChromeTranslations[pageName]?.[language] || guideChromeTranslations[pageName]?.es;
  if (!guide) {
    return;
  }

  const heroRoot = document.querySelector(".guide-hero-inner > [data-guide-lang]") || document.querySelector(".guide-hero-inner");
  document.querySelectorAll(".guide-hero-inner > [data-guide-lang]").forEach((block, index) => {
    block.hidden = index !== 0;
  });
  setText(".page-label", guide.label, heroRoot);
  setText("h1", guide.title, heroRoot);
  setText("p:not(.page-label)", guide.intro, heroRoot);

  document.querySelectorAll(".guide-meta span").forEach((item, index) => {
    if (guide.meta[index]) {
      item.textContent = guide.meta[index];
    }
  });

  document.querySelectorAll(".guide-actions .button").forEach((item, index) => {
    if (guide.actions[index]) {
      item.textContent = guide.actions[index];
    }
  });

  const sidebarRoot = document.querySelector(".guide-sidebar > [data-guide-lang]") || document.querySelector(".guide-sidebar");
  document.querySelectorAll(".guide-sidebar > [data-guide-lang]").forEach((block, index) => {
    block.hidden = index !== 0;
  });
  setText("p", guide.sidebarTitle, sidebarRoot);
  sidebarRoot?.querySelectorAll("nav a").forEach((item, index) => {
    if (guide.sidebar[index]) {
      item.textContent = guide.sidebar[index];
    }
  });
}

function applyLanguage(language) {
  activeLanguage = language;
  localStorage.setItem("tecnotitan-language", language);

  document.documentElement.lang = language;

  if (isGuideHubRoute || isGuideArticleRoute) {
    document.querySelectorAll(".language-switcher button").forEach((button) => {
      const isCurrent = button.dataset.language === language;
      button.classList.toggle("is-active", isCurrent);
      button.setAttribute("aria-pressed", String(isCurrent));
      button.setAttribute("aria-label", `${languageNames[button.dataset.language]}${isCurrent ? " activo" : ""}`);
    });
    updateGuideChrome(language);
    updateGuideEditorial(language);
    document.querySelectorAll(".guide-content [data-guide-lang]").forEach((section) => {
      const isCurrent = section.dataset.guideLang === language;
      section.hidden = !isCurrent;
    });
    carryLanguageAcrossLinks(language);
    return;
  }

  const dictionary = languages[language] || languages.es;
  const page = dictionary.pages[pageName] || dictionary.pages["index.html"];
  const content = page.content;

  syncBrowserLanguagePath(language);

  setSeoMetadata(page, language);
  injectGlobalStructuredData(language);
  injectBreadcrumbStructuredData(pageName, page.title, language);
  injectServiceStructuredData(pageName);
  injectProductStructuredData(pageName);

  if (!content) {
    carryLanguageAcrossLinks(language);
    return;
  }

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

  const footerMeta = document.querySelector(".footer-meta");
  const footerLegal = document.querySelector(".footer-legal");
  if (footerMeta && dictionary.footerMeta) {
    setText("p:first-child", dictionary.footerMeta[0], footerMeta);
    setText("p:nth-child(2)", dictionary.footerMeta[1], footerMeta);
  }
  if (footerLegal && dictionary.footerMeta) {
    setText("p:first-child", dictionary.footerMeta[2], footerLegal);
    const legalLinks = footerLegal.querySelector("p:nth-child(2)");
    if (legalLinks) {
      const links = legalLinks.querySelectorAll("a");
      if (links.length >= 4) {
        legalLinks.innerHTML = "";
        legalLinks.append(links[0], " · ", links[1], " · ", links[2], " · ", links[3]);
        links[0].textContent = dictionary.footerMeta[3].split(" · ")[0];
        links[0].setAttribute("href", "./aviso-legal.html");
        links[1].textContent = "LinkedIn";
        links[2].textContent = "Facebook";
        links[3].textContent = "Instagram";
      }
    }
    setText("p:last-child", dictionary.footerMeta[4], footerLegal);
  }

  document.querySelectorAll(".nav a").forEach((link, index) => {
    if (dictionary.nav[index]) {
      link.textContent = dictionary.nav[index];
    }
  });

  const talentLabels = {
    es: "Talento",
    en: "Talent",
    pt: "Talento",
    zh: "人才",
    ja: "採用",
    ko: "인재"
  };

  const footerNavigation = document.querySelector(".footer nav");
  if (footerNavigation && !footerNavigation.querySelector('a[href="./trabaja-con-nosotros.html"]')) {
    const talentLink = document.createElement("a");
    talentLink.href = "./trabaja-con-nosotros.html";
    talentLink.textContent = talentLabels[language] || "Talento";
    const contactLink = footerNavigation.querySelector('a[href="./contacto.html"]');
    footerNavigation.insertBefore(talentLink, contactLink || null);
  }

  document.querySelectorAll(".footer nav a").forEach((link) => {
    const file = link.getAttribute("href")?.replace("./", "");
    const navFiles = [
      "index.html",
      "nosotros.html",
      "productos.html",
      "servicios.html",
      "guias.html",
      "divisiones.html",
      "inversionistas.html",
      "trabaja-con-nosotros.html",
      "contacto.html"
    ];
    const index = navFiles.indexOf(file);
    if (file === "trabaja-con-nosotros.html") {
      link.textContent = talentLabels[language] || "Talento";
    } else if (index >= 0) {
      const dictionaryIndex = index > 7 ? index - 1 : index;
      link.textContent = dictionary.nav[dictionaryIndex];
    }
  });

  const headerAction = document.querySelector(".header-action");
  if (headerAction) {
    headerAction.textContent = pageName === "contacto.html" ? dictionary.writeAction : dictionary.headerAction;
    if (pageName === "investor-deck.html") {
      headerAction.textContent = dictionary.deckUi[0];
    }
  }

  const deckPageLabels = {
    es: "Ver Investor Deck",
    en: "View Investor Deck",
    pt: "Ver Investor Deck",
    zh: "查看 Investor Deck",
    ja: "Investor Deckを見る",
    ko: "Investor Deck 보기"
  };

  if (headerAction && pageName !== "investor-deck.html" && !document.querySelector(".header-deck-action")) {
    const deckHeaderAction = document.createElement("a");
    deckHeaderAction.className = "header-action header-deck-action";
    deckHeaderAction.href = "./investor-deck.html";
    deckHeaderAction.textContent = deckPageLabels[language] || deckPageLabels.es;
    headerAction.insertAdjacentElement("afterend", deckHeaderAction);
  }

  const deckHeaderAction = document.querySelector(".header-deck-action");
  if (deckHeaderAction) {
    deckHeaderAction.textContent = deckPageLabels[language] || deckPageLabels.es;
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

  updateGuideChrome(language);
  updateGuideEditorial(language);

  document.querySelectorAll(".guide-content [data-guide-lang]").forEach((section) => {
    const isCurrent = section.dataset.guideLang === language;
    section.hidden = !isCurrent;
  });

  carryLanguageAcrossLinks(language);

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
    setText(".investor-cta-copy h2", content.investorCtaTitle);
    setText(".investor-cta-copy p", content.investorCtaText);
    setCards(".investor-cta-grid a", content.investorCtaCards);
    applyHomeVisualContent(language);
    setText("#gateway-title", content.gatewayTitle);
    setText(".gateway-copy p", content.gatewayText);
    setCards(".home-gateway .gateway-grid a", content.cards);
    return;
  }

  setText(".page-label", content.label);
  setTitleLines(".page-hero h1", content.titleLines);
  setText(".page-hero p:not(.page-label)", content.intro);
  if (pageName === "contacto.html") {
    const whatsAppLink = document.querySelector(".contact-whatsapp-link");
    if (whatsAppLink) {
      whatsAppLink.href = contactWhatsApp.href;
      whatsAppLink.textContent = contactWhatsApp.label;
    }
  }
  if (pageName === "investor-deck.html" && dictionary.deckUi) {
    setText(".page-hero .button-primary", dictionary.deckUi[1]);
    setText(".page-hero .button-secondary", dictionary.deckUi[2]);
    const downloadContent = deckDownloadContent[language] || deckDownloadContent.es;
    setText(".deck-download-copy h2", downloadContent.title);
    setText(".deck-download-copy p:not(.section-kicker)", downloadContent.text);
    setText(".deck-privacy-note", downloadContent.privacy);
    setCards(".deck-language-grid a", downloadContent.cards);
    applyDeckFileActionLabels(language);
    updateDeckViewer(language, { trackView: true });
  }
  if (pageName === "servicios.html") {
    applyServicePageContent(language, content);
    prefillServiceRequestForm();
    return;
  }
  setCards(
    pageName === "inversionistas.html"
      ? ".investor-path-grid article"
      : pageName === "divisiones.html"
        ? ".divisions-grid article"
        : ".page-grid article",
    content.cards
  );

  if (content.divisionThesisLabel) {
    setText(".division-thesis article:first-child span", content.divisionThesisLabel);
    setText(".division-thesis h2", content.divisionThesisTitle);
    document.querySelectorAll(".division-thesis article:last-child p").forEach((paragraph, index) => {
      if (content.divisionThesisParagraphs[index]) {
        paragraph.textContent = content.divisionThesisParagraphs[index];
      }
    });
  }

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

  if (content.leadershipTitle) {
    setText(".leadership-copy h2", content.leadershipTitle);
    setText(".leadership-copy p", content.leadershipText);
    setCards(".leadership-grid article", content.leadershipCards);
  }

  if (content.formTitle) {
    setText(".contact-form-copy h2", content.formTitle);
    setText(".contact-form-copy p", content.formText);
    document.querySelectorAll(".contact-form label:not(.newsletter-check):not(.form-honeypot) > span").forEach((label, index) => {
      if (content.formLabels[index]) {
        label.textContent = content.formLabels[index];
      }
    });
    setText("[data-newsletter-label]", content.formNewsletter);
    const interestSelect = document.querySelector('.contact-form select[name="Tipo de interes"]');
    if (interestSelect) {
      Array.from(interestSelect.options).forEach((option, index) => {
        if (content.formOptions[index]) {
          option.textContent = content.formOptions[index];
        }
      });
      const interestMap = {
        deck: "Investor deck",
        team: content.formOptions[4],
        call: content.formOptions[5]
      };
      const requestedInterest = new URLSearchParams(window.location.search).get("interest");
      const selectedLabel = interestMap[requestedInterest];
      if (selectedLabel) {
        Array.from(interestSelect.options).forEach((option) => {
          option.selected = option.textContent === selectedLabel;
        });
      }
    }
    setText(".contact-form button", content.formButton);
    const successMessage = document.querySelector("[data-form-success]");
    if (successMessage) {
      setText("strong", content.formSuccessTitle, successMessage);
      setText("p", content.formSuccessText, successMessage);
      if (new URLSearchParams(window.location.search).get("sent") === "1") {
        successMessage.hidden = false;
      }
    }
  }

  if (content.opportunityTitle) {
    setText(".opportunity-copy h2", content.opportunityTitle);
    setText(".opportunity-copy p", content.opportunityText);
    setCards(".opportunity-grid article", content.opportunityCards);
  }

  if (content.indicatorTitle) {
    setText(".indicator-copy h2", content.indicatorTitle);
    setText(".indicator-copy p", content.indicatorText);
    document.querySelectorAll(".indicator-strip article").forEach((metric, index) => {
      const item = content.indicatorMetrics[index];
      if (!item) {
        return;
      }
      setText("span", item[0], metric);
      setText("strong", item[1], metric);
      setText("p", item[2], metric);
    });
    setCards(".indicator-grid article", content.indicatorCards);
  }

  if (content.roadmapTitle) {
    setText(".roadmap-copy h2", content.roadmapTitle);
    setText(".roadmap-copy p", content.roadmapText);
    setCards(".roadmap-grid article", content.roadmapCards);
  }

  if (content.deckTitle) {
    setText(".investor-deck-copy h2", content.deckTitle);
    setText(".investor-deck-copy p", content.deckText);
    setCards(".investor-deck-grid article", content.deckCards);
    setText(".deck-action .button-primary", content.deckPageButton);
    setText(".deck-action .deck-request-link", content.deckButton);
  }

  if (content.investorCtaTitle) {
    setText(".investor-cta-copy h2", content.investorCtaTitle);
    setText(".investor-cta-copy p", content.investorCtaText);
    setCards(".investor-cta-grid a", content.investorCtaCards);
  }
}

function getCurrentFormContent(form) {
  const page = (languages[activeLanguage] || languages.es).pages[pageName] || languages.es.pages[pageName];
  if (form?.matches("[data-service-request-form]")) {
    const serviceForm = (servicePageTranslations[activeLanguage] || servicePageTranslations.es).form;
    const status = {
      es: ["Enviando...", "No se pudo enviar", "Intenta nuevamente o escribe directamente a info@tecnotitan.com."],
      en: ["Sending...", "Could not send", "Please try again or write directly to info@tecnotitan.com."],
      pt: ["Enviando...", "Não foi possível enviar", "Tente novamente ou escreva diretamente para info@tecnotitan.com."],
      zh: ["正在发送...", "无法发送", "请重试，或直接写信至 info@tecnotitan.com。"],
      ja: ["送信中...", "送信できませんでした", "もう一度お試しいただくか、info@tecnotitan.com へ直接ご連絡ください。"],
      ko: ["전송 중...", "전송할 수 없습니다", "다시 시도하거나 info@tecnotitan.com 으로 직접 연락해 주세요."]
    }[activeLanguage] || ["Enviando...", "No se pudo enviar", "Intenta nuevamente o escribe directamente a info@tecnotitan.com."];

    return {
      formButton: serviceForm.button,
      formSending: status[0],
      formSuccessTitle: serviceForm.successTitle,
      formSuccessText: serviceForm.successText,
      formErrorTitle: status[1],
      formErrorText: status[2]
    };
  }

  return {
    formButton: "Enviar a info@tecnotitan.com",
    formSending: "Enviando...",
    formSuccessTitle: "Solicitud enviada",
    formSuccessText: "Gracias. Recibimos tu mensaje y responderemos a info@tecnotitan.com.",
    formErrorTitle: "No se pudo enviar",
    formErrorText: "Intenta nuevamente o escribe directamente a info@tecnotitan.com.",
    ...(page?.content || {})
  };
}

function showFormMessage(form, title, text, isError = false) {
  const section = form.closest("section");
  const message = section?.querySelector("[data-form-success]");

  if (!message) {
    return;
  }

  setText("strong", title, message);
  setText("p", text, message);
  message.classList.toggle("is-error", isError);
  message.hidden = false;
}

function enhanceContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    if (form.dataset.enhanced === "true") {
      return;
    }

    form.dataset.enhanced = "true";
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const content = getCurrentFormContent(form);
      const button = form.querySelector('button[type="submit"]');
      const originalText = button?.textContent || content.formButton;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      payload.language = activeLanguage;
      payload.newsletter = formData.get("Newsletter") === "yes";

      if (button) {
        button.disabled = true;
        button.textContent = content.formSending || originalText;
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Contact request failed");
        }

        form.reset();
        showFormMessage(form, content.formSuccessTitle, content.formSuccessText, false);
      } catch (error) {
        showFormMessage(form, content.formErrorTitle, content.formErrorText, true);
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = originalText;
        }
      }
    });
  });
}

function prefillServiceRequestForm() {
  const serviceSelect = document.querySelector("[data-service-select]");

  if (!serviceSelect) {
    return;
  }

  const serviceMap = {
    ai: 1,
    software: 2,
    consultoria: 3,
    robotica: 4,
    videojuegos: 5,
    transformacion: 6
  };
  const requestedInterest = new URLSearchParams(window.location.search).get("interest");
  const selectedIndex = serviceMap[requestedInterest];

  if (!selectedIndex) {
    return;
  }

  Array.from(serviceSelect.options).forEach((option) => {
    option.selected = option.index === selectedIndex;
  });
}

function buildPrivacyConsent() {
  const storageKey = "tecnotitan-privacy-consent";

  if (localStorage.getItem(storageKey) === "accepted") {
    return;
  }

  const banner = document.createElement("aside");
  banner.className = "privacy-consent";
  banner.setAttribute("aria-label", "Consentimiento de privacidad");
  banner.innerHTML = `
    <p><strong>Privacidad</strong>Usamos métricas agregadas, geolocalización aproximada por país y formularios para mejorar Tecnotitan. No vendemos datos personales ni almacenamos IPs crudas.</p>
    <div class="privacy-consent-actions">
      <a href="./aviso-legal.html">Aviso legal</a>
      <button type="button">Aceptar</button>
    </div>
  `;

  banner.querySelector("button")?.addEventListener("click", () => {
    localStorage.setItem(storageKey, "accepted");
    banner.hidden = true;
  });

  document.body.appendChild(banner);
}

const guidePageMetadata = {
  es: {
    "guias.html": {
      title: "Guias Tecnotitan | IA, software y tecnologia para empresas",
      description: "Guias practicas de Tecnotitan para usar inteligencia artificial, software, automatizacion y tecnologia aplicada en el trabajo."
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "Como usar ChatGPT en el trabajo: guia practica para empresas | Tecnotitan",
      description: "Guia completa para usar ChatGPT en el trabajo: prompts, seguridad, ejemplos por area, politicas internas y casos de uso."
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "Automatizar atencion al cliente con IA: guia para empresas | Tecnotitan",
      description: "Guia para automatizar atencion al cliente con IA, agentes, escalamiento humano, metricas y flujos de soporte."
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "Software empresarial para pymes: guia de compra e implementacion | Tecnotitan",
      description: "Guia para elegir software empresarial para pymes: CRM, dashboards, automatizacion, integraciones y seguridad."
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "Prompts de ChatGPT para ventas B2B: guia practica | Tecnotitan",
      description: "Prompts de ChatGPT para prospeccion B2B, investigacion de cuentas, correos, objeciones, reuniones y seguimiento."
    }
  },
  en: {
    "guias.html": {
      title: "Tecnotitan Guides | AI, software and technology for companies",
      description: "Practical Tecnotitan guides for using artificial intelligence, software, automation and applied technology at work."
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "How to use ChatGPT at work: practical guide for companies | Tecnotitan",
      description: "A complete guide to using ChatGPT at work with prompts, safety rules, business examples, internal policies and use cases."
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "How to automate customer service with AI: business guide | Tecnotitan",
      description: "Guide to AI customer service automation with agents, human escalation, support metrics and operating workflows."
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "Business software for SMBs: buying and implementation guide | Tecnotitan",
      description: "Guide to choosing SMB software: CRM, dashboards, automation, integrations, security and adoption."
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "ChatGPT prompts for B2B sales: practical guide | Tecnotitan",
      description: "ChatGPT prompts for B2B prospecting, account research, sales emails, objections, meetings and follow-up."
    }
  },
  pt: {
    "guias.html": {
      title: "Guias Tecnotitan | IA, software e tecnologia para empresas",
      description: "Guias praticos da Tecnotitan para usar inteligencia artificial, software, automacao e tecnologia aplicada no trabalho."
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "Como usar ChatGPT no trabalho: guia pratica para empresas | Tecnotitan",
      description: "Guia completa para usar ChatGPT no trabalho com prompts, seguranca, exemplos por area, politicas internas e casos de uso."
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "Como automatizar atendimento ao cliente com IA: guia empresarial | Tecnotitan",
      description: "Guia para automatizar atendimento com IA, agentes, escalamento humano, metricas e fluxos de suporte."
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "Software empresarial para pymes: guia de compra e implementacao | Tecnotitan",
      description: "Guia para escolher software empresarial: CRM, dashboards, automacao, integracoes, seguranca e adocao."
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "Prompts de ChatGPT para vendas B2B: guia pratica | Tecnotitan",
      description: "Prompts para prospeccao B2B, pesquisa de contas, emails, objecoes, reunioes e acompanhamento."
    }
  },
  zh: {
    "guias.html": {
      title: "Tecnotitan 指南 | 企业 AI、软件与技术",
      description: "Tecnotitan 关于在工作中使用人工智能、软件、自动化和应用技术的实用指南。"
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "如何在工作中使用 ChatGPT：企业实用指南 | Tecnotitan",
      description: "关于在工作中安全、有效使用 ChatGPT 的企业指南，包含提示词、案例和内部政策。"
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "如何用 AI 自动化客户服务：企业指南 | Tecnotitan",
      description: "关于 AI 客服自动化、智能体、人工升级、支持指标和运营流程的指南。"
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "中小企业业务软件：采购与实施指南 | Tecnotitan",
      description: "选择中小企业软件的指南：CRM、仪表盘、自动化、集成、安全和采用。"
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "B2B 销售 ChatGPT 提示词：实用指南 | Tecnotitan",
      description: "用于 B2B 开发、客户研究、销售邮件、异议处理、会议和跟进的 ChatGPT 提示词。"
    }
  },
  ja: {
    "guias.html": {
      title: "Tecnotitan ガイド | 企業向け AI、ソフトウェア、テクノロジー",
      description: "仕事で AI、ソフトウェア、自動化、応用テクノロジーを活用するための Tecnotitan 実践ガイド。"
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "仕事で ChatGPT を使う方法：企業向け実践ガイド | Tecnotitan",
      description: "プロンプト、安全性、部門別の例、社内ポリシーを含む ChatGPT 活用ガイド。"
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "AI でカスタマーサービスを自動化する方法 | Tecnotitan",
      description: "AI エージェント、人への引き継ぎ、サポート指標、運用フローの実践ガイド。"
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "中小企業向け業務ソフトウェア：購入と導入ガイド | Tecnotitan",
      description: "CRM、ダッシュボード、自動化、連携、セキュリティ、定着を評価するガイド。"
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "B2B 営業向け ChatGPT プロンプト実践ガイド | Tecnotitan",
      description: "アカウント調査、営業メール、反論対応、商談準備、フォローアップのプロンプト。"
    }
  },
  ko: {
    "guias.html": {
      title: "Tecnotitan 가이드 | 기업용 AI, 소프트웨어와 기술",
      description: "업무에서 인공지능, 소프트웨어, 자동화와 응용 기술을 활용하기 위한 Tecnotitan 실무 가이드."
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "업무에서 ChatGPT를 사용하는 방법: 기업 실무 가이드 | Tecnotitan",
      description: "프롬프트, 보안, 부서별 사례, 내부 정책을 포함한 기업용 ChatGPT 활용 가이드."
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "AI로 고객 서비스를 자동화하는 방법: 기업 가이드 | Tecnotitan",
      description: "AI 상담, 사람 에스컬레이션, 지원 지표와 운영 흐름을 다루는 가이드."
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "중소기업용 업무 소프트웨어: 구매와 도입 가이드 | Tecnotitan",
      description: "CRM, 대시보드, 자동화, 통합, 보안, 도입을 평가하는 가이드."
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "B2B 영업을 위한 ChatGPT 프롬프트 실무 가이드 | Tecnotitan",
      description: "잠재고객 발굴, 계정 조사, 이메일, 반론 처리, 미팅과 후속 조치 프롬프트."
    }
  }
};

Object.entries(guidePageMetadata).forEach(([language, pages]) => {
  Object.entries(pages).forEach(([file, metadata]) => {
    languages[language].pages[file] = {
      ...metadata,
      content: {}
    };
  });
});

const extraGuidePageMetadata = {
  es: {
    "guia-gobernanza-ia-empresas.html": {
      title: "Gobernanza de IA para empresas: guia practica | Tecnotitan",
      description: "Guia de gobernanza de IA para empresas: politicas, datos, riesgos, aprobaciones, seguridad y adopcion responsable."
    },
    "guia-roi-automatizacion-ia.html": {
      title: "ROI de automatizacion con IA: guia para empresas | Tecnotitan",
      description: "Guia para calcular ROI de automatizacion con IA: costos, ahorro de tiempo, calidad, ingresos, riesgos y medicion."
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "CRM con IA para ventas y soporte: guia practica | Tecnotitan",
      description: "Guia para implementar CRM con IA en ventas y soporte: datos, seguimiento, agentes, reportes y adopcion comercial."
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "Roadmap de transformacion digital para pymes | Tecnotitan",
      description: "Guia para crear un roadmap de transformacion digital para pymes: diagnostico, prioridades, software, IA y metricas."
    }
  },
  en: {
    "guia-gobernanza-ia-empresas.html": {
      title: "AI governance for companies: practical guide | Tecnotitan",
      description: "Guide to AI governance for companies: policies, data, risks, approvals, security and responsible adoption."
    },
    "guia-roi-automatizacion-ia.html": {
      title: "AI automation ROI: business guide | Tecnotitan",
      description: "Guide to calculating AI automation ROI: costs, saved time, quality, revenue, risk and measurement."
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "AI CRM for sales and support: practical guide | Tecnotitan",
      description: "Guide to implementing AI CRM in sales and support: data, follow-up, agents, reports and adoption."
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "Digital transformation roadmap for SMBs | Tecnotitan",
      description: "Guide to creating a digital transformation roadmap for SMBs: diagnosis, priorities, software, AI and metrics."
    }
  },
  pt: {
    "guia-gobernanza-ia-empresas.html": {
      title: "Governanca de IA para empresas: guia pratica | Tecnotitan",
      description: "Guia de governanca de IA para empresas: politicas, dados, riscos, aprovacoes, seguranca e adocao responsavel."
    },
    "guia-roi-automatizacion-ia.html": {
      title: "ROI de automacao com IA: guia para empresas | Tecnotitan",
      description: "Guia para calcular ROI de automacao com IA: custos, tempo economizado, qualidade, receita, riscos e medicao."
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "CRM com IA para vendas e suporte: guia pratica | Tecnotitan",
      description: "Guia para implementar CRM com IA em vendas e suporte: dados, acompanhamento, agentes, relatorios e adocao."
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "Roadmap de transformacao digital para pymes | Tecnotitan",
      description: "Guia para criar um roadmap de transformacao digital para pymes: diagnostico, prioridades, software, IA e metricas."
    }
  },
  zh: {
    "guia-gobernanza-ia-empresas.html": {
      title: "企业 AI 治理：实用指南 | Tecnotitan",
      description: "企业 AI 治理指南：政策、数据、风险、审批、安全和负责任采用。"
    },
    "guia-roi-automatizacion-ia.html": {
      title: "AI 自动化 ROI：企业指南 | Tecnotitan",
      description: "计算 AI 自动化 ROI 的指南：成本、节省时间、质量、收入、风险和衡量。"
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "销售与支持 AI CRM：实用指南 | Tecnotitan",
      description: "在销售和客户支持中实施 AI CRM 的指南：数据、跟进、智能体、报告和采用。"
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "中小企业数字化转型路线图 | Tecnotitan",
      description: "中小企业数字化转型路线图指南：诊断、优先级、软件、AI 和指标。"
    }
  },
  ja: {
    "guia-gobernanza-ia-empresas.html": {
      title: "企業向け AI ガバナンス実践ガイド | Tecnotitan",
      description: "企業の AI ガバナンス、ポリシー、データ、リスク、承認、セキュリティ、導入のガイド。"
    },
    "guia-roi-automatizacion-ia.html": {
      title: "AI 自動化 ROI：企業向けガイド | Tecnotitan",
      description: "AI 自動化 ROI を計算するガイド：コスト、削減時間、品質、売上、リスク、測定。"
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "営業とサポートの AI CRM 実践ガイド | Tecnotitan",
      description: "営業とサポートに AI CRM を導入するためのデータ、フォロー、エージェント、レポート、定着ガイド。"
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "中小企業向けデジタル変革ロードマップ | Tecnotitan",
      description: "中小企業のデジタル変革ロードマップ：診断、優先順位、ソフトウェア、AI、指標。"
    }
  },
  ko: {
    "guia-gobernanza-ia-empresas.html": {
      title: "기업 AI 거버넌스 실무 가이드 | Tecnotitan",
      description: "기업 AI 거버넌스, 정책, 데이터, 위험, 승인, 보안, 책임 있는 도입 가이드."
    },
    "guia-roi-automatizacion-ia.html": {
      title: "AI 자동화 ROI: 기업 가이드 | Tecnotitan",
      description: "AI 자동화 ROI 계산 가이드: 비용, 절감 시간, 품질, 매출, 위험, 측정."
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "영업과 지원을 위한 AI CRM 실무 가이드 | Tecnotitan",
      description: "영업과 고객 지원에 AI CRM을 도입하는 데이터, 후속 조치, 에이전트, 보고, 도입 가이드."
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "중소기업을 위한 디지털 전환 로드맵 | Tecnotitan",
      description: "중소기업 디지털 전환 로드맵 가이드: 진단, 우선순위, 소프트웨어, AI, 지표."
    }
  }
};

Object.entries(extraGuidePageMetadata).forEach(([language, pages]) => {
  Object.entries(pages).forEach(([file, metadata]) => {
    languages[language].pages[file] = {
      ...metadata,
      content: {}
    };
  });
});

const homeGuideCards = {
  es: ["04", "Guias", "Articulos practicos, descargables y compartibles para aplicar IA y software en empresas."],
  en: ["04", "Guides", "Practical, downloadable and shareable articles for applying AI and software in companies."],
  pt: ["04", "Guias", "Artigos praticos, baixaveis e compartilhaveis para aplicar IA e software em empresas."],
  zh: ["04", "指南", "可下载、可分享的实用文章，帮助企业应用 AI 和软件。"],
  ja: ["04", "ガイド", "企業で AI とソフトウェアを活用するための実践的で共有可能な記事。"],
  ko: ["04", "가이드", "기업에서 AI와 소프트웨어를 적용하기 위한 실용적이고 공유 가능한 글."]
};

Object.entries(homeGuideCards).forEach(([language, card]) => {
  const cards = languages[language].pages["index.html"]?.content?.cards;
  if (!cards || cards.some((item) => item[1] === card[1])) {
    return;
  }
  cards.splice(3, 0, card);
  cards.forEach((item, index) => {
    item[0] = String(index + 1).padStart(2, "0");
  });
});

buildLanguageSwitcher();
buildPrivacyConsent();
applyLanguage(activeLanguage);
trackSitePageView();
prefillServiceRequestForm();
enhanceContactForms();

document.querySelector(".deck-language-grid")?.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-deck-lang]");
  if (!link) {
    return;
  }
  event.preventDefault();
  const language = link.dataset.deckLang;
  trackDeckEvent("switch_language", { language, format: "viewer" });
  updateDeckViewer(language, { trackView: true });
  applyDeckFileActionLabels(language);
  document.querySelector(".pdf-viewer-shell")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".deck-view-link").forEach((link) => {
  link.addEventListener("click", () => {
    trackDeckEvent("open_pdf", { language: activeDeckLanguage, format: "pdf" });
  });
});

document.querySelectorAll(".deck-download-link").forEach((link) => {
  link.addEventListener("click", () => {
    trackDeckEvent("download_pdf", { language: activeDeckLanguage, format: "pdf" });
  });
});

document.querySelectorAll(".deck-pptx-link").forEach((link) => {
  link.addEventListener("click", () => {
    trackDeckEvent("download_pptx", { language: activeDeckLanguage, format: "pptx" });
  });
});

document.querySelectorAll("[data-service-cta]").forEach((link) => {
  link.addEventListener("click", () => {
    trackServiceEvent("cta_click", {
      cta: link.dataset.cta,
      intent: link.dataset.intent
    });
  });
});

document.querySelectorAll("[data-print-guide]").forEach((button) => {
  button.addEventListener("click", () => window.print());
});

document.querySelectorAll("[data-share-guide]").forEach((button) => {
  button.addEventListener("click", async () => {
    const shareData = {
      title: document.title,
      text: document.querySelector('meta[name="description"]')?.content || "Guia Tecnotitan",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      const copiedLabels = {
        es: "Enlace copiado",
        en: "Link copied",
        pt: "Link copiado",
        zh: "链接已复制",
        ja: "リンクをコピーしました",
        ko: "링크가 복사되었습니다"
      };
      button.textContent = copiedLabels[activeLanguage] || copiedLabels.es;
      setTimeout(() => {
        const guide = guideChromeTranslations[pageName]?.[activeLanguage] || guideChromeTranslations[pageName]?.es;
        const actionIndex = Array.from(button.closest(".guide-actions")?.querySelectorAll(".button") || []).indexOf(button);
        button.textContent = guide?.actions?.[actionIndex] || guide?.actions?.find((label) => /share|compart|共有|공유/.test(label.toLowerCase())) || "Compartir guia";
      }, 1800);
    } catch {
      window.prompt("Copia el enlace de la guia", window.location.href);
    }
  });
});

if (shouldAutoDetectLanguage) {
  detectVisitorLanguage().then((language) => {
    if (supportedLanguages.includes(language) && language !== activeLanguage) {
      applyLanguage(language);
    }
  });
}

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
