import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_VERONIKA = "https://cdn.poehali.dev/projects/4b051116-c141-40e2-bc3e-184f795880c9/files/d91ae4ac-e6eb-4675-b144-d061c9ffe4e3.jpg";
const PHOTO_OFFICE = "https://cdn.poehali.dev/projects/4b051116-c141-40e2-bc3e-184f795880c9/files/71ce6340-fee9-49dc-9667-e897cc481dcd.jpg";
const PHOTO_DIPLOMA = "https://cdn.poehali.dev/projects/4b051116-c141-40e2-bc3e-184f795880c9/files/46bc155d-8569-4e2d-8c06-5d3bc664b224.jpg";

const diplomas = [
  {
    year: "2016",
    title: "МГУ им. Ломоносова",
    subtitle: "Клиническая психология",
    type: "Диплом специалиста",
  },
  {
    year: "2019",
    title: "Институт практической психологии",
    subtitle: "Когнитивно-поведенческая терапия",
    type: "Сертификат",
  },
  {
    year: "2021",
    title: "ОППЛ — супервизия",
    subtitle: "Индивидуальная и групповая супервизия",
    type: "Удостоверение",
  },
  {
    year: "2022",
    title: "Нарративные практики",
    subtitle: "Нарративный подход в терапии",
    type: "Сертификат",
  },
  {
    year: "2023",
    title: "Христианская психология",
    subtitle: "Интеграция духовного и психологического",
    type: "Сертификат",
  },
];

const services = [
  {
    icon: "Heart",
    title: "Индивидуальная консультация",
    desc: "Разбираем вашу ситуацию в безопасном пространстве. Первая встреча — знакомство и постановка запроса.",
    duration: "60 минут",
    price: "3 500 ₽",
  },
  {
    icon: "Users",
    title: "Работа с парами",
    desc: "Помогаю партнёрам выстроить честный диалог, понять друг друга и найти точки роста в отношениях.",
    duration: "90 минут",
    price: "5 000 ₽",
  },
  {
    icon: "Leaf",
    title: "Пакет «Путь к себе»",
    desc: "5 встреч с домашними практиками между сессиями. Глубокая работа с ресурсным состоянием.",
    duration: "5 × 60 мин",
    price: "15 000 ₽",
  },
  {
    icon: "Sun",
    title: "Групповой интенсив",
    desc: "Групповая терапевтическая работа в малой группе до 8 человек. Живой и онлайн-формат.",
    duration: "3 часа",
    price: "2 500 ₽",
  },
];

const themes = [
  "Тревога и беспокойство",
  "Отношения и близость",
  "Самооценка и уверенность",
  "Кризисы и перемены",
  "Выгорание и усталость",
  "Поиск смысла",
  "Горе и утрата",
  "Страхи и фобии",
];

const testimonials = [
  {
    name: "Анна К.",
    text: "С Вероникой я наконец-то перестала бояться своих чувств. За три месяца работы я стала лучше понимать себя и свои потребности. Очень рекомендую.",
    sessions: "3 месяца работы",
  },
  {
    name: "Михаил Д.",
    text: "Пришёл с ощущением полного тупика. После нескольких сессий появилась ясность и силы двигаться дальше. Вероника умеет задавать нужные вопросы.",
    sessions: "6 сессий",
  },
  {
    name: "Светлана В.",
    text: "Мягкий и при этом очень глубокий подход. Чувствуется настоящая вовлечённость. Я наконец нашла специалиста, с которым комфортно открываться.",
    sessions: "5 месяцев работы",
  },
];

const faq = [
  {
    q: "Как проходит первая сессия?",
    a: "Первая встреча — это знакомство. Мы разберём ваш запрос, я расскажу о своём подходе, и вы сможете решить, комфортно ли вам работать вместе. Никаких обязательств.",
  },
  {
    q: "Работаете ли вы онлайн?",
    a: "Да, большинство клиентов работают со мной онлайн. Это удобно, безопасно и не менее эффективно, чем очные встречи.",
  },
  {
    q: "Сколько сессий нужно?",
    a: "Зависит от запроса. Краткосрочная работа — от 5 до 10 встреч. Глубокие изменения — от 3 месяцев. Мы обсудим это на первой встрече.",
  },
  {
    q: "Что такое христианский подход?",
    a: "Я интегрирую духовное измерение в психологическую работу для тех, кому это близко. Но это не обязательное условие — я работаю со всеми людьми независимо от взглядов.",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".section-reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#about", label: "Обо мне" },
    { href: "#services", label: "Услуги" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#faq", label: "Вопросы" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(247,243,237,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--cream-dark)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex flex-col leading-tight">
          <span className="font-cormorant font-semibold text-xl" style={{ color: "var(--text-dark)" }}>
            Вероника Орчинская
          </span>
          <span className="text-xs tracking-wider" style={{ color: "var(--text-light)" }}>психолог</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-all duration-300 relative group"
              style={{ color: "var(--text-mid)" }}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--sage)" }}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 rounded-full font-medium text-white transition-all duration-300"
            style={{ background: "var(--sage)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#7a9a82";
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(143,172,151,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--sage)";
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            Записаться
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: "var(--text-mid)" }}>
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(247,243,237,0.98)", borderBottom: "1px solid var(--cream-dark)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm"
              style={{ color: "var(--text-mid)", borderBottom: "1px solid var(--cream-dark)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-center py-3 rounded-full text-sm font-medium text-white"
            style={{ background: "var(--sage)" }}
          >
            Записаться
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(160deg, var(--cream) 0%, #ede8df 100%)" }}
    >
      <div
        className="absolute top-20 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(143,172,151,0.15) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,110,82,0.07) 0%, transparent 65%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p
              className="text-sm tracking-widest uppercase mb-5 animate-fade-up font-medium"
              style={{ color: "var(--sage)", animationDelay: "0.1s", opacity: 0 }}
            >
              Психолог · Санкт-Петербург
            </p>

            <h1
              className="font-cormorant font-light leading-tight mb-6 animate-fade-up"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)",
                color: "var(--text-dark)",
                animationDelay: "0.25s",
                opacity: 0,
              }}
            >
              Помогаю наладить
              <br />
              <em style={{ color: "var(--warm-brown)" }}>связь с собой</em>
              <br />
              и выстроить баланс
            </h1>

            <p
              className="text-base leading-relaxed mb-10 animate-fade-up max-w-md"
              style={{ color: "var(--text-mid)", animationDelay: "0.4s", opacity: 0 }}
            >
              Работаю с тревогой, отношениями, самооценкой и поиском смысла.
              Индивидуальные консультации онлайн и очно в Петербурге.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.55s", opacity: 0 }}
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-medium text-white text-center transition-all duration-300 hover:shadow-lg"
                style={{ background: "var(--sage)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
              >
                Записаться на сессию
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded-full font-medium text-center transition-all duration-300"
                style={{ border: "1.5px solid var(--warm-brown)", color: "var(--warm-brown)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--warm-brown)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.color = "var(--warm-brown)";
                  e.currentTarget.style.transform = "";
                }}
              >
                Узнать обо мне
              </a>
            </div>

            <div
              className="flex gap-10 mt-14 animate-fade-up"
              style={{ animationDelay: "0.7s", opacity: 0 }}
            >
              {[
                { val: "7+", label: "лет практики" },
                { val: "200+", label: "клиентов" },
                { val: "онлайн", label: "и очно" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-cormorant font-semibold text-3xl" style={{ color: "var(--warm-brown)" }}>
                    {s.val}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-light)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <div
              className="absolute inset-4 rounded-[2rem] animate-float"
              style={{ background: "var(--sage-light)", zIndex: 0 }}
            />
            <img
              src={PHOTO_VERONIKA}
              alt="Вероника Орчинская"
              className="relative rounded-[2rem] w-full object-cover"
              style={{ aspectRatio: "4/5", zIndex: 1, maxHeight: "540px" }}
            />
            <div
              className="absolute -bottom-5 -left-5 px-5 py-3 rounded-2xl shadow-lg z-10"
              style={{ background: "white", border: "1px solid var(--cream-dark)" }}
            >
              <div className="text-xs mb-0.5" style={{ color: "var(--text-light)" }}>Ближайшая запись</div>
              <div className="font-semibold text-sm" style={{ color: "var(--text-dark)" }}>Уточнить у специалиста</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-28 px-6" style={{ background: "white" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative reveal-left">
            <img
              src={PHOTO_OFFICE}
              alt="Кабинет"
              className="rounded-3xl w-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            <div
              className="absolute top-6 -right-6 w-32 h-32 rounded-2xl hidden md:flex items-center justify-center"
              style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)" }}
            >
              <div className="text-center">
                <div className="font-cormorant font-semibold text-2xl" style={{ color: "var(--warm-brown)" }}>МГУ</div>
                <div className="text-xs mt-1" style={{ color: "var(--text-light)" }}>образование</div>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <p className="text-sm tracking-widest uppercase mb-4 font-medium" style={{ color: "var(--sage)" }}>
              Обо мне
            </p>
            <h2
              className="font-cormorant font-light leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "var(--text-dark)" }}
            >
              Вероника Орчинская —<br />
              <em style={{ color: "var(--warm-brown)" }}>ваш проводник</em>
            </h2>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
              <p>
                Я психолог с семилетним опытом работы. Специализируюсь на индивидуальной терапии, помогаю людям разобраться в себе, найти опору и двигаться вперёд.
              </p>
              <p>
                В своей работе я сочетаю когнитивно-поведенческий подход, нарративные практики и элементы христианской психологии — для тех, кому это близко.
              </p>
              <p>
                Провожу сессии онлайн и очно в Санкт-Петербурге. Работаю со взрослыми индивидуально и парами.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: "GraduationCap", text: "МГУ, клиническая психология" },
                { icon: "Award", text: "Сертификат КПТ-терапевта" },
                { icon: "BookOpen", text: "Супервизия и личная терапия" },
                { icon: "Globe", text: "Онлайн и очно, СПб" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "var(--cream)", color: "var(--sage)" }}
                  >
                    <Icon name={item.icon} size={14} fallback="Check" />
                  </div>
                  <span className="text-xs leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiplomasSection() {
  return (
    <section id="diplomas" className="py-28 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="section-reveal mb-16">
          <p className="text-sm tracking-widest uppercase mb-3 font-medium" style={{ color: "var(--sage)" }}>
            Образование
          </p>
          <h2
            className="font-cormorant font-light"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            Дипломы и сертификаты
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Diploma image */}
          <div className="reveal-left sticky top-28">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{ background: "var(--sage-light)", opacity: 0.4 }}
              />
              <img
                src={PHOTO_DIPLOMA}
                alt="Диплом"
                className="relative rounded-3xl w-full object-cover shadow-lg"
                style={{ aspectRatio: "4/3" }}
              />
              <div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl"
                style={{ background: "white", border: "1px solid var(--cream-dark)", boxShadow: "0 8px 24px rgba(139,110,82,0.1)" }}
              >
                <div className="flex items-center gap-2">
                  <Icon name="ShieldCheck" size={16} className="shrink-0" style={{ color: "var(--sage)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--text-dark)" }}>
                    5 документов об образовании
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute left-[19px] top-3 bottom-3 w-px"
              style={{ background: "linear-gradient(to bottom, var(--sage-light), transparent)" }}
            />
            <div className="space-y-6">
              {diplomas.map((d, i) => (
                <div
                  key={d.title}
                  className="section-reveal flex gap-5 group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Dot */}
                  <div className="relative shrink-0 mt-1">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "white",
                        border: "2px solid var(--sage-light)",
                        color: "var(--sage)",
                      }}
                    >
                      <Icon name="Award" size={14} fallback="Star" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 p-5 rounded-2xl transition-all duration-300 group-hover:-translate-y-1"
                    style={{
                      background: "white",
                      border: "1px solid var(--cream-dark)",
                      boxShadow: "0 2px 8px rgba(139,110,82,0.04)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 30px rgba(139,110,82,0.1)"; e.currentTarget.style.borderColor = "var(--sage-light)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(139,110,82,0.04)"; e.currentTarget.style.borderColor = "var(--cream-dark)"; }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <span className="font-cormorant font-semibold text-lg leading-tight" style={{ color: "var(--text-dark)" }}>
                        {d.title}
                      </span>
                      <span
                        className="shrink-0 text-xs px-2.5 py-1 rounded-full font-medium mt-0.5"
                        style={{ background: "var(--cream)", color: "var(--text-mid)" }}
                      >
                        {d.year}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-mid)" }}>{d.subtitle}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Icon name="FileCheck" size={12} />
                      <span className="text-xs" style={{ color: "var(--text-light)" }}>{d.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThemesSection() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="section-reveal text-center mb-12">
          <p className="text-sm tracking-widest uppercase mb-3 font-medium" style={{ color: "var(--sage)" }}>Темы работы</p>
          <h2
            className="font-cormorant font-light"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            С чем я работаю
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 section-reveal">
          {themes.map((theme) => (
            <span
              key={theme}
              className="px-5 py-2.5 rounded-full text-sm transition-all duration-300 cursor-default"
              style={{ background: "white", border: "1px solid var(--cream-dark)", color: "var(--text-mid)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--sage)";
                e.currentTarget.style.color = "var(--text-dark)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--cream-dark)";
                e.currentTarget.style.color = "var(--text-mid)";
                e.currentTarget.style.transform = "";
              }}
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6" style={{ background: "white" }}>
      <div className="max-w-5xl mx-auto">
        <div className="section-reveal mb-16">
          <p className="text-sm tracking-widest uppercase mb-3 font-medium" style={{ color: "var(--sage)" }}>Услуги</p>
          <h2
            className="font-cormorant font-light"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            Форматы работы
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="section-reveal card-warm rounded-3xl p-7"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "var(--cream)", color: "var(--sage)" }}
              >
                <Icon name={s.icon} size={20} fallback="Star" />
              </div>
              <h3 className="font-cormorant font-semibold text-xl mb-2" style={{ color: "var(--text-dark)" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>{s.desc}</p>
              <div className="divider-organic mb-4" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-light)" }}>
                  <Icon name="Clock" size={13} />
                  {s.duration}
                </div>
                <div className="font-semibold text-base" style={{ color: "var(--warm-brown)" }}>{s.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-reveal mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg"
            style={{ background: "var(--sage)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
          >
            Записаться на консультацию
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="section-reveal mb-16 text-center">
          <p className="text-sm tracking-widest uppercase mb-3 font-medium" style={{ color: "var(--sage)" }}>Отзывы</p>
          <h2
            className="font-cormorant font-light"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            Что говорят клиенты
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="section-reveal card-warm rounded-3xl p-7 flex flex-col"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="font-cormorant text-6xl leading-none mb-4" style={{ color: "var(--sage-light)" }}>"</div>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--text-mid)" }}>{t.text}</p>
              <div className="divider-organic mb-4" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm"
                    style={{ background: "var(--sage-light)", color: "var(--text-dark)" }}
                  >
                    {t.name[0]}
                  </div>
                  <span className="font-medium text-sm" style={{ color: "var(--text-dark)" }}>{t.name}</span>
                </div>
                <span className="text-xs" style={{ color: "var(--text-light)" }}>{t.sessions}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6" style={{ background: "white" }}>
      <div className="max-w-3xl mx-auto">
        <div className="section-reveal mb-16 text-center">
          <p className="text-sm tracking-widest uppercase mb-3 font-medium" style={{ color: "var(--sage)" }}>FAQ</p>
          <h2
            className="font-cormorant font-light"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--text-dark)" }}
          >
            Частые вопросы
          </h2>
        </div>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={item.q}
              className="section-reveal rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openIdx === i ? "var(--cream)" : "white",
                border: `1px solid ${openIdx === i ? "var(--sage-light)" : "var(--cream-dark)"}`,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-medium text-sm pr-4" style={{ color: "var(--text-dark)" }}>{item.q}</span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openIdx === i ? "var(--sage)" : "var(--cream)",
                    color: openIdx === i ? "white" : "var(--text-mid)",
                    transform: openIdx === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <Icon name="Plus" size={14} />
                </span>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "linear-gradient(135deg, #f0ebe3 0%, #e6ede8 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-reveal text-center mb-14">
          <p className="text-sm tracking-widest uppercase mb-3 font-medium" style={{ color: "var(--sage)" }}>Запись</p>
          <h2
            className="font-cormorant font-light mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-dark)" }}
          >
            Начнём вместе?
          </h2>
          <p className="text-sm leading-relaxed max-w-lg mx-auto" style={{ color: "var(--text-mid)" }}>
            Напишите мне удобным способом, и мы согласуем время для первой встречи.
            Первое сообщение — бесплатно.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 section-reveal">
          {[
            { icon: "MessageCircle", label: "Telegram", sub: "@orchinskaya", href: "https://t.me/orchinskaya", primary: true },
            { icon: "Phone", label: "WhatsApp", sub: "+7 (___) ___-__-__", href: "https://wa.me/7", primary: false },
            { icon: "Mail", label: "Email", sub: "veronika@example.com", href: "mailto:veronika@example.com", primary: false },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-3xl transition-all duration-300 group"
              style={{
                background: c.primary ? "var(--sage)" : "white",
                border: c.primary ? "none" : "1px solid var(--cream-dark)",
                color: c.primary ? "white" : "var(--text-dark)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(139,110,82,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: c.primary ? "rgba(255,255,255,0.2)" : "var(--cream)",
                  color: c.primary ? "white" : "var(--sage)",
                }}
              >
                <Icon name={c.icon} size={20} fallback="Link" />
              </div>
              <div>
                <div className="font-semibold text-sm">{c.label}</div>
                <div className="text-xs mt-0.5 opacity-70">{c.sub}</div>
              </div>
              <Icon name="ArrowRight" size={14} className="ml-auto opacity-40 transition-all duration-300 group-hover:opacity-80 group-hover:translate-x-1" />
            </a>
          ))}
        </div>

        <div className="section-reveal flex items-center justify-center gap-5 mt-10">
          {[
            { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
            { icon: "Youtube", label: "YouTube", href: "https://youtube.com" },
            { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 group transition-all duration-300"
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
            >
              <span
                className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: "white",
                  border: "1px solid var(--cream-dark)",
                  color: "var(--text-mid)",
                }}
              >
                <Icon name={s.icon} size={16} fallback="Link" />
              </span>
              <span className="text-xs" style={{ color: "var(--text-light)" }}>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ background: "var(--cream-dark)", borderTop: "1px solid rgba(139,110,82,0.1)" }}
    >
      <div
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        style={{ color: "var(--text-light)" }}
      >
        <span className="font-cormorant text-base font-semibold" style={{ color: "var(--text-mid)" }}>
          Вероника Орчинская
        </span>
        <span>Психолог · Санкт-Петербург · Онлайн</span>
        <span>© 2024</span>
      </div>
    </footer>
  );
}

export default function Index() {
  useScrollReveal();

  return (
    <div style={{ background: "var(--cream)" }}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <DiplomasSection />
      <ThemesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}