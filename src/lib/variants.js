// The three base looks. A client can override colors/fonts in site.config.json.
// Fonts load from Bunny Fonts (EU-hosted, GDPR-friendly drop-in for Google Fonts);
// preview builds use Google Fonts because that is what the preview host allows.
export const variants = {
  ambacht: {
    label: 'Ambacht (warm, artisanaal)',
    fonts: { display: 'Young Serif', body: 'Figtree' },
    colors: { bg: '#fbf6ec', surface: '#f2e6cf', text: '#2b1d12', muted: '#6e5a48', primary: '#5a3417', accent: '#e9b949', onPrimary: '#fbf6ec' },
  },
  studio: {
    label: 'Studio (licht, modern)',
    fonts: { display: 'Bricolage Grotesque', body: 'Instrument Sans' },
    colors: { bg: '#f7f5f3', surface: '#ebe4e1', text: '#1f1a1d', muted: '#6b6067', primary: '#4a2742', accent: '#c98b86', onPrimary: '#f7f5f3' },
  },
  vakman: {
    label: 'Vakman (stevig, contrastrijk)',
    fonts: { display: 'Archivo', body: 'Archivo' },
    colors: { bg: '#ffffff', surface: '#eef2f6', text: '#0c1b2e', muted: '#4f5f73', primary: '#0f2f55', accent: '#f6c21c', onPrimary: '#ffffff' },
  },
};

// Weights each family actually ships; asking for a missing weight breaks the whole font request.
const weights = {
  'Young Serif': [400],
  'Figtree': [400, 500, 600, 700, 800],
  'Bricolage Grotesque': [400, 500, 600, 700, 800],
  'Instrument Sans': [400, 500, 600, 700],
  'Archivo': [400, 500, 600, 700, 800, 900],
};

export function fontUrl(fonts, preview) {
  const fams = [...new Set([fonts.display, fonts.body])];
  const w = f => weights[f] ?? [400, 700];
  if (preview) {
    return 'https://fonts.googleapis.com/css2?' + fams.map(f => `family=${f.replace(/ /g, '+')}:wght@${w(f).join(';')}`).join('&') + '&display=swap';
  }
  return 'https://fonts.bunny.net/css?family=' + fams.map(f => `${f.toLowerCase().replace(/ /g, '-')}:${w(f).join(',')}`).join('|') + '&display=swap';
}
