import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Hero } from './components/Hero';
import './styles.css';
import './hero-psd-calibration.css';
import './profile-four-cards.css';
import './secondary-page-refinement.css';
import './case-module-refinement.css';
import './contact-tail-refinement.css';

const assets = {
  domesticMainOne: new URL('../主图/内贸/BQG隔膜泵.webp', import.meta.url).href,
  domesticMainTwo: new URL('../主图/内贸/BQG隔膜泵2.webp', import.meta.url).href,
  domesticMainThree: new URL('../主图/内贸/BQG隔膜泵3.webp', import.meta.url).href,
  domesticMainFour: new URL('../主图/内贸/BQS排污水电泵.webp', import.meta.url).href,
  domesticMainFive: new URL('../主图/内贸/BQS排污水电泵2.webp', import.meta.url).href,
  domesticMainSix: new URL('../主图/内贸/6.webp', import.meta.url).href,
  domesticMainSeven: new URL('../主图/内贸/7.webp', import.meta.url).href,
  domesticMainEight: new URL('../主图/内贸/8.webp', import.meta.url).href,
  domesticMainNine: new URL('../主图/内贸/9.webp', import.meta.url).href,
  domesticMainTen: new URL('../主图/内贸/10.webp', import.meta.url).href,
  domesticMainEleven: new URL('../主图/内贸/11.webp', import.meta.url).href,
  domesticMainTwelve: new URL('../主图/内贸/12.webp', import.meta.url).href,
  internationalMainOne: new URL('../主图/外贸/1.webp', import.meta.url).href,
  internationalMainTwo: new URL('../主图/外贸/2.webp', import.meta.url).href,
  internationalMainThree: new URL('../主图/外贸/3.webp', import.meta.url).href,
  internationalMainFour: new URL('../主图/外贸/4.webp', import.meta.url).href,
  internationalMainFive: new URL('../主图/外贸/5.webp', import.meta.url).href,
  internationalMainSix: new URL('../主图/外贸/6.webp', import.meta.url).href,
  internationalMainSeven: new URL('../主图/外贸/7.webp', import.meta.url).href,
  internationalMainEight: new URL('../主图/外贸/8.webp', import.meta.url).href,
  internationalMainNine: new URL('../主图/外贸/9.webp', import.meta.url).href,
  internationalMainTen: new URL('../主图/外贸/10.webp', import.meta.url).href,
  internationalMainEleven: new URL('../主图/外贸/11.webp', import.meta.url).href,
  internationalMainTwelve: new URL('../主图/外贸/12.webp', import.meta.url).href,
  btMiniExcavator: new URL('../国际站详情页/邦泰-12小挖.webp', import.meta.url).href,
  btTenMiniExcavator: new URL('../国际站详情页/邦泰-10小挖.webp', import.meta.url).href,
  aonesDrillOne: new URL('../国际站详情页/奥内斯-水井钻机1.webp', import.meta.url).href,
  aonesDrillTwo: new URL('../国际站详情页/奥内斯-水井钻机2.webp', import.meta.url).href,
  aonesBoreholeCamera: new URL('../国际站详情页/奥内斯-井下电视.webp', import.meta.url).href,
  noliForkliftDetail: new URL('../国际站详情页/诺力-叉车.webp', import.meta.url).href,
  amazonTableSkirt: new URL('../国际站详情页/Amazon桌裙.webp', import.meta.url).href,
  noliHome: new URL('../店铺首页/诺力叉车.webp', import.meta.url).href,
  jinshengyuanHome: new URL('../店铺首页/金盛源矿山设备.webp', import.meta.url).href,
  zhongseHome: new URL('../店铺首页/中隧安防集团.webp', import.meta.url).href,
  waterPump: new URL('../内贸详情页/邦泰-水泵.webp', import.meta.url).href,
  haisien: new URL('../内贸详情页/海思恩-益生菌.webp', import.meta.url).href,
  driedBeef: new URL('../内贸详情页/牧香记-牛肉干.webp', import.meta.url).href,
  epicoGlucan: new URL('../内贸详情页/海思恩-爱彼可+葡聚糖.webp', import.meta.url).href,
  lactoferrin: new URL('../内贸详情页/海思恩-乳铁蛋白.webp', import.meta.url).href,
  lactoferrinEpico: new URL('../内贸详情页/海思恩-乳铁蛋白+爱彼可.webp', import.meta.url).href,
  organicOats: new URL('../内贸详情页/有机燕麦片.webp', import.meta.url).href,
  caseCoverOne: new URL('../精选案例封面/01.webp', import.meta.url).href,
  caseCoverTwo: new URL('../精选案例封面/02.webp', import.meta.url).href,
  caseCoverThree: new URL('../精选案例封面/03.webp', import.meta.url).href,
  caseCoverFour: new URL('../精选案例封面/04.webp', import.meta.url).href,
  zhaoluWebsite: new URL('../网站预览/赵鲁机械独立站.webp', import.meta.url).href,
  bangtaiWebsite: new URL('../网站预览/邦泰机电官网.webp', import.meta.url).href,
  heroPerson: new URL('../网站排版素材/人像.webp', import.meta.url).href,
  heroPortrait: new URL('../个人照片/hero-portrait-cutout.webp', import.meta.url).href,
  heroTitle: new URL('../网站排版素材/标题.webp', import.meta.url).href,
  heroIntroCard: new URL('../网站排版素材/简介标签.webp', import.meta.url).href,
  heroIntroTag: new URL('../网站排版素材/指向简洁标签.webp', import.meta.url).href,
  heroProjectCard: new URL('../网站排版素材/小案例标签.webp', import.meta.url).href,
  heroProjectTag: new URL('../网站排版素材/指向案例标签.webp', import.meta.url).href,
  heroMenuCard: new URL('../网站排版素材/导航标签.webp', import.meta.url).href,
  heroMenuTag: new URL('../网站排版素材/指向导航标签.webp', import.meta.url).href,
  heroCamera: new URL('../网站排版素材/相机.webp', import.meta.url).href,
  heroCameraTag: new URL('../网站排版素材/相机标签.webp', import.meta.url).href,
  wechatQr: new URL('../个人微信二维码.webp', import.meta.url).href,
  cameraSticker: new URL('../ai/camera-sticker.webp', import.meta.url).href,
};

const profile = {
  name: '电商视觉设计师',
  role: 'E-commerce Visual Designer / AI-assisted Designer',
  phone: '19905473928',
  email: '19905473928@163.com',
  location: '山东省济宁市',
};

const stats = [
  { value: '25+', label: '新品全案设计' },
  { value: '20+', label: '新品首月销量突破' },
  { value: '1688 / 淘宝', label: '平台视觉升级经验' },
  { value: 'PS / AI / C4D', label: '核心设计工具' },
];

const projects = [
  {
    title: '内贸主图 01',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainOne,
  },
  {
    title: '内贸主图 02',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainTwo,
  },
  {
    title: '内贸主图 03',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainThree,
  },
  {
    title: '内贸主图 04',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainFour,
  },
  {
    title: '内贸主图 05',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainFive,
  },
  {
    title: '内贸主图 06',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainSix,
  },
  {
    title: '内贸主图 07',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainSeven,
  },
  {
    title: '内贸主图 08',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainEight,
  },
  {
    title: '内贸主图 09',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainNine,
  },
  {
    title: '内贸主图 10',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainTen,
  },
  {
    title: '内贸主图 11',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainEleven,
  },
  {
    title: '内贸主图 12',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'domestic',
    image: assets.domesticMainTwelve,
  },
  {
    title: '外贸主图 01',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainOne,
  },
  {
    title: '外贸主图 02',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainTwo,
  },
  {
    title: '外贸主图 03',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainThree,
  },
  {
    title: '外贸主图 04',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainFour,
  },
  {
    title: '外贸主图 05',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainFive,
  },
  {
    title: '外贸主图 06',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainSix,
  },
  {
    title: '外贸主图 07',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainSeven,
  },
  {
    title: '外贸主图 08',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainEight,
  },
  {
    title: '外贸主图 09',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainNine,
  },
  {
    title: '外贸主图 10',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainTen,
  },
  {
    title: '外贸主图 11',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainEleven,
  },
  {
    title: '外贸主图 12',
    type: '产品主图设计',
    moduleId: 'product-main-image',
    market: 'international',
    image: assets.internationalMainTwelve,
  },
  {
    title: '邦泰小挖国际站详情页',
    type: '国际站视觉设计',
    moduleId: 'international-visual',
    platform: '国际站',
    image: assets.btMiniExcavator,
    tone: '工业设备',
    summary: '围绕小型挖掘机的产品卖点、应用场景、参数信息和采购信任点，搭建完整长图转化链路。',
    tags: ['卖点梳理', '长图排版', '工业品视觉'],
  },
  {
    title: '奥内斯水井钻机详情页 01',
    type: '国际站视觉设计',
    moduleId: 'international-visual',
    platform: '国际站',
    image: assets.aonesDrillOne,
    tone: '机械设备',
    summary: '以产品结构、适用地形和施工效率为核心，强化设备专业度和海外采购场景的信息表达。',
    tags: ['设备精修', '参数表达', '场景合成'],
  },
  {
    title: '奥内斯水井钻机详情页 02',
    type: '国际站视觉设计',
    moduleId: 'international-visual',
    platform: '国际站',
    image: assets.aonesDrillTwo,
    tone: 'B2B转化',
    summary: '延续品牌视觉语气，提升页面节奏，让核心卖点、产品细节和服务保障更容易被采购方快速扫描。',
    tags: ['页面节奏', '信息层级', '品牌统一'],
  },
  {
    title: '邦泰 10 型小挖详情页',
    type: '国际站视觉设计',
    moduleId: 'international-visual',
    platform: '国际站',
    image: assets.btTenMiniExcavator,
    tone: '工程机械',
    summary: '围绕紧凑机身、施工场景与核心配置建立详情页节奏，帮助海外采购方更快识别产品价值。',
    tags: ['工程机械', '卖点提炼', '详情页'],
  },
  {
    title: '诺力叉车详情页',
    type: '国际站视觉设计',
    moduleId: 'international-visual',
    platform: '国际站',
    image: assets.noliForkliftDetail,
    tone: '物流设备',
    summary: '以承载能力、操作场景与产品系列为线索，整理适合海外客户浏览的叉车产品信息与视觉重点。',
    tags: ['叉车视觉', '产品系列', '采购信任'],
  },
  {
    title: '奥内斯井下电视详情页',
    type: '国际站视觉设计',
    moduleId: 'international-visual',
    platform: '国际站',
    image: assets.aonesBoreholeCamera,
    tone: '检测设备',
    summary: '围绕井下检测场景、设备结构与使用方式，建立更清晰的工业检测设备详情页信息表达。',
    tags: ['检测设备', '场景表达', '信息层级'],
  },
  {
    title: 'Amazon 桌裙详情页',
    type: '国际站视觉设计',
    moduleId: 'international-visual',
    platform: 'Amazon',
    image: assets.amazonTableSkirt,
    tone: '跨境电商',
    summary: '围绕跨境电商产品卖点、规格信息与应用场景，完成更适合海外零售客户浏览的详情页表达。',
    tags: ['Amazon', '跨境电商', '详情页'],
  },
  {
    title: '诺力叉车国际站首页',
    type: '店铺首页设计',
    moduleId: 'store-homepage',
    platform: '国际站',
    image: assets.noliHome,
    tone: '店铺首页',
    summary: '面向海外买家重构店铺首屏、品类导航和产品矩阵，突出品牌实力与核心产品线。',
    tags: ['首页重构', '品类规划', 'B端店铺'],
  },
  {
    title: '金盛源矿山设备首页',
    type: '店铺首页设计',
    moduleId: 'store-homepage',
    platform: '内贸阿里',
    image: assets.jinshengyuanHome,
    tone: '矿山设备',
    summary: '为矿山设备类目建立高信任感首页，结合产品分类、实力展示和采购入口提升页面承接力。',
    tags: ['1688首页', '工业风格', '产品矩阵'],
  },
  {
    title: '中隧安防集团首页',
    type: '店铺首页设计',
    moduleId: 'store-homepage',
    platform: '内贸阿里',
    image: assets.zhongseHome,
    tone: '安防行业',
    summary: '以企业资质、产品系列和工程应用为主线，形成更适合B端客户浏览的店铺视觉结构。',
    tags: ['企业形象', '类目导航', '页面设计'],
  },
  {
    title: '水泵组合详情页',
    type: '内贸电商详情设计',
    moduleId: 'domestic-detail',
    platform: '内贸电商',
    image: assets.waterPump,
    tone: '组合产品',
    summary: '通过组合卖点、应用场景和细节说明，帮助用户快速理解产品规格与购买理由。',
    tags: ['产品组合', '电商长图', '主图延展'],
  },
  {
    title: '海思恩益生菌详情页',
    type: '内贸电商详情设计',
    moduleId: 'domestic-detail',
    platform: '内贸电商',
    image: assets.haisien,
    tone: '消费品',
    summary: '结合健康食品的信任表达与促销节奏，完成更具消费感的详情页设计。',
    tags: ['消费品视觉', '活动感', '详情页'],
  },
  {
    title: '牧香记牛肉干详情页',
    type: '内贸电商详情设计',
    moduleId: 'domestic-detail',
    platform: '内贸电商',
    image: assets.driedBeef,
    tone: '食品电商',
    summary: '围绕产品口感、食材卖点和购买场景，完成适合电商浏览节奏的详情页视觉表达。',
    tags: ['食品视觉', '卖点梳理', '详情页'],
  },
  {
    title: '海思恩爱彼可+葡聚糖详情页',
    type: '内贸电商详情设计',
    moduleId: 'domestic-detail',
    platform: '内贸电商',
    image: assets.epicoGlucan,
    tone: '营养健康',
    summary: '梳理复配营养成分与使用价值，建立清晰、可信的健康食品详情页信息层级。',
    tags: ['成分表达', '健康食品', '详情页'],
  },
  {
    title: '海思恩乳铁蛋白详情页',
    type: '内贸电商详情设计',
    moduleId: 'domestic-detail',
    platform: '内贸电商',
    image: assets.lactoferrin,
    tone: '营养健康',
    summary: '以产品成分、适用人群与使用场景为主线，完成营养品详情页的视觉信息组织。',
    tags: ['成分表达', '消费品视觉', '详情页'],
  },
  {
    title: '海思恩乳铁蛋白+爱彼可详情页',
    type: '内贸电商详情设计',
    moduleId: 'domestic-detail',
    platform: '内贸电商',
    image: assets.lactoferrinEpico,
    tone: '组合营养',
    summary: '突出组合配方与核心营养价值，建立更易浏览和理解的电商详情页节奏。',
    tags: ['组合产品', '信息层级', '详情页'],
  },
  {
    title: '有机燕麦片详情页',
    type: '内贸电商详情设计',
    moduleId: 'domestic-detail',
    platform: '内贸电商',
    image: assets.organicOats,
    tone: '食品电商',
    summary: '围绕原料、口感和食用方式展开页面叙事，强化食品类商品的购买信任。',
    tags: ['食品视觉', '场景表达', '详情页'],
  },
];

const caseModules = [
  {
    id: 'product-main-image',
    number: '01',
    title: '产品主图设计',
    subtitle: '淘宝 / 1688 / Alibaba 主图',
    text: '用于承接产品搜索、店铺入口和平台推荐场景，重点展示主体精修、卖点表达、点击效率和系列化延展。',
    cover: assets.caseCoverOne,
  },
  {
    id: 'domestic-detail',
    number: '02',
    title: '内贸电商详情设计',
    subtitle: '淘宝 / 1688 长详情页',
    text: '围绕国内电商转化链路，展示产品卖点、应用场景、参数说明、信任背书和长图页面节奏。',
    cover: assets.caseCoverTwo,
  },
  {
    id: 'international-visual',
    number: '03',
    title: '国际站视觉设计',
    subtitle: 'Alibaba 首页、详情页、营销视觉',
    text: '面向海外B端采购者，强调产品专业度、工厂实力、采购信任感和跨语言信息层级。',
    cover: assets.caseCoverThree,
  },
  {
    id: 'store-homepage',
    number: '04',
    title: '店铺首页设计',
    subtitle: 'Alibaba店铺首页',
    text: '展示店铺首屏、品类导航、产品矩阵、品牌实力和营销入口，适合呈现完整店铺视觉框架。',
    cover: assets.caseCoverFour,
  },
];

const websiteProjects = [
  {
    number: '01',
    title: '海外独立站视觉',
    client: 'ZHAOLU MACHINERY',
    type: 'Google 独立站',
    url: 'https://zhaolumach.com',
    domain: 'zhaolumach.com',
    image: assets.zhaoluWebsite,
    summary: '负责站内产品图片、首页视觉与页面配图制作，围绕海外工业设备采购场景建立统一的品牌视觉表达。',
    tags: ['产品图片制作', '首页视觉', '海外站点'],
  },
  {
    number: '02',
    title: '国内独立站视觉',
    client: 'SHANDONG BANGTAI',
    type: '国内企业官网',
    url: 'http://www.sdbtjdsb.com/',
    domain: 'www.sdbtjdsb.com',
    image: assets.bangtaiWebsite,
    summary: '负责站内产品视觉、Banner与页面图片制作，将机械设备信息整理为适合官网浏览与询盘转化的视觉内容。',
    tags: ['官网视觉', 'Banner 制作', '产品页面'],
  },
];

const skills = [
  {
    title: '电商页面设计',
    text: '熟悉1688、淘宝、微店等平台的首页、主图、详情页和活动页设计逻辑，能从卖点梳理推进到页面交付。',
  },
  {
    title: '工业品视觉表达',
    text: '有矿山设备、水井钻机、叉车等工业品项目经验，能把参数、场景和采购信任点转译成清晰的页面内容。',
  },
  {
    title: 'AI辅助创意生产',
    text: '使用AI进行构图、风格探索和素材生成，再结合Photoshop、Illustrator、C4D完成商业落地。',
  },
  {
    title: '跨团队沟通',
    text: '能对接销售、生产、运营和产品团队，整理客户痛点、品牌调性和上线节奏，降低反复修改成本。',
  },
];

const timeline = [
  {
    time: '2025.04 - 至今',
    title: '山东邦泰机电设备有限公司 · 美工设计 / 电商视觉主管',
    body: '主导1688、淘宝等平台店铺视觉升级，负责矿山设备、水井钻机等产品拍摄、精修、主图、首页和详情页设计；建立产品素材库和品牌视觉规范，累计完成25+款新品全案设计。',
  },
  {
    time: '2024.06 - 2024.12',
    title: '山东捷创网络科技有限公司 · 平面设计实习生',
    body: '参与电商平台页面、店铺首页轮播图、活动页和产品图处理，负责客户沟通、改稿提交和页面视觉执行。',
  },
  {
    time: '2024.10',
    title: '宁波海思恩店铺运营 · 设计专员',
    body: '进行竞品调研、店铺首页方案、导航栏、轮播图和活动区域设计，帮助品牌快速传达产品信息。',
  },
  {
    time: '2021.10',
    title: '咖啡青年秋日市集 · 视觉物料组员',
    body: '参与招牌、海报、指引牌等线下视觉物料设计，并协助优化市集场地动线与沉浸式氛围。',
  },
];

function App() {
  const selectedModuleId = new URLSearchParams(window.location.search).get('work');
  const selectedModule = caseModules.find((module) => module.id === selectedModuleId);

  if (selectedModule) {
    return <WorkCategory module={selectedModule} />;
  }

  return (
    <main>
      <Hero assets={assets} profile={profile} stats={stats} />
      <Profile />
      <Projects />
      <WebsiteProjects />
      <Capabilities />
      <Contact />
    </main>
  );
}

function Profile() {
  return (
    <section className="section profile" id="profile">
      <div className="shell profileStage">
        <div className="profileHeading">
          <p className="profileLabel">ABOUT ME</p>
          <h2>把设计变成<br />被看见的价值。</h2>
          <p className="profileSummary">以电商页面为媒介，连接产品卖点、采购信任与品牌表达，让复杂信息更清楚，也更容易转化。</p>
        </div>

        <div className="profileNotes">
          <article><span>01</span><p>视觉传达设计专业背景，具备平面、包装、品牌、三维与电商页面设计的综合基础。</p></article>
          <article><span>02</span><p>长期服务机械设备与工业品项目，从产品拍摄、精修、主图到详情页，建立完整的视觉表达链路。</p></article>
          <article><span>03</span><p>结合AI探索、竞品分析与卖点梳理，兼顾创意效率、信息层级与真实的商业落地。</p></article>
        </div>

        <div className="profileVisual" aria-label="个人照片">
          <span className="profileBlock profileBlockTop" aria-hidden="true" />
          <span className="profileBlock profileBlockBottom" aria-hidden="true" />
          <div className="profilePortrait">
            <img src={assets.heroPortrait} alt="电商视觉设计师本人" />
          </div>
        </div>

        <div className="profileMetrics" aria-label="专业能力概览">
          <article className="profileMetric profileMetricDark">
            <strong>1688 / 淘宝</strong>
            <span>店铺视觉升级经验</span>
          </article>
          <article className="profileMetric profileMetricLight">
            <strong>主图 · 详情 · 首页</strong>
            <span>电商页面全链路设计</span>
          </article>
          <article className="profileMetric profileMetricLight">
            <strong>工业品 / 消费品</strong>
            <span>多行业电商视觉经验</span>
          </article>
          <article className="profileMetric profileMetricDark">
            <strong>PS / AI / C4D</strong>
            <span>核心设计工具</span>
          </article>
        </div>

        <div className="profileHistory">
          <div className="profileEducation">
            <p>EDUCATION</p>
            <span>2023.09 - 2025.07 · 潍坊理工学院 · 视觉传达设计（本科）</span>
            <span>2018.09 - 2022.07 · 山东理工职业学院 · 视觉传达设计（专科）</span>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timelineItem" key={`${item.time}-${item.title}`}>
                <time>{item.time}</time>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <div className="projectsIntro">
          <h2>精选案例</h2>
          <p>
            以四个方向概览作品能力，点击进入对应分类后查看完整案例。
          </p>
        </div>
        <div className="caseModuleGrid" aria-label="案例模块">
          {caseModules.map((module) => (
            <a className="caseModuleCard" href={`?work=${module.id}`} key={module.id}>
              <img src={module.cover} alt="" loading="lazy" />
              <span className="caseModuleShade" aria-hidden="true" />
              <div className="caseModuleContent">
                <div className="caseModuleIndex">
                  <span>{module.number}</span>
                  <span className="caseModuleStaticTitle">{module.title}</span>
                </div>
                <h3>{module.title}</h3>
                <p className="caseSubtitle">{module.subtitle}</p>
                <span className="caseModuleArrow" aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteProjects() {
  return (
    <section className="section websiteProjects" id="websites">
      <div className="shell">
        <div className="websiteIntro">
          <h2>独立站视觉项目</h2>
          <p>
            不止完成单个页面，也参与独立站内产品图片、首屏Banner与整站视觉内容的持续制作。
          </p>
        </div>

        <div className="websiteProjectGrid">
          {websiteProjects.map((project) => (
            <a className="websiteProjectCard" href={project.url} target="_blank" rel="noreferrer" key={project.title}>
              <div className="sitePreview">
                <img src={project.image} alt={`${project.title}预览`} loading="lazy" />
              </div>
              <div className="websiteProjectMeta">
                <p className="siteType">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="siteClient">{project.client}</p>
                <p className="siteSummary">{project.summary}</p>
                <span className="visitSite">访问网站 ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCategory({ module }) {
  const projectOrder = {
    'international-visual': [
      '邦泰 10 型小挖详情页',
      '邦泰小挖国际站详情页',
      '奥内斯井下电视详情页',
      '奥内斯水井钻机详情页 01',
      '奥内斯水井钻机详情页 02',
      '诺力叉车详情页',
      'Amazon 桌裙详情页',
    ],
    'domestic-detail': [
      '水泵组合详情页',
      '海思恩益生菌详情页',
      '牧香记牛肉干详情页',
      '有机燕麦片详情页',
      '海思恩爱彼可+葡聚糖详情页',
      '海思恩乳铁蛋白详情页',
      '海思恩乳铁蛋白+爱彼可详情页',
    ],
  };
  const moduleProjects = projects
    .filter((project) => project.moduleId === module.id)
    .sort((left, right) => {
      const order = projectOrder[module.id];
      if (!order) return 0;
      return order.indexOf(left.title) - order.indexOf(right.title);
    });
  const isMainImageModule = module.id === 'product-main-image';
  const domesticMainProjects = moduleProjects.filter((project) => project.market === 'domestic');
  const internationalMainProjects = moduleProjects.filter((project) => project.market === 'international');
  const returnToPreviousView = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.assign('./');
  };

  return (
    <main className="workPage">
      <nav className="workNav shell" aria-label="作品页面导航">
        <a className="brand" href="./">
          <strong>Portfolio</strong>
          <span>ECOMMERCE / AI DESIGN</span>
        </a>
        <button className="backHome" type="button" onClick={returnToPreviousView}><span className="backHomeArrow" aria-hidden="true">←</span>返回</button>
      </nav>

      <section className="workHeading shell">
        <div className="workHeadingTitle">
          <h1>{module.title}</h1>
          <span>SELECTED WORKS</span>
        </div>
        <p className="workHeadingDescription">{module.subtitle}</p>
        <a className="workHeadingScroll" href="#work-content" aria-label="向下查看案例">↓</a>
      </section>

      {isMainImageModule ? (
        <div className="mainImageGroups shell" id="work-content">
          <section className="mainImageGroup" aria-label="内贸主图">
            <div className="mainImageGroupHead">
              <h2>内贸主图</h2>
            </div>
            <div className="workGallery mainImageGallery">
              {domesticMainProjects.map((project) => (
                <a className="workImage squareWorkImage" href={project.image} target="_blank" rel="noreferrer" key={project.title}>
                  <img src={project.image} alt={project.title} />
                </a>
              ))}
            </div>
          </section>
          <section className="mainImageGroup" aria-label="外贸主图">
            <div className="mainImageGroupHead">
              <h2>外贸主图</h2>
            </div>
            <div className="workGallery mainImageGallery">
              {internationalMainProjects.map((project) => (
                <a className="workImage squareWorkImage" href={project.image} target="_blank" rel="noreferrer" key={project.title}>
                  <img src={project.image} alt={project.title} />
                </a>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <section className="workGallery shell" id="work-content" aria-label={module.title}>
          {moduleProjects.length ? (
          moduleProjects.map((project) => (
            <article className="workCard" key={project.title}>
              <a className="workImage" href={project.image} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
              <div className="workMeta">
                <div className="projectLabel">
                  <span>{project.platform}</span>
                  <span>{project.tone}</span>
                </div>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="tagList">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="emptyWork">该分类的作品正在整理中。</p>
        )}
        </section>
      )}
    </main>
  );
}

function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="shell">
        <div className="capabilitiesIntro">
          <p className="capabilityLabel">WORKING METHOD</p>
          <h2>做设计，也理解页面要解决什么。</h2>
        </div>
        <p className="capabilityLead">从卖点梳理到最终交付，保持视觉、信息和转化节奏的一致。</p>
        <div className="capabilityList">
          {skills.map((item, index) => (
            <article className="capabilityCard" key={item.title}>
              <span className="capabilityIndex">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="toolStrip" aria-label="工具技能">
          {['Photoshop', 'Illustrator', 'C4D', 'Blender', 'Word', 'Excel', 'PowerPoint', 'AI Workflow'].map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(profile.phone);
    } catch {
      const temporaryInput = document.createElement('input');
      temporaryInput.value = profile.phone;
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand('copy');
      temporaryInput.remove();
    }
    setPhoneCopied(true);
    window.setTimeout(() => setPhoneCopied(false), 1800);
  };

  return (
    <section className="contactSection" id="contact">
      <div className="shell contactFrame">
        <div className="contactTopline">
          <p>期待与您合作</p>
          <span>E-COMMERCE VISUAL DESIGN</span>
        </div>
        <div className="contactMain">
          <div className="contactCopy">
            <h2>让下一个产品页面，<br />成为更好的第一印象<span>。</span></h2>
            <button className="contactPhone" type="button" onClick={copyPhone}>
              <span>{phoneCopied ? '已复制到剪贴板' : '电话咨询 / 点击复制'}</span>
              <strong>{profile.phone}</strong>
            </button>
            <p>欢迎电话沟通 / 微信咨询</p>
          </div>
          <aside className="contactQr" aria-label="微信二维码">
            <div className="contactQrFrame"><img src={assets.wechatQr} alt="添加微信二维码" loading="eager" /></div>
            <h3>微信二维码</h3>
            <p>扫码添加微信</p>
          </aside>
        </div>
        <div className="contactFoot">
          <div className="contactDetails">
            <div><strong>职业</strong><span>{profile.name}</span></div>
            <div><strong>地点</strong><span>{profile.location}</span></div>
            <div><strong>邮箱</strong><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          </div>
          <a className="backTop" href="#top">回到顶部 ↑</a>
        </div>
        <p className="contactCopyright">© 2026 个人作品集　保留所有权利</p>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
