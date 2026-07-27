import { useEffect, useRef, useState } from 'react';

export const HERO_DESIGN_SIZE = Object.freeze({ width: 2048, height: 1280 });

function useHeroScale() {
  const stageRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const updateScale = () => {
      const width = stage.clientWidth;
      setIsMobile(width < 768);
      setScale(Math.min(width / HERO_DESIGN_SIZE.width, 1));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return { stageRef, scale, isMobile };
}

export function Hero({ assets, profile, stats }) {
  const { stageRef, scale, isMobile } = useHeroScale();

  return (
    <section
      className={isMobile ? 'heroStage heroStageMobile' : 'heroStage'}
      id="top"
      ref={stageRef}
    >
      {isMobile ? <MobileHero assets={assets} profile={profile} stats={stats} /> : <DesktopHeroCanvas assets={assets} profile={profile} stats={stats} scale={scale} />}
    </section>
  );
}

function DesktopHeroCanvas({ assets, profile, stats, scale }) {
  return (
    <div className="heroCanvasFrame">
      <div className="heroCanvas" style={{ transform: `scale(${scale})` }}>
        <HeroBackground />
        <HeroNavigation email={profile.email} />
        <HeroLargeTitle src={assets.heroTitle} />
        <HeroPerson src={assets.heroPerson} />
        <HeroIntroCard src={assets.heroIntroCard} tagSrc={assets.heroIntroTag} />
        <HeroProjectPreviewCard src={assets.heroProjectCard} tagSrc={assets.heroProjectTag} />
        <HeroMenuCard src={assets.heroMenuCard} tagSrc={assets.heroMenuTag} />
        <HeroStatsCard stats={stats.slice(0, 2)} />
        <HeroCameraDecoration src={assets.heroCamera} tagSrc={assets.heroCameraTag} />
      </div>
    </div>
  );
}

function MobileHero({ assets, profile, stats }) {
  return (
    <div className="mobileHero">
      <nav className="mobileHeroNav" aria-label="主导航">
        <a href="#top" className="mobileHeroBrand"><strong>Portfolio</strong><span>ECOMMERCE / AI DESIGN</span></a>
        <a href={`mailto:${profile.email}`}>联系我</a>
      </nav>
      <p className="mobileHeroTitle" aria-hidden="true">PORTFOLIO</p>
      <img className="mobileHeroPerson" src={assets.heroPerson} alt="电商视觉设计师本人" />
      <article className="mobileHeroIntro">
        <h1>为产品建立<br />更清晰的视觉体验。</h1>
        <p>电商主图、详情页与店铺视觉设计。</p>
        <a href="#projects">查看作品 →</a>
      </article>
      <div className="mobileHeroStats" aria-label="项目数据">
        {stats.slice(0, 2).map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div>
    </div>
  );
}

export function HeroBackground() {
  return <div className="heroLayer heroBackground" aria-hidden="true" />;
}

export function HeroNavigation({ email }) {
  return (
    <nav className="heroLayer heroNavigation" aria-label="主导航">
      <a className="heroBrand" href="#top"><strong>Portfolio</strong><span>ECOMMERCE / AI DESIGN</span></a>
      <div className="heroNavLinks">
        <a href="#top">首页</a>
        <a href="#projects">作品</a>
        <a href="#capabilities">能力</a>
        <a href="#profile">关于我</a>
      </div>
      <a className="heroContactButton" href={`mailto:${email}`}>联系我</a>
    </nav>
  );
}

export function HeroLargeTitle({ src }) {
  return <img className="heroLayer heroLargeTitle" src={src} alt="" aria-hidden="true" />;
}

export function HeroPerson({ src }) {
  return <img className="heroLayer heroPerson" src={src} alt="电商视觉设计师本人" />;
}

export function HeroIntroCard({ src, tagSrc }) {
  return (
    <article className="heroLayer heroIntroCard">
      <a href="#projects" aria-label="查看作品"><img src={src} alt="为产品建立更清晰的视觉体验" /></a>
      <img className="heroCardTag heroIntroTag" src={tagSrc} alt="" aria-hidden="true" />
    </article>
  );
}

export function HeroProjectPreviewCard({ src, tagSrc }) {
  return (
    <figure className="heroLayer heroProjectPreviewCard">
      <a href="#websites" aria-label="查看独立站视觉案例"><img src={src} alt="海外独立站视觉案例" /></a>
      <img className="heroCardTag heroProjectTag" src={tagSrc} alt="" aria-hidden="true" />
    </figure>
  );
}

export function HeroMenuCard({ src, tagSrc }) {
  const links = [
    ['01', '个人简历', '#profile'],
    ['02', '作品案例', '#projects'],
    ['03', '独立站视觉', '#websites'],
    ['04', '联系合作', '#contact'],
  ];

  return (
    <nav className="heroLayer heroMenuCard" aria-label="首屏快捷导航">
      <img src={src} alt="个人简历、作品案例、独立站视觉、联系合作" />
      <div className="heroMenuHitAreas">
        {links.map(([index, label, href]) => <a key={href} href={href}>{label}</a>)}
      </div>
      <img className="heroCardTag heroMenuTag" src={tagSrc} alt="" aria-hidden="true" />
    </nav>
  );
}

export function HeroStatsCard({ stats }) {
  return (
    <div className="heroLayer heroStatsCard" aria-label="项目数据">
      {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
    </div>
  );
}

export function HeroCameraDecoration({ src, tagSrc }) {
  return (
    <div className="heroLayer heroCameraDecoration" aria-hidden="true">
      <img className="heroCameraTag" src={tagSrc} alt="" />
      <img className="heroCamera" src={src} alt="" />
    </div>
  );
}
