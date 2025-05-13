import { loadScript } from './aem.js';

window.dataLayer = window.dataLayer || [];

export function pageView() {
  window.dataLayer.push({
    event: 'pageView',
    page_name: document.title,
    page_path: window.location.pathname,
  });
}

async function loadGTM(i, l = 'dataLayer') {
  window[l] = window[l] || [];
  window[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const dl = l !== 'dataLayer' ? '&l=' + l : '';
  await loadScript('https://www.googletagmanager.com/gtm.js?id=' + i + dl, { async: true });
}

export default async function loadMartech() {
  try {
    await loadGTM('GTM-KZHVNXXT');
  } catch (e) {
    console.log('Error loading GTM', e);
  }
}
