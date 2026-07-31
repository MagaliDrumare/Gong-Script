const posts = [
  {
    title: "Banking Outlook 2026: Leading Through Tariffs, Rate Cuts, and the M&A Wave with AI",
    excerpt: "Tariffs, legislation, and monetary policy can reshape banking overnight. This midyear outlook explores how CFOs are embedding AI and can use OneStream to stay in front of the headlines and lead with confidence.",
    date: "July 21, 2026",
    readTime: "9 min read",
    author: "Andre Siegrist",
    tags: ["Banking", "Forecasting", "AI / ML"],
    url: "https://www.onestream.com/blog/navigating-policy-shifts-and-leading-with-ai-in-banking/",
    image: "https://cdn.sanity.io/images/8riso4ej/production/0900056688ed56d41f198d777e9ba21d599f9cb5-1200x600.jpg?w=1600&h=900&fit=crop&auto=format"
  },
  {
    title: "Beyond the Pilot: Why Finance AI Isn't Scaling",
    excerpt: "See what to prioritize, where to start, and how to connect outputs to decisions, action, and accountability with a CFO-ready framework for evaluating Finance AI.",
    date: "July 21, 2026",
    readTime: "5 min read",
    author: "Tiffany Ma",
    tags: ["Machine Learning"],
    url: "https://www.onestream.com/blog/beyond-the-pilot-why-finance-ai-isn-t-scaling/",
    image: "https://cdn.sanity.io/images/8riso4ej/production/01f16af3a46876482ebfe68ccc04f7c1eb7efc40-1200x600.jpg?w=1600&h=900&fit=crop&auto=format"
  },
  {
    title: "From Spreadsheets to AI Forecasting: How OneStream Gets Mid-Market Finance There Faster",
    excerpt: "Still closing the books in Excel? OneStream Express solutions give lean Finance teams enterprise-grade tools — deployed in 8–12 weeks, no IT bench needed.",
    date: "July 21, 2026",
    readTime: "5 min read",
    author: "Nicholas Cox",
    tags: ["Machine Learning", "OneStream"],
    url: "https://www.onestream.com/blog/from-spreadsheets-to-ai-forecasting/",
    image: "https://cdn.sanity.io/images/8riso4ej/production/39f65d776ee72fc4820337306722fa8f71c06667-1200x600.jpg?w=1600&h=900&fit=crop&auto=format"
  },
  {
    title: "AI Isn't Cheating. It's How Modern Work Gets Done.",
    excerpt: "AI isn't cheating — it's essential. Discover how modern finance teams use AI to boost speed, accuracy, and trust, and why resisting it could mean falling behind.",
    date: "July 17, 2026",
    readTime: "4 min read",
    author: "Tiffany Ma",
    tags: ["Machine Learning"],
    url: "https://www.onestream.com/blog/ai-isnt-cheating/",
    image: "https://cdn.sanity.io/images/8riso4ej/production/020dbfec904b43fb3b2c9cbf4424964a9c971b14-1200x600.jpg?w=1600&h=900&fit=crop&auto=format"
  },
  {
    title: "5 Key AI Use Cases for FP&A",
    excerpt: "Explore five AI use cases transforming FP&A by boosting forecast accuracy, streamlining reporting, and empowering finance teams to lead with agility and insight.",
    date: "July 17, 2026",
    readTime: "4 min read",
    author: "Pras Chatterjee",
    tags: ["Analytics", "Digital transformation", "Machine Learning"],
    url: "https://www.onestream.com/blog/key-ai-use-cases-for-fp-and-a/",
    image: "https://cdn.sanity.io/images/8riso4ej/production/ac93cee4d7ec7394265c7f433ea8e80f083acc5d-1200x600.jpg?w=1600&h=900&fit=crop&auto=format"
  },
  {
    title: "How Finance Can Partner with IT Without Having to Ask for Better Data",
    excerpt: "Better data isn't the answer. See how finance can work with IT to fix ownership, definitions, and governance, and turn data into a true business asset.",
    date: "May 26, 2026",
    readTime: "5 min read",
    author: "Tiffany Ma",
    tags: ["Machine Learning"],
    url: "https://www.onestream.com/blog/how-finance-can-partner-with-it-without-having-to-ask-for-better-data/",
    image: "https://cdn.sanity.io/images/8riso4ej/production/f5187766f3bb4b3b019b7593abbc17d6b524c6bd-1200x600.jpg?w=1600&h=900&fit=crop&auto=format"
  }
];

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'intro', label: 'About' },
  ...posts.map((_, i) => ({ id: `article-${i}`, label: `Article ${i + 1}` })),
  { id: 'footer', label: 'Subscribe' }
];

const waveSvg = `
  <div class="scene-deco" aria-hidden="true">
    <svg viewBox="0 0 1200 80" preserveAspectRatio="none"><path d="M0,40 Q300,10 600,40 T1200,40"/></svg>
    <svg viewBox="0 0 1200 80" preserveAspectRatio="none"><path d="M0,50 Q400,20 800,50 T1200,50"/></svg>
  </div>`;

function buildSideNav() {
  const nav = document.getElementById('sidenav');
  sections.forEach((s, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${s.id}`;
    a.textContent = s.label;
    a.dataset.index = i;
    if (i === 0) a.classList.add('active');
    li.appendChild(a);
    nav.appendChild(li);
  });
}

function buildArticles() {
  const container = document.getElementById('articles');
  posts.forEach((post, i) => {
    const section = document.createElement('section');
    section.className = 'scene scene-article';
    section.id = `article-${i}`;
    section.innerHTML = `
      <div class="bg-image" style="background-image: url('${post.image}')"></div>
      <div class="bg-overlay"></div>
      ${waveSvg}
      <div class="scene-inner">
        <div class="article-meta anim-item">
          <span>${post.date}</span>
          <span class="dot"></span>
          <span>${post.readTime}</span>
        </div>
        <h2 class="anim-item delay-1">${post.title}</h2>
        <p class="anim-item delay-2">${post.excerpt}</p>
        <div class="tags anim-item delay-3">
          ${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <a href="${post.url}" class="read-more anim-item delay-4" target="_blank" rel="noopener">Read Full Article</a>
        <p class="author anim-item delay-5">By <strong>${post.author}</strong></p>
      </div>
    `;
    container.appendChild(section);
  });
}

function buildShapes() {
  const shapes = document.querySelector('.shapes');
  if (!shapes) return;
  const types = ['circle', 'square', 'triangle'];
  for (let i = 0; i < 18; i++) {
    const el = document.createElement('div');
    const type = types[i % 3];
    el.className = `shape shape-${type}`;
    const rot = Math.random() * 360;
    el.style.setProperty('--rot', `${rot}deg`);
    if (type !== 'triangle') {
      const size = 20 + Math.random() * 60;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
    }
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 100}%`;
    el.style.animationDelay = `${Math.random() * 4}s, ${1 + Math.random() * 2}s`;
    shapes.appendChild(el);
  }
}

function initPreloader() {
  const preloader = document.getElementById('preloader');
  const hero = document.getElementById('hero');

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('outro');
    }, 1800);

    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.classList.add('loaded');
      hero.classList.add('loaded-deco');
    }, 2400);
  });
}

function initScrollReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('in-view');

        entry.target.querySelectorAll('.anim-item').forEach(el => {
          el.classList.add('visible');
        });

        if (entry.target.classList.contains('scene-intro')) {
          entry.target.querySelector('.intro-card')?.classList.add('visible');
          entry.target.querySelectorAll('.shape').forEach(s => s.classList.add('visible'));
        }
      });
    },
    { threshold: 0.35, rootMargin: '-5% 0px' }
  );

  document.querySelectorAll('.scene, .scene-article').forEach(el => {
    revealObserver.observe(el);
  });
}

function initScrollSpy() {
  const navLinks = document.querySelectorAll('#sidenav a');
  const sceneEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sceneEls.forEach(el => observer.observe(el));
}

function initParallax() {
  const bgImages = document.querySelectorAll('.bg-image');
  const introCard = document.querySelector('.intro-card');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        bgImages.forEach(bg => {
          const section = bg.closest('.scene');
          if (!section) return;

          const rect = section.getBoundingClientRect();
          const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const clamped = Math.max(0, Math.min(1, progress));
          const offset = (clamped - 0.5) * 80;

          if (section.classList.contains('scene-hero')) {
            const scale = 1.1 + clamped * 0.08;
            bg.style.transform = `scale(${scale}) translateY(${offset * 0.5}px)`;
            return;
          }

          const scale = 1.08 + clamped * 0.06;
          bg.style.transform = `scale(${scale}) translateY(${offset}px)`;
        });

        if (introCard) {
          const intro = document.getElementById('intro');
          if (intro) {
            const rect = intro.getBoundingClientRect();
            const offset = (rect.top - window.innerHeight / 2) * 0.03;
            introCard.style.transform = `translateY(${offset}px) scale(1)`;
          }
        }

        document.getElementById('navigation').classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function initEmailForm() {
  const form = document.getElementById('subscribe-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (email && email.includes('@')) {
      window.open('https://www.onestream.com/blog/?parentCategory=ai', '_blank');
    }
  });
}

buildSideNav();
buildArticles();
buildShapes();
initPreloader();
initScrollReveal();
initScrollSpy();
initParallax();
initEmailForm();
