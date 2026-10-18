// Loads the active client's config and texts from clients/<slug>/.
const configs = import.meta.glob('../../clients/*/site.config.json', { eager: true, import: 'default' });
const contents = import.meta.glob('../../clients/*/content/*.json', { eager: true, import: 'default' });

export const CLIENT = process.env.CLIENT ?? 'bakkerij-lieven';
export const PREVIEW = process.env.PREVIEW === '1';

const config = configs[`../../clients/${CLIENT}/site.config.json`];
if (!config) throw new Error(`No client "${CLIENT}" in clients/. Check the CLIENT env var.`);
export const site = config;

// Slug of the online-order page (clients with an "order" block only).
export const ORDER_PAGE = 'bestellen';

export const languages = config.languages ?? ['nl'];
export const defaultLanguage = languages[0];

export function content(lang) {
  const c = contents[`../../clients/${CLIENT}/content/${lang}.json`];
  if (!c) throw new Error(`Missing clients/${CLIENT}/content/${lang}.json`);
  return c;
}

// page: '' (home) or 'privacy'; lang: language code
export function href(page, lang = defaultLanguage) {
  const prefix = lang === defaultLanguage ? '' : `${lang}`;
  const name = [prefix, page].filter(Boolean).join('-');
  if (PREVIEW) return `./${name || 'index'}.html`;
  return `/${name}`;
}

export function telHref(phone) {
  return 'tel:' + phone.replace(/[^\d+]/g, '').replace(/^0/, '+32');
}
export function waHref(phone) {
  return 'https://wa.me/' + phone.replace(/[^\d]/g, '').replace(/^0/, '32');
}
export function mapsLink(c) {
  const q = encodeURIComponent(`${c.address.street}, ${c.address.postcode} ${c.address.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}
