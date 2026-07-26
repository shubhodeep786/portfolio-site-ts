let lenisInstance = null;

export function setLenisInstance(instance) {
  lenisInstance = instance;
}

export function scrollToSection(id, options = {}) {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -80, duration: 1.2, ...options });
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
