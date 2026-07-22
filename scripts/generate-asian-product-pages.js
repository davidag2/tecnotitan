const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const locales = {
  zh: {
    htmlLang: "zh-CN",
    nav: ["首页", "关于我们", "产品", "服务", "指南", "业务部门", "投资者", "联系"],
    navAria: "主导航",
    footerAria: "页脚导航",
    careers: "人才招聘",
    legal: "法律声明",
    openNav: "打开导航",
    homeAria: "Tecnotitan 首页",
    footerText: "软件、人工智能、电子游戏、机器人技术与数字化转型。",
    globalText: "哥伦比亚 | 为全球投资者与企业提供服务。",
    rights: "© 2026 Tecnotitan。保留所有权利。"
  },
  ja: {
    htmlLang: "ja",
    nav: ["ホーム", "会社情報", "製品", "サービス", "ガイド", "事業部門", "投資家向け", "お問い合わせ"],
    navAria: "メインナビゲーション",
    footerAria: "フッターナビゲーション",
    careers: "採用情報",
    legal: "法的通知",
    openNav: "ナビゲーションを開く",
    homeAria: "Tecnotitan ホーム",
    footerText: "ソフトウェア、人工知能、ゲーム、ロボティクス、テクノロジー変革。",
    globalText: "コロンビア | 投資家と企業をグローバルにサポート。",
    rights: "© 2026 Tecnotitan. All rights reserved."
  },
  ko: {
    htmlLang: "ko",
    nav: ["홈", "회사 소개", "제품", "서비스", "가이드", "사업 부문", "투자자", "문의"],
    navAria: "주요 탐색",
    footerAria: "하단 탐색",
    careers: "채용",
    legal: "법적 고지",
    openNav: "탐색 메뉴 열기",
    homeAria: "Tecnotitan 홈",
    footerText: "소프트웨어, 인공지능, 비디오 게임, 로보틱스 및 기술 혁신.",
    globalText: "콜롬비아 | 투자자와 기업을 위한 글로벌 지원.",
    rights: "© 2026 Tecnotitan. 모든 권리 보유."
  }
};

const products = {
  "producto-tecnotitan-engine.html": {
    image: "bg-games-experiences.jpg",
    interest: "videojuegos",
    content: {
      zh: {
        title: "Tecnotitan Engine | 游戏与仿真原型开发",
        description: "用于快速构建游戏、仿真、培训和互动产品的可复用引擎与工具包。",
        label: "互动产品",
        heading: "Tecnotitan Engine",
        subheading: "加速构建互动世界",
        intro: "面向游戏、仿真、培训、游戏化和网页互动体验的可复用引擎与工具包。",
        cards: [["问题", "原型开发缓慢", "互动体验通常需要大型团队、漫长周期和高成本的技术决策。"], ["解决方案", "可复用工具包", "通过组件、逻辑、场景和成熟模式，加速仿真与游戏化产品开发。"], ["路线图", "可复用知识产权引擎", "每个项目都会强化内部工具与可复用能力，为后续产品持续积累价值。"]],
        cta: "构建互动体验"
      },
      ja: {
        title: "Tecnotitan Engine | ゲーム・シミュレーションのプロトタイピング",
        description: "ゲーム、シミュレーション、研修、インタラクティブ製品を迅速に試作するための再利用可能なエンジンとツールキット。",
        label: "インタラクティブ製品",
        heading: "Tecnotitan Engine",
        subheading: "インタラクティブな世界をすばやく形に",
        intro: "ゲーム、シミュレーション、研修、ゲーミフィケーション、Web体験向けの再利用可能なエンジンとツールキットです。",
        cards: [["課題", "プロトタイプ開発の遅さ", "インタラクティブ体験の開発には、大規模なチーム、長い期間、高コストな技術判断が必要になりがちです。"], ["ソリューション", "再利用可能なツールキット", "コンポーネント、ロジック、シーン、実証済みパターンでシミュレーションやゲーミフィケーション製品を高速化します。"], ["ロードマップ", "再利用可能なIPエンジン", "各プロジェクトの知見を社内ツールと再利用可能な機能に蓄積し、次の製品開発につなげます。"]],
        cta: "インタラクティブ体験を相談する"
      },
      ko: {
        title: "Tecnotitan Engine | 게임 및 시뮬레이션 프로토타이핑",
        description: "게임, 시뮬레이션, 교육 및 인터랙티브 제품을 빠르게 구현하는 재사용 가능한 엔진과 툴킷입니다.",
        label: "인터랙티브 제품",
        heading: "Tecnotitan Engine",
        subheading: "인터랙티브 세계를 빠르게 구현",
        intro: "게임, 시뮬레이션, 교육, 게이미피케이션 및 웹 인터랙티브 경험을 위한 재사용 가능한 엔진과 툴킷입니다.",
        cards: [["문제", "느린 프로토타입 개발", "인터랙티브 경험은 대규모 팀, 긴 개발 주기, 높은 비용의 기술 의사결정을 요구하는 경우가 많습니다."], ["솔루션", "재사용 가능한 툴킷", "컴포넌트, 로직, 장면, 검증된 패턴으로 시뮬레이션과 게이미피케이션 제품 개발을 가속합니다."], ["로드맵", "재사용 가능한 IP 엔진", "각 프로젝트의 결과를 내부 도구와 재사용 가능한 역량으로 축적해 다음 제품 개발에 활용합니다."]],
        cta: "인터랙티브 경험 상담하기"
      }
    }
  },
  "producto-academia-tecnotitan.html": {
    image: "bg-capabilities-tech.jpg",
    interest: null,
    content: {
      zh: {
        title: "Academia Tecnotitan | 应用技术学习平台",
        description: "面向人工智能、软件、电子游戏、机器人技术和数字化转型的学习平台。",
        label: "教育产品",
        heading: "Academia Tecnotitan",
        subheading: "培养应用技术人才",
        intro: "面向人工智能、软件、电子游戏、机器人技术和数字化转型的实践型学习平台。",
        cards: [["问题", "技能缺口", "企业与专业人士需要更实用、更及时的应用技术培训。"], ["解决方案", "模块化学习", "通过学习路径、项目、实验室以及与 Tecnotitan 真实案例相连的内容提升能力。"], ["路线图", "技术社区", "平台可进一步发展认证、训练营、企业培训与全球技术社区。"]],
        cta: "咨询 Academia Tecnotitan"
      },
      ja: {
        title: "Academia Tecnotitan | 応用テクノロジー学習",
        description: "AI、ソフトウェア、ゲーム、ロボティクス、テクノロジー変革を学ぶための実践型プラットフォーム。",
        label: "教育製品",
        heading: "Academia Tecnotitan",
        subheading: "応用テクノロジー人材を育成",
        intro: "AI、ソフトウェア、ゲーム、ロボティクス、テクノロジー変革を実践的に学ぶプラットフォームです。",
        cards: [["課題", "スキルギャップ", "企業と専門人材には、実務に結びつく最新の応用テクノロジー教育が必要です。"], ["ソリューション", "モジュール型学習", "学習パス、プロジェクト、ラボ、Tecnotitan の実例に基づくコンテンツで能力を高めます。"], ["ロードマップ", "技術コミュニティ", "認定制度、コホート型講座、企業研修、グローバルコミュニティへ発展できます。"]],
        cta: "Academia Tecnotitan について相談する"
      },
      ko: {
        title: "Academia Tecnotitan | 응용 기술 학습 플랫폼",
        description: "인공지능, 소프트웨어, 비디오 게임, 로보틱스 및 기술 혁신을 위한 실무형 학습 플랫폼입니다.",
        label: "교육 제품",
        heading: "Academia Tecnotitan",
        subheading: "응용 기술 인재 양성",
        intro: "AI, 소프트웨어, 비디오 게임, 로보틱스 및 기술 혁신을 실무 중심으로 학습하는 플랫폼입니다.",
        cards: [["문제", "역량 격차", "기업과 전문가는 실제 업무에 적용할 수 있는 최신 기술 교육이 필요합니다."], ["솔루션", "모듈형 학습", "학습 경로, 프로젝트, 실습 환경과 Tecnotitan의 실제 사례를 연결한 콘텐츠를 제공합니다."], ["로드맵", "기술 커뮤니티", "인증, 코호트 과정, 기업 교육 및 글로벌 기술 커뮤니티로 확장할 수 있습니다."]],
        cta: "Academia Tecnotitan 상담하기"
      }
    }
  },
  "producto-call-center-ai.html": {
    image: "bg-process-ai.jpg",
    interest: "ai",
    content: {
      zh: {
        title: "Call Center AI Tecnotitan | 面向客服与销售的 AI 智能体",
        description: "用于客户服务、销售、客户跟进和联络中心自动化的对话式 AI 智能体。",
        label: "AI 客户运营",
        heading: "Call Center AI",
        subheading: "规模化提升客服与销售",
        intro: "对话式智能体可在销售和支持流程中响应、分类、转接并持续跟进客户。",
        cards: [["问题", "团队负担过重", "销售和支持团队常被重复问题与人工跟进拖慢。"], ["解决方案", "互联的 AI 智能体", "AI 可处理对话、分类、摘要、升级转接以及内部系统更新。"], ["路线图", "可衡量的运营", "通过响应速度、满意度、转化率和生产力指标推动持续优化。"]],
        cta: "申请 AI 评估"
      },
      ja: {
        title: "Call Center AI Tecnotitan | サポート・営業向けAIエージェント",
        description: "カスタマーサポート、営業、フォローアップ、コンタクトセンター自動化のための会話型AIエージェント。",
        label: "AIカスタマーオペレーション",
        heading: "Call Center AI",
        subheading: "サポートと営業をスケール",
        intro: "会話型AIエージェントが、営業・サポート業務で顧客対応、分類、エスカレーション、フォローアップを行います。",
        cards: [["課題", "チームの過負荷", "営業とサポートのチームは、繰り返しの質問と手作業のフォローアップで対応速度を失います。"], ["ソリューション", "接続されたAIエージェント", "会話、分類、要約、エスカレーション、社内システム更新をAIが支援します。"], ["ロードマップ", "測定可能なオペレーション", "応答時間、満足度、転換率、生産性の指標を活用して継続的に改善します。"]],
        cta: "AI診断を依頼する"
      },
      ko: {
        title: "Call Center AI Tecnotitan | 고객 지원 및 영업 AI 에이전트",
        description: "고객 지원, 영업, 후속 관리 및 컨택센터 자동화를 위한 대화형 AI 에이전트입니다.",
        label: "AI 고객 운영",
        heading: "Call Center AI",
        subheading: "고객 지원과 영업을 확장",
        intro: "대화형 에이전트가 영업 및 지원 업무에서 고객 응대, 분류, 이관, 후속 관리를 수행합니다.",
        cards: [["문제", "과부하된 팀", "영업 및 지원 팀은 반복 질문과 수동 후속 관리로 인해 대응 속도가 느려집니다."], ["솔루션", "연결된 AI 에이전트", "AI가 대화, 분류, 요약, 이관 및 내부 시스템 업데이트를 지원합니다."], ["로드맵", "측정 가능한 운영", "응답, 만족도, 전환율, 생산성 지표를 기반으로 운영을 지속적으로 개선합니다."]],
        cta: "AI 진단 요청하기"
      }
    }
  }
};

const alternateLinks = (filename) => ["es", "en", "pt", "zh", "ja", "ko"]
  .map((lang) => `    <link rel="alternate" hreflang="${lang}" href="https://www.tecnotitan.com/${lang}/${filename}" />`)
  .concat(`    <link rel="alternate" hreflang="x-default" href="https://www.tecnotitan.com/en/${filename}" />`)
  .join("\n");

function renderPage(locale, filename, product) {
  const common = locales[locale];
  const page = product.content[locale];
  const serviceHref = product.interest
    ? `/${locale}/services/?interest=${product.interest}#solicitud-servicios`
    : `/${locale}/contact/`;
  const cards = page.cards.map(([label, title, text]) => `          <article><span>${label}</span><h3>${title}</h3><p>${text}</p></article>`).join("\n");
  const navLinks = ["", "about/", "products/", "services/", "guides/", "divisions/", "investors/", "contact/"];
  const nav = common.nav.map((label, index) => `<a href="/${locale}/${navLinks[index]}"${index === 2 ? ' aria-current="page"' : ""}>${label}</a>`).join("");

  return `<!doctype html>
<html lang="${common.htmlLang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="theme-color" content="#050607" />
    <link rel="icon" href="../assets/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="../site.webmanifest" />
    <link rel="canonical" href="https://www.tecnotitan.com/${locale}/${filename}" />
${alternateLinks(filename)}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Tecnotitan" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="https://www.tecnotitan.com/${locale}/${filename}" />
    <meta property="og:image" content="https://www.tecnotitan.com/assets/${product.image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="https://www.tecnotitan.com/assets/${product.image}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body>
    <header class="site-header" data-header>
      <a class="brand" href="/${locale}/" aria-label="${common.homeAria}"><img class="brand-logo" src="../assets/logo-tecnotitan.svg" alt="TECNOTITAN" width="220" height="35" decoding="async" /></a>
      <nav class="nav" aria-label="${common.navAria}">${nav}</nav>
      <a class="header-action" href="${serviceHref}">${page.cta}</a>
      <button class="menu-button" type="button" aria-label="${common.openNav}" data-menu-button><span></span><span></span></button>
    </header>
    <main class="page-main">
      <section class="page-hero panel-section">
        <img class="page-bg" src="../assets/${product.image}" alt="" width="1600" height="900" decoding="async" fetchpriority="high" />
        <div class="page-scrim" aria-hidden="true"></div>
        <div class="section-inner page-hero-inner reveal"><p class="page-label">${page.label}</p><h1><span>${page.heading}</span><span>${page.subheading}</span></h1><p>${page.intro}</p></div>
      </section>
      <section class="content-band panel-section">
        <div class="section-inner page-grid reveal">
${cards}
        </div>
        <div class="section-inner deck-action reveal"><a class="button button-primary" href="${serviceHref}">${page.cta}</a></div>
      </section>
    </main>
    <footer class="footer institutional-footer">
      <a class="footer-brand" href="/${locale}/" aria-label="${common.homeAria}"><img class="brand-logo" src="../assets/logo-tecnotitan.svg" alt="TECNOTITAN" width="220" height="35" loading="lazy" decoding="async" /></a>
      <div class="footer-meta"><p>Tecnotitan Corporate</p><p>${common.footerText}</p><a href="mailto:info@tecnotitan.com">info@tecnotitan.com</a></div>
      <nav aria-label="${common.footerAria}"><a href="/${locale}/products/">${common.nav[2]}</a><a href="/${locale}/services/">${common.nav[3]}</a><a href="/${locale}/guides/">${common.nav[4]}</a><a href="/${locale}/investors/">${common.nav[6]}</a><a href="/${locale}/careers/">${common.careers}</a><a href="/${locale}/contact/">${common.nav[7]}</a></nav>
      <div class="footer-legal"><p>${common.globalText}</p><p><a href="/${locale}/legal/">${common.legal}</a> · <a href="https://www.linkedin.com/company/tecnotitan" rel="noopener">LinkedIn</a> · <a href="https://www.facebook.com/tecnotitan" rel="noopener">Facebook</a> · <a href="https://www.instagram.com/tecnotitan" rel="noopener">Instagram</a></p><p>${common.rights}</p></div>
    </footer>
    <script defer src="/_vercel/insights/script.js"></script>
    <script src="../script.js"></script>
    <script src="https://madre.tecnotitan.com/widget/tecnotitan-guide.js" data-site="tecnotitan" data-language="auto"></script>
  </body>
</html>
`;
}

for (const locale of Object.keys(locales)) {
  for (const [filename, product] of Object.entries(products)) {
    fs.writeFileSync(path.join(root, locale, filename), renderPage(locale, filename, product), "utf8");
  }
}

console.log("Generated 9 localized Asian product pages.");

