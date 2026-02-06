const toggle = document.querySelector('.nav-toggle')
const nav = document.getElementById('primary-nav')
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.getAttribute('data-state') === 'open'
    nav.setAttribute('data-state', open ? 'closed' : 'open')
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true')
  })
}
const banner = document.getElementById('cookie-banner')
const modal = document.getElementById('cookie-modal')
function getPrefs() {
  try {
    const v = localStorage.getItem('cookiePrefs')
    return v ? JSON.parse(v) : null
  } catch (e) {
    return null
  }
}
function setPrefs(p) {
  try {
    localStorage.setItem('cookiePrefs', JSON.stringify(p))
  } catch (e) {}
}
function hideBanner() {
  if (banner) banner.style.display = 'none'
}
function showBanner() {
  if (banner) banner.style.display = ''
}
function openModal() {
  if (modal) modal.setAttribute('aria-hidden', 'false')
}
function closeModal() {
  if (modal) modal.setAttribute('aria-hidden', 'true')
}
const existing = getPrefs()
if (existing && existing.accepted) {
  hideBanner()
} else {
  showBanner()
}
if (banner) {
  banner.addEventListener('click', (e) => {
    const t = e.target
    if (!(t instanceof HTMLElement)) return
    const act = t.getAttribute('data-action')
    if (act === 'manage') {
      openModal()
    }
    if (act === 'accept') {
      setPrefs({ accepted: true, categories: { performance: true, personalization: true, marketing: true } })
      hideBanner()
      closeModal()
    }
  })
}
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })
  const form = modal.querySelector('.prefs-form')
  const btnClose = modal.querySelector('[data-action="close"]')
  if (btnClose) btnClose.addEventListener('click', closeModal)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const perf = form.querySelector('input[name="performance"]')
      const pers = form.querySelector('input[name="personalization"]')
      const mark = form.querySelector('input[name="marketing"]')
      const categories = {
        performance: perf && perf.checked,
        personalization: pers && pers.checked,
        marketing: mark && mark.checked
      }
      setPrefs({ accepted: true, categories })
      hideBanner()
      closeModal()
    })
  }
}

