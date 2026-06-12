const fs = require("fs");
const path = require("path");

const root = process.cwd();
const langs = ["es", "en", "pt", "zh", "ja", "ko"];
const guideDirs = { en: "guides", pt: "guias", zh: "guides", ja: "guides", ko: "guides" };

const ui = {
  es: {
    guides: "Guías",
    read: "Leer guía",
    download: "Descargar PDF",
    save: "Guardar como PDF",
    share: "Compartir guía",
    updated: "Actualizado: junio de 2026",
    reading: "Lectura: 14 min",
    next: "Siguiente paso",
    schedule: "Agendar conversación",
    inGuide: "En esta guía",
    recommended: "Ruta recomendada",
    explore: "Sigue explorando este tema",
    exploreText: "Estas guías conectan este tema con implementación, medición y adopción operativa.",
    allGuides: "Todas las guías Tecnotitan",
    services: "Solicitar diagnóstico IA",
    ctaTitle: "Convierte esta guía en un plan de implementación",
    ctaText: "Tecnotitan ayuda a empresas a diseñar pilotos de software, IA y automatización que se pueden medir y escalar.",
    contact: "Contactar a Tecnotitan",
    nav: ["Inicio", "Nosotros", "Productos", "Servicios", "Guias", "Divisiones", "Inversionistas", "Contacto"],
    newTitle: "Nuevas guías premium",
    newText: "Cuatro recursos nuevos para mejorar adopción, reportes, integraciones y compra responsable de IA.",
    cardNote: "La forma práctica de aplicar esto es elegir un proceso, definir la línea base, asignar responsable y revisar resultados cada semana.",
    eeat: {
      authorLabel: "Autor institucional",
      authorText: "Equipo de software, IA y transformación tecnológica.",
      reviewed: "Dirección de producto y consultoría IA.",
      method: "Política editorial y metodología",
      methodShort: "Método editorial",
      sidebar: "Guías creadas por Tecnotitan con experiencia práctica, revisión humana y enfoque empresarial.",
      trust: "Confianza editorial",
      review: "Cómo revisamos esta guía",
      human: "Revisión humana",
      sources: "Fuentes y metodología",
      updates: "Actualizaciones",
      sourcesText: "Usamos experiencia de implementación, documentación técnica y mejores prácticas públicas cuando aplica.",
      updatesText: "Las guías se actualizan cuando cambian herramientas, riesgos, procesos o recomendaciones relevantes.",
      note: "Estas guías no reemplazan asesoría legal, financiera o técnica especializada. Su objetivo es ayudar a líderes y equipos a tomar mejores decisiones antes de implementar tecnología."
    }
  },
  en: {
    guides: "Guides",
    read: "Read guide",
    download: "Download PDF",
    save: "Save as PDF",
    share: "Share guide",
    updated: "Updated: June 2026",
    reading: "Reading time: 14 min",
    next: "Next step",
    schedule: "Schedule conversation",
    inGuide: "In this guide",
    recommended: "Recommended path",
    explore: "Keep exploring this topic",
    exploreText: "These guides connect this topic with implementation, measurement and adoption.",
    allGuides: "All Tecnotitan guides",
    services: "Request AI diagnosis",
    ctaTitle: "Turn this guide into an implementation plan",
    ctaText: "Tecnotitan helps companies design software, AI and automation pilots that can be measured and scaled.",
    contact: "Contact Tecnotitan",
    nav: ["Home", "About", "Products", "Services", "Guides", "Divisions", "Investors", "Contact"],
    newTitle: "New premium guides",
    newText: "Four new resources for better AI adoption, reporting, integrations and responsible AI procurement.",
    cardNote: "The practical way to apply this is to choose one process, define the baseline, assign ownership and review results weekly.",
    eeat: {
      authorLabel: "Institutional author",
      authorText: "Software, AI and technology transformation team.",
      reviewed: "Product leadership and AI consulting.",
      method: "Editorial policy and methodology",
      methodShort: "Editorial method",
      sidebar: "Guides created by Tecnotitan with practical experience, human review and a business implementation lens.",
      trust: "Editorial trust",
      review: "How we review this guide",
      human: "Human review",
      sources: "Sources and methodology",
      updates: "Updates",
      sourcesText: "We use implementation experience, technical documentation and public best practices when relevant.",
      updatesText: "Guides are updated when tools, risks, processes or recommendations change.",
      note: "These guides do not replace specialized legal, financial or technical advice. They help leaders and teams make better decisions before implementing technology."
    }
  },
  pt: {
    guides: "Guias",
    read: "Ler guia",
    download: "Baixar PDF",
    save: "Salvar como PDF",
    share: "Compartilhar guia",
    updated: "Atualizado: junho de 2026",
    reading: "Leitura: 14 min",
    next: "Próximo passo",
    schedule: "Agendar conversa",
    inGuide: "Neste guia",
    recommended: "Rota recomendada",
    explore: "Continue explorando este tema",
    exploreText: "Estes guias conectam o tema com implementação, medição e adoção.",
    allGuides: "Todos os guias Tecnotitan",
    services: "Solicitar diagnóstico IA",
    ctaTitle: "Transforme este guia em um plano de implementação",
    ctaText: "A Tecnotitan ajuda empresas a desenhar pilotos de software, IA e automação que podem ser medidos e escalados.",
    contact: "Falar com a Tecnotitan",
    nav: ["Início", "Sobre", "Produtos", "Serviços", "Guias", "Divisões", "Investidores", "Contato"],
    newTitle: "Novos guias premium",
    newText: "Quatro novos recursos para adoção, relatórios, integrações e compra responsável de IA.",
    cardNote: "A forma prática de aplicar isto é escolher um processo, definir a linha base, atribuir responsável e revisar resultados semanalmente.",
    eeat: {
      authorLabel: "Autor institucional",
      authorText: "Equipe de software, IA e transformação tecnológica.",
      reviewed: "Liderança de produto e consultoria de IA.",
      method: "Política editorial e metodologia",
      methodShort: "Método editorial",
      sidebar: "Guias criados pela Tecnotitan com experiência prática, revisão humana e foco empresarial.",
      trust: "Confiança editorial",
      review: "Como revisamos este guia",
      human: "Revisão humana",
      sources: "Fontes e metodologia",
      updates: "Atualizações",
      sourcesText: "Usamos experiência de implementação, documentação técnica e boas práticas públicas quando aplicável.",
      updatesText: "Os guias são atualizados quando ferramentas, riscos, processos ou recomendações mudam.",
      note: "Estes guias não substituem assessoria legal, financeira ou técnica especializada. Eles ajudam equipes a decidir melhor antes de implementar tecnologia."
    }
  },
  zh: {
    guides: "指南",
    read: "阅读指南",
    download: "下载 PDF",
    save: "保存为 PDF",
    share: "分享指南",
    updated: "更新日期：2026 年 6 月",
    reading: "阅读时间：14 分钟",
    next: "下一步",
    schedule: "预约沟通",
    inGuide: "本指南内容",
    recommended: "推荐路径",
    explore: "继续探索该主题",
    exploreText: "这些指南把主题与实施、衡量和采用连接起来。",
    allGuides: "所有 Tecnotitan 指南",
    services: "申请 AI 诊断",
    ctaTitle: "把本指南变成实施计划",
    ctaText: "Tecnotitan 帮助企业设计可衡量、可扩展的软件、AI 和自动化试点。",
    contact: "联系 Tecnotitan",
    nav: ["首页", "关于", "产品", "服务", "指南", "事业部", "投资者", "联系"],
    newTitle: "新的高级指南",
    newText: "四个新资源，覆盖 AI 采用、报告、集成和负责任采购。",
    cardNote: "实践方法是选择一个流程，定义基线，指定负责人，并每周复盘结果。",
    eeat: {
      authorLabel: "机构作者",
      authorText: "软件、人工智能与技术转型团队。",
      reviewed: "产品负责人和 AI 咨询团队。",
      method: "编辑政策与方法",
      methodShort: "编辑方法",
      sidebar: "Tecnotitan 基于实践经验、人工审核和企业实施视角创建指南。",
      trust: "编辑可信度",
      review: "我们如何审核本指南",
      human: "人工审核",
      sources: "来源与方法",
      updates: "更新机制",
      sourcesText: "我们结合实施经验、技术文档和公开最佳实践。",
      updatesText: "当工具、风险、流程或建议发生变化时，我们会更新指南。",
      note: "这些指南不替代专业法律、财务或技术建议，目的是帮助团队在实施技术前做出更好的决策。"
    }
  },
  ja: {
    guides: "ガイド",
    read: "ガイドを読む",
    download: "PDF をダウンロード",
    save: "PDF として保存",
    share: "ガイドを共有",
    updated: "更新日：2026年6月",
    reading: "読了時間：14分",
    next: "次のステップ",
    schedule: "相談を予約",
    inGuide: "このガイド",
    recommended: "推奨ルート",
    explore: "このテーマをさらに読む",
    exploreText: "これらのガイドは実装、測定、導入につながります。",
    allGuides: "すべてのTecnotitanガイド",
    services: "AI診断を依頼",
    ctaTitle: "このガイドを実装計画に変える",
    ctaText: "Tecnotitanは測定、改善、拡張できるソフトウェア、AI、自動化の試験導入を支援します。",
    contact: "Tecnotitanに連絡",
    nav: ["ホーム", "会社情報", "製品", "サービス", "ガイド", "部門", "投資家", "連絡先"],
    newTitle: "新しいプレミアムガイド",
    newText: "AI導入、レポート、連携、責任ある調達のための4つの新しい資料。",
    cardNote: "実践方法は、1つのプロセスを選び、基準値を定義し、責任者を決め、毎週結果を確認することです。",
    eeat: {
      authorLabel: "機関著者",
      authorText: "ソフトウェア、AI、技術変革チーム。",
      reviewed: "プロダクト責任者とAIコンサルティングチーム。",
      method: "編集ポリシーと方法論",
      methodShort: "編集方法",
      sidebar: "Tecnotitanのガイドは実務経験、人によるレビュー、企業導入の視点で作成されています。",
      trust: "編集上の信頼性",
      review: "このガイドのレビュー方法",
      human: "人によるレビュー",
      sources: "情報源と方法",
      updates: "更新",
      sourcesText: "導入経験、技術文書、公開ベストプラクティスを必要に応じて参照します。",
      updatesText: "ツール、リスク、プロセス、推奨事項が変わるとガイドを更新します。",
      note: "これらのガイドは専門的な法務、財務、技術助言の代替ではありません。技術導入前の意思決定を支援するものです。"
    }
  },
  ko: {
    guides: "가이드",
    read: "가이드 읽기",
    download: "PDF 다운로드",
    save: "PDF로 저장",
    share: "가이드 공유",
    updated: "업데이트: 2026년 6월",
    reading: "읽는 시간: 14분",
    next: "다음 단계",
    schedule: "상담 예약",
    inGuide: "이 가이드",
    recommended: "추천 경로",
    explore: "이 주제 계속 탐색",
    exploreText: "이 가이드는 구현, 측정, 도입과 연결됩니다.",
    allGuides: "모든 Tecnotitan 가이드",
    services: "AI 진단 요청",
    ctaTitle: "이 가이드를 구현 계획으로 전환",
    ctaText: "Tecnotitan은 측정하고 확장할 수 있는 소프트웨어, AI, 자동화 파일럿을 설계합니다.",
    contact: "Tecnotitan 문의",
    nav: ["홈", "소개", "제품", "서비스", "가이드", "부문", "투자자", "문의"],
    newTitle: "새 프리미엄 가이드",
    newText: "AI 도입, 보고, 통합, 책임 있는 구매를 위한 네 가지 새 자료.",
    cardNote: "실행 방법은 하나의 프로세스를 선택하고 기준선을 정의하며 책임자를 지정하고 매주 결과를 검토하는 것입니다.",
    eeat: {
      authorLabel: "기관 저자",
      authorText: "소프트웨어, AI, 기술 전환 팀.",
      reviewed: "제품 리더십 및 AI 컨설팅 팀.",
      method: "편집 정책 및 방법론",
      methodShort: "편집 방법",
      sidebar: "Tecnotitan 가이드는 실무 경험, 인간 검토, 기업 구현 관점으로 제작됩니다.",
      trust: "편집 신뢰",
      review: "이 가이드를 검토하는 방법",
      human: "인간 검토",
      sources: "출처와 방법론",
      updates: "업데이트",
      sourcesText: "구현 경험, 기술 문서, 공개 모범 사례를 필요에 따라 활용합니다.",
      updatesText: "도구, 위험, 프로세스 또는 권장 사항이 바뀌면 가이드를 업데이트합니다.",
      note: "이 가이드는 전문 법률, 재무 또는 기술 자문을 대체하지 않습니다. 기술 구현 전 더 나은 결정을 돕기 위한 자료입니다."
    }
  }
};

const topics = [
  {
    key: "aiEmployeeOnboarding",
    pdf: "guia-onboarding-ia-empleados-tecnotitan.pdf",
    cta: "producto-academia-tecnotitan.html",
    slugs: {
      es: "guia-onboarding-ia-empleados",
      en: "ai-onboarding-for-employees",
      pt: "onboarding-ia-colaboradores",
      zh: "ai-onboarding-employees",
      ja: "ai-onboarding-employees",
      ko: "ai-onboarding-employees"
    },
    meta: {
      es: ["Adopción de IA", "Onboarding de IA para empleados: cómo entrenar equipos sin caos", "Guía práctica para capacitar empleados en IA con políticas, prompts aprobados, seguridad, medición y adopción responsable.", "Una guía para convertir el entusiasmo por la IA en hábitos de trabajo seguros, medibles y útiles para toda la empresa.", "Adopción IA"],
      en: ["AI adoption", "AI onboarding for employees: train teams without chaos", "A practical guide to train employees in AI with policies, approved prompts, security, measurement and responsible adoption.", "A guide for turning AI enthusiasm into safe, measurable and useful work habits across the company.", "AI adoption"],
      pt: ["Adoção de IA", "Onboarding de IA para colaboradores: como treinar equipes sem caos", "Guia prático para capacitar colaboradores em IA com políticas, prompts aprovados, segurança, medição e adoção responsável.", "Um guia para transformar entusiasmo por IA em hábitos de trabalho seguros, mensuráveis e úteis para a empresa.", "Adoção IA"],
      zh: ["AI 采用", "员工 AI 入门：如何有序培训团队", "关于员工 AI 培训的实用指南，涵盖政策、批准提示词、安全、衡量和负责任采用。", "帮助企业把 AI 热情转化为安全、可衡量、可持续工作习惯的指南。", "AI 采用"],
      ja: ["AI 導入", "従業員向け AI オンボーディング：混乱なくチームを育てる方法", "ポリシー、承認済みプロンプト、セキュリティ、測定、責任ある導入を含むAI研修ガイド。", "AIへの期待を、安全で測定可能な業務習慣に変えるためのガイドです。", "AI 導入"],
      ko: ["AI 도입", "직원을 위한 AI 온보딩: 혼란 없이 팀을 훈련하는 방법", "정책, 승인된 프롬프트, 보안, 측정, 책임 있는 도입을 포함한 직원 AI 교육 가이드.", "AI에 대한 관심을 안전하고 측정 가능한 업무 습관으로 전환하는 가이드입니다.", "AI 도입"]
    },
    sections: {
      es: [["Por qué el onboarding de IA es una prioridad", "La mayoría de empresas ya tiene empleados usando herramientas de IA, aunque no siempre con reglas claras. El problema no es que el equipo experimente; el problema es que cada persona aprende por separado, comparte datos sin criterio y mide el valor de forma informal. Un onboarding de IA convierte esa energía en una capacidad empresarial."], ["Define una política simple antes de enseñar prompts", "La primera sesión no debe empezar con trucos de productividad. Debe empezar con reglas sobre datos confidenciales, revisión humana, límites de uso, herramientas permitidas y casos que requieren aprobación. Una política breve y práctica evita que la capacitación se vuelva una invitación a improvisar."], ["Crea una biblioteca de prompts aprobados", "Los mejores equipos no dependen de prompts sueltos guardados en chats personales. Documentan plantillas para ventas, soporte, operaciones, reportes, reuniones y documentos. Cada plantilla debe explicar propósito, datos permitidos, formato de salida y criterios de revisión."], ["Diseña prácticas por rol", "Un vendedor necesita investigar cuentas y preparar seguimientos. Soporte necesita clasificar casos y proponer respuestas. Gerencia necesita sintetizar información y preparar decisiones. El onboarding funciona mejor cuando cada área practica con escenarios reales y no con ejemplos genéricos."], ["Mide adopción y calidad", "La adopción no se mide por número de usuarios activos. Se mide por tiempo ahorrado, reducción de retrabajo, consistencia de respuestas, cumplimiento de política y mejoras visibles en procesos. Durante las primeras cuatro semanas conviene revisar casos reales y ajustar la biblioteca."], ["Checklist para empezar", "Define responsable, política de una página, herramientas permitidas, biblioteca inicial de prompts, sesión por área, criterio de revisión humana y tablero simple de adopción. Con eso puedes empezar sin convertir la IA en ruido operativo."]],
      en: [["Why AI onboarding matters now", "Most companies already have employees using AI tools, but not always with clear rules. The issue is not experimentation; the issue is isolated learning, unsafe data sharing and informal measurement. AI onboarding turns that energy into company capability."], ["Start with policy, not tricks", "The first session should not begin with productivity hacks. It should begin with rules for confidential data, human review, allowed tools and cases requiring approval. A short practical policy prevents improvisation."], ["Build an approved prompt library", "Strong teams do not rely on prompts buried in personal chats. They document templates for sales, support, operations, reporting, meetings and documents, with purpose, allowed data, output format and review criteria."], ["Train by role", "Sales needs account research and follow-up. Support needs classification and response drafts. Leaders need synthesis and decision preparation. Onboarding works best when each area practices on real scenarios."], ["Measure adoption and quality", "Adoption is not the number of active users. Measure saved time, reduced rework, response consistency, policy compliance and visible process improvement. Review real cases for the first four weeks."], ["Checklist to start", "Define an owner, a one-page policy, allowed tools, a first prompt library, role-based sessions, human review criteria and a simple adoption dashboard."]],
      pt: [["Por que onboarding de IA importa", "Muitas empresas já têm pessoas usando IA sem regras claras. O risco não é experimentar; é aprender isoladamente, compartilhar dados sem critério e medir valor de forma informal."], ["Comece pela política", "A primeira sessão deve explicar dados confidenciais, revisão humana, ferramentas permitidas e casos que exigem aprovação. Uma política curta evita improvisação."], ["Crie biblioteca de prompts", "Times fortes documentam modelos para vendas, suporte, operações, relatórios, reuniões e documentos, com objetivo, dados permitidos, formato e revisão."], ["Treine por função", "Vendas, suporte, liderança e operações precisam de exemplos diferentes. O treinamento funciona melhor com cenários reais."], ["Meça adoção", "Acompanhe tempo economizado, retrabalho, consistência, cumprimento de política e melhoria de processos."], ["Checklist", "Responsável, política de uma página, ferramentas permitidas, prompts iniciais, sessões por área e painel de adoção."]],
      zh: [["为什么需要 AI 入门培训", "很多员工已经在使用 AI，但缺少统一规则。培训的目标是把个人实验变成企业能力。"], ["先制定政策", "明确保密数据、人工审核、允许工具和需要审批的场景。简短政策比复杂手册更容易执行。"], ["建立提示词库", "为销售、客服、运营、报告和会议建立经过批准的提示词模板。"], ["按岗位训练", "不同团队需要不同案例。使用真实业务场景比泛泛演示更有效。"], ["衡量采用质量", "关注节省时间、减少返工、回复一致性和政策遵守情况。"], ["清单", "负责人、一页政策、允许工具、提示词库、岗位培训和采用看板。"]],
      ja: [["AIオンボーディングが重要な理由", "多くの従業員はすでにAIを使っていますが、明確なルールがない場合があります。目的は個人の実験を企業能力に変えることです。"], ["まずポリシーを定義する", "機密データ、人によるレビュー、許可ツール、承認が必要なケースを明確にします。"], ["承認済みプロンプト集を作る", "営業、サポート、運用、レポート、会議向けのテンプレートを整備します。"], ["役割別に訓練する", "部門ごとに実際の業務シナリオで練習することが効果的です。"], ["導入品質を測る", "時間削減、手戻り、回答の一貫性、ポリシー遵守を測定します。"], ["チェックリスト", "責任者、1ページポリシー、許可ツール、プロンプト集、役割別研修、導入ダッシュボード。"]],
      ko: [["AI 온보딩이 중요한 이유", "직원들은 이미 AI를 쓰고 있지만 명확한 규칙이 없는 경우가 많습니다. 목표는 개인 실험을 회사 역량으로 바꾸는 것입니다."], ["정책부터 시작하세요", "기밀 데이터, 인간 검토, 허용 도구, 승인 필요 사례를 먼저 정의합니다."], ["승인된 프롬프트 라이브러리", "영업, 지원, 운영, 보고, 회의용 템플릿을 문서화합니다."], ["역할별 교육", "각 부서는 실제 업무 시나리오로 연습해야 합니다."], ["도입 품질 측정", "시간 절감, 재작업 감소, 응답 일관성, 정책 준수를 측정합니다."], ["체크리스트", "책임자, 1페이지 정책, 허용 도구, 프롬프트 라이브러리, 역할별 교육, 도입 대시보드."]]
    }
  },
  {
    key: "executiveReportsAutomation",
    pdf: "guia-automatizar-reportes-ejecutivos-tecnotitan.pdf",
    cta: "guia-dashboard-kpis-pymes.html",
    slugs: { es: "guia-automatizar-reportes-ejecutivos", en: "executive-reporting-automation", pt: "automatizar-relatorios-executivos", zh: "executive-reporting-automation", ja: "executive-reporting-automation", ko: "executive-reporting-automation" },
    meta: {
      es: ["Reportes ejecutivos", "Automatizar reportes ejecutivos: de datos dispersos a decisiones semanales", "Guía para automatizar reportes ejecutivos con KPIs, fuentes de datos, responsables, revisión humana y tableros accionables.", "Una guía para dejar de armar reportes manuales y convertir datos operativos en decisiones semanales.", "Reportes ejecutivos"],
      en: ["Executive reporting", "Executive reporting automation: from scattered data to weekly decisions", "A guide to automate executive reports with KPIs, data sources, owners, human review and actionable dashboards.", "A guide to stop assembling reports manually and turn operating data into weekly decisions.", "Executive reports"],
      pt: ["Relatórios executivos", "Automatizar relatórios executivos: de dados dispersos a decisões semanais", "Guia para automatizar relatórios executivos com KPIs, fontes de dados, responsáveis, revisão humana e painéis acionáveis.", "Um guia para parar de montar relatórios manualmente e transformar dados operacionais em decisões semanais.", "Relatórios"],
      zh: ["高管报告", "高管报告自动化：从分散数据到每周决策", "关于用 KPI、数据源、负责人、人工审核和行动看板自动化管理报告的指南。", "帮助企业停止手工拼报告，把运营数据转化为每周决策。", "高管报告"],
      ja: ["経営レポート", "経営レポート自動化：散在データから週次意思決定へ", "KPI、データソース、責任者、人によるレビュー、実行可能なダッシュボードで経営レポートを自動化するガイド。", "手作業のレポート作成をやめ、業務データを週次の意思決定に変えるためのガイドです。", "経営レポート"],
      ko: ["경영 보고", "경영 보고 자동화: 흩어진 데이터에서 주간 의사결정으로", "KPI, 데이터 소스, 책임자, 인간 검토, 실행 가능한 대시보드로 경영 보고를 자동화하는 가이드.", "수작업 보고를 줄이고 운영 데이터를 주간 의사결정으로 바꾸는 가이드입니다.", "경영 보고"]
    },
    sections: makeSections({
      es: ["El problema de los reportes manuales", "Muchas empresas dedican horas a copiar datos entre hojas, correos y sistemas para producir un reporte que llega tarde. El valor no está en llenar una presentación; está en que el equipo directivo vea la misma realidad, con métricas confiables y decisiones claras."],
      en: ["The manual reporting problem", "Many teams spend hours copying data from spreadsheets, emails and systems into reports that arrive late. Value is not the slide deck; value is leadership seeing the same reality with reliable metrics and clear decisions."],
      pt: ["O problema dos relatórios manuais", "Equipes gastam horas copiando dados para relatórios que chegam tarde. Valor é liderança vendo a mesma realidade com métricas confiáveis."],
      zh: ["手工报告的问题", "团队花很多时间复制数据，报告却来得太晚。真正价值是让管理层看到同一事实。"],
      ja: ["手作業レポートの問題", "データをコピーして遅いレポートを作る時間は、意思決定の価値を下げます。"],
      ko: ["수작업 보고의 문제", "데이터를 복사해 늦은 보고서를 만드는 일은 의사결정 가치를 낮춥니다."]
    }, ["Define la pregunta ejecutiva", "Mapea fuentes y dueños", "Crea un ciclo semanal", "Usa IA con control", "Checklist"])
  },
  {
    key: "systemsApiIntegration",
    pdf: "guia-integracion-sistemas-api-pymes-tecnotitan.pdf",
    cta: "producto-tecnotitan-os.html",
    slugs: { es: "guia-integracion-sistemas-api-pymes", en: "system-integration-api-for-smbs", pt: "integracao-sistemas-api-pmes", zh: "system-integration-api-smbs", ja: "system-integration-api-smbs", ko: "system-integration-api-smbs" },
    meta: {
      es: ["Integración tecnológica", "Integración de sistemas y APIs para pymes: cómo conectar herramientas sin perder control", "Guía para conectar CRM, facturación, formularios, correo, WhatsApp, dashboards y automatizaciones mediante APIs e integraciones seguras.", "Una guía para que las herramientas de una empresa hablen entre sí sin crear dependencia, duplicidad ni riesgo operativo.", "Integraciones"],
      en: ["System integration", "System integration and APIs for SMBs: connect tools without losing control", "A guide to connect CRM, billing, forms, email, WhatsApp, dashboards and automations through secure APIs and integrations.", "A guide for making business tools talk to each other without creating dependency, duplication or operational risk.", "Integrations"],
      pt: ["Integração tecnológica", "Integração de sistemas e APIs para PMEs: conectar ferramentas sem perder controle", "Guia para conectar CRM, faturamento, formulários, e-mail, WhatsApp, dashboards e automações com APIs seguras.", "Um guia para fazer ferramentas empresariais conversarem sem criar dependência, duplicidade ou risco operacional.", "Integrações"],
      zh: ["系统集成", "中小企业系统和 API 集成：连接工具而不失控", "关于通过安全 API 连接 CRM、账单、表单、邮件、WhatsApp、看板和自动化的指南。", "让企业工具相互连接，同时避免重复数据、依赖和运营风险。", "集成"],
      ja: ["システム連携", "中小企業のシステム連携とAPI：管理を失わずツールをつなぐ", "CRM、請求、フォーム、メール、WhatsApp、ダッシュボード、自動化を安全なAPIでつなぐガイド。", "業務ツールを連携しながら、重複や依存、運用リスクを避けるためのガイドです。", "連携"],
      ko: ["시스템 통합", "중소기업 시스템과 API 통합: 통제력을 잃지 않고 도구 연결하기", "CRM, 청구, 양식, 이메일, WhatsApp, 대시보드, 자동화를 안전한 API로 연결하는 가이드.", "업무 도구를 연결하면서 중복, 의존성, 운영 위험을 줄이는 가이드입니다.", "통합"]
    },
    sections: makeSections({
      es: ["Por qué integrar antes de escalar", "Cuando una empresa crece, aparecen sistemas aislados: CRM, facturación, formularios, WhatsApp, hojas de cálculo y correo. La integración evita copiar datos manualmente y reduce errores que afectan ventas, soporte y finanzas."],
      en: ["Why integrate before scaling", "Growing companies accumulate isolated systems: CRM, billing, forms, WhatsApp, spreadsheets and email. Integration reduces manual copying and errors across sales, support and finance."],
      pt: ["Por que integrar antes de escalar", "Empresas acumulam CRM, faturamento, formulários, WhatsApp, planilhas e e-mail isolados. Integração reduz cópia manual e erros."],
      zh: ["为什么先集成再扩展", "企业增长后会出现孤立系统。集成减少手工复制和错误。"],
      ja: ["拡張前に連携する理由", "CRM、請求、フォーム、WhatsApp、表計算、メールが孤立すると手作業とミスが増えます。"],
      ko: ["확장 전에 통합해야 하는 이유", "CRM, 청구, 양식, WhatsApp, 스프레드시트, 이메일이 분리되면 수작업과 오류가 늘어납니다."]
    }, ["Empieza por el proceso, no por la API", "Define fuente de verdad", "Seguridad y permisos", "Monitoreo", "Checklist"])
  },
  {
    key: "aiVendorEvaluation",
    pdf: "guia-evaluar-proveedores-ia-empresas-tecnotitan.pdf",
    cta: "servicios.html?interest=ai#solicitud-servicios",
    slugs: { es: "guia-evaluar-proveedores-ia-empresas", en: "evaluate-ai-vendors-for-companies", pt: "avaliar-fornecedores-ia-empresas", zh: "evaluate-ai-vendors-companies", ja: "evaluate-ai-vendors-companies", ko: "evaluate-ai-vendors-companies" },
    meta: {
      es: ["Compra de IA", "Cómo evaluar proveedores de IA para empresas: checklist antes de contratar", "Guía para evaluar proveedores de IA con seguridad, datos, integración, soporte, costos, propiedad intelectual, riesgos y métricas.", "Una guía para comprar IA con criterio empresarial y evitar promesas vagas, costos ocultos o soluciones difíciles de operar.", "Proveedores IA"],
      en: ["AI procurement", "How to evaluate AI vendors for companies: checklist before you buy", "A guide to evaluate AI vendors across security, data, integration, support, cost, IP, risks and metrics.", "A guide to buying AI with business judgment and avoiding vague promises, hidden costs or hard-to-operate solutions.", "AI vendors"],
      pt: ["Compra de IA", "Como avaliar fornecedores de IA para empresas: checklist antes de contratar", "Guia para avaliar fornecedores de IA em segurança, dados, integração, suporte, custos, propriedade intelectual, riscos e métricas.", "Um guia para comprar IA com critério empresarial e evitar promessas vagas, custos ocultos ou soluções difíceis de operar.", "Fornecedores IA"],
      zh: ["AI 采购", "企业如何评估 AI 供应商：采购前清单", "从安全、数据、集成、支持、成本、知识产权、风险和指标评估 AI 供应商的指南。", "帮助企业理性采购 AI，避免模糊承诺、隐藏成本和难以运营的方案。", "AI 供应商"],
      ja: ["AI調達", "企業向けAIベンダー評価：契約前チェックリスト", "セキュリティ、データ、連携、サポート、コスト、知的財産、リスク、指標でAIベンダーを評価するガイド。", "曖昧な約束や隠れたコストを避け、事業判断としてAIを購入するためのガイドです。", "AIベンダー"],
      ko: ["AI 구매", "기업용 AI 공급업체 평가: 계약 전 체크리스트", "보안, 데이터, 통합, 지원, 비용, IP, 위험, 지표로 AI 공급업체를 평가하는 가이드.", "모호한 약속, 숨은 비용, 운영하기 어려운 솔루션을 피하기 위한 AI 구매 가이드입니다.", "AI 공급업체"]
    },
    sections: makeSections({
      es: ["No compres una demo, compra una capacidad", "Muchas soluciones de IA se ven bien en una llamada comercial, pero fallan cuando deben operar con datos reales, usuarios reales y procesos reales. Evaluar proveedor significa revisar implementación, soporte, seguridad y mejora continua, no solo interfaz."],
      en: ["Do not buy a demo, buy a capability", "Many AI solutions look good in a sales call but fail with real data, real users and real processes. Vendor evaluation must cover implementation, support, security and continuous improvement, not just UI."],
      pt: ["Não compre uma demo", "Soluções de IA podem parecer ótimas em vendas e falhar com dados, usuários e processos reais. Avalie implementação, suporte, segurança e melhoria contínua."],
      zh: ["不要购买演示，要购买能力", "很多 AI 演示很好看，但在真实数据、用户和流程中失败。评估应覆盖实施、支持、安全和持续改进。"],
      ja: ["デモではなく能力を買う", "AIデモが良く見えても、実データと実業務で失敗することがあります。実装、サポート、セキュリティ、改善を評価します。"],
      ko: ["데모가 아니라 역량을 사세요", "AI 데모는 좋아 보여도 실제 데이터와 프로세스에서 실패할 수 있습니다. 구현, 지원, 보안, 지속 개선을 평가해야 합니다."]
    }, ["Preguntas de seguridad", "Datos e integración", "Costos reales", "Métricas y SLA", "Checklist"])
  }
];

function makeSections(firstByLang, headings) {
  const generic = {
    es: "Para aplicar este tema de forma responsable, documenta el flujo actual, identifica riesgos, define responsables y prueba con un piloto pequeño antes de escalar. La meta es reducir ambigüedad, mejorar calidad y crear una operación más medible.",
    en: "To apply this topic responsibly, document the current workflow, identify risks, define owners and test with a small pilot before scaling. The goal is to reduce ambiguity, improve quality and create a more measurable operation.",
    pt: "Para aplicar este tema de forma responsável, documente o fluxo atual, identifique riscos, defina responsáveis e teste com um piloto pequeno antes de escalar. O objetivo é reduzir ambiguidade, melhorar qualidade e criar uma operação mais mensurável.",
    zh: "要负责任地应用该主题，请记录当前流程、识别风险、指定负责人，并在扩展前进行小型试点。目标是减少模糊性、提高质量并建立可衡量的运营。",
    ja: "このテーマを責任を持って適用するには、現在の流れを文書化し、リスクを特定し、責任者を決め、小さな試験導入から始めます。",
    ko: "이 주제를 책임 있게 적용하려면 현재 흐름을 문서화하고 위험을 식별하며 책임자를 정하고 작은 파일럿으로 시작하세요."
  };
  const out = {};
  for (const lang of langs) {
    out[lang] = [firstByLang[lang], ...headings.map((h) => [translateHeading(h, lang), generic[lang]])];
  }
  return out;
}

function translateHeading(text, lang) {
  const map = {
    en: {
      "Define la pregunta ejecutiva": "Define the executive question",
      "Mapea fuentes y dueños": "Map sources and owners",
      "Crea un ciclo semanal": "Create a weekly cycle",
      "Usa IA con control": "Use AI with control",
      "Empieza por el proceso, no por la API": "Start with the process, not the API",
      "Define fuente de verdad": "Define the source of truth",
      "Seguridad y permisos": "Security and permissions",
      "Monitoreo": "Monitoring",
      "Preguntas de seguridad": "Security questions",
      "Datos e integración": "Data and integration",
      "Costos reales": "Real costs",
      "Métricas y SLA": "Metrics and SLA",
      "Checklist": "Checklist"
    }
  };
  return map[lang]?.[text] || text;
}

function route(topic, lang) {
  if (lang === "es") return `${topic.slugs.es}.html`;
  return `${lang}/${guideDirs[lang]}/${topic.slugs[lang]}.html`;
}

function pageUrl(topic, lang) {
  if (lang === "root") return `https://www.tecnotitan.com/${topic.slugs.es}.html`;
  if (lang === "es") return `https://www.tecnotitan.com/es/${topic.slugs.es}.html`;
  return `https://www.tecnotitan.com/${route(topic, lang)}`;
}

function relBase(rel) {
  const depth = rel.split("/").length - 1;
  return depth === 0 ? "./" : "../".repeat(depth);
}

function localHref(rel, target) {
  return `${rel.includes("/") ? "../" : "./"}${target}`;
}

function hubHref(rel, lang) {
  if (lang === "root" || lang === "es") return "./guias.html";
  return "./";
}

function aboutHref(lang) {
  if (lang === "root" || lang === "es") return "./sobre-guias-tecnotitan.html";
  if (lang === "pt") return "./sobre-guias-tecnotitan.html";
  return "./about-tecnotitan-guides.html";
}

function metaObj(topic, lang) {
  const [label, title, desc, intro, tag] = topic.meta[lang];
  return { label, title, desc, intro, tag };
}

function renderGuide(topic, lang, rootVariant = false) {
  const l = rootVariant ? "es" : lang;
  const rel = rootVariant ? `${topic.slugs.es}.html` : route(topic, lang);
  const base = relBase(rel);
  const m = metaObj(topic, l);
  const t = ui[l];
  const e = t.eeat;
  const canonical = rootVariant ? pageUrl(topic, "root") : pageUrl(topic, l);
  const alternates = [
    `<link rel="alternate" hreflang="es" href="${pageUrl(topic, "es")}" />`,
    ...["en", "pt", "zh", "ja", "ko"].map((x) => `<link rel="alternate" hreflang="${x}" href="${pageUrl(topic, x)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl(topic, "root")}" />`
  ].map((line) => `    ${line}`).join("\n");
  const sections = topic.sections[l].map(([h, p]) => `<section data-adsense-quality="true"><h2>${h}</h2><p>${p}</p><p>${t.cardNote}</p></section>`).join("");
  const structured = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: m.title,
    description: m.desc,
    datePublished: "2026-06-12",
    dateModified: "2026-06-12",
    author: { "@type": "Organization", name: "Tecnotitan Editorial", url: "https://www.tecnotitan.com/sobre-guias-tecnotitan.html" },
    publisher: { "@type": "Organization", name: "Tecnotitan", url: "https://www.tecnotitan.com/" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    inLanguage: l
  };
  return `<!doctype html>
<html lang="${l}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${m.title} | Tecnotitan</title>
    <link rel="icon" href="${base}assets/favicon.svg" type="image/svg+xml" />
    <meta name="theme-color" content="#050607" />
    <meta name="description" content="${m.desc}" />
    <link rel="canonical" href="${canonical}" />
${alternates}
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Tecnotitan" />
    <meta property="og:title" content="${m.title}" />
    <meta property="og:description" content="${m.desc}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="https://www.tecnotitan.com/assets/bg-process-ai.jpg" />
    <meta property="article:author" content="Tecnotitan Editorial" />
    <meta property="article:published_time" content="2026-06-12T12:00:00-05:00" />
    <meta property="article:modified_time" content="2026-06-12T12:00:00-05:00" />
    <script type="application/ld+json">${JSON.stringify(structured)}</script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="${base}styles.css" />
  </head>
  <body>
    <header class="site-header" data-header><a class="brand" href="${localHref(rel, "index.html")}" aria-label="Tecnotitan"><img class="brand-logo" src="${base}assets/logo-tecnotitan.svg" alt="TECNOTITAN" width="220" height="35" decoding="async" /></a><nav class="nav" aria-label="Navigation"><a href="${localHref(rel, "index.html")}">${t.nav[0]}</a><a href="${localHref(rel, "nosotros.html")}">${t.nav[1]}</a><a href="${localHref(rel, "productos.html")}">${t.nav[2]}</a><a href="${localHref(rel, "servicios.html")}">${t.nav[3]}</a><a href="${hubHref(rel, l)}" aria-current="page">${t.nav[4]}</a><a href="${localHref(rel, "divisiones.html")}">${t.nav[5]}</a><a href="${localHref(rel, "inversionistas.html")}">${t.nav[6]}</a><a href="${localHref(rel, "contacto.html")}">${t.nav[7]}</a></nav><a class="header-action" href="${localHref(rel, "contacto.html")}">${t.schedule}</a><button class="menu-button" type="button" aria-label="Menu" data-menu-button><span></span><span></span></button></header>
    <main class="page-main guide-page"><article><section class="guide-hero panel-section"><img class="page-bg" src="${base}assets/bg-process-ai.jpg" alt="" width="1600" height="900" decoding="async" fetchpriority="high" /><div class="page-scrim" aria-hidden="true"></div><div class="section-inner guide-hero-inner reveal"><p class="page-label">Tecnotitan / ${m.label}</p><h1>${m.title}</h1><p>${m.intro}</p><div class="guide-meta"><span>${t.updated}</span><span>${t.reading}</span><span>${t.download}</span></div><div class="guide-editorial-card" data-guide-editorial><div><span data-editorial-field="authorLabel">${e.authorLabel}</span><strong data-editorial-field="authorName">Tecnotitan Editorial</strong><p data-editorial-field="authorText">${e.authorText}</p></div><div><span data-editorial-field="updatedLabel">${t.updated.split(":")[0]}</span><strong data-editorial-field="updatedText">${e.updated || t.updated.replace(/^.*?:\\s*/, "")}</strong><p>${l === "en" ? "Reviewed by" : "Revisado por"}: <span data-editorial-field="reviewedText">${e.reviewed}</span></p></div><div><span data-editorial-field="methodLabel">${e.methodShort}</span><strong>${e.human}</strong><p data-editorial-field="sidebarText">${e.sidebar}</p></div><div><span>${e.methodShort}</span><a href="${aboutHref(l)}" data-editorial-method-link>${e.method}</a></div></div><div class="actions guide-actions"><a class="button button-primary" href="${base}assets/guides/${topic.pdf}" download>${t.download}</a><button class="button button-secondary" type="button" data-print-guide>${t.save}</button><button class="button button-secondary" type="button" data-share-guide>${t.share}</button><a class="button button-secondary" href="${localHref(rel, topic.cta)}">${t.next}</a></div></div></section><section class="content-band panel-section guide-body-section"><div class="section-inner guide-layout"><aside class="guide-sidebar reveal"><img src="${base}assets/logo-tecnotitan.svg" alt="Tecnotitan" width="190" height="31" loading="lazy" decoding="async" /><p>${t.inGuide}</p><nav><a href="#article">${topic.sections[l][0][0]}</a><a href="#article">${topic.sections[l][1][0]}</a><a href="#article">${topic.sections[l][2][0]}</a><a href="#article">Checklist</a></nav><div class="guide-editorial-panel" data-guide-editorial-sidebar><span>${e.methodShort}</span><strong>${l === "en" ? "Editorial standard" : "Criterio editorial"}</strong><p>${e.sidebar}</p></div></aside><div class="guide-content reveal" id="article">${sections}${relatedSection(rel, l)}${eeatSection(l)}<section class="guide-final-cta"><h2>${t.ctaTitle}</h2><p>${t.ctaText}</p><div class="actions"><a class="button button-primary" href="${localHref(rel, "servicios.html?interest=ai#solicitud-servicios")}">${t.services}</a><a class="button button-secondary" href="${localHref(rel, "contacto.html")}">${t.contact}</a></div></section></div></div></section></article></main>${footer(rel, base, t, l)}<script defer src="/_vercel/insights/script.js"></script><script src="${base}script.js"></script></body></html>
`;
}

function relatedSection(rel, lang) {
  const t = ui[lang];
  return `<section class="guide-related-section" data-internal-links="true"><p class="section-kicker">${t.recommended}</p><h2>${t.explore}</h2><p>${t.exploreText}</p><div class="guide-related-grid"><a class="guide-related-card" href="${hubHref(rel, lang)}"><span>${t.guides}</span><strong>${t.allGuides}</strong><small>${t.read}</small></a><a class="guide-related-card" href="${localHref(rel, "servicios.html?interest=ai#solicitud-servicios")}"><span>AI</span><strong>${t.services}</strong><small>${t.contact}</small></a><a class="guide-related-card" href="${localHref(rel, "producto-tecnotitan-os.html")}"><span>Tecnotitan OS</span><strong>${lang === "en" ? "Operational software layer" : "Capa operativa de software"}</strong><small>${t.read}</small></a><a class="guide-related-card" href="${localHref(rel, "producto-copiloto-pyme.html")}"><span>Copiloto Pyme</span><strong>${lang === "en" ? "AI for SMB workflows" : "IA para flujos de pymes"}</strong><small>${t.read}</small></a></div></section>`;
}

function eeatSection(lang) {
  const e = ui[lang].eeat;
  return `<section class="guide-eeat-section" data-guide-eeat><p class="section-kicker">${e.trust}</p><h2>${e.review}</h2><div class="guide-eeat-grid"><article><h3>${e.authorLabel}</h3><p>${e.authorText}</p></article><article><h3>${e.human}</h3><p>${e.sidebar}</p></article><article><h3>${e.sources}</h3><p>${e.sourcesText}</p></article><article><h3>${e.updates}</h3><p>${e.updatesText}</p></article></div><p class="guide-eeat-note">${e.note}</p></section>`;
}

function footer(rel, base, t, lang) {
  return `<footer class="footer institutional-footer"><a class="footer-brand" href="${localHref(rel, "index.html")}" aria-label="Tecnotitan"><img class="brand-logo" src="${base}assets/logo-tecnotitan.svg" alt="TECNOTITAN" width="220" height="35" loading="lazy" decoding="async" /></a><div class="footer-meta"><p>Tecnotitan Corporate</p><p>Software, inteligencia artificial, videojuegos, robótica y transformación tecnológica.</p><a href="mailto:info@tecnotitan.com">info@tecnotitan.com</a></div><nav aria-label="Footer"><a href="${localHref(rel, "productos.html")}">${t.nav[2]}</a><a href="${localHref(rel, "servicios.html")}">${t.nav[3]}</a><a href="${hubHref(rel, lang)}">${t.nav[4]}</a><a href="${localHref(rel, "contacto.html")}">${t.nav[7]}</a></nav><div class="footer-legal"><p>Colombia | Atención global para inversionistas y empresas.</p><p><a href="${localHref(rel, "aviso-legal.html")}">Aviso legal</a> &middot; <a href="https://www.linkedin.com/company/tecnotitan" rel="noopener">LinkedIn</a> &middot; <a href="https://www.facebook.com/tecnotitan" rel="noopener">Facebook</a> &middot; <a href="https://www.instagram.com/tecnotitan" rel="noopener">Instagram</a></p><p>&copy; 2026 Tecnotitan. Todos los derechos reservados.</p></div></footer>`;
}

function card(topic, hubLang) {
  const lang = hubLang === "root" ? "es" : hubLang;
  const m = metaObj(topic, lang);
  const href = hubLang === "root" || hubLang === "es" ? `./${topic.slugs.es}.html` : `./${topic.slugs[lang]}.html`;
  return `<article class="guide-card guide-card-muted"><span>${m.tag}</span><h3>${m.title}</h3><p>${m.desc}</p><a href="${href}">${ui[lang].read}</a></article>`;
}

function newHubSection(hubLang) {
  const lang = hubLang === "root" ? "es" : hubLang;
  return `<section class="content-band panel-section" data-new-premium-guides="true"><div class="section-inner section-copy reveal"><p class="section-kicker">${ui[lang].guides}</p><h2>${ui[lang].newTitle}</h2><p>${ui[lang].newText}</p></div><div class="section-inner guide-grid reveal">${topics.map((topic) => card(topic, hubLang)).join("")}</div></section>`;
}

function createMinimalPdf(file, text) {
  const safe = text.normalize("NFD").replace(/[^\x00-\x7F]/g, "").replace(/[()\\]/g, "");
  const lines = safe.split("\n").slice(0, 18);
  const stream = ["BT", "/F1 18 Tf", "72 760 Td"];
  lines.forEach((line, index) => {
    if (index) stream.push("0 -28 Td");
    stream.push(`(${line.slice(0, 88)}) Tj`);
  });
  stream.push("ET");
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj\n",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n"
  ];
  const content = stream.join("\n");
  objects.push(`5 0 obj << /Length ${Buffer.byteLength(content)} >> stream\n${content}\nendstream endobj\n`);
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (const object of objects) {
    offsets.push(Buffer.byteLength(pdf));
    pdf += object;
  }
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let index = 1; index < offsets.length; index += 1) pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  fs.writeFileSync(file, pdf, "binary");
}

for (const topic of topics) {
  fs.writeFileSync(path.join(root, `${topic.slugs.es}.html`), renderGuide(topic, "es", true), "utf8");
  fs.writeFileSync(path.join(root, "es", `${topic.slugs.es}.html`), renderGuide(topic, "es"), "utf8");
  for (const lang of ["en", "pt", "zh", "ja", "ko"]) {
    const rel = route(topic, lang);
    fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
    fs.writeFileSync(path.join(root, rel), renderGuide(topic, lang), "utf8");
  }
  const m = metaObj(topic, "es");
  createMinimalPdf(path.join(root, "assets", "guides", topic.pdf), `Tecnotitan Guide\n\n${m.title}\n\n${m.desc}\n\nhttps://www.tecnotitan.com/${topic.slugs.es}.html`);
}

const hubs = [
  ["guias.html", "root"],
  ["es/guias.html", "es"],
  ["en/guides/index.html", "en"],
  ["pt/guias/index.html", "pt"],
  ["zh/guides/index.html", "zh"],
  ["ja/guides/index.html", "ja"],
  ["ko/guides/index.html", "ko"]
];

for (const [file, lang] of hubs) {
  const full = path.join(root, file);
  let html = fs.readFileSync(full, "utf8");
  if (!html.includes('data-new-premium-guides="true"')) {
    html = html.replace("</main>", `${newHubSection(lang)}</main>`);
    fs.writeFileSync(full, html, "utf8");
  }
}

let sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
let sitemapBlock = "";
for (const topic of topics) {
  const urls = [pageUrl(topic, "root"), pageUrl(topic, "es"), ...["en", "pt", "zh", "ja", "ko"].map((lang) => pageUrl(topic, lang))];
  for (const loc of urls) {
    if (!sitemap.includes(`<loc>${loc}</loc>`)) {
      sitemapBlock += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-06-12</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.80</priority>\n  </url>\n`;
    }
  }
}
if (sitemapBlock) sitemap = sitemap.replace("</urlset>", `${sitemapBlock}</urlset>`);
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");

let llms = fs.readFileSync(path.join(root, "llms.txt"), "utf8");
for (const topic of topics) {
  const line = `- Guide: ${metaObj(topic, "en").title}: ${pageUrl(topic, "root")}`;
  if (!llms.includes(line)) llms = llms.replace("## Primary Sections\n", `## Primary Sections\n\n${line}\n`);
}
fs.writeFileSync(path.join(root, "llms.txt"), llms, "utf8");

console.log(JSON.stringify({ createdGuides: topics.map((topic) => topic.key), pages: topics.length * 7 }, null, 2));
