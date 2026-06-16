
/* ---------- 数据（取自履历原文） ---------- */
const NAV = [
  {id:'about',       zh:'关于',   en:'Profile'},
  {id:'works',       zh:'展陈',   en:'Works'},
  {id:'publications',zh:'著述',   en:'Writing'},
  {id:'research',    zh:'课题',   en:'Research'},
  {id:'standards',   zh:'标准',   en:'Standards'},
  {id:'honors',      zh:'荣誉',   en:'Honors'},
  {id:'appointments',zh:'任职',   en:'Service'},
  {id:'contact',     zh:'联系',   en:'Contact'},
];

const FACTS = [
  {zh:'1975 年生',   en:'b. 1975'},
  {zh:'清华大学美术学院', en:'Tsinghua · AAD'},
  {zh:'自 2000 年',   en:'Since 2000'},
  {zh:'20+ 年实践',  en:'20+ years'},
  {zh:'北京',        en:'Beijing'},
];

const FOCUS = [
  {zh:'博物馆陈列策划', en:'Museum exhibition planning'},
  {zh:'文化遗产数字化', en:'Cultural-heritage digitization'},
  {zh:'交互媒体设计',   en:'Interactive media design'},
  {zh:'沉浸式体验',     en:'Immersive experience'},
  {zh:'非遗活化',       en:'Intangible heritage'},
  {zh:'文旅空间',       en:'Cultural-tourism spaces'},
];

const EDU = [
  {y:'1992 – 1996', zhS:'浙江大学', enS:'Zhejiang University', zhD:'工业造型设计 · 学士', enD:'B.Eng., Industrial Design'},
  {y:'1997 – 2001', zhS:'清华大学', enS:'Tsinghua University', zhD:'设计艺术学 · 硕士', enD:'M.A., Design & Art'},
  {y:'2002 – 2008', zhS:'清华大学', enS:'Tsinghua University', zhD:'艺术学 · 博士（在职）', enD:'Ph.D., Art Studies (in-service)'},
];

const WORKS = [
  {y:2026, ys:'进行中 · ONGOING', zh:'泰山博物院 · 展陈策划设计', en:'Mount Tai Museum — Exhibition Planning & Design', scale:'49,733 ㎡', tzh:'博物馆策划', ten:'Museum Planning'},
  {y:2026, ys:'2026', zh:'克孜尔石窟壁画智能修复与壁画体验', en:'Kizil Grotto Murals — Intelligent Restoration & Immersive Experience', scale:'第 38 窟 · CAVE 38', tzh:'文化遗产数字化', ten:'Digital Heritage'},
  {y:2025, ys:'2025', zh:'安徽省非物质文化遗产馆', en:'Anhui Museum of Intangible Cultural Heritage', tzh:'非遗馆', ten:'ICH Museum'},
  {y:2024, ys:'2024', zh:'汉魏洛阳故城遗址博物馆 · 展陈项目', en:'Han–Wei Luoyang Ancient City Site Museum', scale:'30,000 ㎡', tzh:'遗址博物馆', ten:'Site Museum'},
  {y:2024, ys:'2024', zh:'24 小时无人值守公共文化驿站 · 总体设计开发', en:'24-Hour Unattended Public Cultural Station', scale:'30 / 72 / 108 ㎡', tzh:'公共文化服务', ten:'Public Culture'},
  {y:2023, ys:'2023', zh:'中国大运河非物质文化遗产展示馆 · 策划与展陈', en:'China Grand Canal Intangible Cultural Heritage Hall', scale:'16,000 ㎡', tzh:'非遗馆', ten:'ICH Museum'},
  {y:2023, ys:'2023', zh:'北京大运河博物馆（首都博物馆东馆）· 专题展览设计', en:'Beijing Grand Canal Museum (Capital Museum East Branch)', tzh:'专题展览', ten:'Thematic Exhibition'},
  {y:2022, ys:'2022', zh:'熊家冢遗址博物馆 · 展陈提升（世界银行资助 · 荆州古城）', en:'Xiongjiazhong Site Museum — Exhibition Upgrade (World Bank, Jingzhou)', tzh:'遗址·保护', ten:'Site · Conservation'},
  {y:2021, ys:'2021 · 2022', zh:'平行时空：在希腊遇见兵马俑 · 数字展', en:'Parallel Space: The Terracotta Warriors in Greece', tzh:'国际数字展', ten:'International Digital Exhibition'},
  {y:2021, ys:'2021', zh:'黄河流域非物质文化遗产展示中心 · 策划与展陈设计', en:'Yellow River Basin Intangible Cultural Heritage Center', tzh:'非遗中心', ten:'ICH Center'},
  {y:2020, ys:'2020', zh:'清华大学合肥公共安全研究院二期 · 安全文化教育与科普基地', en:'Tsinghua Hefei Institute of Public Safety — Phase II Education Base', scale:'34,000 ㎡', tzh:'科普教育', ten:'Science Education'},
  {y:2020, ys:'2020 · 2022', zh:'景德镇御窑遗址博物馆 · 展陈及「青花秘境」数字特展', en:'Jingdezhen Imperial Kiln Museum & “Mystery of Blue-and-White” Digital Show', tzh:'遗址·数字', ten:'Site · Digital'},
  {y:2019, ys:'2019', zh:'江西省博物馆新馆 · 江西非物质文化遗产展陈设计', en:'Jiangxi Provincial Museum — Jiangxi ICH Exhibition', tzh:'博物馆展陈', ten:'Museum Exhibition'},
  {y:2019, ys:'2019', zh:'2019 北京世界园艺博览会 · 中国国家馆及卡塔尔国家馆展陈', en:'2019 Beijing Int’l Horticultural Expo — China & Qatar Pavilions', tzh:'国际展览', ten:'Int’l Exposition'},
  {y:2019, ys:'2019', zh:'隋唐洛阳城应天门遗址 · 保护展示工程', en:'Yingtianmen Gate, Sui–Tang Luoyang City — Conservation & Display', scale:'27,000 ㎡', tzh:'遗址保护', ten:'Site Conservation'},
  {y:2018, ys:'2018', zh:'孔子博物馆 · 展陈项目', en:'Confucius Museum — Exhibition Design', scale:'15,000 ㎡', tzh:'博物馆', ten:'Museum'},
  {y:2018, ys:'2018', zh:'北京故宫大高玄殿 · 数字展厅设计', en:'The Palace Museum — Dagaoxuan Hall Digital Gallery', tzh:'数字展厅', ten:'Digital Gallery'},
  {y:2017, ys:'2017', zh:'中国国学中心 · 易学馆、兵学馆、中医药馆展陈设计', en:'China Center for Sinology — Yijing, Military Science & TCM Halls', tzh:'专题馆', ten:'Thematic Halls'},
  {y:2017, ys:'2017', zh:'湘西土家族苗族自治州非物质文化遗产展示中心', en:'Xiangxi Tujia & Miao Autonomous Prefecture ICH Center', tzh:'非遗中心', ten:'ICH Center'},
];

const PUBS = [
  {zh:'非遗专题展览的叙事方式研究', en:'Narrative Approaches in Thematic Exhibitions of Intangible Cultural Heritage', vzh:'文化遗产 · 2021', ven:'Cultural Heritage · 2021'},
  {zh:'展览陈列中的艺术与科技', en:'Art and Technology in Exhibition Display', vzh:'建设科技 · 2020', ven:'Construction Science & Technology · 2020'},
  {zh:'具身认知视角下的博物馆体感交互设计研究', en:'Embodied Cognition and Motion-Sensing Interaction Design in Museums', vzh:'装饰 · 2020', ven:'Zhuangshi · 2020'},
  {zh:'国外交互设计学科的研究进展与趋势', en:'Research Progress and Trends of Interaction Design Abroad', vzh:'装饰 · 2019', ven:'Zhuangshi · 2019'},
  {zh:'数字文化遗产体验空间的构建研究', en:'Constructing Experiential Spaces for Digital Cultural Heritage', vzh:'文化遗产保护与数字化国际论坛 · 2018', ven:'Int’l Forum on Heritage Conservation & Digitization · 2018'},
  {zh:'元代丝织品中的格里芬图像研究', en:'Griffin Imagery in Yuan-Dynasty Silk Textiles', vzh:'装饰 · 2018', ven:'Zhuangshi · 2018'},
  {zh:'文化遗产展示传播设计与国家形象', en:'Heritage Display & Communication Design and National Image', vzh:'清华国家形象论坛 · 2017', ven:'Tsinghua National Image Forum · 2017'},
  {zh:'非物质文化遗产实体展示空间中的数字化应用', en:'Digital Applications in Physical Exhibition Spaces for ICH', vzh:'遗产与保护研究 · 2016', ven:'Heritage & Conservation Research · 2016'},
  {zh:'虚拟体验设计的基本原则', en:'Fundamental Principles of Virtual Experience Design', vzh:'装饰 · 2008', ven:'Zhuangshi · 2008'},
  {zh:'数字娱乐技术在现代博物馆设计中的应用', en:'Digital Entertainment Technology in Modern Museum Design', vzh:'装饰 · 2007', ven:'Zhuangshi · 2007'},
];

const RESEARCH = [
  {y:'2023', role:'lead', rzh:'首席专家', ren:'Chief Expert', zh:'国家社科基金艺术学重大项目《国家文化数字化发展现状及策略研究》', en:'“China’s Cultural Digitization: Status & Strategy”', ozh:'国家社科基金 · 艺术学重大项目', oen:'National Social Science Fund · Major Arts Project'},
  {y:'2023', role:'pi', rzh:'负责', ren:'PI', zh:'《文物数字资源管理与利用标准体系研究——云服务流程优化及可信技术》', en:'“Standards for Cultural-Relic Digital Resources: Cloud-Service Optimization & Trusted Technology”', ozh:'科技部 · 国家重点研发计划', oen:'MOST · National Key R&D Program'},
  {y:'2023', role:'pi', rzh:'负责', ren:'PI', zh:'《克孜尔石窟重点洞窟壁画数字复原与沉浸体验示范》', en:'“Digital Restoration & Immersive Experience of Kizil Grotto Murals”', ozh:'新疆自治区 · 重点研发计划', oen:'Xinjiang · Key R&D Program'},
  {y:'2023', role:'pi', rzh:'负责', ren:'PI', zh:'中希文化旅游年开幕展《中希合作数字化项目远程交互展示系统平台建设》', en:'“Remote Interactive Display Platform”, China–Greece Culture & Tourism Year', ozh:'中希文化旅游年', oen:'China–Greece Culture & Tourism Year'},
  {y:'2022', role:'pi', rzh:'负责', ren:'PI', zh:'《基于观众体验的博物馆展陈智能交互设计研究》', en:'“Visitor-Experience-Based Intelligent Exhibition Interaction Design”', ozh:'中国国家博物馆 · 重点科研项目', oen:'National Museum of China · Key Research Project'},
  {y:'2021', role:'pi', rzh:'负责', ren:'PI', zh:'科技冬奥专项《奥林匹克数字博物馆——异形复杂场景沉浸式交互展厅系统研发》', en:'“Olympic Digital Museum: Immersive Interactive Gallery System”', ozh:'科技部 · 科技冬奥重点专项', oen:'MOST · “Tech Winter Olympics”'},
  {y:'2020', role:'pi', rzh:'负责', ren:'PI', zh:'《交互设计在文化遗产展示传播领域的应用研究》', en:'“Interaction Design for Cultural-Heritage Display & Communication”', ozh:'国家社科基金项目', oen:'National Social Science Fund'},
  {y:'2019', role:'pi', rzh:'负责', ren:'PI · Sub-project', zh:'国家社科重大项目子课题《中国非物质文化遗产的数字创意与相关技术开发》', en:'“Digital Creativity & Technology for China’s Intangible Cultural Heritage”', ozh:'国家社科基金 · 重大项目子课题', oen:'National Social Science Fund · Major (sub)'},
  {y:'2018', role:'pi', rzh:'负责', ren:'PI', zh:'《传统村落数字博物馆 第二版方案设计和案例制作》', en:'“Digital Museum of Traditional Villages, v2”', ozh:'住房和城乡建设部委托', oen:'Ministry of Housing & Urban-Rural Development'},
  {y:'2016', role:'pi', rzh:'负责', ren:'PI', zh:'公共文化服务体系制度设计《数字文化体验空间的构建研究》', en:'“Constructing Digital Cultural Experience Spaces”', ozh:'文化部', oen:'Ministry of Culture'},
  {y:'2015', role:'part', rzh:'参与', ren:'Contributor', zh:'《文化遗产数字化保护的理论与方法》', en:'“Theory & Methods for Digital Heritage Conservation”', ozh:'国家 973 计划', oen:'National 973 Program'},
  {y:'2015', role:'part', rzh:'参与', ren:'Contributor', zh:'《天上西藏——文化遗产数字化展示技术研发与国际文化交流应用示范》', en:'“Heavenly Tibet: Digital Heritage Display & Int’l Exchange”', ozh:'国家文化科技创新工程', oen:'National Cultural S&T Innovation'},
  {y:'2014', role:'part', rzh:'参与', ren:'Contributor', zh:'《基于丝绸之路（中国段）文化遗产资源的文化旅游服务系统应用示范》', en:'“Silk Road (China) Heritage Cultural-Tourism Service System”', ozh:'国家文化科技创新工程', oen:'National Cultural S&T Innovation'},
  {y:'2013', role:'part', rzh:'参与', ren:'Contributor', zh:'《重现辉煌——数字圆明园研究及文化旅游应用示范》', en:'“Reviving Splendor: Digital Yuanmingyuan”', ozh:'国家文化科技创新工程', oen:'National Cultural S&T Innovation'},
  {y:'2013', role:'part', rzh:'参与', ren:'Contributor', zh:'《国学传播与国学中心体验规划设计》', en:'“Sinology Communication & Center Experience Planning”', ozh:'国务院参事室委托', oen:'Counsellors’ Office of the State Council'},
];

const STANDARDS = [
  {y:'2019', role:'lead', rzh:'牵头', ren:'Lead', s:'wip', zh:'《智慧博物馆展陈与导览数字化技术要求》', en:'“Digital Technology Requirements for Smart-Museum Exhibition & Wayfinding”', ozh:'国家文物局 · 文物保护行业标准', oen:'National Cultural Heritage Administration'},
  {y:'2023', role:'lead', rzh:'牵头', ren:'Lead', s:'wip', zh:'《县级文化馆数字体验厅建设与服务指南》', en:'“Guidelines for County-Level Cultural-Center Digital Experience Halls”', ozh:'文化和旅游部 · 行业标准', oen:'Ministry of Culture & Tourism'},
  {y:'2021', role:'part', rzh:'参编（编制组副组长）', ren:'Contributor · Dy. Head', s:'wip', zh:'《非物质文化遗产馆认定与服务规范》', en:'“Accreditation & Service Standards for ICH Museums”', ozh:'文化和旅游部 · 行业标准', oen:'Ministry of Culture & Tourism'},
  {y:'2022', role:'lead', rzh:'牵头', ren:'Lead', s:'pub', zh:'《文化体验厅技术要求 第 1 部分：县区文化馆》', en:'“Cultural Experience Hall Tech Requirements, Part 1: County Cultural Centers”', ozh:'国家文化大数据体系', oen:'National Cultural Big-Data System'},
  {y:'2022', role:'lead', rzh:'牵头', ren:'Lead', s:'pub', zh:'《文化体验厅技术要求 第 2 部分：新时代文明实践中心》', en:'“…Part 2: New-Era Civic Practice Centers”', ozh:'国家文化大数据体系', oen:'National Cultural Big-Data System'},
  {y:'2021', role:'lead', rzh:'牵头', ren:'Lead', s:'pub', zh:'《文化体验设施通用技术要求》', en:'“General Technical Requirements for Cultural Experience Facilities”', ozh:'国家文化大数据标准体系', oen:'National Cultural Big-Data Standards'},
  {y:'2021', role:'part', rzh:'参编', ren:'Contributor', s:'pub', zh:'《文化体验装备技术要求 第 1 部分 通用技术要求》', en:'“Cultural Experience Equipment Tech Requirements, Part 1”', ozh:'国家文化大数据标准体系', oen:'National Cultural Big-Data Standards'},
  {y:'2017', role:'pi', rzh:'负责', ren:'PI', s:'done', zh:'《传统村落数字博物馆 2.0 版设计和标准研究》', en:'“Digital Museum of Traditional Villages v2.0: Design & Standards”', ozh:'住房和城乡建设部', oen:'Ministry of Housing & Urban-Rural Development'},
];

const HONORS_TOP = [
  {y:'2025', zh:'全国高被引学者（博物馆学科）前 5%', en:'Top-5% Highly Cited Scholar in Museology', dzh:'全国博物馆学科', den:'National ranking, China'},
  {y:'金奖 · GOLD', zh:'第三届中国美术奖 · 金奖', en:'Gold Medal, 3rd China Art Award', dzh:'《飞跃号磁悬浮列车概念设计》入选第十三届全国美展', den:'“Feiyue” Maglev Train Concept — 13th National Exhibition of Fine Arts'},
  {y:'首席专家', zh:'国家社科基金艺术学重大项目 · 首席专家', en:'Chief Expert, NSSF Major Arts Project', dzh:'《国家文化数字化发展现状及策略研究》', den:'“China’s Cultural Digitization: Status & Strategy”'},
];

const HONOR_GROUPS = [
  {nzh:'汉魏洛阳故城遗址博物馆', nen:'Han–Wei Luoyang Ancient City Site Museum', yy:'2025', items:[
    {zh:'IDA 国际设计奖 · 荣誉提名', en:'IDA Design Awards — Honorable Mention'},
    {zh:'APDC 亚太设计奖 · 展览类金奖', en:'APDC Design Awards — Exhibition Gold'},
  ]},
  {nzh:'中国大运河非物质文化遗产展示馆', nen:'China Grand Canal Intangible Cultural Heritage Hall', yy:'2022 – 2025', items:[
    {zh:'美国 IDA 国际设计大奖 · 年度荣誉奖', en:'IDA Design Awards — Honorable Mention'},
    {zh:'加拿大 GPA 设计大奖 · 文化空间类金奖', en:'Grands Prix du Design — Cultural Space Gold'},
    {zh:'第十四届中国空间设计大赛 · 展陈空间工程类金奖', en:'Gold, 14th China Spatial Design Competition'},
  ]},
  {nzh:'平行时空：在希腊遇见兵马俑', nen:'Parallel Space: The Terracotta Warriors in Greece', yy:'2022', items:[
    {zh:'全球世界遗产教育创新案例奖 · 卓越之星', en:'Global World Heritage Education Innovation — Star of Excellence'},
    {zh:'中华文物全媒体传播精品（新媒体）推介项目', en:'Chinese Heritage All-Media Excellence Project'},
  ]},
  {nzh:'24 小时无人值守公共文化驿站', nen:'24-Hour Unattended Public Cultural Station', yy:'2024', items:[
    {zh:'文化和旅游数字化创新示范优秀案例', en:'Cultural-Tourism Digitization Innovation Case'},
    {zh:'全国文化和旅游装备技术提升优秀案例', en:'National Cultural-Tourism Equipment Technology Case'},
  ]},
  {nzh:'孔子博物馆', nen:'Confucius Museum', yy:'2018 –', items:[
    {zh:'29th Asia-Pacific Property Awards · Five Star Grand Award', en:'29th Asia-Pacific Property Awards — Five Star Grand Award'},
    {zh:'2020 中国建筑工程装饰奖', en:'China Construction Decoration Award, 2020'},
    {zh:'2020 Grand Prix du Design Award', en:'Grand Prix du Design Award, 2020'},
    {zh:'第十届中国国际空间设计大赛（CBDA）金奖', en:'Gold, 10th China Int’l Space Design Competition (CBDA)'},
    {zh:'第十七届全国博物馆十大陈列展览精品 · 优胜奖', en:'Excellence Award, 17th National Top-10 Museum Exhibitions'},
    {zh:'第十三届中国国际室内设计双年展 · 铜奖', en:'Bronze, 13th China Int’l Interior Design Biennial'},
    {zh:'2019–2020 中国建筑学会建筑设计奖 · 室内设计二等奖', en:'2nd Prize (Interior), Architectural Society of China, 2019–2020'},
  ]},
  {nzh:'2019 北京世园会 · 中国国家馆', nen:'China Pavilion · 2019 Beijing Horticultural Expo', yy:'2019', items:[
    {zh:'29th Asia-Pacific Property Awards', en:'29th Asia-Pacific Property Awards'},
    {zh:'2019 亚太室内设计精英邀请赛 · 杰出设计奖', en:'Outstanding Design, APIDA Elite Invitational, 2019'},
    {zh:'北京市建筑装饰工程优秀设计奖', en:'Beijing Excellent Architectural Decoration Design Award'},
  ]},
  {nzh:'隋唐洛阳城应天门遗址', nen:'Yingtianmen Gate, Sui–Tang Luoyang', yy:'2019 –', items:[
    {zh:'2020 中国建设工程鲁班奖（国家优质工程）', en:'Luban Prize — National Quality Project, 2020'},
    {zh:'中国装饰设计奖（CBDA 设计奖）· 银奖', en:'Silver, CBDA Design Award'},
  ]},
  {nzh:'湘西非物质文化遗产展示中心', nen:'Xiangxi Intangible Cultural Heritage Center', yy:'2017 –', items:[
    {zh:'2019 中国建设工程鲁班奖（国家优质工程）', en:'Luban Prize — National Quality Project, 2019'},
  ]},
];

const APPTS = [
  {zh:'清华大学美术学院遗产传播与数智创新研究所 · 所长', en:'Director, Institute for Heritage Communication & Digital-Intelligent Innovation, AAD, Tsinghua'},
  {zh:'清华大学国家形象传播研究中心 · 副主任', en:'Deputy Director, Tsinghua Center for National Image Communication'},
  {zh:'清华大学无障碍发展研究院 · 副院长', en:'Deputy Dean, Tsinghua Institute for Accessibility Development'},
  {zh:'文旅部国家文化和旅游公共服务专家委员会 · 委员', en:'Member, National Expert Committee on Public Cultural & Tourism Services, MCT'},
  {zh:'全国文化馆标准化技术委员会（国家标准委）· 委员', en:'Member, National Technical Committee on Cultural-Center Standardization (SAC)'},
  {zh:'中国文物学会文化遗产传播专委会 · 副主任委员', en:'Deputy Director, Cultural Heritage Communication Committee, Chinese Society of Cultural Relics'},
  {zh:'中国建筑装饰协会设计委员会 · 副主任委员', en:'Deputy Director, Design Committee, China Building Decoration Association'},
  {zh:'中国古迹遗址保护协会数字遗产专业委员会 · 委员', en:'Member, Digital Heritage Committee, ICOMOS China'},
  {zh:'中国人工智能学会智能创意与数字艺术专委会 · 委员', en:'Member, Intelligent Creativity & Digital Art Committee, CAAI'},
];

const REPORTS = [{
  y:'2022', role:'part', rzh:'联合撰写', ren:'Co-author', s:'pub',
  zh:'《2022 文博数字化报告》', en:'“2022 Report on Cultural-Heritage Digitization”',
  ozh:'中国文物交流中心、腾讯、新京报', oen:'China Cultural Relics Exchange Center, Tencent & The Beijing News'
}];

// 近期论文成果；链接未确认时保持为空。
const RECENT_NEWS = [
  {
    dateZh:'2026', dateEn:'2026', typeZh:'CCF-A', typeEn:'CCF-A',
    titleZh:'沉浸式 VR 文化遗产中的可穿戴嗅觉-热反馈初探',
    titleEn:'Wearable Olfactory-Thermal Feedback for Immersive VR Cultural Heritage',
    url:''
  },
  {
    dateZh:'2026', dateEn:'2026', typeZh:'EI', typeEn:'EI',
    titleZh:'数字佛国：克孜尔第 38 窟 VR 沉浸体验可持续设计实践',
    titleEn:'Digital Buddha Country: VR Immersive Experience in Cave 38 of Kizil',
    url:''
  },
  {
    dateZh:'2026', dateEn:'2026', typeZh:'SSCI', typeEn:'SSCI',
    titleZh:'大型遗址数字重建与阐释：洛阳应天门严重损毁案例',
    titleEn:'Digital Reconstruction and Interpretation of Great Sites: Yingtianmen in Luoyang',
    url:''
  },
  {
    dateZh:'2025', dateEn:'2025', typeZh:'期刊', typeEn:'Journal',
    titleZh:'克孜尔石窟壁画中的虚拟现实与教育：面向遗产可持续性的多感官交互',
    titleEn:'Virtual Reality and Education in Kizil Cave Murals',
    url:''
  },
  {
    dateZh:'2025', dateEn:'2025', typeZh:'EI', typeEn:'EI',
    titleZh:'克孜尔合奏：复兴第 38 窟失落乐队的音频交互系统设计',
    titleEn:'The Kizil Ensemble: Reviving the Lost Orchestra of Cave 38',
    url:''
  }
];

const WORK_IDS = [
  "taishan-museum", "kizil-grotto", "anhui-ich-museum", "han-wei-luoyang", "public-cultural-station",
  "grand-canal-ich", "beijing-grand-canal", "xiongjiazhong-site-museum",
  "parallel-space-greece", "yellow-river-ich", "tsinghua-hefei-public-safety",
  "jingdezhen-imperial-kiln", "jiangxi-museum-ich", "beijing-horticultural-expo",
  "yingtianmen-gate", "confucius-museum", "dagaoxuan-digital-gallery",
  "china-center-sinology", "xiangxi-ich-center",
];

const WORK_DETAILS = {
  "taishan-museum": {
    category: "Museum",
    locationZh: "泰安，中国", locationEn: "Tai'an, China",
    summaryZh: "以泰山世界文化与自然双重遗产价值为线索，构建九大主题空间与当代叙事体系。",
    summaryEn: "A contemporary narrative of Mount Tai's dual World Heritage values across nine thematic spaces.",
    overviewZh: "项目总建筑面积 49,733 平方米，陈列展览区 15,181 平方米。一个通史厅、七个专题厅及国泰民安数字礼仪空间，共同呈现泰山的历史、礼制、文化、自然与精神价值。",
    overviewEn: "The 49,733-square-meter museum includes 15,181 square meters of exhibitions, bringing together a general-history hall, seven thematic galleries and a digital ceremonial space.",
    innovationZh: "融合空间营造与艺术科技手段，形成泰山之“史、礼、文、灵、韵、人、铭、岩、大”九大主题空间，构建和合共生、国泰民安的当代表达。",
    innovationEn: "Spatial design and art technology shape nine themes, translating Mount Tai's cultural and natural legacy into a contemporary expression.",
    impactZh: "作为国家“十四五”文化传承利用工程项目，旨在打造具有国际影响力的文化地标，串联全域文旅资源。",
    impactEn: "A national cultural-heritage project designed as an internationally influential landmark and catalyst for regional cultural tourism.",
    coverImage: "assets/images/works/taishan-museum/cover.jpg",
    galleryImages: ["assets/images/works/taishan-museum/01.jpg", "assets/images/works/taishan-museum/02.jpg"],
  },
  "kizil-grotto": {
    category: "Digital Exhibition",
    locationZh: "新疆克孜尔石窟 / 沉浸体验空间", locationEn: "Kizil Caves, Xinjiang / Immersive Experience",
    summaryZh: "以智能修复、三维建模与沉浸交互重现克孜尔石窟壁画，在数字空间中讲述龟兹文明的交汇与共生。",
    summaryEn: "Intelligent restoration, 3D reconstruction and immersive interaction revive the Kizil murals and the converging cultures of ancient Kucha.",
    overviewZh: "项目围绕克孜尔石窟重点洞窟壁画的数字复原与体验传播展开。以第 38 窟等典型洞窟为对象，构建可进入、可探索的数字石窟环境，并通过“文明交汇·光影龟兹”等影像叙事呈现丝路文明交流、碰撞与共生的历史图景。",
    overviewEn: "Focused on digitally restoring and communicating key Kizil grotto murals, the project reconstructs representative caves including Cave 38 as explorable virtual environments and frames them within the wider story of Silk Road cultural exchange.",
    innovationZh: "融合壁画智能修复、三维建模、Unity 实时引擎、VR/XR 与多感官交互，观众既可在虚拟石窟中近距离观察壁画细节，也可通过空间影像与虚拟角色体验跨越时空的龟兹叙事。",
    innovationEn: "AI-assisted mural restoration, 3D modeling, Unity, VR/XR and multisensory interaction let visitors examine mural details and encounter spatial narratives and virtual characters across time.",
    impactZh: "项目将文物数字保护成果转化为可感知、可参与的公共文化体验，为脆弱石窟壁画的长期保存、研究阐释与公众传播提供新的展示路径。",
    impactEn: "The project translates digital conservation into an accessible public experience, offering a new path for preserving, interpreting and communicating fragile grotto murals.",
    coverImage: "assets/images/works/kizil-grotto/cover.jpg",
    galleryImages: ["assets/images/works/kizil-grotto/01.jpg", "assets/images/works/kizil-grotto/02.jpg"],
  },
  "public-cultural-station": {
    category: "Public Culture",
    locationZh: "中国 · 多场景部署", locationEn: "Multiple locations, China",
    summaryZh: "以模块化、可移动、无人值守的空间产品，打通公共文化服务“最后一公里”。",
    summaryEn: "A modular, movable and unattended cultural-service space extending public culture around the clock.",
    overviewZh: "由文化和旅游部全国公共文化发展中心发起，提供 108、72 与 30 平方米三种配置，包含云展播、旅游导览、书法、影音、舞蹈、钢琴等十余种体验功能。",
    overviewEn: "Initiated by the National Center for Public Cultural Development, the station offers three modular configurations and more than ten cultural-experience functions.",
    innovationZh: "融合 5G、大数据、VR/AR 与公共文化云平台，形成 24 小时零门槛自助服务和可复制推广的智慧运营模式。",
    innovationEn: "It combines 5G, big data, VR/AR and a public-culture cloud platform to deliver a scalable 24-hour self-service model.",
    impactZh: "入选 2024 文化和旅游数字化创新示范优秀案例、全国文化和旅游装备技术提升优秀案例。",
    impactEn: "Selected as a 2024 cultural-tourism digitization innovation case and a national cultural-tourism equipment technology case.",
    awardsZh: ["2024 文化和旅游数字化创新示范优秀案例", "全国文化和旅游装备技术提升优秀案例"],
    awardsEn: ["2024 Cultural-Tourism Digitization Innovation Case", "National Cultural-Tourism Equipment Technology Case"],
    coverImage: "assets/images/works/public-cultural-station/cover.jpg",
    galleryImages: ["assets/images/works/public-cultural-station/01.jpg", "assets/images/works/public-cultural-station/02.jpg"],
  },
  "grand-canal-ich": {
    category: "Heritage",
    locationZh: "扬州，中国", locationEn: "Yangzhou, China",
    summaryZh: "以“河为魂、艺为脉”构建三层六大主题展厅，活态呈现大运河流域非遗。",
    summaryEn: "Three floors and six themes present the living heritage of the Grand Canal through art and technology.",
    overviewZh: "作为大运河国家文化公园重点项目，展馆系统梳理流域代表性非遗项目，将宏观叙事、专题叙事、活态展演与研学体验融合。",
    overviewEn: "A major Grand Canal National Cultural Park project combining regional heritage, thematic narratives, live performance and learning.",
    innovationZh: "运用雕塑、壁画长卷、L 幕数字沙盘、体感交互、知识图谱、沉浸影院与机器人，打造多感沉浸、可玩可学的体验空间。",
    innovationEn: "Sculpture, digital sand tables, motion interaction, knowledge graphs, immersive cinema and robotics create a multisensory learning environment.",
    impactZh: "开创流域性非遗展示新模式，获得 IDA 国际设计奖荣誉奖、中国国际空间设计大赛金银奖等荣誉。",
    impactEn: "A new model for basin-wide intangible-heritage display, recognized by IDA and major Chinese spatial-design awards.",
    awardsZh: ["2024 美国 IDA 国际设计大奖年度荣誉奖", "第十四届中国空间设计大赛展陈空间工程类金奖", "加拿大 GPA 设计大奖文化空间类金奖"],
    awardsEn: ["2024 IDA Honorable Mention", "Gold, 14th China Spatial Design Competition", "GPA Cultural Space Gold Award"],
    coverImage: "assets/images/works/grand-canal-ich/cover.jpg",
    galleryImages: ["assets/images/works/grand-canal-ich/01.jpg", "assets/images/works/grand-canal-ich/02.jpg", "assets/images/works/grand-canal-ich/03.jpg"],
  },
  "jingdezhen-imperial-kiln": {
    category: "Digital Exhibition",
    locationZh: "景德镇，中国", locationEn: "Jingdezhen, China",
    summaryZh: "以极简陈列回应御窑遗址与建筑肌理，并以“全域·跨界·数字共生”延展青花文化体验。",
    summaryEn: "A restrained exhibition integrated with the kiln site and extended through a digitally connected blue-and-white porcelain experience.",
    overviewZh: "基本陈列充分尊重场地与建筑肌理，让文物仿似悬浮于空间；“御窑天下·青花秘境”特展则融合精品陈列、音乐舞蹈、公共艺术与数字影像。",
    overviewEn: "The permanent display lets objects appear to float within the architecture, while the digital special exhibition connects objects, performance, public art and media.",
    innovationZh: "以“全域·跨界·数字共生”为核心，连接遗址、博物馆与社区，并建设景德镇古陶瓷基因库与数字化平台。",
    innovationEn: "The project connects site, museum and community while extending research through a ceramic gene database and digital platform.",
    impactZh: "助力御窑博物馆获评全国最具创新力博物馆；古陶瓷基因库获 2024 文旅数字化创新示范十佳案例。",
    impactEn: "The museum was named one of China's most innovative, while its ceramic database became a top national digitization innovation case.",
    awardsZh: ["2022 年度全国最具创新力博物馆", "2024 文旅数字化创新示范十佳案例", "国家文物局首批文物事业高质量发展案例"],
    awardsEn: ["2022 Most Innovative Museum", "2024 Top Cultural-Tourism Digitization Case", "National Cultural Heritage High-Quality Development Case"],
    coverImage: "assets/images/works/jingdezhen-imperial-kiln/cover.jpg",
    galleryImages: ["assets/images/works/jingdezhen-imperial-kiln/01.jpg", "assets/images/works/jingdezhen-imperial-kiln/02.jpg"],
  },
  "parallel-space-greece": {
    category: "Digital Exhibition",
    locationZh: "雅典 / 线上", locationEn: "Athens / Online",
    summaryZh: "中国首个面向海外的线上文物数字展，让兵马俑与古希腊雕塑展开跨时空对话。",
    summaryEn: "China's first overseas online digital-heritage exhibition creates a dialogue between the Terracotta Warriors and ancient Greece.",
    overviewZh: "项目作为 2021 中希文化和旅游年开幕活动核心展览，由中希两国文物主管部门及博物馆联合打造，总触达观众超过 1.5 亿。",
    overviewEn: "A core exhibition of the 2021 China-Greece Year of Culture and Tourism, jointly developed by heritage authorities and museums, reaching over 150 million viewers.",
    innovationZh: "运用 3D 建模、200 亿像素全景漫游、VR 虚拟复原，设置全景之旅、真彩之美、科技之光三大线上展厅。",
    innovationEn: "3D modeling, a 20-billion-pixel panorama and VR reconstruction shape three online galleries and a cross-civilizational encounter.",
    impactZh: "破解疫情下文物无法出境的交流难题，获得全球世界遗产教育创新卓越之星奖及中华文物全媒体传播精品推介。",
    impactEn: "The project offered a new model for international exchange during the pandemic and received global heritage-education and media honors.",
    awardsZh: ["全球世界遗产教育创新案例奖 · 卓越之星", "2022 年度中华文物全媒体传播精品推介"],
    awardsEn: ["Global World Heritage Education Innovation · Star of Excellence", "2022 Chinese Heritage All-Media Excellence Project"],
    coverImage: "assets/images/works/parallel-space-greece/cover.jpg",
    galleryImages: ["assets/images/works/parallel-space-greece/01.jpg", "assets/images/works/parallel-space-greece/02.jpg"],
  },
  "confucius-museum": {
    category: "Museum",
    locationZh: "曲阜，中国", locationEn: "Qufu, China",
    summaryZh: "以空间、媒体与互动叙事共同构成面向公众的儒学文化体验。",
    summaryEn: "A public-facing Confucian cultural experience shaped through spatial, media and interactive narratives.",
    coverImage: "assets/images/works/confucius-museum/cover.jpg",
    galleryImages: ["assets/images/works/confucius-museum/01.jpg"],
    videoUrl: "assets/videos/works/confucius-museum.mp4",
  },
  "beijing-horticultural-expo": {
    category: "Spatial Media",
    locationZh: "北京，中国", locationEn: "Beijing, China",
    summaryZh: "以序列式沉浸光影空间讲述中国生态文明，构建空间与媒体融合的国家馆叙事。",
    summaryEn: "An immersive sequence of spatial media telling the story of China's ecological civilization.",
    coverImage: "assets/images/works/beijing-horticultural-expo/cover.jpg",
  },
  "yingtianmen-gate": {
    category: "Heritage",
    locationZh: "洛阳，中国", locationEn: "Luoyang, China",
    summaryZh: "以艺术与科技激活大型遗址，从历史废墟转化为城市公共文化目的地。",
    summaryEn: "Art and technology activate a monumental archaeological site as a contemporary public-cultural destination.",
  },
  "han-wei-luoyang": {
    category: "Heritage", locationZh: "洛阳，中国", locationEn: "Luoyang, China",
    summaryZh: "以文物为核心、科技为支撑，呈现汉魏洛阳作为东方世界中心都城与丝路起点的辉煌。",
    summaryEn: "Artifacts and immersive media reveal Han-Wei Luoyang as an eastern capital and Silk Road gateway.",
    overviewZh: "项目是黄河国家文化公园与“十四五”文化保护传承利用工程重点项目，通过 1300 余件文物、复原阐释与沉浸剧场呈现汉魏都城文明。",
    overviewEn: "A major national heritage project presenting Han-Wei capital culture through more than 1,300 artifacts, reconstruction and immersive theater.",
    innovationZh: "提出价值叙事与运营前置理念，构建从城到都到天下的叙事逻辑，实现遗址、建筑、展陈与科技四位一体。",
    innovationEn: "A value-led narrative connects city, capital and world, integrating site, architecture, exhibition and technology.",
    impactZh: "成为全国大遗址保护展示与活化利用标杆，获 IDA 荣誉提名与 APDC 展览类金奖。",
    impactEn: "A benchmark for archaeological-site activation, recognized with an IDA Honorable Mention and APDC Exhibition Gold.",
    awardsZh: ["2025 IDA 国际设计奖荣誉提名", "2025 APDC 亚太设计奖展览类金奖"],
    awardsEn: ["2025 IDA Honorable Mention", "2025 APDC Exhibition Gold"],
    coverImage: "assets/images/works/han-wei-luoyang/cover.jpg",
    galleryImages: ["assets/images/works/han-wei-luoyang/01.jpg", "assets/images/works/han-wei-luoyang/02.jpg", "assets/images/works/han-wei-luoyang/03.jpg"],
  },
};

const CATEGORY_MAP = {
  "非遗馆": "Heritage", "遗址博物馆": "Heritage", "遗址·保护": "Heritage", "非遗中心": "Heritage",
  "遗址·数字": "Digital Exhibition", "数字展厅": "Digital Exhibition", "博物馆": "Museum",
  "博物馆展陈": "Museum", "专题展览": "Museum", "国际展览": "Spatial Media",
  "遗址保护": "Heritage", "科普教育": "Public Culture", "专题馆": "Public Culture",
  "博物馆策划": "Museum", "公共文化服务": "Public Culture", "国际数字展": "Digital Exhibition",
  "文化遗产数字化": "Digital Exhibition",
};

const FEATURED_IDS = new Set([
  "taishan-museum", "kizil-grotto", "han-wei-luoyang", "public-cultural-station",
  "grand-canal-ich", "jingdezhen-imperial-kiln", "parallel-space-greece",
]);
