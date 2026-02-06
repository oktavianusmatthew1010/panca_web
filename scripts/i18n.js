;(function () {
  const translations = {
    en: {
      nav: { services: 'Our Services', security: 'PEGE Security', investor: 'Investor Relationship', news: 'News', contact: 'Contact Us' },
      hero: { title: 'Empowering Investments & Capital Market Growth in Indonesia', cta: 'Explore Our Services' },
      services: {
        title: 'Capital Market & Investment Solutions',
        pill: 'Our offerings',
        cards: {
          brokerage: {
            title: 'Brokerage & Underwriting Services',
            desc: 'Licensed brokerage and underwriting services delivered through our regulated securities subsidiary',
          },
          investment: {
            title: 'Investment & Portfolio Management',
            desc: 'Diversify investments across multiple sectors with a focus on long‑term growth.',
          },
          compliance: {
            title: 'Capital Market Compliance',
            desc: 'Regulated operations under Indonesian capital market laws.',
          },
        },
      },
      solutions: {
        pill: 'Our Solutions',
        title: 'NagaX — Online Stock Trading Platform',
        desc: 'Proprietary stock trading platform designed to enable trading for all investors with real‑time market data, beginner‑friendly tools, and a secure trading system.',
        cta: 'Explore More',
      },
      why: {
        title: 'Why Panca Global?',
        items: {
          innovation: { title: 'Innovation', desc: 'Forward‑looking investment strategies.' },
          transparency: { title: 'Transparency', desc: 'Strong governance and disclosure.' },
          prudence: { title: 'Prudence', desc: 'Risk‑aware and sustainable growth approach.' },
        },
      },
      contact: { title: 'Contact Us', phone: 'Phone Call', address: 'Address', email: 'Email' },
      footer: {
        services: { title: 'Our Services', links: { brokerage: 'Brokerage & Underwriting', portfolio: 'Portfolio Management', trading: 'Stock Trading' } },
        legal: { title: 'Legal', links: { privacy: 'Privacy Policy', terms: 'Terms and Conditions', risk: 'Risk Warning' } },
        company: { title: 'Company', links: { about: 'About Us', security: 'Security' } },
        findus: { title: 'Find Us On' },
        copyright: '© Panca Global',
      },
      cookie: {
        message: 'This website uses cookies for performance, personalization, and marketing. See our <a href="#privacy">privacy policy</a>.',
        manage: 'Manage Preferences',
        accept: 'Accept All',
        modal: {
          title: 'Cookie Preferences',
          labels: { performance: 'Performance', personalization: 'Personalization', marketing: 'Marketing' },
          actions: { cancel: 'Cancel', save: 'Save Preferences' },
        },
      },
    },
    id: {
      nav: { services: 'Layanan Kami', security: 'Keamanan PEGE', investor: 'Hubungan Investor', news: 'Berita', contact: 'Hubungi Kami' },
      hero: { title: 'Memberdayakan Investasi & Pertumbuhan Pasar Modal di Indonesia', cta: 'Jelajahi Layanan Kami' },
      services: {
        title: 'Solusi Pasar Modal & Investasi',
        pill: 'Layanan kami',
        cards: {
          brokerage: {
            title: 'Layanan Pialang & Penjamin Emisi',
            desc: 'Layanan pialang dan penjamin emisi berlisensi melalui anak usaha sekuritas kami yang teregulasi',
          },
          investment: {
            title: 'Investasi & Manajemen Portofolio',
            desc: 'Diversifikasi investasi di berbagai sektor dengan fokus pertumbuhan jangka panjang.',
          },
          compliance: {
            title: 'Kepatuhan Pasar Modal',
            desc: 'Operasional teregulasi sesuai hukum pasar modal Indonesia.',
          },
        },
      },
      solutions: {
        pill: 'Solusi Kami',
        title: 'NagaX — Platform Perdagangan Saham Online',
        desc: 'Platform perdagangan saham milik perusahaan yang dirancang untuk semua investor dengan data pasar real-time, alat ramah pemula, dan sistem perdagangan yang aman.',
        cta: 'Pelajari Lebih Lanjut',
      },
      why: {
        title: 'Mengapa Panca Global?',
        items: {
          innovation: { title: 'Inovasi', desc: 'Strategi investasi berwawasan ke depan.' },
          transparency: { title: 'Transparansi', desc: 'Tata kelola dan keterbukaan yang kuat.' },
          prudence: { title: 'Kehati-hatian', desc: 'Pendekatan pertumbuhan berkelanjutan yang sadar risiko.' },
        },
      },
      contact: { title: 'Hubungi Kami', phone: 'Telepon', address: 'Alamat', email: 'Email' },
      footer: {
        services: { title: 'Layanan Kami', links: { brokerage: 'Pialang & Penjamin Emisi', portfolio: 'Manajemen Portofolio', trading: 'Perdagangan Saham' } },
        legal: { title: 'Legal', links: { privacy: 'Kebijakan Privasi', terms: 'Syarat dan Ketentuan', risk: 'Peringatan Risiko' } },
        company: { title: 'Perusahaan', links: { about: 'Tentang Kami', security: 'Keamanan' } },
        findus: { title: 'Temukan Kami Di' },
        copyright: '© Panca Global',
      },
      cookie: {
        message: 'Situs ini menggunakan cookie untuk kinerja, personalisasi, dan pemasaran. Lihat <a href="#privacy">kebijakan privasi</a> kami.',
        manage: 'Kelola Preferensi',
        accept: 'Terima Semua',
        modal: {
          title: 'Preferensi Cookie',
          labels: { performance: 'Kinerja', personalization: 'Personalisasi', marketing: 'Pemasaran' },
          actions: { cancel: 'Batal', save: 'Simpan Preferensi' },
        },
      },
    },
    zh: {
      nav: { services: '我们的服务', security: 'PEGE 安全', investor: '投资者关系', news: '新闻', contact: '联系我们' },
      hero: { title: '赋能印尼的投资与资本市场增长', cta: '探索我们的服务' },
      services: {
        title: '资本市场与投资解决方案',
        pill: '我们的产品',
        cards: {
          brokerage: {
            title: '经纪与承销服务',
            desc: '通过我们受监管的证券子公司提供持牌经纪与承销服务',
          },
          investment: {
            title: '投资与资产组合管理',
            desc: '在多个行业分散投资，专注长期增长。',
          },
          compliance: {
            title: '资本市场合规',
            desc: '依照印尼资本市场法规开展受监管运营。',
          },
        },
      },
      solutions: {
        pill: '我们的解决方案',
        title: 'NagaX — 在线股票交易平台',
        desc: '自主股票交易平台，为所有投资者提供实时市场数据、对新手友好的工具，以及安全的交易系统。',
        cta: '了解更多',
      },
      why: {
        title: '为什么选择 Panca Global？',
        items: {
          innovation: { title: '创新', desc: '前瞻性的投资策略。' },
          transparency: { title: '透明', desc: '稳健的治理与信息披露。' },
          prudence: { title: '审慎', desc: '注重风险与可持续增长的理念。' },
        },
      },
      contact: { title: '联系我们', phone: '电话', address: '地址', email: '邮箱' },
      footer: {
        services: { title: '我们的服务', links: { brokerage: '经纪与承销', portfolio: '资产组合管理', trading: '股票交易' } },
        legal: { title: '法务', links: { privacy: '隐私政策', terms: '条款与条件', risk: '风险提示' } },
        company: { title: '公司', links: { about: '关于我们', security: '安全' } },
        findus: { title: '关注我们' },
        copyright: '© Panca Global',
      },
      cookie: {
        message: '本网站使用 Cookie 以提升性能、个性化与营销。查看我们的<a href="#privacy">隐私政策</a>。',
        manage: '管理偏好',
        accept: '全部接受',
        modal: {
          title: 'Cookie 偏好',
          labels: { performance: '性能', personalization: '个性化', marketing: '营销' },
          actions: { cancel: '取消', save: '保存偏好' },
        },
      },
    },
  }
  function get(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : undefined), obj)
  }
  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en
    document.documentElement.setAttribute('lang', lang)
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n')
      const val = get(dict, key)
      if (val == null) return
      const attr = el.getAttribute('data-i18n-attr')
      if (attr === 'html') {
        el.innerHTML = val
      } else if (attr) {
        el.setAttribute(attr, val)
      } else {
        el.textContent = val
      }
    })
    const sel = document.getElementById('lang-select')
    if (sel && sel.value !== lang) sel.value = lang
    document.querySelectorAll('.lang-flag').forEach((btn) => {
      const v = btn.getAttribute('data-lang')
      btn.setAttribute('aria-pressed', v === lang ? 'true' : 'false')
    })
  }
  function init() {
    const saved = localStorage.getItem('lang') || 'en'
    applyTranslations(saved)
    const sel = document.getElementById('lang-select')
    if (sel) {
      sel.addEventListener('change', (e) => {
        const lang = e.target.value
        localStorage.setItem('lang', lang)
        applyTranslations(lang)
      })
    }
    const flags = document.querySelector('.lang-flags')
    if (flags) {
      flags.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-flag')
        if (!btn) return
        const lang = btn.getAttribute('data-lang')
        if (!lang) return
        localStorage.setItem('lang', lang)
        applyTranslations(lang)
      })
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
