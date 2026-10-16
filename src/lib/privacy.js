// Standard privacy text for a small business site with a contact form and cookieless analytics.
// Template text: have it checked once (see the legal thread) before using it for paying clients.
export function privacyText(lang, site) {
  const l = site.legal, c = site.contact;
  const who = `${l.companyName}, ${c.address.street}, ${c.address.postcode} ${c.address.city} (${l.kbo})`;
  const texts = {
    nl: [
      ['Wie is verantwoordelijk?', `${who} is verantwoordelijk voor de verwerking van je persoonsgegevens via deze website. Vragen? Mail naar ${c.email}.`],
      ['Welke gegevens?', 'Alleen wat je zelf invult in het contactformulier: naam, e-mailadres, telefoonnummer en je bericht.'],
      ['Waarom?', 'Om je vraag te beantwoorden. De rechtsgrond is je eigen verzoek (art. 6.1.b AVG). We gebruiken je gegevens niet voor reclame en verkopen ze niet door.'],
      ['Hoe lang?', 'We bewaren je bericht zolang nodig is om je te helpen, en maximaal twee jaar.'],
      ['Cookies en statistieken', 'Deze website plaatst geen tracking- of reclamecookies. We tellen bezoeken anoniem, zonder cookies en zonder je te volgen.'],
      ['Je rechten', `Je mag je gegevens inkijken, laten verbeteren of laten wissen via ${c.email}. Ben je niet tevreden, dan kan je klacht indienen bij de Gegevensbeschermingsautoriteit (www.gegevensbeschermingsautoriteit.be).`],
    ],
    fr: [
      ['Responsable du traitement', `${who} est responsable du traitement de vos données personnelles via ce site. Questions : ${c.email}.`],
      ['Quelles données ?', 'Uniquement ce que vous indiquez dans le formulaire de contact : nom, e-mail, téléphone et message.'],
      ['Pourquoi ?', 'Pour répondre à votre demande (art. 6.1.b RGPD). Vos données ne sont ni utilisées à des fins publicitaires ni revendues.'],
      ['Combien de temps ?', 'Le temps nécessaire pour traiter votre demande, au maximum deux ans.'],
      ['Cookies et statistiques', 'Ce site ne place aucun cookie de suivi ou publicitaire. Les visites sont comptées de façon anonyme, sans cookies.'],
      ['Vos droits', `Vous pouvez consulter, corriger ou supprimer vos données via ${c.email}. Vous pouvez aussi introduire une plainte auprès de l’Autorité de protection des données (www.autoriteprotectiondonnees.be).`],
    ],
    en: [
      ['Who is responsible?', `${who} is responsible for processing your personal data through this website. Questions: ${c.email}.`],
      ['What data?', 'Only what you enter in the contact form: name, email, phone number and your message.'],
      ['Why?', 'To answer your request (art. 6.1.b GDPR). We do not use your data for advertising and never sell it.'],
      ['How long?', 'As long as needed to help you, and at most two years.'],
      ['Cookies and statistics', 'This website sets no tracking or advertising cookies. Visits are counted anonymously, without cookies.'],
      ['Your rights', `You can view, correct or delete your data via ${c.email}. You can also file a complaint with the Belgian Data Protection Authority (www.dataprotectionauthority.be).`],
    ],
  };
  return texts[lang];
}
