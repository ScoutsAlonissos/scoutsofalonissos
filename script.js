/* 1st Alonissos Scout Group — offline-first, dependency-free site interactions. */
(() => {
  'use strict';
  const translations = {
    en: {
      skip: 'Skip to content', navLabel: 'Main navigation',
      brandA: '1ST SCOUT GROUP', brandB: 'OF ALONISSOS',
      navAbout: 'Our group', navActivities: 'What we do', navFilms: 'Our stories', navHome: 'The clubhouse', navContact: 'Contact', joinNav: 'Join our group',
      heroEyebrow: 'ALONISSOS · NORTHERN SPORADES · SINCE 2009',
      heroLine1: 'One island.', heroLine2: 'One group.', heroLine3: 'Endless stories.',
      heroDescription: 'Out on the sea, up in the mountains, behind a camera or helping those around us. We discover the world, starting right here at home.',
      discoverButton: 'Meet the group', exploreButton: 'What we do',
      heroSmall: '1st Scout Group of Alonissos · Scouts of Greece', heroStamp: 'BE<br>PREPARED',
      aboutKicker: 'WHO WE ARE',
      aboutTitle: 'Our island is home. <em>The world is our playground.</em>',
      aboutLead: 'We are the 1st Scout Group of Alonissos. Since 2009, we have grown together, learned by doing, and given back to the island we love.',
      aboutBody: 'Every outing, every volunteering project, every small or big creation is a chance to try something new — always as a team.',
      photoGroup: 'Our group together', aboutSticker: 'ONE BIG<br>SCOUT FAMILY',
      since: 'WHERE IT BEGAN', oneIsland: 'ISLAND, MANY STORIES', allAdventures: 'ADVENTURES',
      activitiesKicker: 'SCOUTING IN ACTION', activitiesTitle: 'Never <em>standing still.</em>',
      activitiesIntro: 'From the Marine Park to the island’s paths and streets, every idea can become a new adventure.',
      natureTag: 'OUR NATURAL WORLD', natureTitle: 'With nature, with respect.', natureBody: 'We discover and protect the marine life, shores and woodlands of our island.',
      filmTag: 'LOCAL STORIES', filmTitle: 'Behind the camera.', filmBody: 'We make films, explore local history and listen to people with stories to share.',
      giveTag: 'FOR OUR ISLAND', giveTitle: 'Turning care into action.', giveBody: 'Cleanups, partnerships, caring for people and animals: small actions that make a difference.',
      adventureTag: 'OUT IN THE WORLD', adventureTitle: 'Following adventure.', adventureBody: 'Hikes, camps, new skills and friendships that last long after the trip ends.',
      filmsKicker: 'STORIES WE TELL', filmsTitle: 'Our island has <em>a voice.</em> We hold the camera.',
      filmsBody: 'We discover our home through the people who live here, its nature and its stories. Our first documentary explores the natural wealth of Alonissos and Northern Sporades National Marine Park.',
      filmVisualLabel: 'FROM ISLAND<br>TO SCREEN ↗', watchFilm: 'Watch our documentary',
      newStoryLabel: 'THE NEXT CHAPTER',
      newStoryBody: 'A new generation of Venture Scouts is researching coastal fishing together with Thalassa Foundation and the Alonissos Fishers Association. Their new film is in production.',
      timeKicker: 'A LITTLE LOGBOOK', timeTitle: 'A few stops <em>along the way.</em>',
      time1Title: 'The beginning', time1Body: 'The 1st Scout Group of Alonissos is founded.',
      time2Title: 'Agrinio · PAPE', time2Body: 'We present research about the Underwater Museum of Alonissos.',
      time3Title: 'Films & creativity', time3Body: 'Cultural gatherings, film screenings and creative projects become part of our journey.',
      time4Title: 'The Volos adventure', time4Body: 'A two-day trip turns into five days when weather delays the journey home.',
      time5Title: 'Stories from the sea', time5Body: 'At PAPE in Trikala, we present our research on coastal fishing.',
      clubKicker: 'INSIDE OUR CLUBHOUSE', clubTitle: 'Our walls have <em>stories of their own.</em>',
      clubIntro: 'Wood, mementos, murals, colors and ideas. Our place changes as we do — and some corners are still being made.',
      woodTitle: 'The wood-paneled room', woodDesc: 'Our memories, badges and stories, right there on the walls.',
      newRoomTitle: 'Our new room', underConstruction: 'WORK IN PROGRESS',
      roomSail: 'Built with imagination and a lot of heart.',
      videoFallback: 'Your browser does not support video playback.',
      posterKicker: 'FROM OUR NOTICEBOARD', posterTitle: 'A little of <em>our colorful world.</em>',
      posterDescription: 'Posters, invitations and little announcements we design for life together. These two moments are from our 2026 archive.',
      posterArchive: 'POSTER ARCHIVE · 2026', posterFishing: 'Researching coastal fishing', posterCake: 'Our New Year cake gathering',
      contactKicker: 'YOUR NEXT ADVENTURE', contactTitle: 'Every new friend,<br>another new story.',
      contactBody: 'Interested in Scouting on Alonissos, joining our group or working together? We would love to hear from you.',
      contactEmail: 'Send us an email',
      footerName: '1st Scout Group of Alonissos', footerAssociation: 'Scouts of Greece', footerMotto: 'EXPLORE · CREATE · GIVE BACK', backToTop: 'BACK TO TOP'
    },
    el: {
      // Greek defaults are in the HTML for SEO, accessibility and a fully usable no-JS page.
      heroStamp: 'ΕΣΟ<br>ΕΤΟΙΜΟΣ', aboutTitle: 'Το νησί είναι το σπίτι μας. <em>Ο κόσμος, η αυλή μας.</em>',
      activitiesTitle: 'Δεν μένουμε <em>ποτέ ακίνητοι.</em>',
      filmsTitle: 'Ο τόπος μας έχει <em>φωνή.</em> Εμείς κρατάμε την κάμερα.',
      filmVisualLabel: 'ΑΠΟ ΤΟ ΝΗΣΙ<br>ΣΤΗΝ ΟΘΟΝΗ ↗',
      timeTitle: 'Μερικές στάσεις <em>στη διαδρομή μας.</em>',
      clubTitle: 'Οι τοίχοι μας έχουν <em>τις δικές τους ιστορίες.</em>',
      posterTitle: 'Λίγο από το χρώμα <em>της παρέας μας.</em>',
      contactTitle: 'Κάθε καινούριος φίλος,<br>μια καινούρια ιστορία.', aboutSticker: 'ΜΙΑ ΜΕΓΑΛΗ<br>ΠΑΡΕΑ'
    }
  };

  // The original Greek strings come directly from the page rather than being duplicated.
  const strings = Array.from(document.querySelectorAll('[data-i18n]'));
  const original = new Map(strings.map(el => [el, el.innerHTML]));
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('languageLabel');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  let currentLang = 'el';

  function setLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'el';
    strings.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (currentLang === 'el') el.innerHTML = original.get(el);
      else if (Object.prototype.hasOwnProperty.call(translations.en, key)) el.innerHTML = translations.en[key];
    });
    document.documentElement.lang = currentLang;
    langLabel.textContent = currentLang === 'el' ? 'EN' : 'EL';
    langToggle.setAttribute('aria-label',currentLang === 'el' ? 'Switch to English' : 'Αλλαγή στα Ελληνικά');
    const mainNav = document.querySelector('.desktop-nav');
    mainNav.setAttribute('aria-label',currentLang === 'el' ? 'Κύρια πλοήγηση' : 'Main navigation');
    mobileNav.setAttribute('aria-label',currentLang === 'el' ? 'Μενού κινητού' : 'Mobile navigation');
    menuToggle.setAttribute('aria-label',currentLang === 'el' ? 'Άνοιγμα μενού' : 'Toggle menu');
    document.title = currentLang === 'el' ? '1ο Σύστημα Προσκόπων Αλοννήσου · Έσο Έτοιμος' : '1st Scout Group of Alonissos · Be Prepared';
    document.querySelector('meta[name="description"]').content = currentLang === 'el'
      ? '1ο Σύστημα Προσκόπων Αλοννήσου. Μια παρέα που εξερευνά, δημιουργεί και προσφέρει στο νησί της από το 2009.'
      : '1st Scout Group of Alonissos. Exploring, creating and giving back to our island since 2009.';
    try { localStorage.setItem('alonissos-site-language', currentLang); } catch (_) {}
  }
  langToggle.addEventListener('click', () => setLanguage(currentLang === 'el' ? 'en' : 'el'));
  try { if (localStorage.getItem('alonissos-site-language') === 'en') setLanguage('en'); } catch (_) {}

  function closeMenu() { mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded','false'); }
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    mobileNav.hidden = isOpen;
    menuToggle.setAttribute('aria-expanded',String(!isOpen));
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e => { if(e.key === 'Escape') closeMenu(); });
  document.addEventListener('click',e => {
    if (!mobileNav.hidden && !mobileNav.contains(e.target) && !menuToggle.contains(e.target)) closeMenu();
  });

  // A light touch of animation, disabled automatically for reduced-motion users.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-ready');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-visible'); observer.unobserve(entry.target);
      }
    },{rootMargin:'0px 0px -35px 0px',threshold:.07});
    document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
  }
})();
