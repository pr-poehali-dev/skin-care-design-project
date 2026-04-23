import Icon from '@/components/ui/icon';

const HERO_IMAGE = "https://cdn.poehali.dev/projects/62a26ba4-4c97-4ae4-9d07-7cf1101a5965/files/5ca89bf7-2938-4b2e-9041-f93e76a3a53b.jpg";

const NAV_LINKS = [
  { label: 'Подход', href: '#approach' },
  { label: 'Процесс', href: '#process' },
  { label: 'Результаты', href: '#results' },
  { label: 'Тарифы', href: '#pricing' },
];

const FOR_WHO = [
  { text: 'Вы устали пробовать новые средства и не понимаете, почему кожа не меняется' },
  { text: 'Вы тратите много на косметику, но не видите системного результата' },
  { text: 'Вы хотите разобраться в уходе раз и навсегда — без лишних продуктов и хаоса' },
  { text: 'Вы ищете поддержку эксперта, а не очередной список покупок' },
];

const STEPS = [
  { number: '01', title: 'Диагностика', desc: 'Анализирую состояние кожи, образ жизни и текущий уход. Выявляю причины, а не симптомы.' },
  { number: '02', title: 'Программа', desc: 'Составляю персональный протокол: конкретные средства, последовательность, дозировки.' },
  { number: '03', title: 'Сопровождение', desc: 'Отвечаю на вопросы, корректирую уход по мере изменений кожи и сезона.' },
];

const RESULTS = [
  'Понимаете, что и зачем используете',
  'Кожа получает то, что ей нужно — не больше',
  'Прекращаете хаотично покупать новинки',
  'Видите устойчивый результат за 4–8 недель',
  'Экономите время и деньги на косметику',
];

const PRICING = [
  {
    name: 'Диагностика',
    price: '4 900 ₽',
    description: 'Разовая консультация с анализом кожи и составлением протокола ухода',
    includes: [
      'Анкета и анализ текущего ухода',
      'Письменные рекомендации',
      'Протокол на 4–6 недель',
      'Ответы на вопросы в течение 7 дней',
    ],
    accent: false,
  },
  {
    name: 'Сопровождение',
    price: '9 900 ₽ / мес',
    description: 'Индивидуальная работа с постоянной поддержкой и корректировкой программы',
    includes: [
      'Всё из диагностики',
      'Корректировка протокола раз в 2 недели',
      'Ответы в течение 24 часов',
      'Разбор новых средств перед покупкой',
      'Сезонная адаптация ухода',
    ],
    accent: true,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cream)', color: 'var(--dark)' }}>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ backgroundColor: 'rgba(247,244,239,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--beige)' }}>
        <span className="font-cormorant text-xl font-light tracking-widest uppercase"
          style={{ color: 'var(--dark)', letterSpacing: '0.18em' }}>
          Skin Expert
        </span>
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              className="hover-underline font-golos font-light transition-colors"
              style={{ color: 'var(--stone)', fontSize: '13px', letterSpacing: '0.05em' }}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#diagnostic"
          className="hidden md:inline-block font-golos font-light px-5 py-2.5 transition-all duration-300 hover:opacity-80"
          style={{ border: '1px solid var(--btn)', color: 'var(--btn)', fontSize: '13px', letterSpacing: '0.06em' }}>
          Записаться
        </a>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-end pb-20 pt-32 px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-5/12">
          <img
            src={HERO_IMAGE}
            alt="Естественная кожа"
            className="w-full h-full object-cover object-center animate-fade-in"
            style={{ filter: 'saturate(0.85) brightness(0.97)' }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, var(--cream) 0%, rgba(247,244,239,0.5) 45%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 max-w-2xl">
          <p className="animate-fade-up font-golos font-light mb-6 tracking-widest uppercase"
            style={{ color: 'var(--olive)', fontSize: '12px', letterSpacing: '0.2em' }}>
            Системный уход за кожей
          </p>
          <h1 className="animate-fade-up-delay-1 font-cormorant font-light leading-tight mb-8"
            style={{ fontSize: 'clamp(42px, 6vw, 76px)', lineHeight: '1.1', color: 'var(--dark)' }}>
            Кожа меняется,<br />
            когда уход<br />
            <em>становится системой</em>
          </h1>
          <p className="animate-fade-up-delay-2 font-golos font-light leading-relaxed mb-12 max-w-md"
            style={{ color: 'var(--stone)', fontSize: '16px', lineHeight: '1.7' }}>
            Я помогаю выстроить персональный домашний уход,
            который работает — без лишних продуктов, хаоса и постоянных экспериментов.
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <a href="#diagnostic"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-golos font-light transition-all duration-300 hover:opacity-85"
              style={{ backgroundColor: 'var(--btn)', color: 'var(--cream)', fontSize: '14px', letterSpacing: '0.05em' }}>
              Записаться на диагностику
              <Icon name="ArrowRight" size={16} />
            </a>
            <a href="#approach"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-golos font-light transition-all duration-300 hover:opacity-60"
              style={{ color: 'var(--stone)', fontSize: '14px', letterSpacing: '0.05em' }}>
              Узнать подробнее
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 right-16 hidden md:block animate-fade-in">
          <p className="font-cormorant text-5xl font-light text-right" style={{ color: 'var(--dark)' }}>200+</p>
          <p className="font-golos font-light text-right" style={{ color: 'var(--stone)', fontSize: '12px', letterSpacing: '0.08em', lineHeight: '1.6' }}>
            клиентов прошли<br />программу ухода
          </p>
        </div>
      </section>

      {/* For who */}
      <section style={{ backgroundColor: 'var(--beige)', padding: '100px 0' }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-golos font-light mb-5 tracking-widest uppercase"
                style={{ color: 'var(--olive)', fontSize: '11px', letterSpacing: '0.22em' }}>
                Для кого
              </p>
              <h2 className="font-cormorant font-light"
                style={{ fontSize: 'clamp(32px, 4vw, 50px)', color: 'var(--dark)', lineHeight: '1.2' }}>
                Это для вас,<br />если вы узнаёте<br /><em>себя в этом</em>
              </h2>
            </div>
            <div className="flex flex-col gap-8 pt-2">
              {FOR_WHO.map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 rounded-full mt-2"
                    style={{ backgroundColor: 'var(--olive)', width: '5px', height: '5px' }} />
                  <p className="font-golos font-light leading-relaxed"
                    style={{ color: 'var(--dark)', fontSize: '15px', lineHeight: '1.65' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" style={{ padding: '110px 0', backgroundColor: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <p className="font-golos font-light mb-5 tracking-widest uppercase"
              style={{ color: 'var(--olive)', fontSize: '11px', letterSpacing: '0.22em' }}>
              Подход
            </p>
            <h2 className="font-cormorant font-light"
              style={{ fontSize: 'clamp(32px, 4vw, 50px)', color: 'var(--dark)', lineHeight: '1.2' }}>
              Не процедуры.<br /><em>Система.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--nude)' }}>
            {[
              { icon: 'Scan', title: 'Анализ, а не назначение', desc: 'Сначала разбираемся в причинах — почему кожа так себя ведёт. Потом строим уход под конкретную ситуацию.' },
              { icon: 'Layers', title: 'Меньше — лучше', desc: 'Убираю лишнее. 4–6 хорошо подобранных средств работают лучше, чем 15 случайных.' },
              { icon: 'RefreshCw', title: 'Уход меняется вместе с кожей', desc: 'Протокол — живой документ. Корректируем его по мере изменений: сезон, стресс, гормоны.' },
            ].map((item, i) => (
              <div key={i} className="p-10" style={{ backgroundColor: 'var(--cream)' }}>
                <div className="mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--beige)', width: '40px', height: '40px' }}>
                  <Icon name={item.icon as 'Scan'} size={18} color="var(--olive)" fallback="Star" />
                </div>
                <h3 className="font-cormorant font-light mb-4" style={{ fontSize: '22px', color: 'var(--dark)', lineHeight: '1.3' }}>
                  {item.title}
                </h3>
                <p className="font-golos font-light leading-relaxed"
                  style={{ color: 'var(--stone)', fontSize: '14px', lineHeight: '1.7' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ backgroundColor: 'var(--dark)', padding: '110px 0' }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="mb-20">
            <p className="font-golos font-light mb-5 tracking-widest uppercase"
              style={{ color: 'var(--olive-light)', fontSize: '11px', letterSpacing: '0.22em' }}>
              Как это работает
            </p>
            <h2 className="font-cormorant font-light"
              style={{ fontSize: 'clamp(32px, 4vw, 50px)', color: 'var(--cream)', lineHeight: '1.2' }}>
              Три шага<br /><em style={{ color: 'var(--nude)' }}>к понятному уходу</em>
            </h2>
          </div>

          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-12 py-10 items-start"
                style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: i === STEPS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <span className="font-cormorant font-light flex-shrink-0"
                  style={{ fontSize: '13px', color: 'var(--stone)', letterSpacing: '0.05em', paddingTop: '6px' }}>
                  {step.number}
                </span>
                <div className="flex-1 grid md:grid-cols-2 gap-6">
                  <h3 className="font-cormorant font-light" style={{ fontSize: '28px', color: 'var(--cream)' }}>
                    {step.title}
                  </h3>
                  <p className="font-golos font-light leading-relaxed"
                    style={{ color: 'var(--stone)', fontSize: '15px', lineHeight: '1.7' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" style={{ backgroundColor: 'var(--beige)', padding: '110px 0' }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-golos font-light mb-5 tracking-widest uppercase"
                style={{ color: 'var(--olive)', fontSize: '11px', letterSpacing: '0.22em' }}>
                Результат
              </p>
              <h2 className="font-cormorant font-light mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 50px)', color: 'var(--dark)', lineHeight: '1.2' }}>
                Что вы получите<br /><em>на выходе</em>
              </h2>
              <p className="font-golos font-light leading-relaxed"
                style={{ color: 'var(--stone)', fontSize: '15px', lineHeight: '1.7' }}>
                Системный уход — это не про идеальную кожу завтра.
                Это про понимание своей кожи и уверенность в том, что вы делаете всё правильно.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {RESULTS.map((result, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <Icon name="Check" size={16} color="var(--olive)" />
                  <p className="font-golos font-light"
                    style={{ color: 'var(--dark)', fontSize: '15px', lineHeight: '1.5' }}>
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ backgroundColor: 'var(--cream)', padding: '110px 0' }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <p className="font-golos font-light mb-5 tracking-widest uppercase"
              style={{ color: 'var(--olive)', fontSize: '11px', letterSpacing: '0.22em' }}>
              Тарифы
            </p>
            <h2 className="font-cormorant font-light"
              style={{ fontSize: 'clamp(32px, 4vw, 50px)', color: 'var(--dark)', lineHeight: '1.2' }}>
              Выберите формат<br /><em>работы</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRICING.map((plan, i) => (
              <div key={i} className="p-10 flex flex-col"
                style={{
                  backgroundColor: plan.accent ? 'var(--dark)' : 'var(--beige)',
                  border: plan.accent ? 'none' : '1px solid var(--nude)',
                }}>
                {plan.accent && (
                  <div className="mb-6">
                    <span className="font-golos font-light px-3 py-1"
                      style={{ backgroundColor: 'var(--olive)', color: 'var(--cream)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      Рекомендую
                    </span>
                  </div>
                )}
                <p className="font-golos font-light mb-2 tracking-wide uppercase"
                  style={{ color: plan.accent ? 'var(--nude)' : 'var(--stone)', fontSize: '11px', letterSpacing: '0.18em' }}>
                  {plan.name}
                </p>
                <p className="font-cormorant font-light mb-4"
                  style={{ fontSize: '40px', color: plan.accent ? 'var(--cream)' : 'var(--dark)' }}>
                  {plan.price}
                </p>
                <p className="font-golos font-light mb-8 leading-relaxed"
                  style={{ color: 'var(--stone)', fontSize: '14px', lineHeight: '1.6' }}>
                  {plan.description}
                </p>
                <div className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.includes.map((item, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={14} color={plan.accent ? 'var(--olive-light)' : 'var(--olive)'} />
                      </div>
                      <span className="font-golos font-light"
                        style={{ color: plan.accent ? 'var(--cream)' : 'var(--dark)', fontSize: '14px', opacity: 0.85 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <a href="#diagnostic"
                  className="inline-flex items-center justify-center gap-2 py-4 font-golos font-light transition-all duration-300 hover:opacity-80"
                  style={{
                    backgroundColor: plan.accent ? 'var(--btn)' : 'var(--btn)',
                    color: 'var(--cream)',
                    fontSize: '13px',
                    letterSpacing: '0.06em',
                  }}>
                  {plan.accent ? 'Начать сопровождение' : 'Записаться на диагностику'}
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic CTA */}
      <section id="diagnostic" style={{ backgroundColor: 'var(--beige)', padding: '120px 0' }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
          <p className="font-golos font-light mb-5 tracking-widest uppercase"
            style={{ color: 'var(--olive)', fontSize: '11px', letterSpacing: '0.22em' }}>
            Начать
          </p>
          <h2 className="font-cormorant font-light mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', color: 'var(--dark)', lineHeight: '1.2' }}>
            Разберёмся в вашей коже<br /><em>вместе</em>
          </h2>
          <p className="font-golos font-light leading-relaxed mb-12 mx-auto max-w-lg"
            style={{ color: 'var(--stone)', fontSize: '16px', lineHeight: '1.7' }}>
            Первый шаг — диагностика. Я смотрю на вашу кожу, ваш образ жизни и текущий уход,
            и составляю программу, которая подходит именно вам.
          </p>

          <div className="flex flex-col gap-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-5 py-4 font-golos font-light outline-none transition-all"
              style={{
                border: '1px solid var(--nude)',
                color: 'var(--dark)',
                fontSize: '15px',
                backgroundColor: 'var(--cream)',
              }}
            />
            <input
              type="tel"
              placeholder="Телефон или Telegram"
              className="w-full px-5 py-4 font-golos font-light outline-none transition-all"
              style={{
                border: '1px solid var(--nude)',
                color: 'var(--dark)',
                fontSize: '15px',
                backgroundColor: 'var(--cream)',
              }}
            />
            <button
              className="w-full py-4 font-golos font-light transition-all duration-300 hover:opacity-85 flex items-center justify-center gap-2 mt-1"
              style={{
                backgroundColor: 'var(--btn)',
                color: 'var(--cream)',
                fontSize: '14px',
                letterSpacing: '0.06em',
              }}>
              Записаться на диагностику
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <p className="font-golos font-light mt-6"
            style={{ color: 'var(--stone)', fontSize: '13px' }}>
            Отвечу в течение дня и подберём удобное время
          </p>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ backgroundColor: 'var(--olive)', padding: '70px 0' }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-cormorant font-light text-4xl mb-2" style={{ color: 'var(--cream)' }}>
              Есть вопросы?
            </h3>
            <p className="font-golos font-light" style={{ color: 'rgba(247,244,239,0.7)', fontSize: '15px' }}>
              Напишите — отвечу и помогу разобраться, с чего начать
            </p>
          </div>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 font-golos font-light transition-all duration-300 hover:opacity-85"
            style={{ backgroundColor: 'var(--cream)', color: 'var(--dark)', fontSize: '14px', letterSpacing: '0.04em' }}>
            <Icon name="MessageCircle" size={18} />
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--dark)', padding: '48px 0' }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant font-light text-xl tracking-widest uppercase"
            style={{ color: 'var(--cream)', letterSpacing: '0.18em' }}>
            Skin Expert
          </span>
          <div className="flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href}
                className="font-golos font-light transition-opacity hover:opacity-70"
                style={{ color: 'var(--stone)', fontSize: '12px', letterSpacing: '0.05em' }}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-golos font-light" style={{ color: 'var(--stone)', fontSize: '12px' }}>
            © 2024
          </p>
        </div>
      </footer>

    </div>
  );
}