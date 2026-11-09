/**
 * TOZEUR EXPERIENCE — SCRIPT PRINCIPAL
 * Site vitrine statique (Frontend exclusif sans formulaire) :
 * Consultation des programmes détaillés, photothèque avec lightbox et filtres.
 */

// Données des expériences authentiques proposées par Tozeur Experience
const experiencesData = [
  {
    id: 1,
    category: 'oasis',
    tag: 'Oasis de montagne',
    title: 'Chebika, Tamerza et les Canyons de Midès',
    shortDesc: 'Une traversée des trois oasis de montagne accrochées aux reliefs rocailleux de la frontière algérienne. Sources naturelles, cascades d’eau douce et failles géologiques spectaculaires.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    duration: '1 journée',
    departure: 'Tozeur (prise en charge sur votre lieu de séjour)',
    transport: '4x4 tout-terrain avec chauffeur-guide natif',
    included: [
      'Chauffeur-guide local expérimenté et bilingue',
      'Véhicule 4x4 climatisé avec carburant',
      'Droits d’accès aux sites naturels',
      'Déjeuner traditionnel du Djerid dans une auberge de montagne',
      'Eau minérale et pauses thé aux herbes sahariennes'
    ],
    itinerary: [
      { time: 'Matin', title: 'Oasis de Chebika', desc: 'Marche le long du cours d’eau jusqu’à la source naturelle et sa cascade au creux des roches ocres.' },
      { time: 'Midi', title: 'Tamerza & Déjeuner', desc: 'Découverte du vieux village berbère en ruines, de la grande cascade et repas aux saveurs locales.' },
      { time: 'Après-midi', title: 'Gorges de Midès', desc: 'Balade au bord des canyons vertigineux ayant servi de décor naturel au film Le Patient Anglais.' },
      { time: 'Fin de journée', title: 'Retour par le Chott', desc: 'Traversée panoramique avec vue sur les étendues arides du Chott el Gharsa.' }
    ],
    gear: 'Chaussures de marche confortables, lunettes de soleil, chapeau et protection solaire.'
  },
  {
    id: 2,
    category: 'desert',
    tag: 'Désert & Cinéma',
    title: 'Safari 4x4 à Ong Jemel & Cités de Star Wars',
    shortDesc: 'Franchissement des crêtes de dunes du Grand Erg pour rejoindre le piton rocheux en cou de chameau (Ong Jemel) et la cité légendaire de Mos Espa, préservée dans les sables.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    duration: 'Demi-journée (après-midi jusqu’au crépuscule)',
    departure: 'Tozeur',
    transport: '4x4 tout-terrain franchisseur',
    included: [
      'Pilote-guide certifié expert des pistes sablonneuses',
      'Visite libre du site de tournage de Mos Espa (Tatooine)',
      'Pause thé traditionnel sur les braises au coucher du soleil',
      'Assurance transport touristique'
    ],
    itinerary: [
      { time: '14:30', title: 'Piste saharienne', desc: 'Départ de Tozeur et franchissement des premières dunes dorées de Nefta.' },
      { time: '16:00', title: 'Le Rocher d’Ong Jemel', desc: 'Point de vue panoramique à 360 degrés sur l’immensité désertique.' },
      { time: '17:00', title: 'Les Décors de Mos Espa', desc: 'Immersion au cœur des coupoles troglodytiques et allées de l’univers Star Wars.' },
      { time: '18:15', title: 'Coucher de soleil', desc: 'Thé à la menthe préparé sur la cendre pendant que le soleil enflamme les crêtes de sable.' }
    ],
    gear: 'Vêtements légers en coton, coupe-vent en soirée, appareil photographique.'
  },
  {
    id: 3,
    category: 'quad',
    tag: 'Sensations & Dunes',
    title: 'Raid en Quads sur les Crêtes de Tozeur',
    shortDesc: 'Une immersion sportive et sécurisée sur les reliefs de sable fin et les pistes du reg. Encadrement attentif par nos moniteurs pour allier liberté de pilotage et sérénité.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    duration: '1h30 à 3h selon formule',
    departure: 'Base Aventure Tozeur Experience',
    transport: 'Quads récents 300cc/450cc automatiques',
    included: [
      'Quad entretenu et vérifié avant chaque sortie',
      'Casque homologué, charlotte d’hygiène et lunettes anti-poussière',
      'Guide ouvreur et accompagnateur serre-file',
      'Pause rafraîchissement au sommet d’une dune panoramique'
    ],
    itinerary: [
      { time: 'Étape 1', title: 'Accueil et équipement', desc: 'Briefing complet sur les commandes, consignes de sécurité et prise en main sur circuit d’essai.' },
      { time: 'Étape 2', title: 'Parcours saharien', desc: 'Évolution en convoi adapté à votre rythme entre dunes vierges et pistes d’argile.' },
      { time: 'Étape 3', title: 'Halte contemplative', desc: 'Arrêt au sommet d’un belvédère naturel pour apprécier le silence du désert et faire des photos.' }
    ],
    gear: 'Pantalon long, chaussures fermées de type baskets, lunettes de soleil.'
  },
  {
    id: 4,
    category: 'velo',
    tag: 'Écotourisme',
    title: 'Balade à Vélo dans la Palmeraie & Médina d’Argile',
    shortDesc: 'Pédalez dans la fraîcheur ombragée de 200 000 palmiers dattiers, longez les séguias d’irrigation séculaires et explorez les ruelles en briques d’argile du quartier d’Ouled El Hadef.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
    duration: '2h30 à 3h',
    departure: 'Agence Tozeur Experience (Face au Zoo du Sahara)',
    transport: 'VTT récents et confortables avec casque',
    included: [
      'Vélo tout-terrain réglé à votre taille',
      'Guide natif partageant l’histoire de l’oasis et de la datte Deglet Nour',
      'Halte dégustation de dattes fraîches chez un cultivateur local',
      'Eau minérale pour la balade'
    ],
    itinerary: [
      { time: 'Départ', title: 'Mise en selle à l’agence', desc: 'Réglage des vélos et départ direct vers les sentiers de terre de l’oasis.' },
      { time: 'Parcours', title: 'La vie de l’oasis', desc: 'Explication du génial partage de l’eau conçu par Ibn Chabbat et culture des dattiers.' },
      { time: 'Médina', title: 'Ouled El Hadef', desc: 'Flânerie à bicyclette dans la vieille ville aux façades ouvragées en briques de terre cuite.' }
    ],
    gear: 'Tenue décontractée, chaussures plates, chapeau ou casquette.'
  },
  {
    id: 5,
    category: 'bivouac',
    tag: 'Astronomie & Nuit saharienne',
    title: 'Nuit Astronomique en Bivouac sous la Voie Lactée',
    shortDesc: 'Une expérience céleste au cœur du désert. Loin de toute pollution lumineuse, admirez un ciel astronomique d’une clarté absolue, dîner nomade et veillée au coin du feu.',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    duration: '2 jours / 1 nuit',
    departure: 'Tozeur (Départ en milieu d’après-midi)',
    transport: '4x4 tout-terrain privatif',
    included: [
      'Transferts aller-retour en 4x4 jusqu’au campement dans les dunes',
      'Hébergement en tentes sahariennes équipées (literie complète et soignée)',
      'Dîner traditionnel du terroir cuit au feu de bois (pain de sable mella, agneau mijoté)',
      'Séance d’observation des constellations à l’œil nu et aux jumelles astronomiques',
      'Petit-déjeuner au lever du soleil sur les dunes'
    ],
    itinerary: [
      { time: 'Jour 1 - 15:30', title: 'Piste vers le campement', desc: 'Traversée des étendues désertiques et installation dans votre tente nomade.' },
      { time: 'Jour 1 - 18:00', title: 'Crépuscule & Dîner nomade', desc: 'Coucher de soleil sur les crêtes suivi du repas traditionnel aux chandelles.' },
      { time: 'Jour 1 - 21:00', title: 'Observation astronomique', desc: 'Contemplation de la Voie Lactée, identification des constellations et silence saharien.' },
      { time: 'Jour 2 - 06:30', title: 'Lever de soleil', desc: 'Lumières dorées sur les dunes, petit-déjeuner copieux et retour tranquille vers Tozeur.' }
    ],
    gear: 'Vêtement chaud pour la nuit (baisse des températures nocturnes dans le désert), lampe frontale.'
  },
  {
    id: 6,
    category: 'desert',
    tag: 'Paysage minéral',
    title: 'Mirages et Cristaux de Sel au Chott El Djerid',
    shortDesc: 'Traversez la plus vaste étendue saline du Sahara. Une plaine blanche de 5 000 km² où l’horizon s’efface sous l’effet des mirages thermiques et des reflets pastel.',
    image: 'https://images.unsplash.com/photo-1473580044384-7ba9967a16a0?auto=format&fit=crop&w=1200&q=80',
    duration: 'Demi-journée (3h30)',
    departure: 'Tozeur',
    transport: 'Véhicule de tourisme climatisé ou 4x4',
    included: [
      'Transport climatisé aller-retour',
      'Guide local expliquant l’histoire géologique du lac préhistorique',
      'Arrêts contemplatifs et explications sur les roses des sables'
    ],
    itinerary: [
      { time: 'Traversée', title: 'La digue du Chott', desc: 'Route surélevée fendant la mer de sel asséchée à perte de vue.' },
      { time: 'Observation', title: 'Mirages et bassins', desc: 'Arrêt photo près des croûtes salines aux nuances roses, mauves et turquoises.' },
      { time: 'Retour', title: 'Portes de Tozeur', desc: 'Halte chez les artisans tailleurs de roses des sables et retour en ville.' }
    ],
    gear: 'Lunettes de soleil à indice élevé indispensable (forte réverbération du sel), chapeau.'
  },
  {
    id: 7,
    category: 'desert',
    tag: 'Tradition nomade',
    title: 'Méharée à Dos de Dromadaire au Crépuscule',
    shortDesc: 'Au pas calme et cadencé du dromadaire, empruntez les sentiers sablonneux comme les caravanes d’autrefois sous la conduite bienveillante de nos chameliers bédouins.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    duration: '2 heures',
    departure: 'Bordure des dunes de Tozeur',
    transport: 'Dromadaire avec selle traditionnelle confortable',
    included: [
      'Dromadaire docile et entretenu',
      'Accompagnateur chamelier natif de la région',
      'Chèche saharien traditionnel prêté pour la balade',
      'Pause thé à la menthe infusé sur les braises'
    ],
    itinerary: [
      { time: 'Départ', title: 'Rencontre avec les chameliers', desc: 'Initiation à la monte et mise en confiance avec l’animal.' },
      { time: 'Balade', title: 'Progression dans le sable', desc: 'Cheminement silencieux au cœur des ondulations dorées.' },
      { time: 'Coucher du soleil', title: 'La pause thé', desc: 'Halte au sommet d’une dune pour contempler le ciel changeant.' }
    ],
    gear: 'Pantalon souple, chaussures fermées.'
  },
  {
    id: 8,
    category: 'oasis',
    tag: 'Oasis & Histoire',
    title: 'Circuit Combiné Oasis, Palmiers & Vieux Ksour',
    shortDesc: 'Une journée complète associant l’oasis de montagne de Chebika, le site d’Ong Jemel et une immersion dans la palmeraie historique de Tozeur.',
    image: 'assets/banner-panoramic.jpg',
    duration: '1 journée complète',
    departure: 'Tozeur',
    transport: '4x4 tout-terrain privatif',
    included: [
      'Chauffeur-guide dédié pour la journée',
      'Véhicule 4x4 climatisé',
      'Déjeuner du terroir dans une maison d’hôtes oasienne',
      'Eau minérale et rafraîchissements'
    ],
    itinerary: [
      { time: 'Matin', title: 'Les reliefs de Chebika', desc: 'Ascension douce vers la gorge rocheuse et sa source.' },
      { time: 'Midi', title: 'Repas oasien', desc: 'Halte gastronomique sous les palmiers avec spécialités régionales.' },
      { time: 'Après-midi', title: 'Ong Jemel & Dunes', desc: 'Franchissement des sables jusqu’aux décors sahariens.' }
    ],
    gear: 'Tenue confortable et chaussures de marche.'
  }
];

// Photothèque
const galleryPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    title: 'Voie Lactée au-dessus des dunes',
    category: 'astronomie',
    caption: 'La pureté astronomique des nuits sahariennes dans le Grand Erg.'
  },
  {
    src: 'assets/banner-panoramic.jpg',
    title: 'Traversée des dunes en 4x4',
    category: 'desert',
    caption: 'Nos véhicules tout-terrain sur les pistes du Grand Erg saharien.'
  },
  {
    src: 'assets/flag-banner.jpg',
    title: 'L’agence Tozeur Experience',
    category: 'agence',
    caption: 'Boutique d’accueil située en plein cœur de Tozeur, face au Zoo du Sahara.'
  },
  {
    src: 'assets/store-inside.jpg',
    title: 'Flotte de vélos tout-terrain',
    category: 'culture',
    caption: 'Vélos révisés et entretenus pour l’exploration de la palmeraie et de la vieille médina.'
  },
  {
    src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    title: 'Cascade de Chebika',
    category: 'oasis',
    caption: 'L’eau douce et limpide qui jaillit des roches ocres de l’oasis de montagne.'
  },
  {
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    title: 'Raid quads dans les sables',
    category: 'sensations',
    caption: 'Parcours encadré sur les crêtes de sable fin du Djerid.'
  },
  {
    src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    title: 'Caravane au coucher du soleil',
    category: 'desert',
    caption: 'L’allure noble des dromadaires et la lumière dorée de fin d’après-midi.'
  },
  {
    src: 'https://images.unsplash.com/photo-1473580044384-7ba9967a16a0?auto=format&fit=crop&w=1200&q=80',
    title: 'Horizon du Chott El Djerid',
    category: 'desert',
    caption: 'La mer de sel asséchée aux reflets pastel et aux mirages saisissants.'
  }
];

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderExperiences('all');
  initExperienceTabs();
  renderGallery('all');
  initGalleryTabs();
});

// 1. Navigation
function initNavigation() {
  const nav = document.getElementById('main-nav');
  const toggleBtn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
      });
    });
  }
}

// 2. Rendu des cartes d'expérience
function renderExperiences(filter = 'all') {
  const container = document.getElementById('experiences-container');
  if (!container) return;

  const list = filter === 'all' 
    ? experiencesData 
    : experiencesData.filter(item => item.category === filter);

  container.innerHTML = list.map(item => `
    <article class="editorial-card rounded-lg overflow-hidden flex flex-col justify-between">
      <div>
        <div class="img-zoom-wrap h-64 w-full relative bg-stone-100">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="w-full h-full object-cover"
            loading="lazy"
            onerror="this.onerror=null; this.src='assets/banner-panoramic.jpg';"
          />
          <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold tracking-wider uppercase text-stone-800">
            ${item.tag}
          </div>
        </div>

        <div class="p-6">
          <div class="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-1">
            ${item.duration} &nbsp;·&nbsp; ${item.departure.split('(')[0].trim()}
          </div>
          <h3 class="text-xl font-serif font-bold text-[#241810] leading-snug">
            ${item.title}
          </h3>
          <p class="text-stone-600 text-sm mt-3 leading-relaxed">
            ${item.shortDesc}
          </p>
        </div>
      </div>

      <div class="px-6 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between">
        <button 
          onclick="openExperienceModal(${item.id})" 
          class="link-editorial text-xs text-[#241810] hover:text-[#C07026]"
        >
          Consulter le programme →
        </button>
        <span class="text-xs text-stone-400 font-medium">Tozeur</span>
      </div>
    </article>
  `).join('');
}

// 3. Onglets de filtrage
function initExperienceTabs() {
  const tabs = document.querySelectorAll('.exp-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderExperiences(filter);
    });
  });
}

// 4. Modale détaillée (Consultation pure)
function openExperienceModal(id) {
  const item = experiencesData.find(exp => exp.id === id);
  if (!item) return;

  const modal = document.getElementById('experience-modal');
  const content = document.getElementById('modal-content-area');

  content.innerHTML = `
    <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900">
      <img 
        src="${item.image}" 
        alt="${item.title}" 
        class="w-full h-full object-cover opacity-80"
        onerror="this.onerror=null; this.src='assets/banner-panoramic.jpg';"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#1F1610] via-transparent to-black/20"></div>

      <button 
        onclick="closeExperienceModal()" 
        class="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-stone-900 w-8 h-8 rounded-full flex items-center justify-center transition-colors text-sm font-semibold"
        aria-label="Fermer"
      >
        ✕
      </button>

      <div class="absolute bottom-6 left-6 right-6 text-white">
        <span class="text-xs uppercase tracking-wider text-amber-300 font-semibold block mb-1">
          ${item.tag}
        </span>
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
          ${item.title}
        </h2>
        <div class="flex items-center gap-4 mt-2 text-xs text-stone-300">
          <span>Durée : ${item.duration}</span>
          <span>·</span>
          <span>${item.transport}</span>
        </div>
      </div>
    </div>

    <div class="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
      <div>
        <h4 class="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-2">Description</h4>
        <p class="text-stone-700 text-sm leading-relaxed">
          ${item.shortDesc}
        </p>
      </div>

      <div>
        <h4 class="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-3">Déroulement</h4>
        <div class="space-y-3 border-l border-stone-200 pl-4 ml-1">
          ${item.itinerary.map(step => `
            <div>
              <span class="text-xs font-bold text-[#C07026]">${step.time} — ${step.title}</span>
              <p class="text-xs text-stone-600 mt-0.5">${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs">
        <div>
          <h4 class="uppercase tracking-wider text-stone-400 font-semibold mb-2">Ce qui est inclus</h4>
          <ul class="space-y-1.5 text-stone-700">
            ${item.included.map(inc => `<li>· ${inc}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4 class="uppercase tracking-wider text-stone-400 font-semibold mb-2">À prévoir</h4>
          <p class="text-stone-600 leading-relaxed">
            ${item.gear}
          </p>
        </div>
      </div>
    </div>

    <div class="p-6 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
      <span class="text-xs text-stone-500">Départ quotidien · En face du Zoo du Sahara</span>
      <button 
        onclick="closeExperienceModal()" 
        class="btn-primary text-xs px-6 py-2"
      >
        Fermer
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.classList.add('overflow-hidden');
}

function closeExperienceModal() {
  const modal = document.getElementById('experience-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
}

// 5. Rendu de la photothèque
function renderGallery(filter = 'all') {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  const list = filter === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(img => img.category === filter);

  container.innerHTML = list.map(item => `
    <div 
      onclick="openLightbox('${item.src}', '${item.title.replace(/'/g, "\\'")}', '${item.caption.replace(/'/g, "\\'")}')" 
      class="group relative h-64 rounded-md overflow-hidden bg-stone-100 cursor-pointer"
    >
      <img 
        src="${item.src}" 
        alt="${item.title}" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        onerror="this.onerror=null; this.src='assets/banner-panoramic.jpg';"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
        <h4 class="text-sm font-serif font-bold">${item.title}</h4>
        <p class="text-[11px] text-stone-300 mt-0.5 line-clamp-1">${item.caption}</p>
      </div>
    </div>
  `).join('');
}

function initGalleryTabs() {
  const tabs = document.querySelectorAll('.gallery-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderGallery(filter);
    });
  });
}

// 6. Lightbox
function openLightbox(src, title, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-image');
  const t = document.getElementById('lightbox-caption-title');
  const c = document.getElementById('lightbox-caption-text');

  img.src = src;
  t.textContent = title;
  c.textContent = caption;

  modal.classList.add('active');
  document.body.classList.add('overflow-hidden');
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
}
