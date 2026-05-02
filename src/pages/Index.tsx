import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const PROJECT_IMAGE_1 = "https://cdn.poehali.dev/projects/4b051116-c141-40e2-bc3e-184f795880c9/files/b722df3f-a1b1-431c-b5b1-dc1361d1e4a7.jpg";
const PROJECT_IMAGE_2 = "https://cdn.poehali.dev/projects/4b051116-c141-40e2-bc3e-184f795880c9/files/d93fd487-11d3-44f9-8c78-21c216618695.jpg";

const projects = [
  {
    id: 1,
    title: "E-commerce платформа",
    description: "Полноценный интернет-магазин с корзиной, платёжной системой и личным кабинетом пользователя",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: PROJECT_IMAGE_1,
    year: "2024",
  },
  {
    id: 2,
    title: "Дашборд аналитики",
    description: "Интерактивная панель для визуализации данных с графиками в реальном времени",
    tags: ["TypeScript", "D3.js", "WebSocket"],
    image: PROJECT_IMAGE_2,
    year: "2024",
  },
  {
    id: 3,
    title: "Мобильное приложение",
    description: "Кросс-платформенное приложение для трекинга задач с синхронизацией в облаке",
    tags: ["React Native", "Firebase", "Redux"],
    image: PROJECT_IMAGE_1,
    year: "2023",
  },
  {
    id: 4,
    title: "Корпоративный портал",
    description: "Внутренний портал компании с системой документооборота и управления проектами",
    tags: ["Vue.js", "Python", "Docker"],
    image: PROJECT_IMAGE_2,
    year: "2023",
  },
];

const skills = [
  { name: "React / Next.js", level: 95, color: "var(--neon-cyan)" },
  { name: "TypeScript", level: 90, color: "var(--neon-purple)" },
  { name: "Node.js / Python", level: 85, color: "var(--neon-orange)" },
  { name: "UI/UX Дизайн", level: 80, color: "var(--neon-cyan)" },
  { name: "PostgreSQL", level: 82, color: "var(--neon-purple)" },
  { name: "DevOps / Docker", level: 75, color: "var(--neon-orange)" },
];

const testimonials = [
  {
    name: "Александр Петров",
    role: "CEO, TechStart",
    text: "Работать с этим специалистом — удовольствие. Проект сдан в срок, качество выше всех ожиданий. Особенно впечатлила внимательность к деталям.",
    avatar: "А",
    color: "var(--neon-purple)",
  },
  {
    name: "Мария Соколова",
    role: "Product Manager, GrowthLab",
    text: "Нашли настоящего профессионала! Сложные технические задачи решались быстро и элегантно. Рекомендую всем, кто ценит результат.",
    avatar: "М",
    color: "var(--neon-cyan)",
  },
  {
    name: "Дмитрий Иванов",
    role: "Founder, DesignHub",
    text: "Превзошёл все ожидания — не просто разработчик, но и стратег. Помог выбрать правильный стек и архитектуру. Проект работает отлично уже год.",
    avatar: "Д",
    color: "var(--neon-orange)",
  },
];

const techStack = ["React", "TypeScript", "Python", "PostgreSQL", "Node.js", "Docker", "Figma", "GraphQL", "Redis", "AWS"];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#projects", label: "Проекты" },
    { href: "#skills", label: "Навыки" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-syne font-extrabold text-xl tracking-tight">
          <span className="gradient-text">YourName</span>
          <span className="text-white/30">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-5 py-2 rounded-full font-medium text-white"
            style={{ background: "linear-gradient(135deg, var(--neon-purple), #7c3aed)" }}
          >
            Связаться
          </a>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(8,8,16,0.96)", backdropFilter: "blur(20px)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-purple-400 transition-colors py-2"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-60 h-60 rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "3s",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 animate-fade-up"
          style={{
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.25)",
            color: "var(--neon-purple)",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Доступен для новых проектов
        </div>

        <h1
          className="font-syne font-extrabold text-6xl md:text-8xl leading-none mb-6 animate-fade-up text-white"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Fullstack
          <br />
          <span className="gradient-text">Разработчик</span>
        </h1>

        <p
          className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Создаю цифровые продукты, которые работают красиво и быстро.
          От идеи до запуска — под ключ.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-300 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, var(--neon-purple), #7c3aed)",
              boxShadow: "0 0 0 rgba(168,85,247,0)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(168,85,247,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 rgba(168,85,247,0)")}
          >
            Смотреть проекты
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold text-base text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Написать мне
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-5 mt-14 animate-fade-up"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          {[
            { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com" },
            { icon: "Github", label: "GitHub", href: "https://github.com" },
            { icon: "Dribbble", label: "Dribbble", href: "https://dribbble.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-purple-400 transition-all duration-300 group text-sm"
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/20"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Icon name={s.icon} size={15} fallback="Link" />
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 animate-float">
        <span className="text-xs tracking-widest uppercase">Прокрутите</span>
        <Icon name="ChevronDown" size={16} />
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal mb-16">
          <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: "var(--neon-cyan)" }}>
            Портфолио
          </span>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white">
            Избранные <span className="gradient-text">работы</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="section-reveal glow-border rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                background: "var(--card-bg)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, var(--card-bg) 100%)" }}
                />
                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.3)", color: "var(--neon-purple)" }}
                  >
                    {p.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-syne font-bold text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.15)", color: "var(--neon-cyan)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 px-6">
      <div
        className="overflow-hidden mb-20 py-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="mx-8 font-syne font-bold text-sm tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.15)" }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="section-reveal mb-16">
          <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: "var(--neon-purple)" }}>
            Экспертиза
          </span>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white">
            Технические <span className="gradient-text">навыки</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="section-reveal p-6 rounded-2xl"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(255,255,255,0.05)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{skill.name}</span>
                <span className="text-xs font-bold" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                    boxShadow: `0 0 10px ${skill.color}66`,
                    transitionDelay: `${i * 0.1 + 0.3}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { value: "40+", label: "Проектов завершено" },
            { value: "5 лет", label: "Опыта в разработке" },
            { value: "98%", label: "Довольных клиентов" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="section-reveal text-center p-6 rounded-2xl"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(255,255,255,0.05)",
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              <div className="font-syne font-extrabold text-3xl md:text-4xl gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal mb-16 text-center">
          <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: "var(--neon-cyan)" }}>
            Отзывы
          </span>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white">
            Что говорят <span className="gradient-text">клиенты</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="section-reveal glow-border rounded-2xl p-7 flex flex-col"
              style={{
                background: "var(--card-bg)",
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              <div className="text-5xl mb-4 leading-none font-syne font-extrabold" style={{ color: t.color, opacity: 0.35 }}>
                "
              </div>

              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>{t.text}</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-syne font-bold text-sm shrink-0"
                  style={{ background: `${t.color}22`, border: `1px solid ${t.color}44`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="section-reveal">
          <span className="text-xs font-medium tracking-widest uppercase mb-3 block" style={{ color: "var(--neon-purple)" }}>
            Контакты
          </span>
          <h2 className="font-syne font-extrabold text-4xl md:text-6xl text-white mb-6">
            Начнём <span className="gradient-text">проект?</span>
          </h2>
          <p className="text-lg mb-12 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Готов обсудить вашу идею и предложить оптимальное решение.
            Напишите — отвечу в течение нескольких часов.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="mailto:hello@example.com"
              className="px-8 py-4 rounded-full font-semibold text-base text-white flex items-center gap-2 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, var(--neon-purple), #7c3aed)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(168,85,247,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <Icon name="Mail" size={16} />
              Написать письмо
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-base flex items-center gap-2 transition-all duration-300 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
            >
              <Icon name="MessageCircle" size={16} />
              Telegram
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com", color: "var(--neon-cyan)" },
              { icon: "Github", label: "GitHub", href: "https://github.com", color: "var(--neon-purple)" },
              { icon: "Dribbble", label: "Dribbble", href: "https://dribbble.com", color: "var(--neon-orange)" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group transition-all duration-300 hover:scale-110"
              >
                <span
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `${s.color}12`,
                    border: `1px solid ${s.color}30`,
                    color: s.color,
                  }}
                >
                  <Icon name={s.icon} size={18} fallback="Link" />
                </span>
                <span className="text-xs transition-colors duration-300 group-hover:text-white/70" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
        © 2024 YourName · Разработано с вниманием к деталям
      </p>
    </footer>
  );
}

export default function Index() {
  useScrollReveal();

  return (
    <div style={{ background: "var(--dark-bg)", minHeight: "100vh" }}>
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
