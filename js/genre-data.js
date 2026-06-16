/* ============================================
   CREEPIPASTA HOLLOWMIND — GENRE LISTING DATA
   Base de datos completa de géneros del wiki
   ============================================ */

const HM_GENRES = {
  /* === HISTORICAL SECTIONS === */
  historical: [
    {
      id: 'historical-archive',
      name: 'Historical Archive',
      count: 797,
      description: 'Pastas posted on /x/ and elsewhere before 2013.',
      icon: '📁',
      color: '#8b2a2a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/8/8a/Historical_Archive.png'
    },
    {
      id: 'suggested-reading',
      name: 'Suggested Reading',
      count: 105,
      description: 'Recommended stories that are certified quality.',
      icon: '📖',
      color: '#a03030',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/5/5a/Suggested_Reading.png'
    },
    {
      id: 'potm',
      name: 'PotM',
      count: 134,
      description: 'Stories which have won Pasta of the Month.',
      icon: '🏆',
      color: '#c49a4a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/b/b1/PotM.png'
    },
    {
      id: 'spotlighted',
      name: 'Spotlighted Pastas',
      count: 73,
      description: 'Stories which have been spotlighted by admins.',
      icon: '⭐',
      color: '#d4c5a9',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/7/77/Spotlighted.png'
    },
    {
      id: 'contest-winner',
      name: 'Contest Winner',
      count: 36,
      description: 'Stories which have won wiki writing contests.',
      icon: '🥇',
      color: '#c49a4a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/0/0e/Contest.png'
    },
    {
      id: 'user-stories',
      name: 'User Stories',
      count: 73,
      description: 'A category for wiki authors. See each subcategory for stories by that author.',
      icon: '👥',
      color: '#8b2a2a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/5/5e/User_Stories.png'
    },
    {
      id: 'memes',
      name: 'Memes',
      count: 88,
      description: 'Stories that are well cemented in creepypasta lore or are a certified meme.',
      icon: '😂',
      color: '#8a7e6b',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/3/3e/Memes.png'
    },
    {
      id: 'trollpasta',
      name: 'Trollpasta',
      count: 24,
      description: 'Unserious stories with an ironic edge, designed to mislead.',
      icon: '🤡',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/7/7b/Trollpasta.png'
    }
  ],

  /* === GENRE CATEGORIES === */
  genres: [
    {
      id: 'animals',
      name: 'Animals',
      count: 509,
      description: 'Far from your cute, cuddle-worthy pets, these pastas involve animals.',
      icon: '🐾',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/3/3b/Animals.png'
    },
    {
      id: 'beings',
      name: 'Beings',
      count: 2686,
      description: 'Stories involving some unknown being, often with malicious intent.',
      icon: '👁',
      color: '#8b2a2a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/e/e1/Beings.png'
    },
    {
      id: 'cryptids',
      name: 'Cryptids',
      count: 144,
      description: 'A collection of unsettling cryptozoological-related stories.',
      icon: '🦎',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/b/b8/Cryptids.png'
    },
    {
      id: 'demon-devil',
      name: 'Demon/Devil',
      count: 607,
      description: 'Vile entities from the abyssal depths of Hell.',
      icon: '😈',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/d/d4/Demon.png'
    },
    {
      id: 'ghosts',
      name: 'Ghosts',
      count: 845,
      description: 'How can you have a creepypasta site without ghost stories?',
      icon: '👻',
      color: '#b8a882',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/7/75/Ghosts.png'
    },
    {
      id: 'gods',
      name: 'Gods',
      count: 218,
      description: 'Stories involving eldritch deities.',
      icon: '👁‍🗨',
      color: '#c49a4a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/1/1a/Gods.png'
    },
    {
      id: 'monsters',
      name: 'Monsters',
      count: 1019,
      description: 'Things that go bump in the night.',
      icon: '👹',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/4/47/Monsters.png'
    },
    {
      id: 'christmas',
      name: 'Christmas',
      count: 73,
      description: 'For when the world is silent, the fire crackles, and the snow is splattered in red.',
      icon: '🎄',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/c/c3/Christmas.png'
    },
    {
      id: 'computers-internet',
      name: 'Computers and Internet',
      count: 484,
      description: 'Stories with elements of computer weirdness, like cursed files or websites.',
      icon: '💻',
      color: '#8b2a2a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/6/6e/Computers.png'
    },
    {
      id: 'crime',
      name: 'Crime',
      count: 196,
      description: 'Stories involving or from the perspective of the police.',
      icon: '🔍',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/0/08/Crime.png'
    },
    {
      id: 'diary-journal',
      name: 'Diary/Journal',
      count: 631,
      description: 'Stories with a personal twist, meaning they involve someone\'s diary or journal.',
      icon: '📔',
      color: '#b8a882',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/8/8d/Diary.png'
    },
    {
      id: 'disappearances',
      name: 'Disappearances',
      count: 797,
      description: 'People vanish every day...',
      icon: '🌀',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/5/54/Disappearances.png'
    },
    {
      id: 'dismemberment',
      name: 'Dismemberment',
      count: 1060,
      description: 'Sometimes, in stories, people just go to pieces.',
      icon: '🩸',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/b/b4/Dismemberment.png'
    },
    {
      id: 'dreams-sleep',
      name: 'Dreams/Sleep',
      count: 1011,
      description: 'For stories that involve getting a little shut-eye, then maybe never waking up.',
      icon: '💤',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/7/78/Dreams.png'
    },
    {
      id: 'food',
      name: 'Food',
      count: 80,
      description: 'Food, glorious food! The origins of which may be slightly suspicious...',
      icon: '🍖',
      color: '#8a7e6b',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/e/eb/Food.png'
    },
    {
      id: 'halloween',
      name: 'Halloween',
      count: 112,
      description: 'Stories for the most horrifying time of the year.',
      icon: '🎃',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/5/57/Halloween.png'
    },
    {
      id: 'history',
      name: 'History',
      count: 358,
      description: 'Stories about historic events or settings.',
      icon: '📜',
      color: '#b8a882',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/f/f2/History.png'
    },
    {
      id: 'hospitals',
      name: 'Hospitals',
      count: 102,
      description: 'Stories about or set in hospitals.',
      icon: '🏥',
      color: '#d4c5a9',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/8/80/Hospitals.png'
    },
    {
      id: 'items-objects',
      name: 'Items/Objects',
      count: 808,
      description: 'Stories about dark or mysterious items, or which are centered on a specific object.',
      icon: '⚗',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/4/4f/Items.png'
    },
    {
      id: 'books',
      name: 'Books',
      count: 98,
      description: 'Stories involving some manner of books that aren\'t diaries or journals.',
      icon: '📕',
      color: '#b8a882',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/7/7a/Books.png',
      subcategory: true,
      parent: 'items-objects'
    },
    {
      id: 'mirrors',
      name: 'Mirrors',
      count: 166,
      description: 'Stories that involve mirrors and their strange abilities.',
      icon: '🪞',
      color: '#8a7e6b',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/5/52/Mirrors.png',
      subcategory: true,
      parent: 'items-objects'
    },
    {
      id: 'vehicles',
      name: 'Vehicles',
      count: 196,
      description: 'These stories are either based around vehicles or take place primarily inside them.',
      icon: '🚗',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/e/e4/Vehicles.png',
      subcategory: true,
      parent: 'items-objects'
    },
    {
      id: 'longpasta',
      name: 'Longpasta',
      count: 315,
      description: 'Stories of 50,000 bytes or above (roughly 9000 words).',
      icon: '📖',
      color: '#8b2a2a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/d/d3/Longpasta.png'
    },
    {
      id: 'lovecraftian',
      name: 'Lovecraftian',
      count: 229,
      description: 'IA! IA! This kind of pasta fhtagn for you to read them.',
      icon: '🐙',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/a/a7/Lovecraftian.png'
    },
    {
      id: 'mental-illness',
      name: 'Mental Illness',
      count: 2192,
      description: 'Stories involving mental dysfunction or insanity.',
      icon: '🧠',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/1/15/Mental_Illness.png'
    },
    {
      id: 'micropasta',
      name: 'Micropasta',
      count: 359,
      description: 'Stories of 2000 bytes or below (roughly 300 words).',
      icon: '📝',
      color: '#8a7e6b',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/3/3e/Micropasta.png'
    },
    {
      id: 'military',
      name: 'Military',
      count: 228,
      description: 'Stories set in a military context.',
      icon: '🎖',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/c/c2/Military.png'
    },
    {
      id: 'music',
      name: 'Music',
      count: 177,
      description: '♪~ For stories about music.',
      icon: '🎵',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/9/9f/Music.png'
    },
    {
      id: 'nature',
      name: 'Nature',
      count: 508,
      description: 'Stories involving the natural world, tapping in to your primal fears.',
      icon: '🌲',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/b/ba/Nature.png'
    },
    {
      id: 'nsfw',
      name: 'NSFW',
      count: 290,
      description: 'Stories with explicit topics/descriptions. Reader discretion is advised.',
      icon: '⚠',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/4/4e/NSFW.png'
    },
    {
      id: 'photography',
      name: 'Photography',
      count: 112,
      description: 'Pastas pertaining particularly to peculiar photos.',
      icon: '📷',
      color: '#8a7e6b',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/2/2a/Photography.png'
    },
    {
      id: 'places',
      name: 'Places',
      count: 1497,
      description: 'Stories centered on a specific location.',
      icon: '📍',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/8/89/Places.png'
    },
    {
      id: 'poetry',
      name: 'Poetry',
      count: 185,
      description: 'These stories are the bowtie pasta to the atypical spaghetti of prose pastas.',
      icon: '🖋',
      color: '#b8a882',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/5/5e/Poetry.png'
    },
    {
      id: 'reality',
      name: 'Reality',
      count: 942,
      description: 'Stories made to destroy a pretense about reality you might have had.',
      icon: '🌀',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/a/a7/Reality.png'
    },
    {
      id: 'ritual',
      name: 'Ritual',
      count: 439,
      description: 'All these stories involve rituals; don\'t blame us should anything go wrong.',
      icon: '🕯',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/d/d2/Ritual.png'
    },
    {
      id: 'science',
      name: 'Science',
      count: 499,
      description: 'Everything from insane experiments to scientifically based mind-control are here.',
      icon: '🔬',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/7/7e/Science.png'
    },
    {
      id: 'space',
      name: 'Space',
      count: 168,
      description: 'Stories taking place in or dealing with the final frontier.',
      icon: '🚀',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/8/8f/Space.png'
    },
    {
      id: 'television',
      name: 'Television',
      count: 155,
      description: 'If you\'re looking for TV weirdness, this is your category.',
      icon: '📺',
      color: '#8a7e6b',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/c/c5/Television.png'
    },
    {
      id: 'theory',
      name: 'Theory',
      count: 163,
      description: 'Stories that look at something from a different perspective.',
      icon: '💡',
      color: '#c49a4a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/a/ae/Theory.png'
    },
    {
      id: 'video-games',
      name: 'Video Games',
      count: 130,
      description: 'Generally, these are stories about strange goings-on in video games.',
      icon: '🎮',
      color: '#8b2a2a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/6/6b/Video_Games.png'
    },
    {
      id: 'weird',
      name: 'Weird',
      count: 1008,
      description: 'Stories that can\'t quite be categorized any other way, or that are just genuinely weird.',
      icon: '🔮',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/9/90/Weird.png'
    }
  ],

  /* === OTHER CATEGORIES === */
  other: [
    {
      id: 'collab',
      name: 'Collab',
      count: 6,
      description: 'Multi-author works put together by site users.',
      icon: '🤝',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/3/34/Collab.png'
    },
    {
      id: 'contextual',
      name: 'Contextual',
      count: 80,
      description: 'Pages which provide a significant amount of real-world information or other context regarding their topic.',
      icon: '📋',
      color: '#8a7e6b',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/6/6f/Contextual.png'
    },
    {
      id: 'historical-archive-pd',
      name: 'Historical Archive/PD',
      count: 158,
      description: 'For classic works of literature which have fallen into the public domain.',
      icon: '📜',
      color: '#b8a882',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/f/f6/Historical_PD.png'
    },
    {
      id: 'holders',
      name: 'Holders',
      count: 257,
      description: 'They must never come together, for these are the original Holders series stories.',
      icon: '🔮',
      color: '#7a2020',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/e/ef/Holders.png'
    },
    {
      id: 'lost-episodes',
      name: 'Lost Episodes',
      count: 26,
      description: 'Stories about missing, lost, or otherwise unheard of episodes, movies, or other digital media.',
      icon: '📼',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/4/48/Lost_Episodes.png'
    },
    {
      id: 'pokemon',
      name: 'PokéMon',
      count: 93,
      description: 'Stories involving the many multitudes of \'mons. May Arceus have mercy on your soul.',
      icon: '⚡',
      color: '#c49a4a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/5/58/Pokemon.png'
    },
    {
      id: 'reddit-pastas',
      name: 'Reddit Pastas',
      count: 279,
      description: 'Stories originating from r/nosleep.',
      icon: '📱',
      color: '#8b2a2a',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/2/2d/Reddit.png'
    },
    {
      id: 'videos',
      name: 'Videos',
      count: 3240,
      description: 'Video files and the articles that contain them.',
      icon: '🎬',
      color: '#5a1515',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/8/8c/Videos.png'
    },
    {
      id: 'zelda',
      name: 'Zelda',
      count: 14,
      description: 'Stories involving the Legend of Zelda franchise.',
      icon: '🗡',
      color: '#3a2a18',
      image: 'https://static.wikia.nocookie.net/creepypasta/images/d/db/Zelda.png'
    }
  ]
};

/* Total counts */
HM_GENRES.totalHistorical = HM_GENRES.historical.reduce((sum, g) => sum + g.count, 0);
HM_GENRES.totalGenres = HM_GENRES.genres.reduce((sum, g) => sum + g.count, 0);
HM_GENRES.totalOther = HM_GENRES.other.reduce((sum, g) => sum + g.count, 0);
HM_GENRES.totalAll = HM_GENRES.totalHistorical + HM_GENRES.totalGenres + HM_GENRES.totalOther;
