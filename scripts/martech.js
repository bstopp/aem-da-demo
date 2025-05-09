import { loadScript } from './aem.js';

async function loadGTM(i, l = 'dataLayer') {
  window[l] = window[l] || [];
  window[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const f = document.getElementsByTagName('script')[0];
  const j = document.createElement('script');
  const dl = l !== 'dataLayer' ? '&l=' + l : '';
  await loadScript('https://www.googletagmanager.com/gtm.js?id=' + i + dl, { async: true });
}

export default async function loadMartech() {
  await loadGTM('GTM-KZHVNXXT');
}
