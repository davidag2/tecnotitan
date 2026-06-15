const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");

const languages = {
  es: {
    label: "ES",
    nav: ["Inicio", "Nosotros", "Productos", "Servicios", "Guias", "Divisiones", "Inversionistas", "Contacto"],
    headerAction: "Agendar conversaciÃ³n",
    writeAction: "Escribir",
    openNav: "Abrir navegaciÃ³n",
    closeNav: "Cerrar navegaciÃ³n",
    brandHome: "Tecnotitan inicio",
    mainNav: "NavegaciÃ³n principal",
    footerNav: "NavegaciÃ³n secundaria",
    footerMeta: [
      "Tecnotitan Corporate",
      "Software, inteligencia artificial, videojuegos, robÃ³tica y transformaciÃ³n tecnolÃ³gica.",
      "Colombia | AtenciÃ³n global para inversionistas y empresas.",
      "Aviso legal Â· LinkedIn Â· Facebook Â· Instagram",
      "Â© 2026 Tecnotitan. Todos los derechos reservados."
    ],
    deckUi: ["Solicitar deck", "Ver deck PDF", "Descargar PDF"],
    pages: {
      "index.html": {
        title: "Tecnotitan | TecnologÃ­a aplicada para mercados globales",
        description:
          "Tecnotitan crea software, inteligencia artificial, videojuegos y robÃ³tica para empresas e inversionistas globales.",
        content: {
          heroTitle: ["Eficiencia", "infinita", "para empresas", "que escalan"],
          heroText:
            "Tecnotitan diseÃ±a sistemas de IA, software empresarial y automatizaciÃ³n para convertir procesos complejos en operaciones mÃ¡s rÃ¡pidas, inteligentes y medibles.",
          primaryCta: "Tesis para inversionistas",
          secondaryCta: "Explorar productos",
          nextPreview: "Servicios de alto valor, productos propios e IP escalable",
          visionLabel: "VisiÃ³n corporativa",
          visionTitle: "Construir una compaÃ±Ã­a de tecnologÃ­a aplicada con alcance global.",
          visionParagraphs: [
            "Tecnotitan avanza hacia un modelo donde servicios, productos y divisiones tÃ©cnicas alimentan una misma base de conocimiento, propiedad intelectual y capacidades reutilizables.",
            "La visiÃ³n es crear software empresarial, sistemas de IA, experiencias interactivas y robÃ³tica que puedan escalar desde LatinoamÃ©rica hacia mercados globales."
          ],
          visionCards: [
            ["Software", "Sistemas operativos para empresas", "Plataformas internas, automatizaciÃ³n, datos y productos web que mejoran ejecuciÃ³n."],
            ["IA", "Inteligencia aplicada al trabajo", "Agentes, anÃ¡lisis, copilotos y flujos inteligentes integrados al negocio."],
            ["Interactivo", "Videojuegos y simulaciÃ³n", "Experiencias inmersivas para entrenamiento, marca, educaciÃ³n y nuevos productos."],
            ["RobÃ³tica", "Sistemas fÃ­sico-digitales", "Software, sensores, control y datos para conectar operaciones con inteligencia."]
          ],
          marketTitle: "Mercados donde la tecnologÃ­a aplicada puede crear ventaja.",
          marketText:
            "Tecnotitan apunta a clientes con necesidades reales de digitalizaciÃ³n, automatizaciÃ³n, experiencias interactivas y sistemas inteligentes.",
          marketCards: [
            ["Empresas", "Software operativo", "CompaÃ±Ã­as que necesitan CRM interno, portales, tableros, flujos y automatizaciÃ³n."],
            ["Operaciones", "IA para productividad", "Equipos de ventas, soporte, finanzas y operaciones con tareas repetibles."],
            ["EducaciÃ³n", "SimulaciÃ³n y aprendizaje", "Instituciones y empresas que requieren entrenamiento, evaluaciÃ³n y experiencias inmersivas."],
            ["Entretenimiento", "Videojuegos y marca", "Productos interactivos, gamificaciÃ³n, experiencias de marca y nuevos contenidos digitales."],
            ["Industria", "RobÃ³tica y datos", "Procesos que pueden conectar sensores, software, control e inteligencia operativa."],
            ["Institucional", "TransformaciÃ³n tecnolÃ³gica", "Organizaciones pÃºblicas o privadas que necesitan estrategia, implementaciÃ³n y adopciÃ³n."]
          ],
          investorCtaTitle: "Acciones para inversionistas",
          investorCtaText: "Accesos directos para revisar la oportunidad, contactar al equipo fundador o iniciar una conversaciÃ³n.",
          investorCtaCards: [
            ["01", "Solicitar investor deck", "Recibe el resumen de tesis, mercado, roadmap y oportunidad de Tecnotitan."],
            ["02", "Contactar al equipo", "Conecta directamente con Tecnotitan para preguntas estratÃ©gicas o seguimiento."],
            ["03", "Agendar conversaciÃ³n", "Inicia una conversaciÃ³n sobre inversiÃ³n, alianzas o crecimiento global."]
          ],
          gatewayTitle: "Una compaÃ±Ã­a tecnolÃ³gica construida por divisiones",
          gatewayText:
            "Separamos la historia corporativa en pÃ¡ginas claras para clientes, aliados e inversionistas globales.",
          cards: [
            ["01", "Nosotros", "MisiÃ³n, tesis tecnolÃ³gica y principios de ejecuciÃ³n."],
            ["02", "Productos", "Software, IA, videojuegos y robÃ³tica convertidos en plataformas."],
            ["03", "Servicios", "ConsultorÃ­a en inteligencia artificial y transformaciÃ³n tecnolÃ³gica."],
            ["04", "Divisiones", "Un portafolio operacional para construir mÃºltiples mercados."],
            ["05", "Inversionistas", "VisiÃ³n, oportunidad, modelo y ruta de crecimiento."],
            ["06", "Contacto", "Conversaciones comerciales, alianzas e inversiÃ³n."]
          ]
        }
      },
      "nosotros.html": {
        title: "Nosotros | Tecnotitan",
        description:
          "Conoce la visiÃ³n, misiÃ³n y principios de Tecnotitan como compaÃ±Ã­a de tecnologÃ­a aplicada.",
        content: {
          label: "Nosotros",
          titleLines: ["Construimos tecnologÃ­a", "con ambiciÃ³n global"],
          intro:
            "Tecnotitan nace para convertir capacidades de software, IA, videojuegos y robÃ³tica en productos y servicios que eleven la competitividad de empresas.",
          thesisLabel: "VisiÃ³n",
          thesisTitle: "Ser una fÃ¡brica de tecnologÃ­a aplicada para mercados globales.",
          paragraphs: [
            "Nuestra tesis es simple: las compaÃ±Ã­as que dominen software, datos, inteligencia artificial, experiencias interactivas y sistemas fÃ­sicos inteligentes podrÃ¡n crear ventajas duraderas.",
            "Tecnotitan integra esas disciplinas para construir soluciones propias, acompaÃ±ar transformaciones empresariales y abrir nuevas divisiones de crecimiento."
          ],
          leadershipTitle: "Liderazgo y equipo inicial",
          leadershipText:
            "Tecnotitan se construye con una estructura compacta, tÃ©cnica y orientada a ejecuciÃ³n: liderazgo fundador, consultorÃ­a dedicada y capacidad de desarrollo.",
          leadershipCards: [
            ["CEO / Founder", "David Arias Giraldo", "DirecciÃ³n estratÃ©gica, visiÃ³n de producto, desarrollo corporativo y construcciÃ³n del portafolio tecnolÃ³gico."],
            ["ConsultorÃ­a full-time", "Consultora dedicada", "AcompaÃ±amiento en estrategia, operaciones, investigaciÃ³n, documentaciÃ³n y transformaciÃ³n tecnolÃ³gica."],
            ["IngenierÃ­a", "2 programadores", "Equipo inicial de desarrollo para construir software, prototipos, automatizaciones y productos propios."]
          ],
          cards: [
            ["01", "Producto antes que presentaciÃ³n", "Priorizamos sistemas funcionales, medibles y escalables sobre promesas abstractas."],
            ["02", "IA como infraestructura", "Tratamos la inteligencia artificial como una capa central para automatizar, decidir y aprender."],
            ["03", "Multidisciplina ejecutable", "Software, juegos, robÃ³tica y consultorÃ­a trabajan como un solo portafolio tecnolÃ³gico."]
          ]
        }
      },
      "productos.html": {
        title: "Productos | Tecnotitan",
        description:
          "Productos de Tecnotitan en software empresarial, inteligencia artificial, videojuegos y robÃ³tica.",
        content: {
          label: "Productos",
          titleLines: ["Plataformas para", "empresas que escalan"],
          intro:
            "Construimos productos propios y sistemas a medida que pueden evolucionar hacia plataformas repetibles.",
          cards: [
            ["IA para pymes", "Copiloto PyME", "Panel de decisiones con IA para digitalizar pymes en LatinoamÃ©rica. Integra ventas, caja, inventario y clientes para operar con mÃ¡s control."],
            ["Sistema operativo", "Tecnotitan OS", "Plataforma empresarial para centralizar procesos, datos, automatizaciones, agentes IA y flujos internos."],
            ["MÃ³vil + IA", "Life Copilot", "App mÃ³vil de productividad personal con copiloto IA para organizar metas, tareas, hÃ¡bitos y decisiones."],
            ["Videojuegos", "Tecnotitan Engine", "Motor y toolkit para prototipar videojuegos, simuladores, experiencias interactivas y mundos gamificados."],
            ["EducaciÃ³n", "Academia Tecnotitan", "Plataforma de aprendizaje para IA, software, videojuegos, robÃ³tica y transformaciÃ³n tecnolÃ³gica."],
            ["AtenciÃ³n IA", "Call Center AI Tecnotitan", "Agentes conversacionales para soporte, ventas, seguimiento de clientes y automatizaciÃ³n de contact centers."]
          ]
        }
      },
      "servicios.html": {
        title: "Servicios | Tecnotitan",
        description:
          "Servicios de consultorÃ­a en inteligencia artificial y transformaciÃ³n tecnolÃ³gica para empresas.",
        content: {
          label: "Servicios",
          titleLines: ["ConsultorÃ­a para", "transformaciÃ³n tecnolÃ³gica"],
          intro:
            "Ayudamos a empresas a identificar, diseÃ±ar e implementar inteligencia artificial y software con impacto operativo.",
          timelineLabel: "Servicios",
          cards: [
            ["01", "DiagnÃ³stico IA", "EvaluaciÃ³n de procesos, datos, automatizaciones posibles y retorno esperado."],
            ["02", "Hoja de ruta tecnolÃ³gica", "Arquitectura, prioridades, stack, riesgos y plan de ejecuciÃ³n."],
            ["03", "ImplementaciÃ³n", "Desarrollo de software, agentes IA, integraciones y prototipos funcionales."],
            ["04", "AdopciÃ³n", "CapacitaciÃ³n, mediciÃ³n, mejoras continuas y transferencia de capacidades."]
          ]
        }
      },
      "divisiones.html": {
        title: "Divisiones | Tecnotitan",
        description:
          "Divisiones de Tecnotitan en software, IA, videojuegos, robÃ³tica y ventures tecnolÃ³gicos.",
        content: {
          label: "Divisiones",
          titleLines: ["Un portafolio", "de motores tecnolÃ³gicos"],
          intro:
            "Cada divisiÃ³n crea capacidades reutilizables, propiedad intelectual y oportunidades comerciales independientes.",
          divisionThesisLabel: "Arquitectura operacional",
          divisionThesisTitle: "Divisiones conectadas por software, datos e inteligencia aplicada.",
          divisionThesisParagraphs: [
            "Cada divisiÃ³n de Tecnotitan puede operar como unidad comercial, laboratorio de propiedad intelectual y fuente de capacidades reutilizables para las demÃ¡s.",
            "El objetivo es que consultorÃ­a, productos y tecnologÃ­a propia se refuercen entre sÃ­ para crear mercados, no solo proyectos aislados."
          ],
          cards: [
            ["Software empresarial", "Tecnotitan Software", "Plataformas web, CRM internos, portales, dashboards y automatizaciÃ³n para empresas que necesitan operar mejor."],
            ["Inteligencia artificial", "Tecnotitan AI", "Agentes, copilotos, analÃ­tica, automatizaciÃ³n documental y flujos inteligentes integrados a procesos reales."],
            ["Videojuegos e interactivo", "Tecnotitan Games", "Videojuegos, simuladores, gamificaciÃ³n y experiencias inmersivas para entrenamiento, marca y nuevos productos."],
            ["RobÃ³tica", "Tecnotitan Robotics", "Software, sensores, control y datos para crear sistemas fÃ­sico-digitales conectados con inteligencia operativa."],
            ["ConsultorÃ­a tecnolÃ³gica", "Tecnotitan Advisory", "Estrategia de IA, transformaciÃ³n tecnolÃ³gica, adopciÃ³n empresarial y acompaÃ±amiento ejecutivo."],
            ["Ventures", "Tecnotitan Ventures", "ExperimentaciÃ³n, spin-offs, productos propios y nuevas oportunidades construidas desde capacidades internas."]
          ]
        }
      },
      "inversionistas.html": {
        title: "Inversionistas | Tecnotitan",
        description:
          "PÃ¡gina para inversionistas globales de Tecnotitan: tesis, mercado, modelo y visiÃ³n.",
        content: {
          label: "Inversionistas",
          titleLines: ["Una tesis tecnolÃ³gica", "para mercados globales"],
          intro:
            "Tecnotitan combina servicios de alto valor, productos propios y divisiones tÃ©cnicas para construir una compaÃ±Ã­a escalable de tecnologÃ­a aplicada.",
          metrics: [
            ["Mercado", "Software + IA", "DigitalizaciÃ³n empresarial acelerada por automatizaciÃ³n inteligente."],
            ["ExpansiÃ³n", "MultidivisiÃ³n", "Software, IA, videojuegos, robÃ³tica y consultorÃ­a como motores conectados."],
            ["Modelo", "Servicios a producto", "Aprendizaje con clientes, IP propia y plataformas repetibles."]
          ],
          thesisLabel: "Tesis",
          thesisTitle: "Las empresas necesitan socios que construyan, no solo asesoren.",
          paragraphs: [
            "El mercado estÃ¡ migrando de software tradicional a sistemas con agentes, automatizaciÃ³n, datos y experiencias interactivas. Tecnotitan se posiciona en esa convergencia.",
            "Nuestra ruta combina ingresos por servicios, desarrollo de productos, propiedad intelectual y oportunidades de spin-off por divisiÃ³n."
          ],
          opportunityTitle: "Oportunidad de inversiÃ³n",
          opportunityText:
            "Tecnotitan busca capturar demanda empresarial en IA, software y robÃ³tica mientras convierte aprendizaje de servicios en productos propios e IP escalable.",
          opportunityCards: [
            ["01", "Demanda estructural", "Las empresas necesitan automatizar procesos, datos y decisiones para competir."],
            ["02", "Modelo hÃ­brido", "Servicios de alto valor generan ingresos, aprendizaje de mercado y oportunidades de producto."],
            ["03", "IP acumulable", "Cada proyecto puede convertirse en herramientas, agentes, frameworks y plataformas repetibles."],
            ["04", "ExpansiÃ³n regional", "Construir desde LatinoamÃ©rica permite vender tecnologÃ­a aplicada a mercados globales."]
          ],
          indicatorTitle: "Indicadores para seguimiento",
          indicatorText:
            "Un marco profesional para monitorear el avance de Tecnotitan hacia ingresos, productos propios, clientes objetivo y escala regional.",
          indicatorMetrics: [
            ["Mercado objetivo", "Empresas + IA", "Software, automatizaciÃ³n, experiencias interactivas y robÃ³tica aplicada."],
            ["Ãreas de negocio", "5 divisiones", "Software, IA, videojuegos, robÃ³tica y consultorÃ­a tecnolÃ³gica."],
            ["Productos", "6 lÃ­neas", "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia y Call Center AI."]
          ],
          indicatorCards: [
            ["Clientes objetivo", "Empresas medianas y grandes", "Organizaciones con procesos repetibles, datos subutilizados y presiÃ³n por automatizar."],
            ["Roadmap", "Servicios a plataformas", "Convertir entregas recurrentes en herramientas internas, mÃ³dulos comerciales y productos."],
            ["ExpansiÃ³n", "LatAm hacia global", "Validar casos regionales y escalar tecnologÃ­a aplicada hacia mercados con necesidades similares."]
          ],
          roadmapTitle: "Roadmap estratÃ©gico",
          roadmapText:
            "Una ruta de crecimiento por fases para convertir capacidades tÃ©cnicas en servicios, productos propios y oportunidades de expansiÃ³n.",
          roadmapCards: [
            ["2026", "ValidaciÃ³n y casos reales", "Consolidar servicios de IA/software, construir casos empresariales y documentar patrones repetibles."],
            ["2027", "Productos y propiedad intelectual", "Empaquetar herramientas internas, lanzar primeras lÃ­neas comerciales y fortalecer divisiones tÃ©cnicas."],
            ["2028", "Escala regional y plataformas", "Expandir ventas regionales, convertir soluciones en plataformas y evaluar spin-offs por divisiÃ³n."]
          ],
          deckTitle: "Investor Deck / Data Room",
          deckText: "Material preparado para inversionistas que necesitan evaluar la tesis, el mercado, el portafolio y la ruta de ejecuciÃ³n de Tecnotitan.",
          deckCards: [
            ["01", "Tesis y mercado", "Problema, oportunidad, clientes objetivo y razones por las que IA, software y automatizaciÃ³n convergen ahora."],
            ["02", "Productos e IP", "Portafolio actual, lÃ­neas propias y capacidades que pueden convertirse en plataformas repetibles."],
            ["03", "Equipo y ejecuciÃ³n", "Estructura inicial, liderazgo fundador, capacidades tÃ©cnicas y forma de operar con foco en producto."],
            ["04", "Roadmap", "Fases de validaciÃ³n, empaquetamiento, expansiÃ³n regional y construcciÃ³n de propiedad intelectual."],
            ["05", "Uso de capital", "Prioridades para acelerar producto, ventas, talento tÃ©cnico, automatizaciÃ³n interna y validaciÃ³n comercial."],
            ["06", "ConversaciÃ³n", "Acceso directo para solicitar informaciÃ³n adicional, compartir tesis o coordinar una reuniÃ³n con Tecnotitan."]
          ],
          deckPageButton: "Ver pÃ¡gina del deck",
          deckButton: "Solicitar investor deck",
          investorCtaTitle: "Acciones para inversionistas",
          investorCtaText: "Elige el siguiente paso para recibir informaciÃ³n, contactar al equipo o abrir una conversaciÃ³n estratÃ©gica.",
          investorCtaCards: [
            ["01", "Solicitar investor deck", "Solicita el resumen ejecutivo de tesis, mercado, roadmap y oportunidad."],
            ["02", "Contactar al equipo", "EnvÃ­a preguntas sobre estrategia, portafolio, equipo o etapa de crecimiento."],
            ["03", "Agendar conversaciÃ³n", "Abre una conversaciÃ³n sobre inversiÃ³n, alianzas estratÃ©gicas o expansiÃ³n."]
          ],
          formTitle: "Contacto especial para inversionistas",
          formText: "Comparte tu perfil, tesis o interÃ©s estratÃ©gico y el equipo de Tecnotitan responderÃ¡ desde info@tecnotitan.com.",
          formLabels: ["Nombre", "Firma / fondo", "PaÃ­s", "Email", "Tipo de interÃ©s", "Mensaje"],
          formOptions: ["Seleccionar", "InversiÃ³n", "Alianza estratÃ©gica", "Investor deck", "Contactar al equipo", "Agendar conversaciÃ³n"],
          formButton: "Enviar a info@tecnotitan.com",
          formSending: "Enviando...",
          formErrorTitle: "No se pudo enviar",
          formErrorText: "IntÃ©ntalo de nuevo o escribe directamente a info@tecnotitan.com.",
          formNewsletter: "Quiero suscribirme al newsletter oficial de Tecnotitan.",
          formSuccessTitle: "Solicitud enviada",
          formSuccessText: "Gracias. El equipo de Tecnotitan revisarÃ¡ tu mensaje de inversiÃ³n y responderÃ¡ a info@tecnotitan.com.",
          cards: [
            ["01", "TracciÃ³n inicial", "Construir casos reales con empresas y convertirlos en capacidades repetibles."],
            ["02", "Productos propios", "Empaquetar soluciones internas como plataformas y herramientas comerciales."],
            ["03", "Escala global", "Vender tecnologÃ­a desde LatinoamÃ©rica hacia empresas con necesidades globales."]
          ]
        }
      },
      "contacto.html": {
        title: "Contacto | Tecnotitan",
        description:
          "Contacta a Tecnotitan para proyectos, servicios, alianzas e inversiÃ³n.",
        content: {
          label: "Contacto",
          titleLines: ["Hablemos de", "la siguiente tecnologÃ­a"],
          intro:
            "Canal general para quejas, reclamos, sugerencias y solicitudes sobre Tecnotitan.",
          cards: [
            ["AtenciÃ³n", "Solicitudes generales", "Preguntas, comentarios y mensajes sobre Tecnotitan y sus servicios."],
            ["Calidad", "Quejas y reclamos", "Reportes sobre experiencias, procesos o respuestas que necesitan revisiÃ³n."],
            ["Mejora", "Sugerencias", "Ideas para mejorar productos, servicios, comunicaciÃ³n o experiencia de usuario."]
          ],
          formTitle: "Contacto general",
          formText: "EnvÃ­a quejas, reclamos, sugerencias o solicitudes generales a info@tecnotitan.com.",
          formLabels: ["Nombre", "Email", "Empresa", "PaÃ­s", "Tipo de solicitud", "Mensaje"],
          formOptions: ["Seleccionar", "Queja", "Reclamo", "Sugerencia", "Solicitud general"],
          formButton: "Enviar a info@tecnotitan.com",
          formSending: "Enviando...",
          formErrorTitle: "No se pudo enviar",
          formErrorText: "IntÃ©ntalo de nuevo o escribe directamente a info@tecnotitan.com.",
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
            "El deck formal de Tecnotitan estÃ¡ preparado como activo futuro. Mientras se publica, puedes solicitar acceso directo desde el formulario de inversionistas.",
          cards: [
            ["01", "Tesis", "Problema, oportunidad de mercado y tesis de tecnologÃ­a aplicada para empresas globales."],
            ["02", "Portafolio", "Productos, divisiones, propiedad intelectual potencial y rutas hacia plataformas repetibles."],
            ["03", "EjecuciÃ³n", "Equipo inicial, roadmap, prioridades de capital y prÃ³ximos hitos de validaciÃ³n."]
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
      "Legal notice Â· LinkedIn Â· Facebook Â· Instagram",
      "Â© 2026 Tecnotitan. All rights reserved."
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
            ["SMB AI", "Copiloto PyME", "AI decision panel for Latin American SMBs. It connects sales, cash register, inventory and customer modules so owners can operate with better control."],
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
    nav: ["InÃ­cio", "Sobre", "Produtos", "ServiÃ§os", "Guias", "DivisÃµes", "Investidores", "Contato"],
    headerAction: "Agendar conversa",
    writeAction: "Enviar email",
    openNav: "Abrir navegaÃ§Ã£o",
    closeNav: "Fechar navegaÃ§Ã£o",
    brandHome: "InÃ­cio da Tecnotitan",
    mainNav: "NavegaÃ§Ã£o principal",
    footerNav: "NavegaÃ§Ã£o secundÃ¡ria",
    footerMeta: [
      "Tecnotitan Corporate",
      "Software, inteligÃªncia artificial, videogames, robÃ³tica e transformaÃ§Ã£o tecnolÃ³gica.",
      "ColÃ´mbia | Atendimento global para investidores e empresas.",
      "Aviso legal Â· LinkedIn Â· Facebook Â· Instagram",
      "Â© 2026 Tecnotitan. Todos os direitos reservados."
    ],
    deckUi: ["Solicitar deck", "Ver deck PDF", "Baixar PDF"],
    pages: {
      "index.html": {
        title: "Tecnotitan | IA aplicada, software e robÃ³tica para Brasil e mercados globais",
        description:
          "A Tecnotitan cria software empresarial, sistemas de IA, produtos interativos e capacidades de robÃ³tica para Brasil, AmÃ©rica Latina e mercados globais.",
        content: {
          heroTitle: ["EficiÃªncia", "infinita", "para empresas", "que escalam"],
          heroText:
            "A Tecnotitan projeta sistemas de IA, software empresarial e automaÃ§Ã£o para transformar processos complexos em operaÃ§Ãµes mais rÃ¡pidas, inteligentes e mensurÃ¡veis.",
          primaryCta: "Tese para investidores",
          secondaryCta: "Explorar produtos",
          nextPreview: "ServiÃ§os de alto valor, produtos prÃ³prios e IP escalÃ¡vel",
          visionLabel: "VisÃ£o corporativa",
          visionTitle: "Construir uma empresa de tecnologia aplicada com alcance global.",
          visionParagraphs: [
            "A Tecnotitan avanÃ§a para um modelo em que serviÃ§os, produtos e divisÃµes tÃ©cnicas alimentam uma mesma base de conhecimento, propriedade intelectual e capacidades reutilizÃ¡veis.",
            "A visÃ£o Ã© criar software empresarial, sistemas de IA, produtos interativos e robÃ³tica que possam escalar da AmÃ©rica Latina para mercados globais."
          ],
          visionCards: [
            ["Software", "Sistemas operacionais para empresas", "Plataformas internas, automaÃ§Ã£o, dados e produtos web que melhoram a execuÃ§Ã£o."],
            ["IA", "InteligÃªncia aplicada ao trabalho", "Agentes, anÃ¡lise, copilotos e fluxos inteligentes integrados ao negÃ³cio."],
            ["Interativo", "Videogames e simulaÃ§Ã£o", "ExperiÃªncias imersivas para treinamento, marca, educaÃ§Ã£o e novos produtos."],
            ["RobÃ³tica", "Sistemas fÃ­sico-digitais", "Software, sensores, controle e dados para conectar operaÃ§Ãµes com inteligÃªncia."]
          ],
          marketTitle: "Mercados onde tecnologia aplicada pode criar vantagem.",
          marketText:
            "A Tecnotitan mira clientes com necessidades reais de digitalizaÃ§Ã£o, automaÃ§Ã£o, experiÃªncias interativas e sistemas inteligentes.",
          marketCards: [
            ["Empresas", "Software operacional", "Companhias que precisam de CRM interno, portais, painÃ©is, fluxos e automaÃ§Ã£o."],
            ["OperaÃ§Ãµes", "IA para produtividade", "Equipes de vendas, suporte, finanÃ§as e operaÃ§Ãµes com tarefas repetÃ­veis."],
            ["EducaÃ§Ã£o", "SimulaÃ§Ã£o e aprendizagem", "InstituiÃ§Ãµes e empresas que precisam de treinamento, avaliaÃ§Ã£o e experiÃªncias imersivas."],
            ["Entretenimento", "Videogames e marca", "Produtos interativos, gamificaÃ§Ã£o, experiÃªncias de marca e novos conteÃºdos digitais."],
            ["IndÃºstria", "RobÃ³tica e dados", "Processos que podem conectar sensores, software, controle e inteligÃªncia operacional."],
            ["Institucional", "TransformaÃ§Ã£o tecnolÃ³gica", "OrganizaÃ§Ãµes pÃºblicas ou privadas que precisam de estratÃ©gia, implementaÃ§Ã£o e adoÃ§Ã£o."]
          ],
          investorCtaTitle: "AÃ§Ãµes para investidores",
          investorCtaText: "Acessos diretos para revisar a oportunidade, contatar a equipe fundadora ou iniciar uma conversa.",
          investorCtaCards: [
            ["01", "Solicitar investor deck", "Receba o resumo da tese, mercado, roadmap e oportunidade da Tecnotitan."],
            ["02", "Contatar a equipe", "Conecte-se diretamente com a Tecnotitan para perguntas estratÃ©gicas ou acompanhamento."],
            ["03", "Agendar conversa", "Inicie uma conversa sobre investimento, parcerias ou crescimento global."]
          ],
          gatewayTitle: "Uma empresa multivisÃ£o com potencial de IP acumulÃ¡vel",
          gatewayText:
            "A Tecnotitan conecta serviÃ§os, produtos e divisÃµes tÃ©cnicas para criar capacidades reutilizÃ¡veis em diferentes mercados.",
          cards: [
            ["01", "Sobre", "Tese operacional, ambiÃ§Ã£o regional e princÃ­pios de execuÃ§Ã£o."],
            ["02", "Produtos", "Software, IA, produtos interativos e robÃ³tica com caminho para plataformas."],
            ["03", "ServiÃ§os", "Consultoria em IA e transformaÃ§Ã£o tecnolÃ³gica para empresas."],
            ["04", "DivisÃµes", "Arquitetura de portfÃ³lio para entrar em vÃ¡rios mercados de tecnologia."],
            ["05", "Investidores", "Tese, oportunidade, modelo e narrativa de crescimento."],
            ["06", "Contato", "Conversas comerciais, alianÃ§as estratÃ©gicas e investimento."]
          ]
        }
      },
      "nosotros.html": {
        title: "Sobre | Tecnotitan",
        description:
          "ConheÃ§a a visÃ£o, missÃ£o e princÃ­pios da Tecnotitan como empresa de tecnologia aplicada.",
        content: {
          label: "Sobre",
          titleLines: ["ConstruÃ­mos tecnologia", "com ambiÃ§Ã£o regional e global"],
          intro:
            "A Tecnotitan transforma capacidades de software, IA, tecnologia interativa e robÃ³tica em produtos e serviÃ§os para elevar a competitividade das empresas.",
          thesisLabel: "VisÃ£o",
          thesisTitle: "Ser uma empresa latino-americana de tecnologia aplicada com alcance global.",
          paragraphs: [
            "Nossa tese Ã© simples: a prÃ³xima geraÃ§Ã£o de empresas serÃ¡ construÃ­da sobre software, dados, inteligÃªncia artificial, interfaces interativas e sistemas fÃ­sicos inteligentes.",
            "A Tecnotitan integra essas disciplinas para criar soluÃ§Ãµes prÃ³prias, apoiar transformaÃ§Ãµes empresariais e abrir novas divisÃµes de crescimento ao longo do tempo."
          ],
          leadershipTitle: "LideranÃ§a e equipe inicial",
          leadershipText:
            "A Tecnotitan estÃ¡ sendo construÃ­da com uma estrutura compacta, tÃ©cnica e orientada Ã  execuÃ§Ã£o: lideranÃ§a fundadora, consultoria dedicada e capacidade de desenvolvimento.",
          leadershipCards: [
            ["CEO / Founder", "David Arias Giraldo", "DireÃ§Ã£o estratÃ©gica, visÃ£o de produto, desenvolvimento corporativo e construÃ§Ã£o do portfÃ³lio tecnolÃ³gico."],
            ["Consultoria full-time", "Consultora dedicada", "Apoio em estratÃ©gia, operaÃ§Ãµes, pesquisa, documentaÃ§Ã£o e transformaÃ§Ã£o tecnolÃ³gica."],
            ["Engenharia", "2 programadores", "Equipe inicial de desenvolvimento para construir software, protÃ³tipos, automaÃ§Ãµes e produtos prÃ³prios."]
          ],
          cards: [
            ["01", "ExecuÃ§Ã£o antes da narrativa", "Priorizamos sistemas funcionais, mensurÃ¡veis e escalÃ¡veis acima de promessas abstratas."],
            ["02", "IA como camada operacional", "Tratamos a inteligÃªncia artificial como infraestrutura para automatizar, decidir e aprender."],
            ["03", "Alavancagem multidisciplinar", "Software, produtos interativos, robÃ³tica e consultoria atuam como um Ãºnico portfÃ³lio tecnolÃ³gico."]
          ]
        }
      },
      "productos.html": {
        title: "Produtos | Tecnotitan",
        description:
          "Produtos da Tecnotitan em software empresarial, inteligÃªncia artificial, videogames e robÃ³tica.",
        content: {
          label: "Produtos",
          titleLines: ["Produtos com caminho", "para plataformas"],
          intro:
            "ConstruÃ­mos produtos prÃ³prios e sistemas sob medida que podem evoluir para plataformas repetÃ­veis de software, dados e IA.",
          cards: [
            ["IA para PMEs", "Copiloto PyME", "Painel de decisÃµes com IA para digitalizar PMEs na AmÃ©rica Latina. Conecta vendas, caixa, inventÃ¡rio e clientes para operar com mais controle."],
            ["Sistema operacional", "Tecnotitan OS", "Plataforma empresarial para centralizar processos, dados, automaÃ§Ãµes, agentes IA e fluxos internos."],
            ["Mobile + IA", "Life Copilot", "Aplicativo mÃ³vel de produtividade pessoal com copiloto IA para metas, tarefas, hÃ¡bitos e decisÃµes."],
            ["Videogames", "Tecnotitan Engine", "Engine e toolkit para prototipar jogos, simuladores, experiÃªncias interativas e mundos gamificados."],
            ["EducaÃ§Ã£o", "Academia Tecnotitan", "Plataforma de aprendizagem para IA, software, videogames, robÃ³tica e transformaÃ§Ã£o tecnolÃ³gica."],
            ["Atendimento IA", "Call Center AI Tecnotitan", "Agentes conversacionais para suporte, vendas, acompanhamento de clientes e automaÃ§Ã£o de contact centers."]
          ]
        }
      },
      "servicios.html": {
        title: "ServiÃ§os | Tecnotitan",
        description:
          "ServiÃ§os de consultoria em inteligÃªncia artificial e transformaÃ§Ã£o tecnolÃ³gica para empresas.",
        content: {
          label: "ServiÃ§os",
          titleLines: ["Consultoria que leva", "Ã  implementaÃ§Ã£o"],
          intro:
            "Ajudamos empresas a identificar, desenhar e implementar IA e software com impacto operacional mensurÃ¡vel.",
          timelineLabel: "ServiÃ§os",
          cards: [
            ["01", "DiagnÃ³stico IA", "AvaliaÃ§Ã£o de processos, dados, automaÃ§Ãµes possÃ­veis e retorno esperado."],
            ["02", "Roteiro tecnolÃ³gico", "Arquitetura, prioridades, stack, riscos e plano de execuÃ§Ã£o."],
            ["03", "ImplementaÃ§Ã£o", "Desenvolvimento de software, agentes IA, integraÃ§Ãµes e protÃ³tipos funcionais."],
            ["04", "AdoÃ§Ã£o", "CapacitaÃ§Ã£o, mediÃ§Ã£o, melhorias contÃ­nuas e transferÃªncia de capacidades."]
          ]
        }
      },
      "divisiones.html": {
        title: "DivisÃµes | Tecnotitan",
        description:
          "DivisÃµes da Tecnotitan em software, IA, videogames, robÃ³tica e ventures tecnolÃ³gicos.",
        content: {
          label: "DivisÃµes",
          titleLines: ["Um portfÃ³lio de", "motores tecnolÃ³gicos"],
          intro:
            "Cada divisÃ£o Ã© desenhada para criar capacidades reutilizÃ¡veis, propriedade intelectual e oportunidades comerciais independentes.",
          divisionThesisLabel: "Arquitetura operacional",
          divisionThesisTitle: "DivisÃµes conectadas por software, dados e inteligÃªncia aplicada.",
          divisionThesisParagraphs: [
            "Cada divisÃ£o da Tecnotitan pode operar como unidade comercial, laboratÃ³rio de propriedade intelectual e fonte de capacidades reutilizÃ¡veis para as demais.",
            "O objetivo Ã© que consultoria, produtos e tecnologia prÃ³pria se reforcem entre si para criar mercados, nÃ£o apenas projetos isolados."
          ],
          cards: [
            ["Software empresarial", "Tecnotitan Software", "Plataformas web, CRM interno, portais, painÃ©is e automaÃ§Ã£o para empresas que precisam operar melhor."],
            ["InteligÃªncia artificial", "Tecnotitan AI", "Agentes, copilotos, anÃ¡lise, automaÃ§Ã£o documental e fluxos inteligentes integrados a processos reais."],
            ["Videogames e interativo", "Tecnotitan Games", "Videogames, simuladores, gamificaÃ§Ã£o e experiÃªncias imersivas para treinamento, marca e novos produtos."],
            ["RobÃ³tica", "Tecnotitan Robotics", "Software, sensores, controle e dados para criar sistemas fÃ­sico-digitais conectados com inteligÃªncia operacional."],
            ["Consultoria tecnolÃ³gica", "Tecnotitan Advisory", "EstratÃ©gia de IA, transformaÃ§Ã£o tecnolÃ³gica, adoÃ§Ã£o empresarial e acompanhamento executivo."],
            ["Ventures", "Tecnotitan Ventures", "ExperimentaÃ§Ã£o, spin-offs, produtos prÃ³prios e novas oportunidades construÃ­das a partir de capacidades internas."]
          ]
        }
      },
      "inversionistas.html": {
        title: "Investidores | Tecnotitan",
        description:
          "PÃ¡gina para investidores da Tecnotitan: IA aplicada, software empresarial, tecnologia interativa, robÃ³tica e modelo de serviÃ§os para produtos.",
        content: {
          label: "Investidores",
          titleLines: ["Tecnologia aplicada", "da AmÃ©rica Latina", "para mercados globais"],
          intro:
            "A Tecnotitan combina serviÃ§os de alto valor, produtos prÃ³prios e divisÃµes tÃ©cnicas para construir uma empresa escalÃ¡vel de tecnologia aplicada, com potencial de criaÃ§Ã£o de IP.",
          metrics: [
            ["Mercado", "IA + software", "Empresas estÃ£o direcionando orÃ§amento para automaÃ§Ã£o, dados e fluxos inteligentes."],
            ["ExpansÃ£o", "MultidivisÃ£o", "Software, IA, tecnologia interativa, robÃ³tica e consultoria como motores conectados."],
            ["Modelo", "ServiÃ§os para produtos", "Usar projetos reais para gerar receita, aprender, criar IP e empacotar plataformas."]
          ],
          thesisLabel: "Tese",
          thesisTitle: "As melhores empresas de tecnologia combinam profundidade consultiva com execuÃ§Ã£o de produto.",
          paragraphs: [
            "A tecnologia empresarial estÃ¡ migrando do software tradicional para sistemas com agentes, automaÃ§Ã£o, dados, interfaces interativas e operaÃ§Ãµes habilitadas por robÃ³tica. A Tecnotitan se posiciona nessa convergÃªncia.",
            "Nossa rota combina receita por serviÃ§os, desenvolvimento de produtos prÃ³prios, propriedade intelectual e futuras oportunidades de spin-off por divisÃ£o."
          ],
          opportunityTitle: "Oportunidade de investimento",
          opportunityText:
            "A Tecnotitan busca capturar demanda empresarial em IA, software e robÃ³tica enquanto converte aprendizado de serviÃ§os em produtos prÃ³prios e IP escalÃ¡vel.",
          opportunityCards: [
            ["01", "Demanda estrutural", "Empresas precisam automatizar processos, dados e decisÃµes para competir."],
            ["02", "Modelo hÃ­brido", "ServiÃ§os de alto valor geram receita, aprendizado de mercado e oportunidades de produto."],
            ["03", "IP acumulÃ¡vel", "Cada projeto pode se tornar ferramentas, agentes, frameworks e plataformas repetÃ­veis."],
            ["04", "ExpansÃ£o regional", "Construir a partir da AmÃ©rica Latina permite vender tecnologia aplicada para mercados globais."]
          ],
          indicatorTitle: "Indicadores de acompanhamento",
          indicatorText:
            "Um marco profissional para acompanhar o avanÃ§o da Tecnotitan em receita, produtos prÃ³prios, clientes-alvo e escala regional.",
          indicatorMetrics: [
            ["Mercado-alvo", "Empresas + IA", "Software, automaÃ§Ã£o, experiÃªncias interativas e robÃ³tica aplicada."],
            ["Ãreas de negÃ³cio", "5 divisÃµes", "Software, IA, videogames, robÃ³tica e consultoria tecnolÃ³gica."],
            ["Produtos", "6 linhas", "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia e Call Center AI."]
          ],
          indicatorCards: [
            ["Clientes-alvo", "MÃ©dias e grandes empresas", "OrganizaÃ§Ãµes com processos repetÃ­veis, dados subutilizados e pressÃ£o para automatizar."],
            ["Roadmap", "ServiÃ§os para plataformas", "Converter entregas recorrentes em ferramentas internas, mÃ³dulos comerciais e produtos."],
            ["ExpansÃ£o", "LatAm para global", "Validar casos regionais e escalar tecnologia aplicada para mercados com necessidades semelhantes."]
          ],
          roadmapTitle: "Roadmap estratÃ©gico",
          roadmapText:
            "Uma rota de crescimento por fases para converter capacidades tÃ©cnicas em serviÃ§os, produtos prÃ³prios e oportunidades de expansÃ£o.",
          roadmapCards: [
            ["2026", "ValidaÃ§Ã£o e casos reais", "Consolidar serviÃ§os de IA/software, construir casos empresariais e documentar padrÃµes repetÃ­veis."],
            ["2027", "Produtos e propriedade intelectual", "Empacotar ferramentas internas, lanÃ§ar primeiras linhas comerciais e fortalecer divisÃµes tÃ©cnicas."],
            ["2028", "Escala regional e plataformas", "Expandir vendas regionais, converter soluÃ§Ãµes em plataformas e avaliar spin-offs por divisÃ£o."]
          ],
          deckTitle: "Investor Deck / Data Room",
          deckText: "Material preparado para investidores que precisam avaliar a tese, o mercado, o portfÃ³lio e a rota de execuÃ§Ã£o da Tecnotitan.",
          deckCards: [
            ["01", "Tese e mercado", "Problema, oportunidade, clientes-alvo e por que IA, software e automaÃ§Ã£o convergem agora."],
            ["02", "Produtos e IP", "PortfÃ³lio atual, linhas prÃ³prias e capacidades que podem virar plataformas repetÃ­veis."],
            ["03", "Equipe e execuÃ§Ã£o", "Estrutura inicial, lideranÃ§a fundadora, capacidades tÃ©cnicas e operaÃ§Ã£o com foco em produto."],
            ["04", "Roadmap", "Fases de validaÃ§Ã£o, empacotamento, expansÃ£o regional e construÃ§Ã£o de propriedade intelectual."],
            ["05", "Uso de capital", "Prioridades para acelerar produto, vendas, talento tÃ©cnico, automaÃ§Ã£o interna e validaÃ§Ã£o comercial."],
            ["06", "Conversa", "Acesso direto para solicitar informaÃ§Ãµes adicionais, compartilhar tese ou coordenar uma reuniÃ£o com a Tecnotitan."]
          ],
          deckPageButton: "Ver pÃ¡gina do deck",
          deckButton: "Solicitar investor deck",
          investorCtaTitle: "AÃ§Ãµes para investidores",
          investorCtaText: "Escolha o prÃ³ximo passo para receber informaÃ§Ãµes, contatar a equipe ou abrir uma conversa estratÃ©gica.",
          investorCtaCards: [
            ["01", "Solicitar investor deck", "Solicite o resumo executivo de tese, mercado, roadmap e oportunidade."],
            ["02", "Contatar a equipe", "Envie perguntas sobre estratÃ©gia, portfÃ³lio, equipe ou estÃ¡gio de crescimento."],
            ["03", "Agendar conversa", "Abra uma conversa sobre investimento, parcerias estratÃ©gicas ou expansÃ£o."]
          ],
          formTitle: "Contato especial para investidores",
          formText: "Compartilhe seu perfil, tese ou interesse estratÃ©gico e a equipe da Tecnotitan responderÃ¡ por info@tecnotitan.com.",
          formLabels: ["Nome", "Firma / fundo", "PaÃ­s", "Email", "Tipo de interesse", "Mensagem"],
          formOptions: ["Selecionar", "Investimento", "Parceria estratÃ©gica", "Investor deck", "Contatar a equipe", "Agendar conversa"],
          formButton: "Enviar para info@tecnotitan.com",
          formSending: "Enviando...",
          formErrorTitle: "NÃ£o foi possÃ­vel enviar",
          formErrorText: "Tente novamente ou escreva diretamente para info@tecnotitan.com.",
          formNewsletter: "Quero assinar a newsletter oficial da Tecnotitan.",
          formSuccessTitle: "SolicitaÃ§Ã£o enviada",
          formSuccessText: "Obrigado. A equipe da Tecnotitan analisarÃ¡ sua mensagem de investimento e responderÃ¡ por info@tecnotitan.com.",
          cards: [
            ["01", "TraÃ§Ã£o via serviÃ§os", "Resolver problemas reais de empresas e transformar padrÃµes de entrega em capacidades reutilizÃ¡veis."],
            ["02", "Produtos prÃ³prios", "Converter ferramentas internas e fluxos validados em plataformas comerciais."],
            ["03", "Escala Brasil e LatAm", "Expandir tecnologia aplicada para empresas no Brasil, AmÃ©rica Latina e mercados globais."]
          ]
        }
      },
      "contacto.html": {
        title: "Contato | Tecnotitan",
        description:
          "Entre em contato com a Tecnotitan para projetos, serviÃ§os, parcerias e investimento.",
        content: {
          label: "Contato",
          titleLines: ["Vamos falar sobre", "a prÃ³xima tecnologia"],
          intro:
            "Canal geral para queixas, reclamaÃ§Ãµes, sugestÃµes e solicitaÃ§Ãµes sobre a Tecnotitan.",
          cards: [
            ["Atendimento", "SolicitaÃ§Ãµes gerais", "Perguntas, comentÃ¡rios e mensagens sobre a Tecnotitan e seus serviÃ§os."],
            ["Qualidade", "Queixas e reclamaÃ§Ãµes", "Relatos sobre experiÃªncias, processos ou respostas que precisam de revisÃ£o."],
            ["Melhoria", "SugestÃµes", "Ideias para melhorar produtos, serviÃ§os, comunicaÃ§Ã£o ou experiÃªncia do usuÃ¡rio."]
          ],
          formTitle: "Contato geral",
          formText: "Envie queixas, reclamaÃ§Ãµes, sugestÃµes ou solicitaÃ§Ãµes gerais para info@tecnotitan.com.",
          formLabels: ["Nome", "Email", "Empresa", "PaÃ­s", "Tipo de solicitaÃ§Ã£o", "Mensagem"],
          formOptions: ["Selecionar", "Queixa", "ReclamaÃ§Ã£o", "SugestÃ£o", "SolicitaÃ§Ã£o geral"],
          formButton: "Enviar para info@tecnotitan.com",
          formSending: "Enviando...",
          formErrorTitle: "NÃ£o foi possÃ­vel enviar",
          formErrorText: "Tente novamente ou escreva diretamente para info@tecnotitan.com.",
          formNewsletter: "Quero assinar a newsletter oficial da Tecnotitan.",
          formSuccessTitle: "Mensagem enviada",
          formSuccessText: "Obrigado. Recebemos sua solicitaÃ§Ã£o geral e responderemos por info@tecnotitan.com."
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
            "O deck formal da Tecnotitan estÃ¡ preparado como ativo futuro. Enquanto ele Ã© publicado, vocÃª pode solicitar acesso direto pelo formulÃ¡rio de investidores.",
          cards: [
            ["01", "Tese", "Problema, oportunidade de mercado e tese de tecnologia aplicada para empresas globais."],
            ["02", "PortfÃ³lio", "Produtos, divisÃµes, propriedade intelectual potencial e caminhos para plataformas repetÃ­veis."],
            ["03", "ExecuÃ§Ã£o", "Equipe inicial, roadmap, prioridades de capital e prÃ³ximos marcos de validaÃ§Ã£o."]
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
  label: "ä¸­æ–‡",
  nav: ["é¦–é¡µ", "å…³äºŽæˆ‘ä»¬", "äº§å“", "æœåŠ¡", "æŒ‡å—", "äº‹ä¸šéƒ¨", "æŠ•èµ„è€…", "è”ç³»"],
  headerAction: "é¢„çº¦æ²Ÿé€š",
  writeAction: "ç•™è¨€",
  openNav: "æ‰“å¼€å¯¼èˆª",
  closeNav: "å…³é—­å¯¼èˆª",
  brandHome: "Tecnotitan é¦–é¡µ",
  mainNav: "ä¸»å¯¼èˆª",
  footerNav: "é¡µè„šå¯¼èˆª",
  footerMeta: [
    "Tecnotitan Corporate",
    "è½¯ä»¶ã€äººå·¥æ™ºèƒ½ã€ç”µå­æ¸¸æˆã€æœºå™¨äººä¸ŽæŠ€æœ¯è½¬åž‹ã€‚",
    "å“¥ä¼¦æ¯”äºš | é¢å‘å…¨çƒæŠ•èµ„è€…ä¸Žä¼ä¸šæœåŠ¡ã€‚",
    "æ³•å¾‹å£°æ˜Ž Â· LinkedIn Â· Facebook Â· Instagram",
    "Â© 2026 Tecnotitanã€‚ä¿ç•™æ‰€æœ‰æƒåˆ©ã€‚"
  ],
  deckUi: ["ç´¢å– Deck", "æŸ¥çœ‹ PDF Deck", "ä¸‹è½½ PDF"],
  pages: {
    "index.html": {
      title: "Tecnotitan | é¢å‘å…¨çƒå¸‚åœºçš„åº”ç”¨æŠ€æœ¯",
      description: "Tecnotitan ä¸ºå…¨çƒä¼ä¸šä¸ŽæŠ•èµ„è€…æ‰“é€ è½¯ä»¶ã€äººå·¥æ™ºèƒ½ã€ç”µå­æ¸¸æˆå’Œæœºå™¨äººæŠ€æœ¯ã€‚",
      content: {
        heroTitle: ["æ— é™", "æ•ˆçŽ‡", "åŠ©åŠ›ä¼ä¸š", "è§„æ¨¡åŒ–å¢žé•¿"],
        heroText: "Tecnotitan è®¾è®¡ AI ç³»ç»Ÿã€å•†ä¸šè½¯ä»¶å’Œè‡ªåŠ¨åŒ–æ–¹æ¡ˆï¼Œå°†å¤æ‚æµç¨‹è½¬åŒ–ä¸ºæ›´å¿«é€Ÿã€æ›´æ™ºèƒ½ã€å¯è¡¡é‡çš„è¿è¥ã€‚",
        primaryCta: "æŠ•èµ„è€…è®ºç‚¹",
        secondaryCta: "æŽ¢ç´¢äº§å“",
        nextPreview: "é«˜ä»·å€¼æœåŠ¡ã€è‡ªæœ‰äº§å“ä¸Žå¯æ‰©å±•çŸ¥è¯†äº§æƒ",
        visionLabel: "ä¼ä¸šæ„¿æ™¯",
        visionTitle: "æ‰“é€ ä¸€å®¶å…·æœ‰å…¨çƒå½±å“åŠ›çš„åº”ç”¨æŠ€æœ¯å…¬å¸ã€‚",
        visionParagraphs: [
          "Tecnotitan æ­£åœ¨æž„å»ºä¸€ä¸ªæ¨¡å¼ï¼Œè®©æœåŠ¡ã€äº§å“å’ŒæŠ€æœ¯äº‹ä¸šéƒ¨å…±äº«çŸ¥è¯†ã€çŸ¥è¯†äº§æƒå’Œå¯å¤ç”¨èƒ½åŠ›ã€‚",
          "æˆ‘ä»¬çš„æ„¿æ™¯æ˜¯ä»Žæ‹‰ä¸ç¾Žæ´²å‡ºå‘ï¼Œæ‰“é€ å¯èµ°å‘å…¨çƒå¸‚åœºçš„ä¼ä¸šè½¯ä»¶ã€AI ç³»ç»Ÿã€äº¤äº’ä½“éªŒå’Œæœºå™¨äººæŠ€æœ¯ã€‚"
        ],
        visionCards: [
          ["è½¯ä»¶", "ä¼ä¸šè¿è¥ç³»ç»Ÿ", "å†…éƒ¨å¹³å°ã€è‡ªåŠ¨åŒ–ã€æ•°æ®å’Œ Web äº§å“ï¼Œæå‡æ‰§è¡ŒåŠ›ã€‚"],
          ["AI", "åº”ç”¨äºŽå·¥ä½œçš„æ™ºèƒ½", "ä»£ç†ã€åˆ†æžã€copilot å’ŒåµŒå…¥ä¸šåŠ¡æµç¨‹çš„æ™ºèƒ½å·¥ä½œæµã€‚"],
          ["äº’åŠ¨", "ç”µå­æ¸¸æˆä¸Žä»¿çœŸ", "é¢å‘åŸ¹è®­ã€å“ç‰Œã€æ•™è‚²å’Œæ–°äº§å“çš„æ²‰æµ¸å¼ä½“éªŒã€‚"],
          ["æœºå™¨äºº", "ç‰©ç†æ•°å­—ç³»ç»Ÿ", "è½¯ä»¶ã€ä¼ æ„Ÿå™¨ã€æŽ§åˆ¶å’Œæ•°æ®ï¼ŒæŠŠè¿è¥ä¸Žæ™ºèƒ½è¿žæŽ¥èµ·æ¥ã€‚"]
        ],
        marketTitle: "åº”ç”¨æŠ€æœ¯èƒ½å¤Ÿåˆ›é€ ä¼˜åŠ¿çš„å¸‚åœºã€‚",
        marketText: "Tecnotitan é¢å‘çœŸæ­£éœ€è¦æ•°å­—åŒ–ã€è‡ªåŠ¨åŒ–ã€äº¤äº’ä½“éªŒå’Œæ™ºèƒ½ç³»ç»Ÿçš„å®¢æˆ·ã€‚",
        marketCards: [
          ["ä¼ä¸š", "è¿è¥è½¯ä»¶", "éœ€è¦å†…éƒ¨ CRMã€é—¨æˆ·ã€ä»ªè¡¨ç›˜ã€æµç¨‹å’Œè‡ªåŠ¨åŒ–çš„å…¬å¸ã€‚"],
          ["è¿è¥", "ç”Ÿäº§åŠ› AI", "é”€å”®ã€æ”¯æŒã€è´¢åŠ¡å’Œè¿è¥å›¢é˜Ÿä¸­å¯é‡å¤çš„å·¥ä½œã€‚"],
          ["æ•™è‚²", "ä»¿çœŸä¸Žå­¦ä¹ ", "éœ€è¦åŸ¹è®­ã€è¯„ä¼°å’Œæ²‰æµ¸ä½“éªŒçš„æœºæž„ä¸Žä¼ä¸šã€‚"],
          ["å¨±ä¹", "ç”µå­æ¸¸æˆä¸Žå“ç‰Œ", "äº’åŠ¨äº§å“ã€æ¸¸æˆåŒ–ã€å“ç‰Œä½“éªŒå’Œæ–°çš„æ•°å­—å†…å®¹ã€‚"],
          ["å·¥ä¸š", "æœºå™¨äººä¸Žæ•°æ®", "å¯è¿žæŽ¥ä¼ æ„Ÿå™¨ã€è½¯ä»¶ã€æŽ§åˆ¶å’Œè¿è¥æ™ºèƒ½çš„æµç¨‹ã€‚"],
          ["æœºæž„", "æŠ€æœ¯è½¬åž‹", "éœ€è¦æˆ˜ç•¥ã€å®žæ–½å’Œé‡‡ç”¨è·¯å¾„çš„å…¬å…±æˆ–ç§è¥ç»„ç»‡ã€‚"]
        ],
        investorCtaTitle: "æŠ•èµ„è€…è¡ŒåŠ¨",
        investorCtaText: "å¿«é€ŸæŸ¥çœ‹æœºä¼šã€è”ç³»åˆ›å§‹å›¢é˜Ÿæˆ–å¼€å¯å¯¹è¯ã€‚",
        investorCtaCards: [
          ["01", "ç´¢å–æŠ•èµ„è€… Deck", "èŽ·å– Tecnotitan çš„è®ºç‚¹ã€å¸‚åœºã€è·¯çº¿å›¾å’Œæœºä¼šæ‘˜è¦ã€‚"],
          ["02", "è”ç³»å›¢é˜Ÿ", "å°±æˆ˜ç•¥é—®é¢˜æˆ–åŽç»­æ²Ÿé€šç›´æŽ¥è”ç³» Tecnotitanã€‚"],
          ["03", "é¢„çº¦æ²Ÿé€š", "å›´ç»•æŠ•èµ„ã€åˆä½œæˆ–å…¨çƒå¢žé•¿å¼€å¯å¯¹è¯ã€‚"]
        ],
        gatewayTitle: "ç”±å¤šä¸ªäº‹ä¸šéƒ¨æž„å»ºçš„ç§‘æŠ€å…¬å¸",
        gatewayText: "æˆ‘ä»¬ç”¨æ¸…æ™°é¡µé¢å‘å®¢æˆ·ã€ä¼™ä¼´å’Œå…¨çƒæŠ•èµ„è€…è®²è¿°å…¬å¸æ•…äº‹ã€‚",
        cards: [
          ["01", "å…³äºŽæˆ‘ä»¬", "ä½¿å‘½ã€æŠ€æœ¯è®ºç‚¹ä¸Žæ‰§è¡ŒåŽŸåˆ™ã€‚"],
          ["02", "äº§å“", "æŠŠè½¯ä»¶ã€AIã€ç”µå­æ¸¸æˆå’Œæœºå™¨äººæŠ€æœ¯è½¬åŒ–ä¸ºå¹³å°ã€‚"],
          ["03", "æœåŠ¡", "äººå·¥æ™ºèƒ½ä¸ŽæŠ€æœ¯è½¬åž‹å’¨è¯¢ã€‚"],
          ["04", "äº‹ä¸šéƒ¨", "ç”¨äºŽæž„å»ºå¤šä¸ªå¸‚åœºçš„è¿è¥ç»„åˆã€‚"],
          ["05", "æŠ•èµ„è€…", "æ„¿æ™¯ã€æœºä¼šã€æ¨¡å¼å’Œå¢žé•¿è·¯å¾„ã€‚"],
          ["06", "è”ç³»", "å•†ä¸šã€åˆä½œä¸ŽæŠ•èµ„å¯¹è¯ã€‚"]
        ]
      }
    },
    "nosotros.html": {
      title: "å…³äºŽæˆ‘ä»¬ | Tecnotitan",
      description: "äº†è§£ Tecnotitan ä½œä¸ºåº”ç”¨æŠ€æœ¯å…¬å¸çš„æ„¿æ™¯ã€ä½¿å‘½å’ŒåŽŸåˆ™ã€‚",
      content: {
        label: "å…³äºŽæˆ‘ä»¬",
        titleLines: ["ä¸€å®¶æœ‰å…¨çƒé›„å¿ƒçš„", "åº”ç”¨æŠ€æœ¯å…¬å¸"],
        intro: "Tecnotitan è‡´åŠ›äºŽæŠŠè½¯ä»¶ã€AIã€ç”µå­æ¸¸æˆå’Œæœºå™¨äººèƒ½åŠ›è½¬åŒ–ä¸ºæå‡ä¼ä¸šç«žäº‰åŠ›çš„äº§å“ä¸ŽæœåŠ¡ã€‚",
        thesisLabel: "æ„¿æ™¯",
        thesisTitle: "æˆä¸ºä¸€å®¶å…·æœ‰å…¨çƒå½±å“åŠ›çš„æ‹‰ä¸ç¾Žæ´²åº”ç”¨æŠ€æœ¯å…¬å¸ã€‚",
        paragraphs: [
          "æˆ‘ä»¬çš„è®ºç‚¹å¾ˆç®€å•ï¼šæŽŒæ¡è½¯ä»¶ã€æ•°æ®ã€AIã€äº¤äº’ä½“éªŒå’Œæ™ºèƒ½ç‰©ç†ç³»ç»Ÿçš„å…¬å¸ï¼Œå°†åˆ›é€ æŒä¹…ä¼˜åŠ¿ã€‚",
          "Tecnotitan æ•´åˆè¿™äº›å­¦ç§‘ï¼Œæž„å»ºè‡ªæœ‰è§£å†³æ–¹æ¡ˆï¼Œé™ªä¼´ä¼ä¸šè½¬åž‹ï¼Œå¹¶æ‰“å¼€æ–°çš„å¢žé•¿äº‹ä¸šéƒ¨ã€‚"
        ],
        leadershipTitle: "é¢†å¯¼åŠ›ä¸Žåˆå§‹å›¢é˜Ÿ",
        leadershipText: "Tecnotitan ä»¥ç²¾ç®€ã€æŠ€æœ¯å¯¼å‘å’Œæ‰§è¡Œå¯¼å‘çš„ç»“æž„å»ºè®¾ï¼šåˆ›å§‹äººé¢†å¯¼ã€ä¸“èŒå’¨è¯¢å’Œå¼€å‘èƒ½åŠ›ã€‚",
        leadershipCards: [
          ["CEO / Founder", "David Arias Giraldo", "è´Ÿè´£æˆ˜ç•¥æ–¹å‘ã€äº§å“æ„¿æ™¯ã€ä¼ä¸šå‘å±•å’ŒæŠ€æœ¯ç»„åˆå»ºè®¾ã€‚"],
          ["å…¨èŒå’¨è¯¢", "ä¸“èŒé¡¾é—®", "æ”¯æŒæˆ˜ç•¥ã€è¿è¥ã€ç ”ç©¶ã€æ–‡æ¡£å’ŒæŠ€æœ¯è½¬åž‹ã€‚"],
          ["å·¥ç¨‹", "2 åç¨‹åºå‘˜", "åˆå§‹å¼€å‘å›¢é˜Ÿï¼Œæž„å»ºè½¯ä»¶ã€åŽŸåž‹ã€è‡ªåŠ¨åŒ–å’Œè‡ªæœ‰äº§å“ã€‚"]
        ],
        cards: [
          ["01", "äº§å“ä¼˜å…ˆäºŽå±•ç¤º", "æˆ‘ä»¬ä¼˜å…ˆæž„å»ºå¯è¿è¡Œã€å¯è¡¡é‡ã€å¯æ‰©å±•çš„ç³»ç»Ÿã€‚"],
          ["02", "AI ä½œä¸ºåŸºç¡€è®¾æ–½", "æŠŠ AI ä½œä¸ºè‡ªåŠ¨åŒ–ã€å†³ç­–å’Œå­¦ä¹ çš„æ ¸å¿ƒå±‚ã€‚"],
          ["03", "å¯æ‰§è¡Œçš„å¤šå­¦ç§‘èƒ½åŠ›", "è½¯ä»¶ã€æ¸¸æˆã€æœºå™¨äººå’Œå’¨è¯¢ä½œä¸ºä¸€ä¸ªæŠ€æœ¯ç»„åˆååŒå·¥ä½œã€‚"]
        ]
      }
    },
    "productos.html": {
      title: "äº§å“ | Tecnotitan",
      description: "Tecnotitan åœ¨ä¼ä¸šè½¯ä»¶ã€äººå·¥æ™ºèƒ½ã€ç”µå­æ¸¸æˆå’Œæœºå™¨äººé¢†åŸŸçš„äº§å“ã€‚",
      content: {
        label: "äº§å“",
        titleLines: ["èƒ½å¤Ÿæ²‰æ·€ä¸º", "å¹³å°çš„äº§å“"],
        intro: "æˆ‘ä»¬æž„å»ºè‡ªæœ‰äº§å“å’Œå®šåˆ¶ç³»ç»Ÿï¼Œå¹¶è®©å®ƒä»¬é€æ­¥æ¼”è¿›ä¸ºå¯å¤åˆ¶çš„å¹³å°ã€‚",
        cards: [
          ["ä¸­å°ä¼ä¸š AI", "Copiloto PyME", "é¢å‘æ‹‰ç¾Žä¸­å°ä¼ä¸šçš„ AI å†³ç­–é¢æ¿ï¼Œè¿žæŽ¥é”€å”®ã€æ”¶é“¶ã€åº“å­˜å’Œå®¢æˆ·æ¨¡å—ï¼Œå¸®åŠ©ä¼ä¸šæ›´æœ‰æŽ§åˆ¶åœ°è¿è¥ã€‚"],
          ["ä¼ä¸šæ“ä½œç³»ç»Ÿ", "Tecnotitan OS", "é›†ä¸­æµç¨‹ã€æ•°æ®ã€è‡ªåŠ¨åŒ–ã€AI ä»£ç†å’Œå†…éƒ¨å·¥ä½œæµçš„ä¼ä¸šå¹³å°ã€‚"],
          ["ç§»åŠ¨ + AI", "Life Copilot", "ç”¨äºŽç›®æ ‡ã€ä»»åŠ¡ã€ä¹ æƒ¯å’Œå†³ç­–ç®¡ç†çš„ä¸ªäººç”Ÿäº§åŠ› AI ç§»åŠ¨åº”ç”¨ã€‚"],
          ["ç”µå­æ¸¸æˆ", "Tecnotitan Engine", "ç”¨äºŽåŽŸåž‹åŒ–æ¸¸æˆã€ä»¿çœŸå™¨ã€äº’åŠ¨ä½“éªŒå’Œæ¸¸æˆåŒ–ä¸–ç•Œçš„å¼•æ“Žä¸Žå·¥å…·åŒ…ã€‚"],
          ["æ•™è‚²", "Academia Tecnotitan", "é¢å‘ AIã€è½¯ä»¶ã€ç”µå­æ¸¸æˆã€æœºå™¨äººå’ŒæŠ€æœ¯è½¬åž‹çš„å­¦ä¹ å¹³å°ã€‚"],
          ["AI å®¢æœ", "Call Center AI Tecnotitan", "ç”¨äºŽæ”¯æŒã€é”€å”®ã€å®¢æˆ·è·Ÿè¿›å’Œè”ç»œä¸­å¿ƒè‡ªåŠ¨åŒ–çš„å¯¹è¯å¼ä»£ç†ã€‚"]
        ]
      }
    },
    "servicios.html": {
      title: "æœåŠ¡ | Tecnotitan",
      description: "é¢å‘ä¼ä¸šçš„äººå·¥æ™ºèƒ½å’¨è¯¢ä¸ŽæŠ€æœ¯è½¬åž‹æœåŠ¡ã€‚",
      content: {
        label: "æœåŠ¡",
        titleLines: ["ä»Žå’¨è¯¢èµ°å‘", "çœŸæ­£å®žæ–½"],
        intro: "æˆ‘ä»¬å¸®åŠ©ä¼ä¸šè¯†åˆ«ã€è®¾è®¡å¹¶å®žæ–½å…·æœ‰è¿è¥å½±å“åŠ›çš„ AI å’Œè½¯ä»¶ã€‚",
        timelineLabel: "æœåŠ¡",
        cards: [
          ["01", "AI è¯Šæ–­", "è¯„ä¼°æµç¨‹ã€æ•°æ®ã€è‡ªåŠ¨åŒ–æœºä¼šå’Œé¢„æœŸå›žæŠ¥ã€‚"],
          ["02", "æŠ€æœ¯è·¯çº¿å›¾", "æž¶æž„ã€ä¼˜å…ˆçº§ã€æŠ€æœ¯æ ˆã€é£Žé™©å’Œæ‰§è¡Œè®¡åˆ’ã€‚"],
          ["03", "å®žæ–½", "å¼€å‘è½¯ä»¶ã€AI ä»£ç†ã€é›†æˆå’Œå¯è¿è¡ŒåŽŸåž‹ã€‚"],
          ["04", "é‡‡ç”¨", "åŸ¹è®­ã€è¡¡é‡ã€æŒç»­æ”¹è¿›å’Œèƒ½åŠ›è½¬ç§»ã€‚"]
        ]
      }
    },
    "divisiones.html": {
      title: "äº‹ä¸šéƒ¨ | Tecnotitan",
      description: "Tecnotitan åœ¨è½¯ä»¶ã€AIã€ç”µå­æ¸¸æˆã€æœºå™¨äººå’ŒæŠ€æœ¯ ventures æ–¹é¢çš„äº‹ä¸šéƒ¨ã€‚",
      content: {
        label: "äº‹ä¸šéƒ¨",
        titleLines: ["æŠ€æœ¯å¼•æ“Ž", "ç»„æˆçš„ç»„åˆ"],
        intro: "æ¯ä¸ªäº‹ä¸šéƒ¨éƒ½åˆ›é€ å¯å¤ç”¨èƒ½åŠ›ã€çŸ¥è¯†äº§æƒå’Œç‹¬ç«‹å•†ä¸šæœºä¼šã€‚",
        divisionThesisLabel: "è¿è¥æž¶æž„",
        divisionThesisTitle: "ç”±è½¯ä»¶ã€æ•°æ®å’Œåº”ç”¨æ™ºèƒ½è¿žæŽ¥çš„äº‹ä¸šéƒ¨ã€‚",
        divisionThesisParagraphs: [
          "Tecnotitan çš„æ¯ä¸ªäº‹ä¸šéƒ¨éƒ½å¯ä»¥ä½œä¸ºå•†ä¸šå•å…ƒã€çŸ¥è¯†äº§æƒå®žéªŒå®¤å’Œå…¶ä»–äº‹ä¸šéƒ¨çš„èƒ½åŠ›æ¥æºã€‚",
          "ç›®æ ‡æ˜¯è®©å’¨è¯¢ã€äº§å“å’Œè‡ªæœ‰æŠ€æœ¯ç›¸äº’å¢žå¼ºï¼Œåˆ›é€ å¸‚åœºï¼Œè€Œä¸ä»…æ˜¯å­¤ç«‹é¡¹ç›®ã€‚"
        ],
        cards: [
          ["ä¼ä¸šè½¯ä»¶", "Tecnotitan Software", "é¢å‘ä¼ä¸šè¿è¥ä¼˜åŒ–çš„ Web å¹³å°ã€å†…éƒ¨ CRMã€é—¨æˆ·ã€ä»ªè¡¨ç›˜å’Œè‡ªåŠ¨åŒ–ã€‚"],
          ["äººå·¥æ™ºèƒ½", "Tecnotitan AI", "ä»£ç†ã€copilotã€åˆ†æžã€æ–‡æ¡£è‡ªåŠ¨åŒ–å’ŒåµŒå…¥çœŸå®žæµç¨‹çš„æ™ºèƒ½å·¥ä½œæµã€‚"],
          ["ç”µå­æ¸¸æˆä¸Žäº’åŠ¨", "Tecnotitan Games", "æ¸¸æˆã€ä»¿çœŸå™¨ã€æ¸¸æˆåŒ–å’Œæ²‰æµ¸å¼ä½“éªŒï¼Œç”¨äºŽåŸ¹è®­ã€å“ç‰Œå’Œæ–°äº§å“ã€‚"],
          ["æœºå™¨äºº", "Tecnotitan Robotics", "è½¯ä»¶ã€ä¼ æ„Ÿå™¨ã€æŽ§åˆ¶å’Œæ•°æ®ï¼Œæž„å»ºä¸Žè¿è¥æ™ºèƒ½è¿žæŽ¥çš„ç‰©ç†æ•°å­—ç³»ç»Ÿã€‚"],
          ["æŠ€æœ¯å’¨è¯¢", "Tecnotitan Advisory", "AI æˆ˜ç•¥ã€æŠ€æœ¯è½¬åž‹ã€ä¼ä¸šé‡‡ç”¨å’Œé«˜ç®¡é™ªä¼´ã€‚"],
          ["Ventures", "Tecnotitan Ventures", "å®žéªŒã€spin-offã€è‡ªæœ‰äº§å“å’Œç”±å†…éƒ¨èƒ½åŠ›æž„å»ºçš„æ–°æœºä¼šã€‚"]
        ]
      }
    },
    "inversionistas.html": {
      title: "æŠ•èµ„è€… | Tecnotitan",
      description: "Tecnotitan é¢å‘å…¨çƒæŠ•èµ„è€…çš„é¡µé¢ï¼šè®ºç‚¹ã€å¸‚åœºã€æ¨¡å¼å’Œæ„¿æ™¯ã€‚",
      content: {
        label: "æŠ•èµ„è€…",
        titleLines: ["ä»Žæ‹‰ä¸ç¾Žæ´²å‡ºå‘", "é¢å‘å…¨çƒå¸‚åœºçš„", "åº”ç”¨æŠ€æœ¯"],
        intro: "Tecnotitan ç»“åˆé«˜ä»·å€¼æœåŠ¡ã€è‡ªæœ‰äº§å“å’ŒæŠ€æœ¯äº‹ä¸šéƒ¨ï¼Œæž„å»ºä¸€å®¶å¯æ‰©å±•çš„åº”ç”¨æŠ€æœ¯å…¬å¸ã€‚",
        metrics: [
          ["å¸‚åœº", "è½¯ä»¶ + AI", "ç”±æ™ºèƒ½è‡ªåŠ¨åŒ–æŽ¨åŠ¨çš„ä¼ä¸šæ•°å­—åŒ–ã€‚"],
          ["æ‰©å¼ ", "å¤šäº‹ä¸šéƒ¨", "è½¯ä»¶ã€AIã€ç”µå­æ¸¸æˆã€æœºå™¨äººå’Œå’¨è¯¢ä½œä¸ºäº’è”å¼•æ“Žã€‚"],
          ["æ¨¡å¼", "æœåŠ¡åˆ°äº§å“", "å®¢æˆ·å­¦ä¹ ã€è‡ªæœ‰ IP å’Œå¯å¤åˆ¶å¹³å°ã€‚"]
        ],
        thesisLabel: "è®ºç‚¹",
        thesisTitle: "æœ€å¥½çš„æŠ€æœ¯ä¼™ä¼´ä¼šæŠŠå’¨è¯¢æ·±åº¦ä¸Žäº§å“æ‰§è¡Œç»“åˆèµ·æ¥ã€‚",
        paragraphs: [
          "å¸‚åœºæ­£åœ¨ä»Žä¼ ç»Ÿè½¯ä»¶è½¬å‘åŒ…å«ä»£ç†ã€è‡ªåŠ¨åŒ–ã€æ•°æ®å’Œäº¤äº’ä½“éªŒçš„ç³»ç»Ÿã€‚Tecnotitan ä½äºŽè¿™ä¸€äº¤æ±‡ç‚¹ã€‚",
          "æˆ‘ä»¬çš„è·¯å¾„ç»“åˆæœåŠ¡æ”¶å…¥ã€äº§å“å¼€å‘ã€çŸ¥è¯†äº§æƒå’ŒæŒ‰äº‹ä¸šéƒ¨å½¢æˆ spin-off çš„æœºä¼šã€‚"
        ],
        opportunityTitle: "æŠ•èµ„æœºä¼š",
        opportunityText: "Tecnotitan æ—¨åœ¨æ•æ‰ AIã€è½¯ä»¶å’Œæœºå™¨äººé¢†åŸŸçš„ä¼ä¸šéœ€æ±‚ï¼Œå¹¶æŠŠæœåŠ¡å­¦ä¹ è½¬åŒ–ä¸ºè‡ªæœ‰äº§å“å’Œå¯æ‰©å±• IPã€‚",
        opportunityCards: [
          ["01", "ç»“æž„æ€§éœ€æ±‚", "ä¼ä¸šéœ€è¦è‡ªåŠ¨åŒ–æµç¨‹ã€æ•°æ®å’Œå†³ç­–ä»¥ä¿æŒç«žäº‰åŠ›ã€‚"],
          ["02", "æ··åˆæ¨¡å¼", "é«˜ä»·å€¼æœåŠ¡å¸¦æ¥æ”¶å…¥ã€å¸‚åœºå­¦ä¹ å’Œäº§å“æœºä¼šã€‚"],
          ["03", "å¯ç§¯ç´¯ IP", "æ¯ä¸ªé¡¹ç›®éƒ½èƒ½æ²‰æ·€ä¸ºå·¥å…·ã€ä»£ç†ã€æ¡†æž¶å’Œå¯å¤åˆ¶å¹³å°ã€‚"],
          ["04", "åŒºåŸŸæ‰©å¼ ", "ä»Žæ‹‰ä¸ç¾Žæ´²æž„å»ºåº”ç”¨æŠ€æœ¯ï¼Œå¹¶é”€å”®ç»™å…¨çƒç±»ä¼¼éœ€æ±‚çš„å¸‚åœºã€‚"]
        ],
        indicatorTitle: "è·Ÿè¸ªæŒ‡æ ‡",
        indicatorText: "ç”¨äºŽä¸“ä¸šè·Ÿè¸ª Tecnotitan åœ¨æ”¶å…¥ã€è‡ªæœ‰äº§å“ã€ç›®æ ‡å®¢æˆ·å’ŒåŒºåŸŸè§„æ¨¡åŒ–æ–¹é¢çš„è¿›å±•ã€‚",
        indicatorMetrics: [
          ["ç›®æ ‡å¸‚åœº", "ä¼ä¸š + AI", "è½¯ä»¶ã€è‡ªåŠ¨åŒ–ã€äº’åŠ¨ä½“éªŒå’Œåº”ç”¨æœºå™¨äººã€‚"],
          ["ä¸šåŠ¡é¢†åŸŸ", "5 ä¸ªäº‹ä¸šéƒ¨", "è½¯ä»¶ã€AIã€ç”µå­æ¸¸æˆã€æœºå™¨äººå’ŒæŠ€æœ¯å’¨è¯¢ã€‚"],
          ["äº§å“", "6 æ¡äº§å“çº¿", "Copiloto Pymeã€Tecnotitan OSã€Life Copilotã€Tecnotitan Engineã€Academia å’Œ Call Center AIã€‚"]
        ],
        indicatorCards: [
          ["ç›®æ ‡å®¢æˆ·", "ä¸­å¤§åž‹ä¼ä¸š", "æ‹¥æœ‰é‡å¤æµç¨‹ã€æœªå……åˆ†åˆ©ç”¨æ•°æ®å’Œè‡ªåŠ¨åŒ–åŽ‹åŠ›çš„ç»„ç»‡ã€‚"],
          ["è·¯çº¿å›¾", "æœåŠ¡åˆ°å¹³å°", "æŠŠé‡å¤äº¤ä»˜è½¬åŒ–ä¸ºå†…éƒ¨å·¥å…·ã€å•†ä¸šæ¨¡å—å’Œäº§å“ã€‚"],
          ["æ‰©å¼ ", "LatAm åˆ°å…¨çƒ", "éªŒè¯åŒºåŸŸæ¡ˆä¾‹ï¼Œå¹¶å‘ç±»ä¼¼éœ€æ±‚çš„å¸‚åœºæ‰©å±•åº”ç”¨æŠ€æœ¯ã€‚"]
        ],
        roadmapTitle: "æˆ˜ç•¥è·¯çº¿å›¾",
        roadmapText: "åˆ†é˜¶æ®µæŠŠæŠ€æœ¯èƒ½åŠ›è½¬åŒ–ä¸ºæœåŠ¡ã€è‡ªæœ‰äº§å“å’Œæ‰©å¼ æœºä¼šã€‚",
        roadmapCards: [
          ["2026", "éªŒè¯ä¸ŽçœŸå®žæ¡ˆä¾‹", "å·©å›º AI/è½¯ä»¶æœåŠ¡ï¼Œæž„å»ºä¼ä¸šæ¡ˆä¾‹å¹¶è®°å½•å¯å¤åˆ¶æ¨¡å¼ã€‚"],
          ["2027", "äº§å“ä¸ŽçŸ¥è¯†äº§æƒ", "æ‰“åŒ…å†…éƒ¨å·¥å…·ï¼ŒæŽ¨å‡ºç¬¬ä¸€æ‰¹å•†ä¸šäº§å“çº¿å¹¶å¼ºåŒ–æŠ€æœ¯äº‹ä¸šéƒ¨ã€‚"],
          ["2028", "åŒºåŸŸè§„æ¨¡ä¸Žå¹³å°", "æ‰©å¤§åŒºåŸŸé”€å”®ï¼ŒæŠŠè§£å†³æ–¹æ¡ˆå˜ä¸ºå¹³å°ï¼Œå¹¶è¯„ä¼°æŒ‰äº‹ä¸šéƒ¨ spin-offã€‚"]
        ],
        deckTitle: "Investor Deck / Data Room",
        deckText: "ä¸ºéœ€è¦è¯„ä¼° Tecnotitan è®ºç‚¹ã€å¸‚åœºã€ç»„åˆå’Œæ‰§è¡Œè·¯å¾„çš„æŠ•èµ„è€…å‡†å¤‡çš„ææ–™ã€‚",
        deckCards: [
          ["01", "è®ºç‚¹ä¸Žå¸‚åœº", "é—®é¢˜ã€æœºä¼šã€ç›®æ ‡å®¢æˆ·ï¼Œä»¥åŠ AIã€è½¯ä»¶å’Œè‡ªåŠ¨åŒ–ä¸ºä½•åœ¨æ­¤åˆ»èžåˆã€‚"],
          ["02", "äº§å“ä¸Ž IP", "å½“å‰ç»„åˆã€è‡ªæœ‰äº§å“çº¿å’Œå¯å˜æˆå¯å¤åˆ¶å¹³å°çš„èƒ½åŠ›ã€‚"],
          ["03", "å›¢é˜Ÿä¸Žæ‰§è¡Œ", "åˆå§‹ç»“æž„ã€åˆ›å§‹äººé¢†å¯¼ã€æŠ€æœ¯èƒ½åŠ›å’Œä»¥äº§å“ä¸ºä¸­å¿ƒçš„è¿è¥æ–¹å¼ã€‚"],
          ["04", "è·¯çº¿å›¾", "éªŒè¯ã€æ‰“åŒ…ã€åŒºåŸŸæ‰©å¼ å’ŒçŸ¥è¯†äº§æƒå»ºè®¾é˜¶æ®µã€‚"],
          ["05", "èµ„æœ¬ç”¨é€”", "åŠ é€Ÿäº§å“ã€é”€å”®ã€æŠ€æœ¯äººæ‰ã€å†…éƒ¨è‡ªåŠ¨åŒ–å’Œå•†ä¸šéªŒè¯ã€‚"],
          ["06", "å¯¹è¯", "ç›´æŽ¥ç´¢å–æ›´å¤šä¿¡æ¯ã€åˆ†äº«è®ºç‚¹æˆ–å®‰æŽ’ä¼šè®®ã€‚"]
        ],
        deckPageButton: "æŸ¥çœ‹ Deck é¡µé¢",
        deckButton: "ç´¢å–æŠ•èµ„è€… Deck",
        investorCtaTitle: "æŠ•èµ„è€…è¡ŒåŠ¨",
        investorCtaText: "é€‰æ‹©ä¸‹ä¸€æ­¥ä»¥èŽ·å–ä¿¡æ¯ã€è”ç³»å›¢é˜Ÿæˆ–å¼€å¯æˆ˜ç•¥å¯¹è¯ã€‚",
        investorCtaCards: [
          ["01", "ç´¢å–æŠ•èµ„è€… Deck", "ç´¢å–è®ºç‚¹ã€å¸‚åœºã€è·¯çº¿å›¾å’Œæœºä¼šçš„æ‰§è¡Œæ‘˜è¦ã€‚"],
          ["02", "è”ç³»å›¢é˜Ÿ", "å‘é€å…³äºŽæˆ˜ç•¥ã€ç»„åˆã€å›¢é˜Ÿæˆ–å¢žé•¿é˜¶æ®µçš„é—®é¢˜ã€‚"],
          ["03", "é¢„çº¦æ²Ÿé€š", "å¼€å¯å…³äºŽæŠ•èµ„ã€æˆ˜ç•¥åˆä½œæˆ–æ‰©å¼ çš„å¯¹è¯ã€‚"]
        ],
        formTitle: "æŠ•èµ„è€…ä¸“ç”¨è”ç³»è¡¨",
        formText: "åˆ†äº«ä½ çš„èƒŒæ™¯ã€æŠ•èµ„è®ºç‚¹æˆ–æˆ˜ç•¥å…´è¶£ï¼ŒTecnotitan å›¢é˜Ÿå°†é€šè¿‡ info@tecnotitan.com å›žå¤ã€‚",
        formLabels: ["å§“å", "æœºæž„ / åŸºé‡‘", "å›½å®¶", "ç”µå­é‚®ä»¶", "å…´è¶£ç±»åž‹", "ç•™è¨€"],
        formOptions: ["é€‰æ‹©", "æŠ•èµ„", "æˆ˜ç•¥åˆä½œ", "Investor deck", "è”ç³»å›¢é˜Ÿ", "é¢„çº¦æ²Ÿé€š"],
        formButton: "å‘é€è‡³ info@tecnotitan.com",
        formSending: "æ­£åœ¨å‘é€...",
        formErrorTitle: "æ— æ³•å‘é€",
        formErrorText: "è¯·é‡è¯•ï¼Œæˆ–ç›´æŽ¥å†™ä¿¡è‡³ info@tecnotitan.comã€‚",
        formNewsletter: "æˆ‘æƒ³è®¢é˜… Tecnotitan å®˜æ–¹ newsletterã€‚",
        formSuccessTitle: "è¯·æ±‚å·²å‘é€",
        formSuccessText: "è°¢è°¢ã€‚Tecnotitan å›¢é˜Ÿå°†å®¡é˜…ä½ çš„æŠ•èµ„ä¿¡æ¯ï¼Œå¹¶é€šè¿‡ info@tecnotitan.com å›žå¤ã€‚",
        cards: [
          ["01", "æœåŠ¡ç‰µå¼•", "è§£å†³çœŸå®žä¼ä¸šé—®é¢˜ï¼Œå¹¶æŠŠäº¤ä»˜æ¨¡å¼è½¬åŒ–ä¸ºå¯å¤ç”¨èƒ½åŠ›ã€‚"],
          ["02", "è‡ªæœ‰äº§å“", "æŠŠå†…éƒ¨å·¥å…·å’Œå·²éªŒè¯æµç¨‹è½¬åŒ–ä¸ºå•†ä¸šå¹³å°ã€‚"],
          ["03", "å…¨çƒè§„æ¨¡", "ä»Žæ‹‰ä¸ç¾Žæ´²å‘å…¨çƒä¼ä¸šé”€å”®åº”ç”¨æŠ€æœ¯ã€‚"]
        ]
      }
    },
    "contacto.html": {
      title: "è”ç³» | Tecnotitan",
      description: "è”ç³» Tecnotitanï¼Œå’¨è¯¢é¡¹ç›®ã€æœåŠ¡ã€åˆä½œä¸ŽæŠ•èµ„ã€‚",
      content: {
        label: "è”ç³»",
        titleLines: ["è®©æˆ‘ä»¬èŠèŠ", "ä¸‹ä¸€é¡¹æŠ€æœ¯"],
        intro: "ç”¨äºŽæŠ•è¯‰ã€ç”³è¯‰ã€å»ºè®®å’Œ Tecnotitan ä¸€èˆ¬è¯·æ±‚çš„æ¸ é“ã€‚",
        cards: [
          ["æœåŠ¡", "ä¸€èˆ¬è¯·æ±‚", "å…³äºŽ Tecnotitan åŠå…¶æœåŠ¡çš„é—®é¢˜ã€è¯„è®ºå’Œæ¶ˆæ¯ã€‚"],
          ["è´¨é‡", "æŠ•è¯‰ä¸Žç”³è¯‰", "å…³äºŽéœ€è¦å¤æ ¸çš„ä½“éªŒã€æµç¨‹æˆ–å›žå¤çš„åé¦ˆã€‚"],
          ["æ”¹è¿›", "å»ºè®®", "æ”¹è¿›äº§å“ã€æœåŠ¡ã€æ²Ÿé€šæˆ–ç”¨æˆ·ä½“éªŒçš„æƒ³æ³•ã€‚"]
        ],
        formTitle: "ä¸€èˆ¬è”ç³»",
        formText: "è¯·å°†æŠ•è¯‰ã€ç”³è¯‰ã€å»ºè®®æˆ–ä¸€èˆ¬è¯·æ±‚å‘é€è‡³ info@tecnotitan.comã€‚",
        formLabels: ["å§“å", "ç”µå­é‚®ä»¶", "å…¬å¸", "å›½å®¶", "è¯·æ±‚ç±»åž‹", "ç•™è¨€"],
        formOptions: ["é€‰æ‹©", "æŠ•è¯‰", "ç”³è¯‰", "å»ºè®®", "ä¸€èˆ¬è¯·æ±‚"],
        formButton: "å‘é€è‡³ info@tecnotitan.com",
        formSending: "æ­£åœ¨å‘é€...",
        formErrorTitle: "æ— æ³•å‘é€",
        formErrorText: "è¯·é‡è¯•ï¼Œæˆ–ç›´æŽ¥å†™ä¿¡è‡³ info@tecnotitan.comã€‚",
        formNewsletter: "æˆ‘æƒ³è®¢é˜… Tecnotitan å®˜æ–¹ newsletterã€‚",
        formSuccessTitle: "æ¶ˆæ¯å·²å‘é€",
        formSuccessText: "è°¢è°¢ã€‚æˆ‘ä»¬å·²æ”¶åˆ°ä½ çš„ä¸€èˆ¬è¯·æ±‚ï¼Œå¹¶å°†é€šè¿‡ info@tecnotitan.com å›žå¤ã€‚"
      }
    },
    "investor-deck.html": {
      title: "Investor Deck | Tecnotitan",
      description: "ç´¢å– Tecnotitan æœªæ¥çš„ Investor Deck PDFï¼šè®ºç‚¹ã€å¸‚åœºã€äº§å“ã€å›¢é˜Ÿã€è·¯çº¿å›¾å’Œèµ„æœ¬é‡ç‚¹ã€‚",
      content: {
        label: "Investor Deck",
        titleLines: ["é¢å‘æŠ•èµ„è€…çš„", "PDF"],
        intro: "Tecnotitan çš„æ­£å¼ deck å·²ä½œä¸ºæœªæ¥èµ„äº§å‡†å¤‡ã€‚åœ¨å‘å¸ƒä¹‹å‰ï¼Œä½ å¯ä»¥é€šè¿‡æŠ•èµ„è€…è¡¨å•ç›´æŽ¥ç´¢å–è®¿é—®ã€‚",
        cards: [
          ["01", "è®ºç‚¹", "é—®é¢˜ã€å¸‚åœºæœºä¼šå’Œé¢å‘å…¨çƒä¼ä¸šçš„åº”ç”¨æŠ€æœ¯è®ºç‚¹ã€‚"],
          ["02", "ç»„åˆ", "äº§å“ã€äº‹ä¸šéƒ¨ã€æ½œåœ¨çŸ¥è¯†äº§æƒå’Œå¯å¤åˆ¶å¹³å°è·¯å¾„ã€‚"],
          ["03", "æ‰§è¡Œ", "åˆå§‹å›¢é˜Ÿã€è·¯çº¿å›¾ã€èµ„æœ¬é‡ç‚¹å’Œä¸‹ä¸€é˜¶æ®µéªŒè¯é‡Œç¨‹ç¢‘ã€‚"]
        ]
      }
    }
  }
});

languages.ja = buildLocalizedLanguage(languages.en, {
  label: "æ—¥",
  nav: ["ãƒ›ãƒ¼ãƒ ", "ä¼šç¤¾æƒ…å ±", "è£½å“", "ã‚µãƒ¼ãƒ“ã‚¹", "ã‚¬ã‚¤ãƒ‰", "éƒ¨é–€", "æŠ•è³‡å®¶", "ãŠå•ã„åˆã‚ã›"],
  headerAction: "é¢è«‡ã‚’äºˆç´„",
  writeAction: "é€ä¿¡",
  openNav: "ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³ã‚’é–‹ã",
  closeNav: "ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³ã‚’é–‰ã˜ã‚‹",
  brandHome: "Tecnotitan ãƒ›ãƒ¼ãƒ ",
  mainNav: "ãƒ¡ã‚¤ãƒ³ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³",
  footerNav: "ãƒ•ãƒƒã‚¿ãƒ¼ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³",
  footerMeta: [
    "Tecnotitan Corporate",
    "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€äººå·¥çŸ¥èƒ½ã€ãƒ“ãƒ‡ã‚ªã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼å¤‰é©ã€‚",
    "ã‚³ãƒ­ãƒ³ãƒ“ã‚¢ | æŠ•è³‡å®¶ã¨ä¼æ¥­ã«å‘ã‘ãŸã‚°ãƒ­ãƒ¼ãƒãƒ«å¯¾å¿œã€‚",
    "æ³•çš„é€šçŸ¥ Â· LinkedIn Â· Facebook Â· Instagram",
    "Â© 2026 Tecnotitan. All rights reserved."
  ],
  deckUi: ["Deck ã‚’è«‹æ±‚", "PDF Deck ã‚’è¡¨ç¤º", "PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"],
  pages: {
    "index.html": {
      title: "Tecnotitan | ã‚°ãƒ­ãƒ¼ãƒãƒ«å¸‚å ´ã®ãŸã‚ã®å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼",
      description: "Tecnotitan ã¯ã€ä¸–ç•Œã®ä¼æ¥­ã¨æŠ•è³‡å®¶å‘ã‘ã«ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã‚’æ§‹ç¯‰ã—ã¾ã™ã€‚",
      content: {
        heroTitle: ["ç„¡é™ã®", "åŠ¹çŽ‡æ€§ã‚’", "æˆé•·ä¼æ¥­ã¸", "å±Šã‘ã‚‹"],
        heroText: "Tecnotitan ã¯ AI ã‚·ã‚¹ãƒ†ãƒ ã€æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€è‡ªå‹•åŒ–ã‚’è¨­è¨ˆã—ã€è¤‡é›‘ãªãƒ—ãƒ­ã‚»ã‚¹ã‚’ã‚ˆã‚Šé€Ÿãã€è³¢ãã€æ¸¬å®šå¯èƒ½ãªã‚ªãƒšãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³ã¸å¤‰ãˆã¾ã™ã€‚",
        primaryCta: "æŠ•è³‡å®¶å‘ã‘ãƒ†ãƒ¼ã‚¼",
        secondaryCta: "è£½å“ã‚’è¦‹ã‚‹",
        nextPreview: "é«˜ä»˜åŠ ä¾¡å€¤ã‚µãƒ¼ãƒ“ã‚¹ã€è‡ªç¤¾è£½å“ã€æ‹¡å¼µå¯èƒ½ãª IP",
        visionLabel: "ä¼æ¥­ãƒ“ã‚¸ãƒ§ãƒ³",
        visionTitle: "ã‚°ãƒ­ãƒ¼ãƒãƒ«ã«å±•é–‹ã™ã‚‹å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ä¼æ¥­ã‚’æ§‹ç¯‰ã™ã‚‹ã€‚",
        visionParagraphs: [
          "Tecnotitan ã¯ã€ã‚µãƒ¼ãƒ“ã‚¹ã€è£½å“ã€æŠ€è¡“éƒ¨é–€ãŒçŸ¥è­˜ã€IPã€å†åˆ©ç”¨å¯èƒ½ãªèƒ½åŠ›ã‚’å…±æœ‰ã™ã‚‹ãƒ¢ãƒ‡ãƒ«ã¸é€²ã‚“ã§ã„ã¾ã™ã€‚",
          "ãƒ©ãƒ†ãƒ³ã‚¢ãƒ¡ãƒªã‚«ã‹ã‚‰ä¸–ç•Œå¸‚å ´ã¸å±•é–‹ã§ãã‚‹ä¼æ¥­ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AI ã‚·ã‚¹ãƒ†ãƒ ã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã‚’ã¤ãã‚Šã¾ã™ã€‚"
        ],
        visionCards: [
          ["ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢", "ä¼æ¥­å‘ã‘æ¥­å‹™ã‚·ã‚¹ãƒ†ãƒ ", "ç¤¾å†…ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€è‡ªå‹•åŒ–ã€ãƒ‡ãƒ¼ã‚¿ã€Web è£½å“ã§å®Ÿè¡ŒåŠ›ã‚’é«˜ã‚ã¾ã™ã€‚"],
          ["AI", "ä»•äº‹ã«é©ç”¨ã™ã‚‹çŸ¥èƒ½", "ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€åˆ†æžã€copilotã€æ¥­å‹™ã«çµ±åˆã•ã‚ŒãŸã‚¹ãƒžãƒ¼ãƒˆãƒ•ãƒ­ãƒ¼ã€‚"],
          ["ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–", "ã‚²ãƒ¼ãƒ ã¨ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³", "ç ”ä¿®ã€ãƒ–ãƒ©ãƒ³ãƒ‰ã€æ•™è‚²ã€æ–°è£½å“å‘ã‘ã®æ²¡å…¥åž‹ä½“é¨“ã€‚"],
          ["ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹", "ãƒ•ã‚£ã‚¸ã‚«ãƒ«ãƒ»ãƒ‡ã‚¸ã‚¿ãƒ«ã‚·ã‚¹ãƒ†ãƒ ", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ã‚»ãƒ³ã‚µãƒ¼ã€åˆ¶å¾¡ã€ãƒ‡ãƒ¼ã‚¿ã§æ¥­å‹™ã¨çŸ¥èƒ½ã‚’æŽ¥ç¶šã—ã¾ã™ã€‚"]
        ],
        marketTitle: "å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ãŒå„ªä½æ€§ã‚’ç”Ÿã‚€å¸‚å ´ã€‚",
        marketText: "Tecnotitan ã¯ã€ãƒ‡ã‚¸ã‚¿ãƒ«åŒ–ã€è‡ªå‹•åŒ–ã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“ã€ã‚¤ãƒ³ãƒ†ãƒªã‚¸ã‚§ãƒ³ãƒˆã‚·ã‚¹ãƒ†ãƒ ã‚’æœ¬å½“ã«å¿…è¦ã¨ã™ã‚‹é¡§å®¢ã‚’å¯¾è±¡ã«ã—ã¾ã™ã€‚",
        marketCards: [
          ["ä¼æ¥­", "æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢", "ç¤¾å†… CRMã€ãƒãƒ¼ã‚¿ãƒ«ã€ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€ãƒ•ãƒ­ãƒ¼ã€è‡ªå‹•åŒ–ã‚’å¿…è¦ã¨ã™ã‚‹ä¼šç¤¾ã€‚"],
          ["ã‚ªãƒšãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³", "ç”Ÿç”£æ€§ã®ãŸã‚ã® AI", "åå¾©å¯èƒ½ãªæ¥­å‹™ã‚’æŒã¤å–¶æ¥­ã€ã‚µãƒãƒ¼ãƒˆã€è²¡å‹™ã€é‹ç”¨ãƒãƒ¼ãƒ ã€‚"],
          ["æ•™è‚²", "ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³ã¨å­¦ç¿’", "ç ”ä¿®ã€è©•ä¾¡ã€æ²¡å…¥åž‹ä½“é¨“ã‚’å¿…è¦ã¨ã™ã‚‹æ©Ÿé–¢ã¨ä¼æ¥­ã€‚"],
          ["ã‚¨ãƒ³ã‚¿ãƒ¡", "ã‚²ãƒ¼ãƒ ã¨ãƒ–ãƒ©ãƒ³ãƒ‰", "ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–è£½å“ã€ã‚²ãƒ¼ãƒŸãƒ•ã‚£ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã€ãƒ–ãƒ©ãƒ³ãƒ‰ä½“é¨“ã€æ–°ã—ã„ãƒ‡ã‚¸ã‚¿ãƒ«ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã€‚"],
          ["ç”£æ¥­", "ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã¨ãƒ‡ãƒ¼ã‚¿", "ã‚»ãƒ³ã‚µãƒ¼ã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€åˆ¶å¾¡ã€æ¥­å‹™çŸ¥èƒ½ã‚’æŽ¥ç¶šã§ãã‚‹ãƒ—ãƒ­ã‚»ã‚¹ã€‚"],
          ["çµ„ç¹”", "ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼å¤‰é©", "æˆ¦ç•¥ã€å®Ÿè£…ã€å°Žå…¥ã‚’å¿…è¦ã¨ã™ã‚‹å…¬å…±ãƒ»æ°‘é–“çµ„ç¹”ã€‚"]
        ],
        investorCtaTitle: "æŠ•è³‡å®¶å‘ã‘ã‚¢ã‚¯ã‚·ãƒ§ãƒ³",
        investorCtaText: "æ©Ÿä¼šã‚’ç¢ºèªã—ã€å‰µæ¥­ãƒãƒ¼ãƒ ã«é€£çµ¡ã—ã€ä¼šè©±ã‚’å§‹ã‚ã‚‹ãŸã‚ã®å…¥å£ã§ã™ã€‚",
        investorCtaCards: [
          ["01", "Investor Deck ã‚’è«‹æ±‚", "Tecnotitan ã®ãƒ†ãƒ¼ã‚¼ã€å¸‚å ´ã€ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—ã€æ©Ÿä¼šã®è¦ç´„ã‚’å—ã‘å–ã‚‹ã€‚"],
          ["02", "ãƒãƒ¼ãƒ ã«é€£çµ¡", "æˆ¦ç•¥çš„ãªè³ªå•ã‚„ãƒ•ã‚©ãƒ­ãƒ¼ã‚¢ãƒƒãƒ—ã«ã¤ã„ã¦ Tecnotitan ã¨ç›´æŽ¥ã¤ãªãŒã‚‹ã€‚"],
          ["03", "é¢è«‡ã‚’äºˆç´„", "æŠ•è³‡ã€ææºã€ã‚°ãƒ­ãƒ¼ãƒãƒ«æˆé•·ã«ã¤ã„ã¦ä¼šè©±ã‚’å§‹ã‚ã‚‹ã€‚"]
        ],
        gatewayTitle: "è¤‡æ•°éƒ¨é–€ã§æ§‹ç¯‰ã•ã‚Œã‚‹ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ä¼æ¥­",
        gatewayText: "é¡§å®¢ã€ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã€ä¸–ç•Œã®æŠ•è³‡å®¶ã«å‘ã‘ã¦ã€ä¼šç¤¾ã®ã‚¹ãƒˆãƒ¼ãƒªãƒ¼ã‚’æ˜Žç¢ºãªãƒšãƒ¼ã‚¸ã«åˆ†ã‘ã¦ã„ã¾ã™ã€‚",
        cards: [
          ["01", "ä¼šç¤¾æƒ…å ±", "ãƒŸãƒƒã‚·ãƒ§ãƒ³ã€æŠ€è¡“ãƒ†ãƒ¼ã‚¼ã€å®Ÿè¡ŒåŽŸå‰‡ã€‚"],
          ["02", "è£½å“", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã‚’ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã¸ã€‚"],
          ["03", "ã‚µãƒ¼ãƒ“ã‚¹", "äººå·¥çŸ¥èƒ½ã¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼å¤‰é©ã®ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã€‚"],
          ["04", "éƒ¨é–€", "è¤‡æ•°å¸‚å ´ã‚’æ§‹ç¯‰ã™ã‚‹ãŸã‚ã®é‹ç”¨ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã€‚"],
          ["05", "æŠ•è³‡å®¶", "ãƒ“ã‚¸ãƒ§ãƒ³ã€æ©Ÿä¼šã€ãƒ¢ãƒ‡ãƒ«ã€æˆé•·ãƒ«ãƒ¼ãƒˆã€‚"],
          ["06", "ãŠå•ã„åˆã‚ã›", "å•†è«‡ã€ææºã€æŠ•è³‡ã®ä¼šè©±ã€‚"]
        ]
      }
    },
    "nosotros.html": {
      title: "ä¼šç¤¾æƒ…å ± | Tecnotitan",
      description: "å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ä¼æ¥­ã¨ã—ã¦ã® Tecnotitan ã®ãƒ“ã‚¸ãƒ§ãƒ³ã€ãƒŸãƒƒã‚·ãƒ§ãƒ³ã€åŽŸå‰‡ã€‚",
      content: {
        label: "ä¼šç¤¾æƒ…å ±",
        titleLines: ["ã‚°ãƒ­ãƒ¼ãƒãƒ«ãªé‡Žå¿ƒã‚’æŒã¤", "å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ä¼æ¥­"],
        intro: "Tecnotitan ã¯ã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã®èƒ½åŠ›ã‚’ã€ä¼æ¥­ç«¶äº‰åŠ›ã‚’é«˜ã‚ã‚‹è£½å“ã¨ã‚µãƒ¼ãƒ“ã‚¹ã¸å¤‰æ›ã™ã‚‹ãŸã‚ã«ç”Ÿã¾ã‚Œã¾ã—ãŸã€‚",
        thesisLabel: "ãƒ“ã‚¸ãƒ§ãƒ³",
        thesisTitle: "ã‚°ãƒ­ãƒ¼ãƒãƒ«ã«å±•é–‹ã™ã‚‹ãƒ©ãƒ†ãƒ³ã‚¢ãƒ¡ãƒªã‚«ç™ºã®å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ä¼æ¥­ã«ãªã‚‹ã€‚",
        paragraphs: [
          "ç§ãŸã¡ã®ãƒ†ãƒ¼ã‚¼ã¯æ˜Žç¢ºã§ã™ã€‚ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ãƒ‡ãƒ¼ã‚¿ã€AIã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“ã€çŸ¥çš„ãªç‰©ç†ã‚·ã‚¹ãƒ†ãƒ ã‚’ä½¿ã„ã“ãªã™ä¼æ¥­ãŒã€æŒç¶šçš„ãªå„ªä½æ€§ã‚’ç”Ÿã¿ã¾ã™ã€‚",
          "Tecnotitan ã¯ã“ã‚Œã‚‰ã®é ˜åŸŸã‚’çµ±åˆã—ã€è‡ªç¤¾ã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³ã‚’æ§‹ç¯‰ã—ã€ä¼æ¥­å¤‰é©ã‚’æ”¯æ´ã—ã€æ–°ã—ã„æˆé•·éƒ¨é–€ã‚’é–‹ãã¾ã™ã€‚"
        ],
        leadershipTitle: "ãƒªãƒ¼ãƒ€ãƒ¼ã‚·ãƒƒãƒ—ã¨åˆæœŸãƒãƒ¼ãƒ ",
        leadershipText: "Tecnotitan ã¯ã€å‰µæ¥­è€…ã®ãƒªãƒ¼ãƒ€ãƒ¼ã‚·ãƒƒãƒ—ã€å°‚ä»»ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã€é–‹ç™ºèƒ½åŠ›ã‚’å‚™ãˆãŸå°ã•ãæŠ€è¡“å¿—å‘ã®å®Ÿè¡Œåž‹ãƒãƒ¼ãƒ ã§æ§‹ç¯‰ã•ã‚Œã¦ã„ã¾ã™ã€‚",
        leadershipCards: [
          ["CEO / Founder", "David Arias Giraldo", "æˆ¦ç•¥ã€è£½å“ãƒ“ã‚¸ãƒ§ãƒ³ã€ä¼æ¥­é–‹ç™ºã€æŠ€è¡“ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªæ§‹ç¯‰ã‚’ä¸»å°Žã€‚"],
          ["å°‚ä»»ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°", "å°‚ä»»ã‚³ãƒ³ã‚µãƒ«ã‚¿ãƒ³ãƒˆ", "æˆ¦ç•¥ã€é‹ç”¨ã€èª¿æŸ»ã€ãƒ‰ã‚­ãƒ¥ãƒ¡ãƒ³ãƒˆã€ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼å¤‰é©ã‚’æ”¯æ´ã€‚"],
          ["ã‚¨ãƒ³ã‚¸ãƒ‹ã‚¢ãƒªãƒ³ã‚°", "2 åã®ãƒ—ãƒ­ã‚°ãƒ©ãƒžãƒ¼", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ãƒ—ãƒ­ãƒˆã‚¿ã‚¤ãƒ—ã€è‡ªå‹•åŒ–ã€è‡ªç¤¾è£½å“ã‚’æ§‹ç¯‰ã™ã‚‹åˆæœŸé–‹ç™ºãƒãƒ¼ãƒ ã€‚"]
        ],
        cards: [
          ["01", "ãƒ—ãƒ¬ã‚¼ãƒ³ã‚ˆã‚Šè£½å“", "æŠ½è±¡çš„ãªç´„æŸã‚ˆã‚Šã€æ©Ÿèƒ½ã—ã€æ¸¬å®šã§ãã€æ‹¡å¼µã§ãã‚‹ã‚·ã‚¹ãƒ†ãƒ ã‚’å„ªå…ˆã—ã¾ã™ã€‚"],
          ["02", "AI ã‚’ã‚¤ãƒ³ãƒ•ãƒ©ã¨ã—ã¦æ‰±ã†", "è‡ªå‹•åŒ–ã€æ„æ€æ±ºå®šã€å­¦ç¿’ã®ä¸­æ ¸ãƒ¬ã‚¤ãƒ¤ãƒ¼ã¨ã—ã¦ AI ã‚’æ‰±ã„ã¾ã™ã€‚"],
          ["03", "å®Ÿè¡Œå¯èƒ½ãªè¤‡åˆé ˜åŸŸ", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã‚’ä¸€ã¤ã®æŠ€è¡“ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã¨ã—ã¦å‹•ã‹ã—ã¾ã™ã€‚"]
        ]
      }
    },
    "productos.html": {
      title: "è£½å“ | Tecnotitan",
      description: "ä¼æ¥­ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã«ãŠã‘ã‚‹ Tecnotitan ã®è£½å“ã€‚",
      content: {
        label: "è£½å“",
        titleLines: ["ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã¸", "ç™ºå±•ã—å¾—ã‚‹è£½å“"],
        intro: "è‡ªç¤¾è£½å“ã¨ã‚«ã‚¹ã‚¿ãƒ ã‚·ã‚¹ãƒ†ãƒ ã‚’æ§‹ç¯‰ã—ã€å†ç¾å¯èƒ½ãªãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã¸é€²åŒ–ã•ã›ã¾ã™ã€‚",
        cards: [
          ["ä¸­å°ä¼æ¥­ AI", "Copiloto PyME", "ãƒ©ãƒ†ãƒ³ã‚¢ãƒ¡ãƒªã‚«ã®ä¸­å°ä¼æ¥­å‘ã‘ AI æ„æ€æ±ºå®šãƒ‘ãƒãƒ«ã€‚è²©å£²ã€ãƒ¬ã‚¸ã€åœ¨åº«ã€é¡§å®¢ãƒ¢ã‚¸ãƒ¥ãƒ¼ãƒ«ã‚’ã¤ãªãŽã€ã‚ˆã‚Šç®¡ç†ã•ã‚ŒãŸé‹å–¶ã‚’æ”¯æ´ã—ã¾ã™ã€‚"],
          ["ä¼æ¥­ OS", "Tecnotitan OS", "ãƒ—ãƒ­ã‚»ã‚¹ã€ãƒ‡ãƒ¼ã‚¿ã€è‡ªå‹•åŒ–ã€AI ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€ç¤¾å†…ãƒ•ãƒ­ãƒ¼ã‚’ä¸€å…ƒåŒ–ã™ã‚‹ä¼æ¥­ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€‚"],
          ["ãƒ¢ãƒã‚¤ãƒ« + AI", "Life Copilot", "ç›®æ¨™ã€ã‚¿ã‚¹ã‚¯ã€ç¿’æ…£ã€æ„æ€æ±ºå®šã‚’æ•´ç†ã™ã‚‹å€‹äººå‘ã‘ AI ç”Ÿç”£æ€§ã‚¢ãƒ—ãƒªã€‚"],
          ["ã‚²ãƒ¼ãƒ ", "Tecnotitan Engine", "ã‚²ãƒ¼ãƒ ã€ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚¿ãƒ¼ã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“ã€ã‚²ãƒ¼ãƒŸãƒ•ã‚£ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ä¸–ç•Œã‚’è©¦ä½œã™ã‚‹ã‚¨ãƒ³ã‚¸ãƒ³ã¨ãƒ„ãƒ¼ãƒ«ã‚­ãƒƒãƒˆã€‚"],
          ["æ•™è‚²", "Academia Tecnotitan", "AIã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼å¤‰é©ã®å­¦ç¿’ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€‚"],
          ["AI ã‚³ãƒ¼ãƒ«ã‚»ãƒ³ã‚¿ãƒ¼", "Call Center AI Tecnotitan", "ã‚µãƒãƒ¼ãƒˆã€å–¶æ¥­ã€é¡§å®¢ãƒ•ã‚©ãƒ­ãƒ¼ã€ã‚³ãƒ³ã‚¿ã‚¯ãƒˆã‚»ãƒ³ã‚¿ãƒ¼è‡ªå‹•åŒ–ã®ãŸã‚ã®ä¼šè©±åž‹ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€‚"]
        ]
      }
    },
    "servicios.html": {
      title: "ã‚µãƒ¼ãƒ“ã‚¹ | Tecnotitan",
      description: "ä¼æ¥­å‘ã‘ã® AI ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼å¤‰é©ã‚µãƒ¼ãƒ“ã‚¹ã€‚",
      content: {
        label: "ã‚µãƒ¼ãƒ“ã‚¹",
        titleLines: ["å®Ÿè£…ã«ã¤ãªãŒã‚‹", "ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°"],
        intro: "ä¼æ¥­ãŒæ¥­å‹™ã‚¤ãƒ³ãƒ‘ã‚¯ãƒˆã®ã‚ã‚‹ AI ã¨ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã‚’ç‰¹å®šã€è¨­è¨ˆã€å®Ÿè£…ã§ãã‚‹ã‚ˆã†æ”¯æ´ã—ã¾ã™ã€‚",
        timelineLabel: "ã‚µãƒ¼ãƒ“ã‚¹",
        cards: [
          ["01", "AI è¨ºæ–­", "ãƒ—ãƒ­ã‚»ã‚¹ã€ãƒ‡ãƒ¼ã‚¿ã€è‡ªå‹•åŒ–æ©Ÿä¼šã€æœŸå¾…ãƒªã‚¿ãƒ¼ãƒ³ã‚’è©•ä¾¡ã€‚"],
          ["02", "æŠ€è¡“ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—", "ã‚¢ãƒ¼ã‚­ãƒ†ã‚¯ãƒãƒ£ã€å„ªå…ˆé †ä½ã€ã‚¹ã‚¿ãƒƒã‚¯ã€ãƒªã‚¹ã‚¯ã€å®Ÿè¡Œè¨ˆç”»ã€‚"],
          ["03", "å®Ÿè£…", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AI ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€é€£æºã€æ©Ÿèƒ½ã™ã‚‹ãƒ—ãƒ­ãƒˆã‚¿ã‚¤ãƒ—ã‚’é–‹ç™ºã€‚"],
          ["04", "å°Žå…¥", "ãƒˆãƒ¬ãƒ¼ãƒ‹ãƒ³ã‚°ã€æ¸¬å®šã€ç¶™ç¶šæ”¹å–„ã€èƒ½åŠ›ç§»è»¢ã€‚"]
        ]
      }
    },
    "divisiones.html": {
      title: "éƒ¨é–€ | Tecnotitan",
      description: "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€æŠ€è¡“ ventures ã«ãŠã‘ã‚‹ Tecnotitan ã®éƒ¨é–€ã€‚",
      content: {
        label: "éƒ¨é–€",
        titleLines: ["ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã‚¨ãƒ³ã‚¸ãƒ³ã®", "ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ª"],
        intro: "å„éƒ¨é–€ã¯å†åˆ©ç”¨å¯èƒ½ãªèƒ½åŠ›ã€çŸ¥çš„è²¡ç”£ã€ç‹¬ç«‹ã—ãŸå•†æ¥­æ©Ÿä¼šã‚’ç”Ÿã¿ã¾ã™ã€‚",
        divisionThesisLabel: "é‹ç”¨ã‚¢ãƒ¼ã‚­ãƒ†ã‚¯ãƒãƒ£",
        divisionThesisTitle: "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ãƒ‡ãƒ¼ã‚¿ã€å¿œç”¨çŸ¥èƒ½ã§ã¤ãªãŒã‚‹éƒ¨é–€ã€‚",
        divisionThesisParagraphs: [
          "Tecnotitan ã®å„éƒ¨é–€ã¯ã€å•†æ¥­ãƒ¦ãƒ‹ãƒƒãƒˆã€IP ãƒ©ãƒœã€ä»–éƒ¨é–€ã¸ã®èƒ½åŠ›ä¾›çµ¦æºã¨ã—ã¦æ©Ÿèƒ½ã§ãã¾ã™ã€‚",
          "ç›®çš„ã¯ã€ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã€è£½å“ã€è‡ªç¤¾æŠ€è¡“ãŒäº’ã„ã‚’å¼·åŒ–ã—ã€å­¤ç«‹ã—ãŸæ¡ˆä»¶ã§ã¯ãªãå¸‚å ´ã‚’ã¤ãã‚‹ã“ã¨ã§ã™ã€‚"
        ],
        cards: [
          ["ä¼æ¥­ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢", "Tecnotitan Software", "ä¼æ¥­ãŒã‚ˆã‚Šè‰¯ãé‹å–¶ã™ã‚‹ãŸã‚ã® Web ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€ç¤¾å†… CRMã€ãƒãƒ¼ã‚¿ãƒ«ã€ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€è‡ªå‹•åŒ–ã€‚"],
          ["äººå·¥çŸ¥èƒ½", "Tecnotitan AI", "å®Ÿéš›ã®ãƒ—ãƒ­ã‚»ã‚¹ã«çµ±åˆã•ã‚Œã‚‹ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€copilotã€åˆ†æžã€æ–‡æ›¸è‡ªå‹•åŒ–ã€ã‚¹ãƒžãƒ¼ãƒˆãƒ•ãƒ­ãƒ¼ã€‚"],
          ["ã‚²ãƒ¼ãƒ ã¨ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–", "Tecnotitan Games", "ç ”ä¿®ã€ãƒ–ãƒ©ãƒ³ãƒ‰ã€æ–°è£½å“å‘ã‘ã®ã‚²ãƒ¼ãƒ ã€ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚¿ãƒ¼ã€ã‚²ãƒ¼ãƒŸãƒ•ã‚£ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã€æ²¡å…¥åž‹ä½“é¨“ã€‚"],
          ["ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹", "Tecnotitan Robotics", "æ¥­å‹™çŸ¥èƒ½ã¨æŽ¥ç¶šã•ã‚ŒãŸãƒ•ã‚£ã‚¸ã‚«ãƒ«ãƒ»ãƒ‡ã‚¸ã‚¿ãƒ«ã‚·ã‚¹ãƒ†ãƒ ã‚’ã¤ãã‚‹ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ã‚»ãƒ³ã‚µãƒ¼ã€åˆ¶å¾¡ã€ãƒ‡ãƒ¼ã‚¿ã€‚"],
          ["æŠ€è¡“ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°", "Tecnotitan Advisory", "AI æˆ¦ç•¥ã€ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼å¤‰é©ã€ä¼æ¥­å°Žå…¥ã€çµŒå–¶å±¤æ”¯æ´ã€‚"],
          ["Ventures", "Tecnotitan Ventures", "å®Ÿé¨“ã€spin-offã€è‡ªç¤¾è£½å“ã€å†…éƒ¨èƒ½åŠ›ã‹ã‚‰ç”Ÿã¾ã‚Œã‚‹æ–°ã—ã„æ©Ÿä¼šã€‚"]
        ]
      }
    },
    "inversionistas.html": {
      title: "æŠ•è³‡å®¶ | Tecnotitan",
      description: "Tecnotitan ã®ã‚°ãƒ­ãƒ¼ãƒãƒ«æŠ•è³‡å®¶å‘ã‘ãƒšãƒ¼ã‚¸ï¼šãƒ†ãƒ¼ã‚¼ã€å¸‚å ´ã€ãƒ¢ãƒ‡ãƒ«ã€ãƒ“ã‚¸ãƒ§ãƒ³ã€‚",
      content: {
        label: "æŠ•è³‡å®¶",
        titleLines: ["ãƒ©ãƒ†ãƒ³ã‚¢ãƒ¡ãƒªã‚«ã‹ã‚‰", "ä¸–ç•Œå¸‚å ´ã¸å‘ã‘ãŸ", "å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼"],
        intro: "Tecnotitan ã¯é«˜ä»˜åŠ ä¾¡å€¤ã‚µãƒ¼ãƒ“ã‚¹ã€è‡ªç¤¾è£½å“ã€æŠ€è¡“éƒ¨é–€ã‚’çµ„ã¿åˆã‚ã›ã€æ‹¡å¼µå¯èƒ½ãªå¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ä¼æ¥­ã‚’æ§‹ç¯‰ã—ã¾ã™ã€‚",
        metrics: [
          ["å¸‚å ´", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ + AI", "çŸ¥çš„è‡ªå‹•åŒ–ã«ã‚ˆã£ã¦åŠ é€Ÿã™ã‚‹ä¼æ¥­ãƒ‡ã‚¸ã‚¿ãƒ«åŒ–ã€‚"],
          ["æ‹¡å¼µ", "è¤‡æ•°éƒ¨é–€", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ãŒæŽ¥ç¶šã•ã‚ŒãŸã‚¨ãƒ³ã‚¸ãƒ³ã€‚"],
          ["ãƒ¢ãƒ‡ãƒ«", "ã‚µãƒ¼ãƒ“ã‚¹ã‹ã‚‰è£½å“ã¸", "é¡§å®¢ã‹ã‚‰ã®å­¦ç¿’ã€è‡ªç¤¾ IPã€å†ç¾å¯èƒ½ãªãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€‚"]
        ],
        thesisLabel: "ãƒ†ãƒ¼ã‚¼",
        thesisTitle: "æœ€é«˜ã®æŠ€è¡“ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã¯ã€ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã®æ·±ã•ã¨è£½å“å®Ÿè¡ŒåŠ›ã‚’çµ„ã¿åˆã‚ã›ã¾ã™ã€‚",
        paragraphs: [
          "å¸‚å ´ã¯å¾“æ¥åž‹ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã‹ã‚‰ã€ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€è‡ªå‹•åŒ–ã€ãƒ‡ãƒ¼ã‚¿ã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“ã‚’æŒã¤ã‚·ã‚¹ãƒ†ãƒ ã¸ç§»è¡Œã—ã¦ã„ã¾ã™ã€‚Tecnotitan ã¯ãã®äº¤å·®ç‚¹ã«ä½ç½®ã—ã¾ã™ã€‚",
          "ç§ãŸã¡ã®é“ç­‹ã¯ã€ã‚µãƒ¼ãƒ“ã‚¹åŽç›Šã€è£½å“é–‹ç™ºã€çŸ¥çš„è²¡ç”£ã€éƒ¨é–€ã”ã¨ã® spin-off æ©Ÿä¼šã‚’çµ„ã¿åˆã‚ã›ã¾ã™ã€‚"
        ],
        opportunityTitle: "æŠ•è³‡æ©Ÿä¼š",
        opportunityText: "Tecnotitan ã¯ AIã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã«ãŠã‘ã‚‹ä¼æ¥­éœ€è¦ã‚’æ‰ãˆã€ã‚µãƒ¼ãƒ“ã‚¹ã§å¾—ãŸå­¦ç¿’ã‚’è‡ªç¤¾è£½å“ã¨æ‹¡å¼µå¯èƒ½ãª IP ã¸å¤‰æ›ã—ã¾ã™ã€‚",
        opportunityCards: [
          ["01", "æ§‹é€ çš„éœ€è¦", "ä¼æ¥­ã¯ç«¶äº‰ã™ã‚‹ãŸã‚ã«ãƒ—ãƒ­ã‚»ã‚¹ã€ãƒ‡ãƒ¼ã‚¿ã€æ„æ€æ±ºå®šã®è‡ªå‹•åŒ–ã‚’å¿…è¦ã¨ã—ã¦ã„ã¾ã™ã€‚"],
          ["02", "ãƒã‚¤ãƒ–ãƒªãƒƒãƒ‰ãƒ¢ãƒ‡ãƒ«", "é«˜ä»˜åŠ ä¾¡å€¤ã‚µãƒ¼ãƒ“ã‚¹ãŒåŽç›Šã€å¸‚å ´å­¦ç¿’ã€è£½å“æ©Ÿä¼šã‚’ç”Ÿã¿ã¾ã™ã€‚"],
          ["03", "è“„ç©å¯èƒ½ãª IP", "å„ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¯ãƒ„ãƒ¼ãƒ«ã€ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€ãƒ•ãƒ¬ãƒ¼ãƒ ãƒ¯ãƒ¼ã‚¯ã€å†ç¾å¯èƒ½ãªãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã«ãªã‚Šå¾—ã¾ã™ã€‚"],
          ["04", "åœ°åŸŸæ‹¡å¼µ", "ãƒ©ãƒ†ãƒ³ã‚¢ãƒ¡ãƒªã‚«ã‹ã‚‰å¿œç”¨æŠ€è¡“ã‚’æ§‹ç¯‰ã—ã€åŒæ§˜ã®èª²é¡Œã‚’æŒã¤ä¸–ç•Œå¸‚å ´ã¸è²©å£²ã—ã¾ã™ã€‚"]
        ],
        indicatorTitle: "é€²æ—æŒ‡æ¨™",
        indicatorText: "Tecnotitan ã®åŽç›Šã€è‡ªç¤¾è£½å“ã€å¯¾è±¡é¡§å®¢ã€åœ°åŸŸã‚¹ã‚±ãƒ¼ãƒ«ã¸ã®é€²æ—ã‚’è¿½è·¡ã™ã‚‹ãŸã‚ã®ãƒ—ãƒ­ãƒ•ã‚§ãƒƒã‚·ãƒ§ãƒŠãƒ«ãªæž çµ„ã¿ã€‚",
        indicatorMetrics: [
          ["å¯¾è±¡å¸‚å ´", "ä¼æ¥­ + AI", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€è‡ªå‹•åŒ–ã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“ã€å¿œç”¨ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€‚"],
          ["äº‹æ¥­é ˜åŸŸ", "5 éƒ¨é–€", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€æŠ€è¡“ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã€‚"],
          ["è£½å“", "6 ãƒ©ã‚¤ãƒ³", "Copiloto Pymeã€Tecnotitan OSã€Life Copilotã€Tecnotitan Engineã€Academiaã€Call Center AIã€‚"]
        ],
        indicatorCards: [
          ["å¯¾è±¡é¡§å®¢", "ä¸­å …ãƒ»å¤§ä¼æ¥­", "åå¾©ãƒ—ãƒ­ã‚»ã‚¹ã€æœªæ´»ç”¨ãƒ‡ãƒ¼ã‚¿ã€è‡ªå‹•åŒ–åœ§åŠ›ã‚’æŒã¤çµ„ç¹”ã€‚"],
          ["ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—", "ã‚µãƒ¼ãƒ“ã‚¹ã‹ã‚‰ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã¸", "åå¾©ã™ã‚‹ç´å“ã‚’ç¤¾å†…ãƒ„ãƒ¼ãƒ«ã€å•†ç”¨ãƒ¢ã‚¸ãƒ¥ãƒ¼ãƒ«ã€è£½å“ã¸å¤‰æ›ã—ã¾ã™ã€‚"],
          ["æ‹¡å¼µ", "LatAm ã‹ã‚‰ä¸–ç•Œã¸", "åœ°åŸŸã®äº‹ä¾‹ã‚’æ¤œè¨¼ã—ã€é¡žä¼¼ãƒ‹ãƒ¼ã‚ºã®å¸‚å ´ã¸å¿œç”¨æŠ€è¡“ã‚’æ‹¡å¼µã—ã¾ã™ã€‚"]
        ],
        roadmapTitle: "æˆ¦ç•¥ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—",
        roadmapText: "æŠ€è¡“èƒ½åŠ›ã‚’ã‚µãƒ¼ãƒ“ã‚¹ã€è‡ªç¤¾è£½å“ã€æ‹¡å¼µæ©Ÿä¼šã¸å¤‰ãˆã‚‹æ®µéšŽçš„ãªæˆé•·ãƒ«ãƒ¼ãƒˆã€‚",
        roadmapCards: [
          ["2026", "æ¤œè¨¼ã¨å®Ÿæ¡ˆä»¶", "AI/ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã‚µãƒ¼ãƒ“ã‚¹ã‚’å¼·åŒ–ã—ã€ä¼æ¥­äº‹ä¾‹ã‚’æ§‹ç¯‰ã—ã€å†ç¾å¯èƒ½ãªãƒ‘ã‚¿ãƒ¼ãƒ³ã‚’è¨˜éŒ²ã€‚"],
          ["2027", "è£½å“ã¨ IP", "å†…éƒ¨ãƒ„ãƒ¼ãƒ«ã‚’ãƒ‘ãƒƒã‚±ãƒ¼ã‚¸åŒ–ã—ã€åˆæœŸã®å•†ç”¨ãƒ©ã‚¤ãƒ³ã‚’ç«‹ã¡ä¸Šã’ã€æŠ€è¡“éƒ¨é–€ã‚’å¼·åŒ–ã€‚"],
          ["2028", "åœ°åŸŸã‚¹ã‚±ãƒ¼ãƒ«ã¨ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ", "åœ°åŸŸè²©å£²ã‚’æ‹¡å¤§ã—ã€ã‚½ãƒªãƒ¥ãƒ¼ã‚·ãƒ§ãƒ³ã‚’ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ åŒ–ã—ã€éƒ¨é–€ã”ã¨ã® spin-off ã‚’æ¤œè¨Žã€‚"]
        ],
        deckTitle: "Investor Deck / Data Room",
        deckText: "Tecnotitan ã®ãƒ†ãƒ¼ã‚¼ã€å¸‚å ´ã€ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã€å®Ÿè¡Œãƒ«ãƒ¼ãƒˆã‚’è©•ä¾¡ã™ã‚‹æŠ•è³‡å®¶å‘ã‘ã®è³‡æ–™ã€‚",
        deckCards: [
          ["01", "ãƒ†ãƒ¼ã‚¼ã¨å¸‚å ´", "èª²é¡Œã€æ©Ÿä¼šã€å¯¾è±¡é¡§å®¢ã€AIãƒ»ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ãƒ»è‡ªå‹•åŒ–ãŒä»Šèžåˆã™ã‚‹ç†ç”±ã€‚"],
          ["02", "è£½å“ã¨ IP", "ç¾åœ¨ã®ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã€è‡ªç¤¾ãƒ©ã‚¤ãƒ³ã€å†ç¾å¯èƒ½ãªãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã«ãªã‚Šå¾—ã‚‹èƒ½åŠ›ã€‚"],
          ["03", "ãƒãƒ¼ãƒ ã¨å®Ÿè¡Œ", "åˆæœŸä½“åˆ¶ã€å‰µæ¥­è€…ãƒªãƒ¼ãƒ€ãƒ¼ã‚·ãƒƒãƒ—ã€æŠ€è¡“èƒ½åŠ›ã€è£½å“ä¸­å¿ƒã®é‹å–¶æ–¹æ³•ã€‚"],
          ["04", "ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—", "æ¤œè¨¼ã€ãƒ‘ãƒƒã‚±ãƒ¼ã‚¸åŒ–ã€åœ°åŸŸæ‹¡å¼µã€çŸ¥çš„è²¡ç”£æ§‹ç¯‰ã®ãƒ•ã‚§ãƒ¼ã‚ºã€‚"],
          ["05", "è³‡æœ¬ç”¨é€”", "è£½å“ã€å–¶æ¥­ã€æŠ€è¡“äººæã€å†…éƒ¨è‡ªå‹•åŒ–ã€å•†æ¥­æ¤œè¨¼ã‚’åŠ é€Ÿã€‚"],
          ["06", "å¯¾è©±", "è¿½åŠ æƒ…å ±ã®è«‹æ±‚ã€ãƒ†ãƒ¼ã‚¼å…±æœ‰ã€Tecnotitan ã¨ã®é¢è«‡èª¿æ•´ã€‚"]
        ],
        deckPageButton: "Deck ãƒšãƒ¼ã‚¸ã‚’è¦‹ã‚‹",
        deckButton: "Investor Deck ã‚’è«‹æ±‚",
        investorCtaTitle: "æŠ•è³‡å®¶å‘ã‘ã‚¢ã‚¯ã‚·ãƒ§ãƒ³",
        investorCtaText: "æƒ…å ±ã‚’å—ã‘å–ã‚Šã€ãƒãƒ¼ãƒ ã«é€£çµ¡ã—ã€æˆ¦ç•¥çš„ãªä¼šè©±ã‚’å§‹ã‚ã‚‹æ¬¡ã®ã‚¹ãƒ†ãƒƒãƒ—ã‚’é¸æŠžã—ã¦ãã ã•ã„ã€‚",
        investorCtaCards: [
          ["01", "Investor Deck ã‚’è«‹æ±‚", "ãƒ†ãƒ¼ã‚¼ã€å¸‚å ´ã€ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—ã€æ©Ÿä¼šã®ã‚¨ã‚°ã‚¼ã‚¯ãƒ†ã‚£ãƒ–ã‚µãƒžãƒªãƒ¼ã‚’è«‹æ±‚ã€‚"],
          ["02", "ãƒãƒ¼ãƒ ã«é€£çµ¡", "æˆ¦ç•¥ã€ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã€ãƒãƒ¼ãƒ ã€æˆé•·æ®µéšŽã«ã¤ã„ã¦è³ªå•ã‚’é€ã‚‹ã€‚"],
          ["03", "é¢è«‡ã‚’äºˆç´„", "æŠ•è³‡ã€æˆ¦ç•¥ææºã€æ‹¡å¼µã«ã¤ã„ã¦ä¼šè©±ã‚’å§‹ã‚ã‚‹ã€‚"]
        ],
        formTitle: "æŠ•è³‡å®¶å°‚ç”¨ãƒ•ã‚©ãƒ¼ãƒ ",
        formText: "ãƒ—ãƒ­ãƒ•ã‚£ãƒ¼ãƒ«ã€æŠ•è³‡ãƒ†ãƒ¼ã‚¼ã€æˆ¦ç•¥çš„é–¢å¿ƒã‚’å…±æœ‰ã—ã¦ãã ã•ã„ã€‚Tecnotitan ãƒãƒ¼ãƒ ãŒ info@tecnotitan.com ã‹ã‚‰è¿”ä¿¡ã—ã¾ã™ã€‚",
        formLabels: ["åå‰", "ä¼šç¤¾ / ãƒ•ã‚¡ãƒ³ãƒ‰", "å›½", "ãƒ¡ãƒ¼ãƒ«", "é–¢å¿ƒã‚¿ã‚¤ãƒ—", "ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸"],
        formOptions: ["é¸æŠž", "æŠ•è³‡", "æˆ¦ç•¥ææº", "Investor deck", "ãƒãƒ¼ãƒ ã«é€£çµ¡", "é¢è«‡ã‚’äºˆç´„"],
        formButton: "info@tecnotitan.com ã¸é€ä¿¡",
        formSending: "é€ä¿¡ä¸­...",
        formErrorTitle: "é€ä¿¡ã§ãã¾ã›ã‚“ã§ã—ãŸ",
        formErrorText: "ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚ã¾ãŸã¯ info@tecnotitan.com ã¸ç›´æŽ¥ã”é€£çµ¡ãã ã•ã„ã€‚",
        formNewsletter: "Tecnotitan å…¬å¼ newsletter ã‚’è³¼èª­ã—ã¾ã™ã€‚",
        formSuccessTitle: "ãƒªã‚¯ã‚¨ã‚¹ãƒˆã‚’é€ä¿¡ã—ã¾ã—ãŸ",
        formSuccessText: "ã‚ã‚ŠãŒã¨ã†ã”ã–ã„ã¾ã™ã€‚Tecnotitan ãƒãƒ¼ãƒ ãŒæŠ•è³‡ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã‚’ç¢ºèªã—ã€info@tecnotitan.com ã‹ã‚‰è¿”ä¿¡ã—ã¾ã™ã€‚",
        cards: [
          ["01", "ã‚µãƒ¼ãƒ“ã‚¹ã«ã‚ˆã‚‹ç‰½å¼•", "ä¼æ¥­ã®å®Ÿèª²é¡Œã‚’è§£æ±ºã—ã€ç´å“ãƒ‘ã‚¿ãƒ¼ãƒ³ã‚’å†åˆ©ç”¨å¯èƒ½ãªèƒ½åŠ›ã¸å¤‰æ›ã—ã¾ã™ã€‚"],
          ["02", "è‡ªç¤¾è£½å“", "å†…éƒ¨ãƒ„ãƒ¼ãƒ«ã¨æ¤œè¨¼æ¸ˆã¿ãƒ•ãƒ­ãƒ¼ã‚’å•†ç”¨ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã¸å¤‰æ›ã—ã¾ã™ã€‚"],
          ["03", "ã‚°ãƒ­ãƒ¼ãƒãƒ«ã‚¹ã‚±ãƒ¼ãƒ«", "ãƒ©ãƒ†ãƒ³ã‚¢ãƒ¡ãƒªã‚«ã‹ã‚‰ä¸–ç•Œã®ä¼æ¥­ã¸å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã‚’è²©å£²ã—ã¾ã™ã€‚"]
        ]
      }
    },
    "contacto.html": {
      title: "ãŠå•ã„åˆã‚ã› | Tecnotitan",
      description: "ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã€ã‚µãƒ¼ãƒ“ã‚¹ã€ææºã€æŠ•è³‡ã«ã¤ã„ã¦ Tecnotitan ã¸ãŠå•ã„åˆã‚ã›ãã ã•ã„ã€‚",
      content: {
        label: "ãŠå•ã„åˆã‚ã›",
        titleLines: ["æ¬¡ã®ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã«ã¤ã„ã¦", "è©±ã—ã¾ã—ã‚‡ã†"],
        intro: "è‹¦æƒ…ã€ç”³ã—ç«‹ã¦ã€ææ¡ˆã€Tecnotitan ã¸ã®ä¸€èˆ¬çš„ãªä¾é ¼ã®ãŸã‚ã®çª“å£ã§ã™ã€‚",
        cards: [
          ["ã‚µãƒãƒ¼ãƒˆ", "ä¸€èˆ¬çš„ãªä¾é ¼", "Tecnotitan ã¨ã‚µãƒ¼ãƒ“ã‚¹ã«é–¢ã™ã‚‹è³ªå•ã€ã‚³ãƒ¡ãƒ³ãƒˆã€ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã€‚"],
          ["å“è³ª", "è‹¦æƒ…ã¨ç”³ã—ç«‹ã¦", "è¦‹ç›´ã—ãŒå¿…è¦ãªä½“é¨“ã€ãƒ—ãƒ­ã‚»ã‚¹ã€å›žç­”ã«ã¤ã„ã¦ã®å ±å‘Šã€‚"],
          ["æ”¹å–„", "ææ¡ˆ", "è£½å“ã€ã‚µãƒ¼ãƒ“ã‚¹ã€ã‚³ãƒŸãƒ¥ãƒ‹ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã€ãƒ¦ãƒ¼ã‚¶ãƒ¼ä½“é¨“ã‚’æ”¹å–„ã™ã‚‹ã‚¢ã‚¤ãƒ‡ã‚¢ã€‚"]
        ],
        formTitle: "ä¸€èˆ¬ãŠå•ã„åˆã‚ã›",
        formText: "è‹¦æƒ…ã€ç”³ã—ç«‹ã¦ã€ææ¡ˆã€ä¸€èˆ¬çš„ãªä¾é ¼ã‚’ info@tecnotitan.com ã¸é€ä¿¡ã—ã¦ãã ã•ã„ã€‚",
        formLabels: ["åå‰", "ãƒ¡ãƒ¼ãƒ«", "ä¼šç¤¾", "å›½", "ä¾é ¼ã‚¿ã‚¤ãƒ—", "ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸"],
        formOptions: ["é¸æŠž", "è‹¦æƒ…", "ç”³ã—ç«‹ã¦", "ææ¡ˆ", "ä¸€èˆ¬çš„ãªä¾é ¼"],
        formButton: "info@tecnotitan.com ã¸é€ä¿¡",
        formSending: "é€ä¿¡ä¸­...",
        formErrorTitle: "é€ä¿¡ã§ãã¾ã›ã‚“ã§ã—ãŸ",
        formErrorText: "ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚ã¾ãŸã¯ info@tecnotitan.com ã¸ç›´æŽ¥ã”é€£çµ¡ãã ã•ã„ã€‚",
        formNewsletter: "Tecnotitan å…¬å¼ newsletter ã‚’è³¼èª­ã—ã¾ã™ã€‚",
        formSuccessTitle: "ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã‚’é€ä¿¡ã—ã¾ã—ãŸ",
        formSuccessText: "ã‚ã‚ŠãŒã¨ã†ã”ã–ã„ã¾ã™ã€‚ä¸€èˆ¬ãƒªã‚¯ã‚¨ã‚¹ãƒˆã‚’å—ã‘å–ã‚Šã¾ã—ãŸã€‚info@tecnotitan.com ã‹ã‚‰è¿”ä¿¡ã—ã¾ã™ã€‚"
      }
    },
    "investor-deck.html": {
      title: "Investor Deck | Tecnotitan",
      description: "Tecnotitan ã®å°†æ¥ã® Investor Deck PDF ã‚’è«‹æ±‚ï¼šãƒ†ãƒ¼ã‚¼ã€å¸‚å ´ã€è£½å“ã€ãƒãƒ¼ãƒ ã€ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—ã€è³‡æœ¬å„ªå…ˆäº‹é …ã€‚",
      content: {
        label: "Investor Deck",
        titleLines: ["æŠ•è³‡å®¶å‘ã‘", "PDF"],
        intro: "Tecnotitan ã®æ­£å¼ deck ã¯å°†æ¥å…¬é–‹äºˆå®šã®è³‡ç”£ã¨ã—ã¦æº–å‚™ã•ã‚Œã¦ã„ã¾ã™ã€‚å…¬é–‹ã¾ã§ã®é–“ã€æŠ•è³‡å®¶ãƒ•ã‚©ãƒ¼ãƒ ã‹ã‚‰ç›´æŽ¥ã‚¢ã‚¯ã‚»ã‚¹ã‚’è«‹æ±‚ã§ãã¾ã™ã€‚",
        cards: [
          ["01", "ãƒ†ãƒ¼ã‚¼", "ã‚°ãƒ­ãƒ¼ãƒãƒ«ä¼æ¥­å‘ã‘ã®èª²é¡Œã€å¸‚å ´æ©Ÿä¼šã€å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã®ãƒ†ãƒ¼ã‚¼ã€‚"],
          ["02", "ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ª", "è£½å“ã€éƒ¨é–€ã€æ½œåœ¨ IPã€å†ç¾å¯èƒ½ãªãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã¸ã®é“ç­‹ã€‚"],
          ["03", "å®Ÿè¡Œ", "åˆæœŸãƒãƒ¼ãƒ ã€ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—ã€è³‡æœ¬å„ªå…ˆäº‹é …ã€æ¬¡ã®æ¤œè¨¼ãƒžã‚¤ãƒ«ã‚¹ãƒˆãƒ¼ãƒ³ã€‚"]
        ]
      }
    }
  }
});

languages.ko = buildLocalizedLanguage(languages.en, {
  label: "í•œ",
  nav: ["í™ˆ", "íšŒì‚¬ ì†Œê°œ", "ì œí’ˆ", "ì„œë¹„ìŠ¤", "ê°€ì´ë“œ", "ë¶€ë¬¸", "íˆ¬ìžìž", "ë¬¸ì˜"],
  headerAction: "ë¯¸íŒ… ì˜ˆì•½",
  writeAction: "ë¬¸ì˜í•˜ê¸°",
  openNav: "ë‚´ë¹„ê²Œì´ì…˜ ì—´ê¸°",
  closeNav: "ë‚´ë¹„ê²Œì´ì…˜ ë‹«ê¸°",
  brandHome: "Tecnotitan í™ˆ",
  mainNav: "ì£¼ ë‚´ë¹„ê²Œì´ì…˜",
  footerNav: "í‘¸í„° ë‚´ë¹„ê²Œì´ì…˜",
  footerMeta: [
    "Tecnotitan Corporate",
    "ì†Œí”„íŠ¸ì›¨ì–´, ì¸ê³µì§€ëŠ¥, ë¹„ë””ì˜¤ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ê¸°ìˆ  ì „í™˜.",
    "ì½œë¡¬ë¹„ì•„ | íˆ¬ìžìžì™€ ê¸°ì—…ì„ ìœ„í•œ ê¸€ë¡œë²Œ ëŒ€ì‘.",
    "ë²•ì  ê³ ì§€ Â· LinkedIn Â· Facebook Â· Instagram",
    "Â© 2026 Tecnotitan. ëª¨ë“  ê¶Œë¦¬ ë³´ìœ ."
  ],
  deckUi: ["Deck ìš”ì²­", "PDF Deck ë³´ê¸°", "PDF ë‹¤ìš´ë¡œë“œ"],
  pages: {
    "index.html": {
      title: "Tecnotitan | ê¸€ë¡œë²Œ ì‹œìž¥ì„ ìœ„í•œ ì‘ìš© ê¸°ìˆ ",
      description: "Tecnotitanì€ ê¸€ë¡œë²Œ ê¸°ì—…ê³¼ íˆ¬ìžìžë¥¼ ìœ„í•´ ì†Œí”„íŠ¸ì›¨ì–´, AI, ë¹„ë””ì˜¤ê²Œìž„, ë¡œë³´í‹±ìŠ¤ë¥¼ ë§Œë“­ë‹ˆë‹¤.",
      content: {
        heroTitle: ["ë¬´í•œí•œ", "íš¨ìœ¨ì„±", "ì„±ìž¥í•˜ëŠ”", "ê¸°ì—…ì„ ìœ„í•´"],
        heroText: "Tecnotitanì€ AI ì‹œìŠ¤í…œ, ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´ì™€ ìžë™í™”ë¥¼ ì„¤ê³„í•´ ë³µìž¡í•œ í”„ë¡œì„¸ìŠ¤ë¥¼ ë” ë¹ ë¥´ê³  ì§€ëŠ¥ì ì´ë©° ì¸¡ì • ê°€ëŠ¥í•œ ìš´ì˜ìœ¼ë¡œ ë°”ê¿‰ë‹ˆë‹¤.",
        primaryCta: "íˆ¬ìžìž ë…¼ë¦¬",
        secondaryCta: "ì œí’ˆ ë³´ê¸°",
        nextPreview: "ê³ ë¶€ê°€ ì„œë¹„ìŠ¤, ìžì²´ ì œí’ˆ, í™•ìž¥ ê°€ëŠ¥í•œ IP",
        visionLabel: "ê¸°ì—… ë¹„ì „",
        visionTitle: "ê¸€ë¡œë²Œ í™•ìž¥ì„±ì„ ê°€ì§„ ì‘ìš© ê¸°ìˆ  íšŒì‚¬ë¥¼ êµ¬ì¶•í•©ë‹ˆë‹¤.",
        visionParagraphs: [
          "Tecnotitanì€ ì„œë¹„ìŠ¤, ì œí’ˆ, ê¸°ìˆ  ë¶€ë¬¸ì´ ì§€ì‹, ì§€ì‹ìž¬ì‚°, ìž¬ì‚¬ìš© ê°€ëŠ¥í•œ ì—­ëŸ‰ì„ ê³µìœ í•˜ëŠ” ëª¨ë¸ë¡œ ë‚˜ì•„ê°€ê³  ìžˆìŠµë‹ˆë‹¤.",
          "ë¼í‹´ì•„ë©”ë¦¬ì¹´ì—ì„œ ì¶œë°œí•´ ê¸€ë¡œë²Œ ì‹œìž¥ìœ¼ë¡œ í™•ìž¥ ê°€ëŠ¥í•œ ê¸°ì—… ì†Œí”„íŠ¸ì›¨ì–´, AI ì‹œìŠ¤í…œ, ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜, ë¡œë³´í‹±ìŠ¤ë¥¼ ë§Œë“­ë‹ˆë‹¤."
        ],
        visionCards: [
          ["ì†Œí”„íŠ¸ì›¨ì–´", "ê¸°ì—… ìš´ì˜ ì‹œìŠ¤í…œ", "ë‚´ë¶€ í”Œëž«í¼, ìžë™í™”, ë°ì´í„°, ì›¹ ì œí’ˆìœ¼ë¡œ ì‹¤í–‰ë ¥ì„ ë†’ìž…ë‹ˆë‹¤."],
          ["AI", "ì—…ë¬´ì— ì ìš©ë˜ëŠ” ì§€ëŠ¥", "ì—ì´ì „íŠ¸, ë¶„ì„, ì½”íŒŒì¼ëŸ¿, ë¹„ì¦ˆë‹ˆìŠ¤ì— í†µí•©ëœ ìŠ¤ë§ˆíŠ¸ í”Œë¡œìš°."],
          ["ì¸í„°ëž™í‹°ë¸Œ", "ê²Œìž„ê³¼ ì‹œë®¬ë ˆì´ì…˜", "êµìœ¡, ë¸Œëžœë“œ, í•™ìŠµ, ì‹ ì œí’ˆì„ ìœ„í•œ ëª°ìž…í˜• ê²½í—˜."],
          ["ë¡œë³´í‹±ìŠ¤", "ë¬¼ë¦¬-ë””ì§€í„¸ ì‹œìŠ¤í…œ", "ì†Œí”„íŠ¸ì›¨ì–´, ì„¼ì„œ, ì œì–´, ë°ì´í„°ë¡œ ìš´ì˜ê³¼ ì§€ëŠ¥ì„ ì—°ê²°í•©ë‹ˆë‹¤."]
        ],
        marketTitle: "ì‘ìš© ê¸°ìˆ ì´ ê²½ìŸ ìš°ìœ„ë¥¼ ë§Œë“œëŠ” ì‹œìž¥.",
        marketText: "Tecnotitanì€ ë””ì§€í„¸í™”, ìžë™í™”, ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜, ì§€ëŠ¥í˜• ì‹œìŠ¤í…œì´ ì‹¤ì œë¡œ í•„ìš”í•œ ê³ ê°ì„ ëª©í‘œë¡œ í•©ë‹ˆë‹¤.",
        marketCards: [
          ["ê¸°ì—…", "ìš´ì˜ ì†Œí”„íŠ¸ì›¨ì–´", "ë‚´ë¶€ CRM, í¬í„¸, ëŒ€ì‹œë³´ë“œ, í”Œë¡œìš°, ìžë™í™”ê°€ í•„ìš”í•œ íšŒì‚¬."],
          ["ìš´ì˜", "ìƒì‚°ì„±ì„ ìœ„í•œ AI", "ë°˜ë³µ ì—…ë¬´ê°€ ìžˆëŠ” ì˜ì—…, ì§€ì›, ìž¬ë¬´, ìš´ì˜ íŒ€."],
          ["êµìœ¡", "ì‹œë®¬ë ˆì´ì…˜ê³¼ í•™ìŠµ", "êµìœ¡, í‰ê°€, ëª°ìž…í˜• ê²½í—˜ì´ í•„ìš”í•œ ê¸°ê´€ê³¼ ê¸°ì—…."],
          ["ì—”í„°í…Œì¸ë¨¼íŠ¸", "ê²Œìž„ê³¼ ë¸Œëžœë“œ", "ì¸í„°ëž™í‹°ë¸Œ ì œí’ˆ, ê²Œì´ë¯¸í”¼ì¼€ì´ì…˜, ë¸Œëžœë“œ ê²½í—˜, ìƒˆë¡œìš´ ë””ì§€í„¸ ì½˜í…ì¸ ."],
          ["ì‚°ì—…", "ë¡œë³´í‹±ìŠ¤ì™€ ë°ì´í„°", "ì„¼ì„œ, ì†Œí”„íŠ¸ì›¨ì–´, ì œì–´, ìš´ì˜ ì§€ëŠ¥ì„ ì—°ê²°í•  ìˆ˜ ìžˆëŠ” í”„ë¡œì„¸ìŠ¤."],
          ["ê¸°ê´€", "ê¸°ìˆ  ì „í™˜", "ì „ëžµ, êµ¬í˜„, ë„ìž…ì´ í•„ìš”í•œ ê³µê³µ ë˜ëŠ” ë¯¼ê°„ ì¡°ì§."]
        ],
        investorCtaTitle: "íˆ¬ìžìž ì•¡ì…˜",
        investorCtaText: "ê¸°íšŒë¥¼ ê²€í† í•˜ê³  ì°½ì—…íŒ€ì— ì—°ë½í•˜ê±°ë‚˜ ëŒ€í™”ë¥¼ ì‹œìž‘í•  ìˆ˜ ìžˆëŠ” ë°”ë¡œê°€ê¸°ìž…ë‹ˆë‹¤.",
        investorCtaCards: [
          ["01", "Investor Deck ìš”ì²­", "Tecnotitanì˜ ë…¼ë¦¬, ì‹œìž¥, ë¡œë“œë§µ, ê¸°íšŒ ìš”ì•½ì„ ë°›ìŠµë‹ˆë‹¤."],
          ["02", "íŒ€ì— ì—°ë½", "ì „ëžµì  ì§ˆë¬¸ì´ë‚˜ í›„ì† ë…¼ì˜ë¥¼ ìœ„í•´ Tecnotitanê³¼ ì§ì ‘ ì—°ê²°ë©ë‹ˆë‹¤."],
          ["03", "ë¯¸íŒ… ì˜ˆì•½", "íˆ¬ìž, íŒŒíŠ¸ë„ˆì‹­, ê¸€ë¡œë²Œ ì„±ìž¥ì— ëŒ€í•œ ëŒ€í™”ë¥¼ ì‹œìž‘í•©ë‹ˆë‹¤."]
        ],
        gatewayTitle: "ì—¬ëŸ¬ ë¶€ë¬¸ìœ¼ë¡œ êµ¬ì¶•ë˜ëŠ” ê¸°ìˆ  íšŒì‚¬",
        gatewayText: "ê³ ê°, íŒŒíŠ¸ë„ˆ, ê¸€ë¡œë²Œ íˆ¬ìžìžë¥¼ ìœ„í•´ íšŒì‚¬ì˜ ì´ì•¼ê¸°ë¥¼ ëª…í™•í•œ íŽ˜ì´ì§€ë¡œ ë‚˜ëˆ´ìŠµë‹ˆë‹¤.",
        cards: [
          ["01", "íšŒì‚¬ ì†Œê°œ", "ë¯¸ì…˜, ê¸°ìˆ  ë…¼ë¦¬, ì‹¤í–‰ ì›ì¹™."],
          ["02", "ì œí’ˆ", "ì†Œí”„íŠ¸ì›¨ì–´, AI, ê²Œìž„, ë¡œë³´í‹±ìŠ¤ë¥¼ í”Œëž«í¼ìœ¼ë¡œ ì „í™˜."],
          ["03", "ì„œë¹„ìŠ¤", "ì¸ê³µì§€ëŠ¥ê³¼ ê¸°ìˆ  ì „í™˜ ì»¨ì„¤íŒ…."],
          ["04", "ë¶€ë¬¸", "ì—¬ëŸ¬ ì‹œìž¥ì„ ë§Œë“¤ê¸° ìœ„í•œ ìš´ì˜ í¬íŠ¸í´ë¦¬ì˜¤."],
          ["05", "íˆ¬ìžìž", "ë¹„ì „, ê¸°íšŒ, ëª¨ë¸, ì„±ìž¥ ê²½ë¡œ."],
          ["06", "ë¬¸ì˜", "ë¹„ì¦ˆë‹ˆìŠ¤, íŒŒíŠ¸ë„ˆì‹­, íˆ¬ìž ëŒ€í™”."]
        ]
      }
    },
    "nosotros.html": {
      title: "íšŒì‚¬ ì†Œê°œ | Tecnotitan",
      description: "ì‘ìš© ê¸°ìˆ  íšŒì‚¬ Tecnotitanì˜ ë¹„ì „, ë¯¸ì…˜, ì›ì¹™ì„ ì†Œê°œí•©ë‹ˆë‹¤.",
      content: {
        label: "íšŒì‚¬ ì†Œê°œ",
        titleLines: ["ê¸€ë¡œë²Œ ì•¼ë§ì„ ê°€ì§„", "ì‘ìš© ê¸°ìˆ  íšŒì‚¬"],
        intro: "Tecnotitanì€ ì†Œí”„íŠ¸ì›¨ì–´, AI, ê²Œìž„, ë¡œë³´í‹±ìŠ¤ ì—­ëŸ‰ì„ ê¸°ì—… ê²½ìŸë ¥ì„ ë†’ì´ëŠ” ì œí’ˆê³¼ ì„œë¹„ìŠ¤ë¡œ ì „í™˜í•˜ê¸° ìœ„í•´ íƒ„ìƒí–ˆìŠµë‹ˆë‹¤.",
        thesisLabel: "ë¹„ì „",
        thesisTitle: "ê¸€ë¡œë²Œ í™•ìž¥ì„±ì„ ê°€ì§„ ë¼í‹´ì•„ë©”ë¦¬ì¹´ ì‘ìš© ê¸°ìˆ  íšŒì‚¬ê°€ ë˜ëŠ” ê²ƒ.",
        paragraphs: [
          "ìš°ë¦¬ì˜ ë…¼ë¦¬ëŠ” ë‹¨ìˆœí•©ë‹ˆë‹¤. ì†Œí”„íŠ¸ì›¨ì–´, ë°ì´í„°, AI, ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜, ì§€ëŠ¥í˜• ë¬¼ë¦¬ ì‹œìŠ¤í…œì„ ì§€ë°°í•˜ëŠ” ê¸°ì—…ì´ ì§€ì† ê°€ëŠ¥í•œ ìš°ìœ„ë¥¼ ë§Œë“­ë‹ˆë‹¤.",
          "Tecnotitanì€ ì´ ì˜ì—­ë“¤ì„ í†µí•©í•´ ìžì²´ ì†”ë£¨ì…˜ì„ ë§Œë“¤ê³ , ê¸°ì—… ì „í™˜ì„ ì§€ì›í•˜ë©°, ìƒˆë¡œìš´ ì„±ìž¥ ë¶€ë¬¸ì„ ì—½ë‹ˆë‹¤."
        ],
        leadershipTitle: "ë¦¬ë”ì‹­ê³¼ ì´ˆê¸° íŒ€",
        leadershipText: "Tecnotitanì€ ì°½ì—…ìž ë¦¬ë”ì‹­, ì „ë‹´ ì»¨ì„¤íŒ…, ê°œë°œ ì—­ëŸ‰ì„ ê°–ì¶˜ ìž‘ê³  ê¸°ìˆ  ì¤‘ì‹¬ì ì¸ ì‹¤í–‰ ì¡°ì§ìœ¼ë¡œ êµ¬ì¶•ë˜ê³  ìžˆìŠµë‹ˆë‹¤.",
        leadershipCards: [
          ["CEO / Founder", "David Arias Giraldo", "ì „ëžµ ë°©í–¥, ì œí’ˆ ë¹„ì „, ê¸°ì—… ê°œë°œ, ê¸°ìˆ  í¬íŠ¸í´ë¦¬ì˜¤ êµ¬ì¶•ì„ ì´ë•ë‹ˆë‹¤."],
          ["ì „ë‹´ ì»¨ì„¤íŒ…", "ì „ë‹´ ì»¨ì„¤í„´íŠ¸", "ì „ëžµ, ìš´ì˜, ë¦¬ì„œì¹˜, ë¬¸ì„œí™”, ê¸°ìˆ  ì „í™˜ì„ ì§€ì›í•©ë‹ˆë‹¤."],
          ["ì—”ì§€ë‹ˆì–´ë§", "í”„ë¡œê·¸ëž˜ë¨¸ 2ëª…", "ì†Œí”„íŠ¸ì›¨ì–´, í”„ë¡œí† íƒ€ìž…, ìžë™í™”, ìžì²´ ì œí’ˆì„ êµ¬ì¶•í•˜ëŠ” ì´ˆê¸° ê°œë°œíŒ€ìž…ë‹ˆë‹¤."]
        ],
        cards: [
          ["01", "ë°œí‘œë³´ë‹¤ ì œí’ˆ", "ì¶”ìƒì  ì•½ì†ë³´ë‹¤ ìž‘ë™í•˜ê³  ì¸¡ì • ê°€ëŠ¥í•˜ë©° í™•ìž¥ ê°€ëŠ¥í•œ ì‹œìŠ¤í…œì„ ìš°ì„ í•©ë‹ˆë‹¤."],
          ["02", "AIë¥¼ ì¸í”„ë¼ë¡œ", "ìžë™í™”, ì˜ì‚¬ê²°ì •, í•™ìŠµì„ ìœ„í•œ í•µì‹¬ ë ˆì´ì–´ë¡œ AIë¥¼ ë‹¤ë£¹ë‹ˆë‹¤."],
          ["03", "ì‹¤í–‰ ê°€ëŠ¥í•œ ë‹¤í•™ì œ", "ì†Œí”„íŠ¸ì›¨ì–´, ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ì»¨ì„¤íŒ…ì´ í•˜ë‚˜ì˜ ê¸°ìˆ  í¬íŠ¸í´ë¦¬ì˜¤ë¡œ ì›€ì§ìž…ë‹ˆë‹¤."]
        ]
      }
    },
    "productos.html": {
      title: "ì œí’ˆ | Tecnotitan",
      description: "ê¸°ì—… ì†Œí”„íŠ¸ì›¨ì–´, ì¸ê³µì§€ëŠ¥, ë¹„ë””ì˜¤ê²Œìž„, ë¡œë³´í‹±ìŠ¤ ë¶„ì•¼ì˜ Tecnotitan ì œí’ˆ.",
      content: {
        label: "ì œí’ˆ",
        titleLines: ["í”Œëž«í¼ìœ¼ë¡œ ì¶•ì ë ", "ìˆ˜ ìžˆëŠ” ì œí’ˆ"],
        intro: "ìš°ë¦¬ëŠ” ìžì²´ ì œí’ˆê³¼ ë§žì¶¤í˜• ì‹œìŠ¤í…œì„ ë§Œë“¤ê³ , ì´ë¥¼ ë°˜ë³µ ê°€ëŠ¥í•œ í”Œëž«í¼ìœ¼ë¡œ ë°œì „ì‹œí‚µë‹ˆë‹¤.",
        cards: [
          ["ì¤‘ì†Œê¸°ì—… AI", "Copiloto PyME", "ë¼í‹´ì•„ë©”ë¦¬ì¹´ ì¤‘ì†Œê¸°ì—…ì„ ìœ„í•œ AI ì˜ì‚¬ê²°ì • íŒ¨ë„ìž…ë‹ˆë‹¤. íŒë§¤, ê³„ì‚°ëŒ€, ìž¬ê³ , ê³ ê° ëª¨ë“ˆì„ ì—°ê²°í•´ ë” í†µì œëœ ìš´ì˜ì„ ë•ìŠµë‹ˆë‹¤."],
          ["ê¸°ì—… ìš´ì˜ì²´ì œ", "Tecnotitan OS", "í”„ë¡œì„¸ìŠ¤, ë°ì´í„°, ìžë™í™”, AI ì—ì´ì „íŠ¸, ë‚´ë¶€ í”Œë¡œìš°ë¥¼ ì¤‘ì•™í™”í•˜ëŠ” ê¸°ì—… í”Œëž«í¼."],
          ["ëª¨ë°”ì¼ + AI", "Life Copilot", "ëª©í‘œ, ì—…ë¬´, ìŠµê´€, ì˜ì‚¬ê²°ì •ì„ ì •ë¦¬í•˜ëŠ” ê°œì¸ ìƒì‚°ì„± AI ëª¨ë°”ì¼ ì•±."],
          ["ë¹„ë””ì˜¤ê²Œìž„", "Tecnotitan Engine", "ê²Œìž„, ì‹œë®¬ë ˆì´í„°, ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜, ê²Œì´ë¯¸í”¼ì¼€ì´ì…˜ ì„¸ê³„ë¥¼ í”„ë¡œí† íƒ€ì´í•‘í•˜ëŠ” ì—”ì§„ê³¼ íˆ´í‚·."],
          ["êµìœ¡", "Academia Tecnotitan", "AI, ì†Œí”„íŠ¸ì›¨ì–´, ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ê¸°ìˆ  ì „í™˜ì„ ìœ„í•œ í•™ìŠµ í”Œëž«í¼."],
          ["AI ì½œì„¼í„°", "Call Center AI Tecnotitan", "ì§€ì›, ì˜ì—…, ê³ ê° í›„ì†ê´€ë¦¬, ì»¨íƒì„¼í„° ìžë™í™”ë¥¼ ìœ„í•œ ëŒ€í™”í˜• ì—ì´ì „íŠ¸."]
        ]
      }
    },
    "servicios.html": {
      title: "ì„œë¹„ìŠ¤ | Tecnotitan",
      description: "ê¸°ì—…ì„ ìœ„í•œ ì¸ê³µì§€ëŠ¥ ì»¨ì„¤íŒ…ê³¼ ê¸°ìˆ  ì „í™˜ ì„œë¹„ìŠ¤.",
      content: {
        label: "ì„œë¹„ìŠ¤",
        titleLines: ["êµ¬í˜„ìœ¼ë¡œ ì´ì–´ì§€ëŠ”", "ì»¨ì„¤íŒ…"],
        intro: "ê¸°ì—…ì´ ìš´ì˜ íš¨ê³¼ê°€ ìžˆëŠ” AIì™€ ì†Œí”„íŠ¸ì›¨ì–´ë¥¼ ì‹ë³„, ì„¤ê³„, êµ¬í˜„í•˜ë„ë¡ ë•ìŠµë‹ˆë‹¤.",
        timelineLabel: "ì„œë¹„ìŠ¤",
        cards: [
          ["01", "AI ì§„ë‹¨", "í”„ë¡œì„¸ìŠ¤, ë°ì´í„°, ìžë™í™” ê¸°íšŒ, ì˜ˆìƒ ìˆ˜ìµì„ í‰ê°€í•©ë‹ˆë‹¤."],
          ["02", "ê¸°ìˆ  ë¡œë“œë§µ", "ì•„í‚¤í…ì²˜, ìš°ì„ ìˆœìœ„, ìŠ¤íƒ, ë¦¬ìŠ¤í¬, ì‹¤í–‰ ê³„íš."],
          ["03", "êµ¬í˜„", "ì†Œí”„íŠ¸ì›¨ì–´, AI ì—ì´ì „íŠ¸, í†µí•©, ìž‘ë™í•˜ëŠ” í”„ë¡œí† íƒ€ìž… ê°œë°œ."],
          ["04", "ë„ìž…", "êµìœ¡, ì¸¡ì •, ì§€ì† ê°œì„ , ì—­ëŸ‰ ì´ì „."]
        ]
      }
    },
    "divisiones.html": {
      title: "ë¶€ë¬¸ | Tecnotitan",
      description: "ì†Œí”„íŠ¸ì›¨ì–´, AI, ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ê¸°ìˆ  ventures ë¶„ì•¼ì˜ Tecnotitan ë¶€ë¬¸.",
      content: {
        label: "ë¶€ë¬¸",
        titleLines: ["ê¸°ìˆ  ì—”ì§„ë“¤ì˜", "í¬íŠ¸í´ë¦¬ì˜¤"],
        intro: "ê° ë¶€ë¬¸ì€ ìž¬ì‚¬ìš© ê°€ëŠ¥í•œ ì—­ëŸ‰, ì§€ì‹ìž¬ì‚°, ë…ë¦½ì ì¸ ìƒì—… ê¸°íšŒë¥¼ ë§Œë“­ë‹ˆë‹¤.",
        divisionThesisLabel: "ìš´ì˜ ì•„í‚¤í…ì²˜",
        divisionThesisTitle: "ì†Œí”„íŠ¸ì›¨ì–´, ë°ì´í„°, ì‘ìš© ì§€ëŠ¥ìœ¼ë¡œ ì—°ê²°ëœ ë¶€ë¬¸.",
        divisionThesisParagraphs: [
          "Tecnotitanì˜ ê° ë¶€ë¬¸ì€ ë¹„ì¦ˆë‹ˆìŠ¤ ìœ ë‹›, IP ì—°êµ¬ì†Œ, ë‹¤ë¥¸ ë¶€ë¬¸ì„ ìœ„í•œ ì—­ëŸ‰ ê³µê¸‰ì›ìœ¼ë¡œ ìš´ì˜ë  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.",
          "ëª©í‘œëŠ” ì»¨ì„¤íŒ…, ì œí’ˆ, ìžì²´ ê¸°ìˆ ì´ ì„œë¡œë¥¼ ê°•í™”í•´ ê³ ë¦½ëœ í”„ë¡œì íŠ¸ê°€ ì•„ë‹ˆë¼ ì‹œìž¥ì„ ë§Œë“œëŠ” ê²ƒìž…ë‹ˆë‹¤."
        ],
        cards: [
          ["ê¸°ì—… ì†Œí”„íŠ¸ì›¨ì–´", "Tecnotitan Software", "ê¸°ì—… ìš´ì˜ì„ ê°œì„ í•˜ëŠ” ì›¹ í”Œëž«í¼, ë‚´ë¶€ CRM, í¬í„¸, ëŒ€ì‹œë³´ë“œ, ìžë™í™”."],
          ["ì¸ê³µì§€ëŠ¥", "Tecnotitan AI", "ì‹¤ì œ í”„ë¡œì„¸ìŠ¤ì— í†µí•©ë˜ëŠ” ì—ì´ì „íŠ¸, ì½”íŒŒì¼ëŸ¿, ë¶„ì„, ë¬¸ì„œ ìžë™í™”, ìŠ¤ë§ˆíŠ¸ í”Œë¡œìš°."],
          ["ê²Œìž„ê³¼ ì¸í„°ëž™í‹°ë¸Œ", "Tecnotitan Games", "êµìœ¡, ë¸Œëžœë“œ, ì‹ ì œí’ˆì„ ìœ„í•œ ê²Œìž„, ì‹œë®¬ë ˆì´í„°, ê²Œì´ë¯¸í”¼ì¼€ì´ì…˜, ëª°ìž…í˜• ê²½í—˜."],
          ["ë¡œë³´í‹±ìŠ¤", "Tecnotitan Robotics", "ìš´ì˜ ì§€ëŠ¥ê³¼ ì—°ê²°ëœ ë¬¼ë¦¬-ë””ì§€í„¸ ì‹œìŠ¤í…œì„ ë§Œë“œëŠ” ì†Œí”„íŠ¸ì›¨ì–´, ì„¼ì„œ, ì œì–´, ë°ì´í„°."],
          ["ê¸°ìˆ  ì»¨ì„¤íŒ…", "Tecnotitan Advisory", "AI ì „ëžµ, ê¸°ìˆ  ì „í™˜, ê¸°ì—… ë„ìž…, ê²½ì˜ì§„ ì§€ì›."],
          ["Ventures", "Tecnotitan Ventures", "ì‹¤í—˜, spin-off, ìžì²´ ì œí’ˆ, ë‚´ë¶€ ì—­ëŸ‰ì—ì„œ ë§Œë“¤ì–´ì§€ëŠ” ìƒˆë¡œìš´ ê¸°íšŒ."]
        ]
      }
    },
    "inversionistas.html": {
      title: "íˆ¬ìžìž | Tecnotitan",
      description: "Tecnotitanì˜ ê¸€ë¡œë²Œ íˆ¬ìžìž íŽ˜ì´ì§€: ë…¼ë¦¬, ì‹œìž¥, ëª¨ë¸, ë¹„ì „.",
      content: {
        label: "íˆ¬ìžìž",
        titleLines: ["ë¼í‹´ì•„ë©”ë¦¬ì¹´ì—ì„œ", "ê¸€ë¡œë²Œ ì‹œìž¥ìœ¼ë¡œ ê°€ëŠ”", "ì‘ìš© ê¸°ìˆ "],
        intro: "Tecnotitanì€ ê³ ë¶€ê°€ ì„œë¹„ìŠ¤, ìžì²´ ì œí’ˆ, ê¸°ìˆ  ë¶€ë¬¸ì„ ê²°í•©í•´ í™•ìž¥ ê°€ëŠ¥í•œ ì‘ìš© ê¸°ìˆ  íšŒì‚¬ë¥¼ êµ¬ì¶•í•©ë‹ˆë‹¤.",
        metrics: [
          ["ì‹œìž¥", "ì†Œí”„íŠ¸ì›¨ì–´ + AI", "ì§€ëŠ¥í˜• ìžë™í™”ë¡œ ê°€ì†ë˜ëŠ” ê¸°ì—… ë””ì§€í„¸í™”."],
          ["í™•ìž¥", "ë‹¤ì¤‘ ë¶€ë¬¸", "ì†Œí”„íŠ¸ì›¨ì–´, AI, ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ì»¨ì„¤íŒ…ì´ ì—°ê²°ëœ ì—”ì§„."],
          ["ëª¨ë¸", "ì„œë¹„ìŠ¤ì—ì„œ ì œí’ˆìœ¼ë¡œ", "ê³ ê° í•™ìŠµ, ìžì²´ IP, ë°˜ë³µ ê°€ëŠ¥í•œ í”Œëž«í¼."]
        ],
        thesisLabel: "ë…¼ë¦¬",
        thesisTitle: "ìµœê³ ì˜ ê¸°ìˆ  íŒŒíŠ¸ë„ˆëŠ” ê¹Šì€ ì»¨ì„¤íŒ…ê³¼ ì œí’ˆ ì‹¤í–‰ë ¥ì„ ê²°í•©í•©ë‹ˆë‹¤.",
        paragraphs: [
          "ì‹œìž¥ì€ ì „í†µ ì†Œí”„íŠ¸ì›¨ì–´ì—ì„œ ì—ì´ì „íŠ¸, ìžë™í™”, ë°ì´í„°, ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜ì„ ê°€ì§„ ì‹œìŠ¤í…œìœ¼ë¡œ ì´ë™í•˜ê³  ìžˆìŠµë‹ˆë‹¤. Tecnotitanì€ ì´ êµì°¨ì ì— ìžˆìŠµë‹ˆë‹¤.",
          "ìš°ë¦¬ì˜ ê²½ë¡œëŠ” ì„œë¹„ìŠ¤ ë§¤ì¶œ, ì œí’ˆ ê°œë°œ, ì§€ì‹ìž¬ì‚°, ë¶€ë¬¸ë³„ spin-off ê¸°íšŒë¥¼ ê²°í•©í•©ë‹ˆë‹¤."
        ],
        opportunityTitle: "íˆ¬ìž ê¸°íšŒ",
        opportunityText: "Tecnotitanì€ AI, ì†Œí”„íŠ¸ì›¨ì–´, ë¡œë³´í‹±ìŠ¤ì˜ ê¸°ì—… ìˆ˜ìš”ë¥¼ í¬ì°©í•˜ê³ , ì„œë¹„ìŠ¤ì—ì„œ ì–»ì€ í•™ìŠµì„ ìžì²´ ì œí’ˆê³¼ í™•ìž¥ ê°€ëŠ¥í•œ IPë¡œ ì „í™˜í•©ë‹ˆë‹¤.",
        opportunityCards: [
          ["01", "êµ¬ì¡°ì  ìˆ˜ìš”", "ê¸°ì—…ì€ ê²½ìŸì„ ìœ„í•´ í”„ë¡œì„¸ìŠ¤, ë°ì´í„°, ì˜ì‚¬ê²°ì •ì„ ìžë™í™”í•´ì•¼ í•©ë‹ˆë‹¤."],
          ["02", "í•˜ì´ë¸Œë¦¬ë“œ ëª¨ë¸", "ê³ ë¶€ê°€ ì„œë¹„ìŠ¤ëŠ” ë§¤ì¶œ, ì‹œìž¥ í•™ìŠµ, ì œí’ˆ ê¸°íšŒë¥¼ ë§Œë“­ë‹ˆë‹¤."],
          ["03", "ì¶•ì  ê°€ëŠ¥í•œ IP", "ê° í”„ë¡œì íŠ¸ëŠ” ë„êµ¬, ì—ì´ì „íŠ¸, í”„ë ˆìž„ì›Œí¬, ë°˜ë³µ ê°€ëŠ¥í•œ í”Œëž«í¼ì´ ë  ìˆ˜ ìžˆìŠµë‹ˆë‹¤."],
          ["04", "ì§€ì—­ í™•ìž¥", "ë¼í‹´ì•„ë©”ë¦¬ì¹´ì—ì„œ ì‘ìš© ê¸°ìˆ ì„ êµ¬ì¶•í•´ ìœ ì‚¬í•œ ë‹ˆì¦ˆë¥¼ ê°€ì§„ ê¸€ë¡œë²Œ ì‹œìž¥ì— íŒë§¤í•©ë‹ˆë‹¤."]
        ],
        indicatorTitle: "ì¶”ì  ì§€í‘œ",
        indicatorText: "Tecnotitanì˜ ë§¤ì¶œ, ìžì²´ ì œí’ˆ, ëª©í‘œ ê³ ê°, ì§€ì—­ í™•ìž¥ ì§„í–‰ ìƒí™©ì„ ì „ë¬¸ì ìœ¼ë¡œ ì¶”ì í•˜ê¸° ìœ„í•œ í”„ë ˆìž„ìž…ë‹ˆë‹¤.",
        indicatorMetrics: [
          ["ëª©í‘œ ì‹œìž¥", "ê¸°ì—… + AI", "ì†Œí”„íŠ¸ì›¨ì–´, ìžë™í™”, ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜, ì‘ìš© ë¡œë³´í‹±ìŠ¤."],
          ["ì‚¬ì—… ì˜ì—­", "5ê°œ ë¶€ë¬¸", "ì†Œí”„íŠ¸ì›¨ì–´, AI, ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ê¸°ìˆ  ì»¨ì„¤íŒ…."],
          ["ì œí’ˆ", "6ê°œ ë¼ì¸", "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia, Call Center AI."]
        ],
        indicatorCards: [
          ["ëª©í‘œ ê³ ê°", "ì¤‘ê²¬ ë° ëŒ€ê¸°ì—…", "ë°˜ë³µ í”„ë¡œì„¸ìŠ¤, ë¯¸í™œìš© ë°ì´í„°, ìžë™í™” ì••ë ¥ì„ ê°€ì§„ ì¡°ì§."],
          ["ë¡œë“œë§µ", "ì„œë¹„ìŠ¤ì—ì„œ í”Œëž«í¼ìœ¼ë¡œ", "ë°˜ë³µ ë‚©í’ˆì„ ë‚´ë¶€ ë„êµ¬, ìƒì—… ëª¨ë“ˆ, ì œí’ˆìœ¼ë¡œ ì „í™˜í•©ë‹ˆë‹¤."],
          ["í™•ìž¥", "LatAmì—ì„œ ê¸€ë¡œë²Œë¡œ", "ì§€ì—­ ì‚¬ë¡€ë¥¼ ê²€ì¦í•˜ê³  ìœ ì‚¬í•œ ë‹ˆì¦ˆì˜ ì‹œìž¥ìœ¼ë¡œ ì‘ìš© ê¸°ìˆ ì„ í™•ìž¥í•©ë‹ˆë‹¤."]
        ],
        roadmapTitle: "ì „ëžµ ë¡œë“œë§µ",
        roadmapText: "ê¸°ìˆ  ì—­ëŸ‰ì„ ì„œë¹„ìŠ¤, ìžì²´ ì œí’ˆ, í™•ìž¥ ê¸°íšŒë¡œ ì „í™˜í•˜ëŠ” ë‹¨ê³„ë³„ ì„±ìž¥ ê²½ë¡œ.",
        roadmapCards: [
          ["2026", "ê²€ì¦ê³¼ ì‹¤ì œ ì‚¬ë¡€", "AI/ì†Œí”„íŠ¸ì›¨ì–´ ì„œë¹„ìŠ¤ë¥¼ ê°•í™”í•˜ê³  ê¸°ì—… ì‚¬ë¡€ë¥¼ ë§Œë“¤ë©° ë°˜ë³µ ê°€ëŠ¥í•œ íŒ¨í„´ì„ ë¬¸ì„œí™”í•©ë‹ˆë‹¤."],
          ["2027", "ì œí’ˆê³¼ ì§€ì‹ìž¬ì‚°", "ë‚´ë¶€ ë„êµ¬ë¥¼ íŒ¨í‚¤ì§•í•˜ê³  ì²« ìƒì—… ì œí’ˆ ë¼ì¸ì„ ì¶œì‹œí•˜ë©° ê¸°ìˆ  ë¶€ë¬¸ì„ ê°•í™”í•©ë‹ˆë‹¤."],
          ["2028", "ì§€ì—­ í™•ìž¥ê³¼ í”Œëž«í¼", "ì§€ì—­ íŒë§¤ë¥¼ í™•ëŒ€í•˜ê³  ì†”ë£¨ì…˜ì„ í”Œëž«í¼ìœ¼ë¡œ ì „í™˜í•˜ë©° ë¶€ë¬¸ë³„ spin-offë¥¼ ê²€í† í•©ë‹ˆë‹¤."]
        ],
        deckTitle: "Investor Deck / Data Room",
        deckText: "Tecnotitanì˜ ë…¼ë¦¬, ì‹œìž¥, í¬íŠ¸í´ë¦¬ì˜¤, ì‹¤í–‰ ê²½ë¡œë¥¼ í‰ê°€í•´ì•¼ í•˜ëŠ” íˆ¬ìžìžë¥¼ ìœ„í•œ ìžë£Œìž…ë‹ˆë‹¤.",
        deckCards: [
          ["01", "ë…¼ë¦¬ì™€ ì‹œìž¥", "ë¬¸ì œ, ê¸°íšŒ, ëª©í‘œ ê³ ê°, AIÂ·ì†Œí”„íŠ¸ì›¨ì–´Â·ìžë™í™”ê°€ ì§€ê¸ˆ ê²°í•©ë˜ëŠ” ì´ìœ ."],
          ["02", "ì œí’ˆê³¼ IP", "í˜„ìž¬ í¬íŠ¸í´ë¦¬ì˜¤, ìžì²´ ë¼ì¸, ë°˜ë³µ ê°€ëŠ¥í•œ í”Œëž«í¼ìœ¼ë¡œ ë°œì „í•  ìˆ˜ ìžˆëŠ” ì—­ëŸ‰."],
          ["03", "íŒ€ê³¼ ì‹¤í–‰", "ì´ˆê¸° êµ¬ì¡°, ì°½ì—…ìž ë¦¬ë”ì‹­, ê¸°ìˆ  ì—­ëŸ‰, ì œí’ˆ ì¤‘ì‹¬ ìš´ì˜ ë°©ì‹."],
          ["04", "ë¡œë“œë§µ", "ê²€ì¦, íŒ¨í‚¤ì§•, ì§€ì—­ í™•ìž¥, ì§€ì‹ìž¬ì‚° êµ¬ì¶• ë‹¨ê³„."],
          ["05", "ìžë³¸ ì‚¬ìš©", "ì œí’ˆ, ì˜ì—…, ê¸°ìˆ  ì¸ìž¬, ë‚´ë¶€ ìžë™í™”, ìƒì—… ê²€ì¦ì„ ê°€ì†í•©ë‹ˆë‹¤."],
          ["06", "ëŒ€í™”", "ì¶”ê°€ ì •ë³´ ìš”ì²­, ë…¼ë¦¬ ê³µìœ , Tecnotitanê³¼ì˜ ë¯¸íŒ… ì¡°ìœ¨."]
        ],
        deckPageButton: "Deck íŽ˜ì´ì§€ ë³´ê¸°",
        deckButton: "Investor Deck ìš”ì²­",
        investorCtaTitle: "íˆ¬ìžìž ì•¡ì…˜",
        investorCtaText: "ì •ë³´ë¥¼ ë°›ê³ , íŒ€ì— ì—°ë½í•˜ê±°ë‚˜ ì „ëžµì  ëŒ€í™”ë¥¼ ì‹œìž‘í•  ë‹¤ìŒ ë‹¨ê³„ë¥¼ ì„ íƒí•˜ì„¸ìš”.",
        investorCtaCards: [
          ["01", "Investor Deck ìš”ì²­", "ë…¼ë¦¬, ì‹œìž¥, ë¡œë“œë§µ, ê¸°íšŒì˜ ìš”ì•½ë³¸ì„ ìš”ì²­í•©ë‹ˆë‹¤."],
          ["02", "íŒ€ì— ì—°ë½", "ì „ëžµ, í¬íŠ¸í´ë¦¬ì˜¤, íŒ€, ì„±ìž¥ ë‹¨ê³„ì— ëŒ€í•œ ì§ˆë¬¸ì„ ë³´ëƒ…ë‹ˆë‹¤."],
          ["03", "ë¯¸íŒ… ì˜ˆì•½", "íˆ¬ìž, ì „ëžµì  íŒŒíŠ¸ë„ˆì‹­, í™•ìž¥ì— ëŒ€í•œ ëŒ€í™”ë¥¼ ì‹œìž‘í•©ë‹ˆë‹¤."]
        ],
        formTitle: "íˆ¬ìžìž ì „ìš© ë¬¸ì˜",
        formText: "í”„ë¡œí•„, íˆ¬ìž ë…¼ë¦¬, ì „ëžµì  ê´€ì‹¬ì„ ê³µìœ í•˜ë©´ Tecnotitan íŒ€ì´ info@tecnotitan.comì—ì„œ ë‹µë³€í•©ë‹ˆë‹¤.",
        formLabels: ["ì´ë¦„", "íšŒì‚¬ / íŽ€ë“œ", "êµ­ê°€", "ì´ë©”ì¼", "ê´€ì‹¬ ìœ í˜•", "ë©”ì‹œì§€"],
        formOptions: ["ì„ íƒ", "íˆ¬ìž", "ì „ëžµì  íŒŒíŠ¸ë„ˆì‹­", "Investor deck", "íŒ€ì— ì—°ë½", "ë¯¸íŒ… ì˜ˆì•½"],
        formButton: "info@tecnotitan.comìœ¼ë¡œ ë³´ë‚´ê¸°",
        formSending: "ì „ì†¡ ì¤‘...",
        formErrorTitle: "ì „ì†¡í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤",
        formErrorText: "ë‹¤ì‹œ ì‹œë„í•˜ê±°ë‚˜ info@tecnotitan.comìœ¼ë¡œ ì§ì ‘ ì—°ë½í•´ ì£¼ì„¸ìš”.",
        formNewsletter: "Tecnotitan ê³µì‹ newsletterë¥¼ êµ¬ë…í•˜ê² ìŠµë‹ˆë‹¤.",
        formSuccessTitle: "ìš”ì²­ì´ ì „ì†¡ë˜ì—ˆìŠµë‹ˆë‹¤",
        formSuccessText: "ê°ì‚¬í•©ë‹ˆë‹¤. Tecnotitan íŒ€ì´ íˆ¬ìž ë©”ì‹œì§€ë¥¼ ê²€í† í•˜ê³  info@tecnotitan.comì—ì„œ ë‹µë³€í•©ë‹ˆë‹¤.",
        cards: [
          ["01", "ì„œë¹„ìŠ¤ ê¸°ë°˜ ì´ˆê¸° ê²¬ì¸", "ê¸°ì—…ì˜ ì‹¤ì œ ë¬¸ì œë¥¼ í•´ê²°í•˜ê³  ë‚©í’ˆ íŒ¨í„´ì„ ìž¬ì‚¬ìš© ê°€ëŠ¥í•œ ì—­ëŸ‰ìœ¼ë¡œ ì „í™˜í•©ë‹ˆë‹¤."],
          ["02", "ìžì²´ ì œí’ˆ", "ë‚´ë¶€ ë„êµ¬ì™€ ê²€ì¦ëœ í”Œë¡œìš°ë¥¼ ìƒì—… í”Œëž«í¼ìœ¼ë¡œ ì „í™˜í•©ë‹ˆë‹¤."],
          ["03", "ê¸€ë¡œë²Œ í™•ìž¥", "ë¼í‹´ì•„ë©”ë¦¬ì¹´ì—ì„œ ê¸€ë¡œë²Œ ê¸°ì—…ìœ¼ë¡œ ì‘ìš© ê¸°ìˆ ì„ íŒë§¤í•©ë‹ˆë‹¤."]
        ]
      }
    },
    "contacto.html": {
      title: "ë¬¸ì˜ | Tecnotitan",
      description: "í”„ë¡œì íŠ¸, ì„œë¹„ìŠ¤, íŒŒíŠ¸ë„ˆì‹­, íˆ¬ìžì— ëŒ€í•´ Tecnotitanì— ë¬¸ì˜í•˜ì„¸ìš”.",
      content: {
        label: "ë¬¸ì˜",
        titleLines: ["ë‹¤ìŒ ê¸°ìˆ ì— ëŒ€í•´", "ì´ì•¼ê¸°í•©ì‹œë‹¤"],
        intro: "ë¶ˆë§Œ, í´ë ˆìž„, ì œì•ˆ, Tecnotitanì— ëŒ€í•œ ì¼ë°˜ ìš”ì²­ì„ ìœ„í•œ ì±„ë„ìž…ë‹ˆë‹¤.",
        cards: [
          ["ì§€ì›", "ì¼ë°˜ ìš”ì²­", "Tecnotitanê³¼ ì„œë¹„ìŠ¤ì— ëŒ€í•œ ì§ˆë¬¸, ì˜ê²¬, ë©”ì‹œì§€."],
          ["í’ˆì§ˆ", "ë¶ˆë§Œê³¼ í´ë ˆìž„", "ê²€í† ê°€ í•„ìš”í•œ ê²½í—˜, í”„ë¡œì„¸ìŠ¤, ë‹µë³€ì— ëŒ€í•œ ë³´ê³ ."],
          ["ê°œì„ ", "ì œì•ˆ", "ì œí’ˆ, ì„œë¹„ìŠ¤, ì»¤ë®¤ë‹ˆì¼€ì´ì…˜, ì‚¬ìš©ìž ê²½í—˜ì„ ê°œì„ í•˜ê¸° ìœ„í•œ ì•„ì´ë””ì–´."]
        ],
        formTitle: "ì¼ë°˜ ë¬¸ì˜",
        formText: "ë¶ˆë§Œ, í´ë ˆìž„, ì œì•ˆ ë˜ëŠ” ì¼ë°˜ ìš”ì²­ì„ info@tecnotitan.comìœ¼ë¡œ ë³´ë‚´ì£¼ì„¸ìš”.",
        formLabels: ["ì´ë¦„", "ì´ë©”ì¼", "íšŒì‚¬", "êµ­ê°€", "ìš”ì²­ ìœ í˜•", "ë©”ì‹œì§€"],
        formOptions: ["ì„ íƒ", "ë¶ˆë§Œ", "í´ë ˆìž„", "ì œì•ˆ", "ì¼ë°˜ ìš”ì²­"],
        formButton: "info@tecnotitan.comìœ¼ë¡œ ë³´ë‚´ê¸°",
        formSending: "ì „ì†¡ ì¤‘...",
        formErrorTitle: "ì „ì†¡í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤",
        formErrorText: "ë‹¤ì‹œ ì‹œë„í•˜ê±°ë‚˜ info@tecnotitan.comìœ¼ë¡œ ì§ì ‘ ì—°ë½í•´ ì£¼ì„¸ìš”.",
        formNewsletter: "Tecnotitan ê³µì‹ newsletterë¥¼ êµ¬ë…í•˜ê² ìŠµë‹ˆë‹¤.",
        formSuccessTitle: "ë©”ì‹œì§€ê°€ ì „ì†¡ë˜ì—ˆìŠµë‹ˆë‹¤",
        formSuccessText: "ê°ì‚¬í•©ë‹ˆë‹¤. ì¼ë°˜ ìš”ì²­ì„ ë°›ì•˜ìœ¼ë©° info@tecnotitan.comì—ì„œ ë‹µë³€í•˜ê² ìŠµë‹ˆë‹¤."
      }
    },
    "investor-deck.html": {
      title: "Investor Deck | Tecnotitan",
      description: "Tecnotitanì˜ í–¥í›„ Investor Deck PDF ìš”ì²­: ë…¼ë¦¬, ì‹œìž¥, ì œí’ˆ, íŒ€, ë¡œë“œë§µ, ìžë³¸ ìš°ì„ ìˆœìœ„.",
      content: {
        label: "Investor Deck",
        titleLines: ["íˆ¬ìžìžë¥¼ ìœ„í•œ", "PDF"],
        intro: "Tecnotitanì˜ ê³µì‹ deckì€ í–¥í›„ ê³µê°œë  ìžì‚°ìœ¼ë¡œ ì¤€ë¹„ë˜ì–´ ìžˆìŠµë‹ˆë‹¤. ê³µê°œ ì „ì—ëŠ” íˆ¬ìžìž ì–‘ì‹ì„ í†µí•´ ì§ì ‘ ì ‘ê·¼ì„ ìš”ì²­í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.",
        cards: [
          ["01", "ë…¼ë¦¬", "ê¸€ë¡œë²Œ ê¸°ì—…ì„ ìœ„í•œ ë¬¸ì œ, ì‹œìž¥ ê¸°íšŒ, ì‘ìš© ê¸°ìˆ  ë…¼ë¦¬."],
          ["02", "í¬íŠ¸í´ë¦¬ì˜¤", "ì œí’ˆ, ë¶€ë¬¸, ìž ìž¬ IP, ë°˜ë³µ ê°€ëŠ¥í•œ í”Œëž«í¼ìœ¼ë¡œ ê°€ëŠ” ê²½ë¡œ."],
          ["03", "ì‹¤í–‰", "ì´ˆê¸° íŒ€, ë¡œë“œë§µ, ìžë³¸ ìš°ì„ ìˆœìœ„, ë‹¤ìŒ ê²€ì¦ ë§ˆì¼ìŠ¤í†¤."]
        ]
      }
    }
  }
});

languages.es.pages["aviso-legal.html"] = {
  title: "Aviso legal y privacidad | Tecnotitan",
  description:
    "Aviso legal y privacidad de Tecnotitan: informaciÃ³n corporativa, formularios, geolocalizaciÃ³n por paÃ­s, propiedad intelectual y contacto oficial.",
  content: {
    label: "Aviso legal",
    titleLines: ["Aviso legal", "y privacidad"],
    intro:
      "InformaciÃ³n institucional sobre el uso del sitio web, formularios, datos tÃ©cnicos, propiedad intelectual y canales oficiales de contacto.",
    cards: [
      ["01", "InformaciÃ³n del sitio", "Este sitio presenta informaciÃ³n corporativa de Tecnotitan, sus productos, servicios, divisiones y comunicaciones para inversionistas."],
      ["02", "GeolocalizaciÃ³n por paÃ­s", "Usamos datos tÃ©cnicos aproximados del paÃ­s entregados por Vercel para seleccionar automÃ¡ticamente el idioma inicial. No mostramos ni vendemos la IP del visitante."],
      ["03", "Formularios", "Los datos enviados por formularios se usan para responder solicitudes, mensajes generales, quejas, reclamos, sugerencias o conversaciones con inversionistas."],
      ["04", "Propiedad intelectual", "Marcas, textos, imÃ¡genes, diseÃ±os, productos, conceptos y materiales del sitio pertenecen a Tecnotitan o se usan con autorizaciÃ³n."],
      ["05", "InformaciÃ³n para inversionistas", "El contenido para inversionistas es informativo y no constituye oferta pÃºblica de valores, recomendaciÃ³n financiera ni promesa de rendimiento."],
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
    "Aviso legal e privacidade da Tecnotitan: informaÃ§Ãµes corporativas, formulÃ¡rios, geolocalizaÃ§Ã£o por paÃ­s, propriedade intelectual e contato oficial.",
  content: {
    label: "Aviso legal",
    titleLines: ["Aviso legal", "e privacidade"],
    intro:
      "InformaÃ§Ãµes institucionais sobre uso do site, formulÃ¡rios, dados tÃ©cnicos, propriedade intelectual e canais oficiais de contato.",
    cards: [
      ["01", "InformaÃ§Ãµes do site", "Este site apresenta informaÃ§Ãµes corporativas da Tecnotitan, seus produtos, serviÃ§os, divisÃµes e comunicaÃ§Ãµes para investidores."],
      ["02", "GeolocalizaÃ§Ã£o por paÃ­s", "Usamos dados tÃ©cnicos aproximados do paÃ­s fornecidos pela Vercel para selecionar automaticamente o idioma inicial. NÃ£o exibimos nem vendemos o IP do visitante."],
      ["03", "FormulÃ¡rios", "Os dados enviados por formulÃ¡rios sÃ£o usados para responder solicitaÃ§Ãµes, mensagens gerais, queixas, reclamaÃ§Ãµes, sugestÃµes ou conversas com investidores."],
      ["04", "Propriedade intelectual", "Marcas, textos, imagens, designs, produtos, conceitos e materiais do site pertencem Ã  Tecnotitan ou sÃ£o usados com autorizaÃ§Ã£o."],
      ["05", "InformaÃ§Ãµes para investidores", "O conteÃºdo para investidores Ã© informativo e nÃ£o constitui oferta pÃºblica de valores, recomendaÃ§Ã£o financeira nem promessa de retorno."],
      ["06", "Contato oficial", "Para solicitaÃ§Ãµes legais, privacidade, correÃ§Ãµes ou contato institucional, escreva para info@tecnotitan.com."]
    ]
  }
};

languages.zh.pages["aviso-legal.html"] = {
  title: "æ³•å¾‹å£°æ˜Žä¸Žéšç§ | Tecnotitan",
  description: "Tecnotitan æ³•å¾‹å£°æ˜Žä¸Žéšç§ä¿¡æ¯ï¼šå…¬å¸ä¿¡æ¯ã€è¡¨å•ã€æŒ‰å›½å®¶è¯†åˆ«è¯­è¨€ã€çŸ¥è¯†äº§æƒå’Œå®˜æ–¹è”ç³»æ¸ é“ã€‚",
  content: {
    label: "æ³•å¾‹å£°æ˜Ž",
    titleLines: ["æ³•å¾‹å£°æ˜Ž", "ä¸Žéšç§"],
    intro: "å…³äºŽç½‘ç«™ä½¿ç”¨ã€è¡¨å•ã€æŠ€æœ¯æ•°æ®ã€çŸ¥è¯†äº§æƒå’Œå®˜æ–¹è”ç³»æ¸ é“çš„æœºæž„ä¿¡æ¯ã€‚",
    cards: [
      ["01", "ç½‘ç«™ä¿¡æ¯", "æœ¬ç½‘ç«™å±•ç¤º Tecnotitan çš„å…¬å¸ä¿¡æ¯ã€äº§å“ã€æœåŠ¡ã€äº‹ä¸šéƒ¨å’ŒæŠ•èµ„è€…æ²Ÿé€šå†…å®¹ã€‚"],
      ["02", "æŒ‰å›½å®¶è¯†åˆ«è¯­è¨€", "æˆ‘ä»¬ä½¿ç”¨ Vercel æä¾›çš„è¿‘ä¼¼å›½å®¶æ•°æ®æ¥è‡ªåŠ¨é€‰æ‹©åˆå§‹è¯­è¨€ã€‚æˆ‘ä»¬ä¸å±•ç¤ºæˆ–å‡ºå”®è®¿é—®è€… IPã€‚"],
      ["03", "è¡¨å•", "é€šè¿‡è¡¨å•æäº¤çš„æ•°æ®ç”¨äºŽå›žå¤è¯·æ±‚ã€ä¸€èˆ¬æ¶ˆæ¯ã€æŠ•è¯‰ã€ç”³è¯‰ã€å»ºè®®æˆ–æŠ•èµ„è€…å¯¹è¯ã€‚"],
      ["04", "çŸ¥è¯†äº§æƒ", "æœ¬ç½‘ç«™çš„å•†æ ‡ã€æ–‡æœ¬ã€å›¾ç‰‡ã€è®¾è®¡ã€äº§å“ã€æ¦‚å¿µå’Œææ–™å±žäºŽ Tecnotitan æˆ–ç»æŽˆæƒä½¿ç”¨ã€‚"],
      ["05", "æŠ•èµ„è€…ä¿¡æ¯", "æŠ•èµ„è€…å†…å®¹ä»…ä¾›å‚è€ƒï¼Œä¸æž„æˆå…¬å¼€è¯åˆ¸å‘è¡Œã€è´¢åŠ¡å»ºè®®æˆ–æ”¶ç›Šæ‰¿è¯ºã€‚"],
      ["06", "å®˜æ–¹è”ç³»", "å¦‚æœ‰æ³•å¾‹ã€éšç§ã€æ›´æ­£æˆ–æœºæž„è”ç³»è¯·æ±‚ï¼Œè¯·å†™ä¿¡è‡³ info@tecnotitan.comã€‚"]
    ]
  }
};

languages.ja.pages["aviso-legal.html"] = {
  title: "æ³•çš„é€šçŸ¥ã¨ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ | Tecnotitan",
  description: "Tecnotitan ã®æ³•çš„é€šçŸ¥ã¨ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼æƒ…å ±ï¼šä¼šç¤¾æƒ…å ±ã€ãƒ•ã‚©ãƒ¼ãƒ ã€å›½åˆ¥ã®è¨€èªžé¸æŠžã€çŸ¥çš„è²¡ç”£ã€å…¬å¼é€£çµ¡å…ˆã€‚",
  content: {
    label: "æ³•çš„é€šçŸ¥",
    titleLines: ["æ³•çš„é€šçŸ¥", "ã¨ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼"],
    intro: "ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã®åˆ©ç”¨ã€ãƒ•ã‚©ãƒ¼ãƒ ã€æŠ€è¡“ãƒ‡ãƒ¼ã‚¿ã€çŸ¥çš„è²¡ç”£ã€å…¬å¼é€£çµ¡å…ˆã«é–¢ã™ã‚‹æ©Ÿé–¢æƒ…å ±ã§ã™ã€‚",
    cards: [
      ["01", "ã‚µã‚¤ãƒˆæƒ…å ±", "ã“ã®ã‚µã‚¤ãƒˆã¯ Tecnotitan ã®ä¼šç¤¾æƒ…å ±ã€è£½å“ã€ã‚µãƒ¼ãƒ“ã‚¹ã€éƒ¨é–€ã€æŠ•è³‡å®¶å‘ã‘ã‚³ãƒŸãƒ¥ãƒ‹ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã‚’æŽ²è¼‰ã—ã¦ã„ã¾ã™ã€‚"],
      ["02", "å›½åˆ¥ã®è¨€èªžé¸æŠž", "Vercel ãŒæä¾›ã™ã‚‹ãŠãŠã‚ˆãã®å›½ãƒ‡ãƒ¼ã‚¿ã‚’ä½¿ç”¨ã—ã¦åˆæœŸè¨€èªžã‚’è‡ªå‹•é¸æŠžã—ã¾ã™ã€‚è¨ªå•è€…ã® IP ã‚’è¡¨ç¤ºã¾ãŸã¯è²©å£²ã—ã¾ã›ã‚“ã€‚"],
      ["03", "ãƒ•ã‚©ãƒ¼ãƒ ", "ãƒ•ã‚©ãƒ¼ãƒ ã§é€ä¿¡ã•ã‚ŒãŸãƒ‡ãƒ¼ã‚¿ã¯ã€ä¾é ¼ã€ä¸€èˆ¬ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸ã€è‹¦æƒ…ã€ç”³ã—ç«‹ã¦ã€ææ¡ˆã€æŠ•è³‡å®¶ã¨ã®ä¼šè©±ã¸ã®è¿”ä¿¡ã«ä½¿ç”¨ã•ã‚Œã¾ã™ã€‚"],
      ["04", "çŸ¥çš„è²¡ç”£", "ã‚µã‚¤ãƒˆä¸Šã®å•†æ¨™ã€æ–‡ç« ã€ç”»åƒã€ãƒ‡ã‚¶ã‚¤ãƒ³ã€è£½å“ã€æ¦‚å¿µã€è³‡æ–™ã¯ Tecnotitan ã«å±žã™ã‚‹ã‹ã€è¨±å¯ã‚’å¾—ã¦ä½¿ç”¨ã•ã‚Œã¦ã„ã¾ã™ã€‚"],
      ["05", "æŠ•è³‡å®¶å‘ã‘æƒ…å ±", "æŠ•è³‡å®¶å‘ã‘ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã¯æƒ…å ±æä¾›ã‚’ç›®çš„ã¨ã—ã¦ãŠã‚Šã€æœ‰ä¾¡è¨¼åˆ¸ã®å…¬å‹Ÿã€é‡‘èžåŠ©è¨€ã€åŽç›Šã®ç´„æŸã§ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚"],
      ["06", "å…¬å¼é€£çµ¡å…ˆ", "æ³•å‹™ã€ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ã€è¨‚æ­£ã€æ©Ÿé–¢é€£çµ¡ã«ã¤ã„ã¦ã¯ info@tecnotitan.com ã¸ã”é€£çµ¡ãã ã•ã„ã€‚"]
    ]
  }
};

languages.ko.pages["aviso-legal.html"] = {
  title: "ë²•ì  ê³ ì§€ ë° ê°œì¸ì •ë³´ | Tecnotitan",
  description: "Tecnotitan ë²•ì  ê³ ì§€ ë° ê°œì¸ì •ë³´: íšŒì‚¬ ì •ë³´, ì–‘ì‹, êµ­ê°€ ê¸°ë°˜ ì–¸ì–´ ì„ íƒ, ì§€ì‹ìž¬ì‚°, ê³µì‹ ì—°ë½ì²˜.",
  content: {
    label: "ë²•ì  ê³ ì§€",
    titleLines: ["ë²•ì  ê³ ì§€", "ë° ê°œì¸ì •ë³´"],
    intro: "ì›¹ì‚¬ì´íŠ¸ ì´ìš©, ì–‘ì‹, ê¸°ìˆ  ë°ì´í„°, ì§€ì‹ìž¬ì‚°, ê³µì‹ ì—°ë½ ì±„ë„ì— ëŒ€í•œ ê¸°ê´€ ì •ë³´ìž…ë‹ˆë‹¤.",
    cards: [
      ["01", "ì‚¬ì´íŠ¸ ì •ë³´", "ì´ ì‚¬ì´íŠ¸ëŠ” Tecnotitanì˜ íšŒì‚¬ ì •ë³´, ì œí’ˆ, ì„œë¹„ìŠ¤, ë¶€ë¬¸, íˆ¬ìžìž ì»¤ë®¤ë‹ˆì¼€ì´ì…˜ì„ ì œê³µí•©ë‹ˆë‹¤."],
      ["02", "êµ­ê°€ ê¸°ë°˜ ì–¸ì–´ ì„ íƒ", "Vercelì´ ì œê³µí•˜ëŠ” ëŒ€ëžµì ì¸ êµ­ê°€ ë°ì´í„°ë¥¼ ì‚¬ìš©í•´ ì´ˆê¸° ì–¸ì–´ë¥¼ ìžë™ ì„ íƒí•©ë‹ˆë‹¤. ë°©ë¬¸ìž IPë¥¼ í‘œì‹œí•˜ê±°ë‚˜ íŒë§¤í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤."],
      ["03", "ì–‘ì‹", "ì–‘ì‹ìœ¼ë¡œ ì œì¶œëœ ë°ì´í„°ëŠ” ìš”ì²­, ì¼ë°˜ ë©”ì‹œì§€, ë¶ˆë§Œ, í´ë ˆìž„, ì œì•ˆ ë˜ëŠ” íˆ¬ìžìž ëŒ€í™”ì— ì‘ë‹µí•˜ê¸° ìœ„í•´ ì‚¬ìš©ë©ë‹ˆë‹¤."],
      ["04", "ì§€ì‹ìž¬ì‚°", "ì‚¬ì´íŠ¸ì˜ ìƒí‘œ, í…ìŠ¤íŠ¸, ì´ë¯¸ì§€, ë””ìžì¸, ì œí’ˆ, ê°œë…, ìžë£ŒëŠ” Tecnotitanì— ì†í•˜ê±°ë‚˜ í—ˆê°€ë¥¼ ë°›ì•„ ì‚¬ìš©ë©ë‹ˆë‹¤."],
      ["05", "íˆ¬ìžìž ì •ë³´", "íˆ¬ìžìž ì½˜í…ì¸ ëŠ” ì •ë³´ ì œê³µ ëª©ì ì´ë©°, ê³µëª¨, ê¸ˆìœµ ì¡°ì–¸ ë˜ëŠ” ìˆ˜ìµ ì•½ì†ì„ êµ¬ì„±í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤."],
      ["06", "ê³µì‹ ì—°ë½ì²˜", "ë²•ë¬´, ê°œì¸ì •ë³´, ìˆ˜ì • ìš”ì²­ ë˜ëŠ” ê¸°ê´€ ì—°ë½ì€ info@tecnotitan.comìœ¼ë¡œ ë³´ë‚´ì£¼ì„¸ìš”."]
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
  Object.entries(englishCleanPageRoutes).map(([slug, file]) => [file, `/en/${slug}/`])
);
const pathSegmentLanguages = Object.fromEntries(Object.entries(languagePathSegments).map(([language, segment]) => [segment, language]));
const cleanPathSegments = window.location.pathname.split("/").filter(Boolean);
const pathLanguage = pathSegmentLanguages[cleanPathSegments[0]] || "";
const englishCleanRouteSlug = pathLanguage === "en" ? cleanPathSegments[1] || "" : !pathLanguage ? cleanPathSegments[0] || "" : "";
const isEnglishCleanGuideHubRoute =
  (!pathLanguage && cleanPathSegments.length === 1 && cleanPathSegments[0] === "guides") ||
  (pathLanguage === "en" && cleanPathSegments.length === 2 && cleanPathSegments[1] === "guides");
const isEnglishCleanGuideArticleRoute =
  (!pathLanguage && cleanPathSegments.length === 2 && cleanPathSegments[0] === "guides") ||
  (pathLanguage === "en" && cleanPathSegments.length === 3 && cleanPathSegments[1] === "guides");
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
  es: "EspaÃ±ol",
  en: "English",
  pt: "PortuguÃªs",
  zh: "ä¸­æ–‡",
  ja: "æ—¥æœ¬èªž",
  ko: "í•œêµ­ì–´"
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
    text: "Lee el PDF ligero del deck para inversionistas de Tecnotitan, cambia de idioma sin salir de la pÃ¡gina y descarga el archivo si lo necesitas.",
    privacy: "Medimos aperturas y descargas de forma agregada para entender el interÃ©s por idioma. No guardamos nombre, email, IP ni huellas digitales.",
    actions: ["Abrir PDF en navegador", "Descargar PDF", "Descargar PPTX editable"],
    cards: [
      ["ES", "EspaÃ±ol", "Deck para inversionistas en espaÃ±ol."],
      ["EN", "English", "Investor deck in English."],
      ["PT", "PortuguÃªs", "Deck para investidores em portuguÃªs."],
      ["ZH", "ä¸­æ–‡", "ä¸­æ–‡æŠ•èµ„è€…æ¼”ç¤ºæ–‡ç¨¿ã€‚"],
      ["JA", "æ—¥æœ¬èªž", "æ—¥æœ¬èªžã®æŠ•è³‡å®¶å‘ã‘ãƒ‡ãƒƒã‚­ã€‚"],
      ["KO", "í•œêµ­ì–´", "í•œêµ­ì–´ íˆ¬ìžìžìš© ë°í¬."]
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
    text: "Leia o PDF leve do deck para investidores da Tecnotitan, alterne idiomas sem sair da pÃ¡gina e baixe o arquivo se precisar.",
    privacy: "Medimos aberturas e downloads de forma agregada para entender o interesse por idioma. NÃ£o guardamos nome, email, IP nem fingerprints.",
    actions: ["Abrir PDF no navegador", "Baixar PDF", "Baixar PPTX editÃ¡vel"],
    cards: [
      ["ES", "Espanhol", "Deck para investidores em espanhol."],
      ["EN", "InglÃªs", "Deck para investidores em inglÃªs."],
      ["PT", "PortuguÃªs", "Deck para investidores em portuguÃªs."],
      ["ZH", "ChinÃªs", "Deck para investidores em chinÃªs."],
      ["JA", "JaponÃªs", "Deck para investidores em japonÃªs."],
      ["KO", "Coreano", "Deck para investidores em coreano."]
    ]
  },
  zh: {
    title: "åœ¨æµè§ˆå™¨ä¸­æŸ¥çœ‹ Investor Deck",
    text: "é˜…è¯» Tecnotitan çš„è½»é‡çº§æŠ•èµ„è€… PDFï¼Œåœ¨é¡µé¢å†…åˆ‡æ¢è¯­è¨€ï¼Œå¹¶å¯æŒ‰éœ€ä¸‹è½½æ–‡ä»¶ã€‚",
    privacy: "æˆ‘ä»¬ä»¥æ±‡æ€»æ–¹å¼ç»Ÿè®¡æ‰“å¼€å’Œä¸‹è½½ï¼Œä»¥äº†è§£ä¸åŒè¯­è¨€çš„å…´è¶£ã€‚ä¸ä¿å­˜å§“åã€é‚®ç®±ã€IP æˆ–æŒ‡çº¹ã€‚",
    actions: ["åœ¨æµè§ˆå™¨ä¸­æ‰“å¼€ PDF", "ä¸‹è½½ PDF", "ä¸‹è½½å¯ç¼–è¾‘ PPTX"],
    cards: [
      ["ES", "è¥¿ç­ç‰™è¯­", "è¥¿ç­ç‰™è¯­æŠ•èµ„è€…æ¼”ç¤ºæ–‡ç¨¿ã€‚"],
      ["EN", "è‹±è¯­", "è‹±è¯­æŠ•èµ„è€…æ¼”ç¤ºæ–‡ç¨¿ã€‚"],
      ["PT", "è‘¡è„ç‰™è¯­", "è‘¡è„ç‰™è¯­æŠ•èµ„è€…æ¼”ç¤ºæ–‡ç¨¿ã€‚"],
      ["ZH", "ä¸­æ–‡", "ä¸­æ–‡æŠ•èµ„è€…æ¼”ç¤ºæ–‡ç¨¿ã€‚"],
      ["JA", "æ—¥è¯­", "æ—¥è¯­æŠ•èµ„è€…æ¼”ç¤ºæ–‡ç¨¿ã€‚"],
      ["KO", "éŸ©è¯­", "éŸ©è¯­æŠ•èµ„è€…æ¼”ç¤ºæ–‡ç¨¿ã€‚"]
    ]
  },
  ja: {
    title: "ãƒ–ãƒ©ã‚¦ã‚¶ã§Investor Deckã‚’è¡¨ç¤º",
    text: "Tecnotitanã®è»½é‡PDFãƒ‡ãƒƒã‚­ã‚’èª­ã¿ã€ãƒšãƒ¼ã‚¸ã‚’é›¢ã‚Œãšã«è¨€èªžã‚’åˆ‡ã‚Šæ›¿ãˆã€å¿…è¦ã«å¿œã˜ã¦ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ã§ãã¾ã™ã€‚",
    privacy: "è¨€èªžåˆ¥ã®é–¢å¿ƒã‚’æŠŠæ¡ã™ã‚‹ãŸã‚ã€è¡¨ç¤ºã¨ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ã‚’é›†è¨ˆå½¢å¼ã§æ¸¬å®šã—ã¾ã™ã€‚åå‰ã€ãƒ¡ãƒ¼ãƒ«ã€IPã€ãƒ•ã‚£ãƒ³ã‚¬ãƒ¼ãƒ—ãƒªãƒ³ãƒˆã¯ä¿å­˜ã—ã¾ã›ã‚“ã€‚",
    actions: ["ãƒ–ãƒ©ã‚¦ã‚¶ã§PDFã‚’é–‹ã", "PDFã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "ç·¨é›†å¯èƒ½ãªPPTXã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"],
    cards: [
      ["ES", "ã‚¹ãƒšã‚¤ãƒ³èªž", "ã‚¹ãƒšã‚¤ãƒ³èªžã®æŠ•è³‡å®¶å‘ã‘ãƒ‡ãƒƒã‚­ã€‚"],
      ["EN", "è‹±èªž", "è‹±èªžã®æŠ•è³‡å®¶å‘ã‘ãƒ‡ãƒƒã‚­ã€‚"],
      ["PT", "ãƒãƒ«ãƒˆã‚¬ãƒ«èªž", "ãƒãƒ«ãƒˆã‚¬ãƒ«èªžã®æŠ•è³‡å®¶å‘ã‘ãƒ‡ãƒƒã‚­ã€‚"],
      ["ZH", "ä¸­å›½èªž", "ä¸­å›½èªžã®æŠ•è³‡å®¶å‘ã‘ãƒ‡ãƒƒã‚­ã€‚"],
      ["JA", "æ—¥æœ¬èªž", "æ—¥æœ¬èªžã®æŠ•è³‡å®¶å‘ã‘ãƒ‡ãƒƒã‚­ã€‚"],
      ["KO", "éŸ“å›½èªž", "éŸ“å›½èªžã®æŠ•è³‡å®¶å‘ã‘ãƒ‡ãƒƒã‚­ã€‚"]
    ]
  },
  ko: {
    title: "ë¸Œë¼ìš°ì €ì—ì„œ Investor Deck ë³´ê¸°",
    text: "Tecnotitanì˜ ê°€ë²¼ìš´ íˆ¬ìžìžìš© PDFë¥¼ ì½ê³ , íŽ˜ì´ì§€ ì•ˆì—ì„œ ì–¸ì–´ë¥¼ ë°”ê¾¸ë©° í•„ìš”í•  ë•Œ íŒŒì¼ì„ ë‹¤ìš´ë¡œë“œí•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.",
    privacy: "ì–¸ì–´ë³„ ê´€ì‹¬ì„ ì´í•´í•˜ê¸° ìœ„í•´ ì—´ëžŒê³¼ ë‹¤ìš´ë¡œë“œë¥¼ ì§‘ê³„ í˜•íƒœë¡œ ì¸¡ì •í•©ë‹ˆë‹¤. ì´ë¦„, ì´ë©”ì¼, IP, ì§€ë¬¸ ì •ë³´ëŠ” ì €ìž¥í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤.",
    actions: ["ë¸Œë¼ìš°ì €ì—ì„œ PDF ì—´ê¸°", "PDF ë‹¤ìš´ë¡œë“œ", "íŽ¸ì§‘ ê°€ëŠ¥í•œ PPTX ë‹¤ìš´ë¡œë“œ"],
    cards: [
      ["ES", "ìŠ¤íŽ˜ì¸ì–´", "ìŠ¤íŽ˜ì¸ì–´ íˆ¬ìžìžìš© ë°í¬."],
      ["EN", "ì˜ì–´", "ì˜ì–´ íˆ¬ìžìžìš© ë°í¬."],
      ["PT", "í¬ë¥´íˆ¬ê°ˆì–´", "í¬ë¥´íˆ¬ê°ˆì–´ íˆ¬ìžìžìš© ë°í¬."],
      ["ZH", "ì¤‘êµ­ì–´", "ì¤‘êµ­ì–´ íˆ¬ìžìžìš© ë°í¬."],
      ["JA", "ì¼ë³¸ì–´", "ì¼ë³¸ì–´ íˆ¬ìžìžìš© ë°í¬."],
      ["KO", "í•œêµ­ì–´", "í•œêµ­ì–´ íˆ¬ìžìžìš© ë°í¬."]
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
      title: "TecnologÃ­a que conecta decisiones, procesos y productos.",
      text: "Una vista viva de Tecnotitan como sistema de tecnologÃ­a aplicada: software, IA, robÃ³tica, videojuegos y consultorÃ­a trabajando desde la misma inteligencia operativa.",
      signals: ["Flujos IA", "Software empresarial", "IP reutilizable"],
      nodes: [["AI", "Agents"], ["OS", "Software"], ["RB", "Robotics"], ["GX", "Games"]],
      metrics: [["Velocidad", "+42%"], ["SeÃ±al", "LIVE"]]
    },
    architecture: {
      kicker: "Arquitectura escalable",
      title: "Del aprendizaje en servicios a inteligencia de producto.",
      text: "Cada proyecto puede convertirse en un patrÃ³n reutilizable: flujos, componentes, agentes, tableros y conocimiento operativo que se acumula entre divisiones de Tecnotitan.",
      modules: [["01", "Datos", "Fuentes claras"], ["02", "Agentes", "Tareas guiadas"], ["03", "Productos", "IP reutilizable"], ["04", "Mercados", "Alcance global"]],
      buttons: ["Explorar productos", "Ver divisiones"]
    },
    posters: [
      ["Inteligencia operacional", "La empresa como un sistema vivo, medible y automatizado.", "Tecnotitan conecta datos, software, IA y robÃ³tica para que cada proceso crÃ­tico pueda observarse, mejorarse y escalarse con precisiÃ³n."],
      ["Productos globales", "Un portafolio que puede viajar de Colombia al mundo.", "Copilotos, plataformas empresariales, simulaciÃ³n, motores de videojuegos e IA conversacional nacen de una misma arquitectura tecnolÃ³gica."]
    ],
    final: {
      kicker: "Siguiente movimiento",
      title: "Construyamos la ventaja operativa antes de que el mercado acelere.",
      text: "Habla con Tecnotitan sobre inversiÃ³n, software empresarial, consultorÃ­a IA o alianzas estratÃ©gicas de tecnologÃ­a.",
      buttons: ["Agendar conversaciÃ³n", "Ver investor deck", "Solicitar diagnÃ³stico IA"]
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
      title: "Tecnologia que conecta decisÃµes, processos e produtos.",
      text: "Uma visÃ£o viva da Tecnotitan como sistema de tecnologia aplicada: software, IA, robÃ³tica, videogames e consultoria trabalhando a partir da mesma inteligÃªncia operacional.",
      signals: ["Fluxos IA", "Software empresarial", "IP reutilizÃ¡vel"],
      nodes: [["AI", "Agentes"], ["OS", "Software"], ["RB", "RobÃ³tica"], ["GX", "Games"]],
      metrics: [["Velocidade", "+42%"], ["Sinal", "LIVE"]]
    },
    architecture: {
      kicker: "Arquitetura escalÃ¡vel",
      title: "Do aprendizado em serviÃ§os Ã  inteligÃªncia de produto.",
      text: "Cada projeto pode se tornar um padrÃ£o reutilizÃ¡vel: fluxos, componentes, agentes, dashboards e conhecimento operacional que se acumulam entre divisÃµes da Tecnotitan.",
      modules: [["01", "Dados", "Fontes claras"], ["02", "Agentes", "Tarefas guiadas"], ["03", "Produtos", "IP reutilizÃ¡vel"], ["04", "Mercados", "Alcance global"]],
      buttons: ["Explorar produtos", "Ver divisÃµes"]
    },
    posters: [
      ["InteligÃªncia operacional", "A empresa como um sistema vivo, mensurÃ¡vel e automatizado.", "A Tecnotitan conecta dados, software, IA e robÃ³tica para que cada processo crÃ­tico possa ser observado, melhorado e escalado com precisÃ£o."],
      ["Produtos globais", "Um portfÃ³lio que pode viajar da ColÃ´mbia para o mundo.", "Copilotos, plataformas empresariais, simulaÃ§Ã£o, engines de jogos e IA conversacional nascem de uma mesma arquitetura tecnolÃ³gica."]
    ],
    final: {
      kicker: "PrÃ³ximo movimento",
      title: "Vamos construir vantagem operacional antes que o mercado acelere.",
      text: "Fale com a Tecnotitan sobre investimento, software empresarial, consultoria IA ou alianÃ§as estratÃ©gicas de tecnologia.",
      buttons: ["Agendar conversa", "Ver investor deck", "Solicitar diagnÃ³stico IA"]
    }
  },
  zh: {
    ops: {
      kicker: "è¿è¥å±‚",
      title: "è¿žæŽ¥å†³ç­–ã€æµç¨‹ä¸Žäº§å“çš„æŠ€æœ¯ç³»ç»Ÿã€‚",
      text: "Tecnotitan æ˜¯ä¸€ä¸ªåº”ç”¨æŠ€æœ¯ç³»ç»Ÿï¼šè½¯ä»¶ã€äººå·¥æ™ºèƒ½ã€æœºå™¨äººã€æ¸¸æˆå’Œå’¨è¯¢å…±äº«åŒä¸€å¥—è¿è¥æ™ºèƒ½ã€‚",
      signals: ["AI å·¥ä½œæµ", "ä¼ä¸šè½¯ä»¶", "å¯å¤ç”¨ IP"],
      nodes: [["AI", "æ™ºèƒ½ä»£ç†"], ["OS", "è½¯ä»¶"], ["RB", "æœºå™¨äºº"], ["GX", "æ¸¸æˆ"]],
      metrics: [["é€Ÿåº¦", "+42%"], ["ä¿¡å·", "LIVE"]]
    },
    architecture: {
      kicker: "å¯æ‰©å±•æž¶æž„",
      title: "ä»ŽæœåŠ¡ç»éªŒèµ°å‘äº§å“æ™ºèƒ½ã€‚",
      text: "æ¯ä¸ªé¡¹ç›®éƒ½å¯ä»¥æ²‰æ·€ä¸ºå¯å¤ç”¨æ¨¡å¼ï¼šæµç¨‹ã€ç»„ä»¶ã€æ™ºèƒ½ä»£ç†ã€ä»ªè¡¨ç›˜å’Œè·¨ä¸šåŠ¡éƒ¨é—¨å¤åˆ©å¢žé•¿çš„è¿è¥çŸ¥è¯†ã€‚",
      modules: [["01", "æ•°æ®", "æ¸…æ™°æ¥æº"], ["02", "ä»£ç†", "å¼•å¯¼ä»»åŠ¡"], ["03", "äº§å“", "å¯å¤ç”¨ IP"], ["04", "å¸‚åœº", "å…¨çƒè§¦è¾¾"]],
      buttons: ["æŽ¢ç´¢äº§å“", "æŸ¥çœ‹éƒ¨é—¨"]
    },
    posters: [
      ["è¿è¥æ™ºèƒ½", "æŠŠä¼ä¸šå˜æˆå¯è¡¡é‡ã€å¯è‡ªåŠ¨åŒ–çš„ç”Ÿå‘½ç³»ç»Ÿã€‚", "Tecnotitan è¿žæŽ¥æ•°æ®ã€è½¯ä»¶ã€AI ä¸Žæœºå™¨äººï¼Œè®©å…³é”®æµç¨‹å¯ä»¥è¢«è§‚å¯Ÿã€ä¼˜åŒ–å¹¶ç²¾ç¡®æ‰©å±•ã€‚"],
      ["å…¨çƒäº§å“", "ä»Žå“¥ä¼¦æ¯”äºšèµ°å‘ä¸–ç•Œçš„äº§å“ç»„åˆã€‚", "æ™ºèƒ½åŠ©æ‰‹ã€ä¼ä¸šå¹³å°ã€ä»¿çœŸã€æ¸¸æˆå¼•æ“Žå’Œå¯¹è¯å¼ AI éƒ½æ¥è‡ªåŒä¸€å¥—æŠ€æœ¯æž¶æž„ã€‚"]
    ],
    final: {
      kicker: "ä¸‹ä¸€æ­¥",
      title: "åœ¨å¸‚åœºåŠ é€Ÿä¹‹å‰ï¼Œå»ºç«‹è¿è¥ä¼˜åŠ¿ã€‚",
      text: "ä¸Ž Tecnotitan è®¨è®ºæŠ•èµ„ã€ä¼ä¸šè½¯ä»¶ã€AI å’¨è¯¢æˆ–æˆ˜ç•¥æŠ€æœ¯åˆä½œã€‚",
      buttons: ["é¢„çº¦æ²Ÿé€š", "æŸ¥çœ‹æŠ•èµ„äºº Deck", "ç”³è¯· AI è¯Šæ–­"]
    }
  },
  ja: {
    ops: {
      kicker: "ã‚ªãƒšãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³å±¤",
      title: "æ„æ€æ±ºå®šã€ãƒ—ãƒ­ã‚»ã‚¹ã€è£½å“ã‚’ã¤ãªããƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã€‚",
      text: "Tecnotitan ã¯ã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€ã‚²ãƒ¼ãƒ ã€ã‚¢ãƒ‰ãƒã‚¤ã‚¶ãƒªãƒ¼ã‚’åŒã˜é‹ç”¨ã‚¤ãƒ³ãƒ†ãƒªã‚¸ã‚§ãƒ³ã‚¹ã§çµã¶å¿œç”¨æŠ€è¡“ã‚·ã‚¹ãƒ†ãƒ ã§ã™ã€‚",
      signals: ["AI ãƒ¯ãƒ¼ã‚¯ãƒ•ãƒ­ãƒ¼", "ä¼æ¥­ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢", "å†åˆ©ç”¨å¯èƒ½ IP"],
      nodes: [["AI", "Agents"], ["OS", "Software"], ["RB", "Robotics"], ["GX", "Games"]],
      metrics: [["é€Ÿåº¦", "+42%"], ["ã‚·ã‚°ãƒŠãƒ«", "LIVE"]]
    },
    architecture: {
      kicker: "æ‹¡å¼µå¯èƒ½ãªã‚¢ãƒ¼ã‚­ãƒ†ã‚¯ãƒãƒ£",
      title: "ã‚µãƒ¼ãƒ“ã‚¹ã§ã®å­¦ç¿’ã‚’ãƒ—ãƒ­ãƒ€ã‚¯ãƒˆçŸ¥èƒ½ã¸ã€‚",
      text: "å„ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã¯ã€ãƒ¯ãƒ¼ã‚¯ãƒ•ãƒ­ãƒ¼ã€ã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆã€ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€é‹ç”¨çŸ¥è­˜ã¨ã—ã¦å†åˆ©ç”¨ã§ãã‚‹ãƒ‘ã‚¿ãƒ¼ãƒ³ã«ãªã‚Šã¾ã™ã€‚",
      modules: [["01", "ãƒ‡ãƒ¼ã‚¿", "æ˜Žç¢ºãªã‚½ãƒ¼ã‚¹"], ["02", "ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆ", "èª˜å°Žã•ã‚ŒãŸã‚¿ã‚¹ã‚¯"], ["03", "è£½å“", "å†åˆ©ç”¨ IP"], ["04", "å¸‚å ´", "ã‚°ãƒ­ãƒ¼ãƒãƒ«å±•é–‹"]],
      buttons: ["è£½å“ã‚’è¦‹ã‚‹", "éƒ¨é–€ã‚’è¦‹ã‚‹"]
    },
    posters: [
      ["é‹ç”¨ã‚¤ãƒ³ãƒ†ãƒªã‚¸ã‚§ãƒ³ã‚¹", "ä¼æ¥­ã‚’æ¸¬å®šå¯èƒ½ã§è‡ªå‹•åŒ–ã•ã‚ŒãŸç”ŸããŸã‚·ã‚¹ãƒ†ãƒ ã¸ã€‚", "Tecnotitan ã¯ãƒ‡ãƒ¼ã‚¿ã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã‚’ã¤ãªãŽã€é‡è¦ãªãƒ—ãƒ­ã‚»ã‚¹ã‚’è¦³æ¸¬ã€æ”¹å–„ã€æ‹¡å¼µã§ãã‚‹ã‚ˆã†ã«ã—ã¾ã™ã€‚"],
      ["ã‚°ãƒ­ãƒ¼ãƒãƒ«è£½å“", "ã‚³ãƒ­ãƒ³ãƒ“ã‚¢ã‹ã‚‰ä¸–ç•Œã¸å±•é–‹ã§ãã‚‹ãƒãƒ¼ãƒˆãƒ•ã‚©ãƒªã‚ªã€‚", "ã‚³ãƒ‘ã‚¤ãƒ­ãƒƒãƒˆã€ä¼æ¥­ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³ã€ã‚²ãƒ¼ãƒ ã‚¨ãƒ³ã‚¸ãƒ³ã€ä¼šè©±åž‹ AI ã¯åŒã˜æŠ€è¡“ã‚¢ãƒ¼ã‚­ãƒ†ã‚¯ãƒãƒ£ã‹ã‚‰ç”Ÿã¾ã‚Œã¾ã™ã€‚"]
    ],
    final: {
      kicker: "æ¬¡ã®ä¸€æ‰‹",
      title: "å¸‚å ´ãŒåŠ é€Ÿã™ã‚‹å‰ã«ã€é‹ç”¨å„ªä½æ€§ã‚’æ§‹ç¯‰ã—ã¾ã—ã‚‡ã†ã€‚",
      text: "æŠ•è³‡ã€ä¼æ¥­ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AI ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã€æˆ¦ç•¥çš„æŠ€è¡“ææºã«ã¤ã„ã¦ Tecnotitan ã¨è©±ã—ã¾ã—ã‚‡ã†ã€‚",
      buttons: ["ç›¸è«‡ã‚’äºˆç´„", "Investor Deckã‚’è¦‹ã‚‹", "AIè¨ºæ–­ã‚’ä¾é ¼"]
    }
  },
  ko: {
    ops: {
      kicker: "ìš´ì˜ ë ˆì´ì–´",
      title: "ì˜ì‚¬ê²°ì •, í”„ë¡œì„¸ìŠ¤, ì œí’ˆì„ ì—°ê²°í•˜ëŠ” ê¸°ìˆ .",
      text: "Tecnotitanì€ ì†Œí”„íŠ¸ì›¨ì–´, AI, ë¡œë³´í‹±ìŠ¤, ê²Œìž„, ì»¨ì„¤íŒ…ì„ í•˜ë‚˜ì˜ ìš´ì˜ ì¸í…”ë¦¬ì „ìŠ¤ë¡œ ì—°ê²°í•˜ëŠ” ì‘ìš© ê¸°ìˆ  ì‹œìŠ¤í…œìž…ë‹ˆë‹¤.",
      signals: ["AI ì›Œí¬í”Œë¡œ", "ê¸°ì—… ì†Œí”„íŠ¸ì›¨ì–´", "ìž¬ì‚¬ìš© IP"],
      nodes: [["AI", "Agents"], ["OS", "Software"], ["RB", "Robotics"], ["GX", "Games"]],
      metrics: [["ì†ë„", "+42%"], ["ì‹ í˜¸", "LIVE"]]
    },
    architecture: {
      kicker: "í™•ìž¥ ê°€ëŠ¥í•œ ì•„í‚¤í…ì²˜",
      title: "ì„œë¹„ìŠ¤ í•™ìŠµì—ì„œ ì œí’ˆ ì¸í…”ë¦¬ì „ìŠ¤ë¡œ.",
      text: "ê° í”„ë¡œì íŠ¸ëŠ” ì›Œí¬í”Œë¡œ, ì»´í¬ë„ŒíŠ¸, ì—ì´ì „íŠ¸, ëŒ€ì‹œë³´ë“œ, ìš´ì˜ ì§€ì‹ìœ¼ë¡œ ìž¬ì‚¬ìš© ê°€ëŠ¥í•œ íŒ¨í„´ì´ ë  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.",
      modules: [["01", "ë°ì´í„°", "ëª…í™•í•œ ì†ŒìŠ¤"], ["02", "ì—ì´ì „íŠ¸", "ê°€ì´ë“œ ìž‘ì—…"], ["03", "ì œí’ˆ", "ìž¬ì‚¬ìš© IP"], ["04", "ì‹œìž¥", "ê¸€ë¡œë²Œ í™•ìž¥"]],
      buttons: ["ì œí’ˆ ë³´ê¸°", "ë¶€ë¬¸ ë³´ê¸°"]
    },
    posters: [
      ["ìš´ì˜ ì¸í…”ë¦¬ì „ìŠ¤", "ê¸°ì—…ì„ ì¸¡ì • ê°€ëŠ¥í•˜ê³  ìžë™í™”ëœ ì‚´ì•„ìžˆëŠ” ì‹œìŠ¤í…œìœ¼ë¡œ.", "Tecnotitanì€ ë°ì´í„°, ì†Œí”„íŠ¸ì›¨ì–´, AI, ë¡œë³´í‹±ìŠ¤ë¥¼ ì—°ê²°í•´ í•µì‹¬ í”„ë¡œì„¸ìŠ¤ë¥¼ ê´€ì°°í•˜ê³  ê°œì„ í•˜ë©° ì •ë°€í•˜ê²Œ í™•ìž¥í•˜ë„ë¡ ë•ìŠµë‹ˆë‹¤."],
      ["ê¸€ë¡œë²Œ ì œí’ˆ", "ì½œë¡¬ë¹„ì•„ì—ì„œ ì„¸ê³„ë¡œ í™•ìž¥ë˜ëŠ” í¬íŠ¸í´ë¦¬ì˜¤.", "ì½”íŒŒì¼ëŸ¿, ê¸°ì—… í”Œëž«í¼, ì‹œë®¬ë ˆì´ì…˜, ê²Œìž„ ì—”ì§„, ëŒ€í™”í˜• AIëŠ” í•˜ë‚˜ì˜ ê³µìœ  ê¸°ìˆ  ì•„í‚¤í…ì²˜ì—ì„œ ì„±ìž¥í•©ë‹ˆë‹¤."]
    ],
    final: {
      kicker: "ë‹¤ìŒ ì›€ì§ìž„",
      title: "ì‹œìž¥ì´ ë” ë¹¨ë¼ì§€ê¸° ì „ì— ìš´ì˜ ìš°ìœ„ë¥¼ ë§Œë“­ë‹ˆë‹¤.",
      text: "íˆ¬ìž, ê¸°ì—… ì†Œí”„íŠ¸ì›¨ì–´, AI ì»¨ì„¤íŒ… ë˜ëŠ” ì „ëžµì  ê¸°ìˆ  íŒŒíŠ¸ë„ˆì‹­ì— ëŒ€í•´ Tecnotitanê³¼ ëŒ€í™”í•˜ì„¸ìš”.",
      buttons: ["ìƒë‹´ ì˜ˆì•½", "Investor Deck ë³´ê¸°", "AI ì§„ë‹¨ ìš”ì²­"]
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
  setSelectOptions('.service-request-form select[name="TamaÃ±o de empresa"]', serviceContent.form.companySizeOptions);
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
    return new URL("/en/guides/", window.location.origin).toString();
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
    return new URL(`/en/guides/${guideRoutes.en}.html`, window.location.origin).toString();
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
    "IA para empresas: automatizaciÃ³n, agentes y copilotos | Tecnotitan",
    "GuÃ­a de IA para empresas: automatizaciÃ³n, agentes, copilotos, casos de uso y ruta de implementaciÃ³n."
  ],
  "software-para-pymes-con-inteligencia-artificial.html": [
    "Software para pymes con inteligencia artificial | Tecnotitan",
    "GuÃ­a para pymes que buscan software con IA para ventas, soporte, documentos y automatizaciÃ³n operativa."
  ],
  "automatizar-atencion-cliente-con-ia.html": [
    "Automatizar atenciÃ³n al cliente con IA | Tecnotitan",
    "GuÃ­a para automatizar atenciÃ³n al cliente con agentes IA, clasificaciÃ³n, seguimiento y mÃ©tricas."
  ],
  "consultoria-ia-para-empresas-colombia.html": [
    "ConsultorÃ­a IA para empresas en Colombia | Tecnotitan",
    "ConsultorÃ­a IA para empresas en Colombia: diagnÃ³stico, casos de uso, agentes, copilotos y roadmap tecnolÃ³gico."
  ],
  "producto-copiloto-pyme.html": [
    "Copiloto PyME | Tecnotitan",
    "Panel de decisiones con inteligencia artificial para digitalizar pymes en LatinoamÃ©rica con ventas, caja, inventario y clientes."
  ],
  "producto-tecnotitan-os.html": [
    "Tecnotitan OS | Tecnotitan",
    "Plataforma empresarial para procesos, datos, automatizaciones, agentes IA y flujos internos."
  ],
  "producto-life-copilot.html": [
    "Life Copilot | Tecnotitan",
    "App mÃ³vil de productividad personal con copiloto IA para metas, tareas, hÃ¡bitos y decisiones."
  ],
  "producto-tecnotitan-engine.html": [
    "Tecnotitan Engine | Tecnotitan",
    "Motor y toolkit para videojuegos, simuladores, experiencias interactivas y mundos gamificados."
  ],
  "producto-academia-tecnotitan.html": [
    "Academia Tecnotitan | Tecnotitan",
    "Plataforma de aprendizaje para IA, software, videojuegos, robÃ³tica y transformaciÃ³n tecnolÃ³gica."
  ],
  "producto-call-center-ai.html": [
    "Call Center AI Tecnotitan | Tecnotitan",
    "Agentes conversacionales para soporte, ventas, seguimiento de clientes y contact centers."
  ],
  "trabaja-con-nosotros.html": [
    "Trabaja con nosotros | Tecnotitan",
    "Oportunidades para talento tÃ©cnico, consultores, aliados y constructores de tecnologÃ­a aplicada."
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
      "Tecnotitan | IA, software empresarial y automatizaciÃ³n para empresas",
      "Creamos software empresarial, agentes IA, automatizaciÃ³n, videojuegos, robÃ³tica y consultorÃ­a tecnolÃ³gica para empresas que quieren escalar."
    ],
    "nosotros.html": [
      "Nosotros | Tecnotitan, compaÃ±Ã­a de IA y software empresarial",
      "Conoce la visiÃ³n, misiÃ³n, liderazgo y equipo inicial de Tecnotitan, compaÃ±Ã­a colombiana de IA, software empresarial y tecnologÃ­a aplicada."
    ],
    "productos.html": [
      "Productos de IA, software y automatizaciÃ³n empresarial | Tecnotitan",
      "Explora Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia Tecnotitan y Call Center AI para empresas."
    ],
    "servicios.html": [
      "Servicios de IA, software empresarial y automatizaciÃ³n | Tecnotitan",
      "ConsultorÃ­a e implementaciÃ³n de IA, desarrollo de software empresarial, automatizaciÃ³n, robÃ³tica y transformaciÃ³n tecnolÃ³gica para empresas."
    ],
    "divisiones.html": [
      "Divisiones de tecnologÃ­a aplicada, IA y robÃ³tica | Tecnotitan",
      "Conoce las divisiones de Tecnotitan: software empresarial, inteligencia artificial, videojuegos, robÃ³tica, consultorÃ­a tecnolÃ³gica y ventures."
    ],
    "inversionistas.html": [
      "Tecnotitan para inversionistas | IA, software e IP escalable",
      "Revisa la tesis de inversiÃ³n de Tecnotitan: IA aplicada, software empresarial, productos propios, IP escalable, equipo, roadmap e investor deck."
    ],
    "contacto.html": [
      "Contacto Tecnotitan | IA, software y transformaciÃ³n tecnolÃ³gica",
      "Contacta a Tecnotitan para proyectos de IA, software empresarial, automatizaciÃ³n, servicios, alianzas, inversiÃ³n, quejas, reclamos y sugerencias."
    ],
    "servicio-inteligencia-artificial.html": [
      "ConsultorÃ­a e implementaciÃ³n de inteligencia artificial para empresas | Tecnotitan",
      "DiseÃ±amos agentes IA, copilotos, automatizaciÃ³n documental, analÃ­tica e integraciones para procesos empresariales."
    ],
    "servicio-software-empresarial.html": [
      "Desarrollo de software empresarial a medida | Tecnotitan",
      "Construimos plataformas web, CRM internos, dashboards, portales, integraciones y automatizaciÃ³n para empresas."
    ],
    "servicio-consultoria-tecnologica.html": [
      "ConsultorÃ­a tecnolÃ³gica para empresas | Tecnotitan",
      "DiagnÃ³stico, arquitectura, roadmap, adopciÃ³n y acompaÃ±amiento ejecutivo para tomar mejores decisiones tecnolÃ³gicas."
    ],
    "servicio-robotica.html": [
      "RobÃ³tica aplicada para empresas | Tecnotitan",
      "Prototipos, sensores, software de control, telemetrÃ­a y sistemas fÃ­sico-digitales conectados a datos."
    ],
    "servicio-videojuegos.html": [
      "Videojuegos, simuladores y gamificaciÃ³n para empresas | Tecnotitan",
      "Creamos videojuegos web, simuladores, experiencias interactivas y gamificaciÃ³n para capacitaciÃ³n, marca y educaciÃ³n."
    ],
    "servicio-transformacion-tecnologica.html": [
      "TransformaciÃ³n tecnolÃ³gica para empresas | Tecnotitan",
      "ModernizaciÃ³n operativa, automatizaciÃ³n, adopciÃ³n digital, datos y mejora continua para empresas."
    ],
    "producto-copiloto-pyme.html": [
      "Copiloto PyME | Panel IA para pequeÃ±as y medianas empresas",
      "Panel de decisiones con inteligencia artificial para digitalizar pymes en LatinoamÃ©rica con ventas, caja, inventario y clientes."
    ],
    "producto-tecnotitan-os.html": [
      "Tecnotitan OS | Plataforma empresarial con IA y automatizaciÃ³n",
      "Centraliza procesos, datos, automatizaciones, agentes IA y flujos internos en una plataforma empresarial."
    ],
    "producto-life-copilot.html": [
      "Life Copilot | App mÃ³vil de productividad con inteligencia artificial",
      "AplicaciÃ³n mÃ³vil de productividad personal con copiloto IA para metas, tareas, hÃ¡bitos y decisiones."
    ],
    "producto-tecnotitan-engine.html": [
      "Tecnotitan Engine | Motor para videojuegos, simuladores y experiencias interactivas",
      "Toolkit para prototipar videojuegos, simuladores, experiencias interactivas y mundos gamificados."
    ],
    "producto-academia-tecnotitan.html": [
      "Academia Tecnotitan | FormaciÃ³n en IA, software, videojuegos y robÃ³tica",
      "Plataforma de aprendizaje para inteligencia artificial, software, videojuegos, robÃ³tica y transformaciÃ³n tecnolÃ³gica."
    ],
    "producto-call-center-ai.html": [
      "Call Center AI Tecnotitan | Agentes IA para soporte y ventas",
      "Agentes conversacionales para soporte, ventas, seguimiento de clientes y automatizaciÃ³n de contact centers."
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
      "Tecnotitan | IA, software empresarial e automaÃ§Ã£o para empresas",
      "Criamos software empresarial, agentes de IA, automaÃ§Ã£o, jogos, robÃ³tica e consultoria tecnolÃ³gica para empresas que querem escalar."
    ],
    "nosotros.html": [
      "Sobre a Tecnotitan | Empresa de IA e software empresarial",
      "ConheÃ§a a visÃ£o, missÃ£o, lideranÃ§a e equipe inicial da Tecnotitan, empresa colombiana de IA, software empresarial e tecnologia aplicada."
    ],
    "productos.html": [
      "Produtos de IA, software e automaÃ§Ã£o empresarial | Tecnotitan",
      "Explore Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia Tecnotitan e Call Center AI para empresas."
    ],
    "servicios.html": [
      "ServiÃ§os de IA, software empresarial e automaÃ§Ã£o | Tecnotitan",
      "Consultoria e implementaÃ§Ã£o de IA, desenvolvimento de software empresarial, automaÃ§Ã£o, robÃ³tica e transformaÃ§Ã£o tecnolÃ³gica para empresas."
    ],
    "divisiones.html": [
      "DivisÃµes de tecnologia aplicada, IA e robÃ³tica | Tecnotitan",
      "ConheÃ§a as divisÃµes da Tecnotitan: software empresarial, inteligÃªncia artificial, games, robÃ³tica, consultoria tecnolÃ³gica e ventures."
    ],
    "inversionistas.html": [
      "Tecnotitan para investidores | IA, software e IP escalÃ¡vel",
      "Revise a tese de investimento da Tecnotitan: IA aplicada, software empresarial, produtos prÃ³prios, IP escalÃ¡vel, equipe, roadmap e investor deck."
    ],
    "contacto.html": [
      "Contato Tecnotitan | IA, software e transformaÃ§Ã£o tecnolÃ³gica",
      "Entre em contato com a Tecnotitan para projetos de IA, software empresarial, automaÃ§Ã£o, serviÃ§os, parcerias, investimento, reclamaÃ§Ãµes e sugestÃµes."
    ]
  },
  zh: {
    "index.html": [
      "Tecnotitan | é¢å‘ä¼ä¸šçš„ AIã€å•†ä¸šè½¯ä»¶ä¸Žè‡ªåŠ¨åŒ–",
      "Tecnotitan ä¸ºå¸Œæœ›æ‰©å±•çš„ä¼ä¸šæž„å»ºå•†ä¸šè½¯ä»¶ã€AI ä»£ç†ã€è‡ªåŠ¨åŒ–ã€æ¸¸æˆã€æœºå™¨äººä¸ŽæŠ€æœ¯å’¨è¯¢æœåŠ¡ã€‚"
    ],
    "nosotros.html": [
      "å…³äºŽ Tecnotitan | AI ä¸Žå•†ä¸šè½¯ä»¶å…¬å¸",
      "äº†è§£ Tecnotitan çš„æ„¿æ™¯ã€ä½¿å‘½ã€é¢†å¯¼å›¢é˜Ÿå’Œæ—©æœŸå›¢é˜Ÿï¼šä¸€å®¶æ¥è‡ªå“¥ä¼¦æ¯”äºšçš„ AIã€å•†ä¸šè½¯ä»¶ä¸Žåº”ç”¨æŠ€æœ¯å…¬å¸ã€‚"
    ],
    "productos.html": [
      "AIã€è½¯ä»¶ä¸Žä¼ä¸šè‡ªåŠ¨åŒ–äº§å“ | Tecnotitan",
      "æŽ¢ç´¢ Copiloto Pymeã€Tecnotitan OSã€Life Copilotã€Tecnotitan Engineã€Academia Tecnotitan ä¸Ž Call Center AIã€‚"
    ],
    "servicios.html": [
      "AIã€å•†ä¸šè½¯ä»¶ä¸Žè‡ªåŠ¨åŒ–æœåŠ¡ | Tecnotitan",
      "ä¸ºä¼ä¸šæä¾› AI å’¨è¯¢ä¸Žå®žæ–½ã€å•†ä¸šè½¯ä»¶å¼€å‘ã€è‡ªåŠ¨åŒ–ã€æœºå™¨äººå’ŒæŠ€æœ¯è½¬åž‹æœåŠ¡ã€‚"
    ],
    "divisiones.html": [
      "åº”ç”¨æŠ€æœ¯ã€AI ä¸Žæœºå™¨äººäº‹ä¸šéƒ¨ | Tecnotitan",
      "äº†è§£ Tecnotitan çš„å•†ä¸šè½¯ä»¶ã€äººå·¥æ™ºèƒ½ã€æ¸¸æˆã€æœºå™¨äººã€æŠ€æœ¯å’¨è¯¢ä¸Ž ventures äº‹ä¸šéƒ¨ã€‚"
    ],
    "inversionistas.html": [
      "Tecnotitan æŠ•èµ„è€…é¡µé¢ | AIã€è½¯ä»¶ä¸Žå¯æ‰©å±• IP",
      "æŸ¥çœ‹ Tecnotitan çš„æŠ•èµ„è®ºç‚¹ï¼šåº”ç”¨ AIã€å•†ä¸šè½¯ä»¶ã€è‡ªæœ‰äº§å“ã€å¯æ‰©å±• IPã€å›¢é˜Ÿã€è·¯çº¿å›¾ä¸Ž investor deckã€‚"
    ],
    "contacto.html": [
      "è”ç³» Tecnotitan | AIã€è½¯ä»¶ä¸ŽæŠ€æœ¯è½¬åž‹",
      "è”ç³» Tecnotitanï¼Œè®¨è®º AI é¡¹ç›®ã€å•†ä¸šè½¯ä»¶ã€è‡ªåŠ¨åŒ–ã€æœåŠ¡ã€åˆä½œã€æŠ•èµ„ã€æŠ•è¯‰ã€ç”³è¯‰ä¸Žå»ºè®®ã€‚"
    ]
  },
  ja: {
    "index.html": [
      "Tecnotitan | ä¼æ¥­å‘ã‘AIã€æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€è‡ªå‹•åŒ–",
      "Tecnotitan ã¯ã€æˆé•·ã‚’ç›®æŒ‡ã™ä¼æ¥­å‘ã‘ã«æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€è‡ªå‹•åŒ–ã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€æŠ€è¡“ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã‚’æ§‹ç¯‰ã—ã¾ã™ã€‚"
    ],
    "nosotros.html": [
      "Tecnotitanã«ã¤ã„ã¦ | AIã¨æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ä¼æ¥­",
      "Tecnotitan ã®ãƒ“ã‚¸ãƒ§ãƒ³ã€ãƒŸãƒƒã‚·ãƒ§ãƒ³ã€ãƒªãƒ¼ãƒ€ãƒ¼ã‚·ãƒƒãƒ—ã€åˆæœŸãƒãƒ¼ãƒ ã‚’ã”è¦§ãã ã•ã„ã€‚ã‚³ãƒ­ãƒ³ãƒ“ã‚¢ç™ºã®AIã€æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€å¿œç”¨æŠ€è¡“ä¼æ¥­ã§ã™ã€‚"
    ],
    "productos.html": [
      "AIã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ä¼æ¥­è‡ªå‹•åŒ–ãƒ—ãƒ­ãƒ€ã‚¯ãƒˆ | Tecnotitan",
      "Copiloto Pymeã€Tecnotitan OSã€Life Copilotã€Tecnotitan Engineã€Academia Tecnotitanã€Call Center AI ã‚’ã”è¦§ãã ã•ã„ã€‚"
    ],
    "servicios.html": [
      "AIã€æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€è‡ªå‹•åŒ–ã‚µãƒ¼ãƒ“ã‚¹ | Tecnotitan",
      "ä¼æ¥­å‘ã‘ã«AIã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã¨å®Ÿè£…ã€æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢é–‹ç™ºã€è‡ªå‹•åŒ–ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€æŠ€è¡“å¤‰é©ã‚’æä¾›ã—ã¾ã™ã€‚"
    ],
    "divisiones.html": [
      "å¿œç”¨æŠ€è¡“ã€AIã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹éƒ¨é–€ | Tecnotitan",
      "Tecnotitan ã®æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€æŠ€è¡“ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã€ventures éƒ¨é–€ã‚’ã”è¦§ãã ã•ã„ã€‚"
    ],
    "inversionistas.html": [
      "Tecnotitan æŠ•è³‡å®¶å‘ã‘ | AIã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€æ‹¡å¼µå¯èƒ½ãªIP",
      "Tecnotitan ã®æŠ•è³‡ãƒ†ãƒ¼ã‚¼ï¼šå¿œç”¨AIã€æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€è‡ªç¤¾ãƒ—ãƒ­ãƒ€ã‚¯ãƒˆã€æ‹¡å¼µå¯èƒ½ãªIPã€ãƒãƒ¼ãƒ ã€ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—ã€investor deckã€‚"
    ],
    "contacto.html": [
      "Tecnotitanã¸ãŠå•ã„åˆã‚ã› | AIã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€æŠ€è¡“å¤‰é©",
      "AIãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆã€æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€è‡ªå‹•åŒ–ã€ã‚µãƒ¼ãƒ“ã‚¹ã€ææºã€æŠ•è³‡ã€è‹¦æƒ…ã€ç”³ç«‹ã¦ã€ææ¡ˆã«ã¤ã„ã¦ãŠå•ã„åˆã‚ã›ãã ã•ã„ã€‚"
    ]
  },
  ko: {
    "index.html": [
      "Tecnotitan | ê¸°ì—…ì„ ìœ„í•œ AI, ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´ì™€ ìžë™í™”",
      "Tecnotitanì€ ì„±ìž¥í•˜ëŠ” ê¸°ì—…ì„ ìœ„í•´ ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´, AI ì—ì´ì „íŠ¸, ìžë™í™”, ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ê¸°ìˆ  ì»¨ì„¤íŒ…ì„ ë§Œë“­ë‹ˆë‹¤."
    ],
    "nosotros.html": [
      "Tecnotitan ì†Œê°œ | AI ë° ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´ ê¸°ì—…",
      "ì½œë¡¬ë¹„ì•„ ê¸°ë°˜ AI, ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´, ì‘ìš© ê¸°ìˆ  ê¸°ì—… Tecnotitanì˜ ë¹„ì „, ë¯¸ì…˜, ë¦¬ë”ì‹­ê³¼ ì´ˆê¸° íŒ€ì„ ì†Œê°œí•©ë‹ˆë‹¤."
    ],
    "productos.html": [
      "AI, ì†Œí”„íŠ¸ì›¨ì–´, ê¸°ì—… ìžë™í™” ì œí’ˆ | Tecnotitan",
      "Copiloto Pyme, Tecnotitan OS, Life Copilot, Tecnotitan Engine, Academia Tecnotitan, Call Center AIë¥¼ ì‚´íŽ´ë³´ì„¸ìš”."
    ],
    "servicios.html": [
      "AI, ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´, ìžë™í™” ì„œë¹„ìŠ¤ | Tecnotitan",
      "ê¸°ì—…ì„ ìœ„í•œ AI ì»¨ì„¤íŒ… ë° êµ¬í˜„, ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´ ê°œë°œ, ìžë™í™”, ë¡œë³´í‹±ìŠ¤, ê¸°ìˆ  ì „í™˜ ì„œë¹„ìŠ¤ë¥¼ ì œê³µí•©ë‹ˆë‹¤."
    ],
    "divisiones.html": [
      "ì‘ìš© ê¸°ìˆ , AI, ë¡œë³´í‹±ìŠ¤ ë¶€ë¬¸ | Tecnotitan",
      "Tecnotitanì˜ ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´, ì¸ê³µì§€ëŠ¥, ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ê¸°ìˆ  ì»¨ì„¤íŒ…, ventures ë¶€ë¬¸ì„ ì‚´íŽ´ë³´ì„¸ìš”."
    ],
    "inversionistas.html": [
      "Tecnotitan íˆ¬ìžìž íŽ˜ì´ì§€ | AI, ì†Œí”„íŠ¸ì›¨ì–´, í™•ìž¥ ê°€ëŠ¥í•œ IP",
      "Tecnotitanì˜ íˆ¬ìž ë…¼ë¦¬: ì‘ìš© AI, ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´, ìžì²´ ì œí’ˆ, í™•ìž¥ ê°€ëŠ¥í•œ IP, íŒ€, ë¡œë“œë§µ, investor deck."
    ],
    "contacto.html": [
      "Tecnotitan ë¬¸ì˜ | AI, ì†Œí”„íŠ¸ì›¨ì–´, ê¸°ìˆ  ì „í™˜",
      "AI í”„ë¡œì íŠ¸, ë¹„ì¦ˆë‹ˆìŠ¤ ì†Œí”„íŠ¸ì›¨ì–´, ìžë™í™”, ì„œë¹„ìŠ¤, íŒŒíŠ¸ë„ˆì‹­, íˆ¬ìž, ë¶ˆë§Œ, ì²­êµ¬ ë° ì œì•ˆì— ëŒ€í•´ ë¬¸ì˜í•˜ì„¸ìš”."
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
    name: "ImplementaciÃ³n de inteligencia artificial para empresas",
    description: "DiagnÃ³stico, agentes IA, copilotos, automatizaciÃ³n, integraciÃ³n y mediciÃ³n para procesos empresariales.",
    faq: [
      ["Â¿QuÃ© incluye un diagnÃ³stico de IA?", "Incluye mapa de procesos, revisiÃ³n de datos, riesgos, oportunidades y priorizaciÃ³n de casos de uso viables."],
      ["Â¿CuÃ¡ndo conviene crear un agente IA?", "Conviene cuando existe un flujo repetible con informaciÃ³n disponible, reglas claras y necesidad de respuesta o seguimiento frecuente."],
      ["Â¿CÃ³mo se mide el impacto de la IA?", "Se mide por ahorro de tiempo, reducciÃ³n de trabajo repetitivo, calidad de respuesta, adopciÃ³n del equipo y mejora en indicadores operativos."]
    ]
  },
  "servicio-software-empresarial.html": {
    name: "Desarrollo de software empresarial a medida",
    description: "Plataformas internas, CRM, dashboards, portales, integraciones y automatizaciÃ³n para empresas.",
    faq: [
      ["Â¿CuÃ¡ndo una empresa necesita software a medida?", "Cuando las herramientas genÃ©ricas no cubren procesos crÃ­ticos, datos, roles, integraciones o reportes del negocio."],
      ["Â¿QuÃ© puede construir Tecnotitan?", "Plataformas internas, CRM ligeros, portales operativos, dashboards, formularios, automatizaciones e integraciones con APIs."],
      ["Â¿CÃ³mo empieza un proyecto de software empresarial?", "Empieza con alcance, flujos, usuarios, datos, prioridades y un MVP que valide la operaciÃ³n antes de escalar."]
    ]
  },
  "servicio-consultoria-tecnologica.html": {
    name: "ConsultorÃ­a tecnolÃ³gica para empresas",
    description: "DiagnÃ³stico, arquitectura, roadmap, adopciÃ³n y acompaÃ±amiento ejecutivo para decisiones tecnolÃ³gicas.",
    faq: [
      ["Â¿Para quÃ© sirve una consultorÃ­a tecnolÃ³gica?", "Sirve para ordenar prioridades, reducir riesgo, definir arquitectura y convertir necesidades de negocio en una ruta ejecutable."],
      ["Â¿QuÃ© entrega un roadmap tecnolÃ³gico?", "Entrega prioridades, quick wins, dependencias, presupuesto estimado, responsables e hitos de implementaciÃ³n."],
      ["Â¿QuiÃ©n deberÃ­a solicitar consultorÃ­a?", "Empresas que necesitan modernizar procesos, evaluar IA, mejorar software interno o decidir inversiones tecnolÃ³gicas."]
    ]
  },
  "servicio-robotica.html": {
    name: "RobÃ³tica aplicada para empresas",
    description: "Prototipos, sensores, software de control, telemetrÃ­a y sistemas fÃ­sico-digitales conectados a datos.",
    faq: [
      ["Â¿QuÃ© es robÃ³tica aplicada para empresas?", "Es la integraciÃ³n de sensores, actuadores, software, datos e interfaces para resolver procesos fÃ­sicos u operativos."],
      ["Â¿CÃ³mo se valida un proyecto de robÃ³tica?", "Con una prueba tÃ©cnica que evalÃºa sensores, control, datos, restricciones, entorno y factibilidad antes de escalar."],
      ["Â¿QuÃ© papel tiene el software en robÃ³tica?", "El software coordina control, interfaces, telemetrÃ­a, reglas, alertas y conexiÃ³n con sistemas internos."]
    ]
  },
  "servicio-videojuegos.html": {
    name: "Videojuegos, simuladores y experiencias interactivas para empresas",
    description: "Simuladores, gamificaciÃ³n, videojuegos web y experiencias interactivas para capacitaciÃ³n, marca y educaciÃ³n.",
    faq: [
      ["Â¿Para quÃ© sirven los simuladores empresariales?", "Sirven para entrenar equipos, evaluar decisiones, practicar escenarios y medir aprendizaje en entornos interactivos."],
      ["Â¿QuÃ© es gamificaciÃ³n corporativa?", "Es el uso de progreso, retos, recompensas y retroalimentaciÃ³n para aumentar participaciÃ³n y aprendizaje."],
      ["Â¿QuÃ© puede crear Tecnotitan en videojuegos?", "Prototipos, juegos web, simuladores, experiencias educativas, activaciones de marca y mundos interactivos."]
    ]
  },
  "servicio-transformacion-tecnologica.html": {
    name: "TransformaciÃ³n tecnolÃ³gica para empresas",
    description: "ModernizaciÃ³n operativa, automatizaciÃ³n, adopciÃ³n digital, datos y mejora continua para empresas.",
    faq: [
      ["Â¿QuÃ© es transformaciÃ³n tecnolÃ³gica?", "Es la modernizaciÃ³n de procesos, herramientas, datos y capacidades para operar con mÃ¡s claridad, automatizaciÃ³n y mediciÃ³n."],
      ["Â¿CÃ³mo se inicia una transformaciÃ³n tecnolÃ³gica?", "Con diagnÃ³stico de madurez, mapa de procesos, quick wins, roadmap, adopciÃ³n y seguimiento de indicadores."],
      ["Â¿Por quÃ© falla una transformaciÃ³n digital?", "Suele fallar por falta de prioridades, baja adopciÃ³n, herramientas desconectadas, datos desordenados o ausencia de seguimiento."]
    ]
  }
};

const productStructuredSeo = {
  "producto-copiloto-pyme.html": {
    name: "Copiloto PyME",
    description: "Panel de decisiones con inteligencia artificial para digitalizar pequeÃ±as y medianas empresas en LatinoamÃ©rica con mÃ³dulos de ventas, caja, inventario y clientes.",
    category: "AI business decision platform",
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
    description: "AplicaciÃ³n mÃ³vil de productividad personal con copiloto IA para organizar metas, tareas, hÃ¡bitos y decisiones.",
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
    description: "Plataforma de aprendizaje para inteligencia artificial, software, videojuegos, robÃ³tica y transformaciÃ³n tecnolÃ³gica.",
    category: "Technology education platform",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    audience: "Students, professionals and companies",
    image: "https://www.tecnotitan.com/assets/bg-capabilities-tech.jpg"
  },
  "producto-call-center-ai.html": {
    name: "Call Center AI Tecnotitan",
    description: "Agentes conversacionales para soporte, ventas, seguimiento de clientes y automatizaciÃ³n de contact centers.",
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
      text: "Explora cada lÃ­nea de servicio con enfoque, entregables y tipo de impacto esperado para empresas.",
      cards: [
        ["IA", "Inteligencia artificial", "Agentes, copilotos, automatizaciÃ³n documental, analÃ­tica y flujos inteligentes."],
        ["SW", "Software empresarial", "Plataformas web, CRM internos, dashboards, portales e integraciones."],
        ["AD", "ConsultorÃ­a tecnolÃ³gica", "DiagnÃ³stico, arquitectura, roadmap, adopciÃ³n y acompaÃ±amiento ejecutivo."],
        ["RB", "RobÃ³tica", "Software, sensores, datos y sistemas fÃ­sico-digitales conectados a operaciones."],
        ["VG", "Videojuegos", "Simuladores, experiencias interactivas, gamificaciÃ³n y entrenamiento inmersivo."],
        ["TX", "TransformaciÃ³n tecnolÃ³gica", "ModernizaciÃ³n operativa, automatizaciÃ³n, adopciÃ³n digital y cambio organizacional."]
      ]
    },
    method: {
      title: "CÃ³mo trabajamos",
      text: "Un proceso claro para pasar de diagnÃ³stico a despliegue, con entregables visibles y decisiones de avance en cada fase.",
      cards: [
        ["01", "DiagnÃ³stico", "Entendemos procesos, datos, herramientas, usuarios, restricciones y oportunidad de impacto.", "Entregable: mapa de oportunidad"],
        ["02", "DiseÃ±o", "Definimos arquitectura, alcance, experiencia, integraciones, riesgos y criterios de Ã©xito.", "Entregable: plan tÃ©cnico y funcional"],
        ["03", "Desarrollo", "Construimos el sistema, agente, plataforma, prototipo o automatizaciÃ³n con ciclos cortos.", "Entregable: versiÃ³n funcional"],
        ["04", "ValidaciÃ³n", "Probamos con usuarios, datos y escenarios reales para ajustar experiencia, precisiÃ³n y flujo.", "Entregable: reporte de validaciÃ³n"],
        ["05", "Despliegue", "Publicamos, integramos, documentamos y dejamos el sistema listo para uso operativo.", "Entregable: sistema en producciÃ³n"],
        ["06", "Soporte", "Medimos adopciÃ³n, corregimos fricciÃ³n, priorizamos mejoras y transferimos capacidades.", "Entregable: plan de evoluciÃ³n"]
      ]
    },
    technology: {
      title: "TecnologÃ­as y capacidades",
      text: "Integramos herramientas modernas con criterio operativo: elegimos tecnologÃ­a por impacto, mantenibilidad y capacidad de escalar dentro de la empresa.",
      cards: [
        ["AI", "IA generativa", "Modelos de lenguaje, asistencia documental, clasificaciÃ³n, extracciÃ³n, generaciÃ³n y anÃ¡lisis de informaciÃ³n."],
        ["Agents", "Agentes y copilotos", "Asistentes conectados a procesos, datos, herramientas internas, atenciÃ³n, ventas y operaciones."],
        ["APIs", "Integraciones", "ConexiÃ³n entre formularios, CRM, bases de datos, correo, dashboards, automatizaciones y sistemas existentes."],
        ["Data", "Dashboards y analÃ­tica", "Indicadores, reportes ejecutivos, seguimiento de procesos, visualizaciÃ³n y lectura accionable de datos."],
        ["Cloud", "Web y cloud", "Aplicaciones web, funciones serverless, despliegue continuo, almacenamiento, seguridad y observabilidad."],
        ["Automation", "AutomatizaciÃ³n", "Flujos repetibles, alertas, generaciÃ³n de reportes, sincronizaciÃ³n de datos y reducciÃ³n de trabajo manual."],
        ["Games", "Videojuegos y simulaciÃ³n", "MecÃ¡nicas interactivas, gamificaciÃ³n, simuladores, experiencias web y aprendizaje inmersivo."],
        ["Robotics", "RobÃ³tica aplicada", "Sensores, control, telemetrÃ­a, prototipos, sistemas fÃ­sico-digitales y visualizaciÃ³n de operaciÃ³n."]
      ]
    },
    industries: {
      title: "Casos de uso por industria",
      text: "Aplicamos software, IA, videojuegos, robÃ³tica y consultorÃ­a tecnolÃ³gica a problemas concretos de operaciÃ³n, crecimiento y adopciÃ³n digital.",
      cards: [
        ["Servicios profesionales", "Automatizar atenciÃ³n, documentos y seguimiento comercial", "Copilotos para responder clientes, clasificar solicitudes, generar documentos, priorizar oportunidades y medir productividad.", "Solicitar diagnÃ³stico IA"],
        ["Retail y comercio", "Unificar ventas, inventario, soporte y datos de clientes", "Portales internos, dashboards, agentes de atenciÃ³n, campaÃ±as interactivas y automatizaciÃ³n de procesos repetibles.", "Explorar software"],
        ["EducaciÃ³n", "Crear experiencias de aprendizaje con IA y simulaciÃ³n", "Academias digitales, tutores IA, simuladores, evaluaciones interactivas, gamificaciÃ³n y seguimiento de progreso.", "Crear experiencia"],
        ["Salud y bienestar", "Ordenar informaciÃ³n, seguimiento y comunicaciÃ³n operativa", "AutomatizaciÃ³n documental, agendas, paneles internos, flujos de atenciÃ³n y asistentes para tareas administrativas.", "Modernizar operaciÃ³n"],
        ["LogÃ­stica y operaciones", "Conectar procesos, datos, alertas y trazabilidad", "Dashboards operativos, flujos de aprobaciÃ³n, automatizaciÃ³n de reportes, seguimiento de tareas y analÃ­tica aplicada.", "DiseÃ±ar roadmap"],
        ["Industria y manufactura", "Integrar sensores, software y sistemas fÃ­sico-digitales", "Prototipos de robÃ³tica, telemetrÃ­a, control, mantenimiento, captura de datos y visualizaciÃ³n de procesos crÃ­ticos.", "Explorar robÃ³tica"]
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      text: "Respuestas claras para iniciar una conversaciÃ³n comercial con expectativas realistas sobre alcance, tiempos, seguridad y soporte.",
      items: [
        ["Â¿CuÃ¡nto tarda un proyecto tÃ­pico?", "Depende del alcance. Un diagnÃ³stico puede tomar pocos dÃ­as; un prototipo funcional suele requerir semanas; una plataforma o implementaciÃ³n completa se define por fases para reducir riesgo."],
        ["Â¿CÃ³mo se define el costo?", "Se estima segÃºn alcance, complejidad, integraciones, nivel de soporte, urgencia y entregables. Por eso el primer paso recomendado es una conversaciÃ³n de diagnÃ³stico."],
        ["Â¿Trabajan con informaciÃ³n confidencial?", "SÃ­. Podemos trabajar bajo acuerdos de confidencialidad y limitar el acceso a datos sensibles segÃºn las necesidades del proyecto y las polÃ­ticas de la empresa."],
        ["Â¿QuÃ© pasa con la propiedad intelectual?", "La propiedad intelectual se acuerda por contrato segÃºn el tipo de proyecto. Podemos construir software a medida para el cliente o desarrollar componentes reutilizables bajo condiciones claras."],
        ["Â¿La empresa necesita tener equipo tÃ©cnico interno?", "No necesariamente. Tecnotitan puede acompaÃ±ar desde diagnÃ³stico hasta despliegue. Si ya existe equipo interno, trabajamos como socio tÃ©cnico para acelerar arquitectura, desarrollo y adopciÃ³n."],
        ["Â¿Ofrecen soporte despuÃ©s del despliegue?", "SÃ­. Podemos incluir mantenimiento, mejoras evolutivas, monitoreo, documentaciÃ³n, capacitaciÃ³n y soporte operativo segÃºn el nivel de servicio requerido."],
        ["Â¿CÃ³mo manejan seguridad y datos?", "DiseÃ±amos cada soluciÃ³n considerando permisos, control de acceso, trazabilidad, exposiciÃ³n mÃ­nima de datos, proveedores adecuados y prÃ¡cticas de despliegue responsables."],
        ["Â¿Pueden empezar con algo pequeÃ±o?", "SÃ­. Recomendamos comenzar con un diagnÃ³stico, MVP o piloto medible. Eso permite validar valor antes de comprometer inversiones mayores."]
      ]
    },
    conversion: {
      title: "Elige el siguiente paso",
      text: "Atajos comerciales para llegar al formulario con el servicio correcto preseleccionado.",
      cards: [
        ["IA", "Solicitar diagnÃ³stico IA", "Para identificar automatizaciones, agentes, copilotos y casos con retorno operativo."],
        ["Software", "Cotizar software empresarial", "Para construir plataformas, CRM internos, dashboards, portales e integraciones."],
        ["Advisory", "Agendar consultorÃ­a", "Para definir roadmap tecnolÃ³gico, arquitectura, adopciÃ³n y prioridades ejecutivas."],
        ["RobÃ³tica", "Explorar robÃ³tica aplicada", "Para conectar sensores, software, telemetrÃ­a y sistemas fÃ­sico-digitales."],
        ["Interactivo", "Crear experiencia interactiva", "Para simuladores, videojuegos, gamificaciÃ³n, entrenamiento y experiencias web."],
        ["TransformaciÃ³n", "DiseÃ±ar transformaciÃ³n tecnolÃ³gica", "Para modernizar procesos, automatizar operaciÃ³n y acelerar adopciÃ³n digital."]
      ]
    },
    form: {
      kicker: "Solicitud comercial",
      title: "CuÃ©ntanos quÃ© necesita construir tu empresa",
      text: "Este formulario es para proyectos de IA, software, consultorÃ­a, robÃ³tica, videojuegos o transformaciÃ³n tecnolÃ³gica.",
      successTitle: "Solicitud enviada",
      successText: "Gracias. Recibimos tu solicitud de servicios y responderemos a info@tecnotitan.com.",
      labels: ["Nombre", "Email", "Empresa", "PaÃ­s", "Servicio de interÃ©s", "TamaÃ±o de empresa", "Presupuesto aproximado", "Urgencia", "Mensaje"],
      serviceOptions: ["Seleccionar", "Inteligencia artificial", "Software empresarial", "ConsultorÃ­a tecnolÃ³gica", "RobÃ³tica", "Videojuegos y experiencias interactivas", "TransformaciÃ³n tecnolÃ³gica"],
      companySizeOptions: ["Seleccionar", "1-10 personas", "11-50 personas", "51-200 personas", "201-1000 personas", "MÃ¡s de 1000 personas"],
      budgetOptions: ["Seleccionar", "Menos de USD 5K", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "Por definir"],
      urgencyOptions: ["Seleccionar", "Este mes", "1-3 meses", "3-6 meses", "Exploratorio"],
      placeholder: "CuÃ©ntanos el problema, objetivo o proceso que quieres mejorar.",
      newsletter: "Quiero suscribirme al newsletter oficial de Tecnotitan.",
      button: "Solicitar conversaciÃ³n comercial"
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
      title: "ServiÃ§os especializados",
      text: "Explore cada linha de serviÃ§o por foco, entregÃ¡veis e impacto esperado para empresas.",
      cards: [
        ["IA", "InteligÃªncia artificial", "Agentes, copilotos, automaÃ§Ã£o documental, analytics e fluxos inteligentes."],
        ["SW", "Software empresarial", "Plataformas web, CRM interno, dashboards, portais e integraÃ§Ãµes."],
        ["AD", "Consultoria tecnolÃ³gica", "DiagnÃ³stico, arquitetura, roadmap, adoÃ§Ã£o e acompanhamento executivo."],
        ["RB", "RobÃ³tica", "Software, sensores, dados e sistemas fÃ­sico-digitais conectados Ã s operaÃ§Ãµes."],
        ["VG", "Videogames", "Simuladores, experiÃªncias interativas, gamificaÃ§Ã£o e treinamento imersivo."],
        ["TX", "TransformaÃ§Ã£o tecnolÃ³gica", "ModernizaÃ§Ã£o operacional, automaÃ§Ã£o, adoÃ§Ã£o digital e mudanÃ§a organizacional."]
      ]
    },
    method: {
      title: "Como trabalhamos",
      text: "Um processo claro do diagnÃ³stico ao deploy, com entregÃ¡veis visÃ­veis e decisÃµes de avanÃ§o em cada fase.",
      cards: [
        ["01", "DiagnÃ³stico", "Entendemos processos, dados, ferramentas, usuÃ¡rios, restriÃ§Ãµes e oportunidades de impacto.", "EntregÃ¡vel: mapa de oportunidade"],
        ["02", "Desenho", "Definimos arquitetura, escopo, experiÃªncia, integraÃ§Ãµes, riscos e critÃ©rios de sucesso.", "EntregÃ¡vel: plano tÃ©cnico e funcional"],
        ["03", "Desenvolvimento", "ConstruÃ­mos o sistema, agente, plataforma, protÃ³tipo ou automaÃ§Ã£o em ciclos curtos.", "EntregÃ¡vel: versÃ£o funcional"],
        ["04", "ValidaÃ§Ã£o", "Testamos com usuÃ¡rios, dados e cenÃ¡rios reais para ajustar experiÃªncia, precisÃ£o e fluxo.", "EntregÃ¡vel: relatÃ³rio de validaÃ§Ã£o"],
        ["05", "Deploy", "Publicamos, integramos, documentamos e deixamos o sistema pronto para uso operacional.", "EntregÃ¡vel: sistema em produÃ§Ã£o"],
        ["06", "Suporte", "Medimos adoÃ§Ã£o, reduzimos fricÃ§Ã£o, priorizamos melhorias e transferimos capacidades.", "EntregÃ¡vel: plano de evoluÃ§Ã£o"]
      ]
    },
    technology: {
      title: "Tecnologias e capacidades",
      text: "Integramos ferramentas modernas com critÃ©rio operacional: escolhemos tecnologia por impacto, manutenÃ§Ã£o e capacidade de escala dentro da empresa.",
      cards: [
        ["AI", "IA generativa", "Modelos de linguagem, assistÃªncia documental, classificaÃ§Ã£o, extraÃ§Ã£o, geraÃ§Ã£o e anÃ¡lise de informaÃ§Ã£o."],
        ["Agents", "Agentes e copilotos", "Assistentes conectados a processos, dados, ferramentas internas, atendimento, vendas e operaÃ§Ãµes."],
        ["APIs", "IntegraÃ§Ãµes", "ConexÃ£o entre formulÃ¡rios, CRM, bases de dados, email, dashboards, automaÃ§Ãµes e sistemas existentes."],
        ["Data", "Dashboards e analytics", "Indicadores, relatÃ³rios executivos, acompanhamento de processos, visualizaÃ§Ã£o e leitura acionÃ¡vel de dados."],
        ["Cloud", "Web e cloud", "AplicaÃ§Ãµes web, funÃ§Ãµes serverless, deploy contÃ­nuo, armazenamento, seguranÃ§a e observabilidade."],
        ["Automation", "AutomaÃ§Ã£o", "Fluxos repetÃ­veis, alertas, geraÃ§Ã£o de relatÃ³rios, sincronizaÃ§Ã£o de dados e reduÃ§Ã£o de trabalho manual."],
        ["Games", "Videogames e simulaÃ§Ã£o", "MecÃ¢nicas interativas, gamificaÃ§Ã£o, simuladores, experiÃªncias web e aprendizagem imersiva."],
        ["Robotics", "RobÃ³tica aplicada", "Sensores, controle, telemetria, protÃ³tipos, sistemas fÃ­sico-digitais e visualizaÃ§Ã£o operacional."]
      ]
    },
    industries: {
      title: "Casos de uso por indÃºstria",
      text: "Aplicamos software, IA, videogames, robÃ³tica e consultoria tecnolÃ³gica a problemas concretos de operaÃ§Ã£o, crescimento e adoÃ§Ã£o digital.",
      cards: [
        ["ServiÃ§os profissionais", "Automatizar atendimento, documentos e acompanhamento comercial", "Copilotos para responder clientes, classificar solicitaÃ§Ãµes, gerar documentos, priorizar oportunidades e medir produtividade.", "Solicitar diagnÃ³stico IA"],
        ["Retail e comÃ©rcio", "Unificar vendas, estoque, suporte e dados de clientes", "Portais internos, dashboards, agentes de atendimento, campanhas interativas e automaÃ§Ã£o de processos repetÃ­veis.", "Explorar software"],
        ["EducaÃ§Ã£o", "Criar experiÃªncias de aprendizagem com IA e simulaÃ§Ã£o", "Academias digitais, tutores IA, simuladores, avaliaÃ§Ãµes interativas, gamificaÃ§Ã£o e acompanhamento de progresso.", "Criar experiÃªncia"],
        ["SaÃºde e bem-estar", "Organizar informaÃ§Ã£o, acompanhamento e comunicaÃ§Ã£o operacional", "AutomaÃ§Ã£o documental, agendas, painÃ©is internos, fluxos de atendimento e assistentes para tarefas administrativas.", "Modernizar operaÃ§Ã£o"],
        ["LogÃ­stica e operaÃ§Ãµes", "Conectar processos, dados, alertas e rastreabilidade", "Dashboards operacionais, fluxos de aprovaÃ§Ã£o, automaÃ§Ã£o de relatÃ³rios, acompanhamento de tarefas e analytics aplicada.", "Desenhar roadmap"],
        ["IndÃºstria e manufatura", "Integrar sensores, software e sistemas fÃ­sico-digitais", "ProtÃ³tipos de robÃ³tica, telemetria, controle, manutenÃ§Ã£o, captura de dados e visualizaÃ§Ã£o de processos crÃ­ticos.", "Explorar robÃ³tica"]
      ]
    },
    faq: {
      title: "Perguntas frequentes",
      text: "Respostas claras para iniciar uma conversa comercial com expectativas realistas sobre escopo, prazos, seguranÃ§a e suporte.",
      items: [
        ["Quanto tempo leva um projeto tÃ­pico?", "Depende do escopo. Um diagnÃ³stico pode levar poucos dias; um protÃ³tipo funcional costuma exigir semanas; uma plataforma ou implementaÃ§Ã£o completa Ã© definida por fases para reduzir risco."],
        ["Como o custo Ã© definido?", "Ã‰ estimado conforme escopo, complexidade, integraÃ§Ãµes, nÃ­vel de suporte, urgÃªncia e entregÃ¡veis. Por isso o primeiro passo recomendado Ã© uma conversa de diagnÃ³stico."],
        ["VocÃªs trabalham com informaÃ§Ã£o confidencial?", "Sim. Podemos trabalhar sob acordos de confidencialidade e limitar o acesso a dados sensÃ­veis conforme as necessidades do projeto e as polÃ­ticas da empresa."],
        ["O que acontece com a propriedade intelectual?", "A propriedade intelectual Ã© acordada em contrato conforme o tipo de projeto. Podemos construir software sob medida para o cliente ou componentes reutilizÃ¡veis sob condiÃ§Ãµes claras."],
        ["A empresa precisa ter equipe tÃ©cnica interna?", "NÃ£o necessariamente. A Tecnotitan pode acompanhar do diagnÃ³stico ao deploy. Se jÃ¡ existir equipe interna, atuamos como parceiro tÃ©cnico para acelerar arquitetura, desenvolvimento e adoÃ§Ã£o."],
        ["VocÃªs oferecem suporte apÃ³s o deploy?", "Sim. Podemos incluir manutenÃ§Ã£o, melhorias evolutivas, monitoramento, documentaÃ§Ã£o, treinamento e suporte operacional conforme o nÃ­vel de serviÃ§o necessÃ¡rio."],
        ["Como vocÃªs tratam seguranÃ§a e dados?", "Desenhamos cada soluÃ§Ã£o considerando permissÃµes, controle de acesso, rastreabilidade, exposiÃ§Ã£o mÃ­nima de dados, provedores adequados e prÃ¡ticas responsÃ¡veis de deploy."],
        ["Podemos comeÃ§ar com algo pequeno?", "Sim. Recomendamos iniciar com diagnÃ³stico, MVP ou piloto mensurÃ¡vel. Isso permite validar valor antes de investimentos maiores."]
      ]
    },
    conversion: {
      title: "Escolha o prÃ³ximo passo",
      text: "Atalhos comerciais para chegar ao formulÃ¡rio com o serviÃ§o correto prÃ©-selecionado.",
      cards: [
        ["IA", "Solicitar diagnÃ³stico IA", "Para identificar automaÃ§Ãµes, agentes, copilotos e casos com retorno operacional."],
        ["Software", "Cotar software empresarial", "Para construir plataformas, CRM interno, dashboards, portais e integraÃ§Ãµes."],
        ["Advisory", "Agendar consultoria", "Para definir roadmap tecnolÃ³gico, arquitetura, adoÃ§Ã£o e prioridades executivas."],
        ["RobÃ³tica", "Explorar robÃ³tica aplicada", "Para conectar sensores, software, telemetria e sistemas fÃ­sico-digitais."],
        ["Interativo", "Criar experiÃªncia interativa", "Para simuladores, videogames, gamificaÃ§Ã£o, treinamento e experiÃªncias web."],
        ["TransformaÃ§Ã£o", "Desenhar transformaÃ§Ã£o tecnolÃ³gica", "Para modernizar processos, automatizar operaÃ§Ã£o e acelerar adoÃ§Ã£o digital."]
      ]
    },
    form: {
      kicker: "SolicitaÃ§Ã£o comercial",
      title: "Conte-nos o que sua empresa precisa construir",
      text: "Este formulÃ¡rio Ã© para projetos de IA, software, consultoria, robÃ³tica, videogames ou transformaÃ§Ã£o tecnolÃ³gica.",
      successTitle: "SolicitaÃ§Ã£o enviada",
      successText: "Obrigado. Recebemos sua solicitaÃ§Ã£o de serviÃ§os e responderemos por info@tecnotitan.com.",
      labels: ["Nome", "Email", "Empresa", "PaÃ­s", "ServiÃ§o de interesse", "Tamanho da empresa", "OrÃ§amento aproximado", "UrgÃªncia", "Mensagem"],
      serviceOptions: ["Selecionar", "InteligÃªncia artificial", "Software empresarial", "Consultoria tecnolÃ³gica", "RobÃ³tica", "Videogames e experiÃªncias interativas", "TransformaÃ§Ã£o tecnolÃ³gica"],
      companySizeOptions: ["Selecionar", "1-10 pessoas", "11-50 pessoas", "51-200 pessoas", "201-1000 pessoas", "Mais de 1000 pessoas"],
      budgetOptions: ["Selecionar", "Menos de USD 5K", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "A definir"],
      urgencyOptions: ["Selecionar", "Este mÃªs", "1-3 meses", "3-6 meses", "ExploratÃ³rio"],
      placeholder: "Conte-nos o problema, objetivo ou processo que vocÃª quer melhorar.",
      newsletter: "Quero me inscrever no newsletter oficial da Tecnotitan.",
      button: "Solicitar conversa comercial"
    }
  }
};

servicePageTranslations.zh = {
  serviceIndex: {
    title: "ä¸“ä¸šæœåŠ¡",
    text: "æŒ‰æœåŠ¡é‡ç‚¹ã€äº¤ä»˜ç‰©å’Œé¢„æœŸä¸šåŠ¡å½±å“äº†è§£ Tecnotitan çš„æœåŠ¡çº¿ã€‚",
    cards: [
      ["AI", "äººå·¥æ™ºèƒ½", "æ™ºèƒ½ä»£ç†ã€copilotã€æ–‡æ¡£è‡ªåŠ¨åŒ–ã€åˆ†æžå’Œæ™ºèƒ½æµç¨‹ã€‚"],
      ["SW", "ä¼ä¸šè½¯ä»¶", "Web å¹³å°ã€å†…éƒ¨ CRMã€ä»ªè¡¨ç›˜ã€é—¨æˆ·å’Œç³»ç»Ÿé›†æˆã€‚"],
      ["AD", "æŠ€æœ¯å’¨è¯¢", "è¯Šæ–­ã€æž¶æž„ã€è·¯çº¿å›¾ã€è½åœ°é‡‡ç”¨å’Œé«˜ç®¡é™ªä¼´ã€‚"],
      ["RB", "æœºå™¨äºº", "è¿žæŽ¥è¿è¥çš„è½¯ä»¶ã€ä¼ æ„Ÿå™¨ã€æ•°æ®å’Œç‰©ç†æ•°å­—ç³»ç»Ÿã€‚"],
      ["VG", "ç”µå­æ¸¸æˆ", "æ¨¡æ‹Ÿå™¨ã€äº’åŠ¨ä½“éªŒã€æ¸¸æˆåŒ–å’Œæ²‰æµ¸å¼è®­ç»ƒã€‚"],
      ["TX", "æŠ€æœ¯è½¬åž‹", "è¿è¥çŽ°ä»£åŒ–ã€è‡ªåŠ¨åŒ–ã€æ•°å­—åŒ–é‡‡ç”¨å’Œç»„ç»‡å˜é©ã€‚"]
    ]
  },
  method: {
    title: "æˆ‘ä»¬çš„å·¥ä½œæ–¹å¼",
    text: "ä»Žè¯Šæ–­åˆ°éƒ¨ç½²çš„æ¸…æ™°æµç¨‹ï¼Œæ¯ä¸ªé˜¶æ®µéƒ½æœ‰å¯è§äº¤ä»˜ç‰©å’ŒæŽ¨è¿›å†³ç­–ã€‚",
    cards: [
      ["01", "è¯Šæ–­", "ç†è§£æµç¨‹ã€æ•°æ®ã€å·¥å…·ã€ç”¨æˆ·ã€é™åˆ¶å’Œå½±å“æœºä¼šã€‚", "äº¤ä»˜ç‰©ï¼šæœºä¼šåœ°å›¾"],
      ["02", "è®¾è®¡", "å®šä¹‰æž¶æž„ã€èŒƒå›´ã€ä½“éªŒã€é›†æˆã€é£Žé™©å’ŒæˆåŠŸæ ‡å‡†ã€‚", "äº¤ä»˜ç‰©ï¼šæŠ€æœ¯ä¸ŽåŠŸèƒ½è®¡åˆ’"],
      ["03", "å¼€å‘", "ä»¥çŸ­å‘¨æœŸæž„å»ºç³»ç»Ÿã€ä»£ç†ã€å¹³å°ã€åŽŸåž‹æˆ–è‡ªåŠ¨åŒ–ã€‚", "äº¤ä»˜ç‰©ï¼šå¯ç”¨ç‰ˆæœ¬"],
      ["04", "éªŒè¯", "ç”¨çœŸå®žç”¨æˆ·ã€æ•°æ®å’Œåœºæ™¯æµ‹è¯•ï¼Œè°ƒæ•´ä½“éªŒã€å‡†ç¡®æ€§å’Œæµç¨‹ã€‚", "äº¤ä»˜ç‰©ï¼šéªŒè¯æŠ¥å‘Š"],
      ["05", "éƒ¨ç½²", "å‘å¸ƒã€é›†æˆã€æ–‡æ¡£åŒ–ï¼Œå¹¶è®©ç³»ç»Ÿå¯æŠ•å…¥è¿è¥ä½¿ç”¨ã€‚", "äº¤ä»˜ç‰©ï¼šç”Ÿäº§ç³»ç»Ÿ"],
      ["06", "æ”¯æŒ", "è¡¡é‡é‡‡ç”¨åº¦ã€å‡å°‘æ‘©æ“¦ã€æŽ’åºæ”¹è¿›å¹¶è½¬ç§»èƒ½åŠ›ã€‚", "äº¤ä»˜ç‰©ï¼šæ¼”è¿›è®¡åˆ’"]
    ]
  },
  technology: {
    title: "æŠ€æœ¯ä¸Žèƒ½åŠ›",
    text: "æˆ‘ä»¬ä»¥è¿è¥åˆ¤æ–­æ•´åˆçŽ°ä»£å·¥å…·ï¼šæŒ‰å½±å“ã€å¯ç»´æŠ¤æ€§å’Œä¼ä¸šæ‰©å±•èƒ½åŠ›é€‰æ‹©æŠ€æœ¯ã€‚",
    cards: [
      ["AI", "ç”Ÿæˆå¼ AI", "è¯­è¨€æ¨¡åž‹ã€æ–‡æ¡£è¾…åŠ©ã€åˆ†ç±»ã€æŠ½å–ã€ç”Ÿæˆå’Œä¿¡æ¯åˆ†æžã€‚"],
      ["Agents", "ä»£ç†ä¸Ž copilots", "è¿žæŽ¥æµç¨‹ã€æ•°æ®ã€å†…éƒ¨å·¥å…·ã€æ”¯æŒã€é”€å”®å’Œè¿è¥çš„åŠ©æ‰‹ã€‚"],
      ["APIs", "ç³»ç»Ÿé›†æˆ", "è¿žæŽ¥è¡¨å•ã€CRMã€æ•°æ®åº“ã€é‚®ä»¶ã€ä»ªè¡¨ç›˜ã€è‡ªåŠ¨åŒ–å’ŒçŽ°æœ‰ç³»ç»Ÿã€‚"],
      ["Data", "ä»ªè¡¨ç›˜ä¸Žåˆ†æž", "æŒ‡æ ‡ã€ç®¡ç†æŠ¥å‘Šã€æµç¨‹è¿½è¸ªã€å¯è§†åŒ–å’Œå¯è¡ŒåŠ¨çš„æ•°æ®é˜…è¯»ã€‚"],
      ["Cloud", "Web ä¸Žäº‘", "Web åº”ç”¨ã€serverless å‡½æ•°ã€æŒç»­éƒ¨ç½²ã€å­˜å‚¨ã€å®‰å…¨å’Œå¯è§‚æµ‹æ€§ã€‚"],
      ["Automation", "è‡ªåŠ¨åŒ–", "å¯é‡å¤æµç¨‹ã€æé†’ã€æŠ¥å‘Šç”Ÿæˆã€æ•°æ®åŒæ­¥å’Œå‡å°‘äººå·¥å·¥ä½œã€‚"],
      ["Games", "æ¸¸æˆä¸Žä»¿çœŸ", "äº’åŠ¨æœºåˆ¶ã€æ¸¸æˆåŒ–ã€æ¨¡æ‹Ÿå™¨ã€Web ä½“éªŒå’Œæ²‰æµ¸å¼å­¦ä¹ ã€‚"],
      ["Robotics", "åº”ç”¨æœºå™¨äºº", "ä¼ æ„Ÿå™¨ã€æŽ§åˆ¶ã€é¥æµ‹ã€åŽŸåž‹ã€ç‰©ç†æ•°å­—ç³»ç»Ÿå’Œè¿è¥å¯è§†åŒ–ã€‚"]
    ]
  },
  industries: {
    title: "è¡Œä¸šç”¨ä¾‹",
    text: "æˆ‘ä»¬æŠŠè½¯ä»¶ã€AIã€æ¸¸æˆã€æœºå™¨äººå’ŒæŠ€æœ¯å’¨è¯¢åº”ç”¨åˆ°è¿è¥ã€å¢žé•¿å’Œæ•°å­—åŒ–é‡‡ç”¨çš„å…·ä½“é—®é¢˜ã€‚",
    cards: [
      ["ä¸“ä¸šæœåŠ¡", "è‡ªåŠ¨åŒ–å®¢æœã€æ–‡æ¡£å’Œå•†ä¸šè·Ÿè¿›", "ç”¨äºŽå›žå¤å®¢æˆ·ã€åˆ†ç±»è¯·æ±‚ã€ç”Ÿæˆæ–‡æ¡£ã€æŽ’åºæœºä¼šå¹¶è¡¡é‡ç”Ÿäº§åŠ›çš„ copilotsã€‚", "ç”³è¯· AI è¯Šæ–­"],
      ["é›¶å”®ä¸Žå•†ä¸š", "ç»Ÿä¸€é”€å”®ã€åº“å­˜ã€æ”¯æŒå’Œå®¢æˆ·æ•°æ®", "å†…éƒ¨é—¨æˆ·ã€ä»ªè¡¨ç›˜ã€å®¢æœä»£ç†ã€äº’åŠ¨æ´»åŠ¨å’Œå¯é‡å¤æµç¨‹è‡ªåŠ¨åŒ–ã€‚", "æŽ¢ç´¢è½¯ä»¶"],
      ["æ•™è‚²", "ç”¨ AI ä¸Žä»¿çœŸåˆ›å»ºå­¦ä¹ ä½“éªŒ", "æ•°å­—å­¦é™¢ã€AI å¯¼å¸ˆã€æ¨¡æ‹Ÿå™¨ã€äº’åŠ¨è¯„ä¼°ã€æ¸¸æˆåŒ–å’Œè¿›åº¦è¿½è¸ªã€‚", "åˆ›å»ºä½“éªŒ"],
      ["å¥åº·ä¸Ž wellness", "æ•´ç†ä¿¡æ¯ã€è·Ÿè¿›å’Œè¿è¥æ²Ÿé€š", "æ–‡æ¡£è‡ªåŠ¨åŒ–ã€æŽ’æœŸã€å†…éƒ¨é¢æ¿ã€æœåŠ¡æµç¨‹å’Œè¡Œæ”¿ä»»åŠ¡åŠ©æ‰‹ã€‚", "çŽ°ä»£åŒ–è¿è¥"],
      ["ç‰©æµä¸Žè¿è¥", "è¿žæŽ¥æµç¨‹ã€æ•°æ®ã€æé†’å’Œå¯è¿½æº¯æ€§", "è¿è¥ä»ªè¡¨ç›˜ã€å®¡æ‰¹æµç¨‹ã€æŠ¥å‘Šè‡ªåŠ¨åŒ–ã€ä»»åŠ¡è¿½è¸ªå’Œåº”ç”¨åˆ†æžã€‚", "è®¾è®¡è·¯çº¿å›¾"],
      ["å·¥ä¸šä¸Žåˆ¶é€ ", "é›†æˆä¼ æ„Ÿå™¨ã€è½¯ä»¶å’Œç‰©ç†æ•°å­—ç³»ç»Ÿ", "æœºå™¨äººåŽŸåž‹ã€é¥æµ‹ã€æŽ§åˆ¶ã€ç»´æŠ¤ã€æ•°æ®é‡‡é›†å’Œå…³é”®æµç¨‹å¯è§†åŒ–ã€‚", "æŽ¢ç´¢æœºå™¨äºº"]
    ]
  },
  faq: {
    title: "å¸¸è§é—®é¢˜",
    text: "ä»¥æ¸…æ™°ç­”æ¡ˆå¼€å¯å•†ä¸šæ²Ÿé€šï¼Œå»ºç«‹å…³äºŽèŒƒå›´ã€æ—¶é—´ã€å®‰å…¨å’Œæ”¯æŒçš„çŽ°å®žé¢„æœŸã€‚",
    items: [
      ["å…¸åž‹é¡¹ç›®éœ€è¦å¤šä¹…ï¼Ÿ", "å–å†³äºŽèŒƒå›´ã€‚è¯Šæ–­å¯èƒ½åªéœ€å‡ å¤©ï¼›åŠŸèƒ½åŽŸåž‹é€šå¸¸éœ€è¦æ•°å‘¨ï¼›å®Œæ•´å¹³å°æˆ–å®žæ–½ä¼šæŒ‰é˜¶æ®µå®šä¹‰ä»¥é™ä½Žé£Žé™©ã€‚"],
      ["æˆæœ¬å¦‚ä½•ç¡®å®šï¼Ÿ", "ä¼šæ ¹æ®èŒƒå›´ã€å¤æ‚åº¦ã€é›†æˆã€æ”¯æŒçº§åˆ«ã€ç´§æ€¥ç¨‹åº¦å’Œäº¤ä»˜ç‰©ä¼°ç®—ã€‚å› æ­¤å»ºè®®ç¬¬ä¸€æ­¥å…ˆåšè¯Šæ–­æ²Ÿé€šã€‚"],
      ["ä½ ä»¬å¤„ç†ä¿å¯†ä¿¡æ¯å—ï¼Ÿ", "æ˜¯çš„ã€‚æˆ‘ä»¬å¯ä»¥åœ¨ä¿å¯†åè®®ä¸‹å·¥ä½œï¼Œå¹¶æ ¹æ®é¡¹ç›®éœ€æ±‚å’Œå…¬å¸æ”¿ç­–é™åˆ¶æ•æ„Ÿæ•°æ®è®¿é—®ã€‚"],
      ["çŸ¥è¯†äº§æƒå¦‚ä½•å¤„ç†ï¼Ÿ", "çŸ¥è¯†äº§æƒä¼šæŒ‰é¡¹ç›®ç±»åž‹åœ¨åˆåŒä¸­çº¦å®šã€‚æˆ‘ä»¬å¯ä»¥ä¸ºå®¢æˆ·æž„å»ºå®šåˆ¶è½¯ä»¶ï¼Œä¹Ÿå¯ä»¥åœ¨æ¸…æ™°æ¡ä»¶ä¸‹æž„å»ºå¯å¤ç”¨ç»„ä»¶ã€‚"],
      ["å…¬å¸éœ€è¦å†…éƒ¨æŠ€æœ¯å›¢é˜Ÿå—ï¼Ÿ", "ä¸ä¸€å®šã€‚Tecnotitan å¯ä»¥ä»Žè¯Šæ–­æ”¯æŒåˆ°éƒ¨ç½²ã€‚å¦‚æžœå·²æœ‰å†…éƒ¨å›¢é˜Ÿï¼Œæˆ‘ä»¬ä¼šä½œä¸ºæŠ€æœ¯ä¼™ä¼´åŠ é€Ÿæž¶æž„ã€å¼€å‘å’Œé‡‡ç”¨ã€‚"],
      ["éƒ¨ç½²åŽæä¾›æ”¯æŒå—ï¼Ÿ", "æ˜¯çš„ã€‚å¯åŒ…å«ç»´æŠ¤ã€æ¼”è¿›å¼æ”¹è¿›ã€ç›‘æŽ§ã€æ–‡æ¡£ã€åŸ¹è®­å’Œè¿è¥æ”¯æŒï¼Œå…·ä½“å–å†³äºŽæ‰€éœ€æœåŠ¡çº§åˆ«ã€‚"],
      ["ä½ ä»¬å¦‚ä½•å¤„ç†å®‰å…¨å’Œæ•°æ®ï¼Ÿ", "æ¯ä¸ªæ–¹æ¡ˆéƒ½ä¼šè€ƒè™‘æƒé™ã€è®¿é—®æŽ§åˆ¶ã€å¯è¿½æº¯æ€§ã€æœ€å°æ•°æ®æš´éœ²ã€åˆé€‚ä¾›åº”å•†å’Œè´Ÿè´£ä»»çš„éƒ¨ç½²å®žè·µã€‚"],
      ["å¯ä»¥ä»Žå°é¡¹ç›®å¼€å§‹å—ï¼Ÿ", "å¯ä»¥ã€‚æˆ‘ä»¬å»ºè®®ä»Žè¯Šæ–­ã€MVP æˆ–å¯è¡¡é‡è¯•ç‚¹å¼€å§‹ï¼Œåœ¨æ›´å¤§æŠ•å…¥å‰éªŒè¯ä»·å€¼ã€‚"]
    ]
  },
  conversion: {
    title: "é€‰æ‹©ä¸‹ä¸€æ­¥",
    text: "å•†ä¸šå¿«æ·å…¥å£ä¼šæŠŠè®¿å®¢å¸¦åˆ°å·²é¢„é€‰æ­£ç¡®æœåŠ¡çš„è¡¨å•ã€‚",
    cards: [
      ["AI", "ç”³è¯· AI è¯Šæ–­", "è¯†åˆ«è‡ªåŠ¨åŒ–ã€æ™ºèƒ½ä»£ç†ã€copilot å’Œå…·å¤‡è¿è¥å›žæŠ¥çš„ç”¨ä¾‹ã€‚"],
      ["Software", "ä¼°ç®—ä¼ä¸šè½¯ä»¶", "æž„å»ºå¹³å°ã€å†…éƒ¨ CRMã€ä»ªè¡¨ç›˜ã€é—¨æˆ·å’Œç³»ç»Ÿé›†æˆã€‚"],
      ["Advisory", "é¢„çº¦æŠ€æœ¯å’¨è¯¢", "å®šä¹‰æŠ€æœ¯è·¯çº¿å›¾ã€æž¶æž„ã€é‡‡ç”¨è·¯å¾„å’Œé«˜ç®¡ä¼˜å…ˆçº§ã€‚"],
      ["Robotics", "æŽ¢ç´¢åº”ç”¨æœºå™¨äºº", "è¿žæŽ¥ä¼ æ„Ÿå™¨ã€è½¯ä»¶ã€é¥æµ‹å’Œç‰©ç†æ•°å­—ç³»ç»Ÿã€‚"],
      ["Interactive", "åˆ›å»ºäº’åŠ¨ä½“éªŒ", "ç”¨äºŽæ¨¡æ‹Ÿå™¨ã€ç”µå­æ¸¸æˆã€æ¸¸æˆåŒ–ã€åŸ¹è®­å’Œ Web ä½“éªŒã€‚"],
      ["Transformation", "è®¾è®¡æŠ€æœ¯è½¬åž‹", "çŽ°ä»£åŒ–æµç¨‹ã€è‡ªåŠ¨åŒ–è¿è¥å¹¶åŠ é€Ÿæ•°å­—åŒ–é‡‡ç”¨ã€‚"]
    ]
  },
  form: {
    kicker: "å•†ä¸šéœ€æ±‚",
    title: "å‘Šè¯‰æˆ‘ä»¬ä½ çš„å…¬å¸éœ€è¦æž„å»ºä»€ä¹ˆ",
    text: "æ­¤è¡¨å•é€‚ç”¨äºŽ AIã€è½¯ä»¶ã€å’¨è¯¢ã€æœºå™¨äººã€ç”µå­æ¸¸æˆæˆ–æŠ€æœ¯è½¬åž‹é¡¹ç›®ã€‚",
    successTitle: "è¯·æ±‚å·²å‘é€",
    successText: "è°¢è°¢ã€‚æˆ‘ä»¬å·²æ”¶åˆ°ä½ çš„æœåŠ¡è¯·æ±‚ï¼Œå¹¶å°†é€šè¿‡ info@tecnotitan.com å›žå¤ã€‚",
    labels: ["å§“å", "é‚®ç®±", "å…¬å¸", "å›½å®¶", "æ„Ÿå…´è¶£çš„æœåŠ¡", "å…¬å¸è§„æ¨¡", "é¢„ç®—èŒƒå›´", "ç´§æ€¥ç¨‹åº¦", "æ¶ˆæ¯"],
    serviceOptions: ["é€‰æ‹©", "äººå·¥æ™ºèƒ½", "ä¼ä¸šè½¯ä»¶", "æŠ€æœ¯å’¨è¯¢", "æœºå™¨äºº", "ç”µå­æ¸¸æˆä¸Žäº’åŠ¨ä½“éªŒ", "æŠ€æœ¯è½¬åž‹"],
    companySizeOptions: ["é€‰æ‹©", "1-10 äºº", "11-50 äºº", "51-200 äºº", "201-1000 äºº", "1000 äººä»¥ä¸Š"],
    budgetOptions: ["é€‰æ‹©", "ä½ŽäºŽ USD 5K", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "å¾…å®š"],
    urgencyOptions: ["é€‰æ‹©", "æœ¬æœˆ", "1-3 ä¸ªæœˆ", "3-6 ä¸ªæœˆ", "æŽ¢ç´¢é˜¶æ®µ"],
    placeholder: "å‘Šè¯‰æˆ‘ä»¬ä½ æƒ³æ”¹è¿›çš„é—®é¢˜ã€ç›®æ ‡æˆ–æµç¨‹ã€‚",
    newsletter: "æˆ‘æƒ³è®¢é˜… Tecnotitan å®˜æ–¹ newsletterã€‚",
    button: "ç”³è¯·å•†ä¸šæ²Ÿé€š"
  }
};

servicePageTranslations.ja = {
  serviceIndex: {
    title: "å°‚é–€ã‚µãƒ¼ãƒ“ã‚¹",
    text: "å„ã‚µãƒ¼ãƒ“ã‚¹ãƒ©ã‚¤ãƒ³ã®ç„¦ç‚¹ã€æˆæžœç‰©ã€ä¼æ¥­ã¸ã®æœŸå¾…ã‚¤ãƒ³ãƒ‘ã‚¯ãƒˆã‚’ç¢ºèªã§ãã¾ã™ã€‚",
    cards: [
      ["AI", "äººå·¥çŸ¥èƒ½", "ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€copilotã€æ–‡æ›¸è‡ªå‹•åŒ–ã€åˆ†æžã€ã‚¹ãƒžãƒ¼ãƒˆãƒ¯ãƒ¼ã‚¯ãƒ•ãƒ­ãƒ¼ã€‚"],
      ["SW", "ä¼æ¥­ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢", "Web ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€ç¤¾å†… CRMã€ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€ãƒãƒ¼ã‚¿ãƒ«ã€é€£æºã€‚"],
      ["AD", "æŠ€è¡“ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°", "è¨ºæ–­ã€ã‚¢ãƒ¼ã‚­ãƒ†ã‚¯ãƒãƒ£ã€ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—ã€å°Žå…¥ã€çµŒå–¶å±¤æ”¯æ´ã€‚"],
      ["RB", "ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹", "é‹ç”¨ã«ã¤ãªãŒã‚‹ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ã‚»ãƒ³ã‚µãƒ¼ã€ãƒ‡ãƒ¼ã‚¿ã€ãƒ•ã‚£ã‚¸ã‚«ãƒ«ãƒ‡ã‚¸ã‚¿ãƒ«ã‚·ã‚¹ãƒ†ãƒ ã€‚"],
      ["VG", "ã‚²ãƒ¼ãƒ ", "ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚¿ãƒ¼ã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“ã€ã‚²ãƒ¼ãƒŸãƒ•ã‚£ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã€æ²¡å…¥åž‹ãƒˆãƒ¬ãƒ¼ãƒ‹ãƒ³ã‚°ã€‚"],
      ["TX", "æŠ€è¡“å¤‰é©", "æ¥­å‹™è¿‘ä»£åŒ–ã€è‡ªå‹•åŒ–ã€ãƒ‡ã‚¸ã‚¿ãƒ«å°Žå…¥ã€çµ„ç¹”å¤‰é©ã€‚"]
    ]
  },
  method: {
    title: "é€²ã‚æ–¹",
    text: "è¨ºæ–­ã‹ã‚‰ãƒ‡ãƒ—ãƒ­ã‚¤ã¾ã§ã€å„æ®µéšŽã§æ˜Žç¢ºãªæˆæžœç‰©ã¨æ„æ€æ±ºå®šã‚’æŒã¤ãƒ—ãƒ­ã‚»ã‚¹ã§ã™ã€‚",
    cards: [
      ["01", "è¨ºæ–­", "ãƒ—ãƒ­ã‚»ã‚¹ã€ãƒ‡ãƒ¼ã‚¿ã€ãƒ„ãƒ¼ãƒ«ã€ãƒ¦ãƒ¼ã‚¶ãƒ¼ã€åˆ¶ç´„ã€ã‚¤ãƒ³ãƒ‘ã‚¯ãƒˆæ©Ÿä¼šã‚’ç†è§£ã—ã¾ã™ã€‚", "æˆæžœç‰©ï¼šæ©Ÿä¼šãƒžãƒƒãƒ—"],
      ["02", "è¨­è¨ˆ", "ã‚¢ãƒ¼ã‚­ãƒ†ã‚¯ãƒãƒ£ã€ç¯„å›²ã€ä½“é¨“ã€é€£æºã€ãƒªã‚¹ã‚¯ã€æˆåŠŸåŸºæº–ã‚’å®šç¾©ã—ã¾ã™ã€‚", "æˆæžœç‰©ï¼šæŠ€è¡“ãƒ»æ©Ÿèƒ½è¨ˆç”»"],
      ["03", "é–‹ç™º", "ã‚·ã‚¹ãƒ†ãƒ ã€ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€ãƒ—ãƒ­ãƒˆã‚¿ã‚¤ãƒ—ã€è‡ªå‹•åŒ–ã‚’çŸ­ã„ã‚µã‚¤ã‚¯ãƒ«ã§æ§‹ç¯‰ã—ã¾ã™ã€‚", "æˆæžœç‰©ï¼šæ©Ÿèƒ½ç‰ˆ"],
      ["04", "æ¤œè¨¼", "å®Ÿãƒ¦ãƒ¼ã‚¶ãƒ¼ã€ãƒ‡ãƒ¼ã‚¿ã€ã‚·ãƒŠãƒªã‚ªã§ä½“é¨“ã€ç²¾åº¦ã€ãƒ•ãƒ­ãƒ¼ã‚’èª¿æ•´ã—ã¾ã™ã€‚", "æˆæžœç‰©ï¼šæ¤œè¨¼ãƒ¬ãƒãƒ¼ãƒˆ"],
      ["05", "ãƒ‡ãƒ—ãƒ­ã‚¤", "å…¬é–‹ã€é€£æºã€æ–‡æ›¸åŒ–ã‚’è¡Œã„ã€é‹ç”¨åˆ©ç”¨ã§ãã‚‹çŠ¶æ…‹ã«ã—ã¾ã™ã€‚", "æˆæžœç‰©ï¼šæœ¬ç•ªã‚·ã‚¹ãƒ†ãƒ "],
      ["06", "ã‚µãƒãƒ¼ãƒˆ", "å°Žå…¥çŠ¶æ³ã‚’æ¸¬å®šã—ã€æ‘©æ“¦ã‚’æ¸›ã‚‰ã—ã€æ”¹å–„ã‚’å„ªå…ˆã—ã€èƒ½åŠ›ç§»è»¢ã—ã¾ã™ã€‚", "æˆæžœç‰©ï¼šé€²åŒ–è¨ˆç”»"]
    ]
  },
  technology: {
    title: "æŠ€è¡“ã¨èƒ½åŠ›",
    text: "å½±éŸ¿ã€ä¿å®ˆæ€§ã€ä¼æ¥­å†…ã§ã®æ‹¡å¼µæ€§ã‚’åŸºæº–ã«ã€ç¾ä»£çš„ãªãƒ„ãƒ¼ãƒ«ã‚’é‹ç”¨è¦–ç‚¹ã§çµ±åˆã—ã¾ã™ã€‚",
    cards: [
      ["AI", "ç”Ÿæˆ AI", "è¨€èªžãƒ¢ãƒ‡ãƒ«ã€æ–‡æ›¸æ”¯æ´ã€åˆ†é¡žã€æŠ½å‡ºã€ç”Ÿæˆã€æƒ…å ±åˆ†æžã€‚"],
      ["Agents", "ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã¨ copilots", "ãƒ—ãƒ­ã‚»ã‚¹ã€ãƒ‡ãƒ¼ã‚¿ã€ç¤¾å†…ãƒ„ãƒ¼ãƒ«ã€ã‚µãƒãƒ¼ãƒˆã€å–¶æ¥­ã€é‹ç”¨ã«æŽ¥ç¶šã•ã‚ŒãŸã‚¢ã‚·ã‚¹ã‚¿ãƒ³ãƒˆã€‚"],
      ["APIs", "é€£æº", "ãƒ•ã‚©ãƒ¼ãƒ ã€CRMã€ãƒ‡ãƒ¼ã‚¿ãƒ™ãƒ¼ã‚¹ã€ãƒ¡ãƒ¼ãƒ«ã€ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€è‡ªå‹•åŒ–ã€æ—¢å­˜ã‚·ã‚¹ãƒ†ãƒ ã®æŽ¥ç¶šã€‚"],
      ["Data", "ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã¨åˆ†æž", "æŒ‡æ¨™ã€çµŒå–¶ãƒ¬ãƒãƒ¼ãƒˆã€ãƒ—ãƒ­ã‚»ã‚¹è¿½è·¡ã€å¯è¦–åŒ–ã€å®Ÿè¡Œå¯èƒ½ãªãƒ‡ãƒ¼ã‚¿èª­è§£ã€‚"],
      ["Cloud", "Web ã¨ã‚¯ãƒ©ã‚¦ãƒ‰", "Web ã‚¢ãƒ—ãƒªã€serverless é–¢æ•°ã€ç¶™ç¶šãƒ‡ãƒ—ãƒ­ã‚¤ã€ã‚¹ãƒˆãƒ¬ãƒ¼ã‚¸ã€ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã€å¯è¦³æ¸¬æ€§ã€‚"],
      ["Automation", "è‡ªå‹•åŒ–", "åå¾©å¯èƒ½ãªãƒ•ãƒ­ãƒ¼ã€ã‚¢ãƒ©ãƒ¼ãƒˆã€ãƒ¬ãƒãƒ¼ãƒˆç”Ÿæˆã€ãƒ‡ãƒ¼ã‚¿åŒæœŸã€æ‰‹ä½œæ¥­å‰Šæ¸›ã€‚"],
      ["Games", "ã‚²ãƒ¼ãƒ ã¨ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³", "ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ãªä»•çµ„ã¿ã€ã‚²ãƒ¼ãƒŸãƒ•ã‚£ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã€ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚¿ãƒ¼ã€Web ä½“é¨“ã€æ²¡å…¥åž‹å­¦ç¿’ã€‚"],
      ["Robotics", "å¿œç”¨ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹", "ã‚»ãƒ³ã‚µãƒ¼ã€åˆ¶å¾¡ã€ãƒ†ãƒ¬ãƒ¡ãƒˆãƒªãƒ¼ã€ãƒ—ãƒ­ãƒˆã‚¿ã‚¤ãƒ—ã€ãƒ•ã‚£ã‚¸ã‚«ãƒ«ãƒ‡ã‚¸ã‚¿ãƒ«ã‚·ã‚¹ãƒ†ãƒ ã€é‹ç”¨å¯è¦–åŒ–ã€‚"]
    ]
  },
  industries: {
    title: "æ¥­ç•Œåˆ¥ãƒ¦ãƒ¼ã‚¹ã‚±ãƒ¼ã‚¹",
    text: "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€ã‚²ãƒ¼ãƒ ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€æŠ€è¡“ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã‚’ã€é‹ç”¨ãƒ»æˆé•·ãƒ»ãƒ‡ã‚¸ã‚¿ãƒ«å°Žå…¥ã®å…·ä½“èª²é¡Œã«é©ç”¨ã—ã¾ã™ã€‚",
    cards: [
      ["ãƒ—ãƒ­ãƒ•ã‚§ãƒƒã‚·ãƒ§ãƒŠãƒ«ã‚µãƒ¼ãƒ“ã‚¹", "å¯¾å¿œã€æ–‡æ›¸ã€å–¶æ¥­ãƒ•ã‚©ãƒ­ãƒ¼ã‚’è‡ªå‹•åŒ–", "é¡§å®¢å¯¾å¿œã€ä¾é ¼åˆ†é¡žã€æ–‡æ›¸ç”Ÿæˆã€æ©Ÿä¼šå„ªå…ˆé †ä½ä»˜ã‘ã€ç”Ÿç”£æ€§æ¸¬å®šã®ãŸã‚ã® copilotsã€‚", "AI è¨ºæ–­ã‚’ä¾é ¼"],
      ["å°å£²ãƒ»ã‚³ãƒžãƒ¼ã‚¹", "è²©å£²ã€åœ¨åº«ã€ã‚µãƒãƒ¼ãƒˆã€é¡§å®¢ãƒ‡ãƒ¼ã‚¿ã‚’çµ±åˆ", "ç¤¾å†…ãƒãƒ¼ã‚¿ãƒ«ã€ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€å¯¾å¿œã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ã‚­ãƒ£ãƒ³ãƒšãƒ¼ãƒ³ã€åå¾©ãƒ—ãƒ­ã‚»ã‚¹è‡ªå‹•åŒ–ã€‚", "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã‚’è¦‹ã‚‹"],
      ["æ•™è‚²", "AI ã¨ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³ã§å­¦ç¿’ä½“é¨“ã‚’ä½œã‚‹", "ãƒ‡ã‚¸ã‚¿ãƒ«ã‚¢ã‚«ãƒ‡ãƒŸãƒ¼ã€AI ãƒãƒ¥ãƒ¼ã‚¿ãƒ¼ã€ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚¿ãƒ¼ã€ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–è©•ä¾¡ã€ã‚²ãƒ¼ãƒŸãƒ•ã‚£ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã€é€²æ—è¿½è·¡ã€‚", "ä½“é¨“ã‚’ä½œã‚‹"],
      ["ãƒ˜ãƒ«ã‚¹ã‚±ã‚¢ãƒ»ã‚¦ã‚§ãƒ«ãƒã‚¹", "æƒ…å ±ã€ãƒ•ã‚©ãƒ­ãƒ¼ã€é‹ç”¨ã‚³ãƒŸãƒ¥ãƒ‹ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã‚’æ•´ç†", "æ–‡æ›¸è‡ªå‹•åŒ–ã€äºˆç´„ã€ç¤¾å†…ãƒ‘ãƒãƒ«ã€å¯¾å¿œãƒ•ãƒ­ãƒ¼ã€ç®¡ç†æ¥­å‹™ã‚¢ã‚·ã‚¹ã‚¿ãƒ³ãƒˆã€‚", "é‹ç”¨ã‚’è¿‘ä»£åŒ–"],
      ["ç‰©æµãƒ»ã‚ªãƒšãƒ¬ãƒ¼ã‚·ãƒ§ãƒ³", "ãƒ—ãƒ­ã‚»ã‚¹ã€ãƒ‡ãƒ¼ã‚¿ã€ã‚¢ãƒ©ãƒ¼ãƒˆã€ãƒˆãƒ¬ãƒ¼ã‚µãƒ“ãƒªãƒ†ã‚£ã‚’æŽ¥ç¶š", "é‹ç”¨ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€æ‰¿èªãƒ•ãƒ­ãƒ¼ã€ãƒ¬ãƒãƒ¼ãƒˆè‡ªå‹•åŒ–ã€ã‚¿ã‚¹ã‚¯è¿½è·¡ã€å¿œç”¨åˆ†æžã€‚", "ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—è¨­è¨ˆ"],
      ["ç”£æ¥­ãƒ»è£½é€ ", "ã‚»ãƒ³ã‚µãƒ¼ã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ãƒ•ã‚£ã‚¸ã‚«ãƒ«ãƒ‡ã‚¸ã‚¿ãƒ«ã‚·ã‚¹ãƒ†ãƒ ã‚’çµ±åˆ", "ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹è©¦ä½œã€ãƒ†ãƒ¬ãƒ¡ãƒˆãƒªãƒ¼ã€åˆ¶å¾¡ã€ä¿å®ˆã€ãƒ‡ãƒ¼ã‚¿å–å¾—ã€é‡è¦ãƒ—ãƒ­ã‚»ã‚¹å¯è¦–åŒ–ã€‚", "ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã‚’è¦‹ã‚‹"]
    ]
  },
  faq: {
    title: "ã‚ˆãã‚ã‚‹è³ªå•",
    text: "ç¯„å›²ã€æœŸé–“ã€ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã€ã‚µãƒãƒ¼ãƒˆã«ã¤ã„ã¦ç¾å®Ÿçš„ãªæœŸå¾…å€¤ã§å•†è«‡ã‚’å§‹ã‚ã‚‹ãŸã‚ã®æ˜Žç¢ºãªå›žç­”ã§ã™ã€‚",
    items: [
      ["ä¸€èˆ¬çš„ãªãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆæœŸé–“ã¯ï¼Ÿ", "ç¯„å›²ã«ã‚ˆã‚Šã¾ã™ã€‚è¨ºæ–­ã¯æ•°æ—¥ã€æ©Ÿèƒ½ãƒ—ãƒ­ãƒˆã‚¿ã‚¤ãƒ—ã¯é€šå¸¸æ•°é€±é–“ã€å®Œå…¨ãªãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã‚„å®Ÿè£…ã¯ãƒªã‚¹ã‚¯ã‚’ä¸‹ã’ã‚‹ãŸã‚æ®µéšŽçš„ã«å®šç¾©ã—ã¾ã™ã€‚"],
      ["è²»ç”¨ã¯ã©ã†æ±ºã¾ã‚Šã¾ã™ã‹ï¼Ÿ", "ç¯„å›²ã€è¤‡é›‘æ€§ã€é€£æºã€ã‚µãƒãƒ¼ãƒˆãƒ¬ãƒ™ãƒ«ã€ç·Šæ€¥åº¦ã€æˆæžœç‰©ã«åŸºã¥ã„ã¦è¦‹ç©ã‚‚ã‚Šã¾ã™ã€‚ãã®ãŸã‚æœ€åˆã®è¨ºæ–­ç›¸è«‡ã‚’æŽ¨å¥¨ã—ã¾ã™ã€‚"],
      ["æ©Ÿå¯†æƒ…å ±ã‚’æ‰±ãˆã¾ã™ã‹ï¼Ÿ", "ã¯ã„ã€‚ç§˜å¯†ä¿æŒå¥‘ç´„ã®ã‚‚ã¨ã§ä½œæ¥­ã—ã€ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆè¦ä»¶ã¨ä¼æ¥­ãƒãƒªã‚·ãƒ¼ã«å¿œã˜ã¦æ©Ÿå¯†ãƒ‡ãƒ¼ã‚¿ã¸ã®ã‚¢ã‚¯ã‚»ã‚¹ã‚’åˆ¶é™ã§ãã¾ã™ã€‚"],
      ["çŸ¥çš„è²¡ç”£ã¯ã©ã†ãªã‚Šã¾ã™ã‹ï¼Ÿ", "çŸ¥çš„è²¡ç”£ã¯ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆç¨®åˆ¥ã«å¿œã˜ã¦å¥‘ç´„ã§åˆæ„ã—ã¾ã™ã€‚é¡§å®¢å‘ã‘ã‚«ã‚¹ã‚¿ãƒ ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ã¾ãŸã¯æ˜Žç¢ºãªæ¡ä»¶ã®å†åˆ©ç”¨å¯èƒ½ã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆã‚’æ§‹ç¯‰ã§ãã¾ã™ã€‚"],
      ["ç¤¾å†…æŠ€è¡“ãƒãƒ¼ãƒ ã¯å¿…è¦ã§ã™ã‹ï¼Ÿ", "å¿…é ˆã§ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚Tecnotitan ã¯è¨ºæ–­ã‹ã‚‰ãƒ‡ãƒ—ãƒ­ã‚¤ã¾ã§æ”¯æ´ã§ãã¾ã™ã€‚ç¤¾å†…ãƒãƒ¼ãƒ ãŒã‚ã‚‹å ´åˆã¯æŠ€è¡“ãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã¨ã—ã¦åŠ é€Ÿã—ã¾ã™ã€‚"],
      ["ãƒ‡ãƒ—ãƒ­ã‚¤å¾Œã®ã‚µãƒãƒ¼ãƒˆã¯ã‚ã‚Šã¾ã™ã‹ï¼Ÿ", "ã¯ã„ã€‚å¿…è¦ãªã‚µãƒ¼ãƒ“ã‚¹ãƒ¬ãƒ™ãƒ«ã«å¿œã˜ã¦ã€ä¿å®ˆã€æ”¹å–„ã€ç›£è¦–ã€æ–‡æ›¸åŒ–ã€ãƒˆãƒ¬ãƒ¼ãƒ‹ãƒ³ã‚°ã€é‹ç”¨ã‚µãƒãƒ¼ãƒˆã‚’å«ã‚ã‚‰ã‚Œã¾ã™ã€‚"],
      ["ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã¨ãƒ‡ãƒ¼ã‚¿ã¯ã©ã†æ‰±ã„ã¾ã™ã‹ï¼Ÿ", "æ¨©é™ã€ã‚¢ã‚¯ã‚»ã‚¹åˆ¶å¾¡ã€è¿½è·¡æ€§ã€æœ€å°é™ã®ãƒ‡ãƒ¼ã‚¿éœ²å‡ºã€é©åˆ‡ãªãƒ—ãƒ­ãƒã‚¤ãƒ€ãƒ¼ã€è²¬ä»»ã‚ã‚‹ãƒ‡ãƒ—ãƒ­ã‚¤ã‚’è€ƒæ…®ã—ã¦è¨­è¨ˆã—ã¾ã™ã€‚"],
      ["å°ã•ãå§‹ã‚ã‚‰ã‚Œã¾ã™ã‹ï¼Ÿ", "ã¯ã„ã€‚è¨ºæ–­ã€MVPã€æ¸¬å®šå¯èƒ½ãªãƒ‘ã‚¤ãƒ­ãƒƒãƒˆã‹ã‚‰å§‹ã‚ã‚‹ã“ã¨ã‚’æŽ¨å¥¨ã—ã¾ã™ã€‚å¤§ããªæŠ•è³‡ã®å‰ã«ä¾¡å€¤ã‚’æ¤œè¨¼ã§ãã¾ã™ã€‚"]
    ]
  },
  conversion: {
    title: "æ¬¡ã®ã‚¹ãƒ†ãƒƒãƒ—ã‚’é¸æŠž",
    text: "é©åˆ‡ãªã‚µãƒ¼ãƒ“ã‚¹ãŒäº‹å‰é¸æŠžã•ã‚ŒãŸãƒ•ã‚©ãƒ¼ãƒ ã¸é€²ã‚€ãŸã‚ã®å•†è«‡ã‚·ãƒ§ãƒ¼ãƒˆã‚«ãƒƒãƒˆã§ã™ã€‚",
    cards: [
      ["AI", "AI è¨ºæ–­ã‚’ä¾é ¼", "è‡ªå‹•åŒ–ã€ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€copilotã€é‹ç”¨ãƒªã‚¿ãƒ¼ãƒ³ã®ã‚ã‚‹ãƒ¦ãƒ¼ã‚¹ã‚±ãƒ¼ã‚¹ã‚’ç‰¹å®šã—ã¾ã™ã€‚"],
      ["Software", "ä¼æ¥­ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã‚’è¦‹ç©ã‚‚ã‚‹", "ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ã€ç¤¾å†… CRMã€ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€ãƒãƒ¼ã‚¿ãƒ«ã€é€£æºã‚’æ§‹ç¯‰ã—ã¾ã™ã€‚"],
      ["Advisory", "ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã‚’äºˆç´„", "æŠ€è¡“ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—ã€ã‚¢ãƒ¼ã‚­ãƒ†ã‚¯ãƒãƒ£ã€å°Žå…¥ã€çµŒå–¶å„ªå…ˆåº¦ã‚’å®šç¾©ã—ã¾ã™ã€‚"],
      ["Robotics", "å¿œç”¨ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã‚’æ¤œè¨Ž", "ã‚»ãƒ³ã‚µãƒ¼ã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ãƒ†ãƒ¬ãƒ¡ãƒˆãƒªãƒ¼ã€ãƒ•ã‚£ã‚¸ã‚«ãƒ«ãƒ‡ã‚¸ã‚¿ãƒ«ã‚·ã‚¹ãƒ†ãƒ ã‚’æŽ¥ç¶šã—ã¾ã™ã€‚"],
      ["Interactive", "ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“ã‚’ä½œã‚‹", "ã‚·ãƒŸãƒ¥ãƒ¬ãƒ¼ã‚¿ãƒ¼ã€ã‚²ãƒ¼ãƒ ã€ã‚²ãƒ¼ãƒŸãƒ•ã‚£ã‚±ãƒ¼ã‚·ãƒ§ãƒ³ã€ç ”ä¿®ã€Web ä½“é¨“å‘ã‘ã§ã™ã€‚"],
      ["Transformation", "æŠ€è¡“å¤‰é©ã‚’è¨­è¨ˆ", "ãƒ—ãƒ­ã‚»ã‚¹ã‚’è¿‘ä»£åŒ–ã—ã€é‹ç”¨ã‚’è‡ªå‹•åŒ–ã—ã€ãƒ‡ã‚¸ã‚¿ãƒ«å°Žå…¥ã‚’åŠ é€Ÿã—ã¾ã™ã€‚"]
    ]
  },
  form: {
    kicker: "å•†è«‡ãƒªã‚¯ã‚¨ã‚¹ãƒˆ",
    title: "è²´ç¤¾ãŒæ§‹ç¯‰ã—ãŸã„ã‚‚ã®ã‚’æ•™ãˆã¦ãã ã•ã„",
    text: "AIã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ã€ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹ã€ã‚²ãƒ¼ãƒ ã€æŠ€è¡“å¤‰é©ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆå‘ã‘ã®ãƒ•ã‚©ãƒ¼ãƒ ã§ã™ã€‚",
    successTitle: "é€ä¿¡ã•ã‚Œã¾ã—ãŸ",
    successText: "ã‚ã‚ŠãŒã¨ã†ã”ã–ã„ã¾ã™ã€‚ã‚µãƒ¼ãƒ“ã‚¹ä¾é ¼ã‚’å—ã‘å–ã‚Šã¾ã—ãŸã€‚info@tecnotitan.com ã‹ã‚‰è¿”ä¿¡ã—ã¾ã™ã€‚",
    labels: ["æ°å", "ãƒ¡ãƒ¼ãƒ«", "ä¼šç¤¾", "å›½", "é–¢å¿ƒã®ã‚ã‚‹ã‚µãƒ¼ãƒ“ã‚¹", "ä¼šç¤¾è¦æ¨¡", "æ¦‚ç®—äºˆç®—", "ç·Šæ€¥åº¦", "ãƒ¡ãƒƒã‚»ãƒ¼ã‚¸"],
    serviceOptions: ["é¸æŠž", "äººå·¥çŸ¥èƒ½", "ä¼æ¥­ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢", "æŠ€è¡“ã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°", "ãƒ­ãƒœãƒ†ã‚£ã‚¯ã‚¹", "ã‚²ãƒ¼ãƒ ã¨ã‚¤ãƒ³ã‚¿ãƒ©ã‚¯ãƒ†ã‚£ãƒ–ä½“é¨“", "æŠ€è¡“å¤‰é©"],
    companySizeOptions: ["é¸æŠž", "1-10 äºº", "11-50 äºº", "51-200 äºº", "201-1000 äºº", "1000 äººä»¥ä¸Š"],
    budgetOptions: ["é¸æŠž", "USD 5K æœªæº€", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "æœªå®š"],
    urgencyOptions: ["é¸æŠž", "ä»Šæœˆ", "1-3 ã‹æœˆ", "3-6 ã‹æœˆ", "æŽ¢ç´¢ä¸­"],
    placeholder: "æ”¹å–„ã—ãŸã„å•é¡Œã€ç›®çš„ã€ãƒ—ãƒ­ã‚»ã‚¹ã‚’æ•™ãˆã¦ãã ã•ã„ã€‚",
    newsletter: "Tecnotitan å…¬å¼ newsletter ã‚’è³¼èª­ã—ãŸã„ã§ã™ã€‚",
    button: "å•†è«‡ã‚’ä¾é ¼"
  }
};

servicePageTranslations.ko = {
  serviceIndex: {
    title: "ì „ë¬¸ ì„œë¹„ìŠ¤",
    text: "ê° ì„œë¹„ìŠ¤ ë¼ì¸ì˜ ì´ˆì , ì‚°ì¶œë¬¼, ê¸°ì—…ì— ê¸°ëŒ€ë˜ëŠ” ì˜í–¥ì„ í™•ì¸í•˜ì„¸ìš”.",
    cards: [
      ["AI", "ì¸ê³µì§€ëŠ¥", "ì—ì´ì „íŠ¸, copilot, ë¬¸ì„œ ìžë™í™”, ë¶„ì„, ì§€ëŠ¥í˜• ì›Œí¬í”Œë¡œìš°."],
      ["SW", "ê¸°ì—… ì†Œí”„íŠ¸ì›¨ì–´", "ì›¹ í”Œëž«í¼, ë‚´ë¶€ CRM, ëŒ€ì‹œë³´ë“œ, í¬í„¸, í†µí•©."],
      ["AD", "ê¸°ìˆ  ì»¨ì„¤íŒ…", "ì§„ë‹¨, ì•„í‚¤í…ì²˜, ë¡œë“œë§µ, ë„ìž…, ê²½ì˜ì§„ ì§€ì›."],
      ["RB", "ë¡œë³´í‹±ìŠ¤", "ìš´ì˜ê³¼ ì—°ê²°ë˜ëŠ” ì†Œí”„íŠ¸ì›¨ì–´, ì„¼ì„œ, ë°ì´í„°, ë¬¼ë¦¬-ë””ì§€í„¸ ì‹œìŠ¤í…œ."],
      ["VG", "ë¹„ë””ì˜¤ê²Œìž„", "ì‹œë®¬ë ˆì´í„°, ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜, ê²Œì´ë¯¸í”¼ì¼€ì´ì…˜, ëª°ìž…í˜• êµìœ¡."],
      ["TX", "ê¸°ìˆ  ì „í™˜", "ìš´ì˜ í˜„ëŒ€í™”, ìžë™í™”, ë””ì§€í„¸ ë„ìž…, ì¡°ì§ ë³€í™”."]
    ]
  },
  method: {
    title: "ì¼í•˜ëŠ” ë°©ì‹",
    text: "ì§„ë‹¨ë¶€í„° ë°°í¬ê¹Œì§€ ê° ë‹¨ê³„ì—ì„œ ëª…í™•í•œ ì‚°ì¶œë¬¼ê³¼ ì§„í–‰ ê²°ì •ì„ ê°–ì¶˜ í”„ë¡œì„¸ìŠ¤ìž…ë‹ˆë‹¤.",
    cards: [
      ["01", "ì§„ë‹¨", "í”„ë¡œì„¸ìŠ¤, ë°ì´í„°, ë„êµ¬, ì‚¬ìš©ìž, ì œì•½, ì˜í–¥ ê¸°íšŒë¥¼ ì´í•´í•©ë‹ˆë‹¤.", "ì‚°ì¶œë¬¼: ê¸°íšŒ ì§€ë„"],
      ["02", "ì„¤ê³„", "ì•„í‚¤í…ì²˜, ë²”ìœ„, ê²½í—˜, í†µí•©, ìœ„í—˜, ì„±ê³µ ê¸°ì¤€ì„ ì •ì˜í•©ë‹ˆë‹¤.", "ì‚°ì¶œë¬¼: ê¸°ìˆ  ë° ê¸°ëŠ¥ ê³„íš"],
      ["03", "ê°œë°œ", "ì‹œìŠ¤í…œ, ì—ì´ì „íŠ¸, í”Œëž«í¼, í”„ë¡œí† íƒ€ìž… ë˜ëŠ” ìžë™í™”ë¥¼ ì§§ì€ ì£¼ê¸°ë¡œ êµ¬ì¶•í•©ë‹ˆë‹¤.", "ì‚°ì¶œë¬¼: ê¸°ëŠ¥ ë²„ì „"],
      ["04", "ê²€ì¦", "ì‚¬ìš©ìž, ë°ì´í„°, ì‹¤ì œ ì‹œë‚˜ë¦¬ì˜¤ë¡œ ê²½í—˜, ì •í™•ë„, íë¦„ì„ ì¡°ì •í•©ë‹ˆë‹¤.", "ì‚°ì¶œë¬¼: ê²€ì¦ ë³´ê³ ì„œ"],
      ["05", "ë°°í¬", "ê²Œì‹œ, í†µí•©, ë¬¸ì„œí™”ë¥¼ í†µí•´ ì‹œìŠ¤í…œì„ ìš´ì˜ ì‚¬ìš© ê°€ëŠ¥í•œ ìƒíƒœë¡œ ë§Œë“­ë‹ˆë‹¤.", "ì‚°ì¶œë¬¼: í”„ë¡œë•ì…˜ ì‹œìŠ¤í…œ"],
      ["06", "ì§€ì›", "ë„ìž…ë¥ ì„ ì¸¡ì •í•˜ê³  ë§ˆì°°ì„ ì¤„ì´ë©° ê°œì„  ìš°ì„ ìˆœìœ„ë¥¼ ì •í•˜ê³  ì—­ëŸ‰ì„ ì´ì „í•©ë‹ˆë‹¤.", "ì‚°ì¶œë¬¼: ë°œì „ ê³„íš"]
    ]
  },
  technology: {
    title: "ê¸°ìˆ ê³¼ ì—­ëŸ‰",
    text: "ì˜í–¥, ìœ ì§€ë³´ìˆ˜ì„±, ê¸°ì—… ë‚´ í™•ìž¥ì„±ì„ ê¸°ì¤€ìœ¼ë¡œ í˜„ëŒ€ì  ë„êµ¬ë¥¼ ìš´ì˜ ê´€ì ì—ì„œ í†µí•©í•©ë‹ˆë‹¤.",
    cards: [
      ["AI", "ìƒì„±í˜• AI", "ì–¸ì–´ ëª¨ë¸, ë¬¸ì„œ ì§€ì›, ë¶„ë¥˜, ì¶”ì¶œ, ìƒì„±, ì •ë³´ ë¶„ì„."],
      ["Agents", "ì—ì´ì „íŠ¸ì™€ copilots", "í”„ë¡œì„¸ìŠ¤, ë°ì´í„°, ë‚´ë¶€ ë„êµ¬, ì§€ì›, ì˜ì—…, ìš´ì˜ì— ì—°ê²°ëœ ì–´ì‹œìŠ¤í„´íŠ¸."],
      ["APIs", "í†µí•©", "ì–‘ì‹, CRM, ë°ì´í„°ë² ì´ìŠ¤, ì´ë©”ì¼, ëŒ€ì‹œë³´ë“œ, ìžë™í™”, ê¸°ì¡´ ì‹œìŠ¤í…œ ì—°ê²°."],
      ["Data", "ëŒ€ì‹œë³´ë“œì™€ ë¶„ì„", "ì§€í‘œ, ê²½ì˜ ë³´ê³ ì„œ, í”„ë¡œì„¸ìŠ¤ ì¶”ì , ì‹œê°í™”, ì‹¤í–‰ ê°€ëŠ¥í•œ ë°ì´í„° í•´ì„."],
      ["Cloud", "ì›¹ê³¼ í´ë¼ìš°ë“œ", "ì›¹ ì•±, serverless í•¨ìˆ˜, ì§€ì† ë°°í¬, ìŠ¤í† ë¦¬ì§€, ë³´ì•ˆ, ê´€ì¸¡ ê°€ëŠ¥ì„±."],
      ["Automation", "ìžë™í™”", "ë°˜ë³µ ê°€ëŠ¥í•œ íë¦„, ì•Œë¦¼, ë³´ê³ ì„œ ìƒì„±, ë°ì´í„° ë™ê¸°í™”, ìˆ˜ìž‘ì—… ê°ì†Œ."],
      ["Games", "ê²Œìž„ê³¼ ì‹œë®¬ë ˆì´ì…˜", "ì¸í„°ëž™í‹°ë¸Œ ë©”ì»¤ë‹‰, ê²Œì´ë¯¸í”¼ì¼€ì´ì…˜, ì‹œë®¬ë ˆì´í„°, ì›¹ ê²½í—˜, ëª°ìž…í˜• í•™ìŠµ."],
      ["Robotics", "ì‘ìš© ë¡œë³´í‹±ìŠ¤", "ì„¼ì„œ, ì œì–´, í…”ë ˆë©”íŠ¸ë¦¬, í”„ë¡œí† íƒ€ìž…, ë¬¼ë¦¬-ë””ì§€í„¸ ì‹œìŠ¤í…œ, ìš´ì˜ ì‹œê°í™”."]
    ]
  },
  industries: {
    title: "ì‚°ì—…ë³„ í™œìš© ì‚¬ë¡€",
    text: "ì†Œí”„íŠ¸ì›¨ì–´, AI, ê²Œìž„, ë¡œë³´í‹±ìŠ¤, ê¸°ìˆ  ì»¨ì„¤íŒ…ì„ ìš´ì˜, ì„±ìž¥, ë””ì§€í„¸ ë„ìž…ì˜ êµ¬ì²´ì  ë¬¸ì œì— ì ìš©í•©ë‹ˆë‹¤.",
    cards: [
      ["ì „ë¬¸ ì„œë¹„ìŠ¤", "ê³ ê° ì‘ëŒ€, ë¬¸ì„œ, ì˜ì—… í›„ì† ì¡°ì¹˜ ìžë™í™”", "ê³ ê° ë‹µë³€, ìš”ì²­ ë¶„ë¥˜, ë¬¸ì„œ ìƒì„±, ê¸°íšŒ ìš°ì„ ìˆœìœ„, ìƒì‚°ì„± ì¸¡ì •ì„ ìœ„í•œ copilots.", "AI ì§„ë‹¨ ìš”ì²­"],
      ["ë¦¬í…Œì¼ê³¼ ì»¤ë¨¸ìŠ¤", "íŒë§¤, ìž¬ê³ , ì§€ì›, ê³ ê° ë°ì´í„° í†µí•©", "ë‚´ë¶€ í¬í„¸, ëŒ€ì‹œë³´ë“œ, ì§€ì› ì—ì´ì „íŠ¸, ì¸í„°ëž™í‹°ë¸Œ ìº íŽ˜ì¸, ë°˜ë³µ í”„ë¡œì„¸ìŠ¤ ìžë™í™”.", "ì†Œí”„íŠ¸ì›¨ì–´ íƒìƒ‰"],
      ["êµìœ¡", "AIì™€ ì‹œë®¬ë ˆì´ì…˜ìœ¼ë¡œ í•™ìŠµ ê²½í—˜ êµ¬ì¶•", "ë””ì§€í„¸ ì•„ì¹´ë°ë¯¸, AI íŠœí„°, ì‹œë®¬ë ˆì´í„°, ì¸í„°ëž™í‹°ë¸Œ í‰ê°€, ê²Œì´ë¯¸í”¼ì¼€ì´ì…˜, ì§„ë„ ì¶”ì .", "ê²½í—˜ ë§Œë“¤ê¸°"],
      ["í—¬ìŠ¤ì¼€ì–´ì™€ ì›°ë‹ˆìŠ¤", "ì •ë³´, í›„ì† ì¡°ì¹˜, ìš´ì˜ ì»¤ë®¤ë‹ˆì¼€ì´ì…˜ ì •ë¦¬", "ë¬¸ì„œ ìžë™í™”, ì¼ì •, ë‚´ë¶€ íŒ¨ë„, ì„œë¹„ìŠ¤ íë¦„, í–‰ì • ì—…ë¬´ ì–´ì‹œìŠ¤í„´íŠ¸.", "ìš´ì˜ í˜„ëŒ€í™”"],
      ["ë¬¼ë¥˜ì™€ ìš´ì˜", "í”„ë¡œì„¸ìŠ¤, ë°ì´í„°, ì•Œë¦¼, ì¶”ì ì„± ì—°ê²°", "ìš´ì˜ ëŒ€ì‹œë³´ë“œ, ìŠ¹ì¸ íë¦„, ë³´ê³ ì„œ ìžë™í™”, ìž‘ì—… ì¶”ì , ì‘ìš© ë¶„ì„.", "ë¡œë“œë§µ ì„¤ê³„"],
      ["ì‚°ì—…ê³¼ ì œì¡°", "ì„¼ì„œ, ì†Œí”„íŠ¸ì›¨ì–´, ë¬¼ë¦¬-ë””ì§€í„¸ ì‹œìŠ¤í…œ í†µí•©", "ë¡œë³´í‹±ìŠ¤ í”„ë¡œí† íƒ€ìž…, í…”ë ˆë©”íŠ¸ë¦¬, ì œì–´, ìœ ì§€ë³´ìˆ˜, ë°ì´í„° ìˆ˜ì§‘, ì¤‘ìš” í”„ë¡œì„¸ìŠ¤ ì‹œê°í™”.", "ë¡œë³´í‹±ìŠ¤ íƒìƒ‰"]
    ]
  },
  faq: {
    title: "ìžì£¼ ë¬»ëŠ” ì§ˆë¬¸",
    text: "ë²”ìœ„, ì¼ì •, ë³´ì•ˆ, ì§€ì›ì— ëŒ€í•´ í˜„ì‹¤ì ì¸ ê¸°ëŒ€ë¥¼ ê°€ì§€ê³  ìƒì—…ì  ëŒ€í™”ë¥¼ ì‹œìž‘í•˜ê¸° ìœ„í•œ ëª…í™•í•œ ë‹µë³€ìž…ë‹ˆë‹¤.",
    items: [
      ["ì¼ë°˜ì ì¸ í”„ë¡œì íŠ¸ ê¸°ê°„ì€?", "ë²”ìœ„ì— ë”°ë¼ ë‹¤ë¦…ë‹ˆë‹¤. ì§„ë‹¨ì€ ë©°ì¹ ì´ë©´ ê°€ëŠ¥í•˜ê³ , ê¸°ëŠ¥ í”„ë¡œí† íƒ€ìž…ì€ ë³´í†µ ëª‡ ì£¼ê°€ í•„ìš”í•˜ë©°, ì „ì²´ í”Œëž«í¼ì´ë‚˜ êµ¬í˜„ì€ ìœ„í—˜ì„ ì¤„ì´ê¸° ìœ„í•´ ë‹¨ê³„ë³„ë¡œ ì •ì˜í•©ë‹ˆë‹¤."],
      ["ë¹„ìš©ì€ ì–´ë–»ê²Œ ì •í•´ì§€ë‚˜ìš”?", "ë²”ìœ„, ë³µìž¡ë„, í†µí•©, ì§€ì› ìˆ˜ì¤€, ê¸´ê¸‰ë„, ì‚°ì¶œë¬¼ì„ ê¸°ì¤€ìœ¼ë¡œ ì‚°ì •í•©ë‹ˆë‹¤. ê·¸ëž˜ì„œ ì²« ë‹¨ê³„ë¡œ ì§„ë‹¨ ëŒ€í™”ë¥¼ ê¶Œìž¥í•©ë‹ˆë‹¤."],
      ["ê¸°ë°€ ì •ë³´ë¥¼ ë‹¤ë£¨ë‚˜ìš”?", "ë„¤. ë¹„ë°€ìœ ì§€ê³„ì•½ ì•„ëž˜ ìž‘ì—…í•  ìˆ˜ ìžˆìœ¼ë©° í”„ë¡œì íŠ¸ í•„ìš”ì™€ íšŒì‚¬ ì •ì±…ì— ë”°ë¼ ë¯¼ê° ë°ì´í„° ì ‘ê·¼ì„ ì œí•œí•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤."],
      ["ì§€ì‹ìž¬ì‚°ê¶Œì€ ì–´ë–»ê²Œ ë˜ë‚˜ìš”?", "ì§€ì‹ìž¬ì‚°ê¶Œì€ í”„ë¡œì íŠ¸ ìœ í˜•ì— ë”°ë¼ ê³„ì•½ìœ¼ë¡œ í•©ì˜í•©ë‹ˆë‹¤. ê³ ê° ë§žì¶¤ ì†Œí”„íŠ¸ì›¨ì–´ ë˜ëŠ” ëª…í™•í•œ ì¡°ê±´ì˜ ìž¬ì‚¬ìš© ê°€ëŠ¥í•œ êµ¬ì„±ìš”ì†Œë¥¼ êµ¬ì¶•í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤."],
      ["ë‚´ë¶€ ê¸°ìˆ íŒ€ì´ í•„ìš”í•˜ë‚˜ìš”?", "ë°˜ë“œì‹œ í•„ìš”í•˜ì§€ëŠ” ì•ŠìŠµë‹ˆë‹¤. Tecnotitanì€ ì§„ë‹¨ë¶€í„° ë°°í¬ê¹Œì§€ ì§€ì›í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ë‚´ë¶€ íŒ€ì´ ìžˆë‹¤ë©´ ê¸°ìˆ  íŒŒíŠ¸ë„ˆë¡œì„œ ì•„í‚¤í…ì²˜, ê°œë°œ, ë„ìž…ì„ ê°€ì†í•©ë‹ˆë‹¤."],
      ["ë°°í¬ í›„ ì§€ì›ì„ ì œê³µí•˜ë‚˜ìš”?", "ë„¤. í•„ìš”í•œ ì„œë¹„ìŠ¤ ìˆ˜ì¤€ì— ë”°ë¼ ìœ ì§€ë³´ìˆ˜, ê°œì„ , ëª¨ë‹ˆí„°ë§, ë¬¸ì„œí™”, êµìœ¡, ìš´ì˜ ì§€ì›ì„ í¬í•¨í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤."],
      ["ë³´ì•ˆê³¼ ë°ì´í„°ëŠ” ì–´ë–»ê²Œ ì²˜ë¦¬í•˜ë‚˜ìš”?", "ê¶Œí•œ, ì ‘ê·¼ ì œì–´, ì¶”ì ì„±, ìµœì†Œ ë°ì´í„° ë…¸ì¶œ, ì ì ˆí•œ ê³µê¸‰ìž, ì±…ìž„ ìžˆëŠ” ë°°í¬ ê´€í–‰ì„ ê³ ë ¤í•´ ì„¤ê³„í•©ë‹ˆë‹¤."],
      ["ìž‘ê²Œ ì‹œìž‘í•  ìˆ˜ ìžˆë‚˜ìš”?", "ë„¤. ì§„ë‹¨, MVP ë˜ëŠ” ì¸¡ì • ê°€ëŠ¥í•œ íŒŒì¼ëŸ¿ë¶€í„° ì‹œìž‘í•˜ëŠ” ê²ƒì„ ê¶Œìž¥í•©ë‹ˆë‹¤. ë” í° íˆ¬ìž ì „ì— ê°€ì¹˜ë¥¼ ê²€ì¦í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤."]
    ]
  },
  conversion: {
    title: "ë‹¤ìŒ ë‹¨ê³„ë¥¼ ì„ íƒí•˜ì„¸ìš”",
    text: "ì˜¬ë°”ë¥¸ ì„œë¹„ìŠ¤ê°€ ë¯¸ë¦¬ ì„ íƒëœ ì–‘ì‹ìœ¼ë¡œ ì´ë™í•˜ëŠ” ìƒì—…ìš© ë°”ë¡œê°€ê¸°ìž…ë‹ˆë‹¤.",
    cards: [
      ["AI", "AI ì§„ë‹¨ ìš”ì²­", "ìžë™í™”, ì—ì´ì „íŠ¸, copilot, ìš´ì˜ ìˆ˜ìµì´ ìžˆëŠ” í™œìš© ì‚¬ë¡€ë¥¼ ì‹ë³„í•©ë‹ˆë‹¤."],
      ["Software", "ê¸°ì—… ì†Œí”„íŠ¸ì›¨ì–´ ê²¬ì ", "í”Œëž«í¼, ë‚´ë¶€ CRM, ëŒ€ì‹œë³´ë“œ, í¬í„¸, í†µí•©ì„ êµ¬ì¶•í•©ë‹ˆë‹¤."],
      ["Advisory", "ì»¨ì„¤íŒ… ì˜ˆì•½", "ê¸°ìˆ  ë¡œë“œë§µ, ì•„í‚¤í…ì²˜, ë„ìž…, ê²½ì˜ ìš°ì„ ìˆœìœ„ë¥¼ ì •ì˜í•©ë‹ˆë‹¤."],
      ["Robotics", "ì‘ìš© ë¡œë³´í‹±ìŠ¤ íƒìƒ‰", "ì„¼ì„œ, ì†Œí”„íŠ¸ì›¨ì–´, í…”ë ˆë©”íŠ¸ë¦¬, ë¬¼ë¦¬-ë””ì§€í„¸ ì‹œìŠ¤í…œì„ ì—°ê²°í•©ë‹ˆë‹¤."],
      ["Interactive", "ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜ ë§Œë“¤ê¸°", "ì‹œë®¬ë ˆì´í„°, ê²Œìž„, ê²Œì´ë¯¸í”¼ì¼€ì´ì…˜, êµìœ¡, ì›¹ ê²½í—˜ì„ ìœ„í•œ ê²ƒìž…ë‹ˆë‹¤."],
      ["Transformation", "ê¸°ìˆ  ì „í™˜ ì„¤ê³„", "í”„ë¡œì„¸ìŠ¤ë¥¼ í˜„ëŒ€í™”í•˜ê³  ìš´ì˜ì„ ìžë™í™”í•˜ë©° ë””ì§€í„¸ ë„ìž…ì„ ê°€ì†í•©ë‹ˆë‹¤."]
    ]
  },
  form: {
    kicker: "ìƒì—… ìš”ì²­",
    title: "íšŒì‚¬ê°€ ë¬´ì—‡ì„ êµ¬ì¶•í•´ì•¼ í•˜ëŠ”ì§€ ì•Œë ¤ì£¼ì„¸ìš”",
    text: "ì´ ì–‘ì‹ì€ AI, ì†Œí”„íŠ¸ì›¨ì–´, ì»¨ì„¤íŒ…, ë¡œë³´í‹±ìŠ¤, ë¹„ë””ì˜¤ê²Œìž„ ë˜ëŠ” ê¸°ìˆ  ì „í™˜ í”„ë¡œì íŠ¸ë¥¼ ìœ„í•œ ê²ƒìž…ë‹ˆë‹¤.",
    successTitle: "ìš”ì²­ì´ ì „ì†¡ë˜ì—ˆìŠµë‹ˆë‹¤",
    successText: "ê°ì‚¬í•©ë‹ˆë‹¤. ì„œë¹„ìŠ¤ ìš”ì²­ì„ ë°›ì•˜ìœ¼ë©° info@tecnotitan.com ìœ¼ë¡œ ë‹µë³€ë“œë¦¬ê² ìŠµë‹ˆë‹¤.",
    labels: ["ì´ë¦„", "ì´ë©”ì¼", "íšŒì‚¬", "êµ­ê°€", "ê´€ì‹¬ ì„œë¹„ìŠ¤", "íšŒì‚¬ ê·œëª¨", "ì˜ˆìƒ ì˜ˆì‚°", "ê¸´ê¸‰ë„", "ë©”ì‹œì§€"],
    serviceOptions: ["ì„ íƒ", "ì¸ê³µì§€ëŠ¥", "ê¸°ì—… ì†Œí”„íŠ¸ì›¨ì–´", "ê¸°ìˆ  ì»¨ì„¤íŒ…", "ë¡œë³´í‹±ìŠ¤", "ë¹„ë””ì˜¤ê²Œìž„ê³¼ ì¸í„°ëž™í‹°ë¸Œ ê²½í—˜", "ê¸°ìˆ  ì „í™˜"],
    companySizeOptions: ["ì„ íƒ", "1-10ëª…", "11-50ëª…", "51-200ëª…", "201-1000ëª…", "1000ëª… ì´ìƒ"],
    budgetOptions: ["ì„ íƒ", "USD 5K ë¯¸ë§Œ", "USD 5K - 15K", "USD 15K - 50K", "USD 50K+", "ë¯¸ì •"],
    urgencyOptions: ["ì„ íƒ", "ì´ë²ˆ ë‹¬", "1-3ê°œì›”", "3-6ê°œì›”", "íƒìƒ‰ ë‹¨ê³„"],
    placeholder: "ê°œì„ í•˜ë ¤ëŠ” ë¬¸ì œ, ëª©í‘œ ë˜ëŠ” í”„ë¡œì„¸ìŠ¤ë¥¼ ì•Œë ¤ì£¼ì„¸ìš”.",
    newsletter: "Tecnotitan ê³µì‹ newsletterë¥¼ êµ¬ë…í•˜ê³  ì‹¶ìŠµë‹ˆë‹¤.",
    button: "ìƒì—… ëŒ€í™” ìš”ì²­"
  }
};

function getCarryPageFileFromUrl(url) {
  const parts = url.pathname.split("/").filter(Boolean);

  if (parts.length === 0) {
    return "index.html";
  }

  const first = parts[0];
  const hasLanguagePrefix = Boolean(pathSegmentLanguages[first]);
  const routeParts = hasLanguagePrefix ? parts.slice(1) : parts;

  if (!hasLanguagePrefix) {
    if (routeParts.length === 1 && routeParts[0] === "guides") {
      return "guias.html";
    }

    if (routeParts.length === 1 && englishCleanPageRoutes[routeParts[0]]) {
      return englishCleanPageRoutes[routeParts[0]];
    }
  }

  if (hasLanguagePrefix && first === "en") {
    if (routeParts.length === 1 && routeParts[0] === "guides") {
      return "guias.html";
    }

    if (routeParts.length === 1 && englishCleanPageRoutes[routeParts[0]]) {
      return englishCleanPageRoutes[routeParts[0]];
    }
  }

  if (routeParts.length === 0) {
    return "index.html";
  }

  if (routeParts.length === 1 && guideHubDirectories[first] && routeParts[0] === guideHubDirectories[first]) {
    return "guias.html";
  }

  if (url.pathname.endsWith("/")) {
    return "index.html";
  }

  return routeParts[routeParts.length - 1];
}

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

    const file = getCarryPageFileFromUrl(url);

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
      label: "Tecnotitan æŒ‡å— / å·¥ä½œä¸­çš„ AI",
      title: "å¦‚ä½•åœ¨å·¥ä½œä¸­ä½¿ç”¨ ChatGPTï¼šä¼ä¸šå®žç”¨æŒ‡å—",
      intro: "ä¸€æœ¬å¸®åŠ©å›¢é˜Ÿåœ¨é”€å”®ã€æ”¯æŒã€æ–‡æ¡£ã€ä¼šè®®ã€åˆ†æžå’Œè‡ªåŠ¨åŒ–ä¸­å®‰å…¨ã€é«˜æ•ˆä½¿ç”¨ ChatGPT çš„æŒ‡å—ã€‚",
      meta: ["æ›´æ–°ï¼š2026 å¹´ 6 æœˆ", "é˜…è¯»æ—¶é—´ï¼š18 åˆ†é’Ÿ", "å¯ä¸‹è½½ PDF"],
      actions: ["ä¸‹è½½ PDF", "ä¿å­˜ä¸º PDF", "åˆ†äº«æŒ‡å—"],
      sidebarTitle: "æœ¬æŒ‡å—å†…å®¹",
      sidebar: ["å·¥ä½œä¸­çš„ ChatGPT æ˜¯ä»€ä¹ˆ", "è´Ÿè´£ä»»ä½¿ç”¨è§„åˆ™", "å¦‚ä½•å†™å¥½æç¤ºè¯", "å„éƒ¨é—¨ç”¨ä¾‹", "å»ºè®®çš„å†…éƒ¨æ”¿ç­–", "æœ¬å‘¨å¼€å§‹æ¸…å•"]
    },
    ja: {
      label: "Tecnotitan ã‚¬ã‚¤ãƒ‰ / ä»•äº‹ã§ä½¿ã† AI",
      title: "ä»•äº‹ã§ ChatGPT ã‚’ä½¿ã†æ–¹æ³•ï¼šä¼æ¥­å‘ã‘å®Ÿè·µã‚¬ã‚¤ãƒ‰",
      intro: "å–¶æ¥­ã€ã‚µãƒãƒ¼ãƒˆã€æ–‡æ›¸ã€ä¼šè­°ã€åˆ†æžã€è‡ªå‹•åŒ–ã§ ChatGPT ã‚’å®‰å…¨ã‹ã¤ç”Ÿç”£çš„ã«ä½¿ã†ãŸã‚ã®ã‚¬ã‚¤ãƒ‰ã§ã™ã€‚",
      meta: ["æ›´æ–°ï¼š2026å¹´6æœˆ", "èª­äº†æ™‚é–“ï¼š18åˆ†", "PDF ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"],
      actions: ["PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "PDF ã¨ã—ã¦ä¿å­˜", "ã‚¬ã‚¤ãƒ‰ã‚’å…±æœ‰"],
      sidebarTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰",
      sidebar: ["ä»•äº‹ã§ã® ChatGPT ã¨ã¯", "è²¬ä»»ã‚ã‚‹åˆ©ç”¨ãƒ«ãƒ¼ãƒ«", "è‰¯ã„ãƒ—ãƒ­ãƒ³ãƒ—ãƒˆã®æ›¸ãæ–¹", "éƒ¨é–€åˆ¥ãƒ¦ãƒ¼ã‚¹ã‚±ãƒ¼ã‚¹", "æŽ¨å¥¨ç¤¾å†…ãƒãƒªã‚·ãƒ¼", "ä»Šé€±å§‹ã‚ã‚‹ãƒã‚§ãƒƒã‚¯ãƒªã‚¹ãƒˆ"]
    },
    ko: {
      label: "Tecnotitan ê°€ì´ë“œ / ì—…ë¬´ìš© AI",
      title: "ì—…ë¬´ì—ì„œ ChatGPTë¥¼ ì‚¬ìš©í•˜ëŠ” ë°©ë²•: ê¸°ì—… ì‹¤ë¬´ ê°€ì´ë“œ",
      intro: "ì˜ì—…, ì§€ì›, ë¬¸ì„œ, íšŒì˜, ë¶„ì„, ìžë™í™”ì—ì„œ ChatGPTë¥¼ ìƒì‚°ì ì´ê³  ì•ˆì „í•˜ê²Œ ì“°ê¸° ìœ„í•œ ê°€ì´ë“œìž…ë‹ˆë‹¤.",
      meta: ["ì—…ë°ì´íŠ¸: 2026ë…„ 6ì›”", "ì½ëŠ” ì‹œê°„: 18ë¶„", "PDF ë‹¤ìš´ë¡œë“œ"],
      actions: ["PDF ë‹¤ìš´ë¡œë“œ", "PDFë¡œ ì €ìž¥", "ê°€ì´ë“œ ê³µìœ "],
      sidebarTitle: "ì´ ê°€ì´ë“œ",
      sidebar: ["ì—…ë¬´ì—ì„œ ChatGPTëž€", "ì±…ìž„ ìžˆëŠ” ì‚¬ìš© ê·œì¹™", "ì¢‹ì€ í”„ë¡¬í”„íŠ¸ ìž‘ì„±ë²•", "ë¶€ì„œë³„ í™œìš© ì‚¬ë¡€", "ê¶Œìž¥ ë‚´ë¶€ ì •ì±…", "ì´ë²ˆ ì£¼ ì‹œìž‘ ì²´í¬ë¦¬ìŠ¤íŠ¸"]
    }
  },
  "guia-automatizar-atencion-cliente-con-ia.html": {
    es: { label: "Guia Tecnotitan / IA para soporte", title: "Automatizar atencion al cliente con IA sin perder calidad humana", intro: "Una guia para empresas que quieren responder mas rapido, ordenar solicitudes y escalar casos complejos con agentes inteligentes.", meta: ["Actualizado: junio 2026", "Lectura: 16 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver Call Center AI"], sidebarTitle: "En esta guia", sidebar: ["Modelo operativo", "Datos y conocimiento", "Escalamiento humano", "Metricas", "Checklist"] },
    en: { label: "Tecnotitan Guide / AI support", title: "Automate customer service with AI without losing human quality", intro: "A guide for companies that want faster responses, cleaner request handling and smarter escalation with AI agents.", meta: ["Updated: June 2026", "Reading time: 16 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View Call Center AI"], sidebarTitle: "In this guide", sidebar: ["Operating model", "Data and knowledge", "Human escalation", "Metrics", "Checklist"] },
    pt: { label: "Guia Tecnotitan / IA para suporte", title: "Automatizar atendimento ao cliente com IA sem perder qualidade humana", intro: "Guia para empresas que querem responder mais rapido, organizar solicitacoes e escalar casos complexos com agentes inteligentes.", meta: ["Atualizado: junho de 2026", "Leitura: 16 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver Call Center AI"], sidebarTitle: "Neste guia", sidebar: ["Modelo operacional", "Dados e conhecimento", "Escalamento humano", "Metricas", "Checklist"] },
    zh: { label: "Tecnotitan æŒ‡å— / AI å®¢æœ", title: "ç”¨ AI è‡ªåŠ¨åŒ–å®¢æˆ·æœåŠ¡ï¼ŒåŒæ—¶ä¿ç•™äººå·¥æœåŠ¡è´¨é‡", intro: "å¸®åŠ©ä¼ä¸šæ›´å¿«å“åº”ã€æ•´ç†è¯·æ±‚å¹¶ç”¨æ™ºèƒ½ä½“å‡çº§å¤æ‚æ¡ˆä¾‹çš„æŒ‡å—ã€‚", meta: ["æ›´æ–°ï¼š2026 å¹´ 6 æœˆ", "é˜…è¯»æ—¶é—´ï¼š16 åˆ†é’Ÿ", "å¯ä¸‹è½½ PDF"], actions: ["ä¸‹è½½ PDF", "ä¿å­˜ä¸º PDF", "åˆ†äº«æŒ‡å—", "æŸ¥çœ‹ Call Center AI"], sidebarTitle: "æœ¬æŒ‡å—å†…å®¹", sidebar: ["è¿è¥æ¨¡åž‹", "æ•°æ®ä¸ŽçŸ¥è¯†", "äººå·¥å‡çº§", "æŒ‡æ ‡", "æ¸…å•"] },
    ja: { label: "Tecnotitan ã‚¬ã‚¤ãƒ‰ / AI ã‚µãƒãƒ¼ãƒˆ", title: "äººã®å“è³ªã‚’ä¿ã¡ãªãŒã‚‰ AI ã§ã‚«ã‚¹ã‚¿ãƒžãƒ¼ã‚µãƒ¼ãƒ“ã‚¹ã‚’è‡ªå‹•åŒ–ã™ã‚‹", intro: "AI ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã§å¿œç­”ã‚’é€Ÿã‚ã€å•ã„åˆã‚ã›ã‚’æ•´ç†ã—ã€è¤‡é›‘ãªæ¡ˆä»¶ã‚’å¼•ãç¶™ããŸã‚ã®ã‚¬ã‚¤ãƒ‰ã§ã™ã€‚", meta: ["æ›´æ–°ï¼š2026å¹´6æœˆ", "èª­äº†æ™‚é–“ï¼š16åˆ†", "PDF ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"], actions: ["PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "PDF ã¨ã—ã¦ä¿å­˜", "ã‚¬ã‚¤ãƒ‰ã‚’å…±æœ‰", "Call Center AI ã‚’è¦‹ã‚‹"], sidebarTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰", sidebar: ["é‹ç”¨ãƒ¢ãƒ‡ãƒ«", "ãƒ‡ãƒ¼ã‚¿ã¨çŸ¥è­˜", "äººã¸ã®å¼•ãç¶™ãŽ", "æŒ‡æ¨™", "ãƒã‚§ãƒƒã‚¯ãƒªã‚¹ãƒˆ"] },
    ko: { label: "Tecnotitan ê°€ì´ë“œ / AI ì§€ì›", title: "ê³ ê° ì„œë¹„ìŠ¤ í’ˆì§ˆì„ ìœ ì§€í•˜ë©° AIë¡œ ìžë™í™”í•˜ê¸°", intro: "AI ì—ì´ì „íŠ¸ë¡œ ë” ë¹ ë¥´ê²Œ ì‘ë‹µí•˜ê³  ìš”ì²­ì„ ì •ë¦¬í•˜ë©° ë³µìž¡í•œ ì¼€ì´ìŠ¤ë¥¼ ì‚¬ëžŒì—ê²Œ ë„˜ê¸°ëŠ” ê°€ì´ë“œìž…ë‹ˆë‹¤.", meta: ["ì—…ë°ì´íŠ¸: 2026ë…„ 6ì›”", "ì½ëŠ” ì‹œê°„: 16ë¶„", "PDF ë‹¤ìš´ë¡œë“œ"], actions: ["PDF ë‹¤ìš´ë¡œë“œ", "PDFë¡œ ì €ìž¥", "ê°€ì´ë“œ ê³µìœ ", "Call Center AI ë³´ê¸°"], sidebarTitle: "ì´ ê°€ì´ë“œ", sidebar: ["ìš´ì˜ ëª¨ë¸", "ë°ì´í„°ì™€ ì§€ì‹", "ì‚¬ëžŒ ì—ìŠ¤ì»¬ë ˆì´ì…˜", "ì§€í‘œ", "ì²´í¬ë¦¬ìŠ¤íŠ¸"] }
  },
  "guia-software-empresarial-para-pymes.html": {
    es: { label: "Guia Tecnotitan / Software empresarial", title: "Software empresarial para pymes: como elegir sin comprar problemas", intro: "Una guia para evaluar sistemas, costos, integraciones, datos y adopcion antes de invertir en una plataforma.", meta: ["Actualizado: junio 2026", "Lectura: 15 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver Tecnotitan OS"], sidebarTitle: "En esta guia", sidebar: ["Diagnostico", "Compra vs construccion", "Integraciones", "Seguridad", "Checklist"] },
    en: { label: "Tecnotitan Guide / Business software", title: "Business software for SMBs: how to choose without buying problems", intro: "A guide to evaluate systems, costs, integrations, data and adoption before investing in a platform.", meta: ["Updated: June 2026", "Reading time: 15 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View Tecnotitan OS"], sidebarTitle: "In this guide", sidebar: ["Diagnosis", "Buy vs build", "Integrations", "Security", "Checklist"] },
    pt: { label: "Guia Tecnotitan / Software empresarial", title: "Software empresarial para pymes: como escolher sem comprar problemas", intro: "Guia para avaliar sistemas, custos, integracoes, dados e adocao antes de investir em uma plataforma.", meta: ["Atualizado: junho de 2026", "Leitura: 15 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver Tecnotitan OS"], sidebarTitle: "Neste guia", sidebar: ["Diagnostico", "Comprar vs construir", "Integracoes", "Seguranca", "Checklist"] },
    zh: { label: "Tecnotitan æŒ‡å— / ä¼ä¸šè½¯ä»¶", title: "ä¸­å°ä¼ä¸šä¸šåŠ¡è½¯ä»¶ï¼šå¦‚ä½•é€‰æ‹©è€Œä¸æ˜¯è´­ä¹°éº»çƒ¦", intro: "åœ¨æŠ•èµ„å¹³å°ä¹‹å‰è¯„ä¼°ç³»ç»Ÿã€æˆæœ¬ã€é›†æˆã€æ•°æ®å’Œé‡‡ç”¨æƒ…å†µçš„æŒ‡å—ã€‚", meta: ["æ›´æ–°ï¼š2026 å¹´ 6 æœˆ", "é˜…è¯»æ—¶é—´ï¼š15 åˆ†é’Ÿ", "å¯ä¸‹è½½ PDF"], actions: ["ä¸‹è½½ PDF", "ä¿å­˜ä¸º PDF", "åˆ†äº«æŒ‡å—", "æŸ¥çœ‹ Tecnotitan OS"], sidebarTitle: "æœ¬æŒ‡å—å†…å®¹", sidebar: ["è¯Šæ–­", "è´­ä¹°æˆ–æž„å»º", "é›†æˆ", "å®‰å…¨", "æ¸…å•"] },
    ja: { label: "Tecnotitan ã‚¬ã‚¤ãƒ‰ / æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢", title: "ä¸­å°ä¼æ¥­å‘ã‘æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ï¼šå•é¡Œã‚’è²·ã‚ãªã„é¸ã³æ–¹", intro: "ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ æŠ•è³‡å‰ã«ã€ã‚·ã‚¹ãƒ†ãƒ ã€ã‚³ã‚¹ãƒˆã€é€£æºã€ãƒ‡ãƒ¼ã‚¿ã€å®šç€ã‚’è©•ä¾¡ã™ã‚‹ãŸã‚ã®ã‚¬ã‚¤ãƒ‰ã§ã™ã€‚", meta: ["æ›´æ–°ï¼š2026å¹´6æœˆ", "èª­äº†æ™‚é–“ï¼š15åˆ†", "PDF ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"], actions: ["PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "PDF ã¨ã—ã¦ä¿å­˜", "ã‚¬ã‚¤ãƒ‰ã‚’å…±æœ‰", "Tecnotitan OS ã‚’è¦‹ã‚‹"], sidebarTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰", sidebar: ["è¨ºæ–­", "è³¼å…¥ vs æ§‹ç¯‰", "é€£æº", "ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£", "ãƒã‚§ãƒƒã‚¯ãƒªã‚¹ãƒˆ"] },
    ko: { label: "Tecnotitan ê°€ì´ë“œ / ì—…ë¬´ ì†Œí”„íŠ¸ì›¨ì–´", title: "ì¤‘ì†Œê¸°ì—…ìš© ì—…ë¬´ ì†Œí”„íŠ¸ì›¨ì–´: ë¬¸ì œë¥¼ ì‚¬ì§€ ì•ŠëŠ” ì„ íƒë²•", intro: "í”Œëž«í¼ íˆ¬ìž ì „ì— ì‹œìŠ¤í…œ, ë¹„ìš©, í†µí•©, ë°ì´í„°, ë„ìž…ì„ í‰ê°€í•˜ëŠ” ê°€ì´ë“œìž…ë‹ˆë‹¤.", meta: ["ì—…ë°ì´íŠ¸: 2026ë…„ 6ì›”", "ì½ëŠ” ì‹œê°„: 15ë¶„", "PDF ë‹¤ìš´ë¡œë“œ"], actions: ["PDF ë‹¤ìš´ë¡œë“œ", "PDFë¡œ ì €ìž¥", "ê°€ì´ë“œ ê³µìœ ", "Tecnotitan OS ë³´ê¸°"], sidebarTitle: "ì´ ê°€ì´ë“œ", sidebar: ["ì§„ë‹¨", "êµ¬ë§¤ vs êµ¬ì¶•", "í†µí•©", "ë³´ì•ˆ", "ì²´í¬ë¦¬ìŠ¤íŠ¸"] }
  },
  "guia-prompts-chatgpt-ventas-b2b.html": {
    es: { label: "Guia Tecnotitan / Ventas con IA", title: "Prompts de ChatGPT para ventas B2B que no suenan genericos", intro: "Una biblioteca practica para investigar cuentas, preparar reuniones, responder objeciones y escribir seguimiento comercial con mas precision.", meta: ["Actualizado: junio 2026", "Lectura: 14 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver Copiloto Pyme"], sidebarTitle: "En esta guia", sidebar: ["Investigacion", "Correos", "Objeciones", "Reuniones", "Seguimiento"] },
    en: { label: "Tecnotitan Guide / AI sales", title: "ChatGPT prompts for B2B sales that do not sound generic", intro: "A practical library for account research, meeting prep, objection handling and sharper commercial follow-up.", meta: ["Updated: June 2026", "Reading time: 14 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View Copiloto Pyme"], sidebarTitle: "In this guide", sidebar: ["Research", "Emails", "Objections", "Meetings", "Follow-up"] },
    pt: { label: "Guia Tecnotitan / Vendas com IA", title: "Prompts de ChatGPT para vendas B2B que nao soam genericos", intro: "Biblioteca pratica para pesquisar contas, preparar reunioes, responder objecoes e fazer acompanhamento comercial.", meta: ["Atualizado: junho de 2026", "Leitura: 14 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver Copiloto Pyme"], sidebarTitle: "Neste guia", sidebar: ["Pesquisa", "Emails", "Objecoes", "Reunioes", "Acompanhamento"] },
    zh: { label: "Tecnotitan æŒ‡å— / AI é”€å”®", title: "ä¸ä¼šæ˜¾å¾—æ¨¡æ¿åŒ–çš„ B2B é”€å”® ChatGPT æç¤ºè¯", intro: "ç”¨äºŽå®¢æˆ·ç ”ç©¶ã€ä¼šè®®å‡†å¤‡ã€å¼‚è®®å¤„ç†å’Œæ›´ç²¾å‡†å•†ä¸šè·Ÿè¿›çš„å®žç”¨æç¤ºè¯åº“ã€‚", meta: ["æ›´æ–°ï¼š2026 å¹´ 6 æœˆ", "é˜…è¯»æ—¶é—´ï¼š14 åˆ†é’Ÿ", "å¯ä¸‹è½½ PDF"], actions: ["ä¸‹è½½ PDF", "ä¿å­˜ä¸º PDF", "åˆ†äº«æŒ‡å—", "æŸ¥çœ‹ Copiloto Pyme"], sidebarTitle: "æœ¬æŒ‡å—å†…å®¹", sidebar: ["ç ”ç©¶", "é‚®ä»¶", "å¼‚è®®", "ä¼šè®®", "è·Ÿè¿›"] },
    ja: { label: "Tecnotitan ã‚¬ã‚¤ãƒ‰ / AI å–¶æ¥­", title: "æ±Žç”¨çš„ã«èžã“ãˆãªã„ B2B å–¶æ¥­å‘ã‘ ChatGPT ãƒ—ãƒ­ãƒ³ãƒ—ãƒˆ", intro: "ã‚¢ã‚«ã‚¦ãƒ³ãƒˆèª¿æŸ»ã€å•†è«‡æº–å‚™ã€åè«–å¯¾å¿œã€ãƒ•ã‚©ãƒ­ãƒ¼ã‚¢ãƒƒãƒ—ã‚’ã‚ˆã‚Šå…·ä½“çš„ã«ã™ã‚‹ãƒ—ãƒ­ãƒ³ãƒ—ãƒˆé›†ã§ã™ã€‚", meta: ["æ›´æ–°ï¼š2026å¹´6æœˆ", "èª­äº†æ™‚é–“ï¼š14åˆ†", "PDF ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"], actions: ["PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "PDF ã¨ã—ã¦ä¿å­˜", "ã‚¬ã‚¤ãƒ‰ã‚’å…±æœ‰", "Copiloto Pyme ã‚’è¦‹ã‚‹"], sidebarTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰", sidebar: ["èª¿æŸ»", "ãƒ¡ãƒ¼ãƒ«", "åè«–", "å•†è«‡", "ãƒ•ã‚©ãƒ­ãƒ¼"] },
    ko: { label: "Tecnotitan ê°€ì´ë“œ / AI ì˜ì—…", title: "ë»”í•˜ê²Œ ë“¤ë¦¬ì§€ ì•ŠëŠ” B2B ì˜ì—…ìš© ChatGPT í”„ë¡¬í”„íŠ¸", intro: "ê³„ì • ì¡°ì‚¬, ë¯¸íŒ… ì¤€ë¹„, ë°˜ë¡  ì²˜ë¦¬, ë” ì •í™•í•œ ì˜ì—… í›„ì† ì¡°ì¹˜ë¥¼ ìœ„í•œ ì‹¤ìš© í”„ë¡¬í”„íŠ¸ ëª¨ìŒìž…ë‹ˆë‹¤.", meta: ["ì—…ë°ì´íŠ¸: 2026ë…„ 6ì›”", "ì½ëŠ” ì‹œê°„: 14ë¶„", "PDF ë‹¤ìš´ë¡œë“œ"], actions: ["PDF ë‹¤ìš´ë¡œë“œ", "PDFë¡œ ì €ìž¥", "ê°€ì´ë“œ ê³µìœ ", "Copiloto Pyme ë³´ê¸°"], sidebarTitle: "ì´ ê°€ì´ë“œ", sidebar: ["ì¡°ì‚¬", "ì´ë©”ì¼", "ë°˜ë¡ ", "ë¯¸íŒ…", "í›„ì† ì¡°ì¹˜"] }
  },
  "guia-gobernanza-ia-empresas.html": {
    es: { label: "Guia Tecnotitan / Gobernanza de IA", title: "Gobernanza de IA para empresas: como innovar con control", intro: "Una guia para crear reglas, responsables, permisos y controles antes de conectar IA a procesos reales.", meta: ["Actualizado: junio 2026", "Lectura: 15 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver servicios IA"], sidebarTitle: "En esta guia", sidebar: ["Politica", "Datos", "Riesgos", "Responsables", "Checklist"] },
    en: { label: "Tecnotitan Guide / AI governance", title: "AI governance for companies: innovate with control", intro: "A guide for creating rules, owners, permissions and controls before connecting AI to real business processes.", meta: ["Updated: June 2026", "Reading time: 15 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View AI services"], sidebarTitle: "In this guide", sidebar: ["Policy", "Data", "Risks", "Owners", "Checklist"] },
    pt: { label: "Guia Tecnotitan / Governanca de IA", title: "Governanca de IA para empresas: inovar com controle", intro: "Guia para criar regras, responsaveis, permissoes e controles antes de conectar IA a processos reais.", meta: ["Atualizado: junho de 2026", "Leitura: 15 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver servicos IA"], sidebarTitle: "Neste guia", sidebar: ["Politica", "Dados", "Riscos", "Responsaveis", "Checklist"] },
    zh: { label: "Tecnotitan æŒ‡å— / AI æ²»ç†", title: "ä¼ä¸š AI æ²»ç†ï¼šåœ¨æŽ§åˆ¶ä¸­åˆ›æ–°", intro: "åœ¨å°† AI è¿žæŽ¥åˆ°çœŸå®žä¸šåŠ¡æµç¨‹ä¹‹å‰ï¼Œå»ºç«‹è§„åˆ™ã€è´Ÿè´£äººã€æƒé™å’ŒæŽ§åˆ¶ã€‚", meta: ["æ›´æ–°ï¼š2026 å¹´ 6 æœˆ", "é˜…è¯»æ—¶é—´ï¼š15 åˆ†é’Ÿ", "å¯ä¸‹è½½ PDF"], actions: ["ä¸‹è½½ PDF", "ä¿å­˜ä¸º PDF", "åˆ†äº«æŒ‡å—", "æŸ¥çœ‹ AI æœåŠ¡"], sidebarTitle: "æœ¬æŒ‡å—å†…å®¹", sidebar: ["æ”¿ç­–", "æ•°æ®", "é£Žé™©", "è´Ÿè´£äºº", "æ¸…å•"] },
    ja: { label: "Tecnotitan ã‚¬ã‚¤ãƒ‰ / AI ã‚¬ãƒãƒŠãƒ³ã‚¹", title: "ä¼æ¥­å‘ã‘ AI ã‚¬ãƒãƒŠãƒ³ã‚¹ï¼šç®¡ç†ã—ãªãŒã‚‰é©æ–°ã™ã‚‹", intro: "AI ã‚’æ¥­å‹™ãƒ—ãƒ­ã‚»ã‚¹ã«æŽ¥ç¶šã™ã‚‹å‰ã«ã€ãƒ«ãƒ¼ãƒ«ã€è²¬ä»»è€…ã€æ¨©é™ã€ç®¡ç†ã‚’ä½œã‚‹ãŸã‚ã®ã‚¬ã‚¤ãƒ‰ã§ã™ã€‚", meta: ["æ›´æ–°ï¼š2026å¹´6æœˆ", "èª­äº†æ™‚é–“ï¼š15åˆ†", "PDF ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"], actions: ["PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "PDF ã¨ã—ã¦ä¿å­˜", "ã‚¬ã‚¤ãƒ‰ã‚’å…±æœ‰", "AI ã‚µãƒ¼ãƒ“ã‚¹ã‚’è¦‹ã‚‹"], sidebarTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰", sidebar: ["ãƒãƒªã‚·ãƒ¼", "ãƒ‡ãƒ¼ã‚¿", "ãƒªã‚¹ã‚¯", "è²¬ä»»è€…", "ãƒã‚§ãƒƒã‚¯ãƒªã‚¹ãƒˆ"] },
    ko: { label: "Tecnotitan ê°€ì´ë“œ / AI ê±°ë²„ë„ŒìŠ¤", title: "ê¸°ì—… AI ê±°ë²„ë„ŒìŠ¤: í†µì œ ì†ì—ì„œ í˜ì‹ í•˜ê¸°", intro: "AIë¥¼ ì‹¤ì œ ì—…ë¬´ í”„ë¡œì„¸ìŠ¤ì— ì—°ê²°í•˜ê¸° ì „ì— ê·œì¹™, ì±…ìž„ìž, ê¶Œí•œ, í†µì œë¥¼ ë§Œë“œëŠ” ê°€ì´ë“œìž…ë‹ˆë‹¤.", meta: ["ì—…ë°ì´íŠ¸: 2026ë…„ 6ì›”", "ì½ëŠ” ì‹œê°„: 15ë¶„", "PDF ë‹¤ìš´ë¡œë“œ"], actions: ["PDF ë‹¤ìš´ë¡œë“œ", "PDFë¡œ ì €ìž¥", "ê°€ì´ë“œ ê³µìœ ", "AI ì„œë¹„ìŠ¤ ë³´ê¸°"], sidebarTitle: "ì´ ê°€ì´ë“œ", sidebar: ["ì •ì±…", "ë°ì´í„°", "ìœ„í—˜", "ì±…ìž„ìž", "ì²´í¬ë¦¬ìŠ¤íŠ¸"] }
  },
  "guia-roi-automatizacion-ia.html": {
    es: { label: "Guia Tecnotitan / ROI de IA", title: "ROI de automatizacion con IA: como medir valor real", intro: "Una guia para priorizar automatizaciones por impacto, costo, riesgo y capacidad de adopcion.", meta: ["Actualizado: junio 2026", "Lectura: 14 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver servicios"], sidebarTitle: "En esta guia", sidebar: ["Formula", "Costos", "Impacto", "Tablero", "Checklist"] },
    en: { label: "Tecnotitan Guide / AI ROI", title: "AI automation ROI: how to measure real value", intro: "A guide to prioritize automations by impact, cost, risk and adoption capacity.", meta: ["Updated: June 2026", "Reading time: 14 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View services"], sidebarTitle: "In this guide", sidebar: ["Formula", "Costs", "Impact", "Dashboard", "Checklist"] },
    pt: { label: "Guia Tecnotitan / ROI de IA", title: "ROI de automacao com IA: como medir valor real", intro: "Guia para priorizar automacoes por impacto, custo, risco e capacidade de adocao.", meta: ["Atualizado: junho de 2026", "Leitura: 14 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver servicos"], sidebarTitle: "Neste guia", sidebar: ["Formula", "Custos", "Impacto", "Painel", "Checklist"] },
    zh: { label: "Tecnotitan æŒ‡å— / AI ROI", title: "AI è‡ªåŠ¨åŒ– ROIï¼šå¦‚ä½•è¡¡é‡çœŸå®žä»·å€¼", intro: "æŒ‰å½±å“ã€æˆæœ¬ã€é£Žé™©å’Œé‡‡ç”¨èƒ½åŠ›ä¼˜å…ˆæŽ’åºè‡ªåŠ¨åŒ–é¡¹ç›®ã€‚", meta: ["æ›´æ–°ï¼š2026 å¹´ 6 æœˆ", "é˜…è¯»æ—¶é—´ï¼š14 åˆ†é’Ÿ", "å¯ä¸‹è½½ PDF"], actions: ["ä¸‹è½½ PDF", "ä¿å­˜ä¸º PDF", "åˆ†äº«æŒ‡å—", "æŸ¥çœ‹æœåŠ¡"], sidebarTitle: "æœ¬æŒ‡å—å†…å®¹", sidebar: ["å…¬å¼", "æˆæœ¬", "å½±å“", "çœ‹æ¿", "æ¸…å•"] },
    ja: { label: "Tecnotitan ã‚¬ã‚¤ãƒ‰ / AI ROI", title: "AI è‡ªå‹•åŒ– ROIï¼šæœ¬å½“ã®ä¾¡å€¤ã‚’æ¸¬ã‚‹æ–¹æ³•", intro: "å½±éŸ¿ã€ã‚³ã‚¹ãƒˆã€ãƒªã‚¹ã‚¯ã€å®šç€å¯èƒ½æ€§ã§è‡ªå‹•åŒ–ã‚’å„ªå…ˆé †ä½ä»˜ã‘ã™ã‚‹ãŸã‚ã®ã‚¬ã‚¤ãƒ‰ã§ã™ã€‚", meta: ["æ›´æ–°ï¼š2026å¹´6æœˆ", "èª­äº†æ™‚é–“ï¼š14åˆ†", "PDF ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"], actions: ["PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "PDF ã¨ã—ã¦ä¿å­˜", "ã‚¬ã‚¤ãƒ‰ã‚’å…±æœ‰", "ã‚µãƒ¼ãƒ“ã‚¹ã‚’è¦‹ã‚‹"], sidebarTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰", sidebar: ["å¼", "ã‚³ã‚¹ãƒˆ", "å½±éŸ¿", "ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰", "ãƒã‚§ãƒƒã‚¯ãƒªã‚¹ãƒˆ"] },
    ko: { label: "Tecnotitan ê°€ì´ë“œ / AI ROI", title: "AI ìžë™í™” ROI: ì‹¤ì œ ê°€ì¹˜ë¥¼ ì¸¡ì •í•˜ëŠ” ë²•", intro: "ì˜í–¥, ë¹„ìš©, ìœ„í—˜, ë„ìž… ê°€ëŠ¥ì„±ìœ¼ë¡œ ìžë™í™”ë¥¼ ìš°ì„ ìˆœìœ„í™”í•˜ëŠ” ê°€ì´ë“œìž…ë‹ˆë‹¤.", meta: ["ì—…ë°ì´íŠ¸: 2026ë…„ 6ì›”", "ì½ëŠ” ì‹œê°„: 14ë¶„", "PDF ë‹¤ìš´ë¡œë“œ"], actions: ["PDF ë‹¤ìš´ë¡œë“œ", "PDFë¡œ ì €ìž¥", "ê°€ì´ë“œ ê³µìœ ", "ì„œë¹„ìŠ¤ ë³´ê¸°"], sidebarTitle: "ì´ ê°€ì´ë“œ", sidebar: ["ê³µì‹", "ë¹„ìš©", "ì˜í–¥", "ëŒ€ì‹œë³´ë“œ", "ì²´í¬ë¦¬ìŠ¤íŠ¸"] }
  },
  "guia-crm-ia-ventas-soporte.html": {
    es: { label: "Guia Tecnotitan / CRM con IA", title: "CRM con IA para ventas y soporte: menos registros, mas decisiones", intro: "Una guia para conectar seguimiento comercial, atencion, datos y automatizacion inteligente.", meta: ["Actualizado: junio 2026", "Lectura: 13 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver Copiloto Pyme"], sidebarTitle: "En esta guia", sidebar: ["Datos", "Seguimiento", "Agentes", "Reportes", "Checklist"] },
    en: { label: "Tecnotitan Guide / AI CRM", title: "AI CRM for sales and support: fewer records, better decisions", intro: "A guide to connect commercial follow-up, support, data and intelligent automation.", meta: ["Updated: June 2026", "Reading time: 13 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View Copiloto Pyme"], sidebarTitle: "In this guide", sidebar: ["Data", "Follow-up", "Agents", "Reports", "Checklist"] },
    pt: { label: "Guia Tecnotitan / CRM com IA", title: "CRM com IA para vendas e suporte: menos registros, mais decisoes", intro: "Guia para conectar acompanhamento comercial, atendimento, dados e automacao inteligente.", meta: ["Atualizado: junho de 2026", "Leitura: 13 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver Copiloto Pyme"], sidebarTitle: "Neste guia", sidebar: ["Dados", "Acompanhamento", "Agentes", "Relatorios", "Checklist"] },
    zh: { label: "Tecnotitan æŒ‡å— / AI CRM", title: "é”€å”®ä¸Žæ”¯æŒ AI CRMï¼šå°‘å¡«è®°å½•ï¼Œå¤šåšå†³ç­–", intro: "è¿žæŽ¥é”€å”®è·Ÿè¿›ã€å®¢æˆ·æ”¯æŒã€æ•°æ®å’Œæ™ºèƒ½è‡ªåŠ¨åŒ–çš„æŒ‡å—ã€‚", meta: ["æ›´æ–°ï¼š2026 å¹´ 6 æœˆ", "é˜…è¯»æ—¶é—´ï¼š13 åˆ†é’Ÿ", "å¯ä¸‹è½½ PDF"], actions: ["ä¸‹è½½ PDF", "ä¿å­˜ä¸º PDF", "åˆ†äº«æŒ‡å—", "æŸ¥çœ‹ Copiloto Pyme"], sidebarTitle: "æœ¬æŒ‡å—å†…å®¹", sidebar: ["æ•°æ®", "è·Ÿè¿›", "æ™ºèƒ½ä½“", "æŠ¥å‘Š", "æ¸…å•"] },
    ja: { label: "Tecnotitan ã‚¬ã‚¤ãƒ‰ / AI CRM", title: "å–¶æ¥­ã¨ã‚µãƒãƒ¼ãƒˆã®ãŸã‚ã® AI CRMï¼šå…¥åŠ›ã‚’æ¸›ã‚‰ã—æ„æ€æ±ºå®šã‚’å¢—ã‚„ã™", intro: "å–¶æ¥­ãƒ•ã‚©ãƒ­ãƒ¼ã€ã‚µãƒãƒ¼ãƒˆã€ãƒ‡ãƒ¼ã‚¿ã€ã‚¤ãƒ³ãƒ†ãƒªã‚¸ã‚§ãƒ³ãƒˆè‡ªå‹•åŒ–ã‚’ã¤ãªãã‚¬ã‚¤ãƒ‰ã§ã™ã€‚", meta: ["æ›´æ–°ï¼š2026å¹´6æœˆ", "èª­äº†æ™‚é–“ï¼š13åˆ†", "PDF ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"], actions: ["PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "PDF ã¨ã—ã¦ä¿å­˜", "ã‚¬ã‚¤ãƒ‰ã‚’å…±æœ‰", "Copiloto Pyme ã‚’è¦‹ã‚‹"], sidebarTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰", sidebar: ["ãƒ‡ãƒ¼ã‚¿", "ãƒ•ã‚©ãƒ­ãƒ¼", "ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆ", "ãƒ¬ãƒãƒ¼ãƒˆ", "ãƒã‚§ãƒƒã‚¯ãƒªã‚¹ãƒˆ"] },
    ko: { label: "Tecnotitan ê°€ì´ë“œ / AI CRM", title: "ì˜ì—…ê³¼ ì§€ì›ì„ ìœ„í•œ AI CRM: ê¸°ë¡ì€ ì¤„ì´ê³  ê²°ì •ì€ ëŠ˜ë¦¬ê¸°", intro: "ì˜ì—… í›„ì† ì¡°ì¹˜, ì§€ì›, ë°ì´í„°, ì§€ëŠ¥í˜• ìžë™í™”ë¥¼ ì—°ê²°í•˜ëŠ” ê°€ì´ë“œìž…ë‹ˆë‹¤.", meta: ["ì—…ë°ì´íŠ¸: 2026ë…„ 6ì›”", "ì½ëŠ” ì‹œê°„: 13ë¶„", "PDF ë‹¤ìš´ë¡œë“œ"], actions: ["PDF ë‹¤ìš´ë¡œë“œ", "PDFë¡œ ì €ìž¥", "ê°€ì´ë“œ ê³µìœ ", "Copiloto Pyme ë³´ê¸°"], sidebarTitle: "ì´ ê°€ì´ë“œ", sidebar: ["ë°ì´í„°", "í›„ì† ì¡°ì¹˜", "ì—ì´ì „íŠ¸", "ë³´ê³ ì„œ", "ì²´í¬ë¦¬ìŠ¤íŠ¸"] }
  },
  "guia-roadmap-transformacion-digital-pymes.html": {
    es: { label: "Guia Tecnotitan / Transformacion digital", title: "Roadmap de transformacion digital para pymes en 90 dias", intro: "Una guia para ordenar tecnologia, procesos, datos e IA con prioridades ejecutables.", meta: ["Actualizado: junio 2026", "Lectura: 16 min", "PDF descargable"], actions: ["Descargar PDF", "Guardar como PDF", "Compartir guia", "Ver transformacion"], sidebarTitle: "En esta guia", sidebar: ["Diagnostico", "Prioridades", "90 dias", "Adopcion", "Checklist"] },
    en: { label: "Tecnotitan Guide / Digital transformation", title: "Digital transformation roadmap for SMBs in 90 days", intro: "A guide to organize technology, processes, data and AI into executable priorities.", meta: ["Updated: June 2026", "Reading time: 16 min", "Downloadable PDF"], actions: ["Download PDF", "Save as PDF", "Share guide", "View transformation"], sidebarTitle: "In this guide", sidebar: ["Diagnosis", "Priorities", "90 days", "Adoption", "Checklist"] },
    pt: { label: "Guia Tecnotitan / Transformacao digital", title: "Roadmap de transformacao digital para pymes em 90 dias", intro: "Guia para organizar tecnologia, processos, dados e IA com prioridades executaveis.", meta: ["Atualizado: junho de 2026", "Leitura: 16 min", "PDF para baixar"], actions: ["Baixar PDF", "Salvar como PDF", "Compartilhar guia", "Ver transformacao"], sidebarTitle: "Neste guia", sidebar: ["Diagnostico", "Prioridades", "90 dias", "Adocao", "Checklist"] },
    zh: { label: "Tecnotitan æŒ‡å— / æ•°å­—åŒ–è½¬åž‹", title: "ä¸­å°ä¼ä¸š 90 å¤©æ•°å­—åŒ–è½¬åž‹è·¯çº¿å›¾", intro: "å°†æŠ€æœ¯ã€æµç¨‹ã€æ•°æ®å’Œ AI æ•´ç†ä¸ºå¯æ‰§è¡Œä¼˜å…ˆçº§çš„æŒ‡å—ã€‚", meta: ["æ›´æ–°ï¼š2026 å¹´ 6 æœˆ", "é˜…è¯»æ—¶é—´ï¼š16 åˆ†é’Ÿ", "å¯ä¸‹è½½ PDF"], actions: ["ä¸‹è½½ PDF", "ä¿å­˜ä¸º PDF", "åˆ†äº«æŒ‡å—", "æŸ¥çœ‹è½¬åž‹æœåŠ¡"], sidebarTitle: "æœ¬æŒ‡å—å†…å®¹", sidebar: ["è¯Šæ–­", "ä¼˜å…ˆçº§", "90 å¤©", "é‡‡ç”¨", "æ¸…å•"] },
    ja: { label: "Tecnotitan ã‚¬ã‚¤ãƒ‰ / ãƒ‡ã‚¸ã‚¿ãƒ«å¤‰é©", title: "ä¸­å°ä¼æ¥­å‘ã‘ 90 æ—¥ãƒ‡ã‚¸ã‚¿ãƒ«å¤‰é©ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—", intro: "æŠ€è¡“ã€æ¥­å‹™ã€ãƒ‡ãƒ¼ã‚¿ã€AI ã‚’å®Ÿè¡Œå¯èƒ½ãªå„ªå…ˆé †ä½ã«æ•´ç†ã™ã‚‹ã‚¬ã‚¤ãƒ‰ã§ã™ã€‚", meta: ["æ›´æ–°ï¼š2026å¹´6æœˆ", "èª­äº†æ™‚é–“ï¼š16åˆ†", "PDF ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰"], actions: ["PDF ã‚’ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰", "PDF ã¨ã—ã¦ä¿å­˜", "ã‚¬ã‚¤ãƒ‰ã‚’å…±æœ‰", "å¤‰é©ã‚µãƒ¼ãƒ“ã‚¹ã‚’è¦‹ã‚‹"], sidebarTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰", sidebar: ["è¨ºæ–­", "å„ªå…ˆé †ä½", "90æ—¥", "å®šç€", "ãƒã‚§ãƒƒã‚¯ãƒªã‚¹ãƒˆ"] },
    ko: { label: "Tecnotitan ê°€ì´ë“œ / ë””ì§€í„¸ ì „í™˜", title: "ì¤‘ì†Œê¸°ì—…ì„ ìœ„í•œ 90ì¼ ë””ì§€í„¸ ì „í™˜ ë¡œë“œë§µ", intro: "ê¸°ìˆ , í”„ë¡œì„¸ìŠ¤, ë°ì´í„°, AIë¥¼ ì‹¤í–‰ ê°€ëŠ¥í•œ ìš°ì„ ìˆœìœ„ë¡œ ì •ë¦¬í•˜ëŠ” ê°€ì´ë“œìž…ë‹ˆë‹¤.", meta: ["ì—…ë°ì´íŠ¸: 2026ë…„ 6ì›”", "ì½ëŠ” ì‹œê°„: 16ë¶„", "PDF ë‹¤ìš´ë¡œë“œ"], actions: ["PDF ë‹¤ìš´ë¡œë“œ", "PDFë¡œ ì €ìž¥", "ê°€ì´ë“œ ê³µìœ ", "ì „í™˜ ì„œë¹„ìŠ¤ ë³´ê¸°"], sidebarTitle: "ì´ ê°€ì´ë“œ", sidebar: ["ì§„ë‹¨", "ìš°ì„ ìˆœìœ„", "90ì¼", "ë„ìž…", "ì²´í¬ë¦¬ìŠ¤íŠ¸"] }
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
    authorLabel: "æœºæž„ä½œè€…",
    authorName: "Tecnotitan Editorial",
    authorText: "è½¯ä»¶ã€äººå·¥æ™ºèƒ½ä¸ŽæŠ€æœ¯è½¬åž‹å›¢é˜Ÿã€‚",
    updatedLabel: "æ›´æ–°æ—¥æœŸ",
    updatedText: "2026 å¹´ 6 æœˆ",
    reviewedLabel: "å®¡æ ¸",
    reviewedText: "äº§å“è´Ÿè´£äººå’Œ AI å’¨è¯¢å›¢é˜Ÿã€‚",
    methodLabel: "ç¼–è¾‘æ–¹æ³•",
    methodLink: "ç¼–è¾‘æ”¿ç­–ä¸Žæ–¹æ³•",
    sidebarTitle: "ç¼–è¾‘æ ‡å‡†",
    sidebarText: "Tecnotitan åŸºäºŽå®žè·µç»éªŒã€äººå·¥å®¡æ ¸å’Œä¼ä¸šå®žæ–½è§†è§’åˆ›å»ºæŒ‡å—ã€‚",
    sectionKicker: "ç¼–è¾‘å¯ä¿¡åº¦",
    sectionTitle: "æˆ‘ä»¬å¦‚ä½•å®¡æ ¸æœ¬æŒ‡å—",
    cards: [
      ["æœºæž„ä½œè€…", "æœ¬æŒ‡å—ç”± Tecnotitan Editorial å‘å¸ƒï¼Œè®°å½•è½¯ä»¶ã€AIã€è‡ªåŠ¨åŒ–å’ŒæŠ€æœ¯è½¬åž‹ç»éªŒã€‚"],
      ["äººå·¥å®¡æ ¸", "å†…å®¹ç»è¿‡äººå·¥å®¡æ ¸ï¼Œç¡®ä¿æ¸…æ™°ã€å®žç”¨ã€è´Ÿè´£ä»»å¹¶ç¬¦åˆ Tecnotitan çš„çœŸå®žæœåŠ¡ã€‚"],
      ["æ¥æºä¸Žæ–¹æ³•", "æˆ‘ä»¬ç»“åˆè¿è¥ç»éªŒã€å®žæ–½æ ‡å‡†ã€æŠ€æœ¯æ–‡æ¡£å’Œå…¬å¼€æœ€ä½³å®žè·µã€‚"],
      ["æ›´æ–°æœºåˆ¶", "å½“äº§å“ã€æŠ€æœ¯ã€é£Žé™©ã€æµç¨‹æˆ–ä¼ä¸šå»ºè®®å‘ç”Ÿå˜åŒ–æ—¶ï¼Œæˆ‘ä»¬ä¼šæ›´æ–°æŒ‡å—ã€‚"]
    ],
    note: "è¿™äº›æŒ‡å—ä¸æ›¿ä»£ä¸“ä¸šæ³•å¾‹ã€è´¢åŠ¡æˆ–æŠ€æœ¯å»ºè®®ï¼Œç›®çš„æ˜¯å¸®åŠ©å›¢é˜Ÿåœ¨å®žæ–½æŠ€æœ¯å‰åšå‡ºæ›´å¥½çš„å†³ç­–ã€‚",
    aboutUrl: "guides/about-tecnotitan-guides.html"
  },
  ja: {
    authorLabel: "æ©Ÿé–¢è‘—è€…",
    authorName: "Tecnotitan Editorial",
    authorText: "ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€æŠ€è¡“å¤‰é©ãƒãƒ¼ãƒ ã€‚",
    updatedLabel: "æ›´æ–°æ—¥",
    updatedText: "2026å¹´6æœˆ",
    reviewedLabel: "ãƒ¬ãƒ“ãƒ¥ãƒ¼",
    reviewedText: "ãƒ—ãƒ­ãƒ€ã‚¯ãƒˆè²¬ä»»è€…ã¨AIã‚³ãƒ³ã‚µãƒ«ãƒ†ã‚£ãƒ³ã‚°ãƒãƒ¼ãƒ ã€‚",
    methodLabel: "ç·¨é›†æ–¹æ³•",
    methodLink: "ç·¨é›†ãƒãƒªã‚·ãƒ¼ã¨æ–¹æ³•è«–",
    sidebarTitle: "ç·¨é›†åŸºæº–",
    sidebarText: "Tecnotitanã®ã‚¬ã‚¤ãƒ‰ã¯å®Ÿå‹™çµŒé¨“ã€äººã«ã‚ˆã‚‹ãƒ¬ãƒ“ãƒ¥ãƒ¼ã€ä¼æ¥­å°Žå…¥ã®è¦–ç‚¹ã§ä½œæˆã•ã‚Œã¦ã„ã¾ã™ã€‚",
    sectionKicker: "ç·¨é›†ä¸Šã®ä¿¡é ¼æ€§",
    sectionTitle: "ã“ã®ã‚¬ã‚¤ãƒ‰ã®ãƒ¬ãƒ“ãƒ¥ãƒ¼æ–¹æ³•",
    cards: [
      ["æ©Ÿé–¢è‘—è€…", "ã“ã®ã‚¬ã‚¤ãƒ‰ã¯ã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€è‡ªå‹•åŒ–ã€æŠ€è¡“å¤‰é©ã®å­¦ã³ã‚’è¨˜éŒ²ã™ã‚‹Tecnotitan EditorialãŒå…¬é–‹ã—ã¦ã„ã¾ã™ã€‚"],
      ["äººã«ã‚ˆã‚‹ãƒ¬ãƒ“ãƒ¥ãƒ¼", "æ˜Žç¢ºã•ã€å®Ÿç”¨æ€§ã€è²¬ä»»ã‚ã‚‹AIåˆ©ç”¨ã€Tecnotitanã®å®Ÿã‚µãƒ¼ãƒ“ã‚¹ã¨ã®æ•´åˆæ€§ã‚’ç¢ºèªã—ã¾ã™ã€‚"],
      ["æƒ…å ±æºã¨æ–¹æ³•", "å®Ÿå‹™çµŒé¨“ã€å°Žå…¥åŸºæº–ã€æŠ€è¡“æ–‡æ›¸ã€å…¬é–‹ãƒ™ã‚¹ãƒˆãƒ—ãƒ©ã‚¯ãƒ†ã‚£ã‚¹ã‚’å¿…è¦ã«å¿œã˜ã¦å‚ç…§ã—ã¾ã™ã€‚"],
      ["æ›´æ–°", "è£½å“ã€æŠ€è¡“ã€ãƒªã‚¹ã‚¯ã€ãƒ—ãƒ­ã‚»ã‚¹ã€ä¼æ¥­å‘ã‘æŽ¨å¥¨äº‹é …ãŒå¤‰ã‚ã‚‹ã¨æ›´æ–°ã—ã¾ã™ã€‚"]
    ],
    note: "ã“ã‚Œã‚‰ã®ã‚¬ã‚¤ãƒ‰ã¯å°‚é–€çš„ãªæ³•å‹™ã€è²¡å‹™ã€æŠ€è¡“åŠ©è¨€ã®ä»£æ›¿ã§ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚æŠ€è¡“å°Žå…¥å‰ã®æ„æ€æ±ºå®šã‚’æ”¯æ´ã™ã‚‹ã‚‚ã®ã§ã™ã€‚",
    aboutUrl: "guides/about-tecnotitan-guides.html"
  },
  ko: {
    authorLabel: "ê¸°ê´€ ì €ìž",
    authorName: "Tecnotitan Editorial",
    authorText: "ì†Œí”„íŠ¸ì›¨ì–´, AI, ê¸°ìˆ  ì „í™˜ íŒ€.",
    updatedLabel: "ì—…ë°ì´íŠ¸",
    updatedText: "2026ë…„ 6ì›”",
    reviewedLabel: "ê²€í† ",
    reviewedText: "ì œí’ˆ ë¦¬ë”ì‹­ ë° AI ì»¨ì„¤íŒ… íŒ€.",
    methodLabel: "íŽ¸ì§‘ ë°©ë²•",
    methodLink: "íŽ¸ì§‘ ì •ì±… ë° ë°©ë²•ë¡ ",
    sidebarTitle: "íŽ¸ì§‘ ê¸°ì¤€",
    sidebarText: "Tecnotitan ê°€ì´ë“œëŠ” ì‹¤ë¬´ ê²½í—˜, ì¸ê°„ ê²€í† , ê¸°ì—… êµ¬í˜„ ê´€ì ìœ¼ë¡œ ì œìž‘ë©ë‹ˆë‹¤.",
    sectionKicker: "íŽ¸ì§‘ ì‹ ë¢°",
    sectionTitle: "ì´ ê°€ì´ë“œë¥¼ ê²€í† í•˜ëŠ” ë°©ë²•",
    cards: [
      ["ê¸°ê´€ ì €ìž", "ì´ ê°€ì´ë“œëŠ” ì†Œí”„íŠ¸ì›¨ì–´, AI, ìžë™í™”, ê¸°ìˆ  ì „í™˜ í•™ìŠµì„ ë¬¸ì„œí™”í•˜ëŠ” Tecnotitan Editorialì´ ë°œí–‰í•©ë‹ˆë‹¤."],
      ["ì¸ê°„ ê²€í† ", "ëª…í™•ì„±, ì‹¤ìš©ì„±, ì±…ìž„ ìžˆëŠ” AI ì‚¬ìš©, ì‹¤ì œ Tecnotitan ì„œë¹„ìŠ¤ì™€ì˜ ì¼ê´€ì„±ì„ ê²€í† í•©ë‹ˆë‹¤."],
      ["ì¶œì²˜ì™€ ë°©ë²•ë¡ ", "ìš´ì˜ ê²½í—˜, êµ¬í˜„ ê¸°ì¤€, ê¸°ìˆ  ë¬¸ì„œ, ê³µê°œ ëª¨ë²” ì‚¬ë¡€ë¥¼ í•„ìš”ì— ë”°ë¼ í™œìš©í•©ë‹ˆë‹¤."],
      ["ì—…ë°ì´íŠ¸", "ì œí’ˆ, ê¸°ìˆ , ìœ„í—˜, í”„ë¡œì„¸ìŠ¤ ë˜ëŠ” ë¹„ì¦ˆë‹ˆìŠ¤ ê¶Œìž¥ ì‚¬í•­ì´ ë°”ë€Œë©´ ê°€ì´ë“œë¥¼ ì—…ë°ì´íŠ¸í•©ë‹ˆë‹¤."]
    ],
    note: "ì´ ê°€ì´ë“œëŠ” ì „ë¬¸ ë²•ë¥ , ìž¬ë¬´ ë˜ëŠ” ê¸°ìˆ  ìžë¬¸ì„ ëŒ€ì²´í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤. ê¸°ìˆ  êµ¬í˜„ ì „ ë” ë‚˜ì€ ê²°ì •ì„ ë•ê¸° ìœ„í•œ ìžë£Œìž…ë‹ˆë‹¤.",
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
        legalLinks.append(links[0], " Â· ", links[1], " Â· ", links[2], " Â· ", links[3]);
        links[0].textContent = dictionary.footerMeta[3].split(" Â· ")[0];
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
    zh: "äººæ‰",
    ja: "æŽ¡ç”¨",
    ko: "ì¸ìž¬"
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
    zh: "æŸ¥çœ‹ Investor Deck",
    ja: "Investor Deckã‚’è¦‹ã‚‹",
    ko: "Investor Deck ë³´ê¸°"
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
      pt: ["Enviando...", "NÃ£o foi possÃ­vel enviar", "Tente novamente ou escreva diretamente para info@tecnotitan.com."],
      zh: ["æ­£åœ¨å‘é€...", "æ— æ³•å‘é€", "è¯·é‡è¯•ï¼Œæˆ–ç›´æŽ¥å†™ä¿¡è‡³ info@tecnotitan.comã€‚"],
      ja: ["é€ä¿¡ä¸­...", "é€ä¿¡ã§ãã¾ã›ã‚“ã§ã—ãŸ", "ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ã„ãŸã ãã‹ã€info@tecnotitan.com ã¸ç›´æŽ¥ã”é€£çµ¡ãã ã•ã„ã€‚"],
      ko: ["ì „ì†¡ ì¤‘...", "ì „ì†¡í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤", "ë‹¤ì‹œ ì‹œë„í•˜ê±°ë‚˜ info@tecnotitan.com ìœ¼ë¡œ ì§ì ‘ ì—°ë½í•´ ì£¼ì„¸ìš”."]
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
    <p><strong>Privacidad</strong>Usamos mÃ©tricas agregadas, geolocalizaciÃ³n aproximada por paÃ­s y formularios para mejorar Tecnotitan. No vendemos datos personales ni almacenamos IPs crudas.</p>
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
      title: "Tecnotitan æŒ‡å— | ä¼ä¸š AIã€è½¯ä»¶ä¸ŽæŠ€æœ¯",
      description: "Tecnotitan å…³äºŽåœ¨å·¥ä½œä¸­ä½¿ç”¨äººå·¥æ™ºèƒ½ã€è½¯ä»¶ã€è‡ªåŠ¨åŒ–å’Œåº”ç”¨æŠ€æœ¯çš„å®žç”¨æŒ‡å—ã€‚"
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "å¦‚ä½•åœ¨å·¥ä½œä¸­ä½¿ç”¨ ChatGPTï¼šä¼ä¸šå®žç”¨æŒ‡å— | Tecnotitan",
      description: "å…³äºŽåœ¨å·¥ä½œä¸­å®‰å…¨ã€æœ‰æ•ˆä½¿ç”¨ ChatGPT çš„ä¼ä¸šæŒ‡å—ï¼ŒåŒ…å«æç¤ºè¯ã€æ¡ˆä¾‹å’Œå†…éƒ¨æ”¿ç­–ã€‚"
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "å¦‚ä½•ç”¨ AI è‡ªåŠ¨åŒ–å®¢æˆ·æœåŠ¡ï¼šä¼ä¸šæŒ‡å— | Tecnotitan",
      description: "å…³äºŽ AI å®¢æœè‡ªåŠ¨åŒ–ã€æ™ºèƒ½ä½“ã€äººå·¥å‡çº§ã€æ”¯æŒæŒ‡æ ‡å’Œè¿è¥æµç¨‹çš„æŒ‡å—ã€‚"
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "ä¸­å°ä¼ä¸šä¸šåŠ¡è½¯ä»¶ï¼šé‡‡è´­ä¸Žå®žæ–½æŒ‡å— | Tecnotitan",
      description: "é€‰æ‹©ä¸­å°ä¼ä¸šè½¯ä»¶çš„æŒ‡å—ï¼šCRMã€ä»ªè¡¨ç›˜ã€è‡ªåŠ¨åŒ–ã€é›†æˆã€å®‰å…¨å’Œé‡‡ç”¨ã€‚"
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "B2B é”€å”® ChatGPT æç¤ºè¯ï¼šå®žç”¨æŒ‡å— | Tecnotitan",
      description: "ç”¨äºŽ B2B å¼€å‘ã€å®¢æˆ·ç ”ç©¶ã€é”€å”®é‚®ä»¶ã€å¼‚è®®å¤„ç†ã€ä¼šè®®å’Œè·Ÿè¿›çš„ ChatGPT æç¤ºè¯ã€‚"
    }
  },
  ja: {
    "guias.html": {
      title: "Tecnotitan ã‚¬ã‚¤ãƒ‰ | ä¼æ¥­å‘ã‘ AIã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼",
      description: "ä»•äº‹ã§ AIã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€è‡ªå‹•åŒ–ã€å¿œç”¨ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼ã‚’æ´»ç”¨ã™ã‚‹ãŸã‚ã® Tecnotitan å®Ÿè·µã‚¬ã‚¤ãƒ‰ã€‚"
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "ä»•äº‹ã§ ChatGPT ã‚’ä½¿ã†æ–¹æ³•ï¼šä¼æ¥­å‘ã‘å®Ÿè·µã‚¬ã‚¤ãƒ‰ | Tecnotitan",
      description: "ãƒ—ãƒ­ãƒ³ãƒ—ãƒˆã€å®‰å…¨æ€§ã€éƒ¨é–€åˆ¥ã®ä¾‹ã€ç¤¾å†…ãƒãƒªã‚·ãƒ¼ã‚’å«ã‚€ ChatGPT æ´»ç”¨ã‚¬ã‚¤ãƒ‰ã€‚"
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "AI ã§ã‚«ã‚¹ã‚¿ãƒžãƒ¼ã‚µãƒ¼ãƒ“ã‚¹ã‚’è‡ªå‹•åŒ–ã™ã‚‹æ–¹æ³• | Tecnotitan",
      description: "AI ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€äººã¸ã®å¼•ãç¶™ãŽã€ã‚µãƒãƒ¼ãƒˆæŒ‡æ¨™ã€é‹ç”¨ãƒ•ãƒ­ãƒ¼ã®å®Ÿè·µã‚¬ã‚¤ãƒ‰ã€‚"
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "ä¸­å°ä¼æ¥­å‘ã‘æ¥­å‹™ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ï¼šè³¼å…¥ã¨å°Žå…¥ã‚¬ã‚¤ãƒ‰ | Tecnotitan",
      description: "CRMã€ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€è‡ªå‹•åŒ–ã€é€£æºã€ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã€å®šç€ã‚’è©•ä¾¡ã™ã‚‹ã‚¬ã‚¤ãƒ‰ã€‚"
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "B2B å–¶æ¥­å‘ã‘ ChatGPT ãƒ—ãƒ­ãƒ³ãƒ—ãƒˆå®Ÿè·µã‚¬ã‚¤ãƒ‰ | Tecnotitan",
      description: "ã‚¢ã‚«ã‚¦ãƒ³ãƒˆèª¿æŸ»ã€å–¶æ¥­ãƒ¡ãƒ¼ãƒ«ã€åè«–å¯¾å¿œã€å•†è«‡æº–å‚™ã€ãƒ•ã‚©ãƒ­ãƒ¼ã‚¢ãƒƒãƒ—ã®ãƒ—ãƒ­ãƒ³ãƒ—ãƒˆã€‚"
    }
  },
  ko: {
    "guias.html": {
      title: "Tecnotitan ê°€ì´ë“œ | ê¸°ì—…ìš© AI, ì†Œí”„íŠ¸ì›¨ì–´ì™€ ê¸°ìˆ ",
      description: "ì—…ë¬´ì—ì„œ ì¸ê³µì§€ëŠ¥, ì†Œí”„íŠ¸ì›¨ì–´, ìžë™í™”ì™€ ì‘ìš© ê¸°ìˆ ì„ í™œìš©í•˜ê¸° ìœ„í•œ Tecnotitan ì‹¤ë¬´ ê°€ì´ë“œ."
    },
    "guia-como-usar-chatgpt-en-el-trabajo.html": {
      title: "ì—…ë¬´ì—ì„œ ChatGPTë¥¼ ì‚¬ìš©í•˜ëŠ” ë°©ë²•: ê¸°ì—… ì‹¤ë¬´ ê°€ì´ë“œ | Tecnotitan",
      description: "í”„ë¡¬í”„íŠ¸, ë³´ì•ˆ, ë¶€ì„œë³„ ì‚¬ë¡€, ë‚´ë¶€ ì •ì±…ì„ í¬í•¨í•œ ê¸°ì—…ìš© ChatGPT í™œìš© ê°€ì´ë“œ."
    },
    "guia-automatizar-atencion-cliente-con-ia.html": {
      title: "AIë¡œ ê³ ê° ì„œë¹„ìŠ¤ë¥¼ ìžë™í™”í•˜ëŠ” ë°©ë²•: ê¸°ì—… ê°€ì´ë“œ | Tecnotitan",
      description: "AI ìƒë‹´, ì‚¬ëžŒ ì—ìŠ¤ì»¬ë ˆì´ì…˜, ì§€ì› ì§€í‘œì™€ ìš´ì˜ íë¦„ì„ ë‹¤ë£¨ëŠ” ê°€ì´ë“œ."
    },
    "guia-software-empresarial-para-pymes.html": {
      title: "ì¤‘ì†Œê¸°ì—…ìš© ì—…ë¬´ ì†Œí”„íŠ¸ì›¨ì–´: êµ¬ë§¤ì™€ ë„ìž… ê°€ì´ë“œ | Tecnotitan",
      description: "CRM, ëŒ€ì‹œë³´ë“œ, ìžë™í™”, í†µí•©, ë³´ì•ˆ, ë„ìž…ì„ í‰ê°€í•˜ëŠ” ê°€ì´ë“œ."
    },
    "guia-prompts-chatgpt-ventas-b2b.html": {
      title: "B2B ì˜ì—…ì„ ìœ„í•œ ChatGPT í”„ë¡¬í”„íŠ¸ ì‹¤ë¬´ ê°€ì´ë“œ | Tecnotitan",
      description: "ìž ìž¬ê³ ê° ë°œêµ´, ê³„ì • ì¡°ì‚¬, ì´ë©”ì¼, ë°˜ë¡  ì²˜ë¦¬, ë¯¸íŒ…ê³¼ í›„ì† ì¡°ì¹˜ í”„ë¡¬í”„íŠ¸."
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
      title: "ä¼ä¸š AI æ²»ç†ï¼šå®žç”¨æŒ‡å— | Tecnotitan",
      description: "ä¼ä¸š AI æ²»ç†æŒ‡å—ï¼šæ”¿ç­–ã€æ•°æ®ã€é£Žé™©ã€å®¡æ‰¹ã€å®‰å…¨å’Œè´Ÿè´£ä»»é‡‡ç”¨ã€‚"
    },
    "guia-roi-automatizacion-ia.html": {
      title: "AI è‡ªåŠ¨åŒ– ROIï¼šä¼ä¸šæŒ‡å— | Tecnotitan",
      description: "è®¡ç®— AI è‡ªåŠ¨åŒ– ROI çš„æŒ‡å—ï¼šæˆæœ¬ã€èŠ‚çœæ—¶é—´ã€è´¨é‡ã€æ”¶å…¥ã€é£Žé™©å’Œè¡¡é‡ã€‚"
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "é”€å”®ä¸Žæ”¯æŒ AI CRMï¼šå®žç”¨æŒ‡å— | Tecnotitan",
      description: "åœ¨é”€å”®å’Œå®¢æˆ·æ”¯æŒä¸­å®žæ–½ AI CRM çš„æŒ‡å—ï¼šæ•°æ®ã€è·Ÿè¿›ã€æ™ºèƒ½ä½“ã€æŠ¥å‘Šå’Œé‡‡ç”¨ã€‚"
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "ä¸­å°ä¼ä¸šæ•°å­—åŒ–è½¬åž‹è·¯çº¿å›¾ | Tecnotitan",
      description: "ä¸­å°ä¼ä¸šæ•°å­—åŒ–è½¬åž‹è·¯çº¿å›¾æŒ‡å—ï¼šè¯Šæ–­ã€ä¼˜å…ˆçº§ã€è½¯ä»¶ã€AI å’ŒæŒ‡æ ‡ã€‚"
    }
  },
  ja: {
    "guia-gobernanza-ia-empresas.html": {
      title: "ä¼æ¥­å‘ã‘ AI ã‚¬ãƒãƒŠãƒ³ã‚¹å®Ÿè·µã‚¬ã‚¤ãƒ‰ | Tecnotitan",
      description: "ä¼æ¥­ã® AI ã‚¬ãƒãƒŠãƒ³ã‚¹ã€ãƒãƒªã‚·ãƒ¼ã€ãƒ‡ãƒ¼ã‚¿ã€ãƒªã‚¹ã‚¯ã€æ‰¿èªã€ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã€å°Žå…¥ã®ã‚¬ã‚¤ãƒ‰ã€‚"
    },
    "guia-roi-automatizacion-ia.html": {
      title: "AI è‡ªå‹•åŒ– ROIï¼šä¼æ¥­å‘ã‘ã‚¬ã‚¤ãƒ‰ | Tecnotitan",
      description: "AI è‡ªå‹•åŒ– ROI ã‚’è¨ˆç®—ã™ã‚‹ã‚¬ã‚¤ãƒ‰ï¼šã‚³ã‚¹ãƒˆã€å‰Šæ¸›æ™‚é–“ã€å“è³ªã€å£²ä¸Šã€ãƒªã‚¹ã‚¯ã€æ¸¬å®šã€‚"
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "å–¶æ¥­ã¨ã‚µãƒãƒ¼ãƒˆã® AI CRM å®Ÿè·µã‚¬ã‚¤ãƒ‰ | Tecnotitan",
      description: "å–¶æ¥­ã¨ã‚µãƒãƒ¼ãƒˆã« AI CRM ã‚’å°Žå…¥ã™ã‚‹ãŸã‚ã®ãƒ‡ãƒ¼ã‚¿ã€ãƒ•ã‚©ãƒ­ãƒ¼ã€ã‚¨ãƒ¼ã‚¸ã‚§ãƒ³ãƒˆã€ãƒ¬ãƒãƒ¼ãƒˆã€å®šç€ã‚¬ã‚¤ãƒ‰ã€‚"
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "ä¸­å°ä¼æ¥­å‘ã‘ãƒ‡ã‚¸ã‚¿ãƒ«å¤‰é©ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ— | Tecnotitan",
      description: "ä¸­å°ä¼æ¥­ã®ãƒ‡ã‚¸ã‚¿ãƒ«å¤‰é©ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—ï¼šè¨ºæ–­ã€å„ªå…ˆé †ä½ã€ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã€AIã€æŒ‡æ¨™ã€‚"
    }
  },
  ko: {
    "guia-gobernanza-ia-empresas.html": {
      title: "ê¸°ì—… AI ê±°ë²„ë„ŒìŠ¤ ì‹¤ë¬´ ê°€ì´ë“œ | Tecnotitan",
      description: "ê¸°ì—… AI ê±°ë²„ë„ŒìŠ¤, ì •ì±…, ë°ì´í„°, ìœ„í—˜, ìŠ¹ì¸, ë³´ì•ˆ, ì±…ìž„ ìžˆëŠ” ë„ìž… ê°€ì´ë“œ."
    },
    "guia-roi-automatizacion-ia.html": {
      title: "AI ìžë™í™” ROI: ê¸°ì—… ê°€ì´ë“œ | Tecnotitan",
      description: "AI ìžë™í™” ROI ê³„ì‚° ê°€ì´ë“œ: ë¹„ìš©, ì ˆê° ì‹œê°„, í’ˆì§ˆ, ë§¤ì¶œ, ìœ„í—˜, ì¸¡ì •."
    },
    "guia-crm-ia-ventas-soporte.html": {
      title: "ì˜ì—…ê³¼ ì§€ì›ì„ ìœ„í•œ AI CRM ì‹¤ë¬´ ê°€ì´ë“œ | Tecnotitan",
      description: "ì˜ì—…ê³¼ ê³ ê° ì§€ì›ì— AI CRMì„ ë„ìž…í•˜ëŠ” ë°ì´í„°, í›„ì† ì¡°ì¹˜, ì—ì´ì „íŠ¸, ë³´ê³ , ë„ìž… ê°€ì´ë“œ."
    },
    "guia-roadmap-transformacion-digital-pymes.html": {
      title: "ì¤‘ì†Œê¸°ì—…ì„ ìœ„í•œ ë””ì§€í„¸ ì „í™˜ ë¡œë“œë§µ | Tecnotitan",
      description: "ì¤‘ì†Œê¸°ì—… ë””ì§€í„¸ ì „í™˜ ë¡œë“œë§µ ê°€ì´ë“œ: ì§„ë‹¨, ìš°ì„ ìˆœìœ„, ì†Œí”„íŠ¸ì›¨ì–´, AI, ì§€í‘œ."
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
  zh: ["04", "æŒ‡å—", "å¯ä¸‹è½½ã€å¯åˆ†äº«çš„å®žç”¨æ–‡ç« ï¼Œå¸®åŠ©ä¼ä¸šåº”ç”¨ AI å’Œè½¯ä»¶ã€‚"],
  ja: ["04", "ã‚¬ã‚¤ãƒ‰", "ä¼æ¥­ã§ AI ã¨ã‚½ãƒ•ãƒˆã‚¦ã‚§ã‚¢ã‚’æ´»ç”¨ã™ã‚‹ãŸã‚ã®å®Ÿè·µçš„ã§å…±æœ‰å¯èƒ½ãªè¨˜äº‹ã€‚"],
  ko: ["04", "ê°€ì´ë“œ", "ê¸°ì—…ì—ì„œ AIì™€ ì†Œí”„íŠ¸ì›¨ì–´ë¥¼ ì ìš©í•˜ê¸° ìœ„í•œ ì‹¤ìš©ì ì´ê³  ê³µìœ  ê°€ëŠ¥í•œ ê¸€."]
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
        zh: "é“¾æŽ¥å·²å¤åˆ¶",
        ja: "ãƒªãƒ³ã‚¯ã‚’ã‚³ãƒ”ãƒ¼ã—ã¾ã—ãŸ",
        ko: "ë§í¬ê°€ ë³µì‚¬ë˜ì—ˆìŠµë‹ˆë‹¤"
      };
      button.textContent = copiedLabels[activeLanguage] || copiedLabels.es;
      setTimeout(() => {
        const guide = guideChromeTranslations[pageName]?.[activeLanguage] || guideChromeTranslations[pageName]?.es;
        const actionIndex = Array.from(button.closest(".guide-actions")?.querySelectorAll(".button") || []).indexOf(button);
        button.textContent = guide?.actions?.[actionIndex] || guide?.actions?.find((label) => /share|compart|å…±æœ‰|ê³µìœ /.test(label.toLowerCase())) || "Compartir guia";
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

