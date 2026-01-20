module.exports = class {
  data() {
    return {
      pagination: {
        data: "languages",
        size: 1,
        alias: "lang"
      },
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    const { lang, i18n } = data;
    const otherLang = lang === "es" ? "en" : "es";
    const otherLangUrl = lang === "es" ? "/en/" : "/";
    
    return `
<!-- NAVBAR -->
<nav class="navbar" id="navbar">
    <div class="container navbar-container">
        <a href="${lang === 'es' ? '/' : '/en/'}" class="navbar-logo">
            <img src="/images/logo.webp" alt="Indalturf - Artificial Grass Professionals">
        </a>
        
        <ul class="navbar-nav">
            <li><a href="#about" class="navbar-link">${i18n.nav.about}</a></li>
            <li><a href="#surfaces" class="navbar-link">${i18n.nav.surfaces}</a></li>
            <li><a href="#why-us" class="navbar-link">${i18n.nav.whyUs}</a></li>
            <li><a href="#models" class="navbar-link">${i18n.nav.models}</a></li>
            <li><a href="#faq" class="navbar-link">${i18n.nav.faq}</a></li>
        </ul>
        
        <div class="navbar-actions">
            <div class="lang-switcher">
                <a href="/" class="lang-btn ${lang === 'es' ? 'active' : ''}" aria-label="Español">
                    <span class="flag-icon">🇪🇸</span>
                    <span class="lang-code">ES</span>
                </a>
                <a href="/en/" class="lang-btn ${lang === 'en' ? 'active' : ''}" aria-label="English">
                    <span class="flag-icon">🇬🇧</span>
                    <span class="lang-code">EN</span>
                </a>
            </div>
            <a href="#contact" class="btn btn-primary navbar-cta">
                ${i18n.nav.getQuote}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </a>
            <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobileMenu">
    <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="24" height="24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
    <nav class="mobile-menu-nav">
        <a href="#about" class="mobile-menu-link">${i18n.nav.about}</a>
        <a href="#surfaces" class="mobile-menu-link">${i18n.nav.surfaces}</a>
        <a href="#why-us" class="mobile-menu-link">${i18n.nav.whyUs}</a>
        <a href="#models" class="mobile-menu-link">${i18n.nav.models}</a>
        <a href="#faq" class="mobile-menu-link">${i18n.nav.faq}</a>
        
        <div class="mobile-lang-switcher">
            <a href="/" class="lang-btn ${lang === 'es' ? 'active' : ''}" aria-label="Español">
                <span class="flag-icon">🇪🇸</span>
                <span class="lang-code">ES</span>
            </a>
            <a href="/en/" class="lang-btn ${lang === 'en' ? 'active' : ''}" aria-label="English">
                <span class="flag-icon">🇬🇧</span>
                <span class="lang-code">EN</span>
            </a>
        </div>
        
        <a href="#contact" class="btn btn-primary btn-lg w-full" style="margin-top: 1rem;">${i18n.nav.getQuote}</a>
    </nav>
</div>

<!-- SCROLL PROGRESS -->
<div class="scroll-progress" id="scrollProgress"></div>

<!-- HERO SECTION -->
<section class="hero">
    <!-- Decorative Elements -->
    <span class="hero-decoration hero-decoration-1">+</span>
    <span class="hero-decoration hero-decoration-2">+</span>
    <span class="hero-decoration hero-decoration-3">+</span>
    <span class="hero-decoration hero-decoration-4">+</span>
    
    <div class="hero-content container">
        <div class="hero-label reveal">
            <span>${i18n.hero.label}</span>
        </div>
        <h1 class="text-hero hero-title reveal stagger-1">
            ${i18n.hero.title}
        </h1>
        <p class="hero-subtitle reveal stagger-2">
            ${i18n.hero.subtitle}
        </p>
        <a href="#contact" class="btn btn-primary btn-lg reveal stagger-3">
            ${i18n.hero.cta}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </a>
    </div>
    
    <div class="hero-image-wrapper reveal-scale stagger-4">
        <img src="/images/hero.webp" alt="Beautiful artificial grass garden installation in Almería" class="hero-image" loading="eager">
        <div class="hero-overlay-text">
            <h3>${i18n.hero.imageOverlay}</h3>
        </div>
        <a href="#contact" class="hero-overlay-cta">
            ${i18n.hero.bookConsultation}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="16" height="16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </a>
    </div>
</section>

<!-- STATS BAR -->
<section class="stats-bar">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item reveal stagger-1">
                <span class="stat-value" data-count="10">10+</span>
                <span class="stat-label">${i18n.stats.experience}</span>
            </div>
            <div class="stat-item reveal stagger-2">
                <span class="stat-value" data-count="500">500+</span>
                <span class="stat-label">${i18n.stats.projects}</span>
            </div>
            <div class="stat-item reveal stagger-3">
                <span class="stat-value" data-count="50000">50,000+</span>
                <span class="stat-label">${i18n.stats.installed}</span>
            </div>
            <div class="stat-item reveal stagger-4">
                <span class="stat-value">${i18n.stats.warrantyValue}</span>
                <span class="stat-label">${i18n.stats.warranty}</span>
            </div>
        </div>
    </div>
</section>

<!-- ABOUT SECTION -->
<section class="section" id="about">
    <div class="container">
        <!-- About Layout: Two columns aligned -->
        <div class="about-layout">
            <div class="about-col-left">
                <span class="section-eyebrow reveal">${i18n.about.eyebrow}</span>
                <h2 class="about-title reveal stagger-1">${i18n.about.title}</h2>
            </div>
            <div class="about-col-right reveal stagger-2">
                <p class="about-lead">
                    ${i18n.about.lead}
                </p>
                <p class="about-text">
                    ${i18n.about.text}
                </p>
            </div>
        </div>
        
        <!-- Values Grid - Clean and Uniform -->
        <div class="values-grid">
            <div class="value-item reveal stagger-1">
                <div class="value-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                </div>
                <h3>${i18n.about.values.trust.title}</h3>
                <p>${i18n.about.values.trust.text}</p>
            </div>
            <div class="value-item reveal stagger-2">
                <div class="value-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>
                </div>
                <h3>${i18n.about.values.excellence.title}</h3>
                <p>${i18n.about.values.excellence.text}</p>
            </div>
            <div class="value-item reveal stagger-3">
                <div class="value-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                </div>
                <h3>${i18n.about.values.sustainability.title}</h3>
                <p>${i18n.about.values.sustainability.text}</p>
            </div>
        </div>
        
        <!-- Visual Break Image -->
        <div class="about-image reveal">
            <img src="/images/about-us.webp" alt="Premium artificial grass installation" loading="lazy">
        </div>
        
        <!-- Quality Guarantees - Clean Gray Box -->
        <div class="guarantees-box reveal">
            <h3 class="guarantees-title">${i18n.about.guarantees.title}</h3>
            <div class="guarantees-grid">
                ${i18n.about.guarantees.items.map(item => `
                <div class="guarantee-item">
                    <span class="guarantee-num">${item.num}</span>
                    <h4>${item.title}</h4>
                    <p>${item.text}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </div>
</section>

<!-- SURFACES SECTION -->
<section class="section" id="surfaces">
    <div class="container">
        <!-- Surfaces Header -->
        <div class="surfaces-header reveal">
            <div class="surfaces-header-left">
                <span class="section-eyebrow">${i18n.surfaces.eyebrow}</span>
                <h2 class="surfaces-title">${i18n.surfaces.title}</h2>
            </div>
            <div class="surfaces-header-right">
                <p>${i18n.surfaces.subtitle}</p>
            </div>
        </div>
    </div>
    
    <!-- Surfaces Slider -->
    <div class="surfaces-slider" id="surfacesSlider">
        <div class="surfaces-track" id="surfacesTrack">
            ${i18n.surfaces.items.map((surface, index) => {
              const offsetClass = index % 2 === 1 ? ' surface-card-offset' : '';
              return `
            <div class="surface-card${offsetClass}">
                <div class="surface-card-img">
                    <img src="/images/${surface.image}" alt="${surface.name}" loading="lazy">
                </div>
                <h3>${surface.name}</h3>
            </div>
              `;
            }).join('')}
        </div>
    </div>
    
    <!-- Slider Controls -->
    <div class="container">
        <div class="surfaces-controls">
            <button class="slider-btn" id="sliderPrev" aria-label="Previous">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button class="slider-btn" id="sliderNext" aria-label="Next">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    </div>
</section>

<!-- WHY CHOOSE US -->
<section class="section bg-light" id="why-us">
    <div class="container">
        <!-- Header -->
        <div class="why-header reveal">
            <span class="section-eyebrow">${i18n.whyUs.eyebrow}</span>
            <h2 class="why-title">${i18n.whyUs.title}</h2>
        </div>
        
        <!-- Features Grid -->
        <div class="why-grid">
            ${i18n.whyUs.features.map((feature, index) => {
              if (feature.type === 'image') {
                return `
            <div class="why-feature why-feature-img reveal stagger-${index + 1}">
                <div class="why-feature-image">
                    <img src="/images/${feature.image}" alt="${feature.title}" loading="lazy">
                </div>
                <div class="why-feature-content">
                    <h3>${feature.title}</h3>
                    <p>${feature.text}</p>
                </div>
            </div>
                `;
              } else if (feature.type === 'stat') {
                const darkClass = feature.dark ? ' why-stat-dark' : '';
                return `
            <div class="why-feature why-stat${darkClass} reveal stagger-${index + 1}">
                <span class="why-stat-num">${feature.number}</span>
                <span class="why-stat-label">${feature.label}</span>
            </div>
                `;
              } else if (feature.type === 'horizontal') {
                return `
            <div class="why-feature why-feature-horizontal reveal stagger-${index + 1}">
                <div class="why-feature-content">
                    <h3>${feature.title}</h3>
                    <p>${feature.text}</p>
                </div>
                <div class="why-feature-image">
                    <img src="/images/${feature.image}" alt="${feature.title}" loading="lazy">
                </div>
            </div>
                `;
              } else if (feature.type === 'text') {
                const icons = {
                  shield: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>',
                  language: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>'
                };
                return `
            <div class="why-feature why-text reveal stagger-${index + 1}">
                <div class="why-icon">
                    ${icons[feature.icon] || ''}
                </div>
                <h4>${feature.title}</h4>
                <p>${feature.text}</p>
            </div>
                `;
              }
            }).join('')}
        </div>
    </div>
</section>

<!-- Stats Banner -->
<section class="stats-banner">
    <div class="container">
        <div class="trust-banner reveal">
            <div class="trust-left">
                <h2 class="trust-title">${i18n.trust.title}</h2>
            </div>
            <div class="trust-right">
                <p class="trust-inspiration">${i18n.trust.text}</p>
            </div>
        </div>
    </div>
</section>

<!-- GRASS MODELS -->
<section class="section" id="models">
    <div class="container">
        <div class="models-header reveal">
            <div class="models-header-left">
                <span class="section-eyebrow">${i18n.models.eyebrow}</span>
                <h2 class="models-title">${i18n.models.title}</h2>
            </div>
            <div class="models-header-right">
                <p>${i18n.models.subtitle}</p>
            </div>
        </div>
        
        <div class="grass-grid grid gap-6">
            ${data.collections.grassModels.map(model => `
            <article class="grass-card">
                ${model.image ? `
                <div class="grass-card-image">
                    <img src="${model.image}" alt="${model.name} ${model.height}" loading="lazy">
                </div>
                ` : `
                <div class="grass-card-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path d="M80-160v-80h230q-22-85-83.5-146.5T80-470q20-5 39.5-7.5T160-480q134 0 227 93t93 227H80Zm480 0q0-42-9-83.5T525-323q42-71 114.5-114T800-480q21 0 40.5 2.5T880-470q-85 22-146 83.5T650-240h230v80H560Zm-80-239q0-65 24-122t66-100.5q42-43.5 98.5-69.5T789-719q-56 35-98 86t-65 114q-44 21-80.5 51.5T480-399Zm-73-75q-12-9-24-17t-25-16q0-6 1-12.5t1-12.5q0-76-24-144t-68-124q66 27 114.5 77.5T457-606q-18 30-31 63.5T407-474Z"/>
                    </svg>
                </div>
                `}
                <div class="grass-card-body">
                    <div class="grass-card-header">
                        <div>
                            <h3 class="grass-card-name">${model.name}</h3>
                            <span class="grass-card-height">${i18n.models.height}: ${model.height}</span>
                        </div>
                    </div>
                    
                    <div class="grass-card-stats">
                        ${['density', 'thickness', 'memory', 'durability'].map(stat => `
                        <div class="grass-stat">
                            <span class="grass-stat-label">${i18n.models.stats[stat]}</span>
                            <div class="grass-stat-bars">
                                ${[1, 2, 3, 4].map(i => `
                                <div class="grass-stat-bar ${i <= model.stats[stat] ? 'active' : ''}"></div>
                                `).join('')}
                            </div>
                        </div>
                        `).join('')}
                    </div>
                </div>
            </article>
            `).join('')}
        </div>
    </div>
</section>

<!-- PARTNERS SECTION -->
<section class="section bg-light" id="partners">
    <div class="container">
        <div class="partners-header reveal">
            <div class="partners-header-left">
                <span class="section-eyebrow">${i18n.partners.eyebrow}</span>
                <h2 class="partners-title">${i18n.partners.title}</h2>
            </div>
            <div class="partners-header-right">
                <p>${i18n.partners.intro}</p>
            </div>
        </div>
        
        <div class="partners-grid">
            ${i18n.partners.items.map((partner, index) => `
            <a href="${partner.url}" target="_blank" rel="noopener noreferrer" class="partner-card reveal stagger-${index + 1}">
                <div class="partner-logo">
                    <img src="/images/${partner.logo}" alt="${partner.name}" loading="lazy">
                </div>
                <div class="partner-content">
                    <p class="partner-description">${partner.description}</p>
                </div>
            </a>
            `).join('')}
        </div>
    </div>
</section>

<!-- FAQ SECTION -->
<section class="section" id="faq">
    <div class="container">
        <div class="faq-header reveal">
            <div class="faq-header-left">
                <span class="section-eyebrow">${i18n.faq.eyebrow}</span>
                <h2 class="faq-title">${i18n.faq.title}</h2>
            </div>
            <div class="faq-header-right">
                <p>${i18n.faq.subtitle}</p>
            </div>
        </div>
        
        <div class="faq-list">
            ${i18n.faq.items.map(item => `
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <button class="faq-question" aria-expanded="false">
                    <span itemprop="name">${item.question}</span>
                    <span class="faq-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="16" height="16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </span>
                </button>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p class="faq-answer-content" itemprop="text">${item.answer}</p>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

<!-- CTA SECTION -->
<section class="section cta-section" id="contact">
    <div class="container">
        <div class="cta-bento reveal">
            <!-- Image row -->
            <div class="cta-image-wrapper">
                <img src="/images/banner-cta.webp" alt="Beautiful artificial grass installation" loading="lazy" class="cta-image">
            </div>
            
            <!-- Content row -->
            <div class="cta-bottom">
                <div class="cta-text-col">
                    <h2 class="cta-title">${i18n.cta.title}</h2>
                    <p class="cta-text">${i18n.cta.subtitle}</p>
                </div>
                <div class="cta-form-wrapper">
                    <form class="cta-form" id="contactForm" name="contact-${lang}" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact-${lang}">
                        <input type="hidden" name="language" value="${lang}">
                        <p style="display:none;">
                            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <input type="email" name="email" class="cta-input" placeholder="${i18n.cta.emailPlaceholder}" required>
                        <button type="submit" class="btn btn-primary">
                            <span class="btn-text">${i18n.cta.button}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="16" height="16">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </form>
                    <div id="formMessage" class="form-success-message" style="display: none;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="24" height="24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>${i18n.cta.successMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer class="footer">
    <div class="container">
        <div class="footer-top">
            <div class="footer-brand">
                <div class="footer-logo">
                    <img src="/images/logo-white.webp" alt="Indalturf - Artificial Grass Professionals">
                </div>
                <p class="footer-tagline">
                    ${i18n.footer.tagline}
                </p>
            </div>
            
            <div class="footer-links">
                <div class="footer-col">
                    <h4>${i18n.footer.navigation}</h4>
                    <ul>
                        <li><a href="#about">${i18n.nav.about}</a></li>
                        <li><a href="#surfaces">${i18n.nav.surfaces}</a></li>
                        <li><a href="#why-us">${i18n.nav.whyUs}</a></li>
                        <li><a href="#models">${i18n.nav.models}</a></li>
                        <li><a href="#faq">${i18n.nav.faq}</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>${i18n.footer.areas}</h4>
                    <ul class="footer-areas">
                        ${i18n.footer.areasServed.map(area => `<li>${area}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>${i18n.footer.contact}</h4>
                    <div class="footer-contact">
                        <a href="tel:${data.site.phone}" class="footer-contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            ${data.site.phone}
                        </a>
                        <a href="mailto:${data.site.email}" class="footer-contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            ${data.site.email}
                        </a>
                        <span class="footer-contact-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            ${i18n.footer.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p class="footer-copyright">${i18n.footer.copyright}</p>
            
            <div class="footer-social">
                <a href="${data.site.social.instagram}" aria-label="Follow us on Instagram" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
                <a href="https://wa.me/${data.site.social.whatsapp}" aria-label="Contact us on WhatsApp" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>

<!-- FLOATING WHATSAPP BUTTON -->
<a href="https://wa.me/${data.site.social.whatsapp}" class="whatsapp-float" target="_blank" rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span class="whatsapp-text">${i18n.whatsapp.text}</span>
</a>
    `;
  }
};

