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
            ["IA para pymes", "Copiloto PyME", "Panel de decisiones con IA para digitalizar pymes en Latinoamérica. Integra ventas, caja, inventario y clientes para operar con más control."],
            ["OS agéntico", "TitanOS", "Sistema operativo ultraligero basado en Linux para controlar PCs, portátiles, teléfonos y tablets con la voz."],
            ["Móvil + IA", "Life Copilot", "App móvil con IA para organizar rutinas, aprender gustos y recomendar planes, restaurantes, viajes y actividades en la ciudad."],
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
            ["Productos", "6 líneas", "Copiloto Pyme, TitanOS, Life Copilot, Tecnotitan Engine, Academia y Call Center AI."]
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
  …90190 tokens truncated…se: "Cerrar chat",
    clear: "Limpiar",
    placeholder: "Pregunta sobre Tecnotitan, productos, servicios o inversionistas...",
    send: "Enviar",
    welcome: "Hola. Soy el asistente oficial de Tecnotitan. Puedo responder sobre productos, servicios, guias, investor deck y contacto.",
    thinking: "Pensando...",
    error: "No pude responder ahora. Intenta de nuevo o escribe a info@tecnotitan.com.",
    limit: "Llegaste al limite temporal del chat. Para una conversacion directa escribe a info@tecnotitan.com.",
    quick: ["Investor deck", "Servicios de IA", "Productos", "Contacto"],
    footer: "Respuestas generadas con IA. No compartas datos sensibles."
  },
  en: {
    title: "Tecnotitan AI",
    eyebrow: "Official assistant",
    button: "Open chat",
    close: "Close chat",
    clear: "Clear",
    placeholder: "Ask about Tecnotitan, products, services or investors...",
    send: "Send",
    welcome: "Hello. I am Tecnotitan's official assistant. I can answer questions about products, services, guides, investor deck and contact.",
    thinking: "Thinking...",
    error: "I could not reply right now. Try again or email info@tecnotitan.com.",
    limit: "You reached the temporary chat limit. For a direct conversation, email info@tecnotitan.com.",
    quick: ["Investor deck", "AI services", "Products", "Contact"],
    footer: "AI-generated answers. Do not share sensitive data."
  },
  pt: {
    title: "Tecnotitan AI",
    eyebrow: "Assistente oficial",
    button: "Abrir chat",
    close: "Fechar chat",
    clear: "Limpar",
    placeholder: "Pergunte sobre Tecnotitan, produtos, servicos ou investidores...",
    send: "Enviar",
    welcome: "Ola. Sou o assistente oficial da Tecnotitan. Posso responder sobre produtos, servicos, guias, investor deck e contato.",
    thinking: "Pensando...",
    error: "Nao consegui responder agora. Tente novamente ou escreva para info@tecnotitan.com.",
    limit: "Voce chegou ao limite temporario do chat. Para uma conversa direta, escreva para info@tecnotitan.com.",
    quick: ["Investor deck", "Servicos de IA", "Produtos", "Contato"],
    footer: "Respostas geradas com IA. Nao compartilhe dados sensiveis."
  },
  zh: {
    title: "Tecnotitan AI",
    eyebrow: "\u5b98\u65b9\u52a9\u624b",
    button: "\u6253\u5f00\u804a\u5929",
    close: "\u5173\u95ed\u804a\u5929",
    clear: "\u6e05\u9664",
    placeholder: "\u8be2\u95ee Tecnotitan\u3001\u4ea7\u54c1\u3001\u670d\u52a1\u6216\u6295\u8d44\u4eba\u4fe1\u606f...",
    send: "\u53d1\u9001",
    welcome: "\u4f60\u597d\u3002\u6211\u662f Tecnotitan \u5b98\u65b9\u52a9\u624b\uff0c\u53ef\u4ee5\u56de\u7b54\u4ea7\u54c1\u3001\u670d\u52a1\u3001\u6307\u5357\u3001Investor Deck \u548c\u8054\u7cfb\u65b9\u5f0f\u3002",
    thinking: "\u6b63\u5728\u601d\u8003...",
    error: "\u73b0\u5728\u65e0\u6cd5\u56de\u590d\u3002\u8bf7\u91cd\u8bd5\u6216\u53d1\u9001\u90ae\u4ef6\u5230 info@tecnotitan.com\u3002",
    limit: "\u4f60\u5df2\u8fbe\u5230\u4e34\u65f6\u804a\u5929\u9650\u5236\u3002\u5982\u9700\u76f4\u63a5\u6c9f\u901a\uff0c\u8bf7\u53d1\u9001\u90ae\u4ef6\u5230 info@tecnotitan.com\u3002",
    quick: ["Investor Deck", "\u4eba\u5de5\u667a\u80fd\u670d\u52a1", "\u4ea7\u54c1", "\u8054\u7cfb"],
    footer: "AI \u751f\u6210\u56de\u7b54\u3002\u8bf7\u52ff\u5206\u4eab\u654f\u611f\u6570\u636e\u3002"
  },
  ja: {
    title: "Tecnotitan AI",
    eyebrow: "\u516c\u5f0f\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8",
    button: "\u30c1\u30e3\u30c3\u30c8\u3092\u958b\u304f",
    close: "\u30c1\u30e3\u30c3\u30c8\u3092\u9589\u3058\u308b",
    clear: "\u30af\u30ea\u30a2",
    placeholder: "Tecnotitan\u3001\u88fd\u54c1\u3001\u30b5\u30fc\u30d3\u30b9\u3001\u6295\u8cc7\u5bb6\u60c5\u5831\u306b\u3064\u3044\u3066\u8cea\u554f...",
    send: "\u9001\u4fe1",
    welcome: "\u3053\u3093\u306b\u3061\u306f\u3002Tecnotitan \u516c\u5f0f\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8\u3067\u3059\u3002\u88fd\u54c1\u3001\u30b5\u30fc\u30d3\u30b9\u3001\u30ac\u30a4\u30c9\u3001Investor Deck\u3001\u9023\u7d61\u65b9\u6cd5\u306b\u3064\u3044\u3066\u56de\u7b54\u3067\u304d\u307e\u3059\u3002",
    thinking: "\u8003\u3048\u3066\u3044\u307e\u3059...",
    error: "\u73fe\u5728\u56de\u7b54\u3067\u304d\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u8a66\u3059\u304b info@tecnotitan.com \u3078\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002",
    limit: "\u4e00\u6642\u7684\u306a\u30c1\u30e3\u30c3\u30c8\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f\u3002\u76f4\u63a5\u306e\u9023\u7d61\u306f info@tecnotitan.com \u3078\u304a\u9858\u3044\u3057\u307e\u3059\u3002",
    quick: ["Investor Deck", "AI \u30b5\u30fc\u30d3\u30b9", "\u88fd\u54c1", "\u9023\u7d61"],
    footer: "AI \u751f\u6210\u56de\u7b54\u3067\u3059\u3002\u6a5f\u5bc6\u60c5\u5831\u306f\u5171\u6709\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044."
  },
  ko: {
    title: "Tecnotitan AI",
    eyebrow: "\uacf5\uc2dd \uc5b4\uc2dc\uc2a4\ud134\ud2b8",
    button: "\ucc44\ud305 \uc5f4\uae30",
    close: "\ucc44\ud305 \ub2eb\uae30",
    clear: "\uc9c0\uc6b0\uae30",
    placeholder: "Tecnotitan, \uc81c\ud488, \uc11c\ube44\uc2a4, \ud22c\uc790\uc790 \uc815\ubcf4\ub97c \ubb3c\uc5b4\ubcf4\uc138\uc694...",
    send: "\ubcf4\ub0b4\uae30",
    welcome: "\uc548\ub155\ud558\uc138\uc694. Tecnotitan \uacf5\uc2dd \uc5b4\uc2dc\uc2a4\ud134\ud2b8\uc785\ub2c8\ub2e4. \uc81c\ud488, \uc11c\ube44\uc2a4, \uac00\uc774\ub4dc, Investor Deck, \uc5f0\ub77d \ubc29\ubc95\uc5d0 \ub300\ud574 \ub2f5\ubcc0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
    thinking: "\uc0dd\uac01 \uc911...",
    error: "\uc9c0\uae08\uc740 \ub2f5\ubcc0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uac70\ub098 info@tecnotitan.com\uc73c\ub85c \uba54\uc77c\uc744 \ubcf4\ub0b4\uc8fc\uc138\uc694.",
    limit: "\uc784\uc2dc \ucc44\ud305 \uc81c\ud55c\uc5d0 \ub3c4\ub2ec\ud588\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 \ub300\ud654\ub294 info@tecnotitan.com\uc73c\ub85c \uba54\uc77c\uc744 \ubcf4\ub0b4\uc8fc\uc138\uc694.",
    quick: ["Investor Deck", "AI \uc11c\ube44\uc2a4", "\uc81c\ud488", "\uc5f0\ub77d"],
    footer: "AI\uac00 \uc0dd\uc131\ud55c \ub2f5\ubcc0\uc785\ub2c8\ub2e4. \ubbfc\uac10\ud55c \uc815\ubcf4\ub294 \uacf5\uc720\ud558\uc9c0 \ub9c8\uc138\uc694."
  }
};

chatbotTranslations.ar = {
  title: "Tecnotitan AI",
  eyebrow: "المساعد الرسمي",
  button: "فتح المحادثة",
  close: "إغلاق المحادثة",
  clear: "مسح",
  placeholder: "اكتب سؤالك عن Tecnotitan...",
  send: "إرسال",
  thinking: "يفكر...",
  welcome: "مرحباً. أنا مساعد Tecnotitan AI. أستطيع شرح الشركة والمنتجات والخدمات ومواد المستثمرين.",
  error: "تعذر الرد الآن. يمكنك الكتابة مباشرة إلى info@tecnotitan.com.",
  limit: "تم الوصول إلى حد المحادثة مؤقتاً. للتواصل المباشر اكتب إلى info@tecnotitan.com.",
  quick: ["Investor Deck", "خدمات AI", "المنتجات", "التواصل"],
  footer: "إجابات مولدة بالذكاء الاصطناعي. لا تشارك بيانات حساسة."
};

const callCenterTranslations = {
  es: {
    eyebrow: "Call Center USA",
    title: "Llámanos para más información",
    note: "Línea en inglés para inversionistas y aliados.",
    aria: "Llamar a Tecnotitan USA"
  },
  en: {
    eyebrow: "USA Call Center",
    title: "Call us for more info",
    note: "English line for investors and partners.",
    aria: "Call Tecnotitan USA"
  },
  pt: {
    eyebrow: "Call Center USA",
    title: "Ligue para mais informações",
    note: "Linha em inglês para investidores e parceiros.",
    aria: "Ligar para Tecnotitan USA"
  },
  zh: {
    eyebrow: "USA Call Center",
    title: "\u81f4\u7535\u83b7\u53d6\u66f4\u591a\u4fe1\u606f",
    note: "\u9762\u5411\u6295\u8d44\u8005\u548c\u5408\u4f5c\u4f19\u4f34\u7684\u82f1\u8bed\u70ed\u7ebf\u3002",
    aria: "\u81f4\u7535 Tecnotitan USA"
  },
  ja: {
    eyebrow: "USA Call Center",
    title: "\u8a73\u7d30\u306f\u304a\u96fb\u8a71\u304f\u3060\u3055\u3044",
    note: "\u6295\u8cc7\u5bb6\u3068\u30d1\u30fc\u30c8\u30ca\u30fc\u5411\u3051\u306e\u82f1\u8a9e\u30e9\u30a4\u30f3\u3067\u3059\u3002",
    aria: "Tecnotitan USA \u306b\u96fb\u8a71"
  },
  ko: {
    eyebrow: "USA Call Center",
    title: "\uc790\uc138\ud55c \uc815\ubcf4\ub294 \uc804\ud654\ub85c \ubb38\uc758\ud558\uc138\uc694",
    note: "\ud22c\uc790\uc790\uc640 \ud30c\ud2b8\ub108\ub97c \uc704\ud55c \uc601\uc5b4 \uc804\ud654 \ub77c\uc778\uc785\ub2c8\ub2e4.",
    aria: "Tecnotitan USA\uc5d0 \uc804\ud654"
  },
  ar: {
    eyebrow: "USA Call Center",
    title: "اتصل بنا لمزيد من المعلومات",
    note: "خط باللغة الإنجليزية للمستثمرين والشركاء.",
    aria: "الاتصال بـ Tecnotitan USA"
  }
};

function initUsaCallWidget() {
  if (document.querySelector("[data-usa-call-widget]")) {
    return;
  }

  const link = document.createElement("a");
  link.className = "usa-call-widget";
  link.href = "tel:+19147320344";
  link.setAttribute("data-usa-call-widget", "");
  link.innerHTML = `
    <span class="usa-call-pulse" aria-hidden="true"></span>
    <span class="usa-call-copy">
      <span class="usa-call-eyebrow"></span>
      <strong></strong>
      <span class="usa-call-phone">+1 (914) 732-0344</span>
      <span class="usa-call-note"></span>
    </span>
  `;
  document.body.appendChild(link);
}

function syncUsaCallWidget(language = activeLanguage) {
  const widget = document.querySelector("[data-usa-call-widget]");
  if (!widget) {
    return;
  }

  const copy = callCenterTranslations[language] || callCenterTranslations.en;
  widget.setAttribute("aria-label", `${copy.aria}: +1 914 732 0344`);
  setText(".usa-call-eyebrow", copy.eyebrow, widget);
  setText(".usa-call-copy strong", copy.title, widget);
  setText(".usa-call-note", copy.note, widget);
}

function initTecnotitanChatbot() {
  if (document.querySelector("[data-tecnotitan-chatbot]")) {
    return;
  }

  const state = {
    isOpen: false,
    isBusy: false,
    messages: []
  };

  const root = document.createElement("section");
  root.className = "tecnotitan-chatbot";
  root.setAttribute("data-tecnotitan-chatbot", "");
  root.innerHTML = `
    <button class="chatbot-launcher" type="button" aria-expanded="false">
      <span class="chatbot-launcher-icon" aria-hidden="true"></span>
      <span class="chatbot-launcher-label"></span>
    </button>
    <div class="chatbot-panel" hidden>
      <div class="chatbot-head">
        <div>
          <p class="chatbot-eyebrow"></p>
          <h2></h2>
        </div>
        <div class="chatbot-head-actions">
          <button class="chatbot-clear" type="button"></button>
          <button class="chatbot-close" type="button" aria-label=""></button>
        </div>
      </div>
      <div class="chatbot-messages" role="log" aria-live="polite"></div>
      <div class="chatbot-quick"></div>
      <form class="chatbot-form">
        <textarea rows="2" maxlength="1200"></textarea>
        <button type="submit"></button>
      </form>
      <p class="chatbot-footnote"></p>
    </div>
  `;
  document.body.appendChild(root);

  const launcher = root.querySelector(".chatbot-launcher");
  const panel = root.querySelector(".chatbot-panel");
  const messagesEl = root.querySelector(".chatbot-messages");
  const quickEl = root.querySelector(".chatbot-quick");
  const form = root.querySelector(".chatbot-form");
  const textarea = root.querySelector("textarea");
  const submitButton = root.querySelector('.chatbot-form button[type="submit"]');

  function currentCopy() {
    return chatbotTranslations[activeLanguage] || chatbotTranslations.en;
  }

  function addMessage(role, content) {
    state.messages.push({ role, content });
    state.messages = state.messages.slice(-8);
    renderMessages();
  }

  function renderMessages() {
    messagesEl.innerHTML = "";
    state.messages.forEach((message) => {
      const bubble = document.createElement("article");
      bubble.className = `chatbot-message is-${message.role}`;
      bubble.textContent = message.content;
      messagesEl.appendChild(bubble);
    });
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function setBusy(isBusy) {
    state.isBusy = isBusy;
    textarea.disabled = isBusy;
    submitButton.disabled = isBusy;
    submitButton.textContent = isBusy ? currentCopy().thinking : currentCopy().send;
  }

  function syncLanguage() {
    const copy = currentCopy();
    root.querySelector(".chatbot-launcher-label").textContent = copy.title;
    launcher.setAttribute("aria-label", state.isOpen ? copy.close : copy.button);
    root.querySelector(".chatbot-eyebrow").textContent = copy.eyebrow;
    root.querySelector(".chatbot-head h2").textContent = copy.title;
    root.querySelector(".chatbot-clear").textContent = copy.clear;
    root.querySelector(".chatbot-close").textContent = "x";
    root.querySelector(".chatbot-close").setAttribute("aria-label", copy.close);
    textarea.placeholder = copy.placeholder;
    submitButton.textContent = state.isBusy ? copy.thinking : copy.send;
    root.querySelector(".chatbot-footnote").textContent = copy.footer;
    quickEl.innerHTML = "";
    copy.quick.forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => {
        textarea.value = label;
        textarea.focus();
      });
      quickEl.appendChild(button);
    });
    if (!state.messages.length) {
      addMessage("assistant", copy.welcome);
    }
  }

  async function sendMessage(content) {
    addMessage("user", content);
    setBusy(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: activeLanguage,
          path: window.location.pathname,
          messages: state.messages
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        addMessage("assistant", data.reply || (response.status === 429 ? currentCopy().limit : currentCopy().error));
        return;
      }
      addMessage("assistant", data.reply || currentCopy().error);
    } catch {
      addMessage("assistant", currentCopy().error);
    } finally {
      setBusy(false);
    }
  }

  function setOpen(isOpen) {
    state.isOpen = isOpen;
    panel.hidden = !isOpen;
    root.classList.toggle("is-open", isOpen);
    launcher.setAttribute("aria-expanded", String(isOpen));
    launcher.setAttribute("aria-label", isOpen ? currentCopy().close : currentCopy().button);
    if (isOpen) {
      setTimeout(() => textarea.focus(), 80);
    }
  }

  launcher.addEventListener("click", () => setOpen(!state.isOpen));
  root.querySelector(".chatbot-close").addEventListener("click", () => setOpen(false));
  root.querySelector(".chatbot-clear").addEventListener("click", () => {
    state.messages = [];
    addMessage("assistant", currentCopy().welcome);
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = textarea.value.trim();
    if (!content || state.isBusy) {
      return;
    }
    textarea.value = "";
    sendMessage(content);
  });

  window.syncTecnotitanChatbotLanguage = syncLanguage;
  syncLanguage();
}

buildLanguageSwitcher();
buildPrivacyConsent();
initUsaCallWidget();
initTecnotitanChatbot();
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
      copiedLabels.ar = "تم نسخ الرابط";
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

