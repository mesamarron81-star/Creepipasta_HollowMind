/* ============================================
   CREEPIPASTA HOLLOWMIND — WIKI ARCHIVE DATA
   Datos completos scrappeados del Creepypasta Wiki
   Incluye: nombre, imagen, descripción, categoría
   ============================================ */

const HM_WIKI_ARCHIVE = {

  historical: {
    id: 'historical-archive',
    name: 'Historical Archive',
    description: 'Older pastas from December 31, 2012 or earlier. Many are reposts from 4chan\'s /x/ board.',
    icon: '📁',
    totalItems: 797,
    entries: [
      { name: "BEN Drowned", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a1/BEN_Drowned.jpg/revision/latest?cb=20120604212028", description: "A creepypasta about a haunted copy of The Legend of Zelda: Majora's Mask purchased at a garage sale. The cartridge contains a haunted save file from a player named BEN." },
      { name: "The Russian Sleep Experiment", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8b/Cccp_rust.jpg/revision/latest?cb=20100908203303", description: "Russian researchers in the late 1940s kept five people awake for fifteen days using an experimental gas-based stimulant. The subjects descended into madness and self-mutilation." },
      { name: "Candle Cove", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b3/Candlecovestorytelling.jpg/revision/latest?cb=20110709005001", description: "A creepypasta by Kris Straub presented as a forum discussion about a strange local TV programme from the early 70s called Candle Cove." },
      { name: "The Rake", image: "https://static.wikia.nocookie.net/creepypasta/images/0/04/The_Rake.jpg/revision/latest?cb=20130731220054", description: "During the summer of 2003, events in the northeastern United States involving a strange, human-like creature sparked brief local media interest before an apparent blackout." },
      { name: "NoEnd House", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0b/20090227001613_2008-08-17_0542-1-.jpg/revision/latest?cb=20121104230637", description: "A building with nine rooms where reaching the final room wins $500. No one has ever reached the final exit. The narrator experiences increasingly terrifying rooms." },
      { name: "Normal Porn for Normal People", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a2/Normal_Porn_for_Normal_People.png/revision/latest?cb=20120604205054", description: "A creepypasta about an ordinary website with a peculiar name that contains disturbing videos with cryptic titles." },
      { name: "Squidward's Suicide", image: "https://static.wikia.nocookie.net/creepypasta/images/e/ef/Squidward%27s_Suicide_Title_Card.jpg/revision/latest?cb=20110919073156", description: "An intern at Nickelodeon Studios describes viewing a corrupted episode of SpongeBob featuring hyper-realistic eyes and disturbing imagery." },
      { name: "NES Godzilla Creepypasta", image: "https://static.wikia.nocookie.net/creepypasta/images/2/29/Gezoraglitch-1.png/revision/latest?cb=20130411221350", description: "A modified copy of Godzilla for NES that contains new monsters and altered gameplay. Originally written by Cosbydaf on Bogleech." },
      { name: "The Dionaea House", image: "https://static.wikia.nocookie.net/creepypasta/images/d/d6/Dionaea_house.jpg/revision/latest?cb=20120604213452", description: "A series of emails investigating the mysterious death of a friend who stayed in a house for ten days that changed him forever." },
      { name: "Psychosis", image: "https://static.wikia.nocookie.net/creepypasta/images/9/97/Biomarkers-psychosis.jpg/revision/latest?cb=20110518051631", description: "A programmer in a basement apartment begins experiencing paranoia after noticing he hasn't seen another person in days." },
      { name: "Smile Dog", image: "https://static.wikia.nocookie.net/creepypasta/images/1/1b/Smile.jpg/revision/latest?cb=20111010204357", description: "A creepypasta about a haunted image called 'smile.jpg' that compels viewers to spread it, featuring a demonic dog with a human-like grin." },
      { name: "The Slender Man", image: "https://static.wikia.nocookie.net/creepypasta/images/b/bd/Slender_in_background.jpg/revision/latest?cb=20110428131924", description: "The original Slender Man pasta about a tall, faceless entity in a suit that stalks and abducts people, particularly children." },
      { name: "Polybius", image: "https://static.wikia.nocookie.net/creepypasta/images/2/27/Polybius_cabinet.jpg/revision/latest?cb=20110219072442", description: "A pasta based on the urban legend of Polybius, a mysterious arcade cabinet that appeared in Portland, Oregon in 1981." },
      { name: "Lavender Town Syndrome", image: "https://static.wikia.nocookie.net/creepypasta/images/7/76/Lavender_Town_Syndrome.jpg/revision/latest?cb=20130119103754", description: "The classic Pokemon creepypasta about children's deaths linked to the Lavender Town theme music in the original Japanese games." },
      { name: "Herobrine", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e0/Herobrineiswatchingyou.jpg/revision/latest?cb=20110223061923", description: "A Minecraft creepypasta about a mysterious figure with glowing white eyes said to haunt single-player worlds." },
      { name: "Ted the Caver", image: "https://static.wikia.nocookie.net/creepypasta/images/2/26/Ted_the_cave_front_page.jpg/revision/latest?cb=20200627103733", description: "One of the earliest creepypastas, documented as a series of posts about cave exploration that becomes increasingly terrifying." },
      { name: "Pokémon Lost Silver", image: "https://static.wikia.nocookie.net/creepypasta/images/5/57/Pok%C3%A9mon_Lost_Silver/revision/latest?cb=20120405191112", description: "A mysterious gold cartridge that turns out to be a haunted copy of Pokemon Silver with disturbing modifications." },
      { name: "Jeff the Killer", image: "https://static.wikia.nocookie.net/creepypasta/images/7/75/%22Jeff_the_Killer%22_by_K._Banning-Kellum_%E2%80%94_Simply_Scary_%E2%80%94_Feature_Length_Reboot/revision/latest?cb=20160306191401", description: "A reboot of the Jeff the Killer story, reimagining the classic tale with improved writing and expanded lore." },
      { name: "The Backrooms", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e3/Backrooms.jpg/revision/latest?cb=20230222130038", description: "A labyrinthine, seemingly endless maze of rooms and environments, credited with popularising liminal spaces in online horror." },
      { name: "Suicidemouse.avi", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0a/Suicidemouse_1/revision/latest?cb=20231210033600", description: "A lost black-and-white Mickey Mouse cartoon that shows the character walking through increasingly disturbing environments." },
      { name: "The Grifter", image: "https://static.wikia.nocookie.net/creepypasta/images/3/3a/The_Grifter.jpg/revision/latest?cb=20101003182005", description: "A creepypasta about a disturbing underground video known as 'The Grifter' that drives viewers to madness." },
      { name: "Rainbow Factory", image: "https://static.wikia.nocookie.net/creepypasta/images/8/86/Imhere.jpg/revision/latest?cb=20121226103856", description: "A My Little Pony creepypasta about a factory where ponies are turned into rainbows through a gruesome process." },
      { name: "The Backrooms", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e3/Backrooms.jpg/revision/latest?cb=20230222130038", description: "A labyrinthine, seemingly endless maze of rooms and environments, credited with popularising liminal spaces in online horror." },
      { name: "WHO WAS PHONE?", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b6/Whowasphone4chan.png/revision/latest?cb=20250131154415", description: "One of the most iconic troll pastas ever, building up a dramatic horror story only to end with the absurd twist: 'WHO WAS PHONE?'" },
      { name: "Dead Bart", image: "https://static.wikia.nocookie.net/creepypasta/images/4/46/Dead_Bart_-Lost_%22The_Simpsons%22_Episode_VHS_Footage-/revision/latest?cb=20240327214040", description: "A lost episode creepypasta about a banned Simpsons episode from season 1 called Dead Bart." },
      { name: "The .GIF", image: "https://static.wikia.nocookie.net/creepypasta/images/5/52/IM_HAPPY.gif/revision/latest?cb=20231126185220", description: "A pasta about a mysterious animated GIF that spreads through the internet with disturbing consequences." },
      { name: "12 Minutes", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c1/WSBTV.png/revision/latest?cb=20120127195247", description: "In the fall of 1987, local news channel WSB-TV 2 of Atlanta attempted to fill a scheduling gap with a young Reverend's hour block." },
      { name: "Anansi's Goatman Story", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4a/Goatmancircled.jpg/revision/latest?cb=20140103020231", description: "A 16-year-old from Chicago goes camping with family in rural Alabama and encounters a shapeshifting creature known as the Goatman." },
      { name: "The Portraits", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e1/171045011_24078b191e.jpg/revision/latest?cb=20110309031234", description: "A classic creepypasta about a series of portraits that reveal disturbing truths about their subjects." },
      { name: "The Showers", image: "https://static.wikia.nocookie.net/creepypasta/images/f/f8/3267467973_2238c0fbb6.jpg/revision/latest?cb=20130822132622", description: "A pasta about disturbing encounters in a public shower facility." },
      { name: "Autopilot", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c4/Autopilot.jpg/revision/latest?cb=20130729160009", description: "A pasta about the terrifying experience of driving on autopilot and not remembering the journey." },
      { name: "I Found a Digital Camera in the Woods", image: "https://static.wikia.nocookie.net/creepypasta/images/3/36/Pshot01.jpg/revision/latest?cb=20110612230501", description: "A pasta about discovering a digital camera in the woods with increasingly disturbing photos." },
      { name: "Jvk1166z.esp", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a4/Morrowind.jpg/revision/latest?cb=20110423225726", description: "A pasta about a mysterious Elder Scrolls mod file that contains disturbing content." },
      { name: "Julia Legare", image: "https://static.wikia.nocookie.net/creepypasta/images/2/23/Edisto_Island_Photos_12-L.jpg/revision/latest?cb=20121216075146", description: "A pasta about a Southern gothic mystery involving a family estate and dark secrets." },
      { name: "The Strangest Security Tape", image: "https://static.wikia.nocookie.net/creepypasta/images/6/63/Securitywatch.jpg/revision/latest?cb=20130802043508", description: "A pasta about anomalous footage captured on security cameras." },
      { name: "The Pill", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2e/Smartpill.jpg/revision/latest?cb=20111108005436", description: "A pasta about a mysterious pill that enhances intelligence with terrifying side effects." },
      { name: "House of Rules", image: "https://static.wikia.nocookie.net/creepypasta/images/e/ef/Ju_tree_house.jpg/revision/latest?cb=20110613013242", description: "A pasta about a house with strict rules that must never be broken." },
      { name: "Mr. Bones' Wild Ride", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e3/Mrbones.png/revision/latest?cb=20120805211242", description: "A humorous creepypasta originating from 4chan about a theme park ride that never ends." },
      { name: "The Smiling Man", image: "https://static.wikia.nocookie.net/creepypasta/images/9/96/The_smiling_man.jpg/revision/latest?cb=20121226210053", description: "A pasta about encountering a tall, thin figure with an unnaturally wide smile walking down the street at night." },
      { name: "Zalgo", image: "https://static.wikia.nocookie.net/creepypasta/images/4/47/Zalgogarfield-1.png/revision/latest?cb=20120825220651", description: "Based on the internet meme about an ancient entity called Zalgo that corrupts text and reality itself." },
      { name: "Mereana Mordegard Glesgorv", image: "https://static.wikia.nocookie.net/creepypasta/images/f/ff/Mereana_Mordegard_Glesgorv/revision/latest?cb=20130603233425", description: "A pasta about a disturbing YouTube video featuring a man who stares at the camera before revealing a horrifying transformation." },
      { name: "The SCP Foundation", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8f/SCP_Logo_%28secure%2C_contain%2C_protect%29.png/revision/latest?cb=20240213024359", description: "A reference to the SCP Foundation collaborative writing project, a fictional organization that secures anomalous objects." },
      { name: "Luna Game", image: "https://static.wikia.nocookie.net/creepypasta/images/d/dc/Aaa.png/revision/latest?cb=20120327213538", description: "A My Little Pony creepypasta about a fan-made game that contains disturbing hidden content." },
      { name: "Hypno's Lullaby", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c4/Hypno%27s_Lullaby_%28CREEPY%21_Based_off_a_Creepypasta%29/revision/latest?cb=20120405191057", description: "A Pokemon creepypasta about a cursed Hypno that lures children with its hypnosis ability." },
      { name: "Kagome Kagome", image: "https://static.wikia.nocookie.net/creepypasta/images/4/42/Kagome_Circle.jpg/revision/latest?cb=20111201071209", description: "A pasta based on the Japanese children's game incorporating elements of Japanese horror folklore." },
      { name: "Stick Stickly", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2a/Stickandlogo.gif/revision/latest?cb=20110129201739", description: "A pasta about a stick figure character from Nickelodeon interstitials who becomes the subject of a disturbing hidden message." },
      { name: "Pokémon Black", image: "https://static.wikia.nocookie.net/creepypasta/images/5/53/Pokemon-black-cartride-gameboy-image.jpg/revision/latest?cb=20121122060603", description: "A Pokemon creepypasta about a bootleg cartridge that contains increasingly disturbing content." },
      { name: "Strangled Red", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4d/Steven_and_S%213v3n.png/revision/latest?cb=20120906085657", description: "A Pokemon creepypasta about a character named Steven who encounters a horrifying version of the game." },
      { name: "Repercussions of Evil", image: "https://static.wikia.nocookie.net/creepypasta/images/8/81/Doom.gif/revision/latest?cb=20120321205224", description: "A deliberately badly-written troll pasta about John Zombie fighting demons." },
      { name: "The Rugrats Theory", image: "https://static.wikia.nocookie.net/creepypasta/images/9/96/Therugratstheoryimage.gif/revision/latest?cb=20111031040253", description: "A conspiracy theory pasta claiming all the babies in Rugrats are figments of Angelica's imagination." },
      { name: "MARIO", image: "https://static.wikia.nocookie.net/creepypasta/images/1/18/MARIO_00003.png/revision/latest?cb=20130113225310", description: "A Super Mario Bros. creepypasta about a haunted cartridge showing increasingly disturbing versions of Mario." },
      { name: "BOB", image: "https://static.wikia.nocookie.net/creepypasta/images/9/9a/BOB-wikiasafeversion.jpg/revision/latest?cb=20120212235754", description: "A creepypasta originating from a /b/ thread on 4chan about a large pink inflatable pig creature." },
      { name: "Google Maps Balcony Creature", image: "https://static.wikia.nocookie.net/creepypasta/images/6/65/Google_Maps_Balcony_Creature.jpg/revision/latest?cb=20120304062502", description: "A pasta based on a Google Maps Street View image showing a mysterious creature on a balcony." },
      { name: "Binary DNA", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b3/Binary_DNA.png/revision/latest?cb=20100808212848", description: "A pasta exploring the concept of digital DNA and the boundary between code and life." },
      { name: "AND THEN A SKELETON POPPED OUT", image: "https://static.wikia.nocookie.net/creepypasta/images/a/aa/THE_SKULITEN.jpg/revision/latest?cb=20100819175634", description: "A humorously anti-climactic creepypasta that builds tension before ending with an absurd twist." },
      { name: "TEH DAY OF ALL TEH BLOD", image: "https://static.wikia.nocookie.net/creepypasta/images/f/ff/DAY_OF_ALL_THE_BLOOD/revision/latest?cb=20120405191044", description: "A deliberately poorly-written troll pasta known for intentionally bad grammar and spelling." },
      { name: "Another Perspective on BOB", image: "https://static.wikia.nocookie.net/creepypasta/images/f/f5/Piggy_sick.jpg/revision/latest?cb=20110709055327", description: "A retelling of the BOB creepypasta from an alternate viewpoint." },
      { name: "Hyper-Realistic", image: "https://static.wikia.nocookie.net/creepypasta/images/f/fb/Basil_Fawlty.jpg/revision/latest?cb=20110529001454", description: "A satire of the overused creepypasta trope 'hyper-realistic eyes'." },
      { name: "Mr. Widemouth", image: null, description: "A creepypasta about a childhood imaginary friend who encourages children to do dangerous things." },
      { name: "Username: 666", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a4/Username_666/revision/latest?cb=20131213023842", description: "A pasta about a mysterious user with the name '666' who appears on online platforms." },
      { name: "Tall, Thin and Faceless", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0c/Padded_room.png/revision/latest?cb=20131020163916", description: "A pasta about a tall, thin, faceless entity that haunts its victims." },
      { name: "The Tall Man", image: "https://static.wikia.nocookie.net/creepypasta/images/6/67/Images_%2821%29.jpg/revision/latest?cb=20130728225941", description: "A pasta about encounters with an unnaturally tall figure seen lurking in the distance." },
      { name: "Suit", image: "https://static.wikia.nocookie.net/creepypasta/images/e/eb/Suit.jpeg/revision/latest?cb=20110524195545", description: "A pasta about a mysterious suit that transforms whoever wears it." },
      { name: "David's Diary", image: "https://static.wikia.nocookie.net/creepypasta/images/6/6a/Cheyenne%27s_drawing_.jpg/revision/latest?cb=20120801003739", description: "A found-diary pasta documenting the increasingly disturbing entries of a man named David." },
      { name: "Götterdämmerung", image: "https://static.wikia.nocookie.net/creepypasta/images/7/70/Slenderman.png/revision/latest?cb=20110312084243", description: "A Slender Man-related pasta with connections to Norse mythology and the twilight of the gods." },
      { name: "The King Come Down", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a0/Computer_guy.png/revision/latest?cb=20140906182631", description: "A pasta about a mysterious digital entity that descends upon its victims." },
      { name: "The Case of Martina Gomez", image: null, description: "A pasta documenting the mysterious case of a woman named Martina Gomez." },
      { name: "The Memetic Symbol", image: null, description: "A pasta about a symbol that, once seen, cannot be forgotten and spreads like a virus." },
      { name: "Mickey's Best Friend", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e0/Mickey%27s_Best_Friend_%28Title_Card%29.jpg/revision/latest?cb=20150305193624", description: "A pasta involving Disney's Mickey Mouse and a mysterious, unsettling best friend." },
      { name: "Mr. Mix", image: "https://static.wikia.nocookie.net/creepypasta/images/a/ac/Mr_mix_by_felixlyons-d4ux8pb.png/revision/latest?cb=20120719035505", description: "A pasta about a mysterious figure named Mr. Mix who appears in digital media." },
      { name: "Survival Guide", image: "https://static.wikia.nocookie.net/creepypasta/images/7/72/Creepypasta_survival_guide.jpg/revision/latest?cb=20120320150653", description: "A humorous guide offering survival tips for encountering various creepypasta creatures." },
      { name: "Jeff the Killer 2015", image: "https://static.wikia.nocookie.net/creepypasta/images/7/75/%22Jeff_the_Killer%22_by_K._Banning-Kellum_%E2%80%94_Simply_Scary_%E2%80%94_Feature_Length_Reboot/revision/latest?cb=20160306191401", description: "A reboot of the Jeff the Killer story with improved writing and expanded lore." }
    ]
  },

  suggestedReading: {
    id: 'suggested-reading',
    name: 'Suggested Reading',
    description: 'Recommended stories that are certified quality.',
    icon: '📖',
    totalItems: 104,
    entries: [
      { name: "12 Minutes", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c1/WSBTV.png/revision/latest?cb=20120127195247", description: "In the fall of 1987, local news channel WSB-TV 2 of Atlanta was attempting to fill a scheduling gap." },
      { name: "Anansi's Goatman Story", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4a/Goatmancircled.jpg/revision/latest?cb=20140103020231", description: "A 16-year-old from Chicago goes camping with family in rural Alabama and encounters a shapeshifting creature." },
      { name: "BEN Drowned", image: "https://static.wikia.nocookie.net/creepypasta/images/0/00/You_shouldn't_have_done_that_by_sarawtf.jpg/revision/latest?cb=20130928192047", description: "A story about a haunted Majora's Mask cartridge containing the spirit of a boy named BEN." },
      { name: "Candle Cove", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b3/Candlecovestorytelling.jpg/revision/latest?cb=20110709005001", description: "A creepypasta by Kris Straub presented as a forum discussion about a strange local TV programme." },
      { name: "The Dionaea House", image: null, description: "A series of emails investigating the mysterious death of a friend who stayed in a haunted house." },
      { name: "NoEnd House", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0b/20090227001613_2008-08-17_0542-1-.jpg/revision/latest?cb=20121104230637", description: "A building with nine rooms where reaching the final room wins $500. No one has ever reached the end." },
      { name: "The Rake", image: "https://static.wikia.nocookie.net/creepypasta/images/0/04/The_Rake.jpg/revision/latest?cb=20130731220054", description: "Events in the northeastern United States involving a strange, human-like creature." },
      { name: "Psychosis", image: "https://static.wikia.nocookie.net/creepypasta/images/9/97/Biomarkers-psychosis.jpg/revision/latest?cb=20110518051631", description: "A programmer in a basement apartment begins experiencing paranoia." },
      { name: "Smile Dog", image: "https://static.wikia.nocookie.net/creepypasta/images/1/1b/Smile.jpg/revision/latest?cb=20111010204357", description: "A haunted image called 'smile.jpg' that compels viewers to spread it." },
      { name: "The Slender Man", image: "https://static.wikia.nocookie.net/creepypasta/images/b/bd/Slender_in_background.jpg/revision/latest?cb=20110428131924", description: "The original Slender Man pasta about a tall, faceless entity in a suit." },
      { name: "Ted the Caver", image: "https://static.wikia.nocookie.net/creepypasta/images/2/26/Ted_the_cave_front_page.jpg/revision/latest?cb=20200627103733", description: "One of the earliest creepypastas about cave exploration." },
      { name: "The Portraits", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e1/171045011_24078b191e.jpg/revision/latest?cb=20110309031234", description: "A classic creepypasta about portraits that reveal disturbing truths." },
      { name: "The Showers", image: "https://static.wikia.nocookie.net/creepypasta/images/f/f8/3267467973_2238c0fbb6.jpg/revision/latest?cb=20130822132622", description: "Disturbing encounters in a public shower facility." },
      { name: "Autopilot", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c4/Autopilot.jpg/revision/latest?cb=20130729160009", description: "The terrifying experience of driving on autopilot." },
      { name: "I Found a Digital Camera in the Woods", image: "https://static.wikia.nocookie.net/creepypasta/images/3/36/Pshot01.jpg/revision/latest?cb=20110612230501", description: "Discovering a digital camera with increasingly disturbing photos." },
      { name: "Jvk1166z.esp", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a4/Morrowind.jpg/revision/latest?cb=20110423225726", description: "A mysterious Elder Scrolls mod file with disturbing content." },
      { name: "Julia Legare", image: "https://static.wikia.nocookie.net/creepypasta/images/2/23/Edisto_Island_Photos_12-L.jpg/revision/latest?cb=20121216075146", description: "A Southern gothic mystery involving a family estate." },
      { name: "The Strangest Security Tape", image: "https://static.wikia.nocookie.net/creepypasta/images/6/63/Securitywatch.jpg/revision/latest?cb=20130802043508", description: "Anomalous footage captured on security cameras." },
      { name: "The Pill", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2e/Smartpill.jpg/revision/latest?cb=20111108005436", description: "A mysterious pill that enhances intelligence with terrifying side effects." },
      { name: "House of Rules", image: "https://static.wikia.nocookie.net/creepypasta/images/e/ef/Ju_tree_house.jpg/revision/latest?cb=20110613013242", description: "A house with strict rules that must never be broken." },
      { name: "The Monkey's Paw", image: "https://static.wikia.nocookie.net/creepypasta/images/7/75/Paw1.gif/revision/latest?cb=20120207172428", description: "The classic tale of a magical paw that grants wishes with dire consequences." },
      { name: "Frankenstein", image: "https://static.wikia.nocookie.net/creepypasta/images/d/d7/Frankensteincover.jpg/revision/latest?cb=20260429035911", description: "Mary Shelley's classic tale of a scientist who creates life." },
      { name: "The Tell-Tale Heart", image: "https://static.wikia.nocookie.net/creepypasta/images/1/19/Telltaleheart.jpg/revision/latest?cb=20110720010003", description: "Edgar Allan Poe's classic tale of guilt and madness." },
      { name: "The Raven", image: "https://static.wikia.nocookie.net/creepypasta/images/2/21/The_Raven.jpg/revision/latest?cb=20120322160008", description: "Edgar Allan Poe's famous poem about loss and despair." },
      { name: "The Most Dangerous Game", image: "https://static.wikia.nocookie.net/creepypasta/images/2/23/220px-Most_Dangerous_Game_poster.jpg/revision/latest?cb=20120928044957", description: "The classic story of hunting humans for sport." },
      { name: "Fog", image: "https://static.wikia.nocookie.net/creepypasta/images/7/75/Fog.gif/revision/latest?cb=20110918210543", description: "A pasta about a mysterious fog that brings terror." },
      { name: "The Doors of Death", image: "https://static.wikia.nocookie.net/creepypasta/images/5/52/Coffin.jpg/revision/latest?cb=20120906202730", description: "A pasta about doors that lead to death." },
      { name: "An Egg", image: "https://static.wikia.nocookie.net/creepypasta/images/f/f5/The_Egg_-_A_Short_Story-2/revision/latest?cb=20231221161414", description: "A short philosophical story by Andy Weir about the nature of existence." },
      { name: "Email", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8f/DLcrT80.jpg/revision/latest?cb=20140819131208", description: "A pasta about a disturbing email received from an unknown sender." },
      { name: "Her Red Right Hand", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e0/%27%27Her_Red_Right_Hand%27%27_by_Shadowswimmer77_-_ONE_OF_MY_BEST_EVER_VIDEOS/revision/latest?cb=20170711002322", description: "Inspired by Song of Joy by Nick Cave and the Bad Seeds." },
      { name: "The House That Death Forgot", image: "https://static.wikia.nocookie.net/creepypasta/images/a/ab/250px-Royce.jpg/revision/latest?cb=20140708151539", description: "A pasta about a house where death cannot reach." },
      { name: "A Figure in the Fog", image: "https://static.wikia.nocookie.net/creepypasta/images/1/1e/%22A_Figure_in_the_Fog%22_Creepypasta_Let%27s_Read%21/revision/latest?cb=20150911070626", description: "A mysterious figure appears in the fog." },
      { name: "La Bruja", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2e/%22La_Bruja%22-Creepypasta_Written_by_Killahawke1/revision/latest?cb=20180621022455", description: "A pasta about a witch written by Killahawke1." },
      { name: "Laser Tag", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0d/Lasertag.jpg/revision/latest?cb=20130730195556", description: "A pasta about a terrifying laser tag experience." },
      { name: "Lightless City", image: "https://static.wikia.nocookie.net/creepypasta/images/6/6d/Lightlesscity.jpg/revision/latest?cb=20130103202904", description: "A pasta about a city plunged into darkness." },
      { name: "Pinky Pinky", image: "https://static.wikia.nocookie.net/creepypasta/images/6/67/Pinky_Pinky.png/revision/latest?cb=20140516213245", description: "A pasta about a mysterious entity named Pinky Pinky." },
      { name: "The Comfy and Cozy Cabin", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4c/Cabin-in-the-woods.jpg/revision/latest?cb=20110720233307", description: "A pasta about a cabin that seems too cozy to be safe." },
      { name: "The Thing That Stalks the Fields", image: "https://static.wikia.nocookie.net/creepypasta/images/a/aa/Hay.png/revision/latest?cb=20121219035327", description: "A pasta about a creature that stalks through fields." },
      { name: "The Strangers", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b7/Images4.jpeg/revision/latest?cb=20101107193340", description: "A pasta about mysterious strangers who appear at your door." },
      { name: "A Strange Night in the City of Angels", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8e/B5965aa820622cc0dfb2a3588dd547cb.jpg/revision/latest?cb=20120417165312", description: "A pasta about a strange night in Los Angeles." },
      { name: "Vultures", image: "https://static.wikia.nocookie.net/creepypasta/images/7/7b/2303646856_8bff4fd62f_z.jpg/revision/latest?cb=20130725175122", description: "A pasta about menacing vultures." },
      { name: "Waking Up Grinning", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b0/Pillbottle.jpg/revision/latest?cb=20230922233251", description: "A pasta about waking up with an inexplicable grin." },
      { name: "White with Red", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a4/RustyKeyhole.jpg/revision/latest?cb=20240219025937", description: "A pasta about the colors white and red." },
      { name: "Bram Stoker's Dracula", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b7/Dracula1916Cover.jpg/revision/latest?cb=20260422030521", description: "The classic vampire novel by Bram Stoker." },
      { name: "Burgrr Entries", image: "https://static.wikia.nocookie.net/creepypasta/images/6/6e/Burgrrlogo.png/revision/latest?cb=20140303004424", description: "A pasta about a bizarre restaurant called Burgrr." },
      { name: "All Too Human", image: "https://static.wikia.nocookie.net/creepypasta/images/9/98/Images-0.jpeg/revision/latest?cb=20180104003309", description: "A pasta exploring what it means to be human." },
      { name: "Another Senseless Ritual", image: "https://static.wikia.nocookie.net/creepypasta/images/5/53/Shhh.jpeg/revision/latest?cb=20180716145352", description: "A pasta about a ritual with senseless consequences." },
      { name: "Annora Petrova", image: "https://static.wikia.nocookie.net/creepypasta/images/1/19/Annora.png/revision/latest?cb=20140705025158", description: "A pasta about a mysterious woman named Annora Petrova." },
      { name: "Anomaly", image: "https://static.wikia.nocookie.net/creepypasta/images/0/01/1o14.jpg/revision/latest?cb=20121214025407", description: "A pasta about an anomalous event." }
    ]
  },

  potm: {
    id: 'potm',
    name: 'PotM (Pasta of the Month)',
    description: 'Stories which have won Pasta of the Month.',
    icon: '🏆',
    totalItems: 133,
    entries: [
      { name: "12 Minutes", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c1/WSBTV.png/revision/latest?cb=20120127195247", description: "In the fall of 1987, local news channel WSB-TV 2 of Atlanta was attempting to fill a scheduling gap." },
      { name: "NoEnd House", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0b/20090227001613_2008-08-17_0542-1-.jpg/revision/latest?cb=20121104230637", description: "A building with nine rooms where reaching the final room wins $500." },
      { name: "The Showers", image: "https://static.wikia.nocookie.net/creepypasta/images/f/f8/3267467973_2238c0fbb6.jpg/revision/latest?cb=20130822132622", description: "Disturbing encounters in a public shower facility." },
      { name: "The Strangest Security Tape", image: "https://static.wikia.nocookie.net/creepypasta/images/6/63/Securitywatch.jpg/revision/latest?cb=20130802043508", description: "Anomalous footage captured on security cameras." },
      { name: "The Pill", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2e/Smartpill.jpg/revision/latest?cb=20111108005436", description: "A mysterious pill that enhances intelligence." },
      { name: "Ted the Caver", image: "https://static.wikia.nocookie.net/creepypasta/images/2/26/Ted_the_cave_front_page.jpg/revision/latest?cb=20200627103733", description: "One of the earliest creepypastas about cave exploration." },
      { name: "The House That Death Forgot", image: "https://static.wikia.nocookie.net/creepypasta/images/a/ab/250px-Royce.jpg/revision/latest?cb=20140708151539", description: "A pasta about a house where death cannot reach." },
      { name: "La Bruja", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2e/%22La_Bruja%22-Creepypasta_Written_by_Killahawke1/revision/latest?cb=20180621022455", description: "A pasta about a witch." },
      { name: "Laser Tag", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0d/Lasertag.jpg/revision/latest?cb=20130730195556", description: "A terrifying laser tag experience." },
      { name: "A Figure in the Fog", image: "https://static.wikia.nocookie.net/creepypasta/images/1/1e/%22A_Figure_in_the_Fog%22_Creepypasta_Let%27s_Read%21/revision/latest?cb=20150911070626", description: "A mysterious figure appears in the fog." },
      { name: "Fog", image: "https://static.wikia.nocookie.net/creepypasta/images/7/75/Fog.gif/revision/latest?cb=20110918210543", description: "A pasta about a mysterious fog." },
      { name: "All Too Human", image: "https://static.wikia.nocookie.net/creepypasta/images/9/98/Images-0.jpeg/revision/latest?cb=20180104003309", description: "A pasta exploring what it means to be human." },
      { name: "Another Senseless Ritual", image: "https://static.wikia.nocookie.net/creepypasta/images/5/53/Shhh.jpeg/revision/latest?cb=20180716145352", description: "A pasta about a ritual with senseless consequences." },
      { name: "Waking Up Grinning", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b0/Pillbottle.jpg/revision/latest?cb=20230922233251", description: "A pasta about waking up with an inexplicable grin." },
      { name: "The Russian Sleep Experiment", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8b/Cccp_rust.jpg/revision/latest?cb=20100908203303", description: "Soviet-era experiment where prisoners are kept awake for 15 days." }
    ]
  },

  spotlighted: {
    id: 'spotlighted',
    name: 'Spotlighted Pastas',
    description: 'Stories which have been spotlighted by admins.',
    icon: '⭐',
    totalItems: 73,
    entries: [
      { name: "Aesthetically Pleasing", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c3/The_Car_Crash-_The_ghost_girl.jpg/revision/latest?cb=20140312164741", description: "A spotlighted pasta about aesthetics and horror." },
      { name: "The Brooding Star", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2f/The_Brooding_Star.png/revision/latest/scale-to-width-down/302?cb=20160103005613", description: "A pasta about a mysterious star." },
      { name: "The Carolers", image: "https://static.wikia.nocookie.net/creepypasta/images/1/17/Carol1.jpg/revision/latest/scale-to-width-down/400?cb=20231207055045", description: "A pasta about sinister carolers." },
      { name: "Colorpill", image: "https://static.wikia.nocookie.net/creepypasta/images/3/34/Image_2011-04-25_000621860.png/revision/latest/scale-to-width-down/400?cb=20230225060637", description: "A pasta about a color-changing pill." },
      { name: "The Doorless Room in My Old House", image: "https://static.wikia.nocookie.net/creepypasta/images/1/1b/Doorlessbear.jpg/revision/latest/scale-to-width-down/400?cb=20260101000528", description: "A pasta about a room with no doors." },
      { name: "Ensorcelled in the Earth", image: "https://static.wikia.nocookie.net/creepypasta/images/6/65/Ensorcelled_in_the_Earth_artwork_by_Mikroflex.png/revision/latest/scale-to-width-down/283?cb=20250906175050", description: "A pasta about earth-bound enchantments." },
      { name: "The Forest of Things You Want to Happen", image: "https://static.wikia.nocookie.net/creepypasta/images/d/d5/Tumblr_mvw5qa5Pqj1rka61ro1_500.jpg/revision/latest/scale-to-width-down/312?cb=20150602161126", description: "A pasta about a wish-granting forest." },
      { name: "Future Tech", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4b/PresleyWiki.png/revision/latest/scale-to-width-down/400?cb=20241013223838", description: "A pasta about futuristic technology." },
      { name: "Her Red Right Hand", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e0/%27%27Her_Red_Right_Hand%27%27_by_Shadowswimmer77_-_ONE_OF_MY_BEST_EVER_VIDEOS/revision/latest/scale-to-width-down/400?cb=20170711002322", description: "Inspired by Nick Cave and the Bad Seeds." },
      { name: "Hurricane Season", image: "https://static.wikia.nocookie.net/creepypasta/images/6/68/Hurricane.jpg/revision/latest/scale-to-width-down/358?cb=20240806175632", description: "A pasta set during hurricane season." },
      { name: "I Hate Mondays", image: "https://static.wikia.nocookie.net/creepypasta/images/3/31/Garfield-phone.webp/revision/latest/scale-to-width-down/400?cb=20240416061854", description: "A pasta about hating Mondays." },
      { name: "Innocent Souls", image: "https://static.wikia.nocookie.net/creepypasta/images/6/65/ThBFNQBFIT.jpg/revision/latest?cb=20150621091822", description: "A pasta about innocent souls." },
      { name: "Invitation to the Dark Trails", image: "https://static.wikia.nocookie.net/creepypasta/images/6/6d/Dark_Trails.jpg/revision/latest/scale-to-width-down/300?cb=20240107021713", description: "An invitation to dark trails." },
      { name: "Man Made from Mist", image: "https://static.wikia.nocookie.net/creepypasta/images/6/63/Artwork_by_Max_Taccardi.jpg/revision/latest/scale-to-width-down/297?cb=20241106231510", description: "A pasta about a man made from mist." },
      { name: "New York City, Statue of Liberty, Dodecagon", image: "https://static.wikia.nocookie.net/creepypasta/images/f/f9/New_York_City%2C_Statue_of_Liberty.jpeg/revision/latest/scale-to-width-down/400?cb=20240203213353", description: "A pasta set in New York City." },
      { name: "On the Bus", image: "https://static.wikia.nocookie.net/creepypasta/images/5/54/Oldbus.jpg/revision/latest/scale-to-width-down/400?cb=20130930183641", description: "A pasta about a bus ride." },
      { name: "Pasta Noir: Dames, Slugs and the Hatchetman", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2e/ASMR_%22Pasta_Noir_Hardboiled_Blues%22_Creepypasta_%28Part_1%29_Let%27s_Read%21/revision/latest/scale-to-width-down/400?cb=20150219124541", description: "A noir-style pasta." },
      { name: "The Plague Towns", image: "https://static.wikia.nocookie.net/creepypasta/images/9/91/Hemorrhagic_fever_image.jpg/revision/latest/scale-to-width-down/262?cb=20260401174345", description: "A pasta about plague-stricken towns." },
      { name: "The Rain", image: "https://static.wikia.nocookie.net/creepypasta/images/7/7c/Screenshot_2023-08-06_104043.png/revision/latest?cb=20230806164243", description: "A pasta about mysterious rain." },
      { name: "Sockie", image: "https://static.wikia.nocookie.net/creepypasta/images/3/3c/3b648c23-9f59-4b24-8eed-5c2bd9f66745.jpg/revision/latest/scale-to-width-down/400?cb=20260118120315", description: "A pasta about a creature named Sockie." },
      { name: "The Squire and the Black Scroll", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e6/%27The_Squire_and_the_Black_Scroll%27_-_Derek_Hawke-0/revision/latest/scale-to-width-down/400?cb=20170322101057", description: "A medieval pasta about a black scroll." },
      { name: "The Tale of Robert Elm", image: "https://static.wikia.nocookie.net/creepypasta/images/3/36/Ispay.jpg/revision/latest/scale-to-width-down/400?cb=20120416200508", description: "The tale of Robert Elm." },
      { name: "The Strangest Field Trip", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a5/Pexels-viniciusvieirafotografia-13936294.jpg/revision/latest/scale-to-width-down/267?cb=20240902182929", description: "A pasta about a strange field trip." },
      { name: "To Be Summoned", image: "https://static.wikia.nocookie.net/creepypasta/images/3/39/ToBeSummoned.png/revision/latest/scale-to-width-down/400?cb=20250825160425", description: "A pasta about summoning rituals." },
      { name: "Victoria, Yukon", image: "https://static.wikia.nocookie.net/creepypasta/images/6/68/Victoria%2C_Yukon.jpg/revision/latest/scale-to-width-down/400?cb=20250628214037", description: "A pasta set in Victoria, Yukon." },
      { name: "The Visitors", image: "https://static.wikia.nocookie.net/creepypasta/images/8/81/Contest_image_8.jpeg/revision/latest/scale-to-width-down/352?cb=20220807205418", description: "A pasta about mysterious visitors." },
      { name: "Why I Became an Atheist", image: "https://static.wikia.nocookie.net/creepypasta/images/0/03/Cross.jpg/revision/latest?cb=20161104220402", description: "A pasta about losing faith." },
      { name: "August in Carthage", image: "https://static.wikia.nocookie.net/creepypasta/images/1/17/Wildfire.jpg/revision/latest?cb=20250911075102", description: "A pasta set in ancient Carthage." },
      { name: "Skype", image: "https://static.wikia.nocookie.net/creepypasta/images/d/da/Goat.jpg/revision/latest/scale-to-width-down/400?cb=20140429024143", description: "A pasta about a disturbing Skype call." },
      { name: "So Much for My Complexion!", image: "https://static.wikia.nocookie.net/creepypasta/images/6/67/400px-Creepy-Couch2-1024x768.jpg/revision/latest?cb=20120821050346", description: "A pasta about complexion problems." }
    ]
  },

  contestWinner: {
    id: 'contest-winner',
    name: 'Contest Winner',
    description: 'Stories which have won wiki writing contests.',
    icon: '🥇',
    totalItems: 34,
    entries: [
      { name: "Banshee's Cry", image: "https://static.wikia.nocookie.net/creepypasta/images/8/86/%27%27The_Banshee%E2%80%99s_Cry%27%27_-_AWARD_WINNING_CREEPYPASTA_MARCH_2018/revision/latest/smart/width/200/height/200?cb=20180329110059", description: "Winner of Helel's Metal contest." },
      { name: "Bokor", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4a/Judgement_Tarot.jpg/revision/latest/smart/width/200/height/200?cb=20200208204548", description: "Entry for RedNovaTyrant's Cruel Fate Writing Contest." },
      { name: "Doorway to Serenity", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0d/Pier_doorway.png/revision/latest/smart/width/200/height/200?cb=20211029040237", description: "Entry for Cornconic's Halloween 2021 story contest." },
      { name: "The Ersatz Cat", image: "https://static.wikia.nocookie.net/creepypasta/images/1/17/%22The_Ersatz_Cat%22_by_Levi_Salvos-_Creepypasta/revision/latest/smart/width/200/height/200?cb=20161002033552", description: "Winner of ShawnCognitionCP's Anti-Cliche contest." },
      { name: "Ghosts of Nutty Putty", image: "https://static.wikia.nocookie.net/creepypasta/images/3/38/%22Ghosts_Of_Nutty_Putty%22_A_Search_and_Rescue_Tale_Creepypasta_Scary_Story-3/revision/latest/smart/width/200/height/200?cb=20220514160514", description: "Entry for Tewahway's Wheel of Misfortune 2022." },
      { name: "Goetia", image: "https://static.wikia.nocookie.net/creepypasta/images/5/55/Princes_of_Hell.jpg/revision/latest/smart/width/200/height/200?cb=20181223021748", description: "Entry for Helel's Nativity in Black Christmas contest." },
      { name: "Her Red Right Hand", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e0/%27%27Her_Red_Right_Hand%27%27_by_Shadowswimmer77_-_ONE_OF_MY_BEST_EVER_VIDEOS/revision/latest/smart/width/200/height/200?cb=20170711002322", description: "Inspired by Song of Joy by Nick Cave." },
      { name: "Hollow Heart", image: "https://static.wikia.nocookie.net/creepypasta/images/c/cf/Nielsen_tinsoldier1.jpg/revision/latest/smart/width/200/height/200?cb=20150224031639", description: "Entry for 2015 Creepypasta Freestyle Competition." },
      { name: "In Your Nightmares I Will Live", image: "https://static.wikia.nocookie.net/creepypasta/images/9/96/%22In_Your_Nightmares_I_Will_Live%22_--_A_Creepypasta_Read_-Contest_Winner-/revision/latest/smart/width/200/height/200?cb=20190724110951", description: "Entry for Helel's Bible Black Metal Contest." },
      { name: "Jeff the Killer 2015", image: "https://static.wikia.nocookie.net/creepypasta/images/7/75/%22Jeff_the_Killer%22_by_K._Banning-Kellum_%E2%80%94_Simply_Scary_%E2%80%94_Feature_Length_Reboot/revision/latest/smart/width/200/height/200?cb=20160306191401", description: "Reboot of the Jeff the Killer story." },
      { name: "Knuckle Bones", image: "https://static.wikia.nocookie.net/creepypasta/images/9/98/%22Knuckle_Bones%22_Creepypasta_Scary_Story-3/revision/latest/smart/width/200/height/200?cb=20211107032529", description: "Entry for Cornconic's Halloween 2021 contest." },
      { name: "My Little Oubliette", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c6/Contest_image_7.jpeg/revision/latest/smart/width/200/height/200?cb=20220807190821", description: "Entry for Cornconic's Liminal Spaces contest." },
      { name: "No Gifts This Year", image: "https://static.wikia.nocookie.net/creepypasta/images/d/d8/Nogifts.jpg/revision/latest/smart/width/200/height/200?cb=20111225153852", description: "A pasta about a Christmas with no gifts." },
      { name: "Oil Rig 23", image: "https://static.wikia.nocookie.net/creepypasta/images/9/94/%22Oil_Rig_-23_Has_Some_Serious_Issues%22_Creepypasta/revision/latest/smart/width/200/height/200?cb=20210302004537", description: "Entry for the 2021 Song Contest." },
      { name: "The One Who Bore Them", image: "https://static.wikia.nocookie.net/creepypasta/images/1/1d/Carcosa_Eye.png/revision/latest/smart/width/200/height/200?cb=20250707014259", description: "Entry for Cornconic's 2025 Holders Revival Contest." },
      { name: "Santa's Other Workshop", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2d/%22Santa%27s_Other_Workshop%22_by_KillaHawke1_-_Creepypasta/revision/latest/smart/width/200/height/200?cb=20161224150714", description: "Submission for ChristianWallis's Christmas contest." },
      { name: "Under a Rotting Sky", image: "https://static.wikia.nocookie.net/creepypasta/images/2/28/Khanate_-_Under_Rotting_Sky/revision/latest/smart/width/200/height/200?cb=20150526161823", description: "Inspired by the Khanate song Under Rotting Sky." },
      { name: "Waking Up Grinning", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b0/Pillbottle.jpg/revision/latest/smart/width/200/height/200?cb=20230922233251", description: "Entry for Cornconic's Random Title contest." }
    ]
  },

  userStories: {
    id: 'user-stories',
    name: 'User Stories',
    description: 'Authors and their stories from the wiki community.',
    icon: '👥',
    totalItems: 73,
    entries: [
      { name: "EmpyrealInvective", image: null, description: "72 stories including Abraham's Dagger, Campfire Tales, Ensorcelled in the Earth, Fleshgait.", storyCount: 72 },
      { name: "The Vesper's Bell", image: null, description: "102 stories including Hallowed Ground series, The Kings in Yellow, CODE NIGHTMARE REGENT RED.", storyCount: 102 },
      { name: "Jdeschene", image: "https://static.wikia.nocookie.net/creepypasta/images/9/96/The_Host_By_J_Deschene_-_Creepypasta/revision/latest/scale-to-width-down/50?cb=20190822144623", description: "129 stories including The Host, Brian's Here, I'm a Killer.", storyCount: 129 },
      { name: "Mmpratt99 deviantart", image: "https://static.wikia.nocookie.net/creepypasta/images/4/40/Zombie_tom_2005.jpg/revision/latest/scale-to-width-down/38?cb=20120713095456", description: "58 stories including The Gray Man, The Gorgon's Smile, Hyperesthesia.", storyCount: 58 },
      { name: "MakRalston", image: "https://static.wikia.nocookie.net/creepypasta/images/d/d2/Sammyprice.jpg/revision/latest/scale-to-width-down/50?cb=20221001044631", description: "56 stories including The Carolers, Colony of the Sunflower People, Route 963.", storyCount: 56 },
      { name: "L0CKED334", image: null, description: "47 stories including Crossroad series, Hellbox, Where the Birches Lean.", storyCount: 47 },
      { name: "Tewahway", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e1/The_Chase%2C_Persephone%27s_Dream_in_Meadow.jpg/revision/latest/scale-to-width-down/50?cb=20230312131458", description: "47 stories including The Eldritch Bus, Happy House Hill, Hell-O-Ween.", storyCount: 47 },
      { name: "HopelessNightOwl", image: "https://static.wikia.nocookie.net/creepypasta/images/6/63/Berliozkitty.png/revision/latest/scale-to-width-down/50?cb=20190426055951", description: "40 stories including Lost Episodes Can Be Found Again, The Sasquatch Ranger.", storyCount: 40 },
      { name: "Icydice", image: "https://static.wikia.nocookie.net/creepypasta/images/6/61/Nostalgia_Trip.webp/revision/latest/scale-to-width-down/50?cb=20220308154002", description: "41 stories including All Too Human, Nostalgia Trip, Morefolk series.", storyCount: 41 },
      { name: "RedNovaTyrant", image: null, description: "40 stories including Flat Paint, Hell Has a Prison, Mist Man.", storyCount: 40 },
      { name: "Killahawke1", image: "https://static.wikia.nocookie.net/creepypasta/images/3/34/%22Giggle%22_Creepypasta_by_Killahawke1-0/revision/latest/scale-to-width-down/50?cb=20171108182827", description: "30 stories including La Bruja, Giggle, Santa's Other Workshop.", storyCount: 30 },
      { name: "Shadowswimmer77", image: "https://static.wikia.nocookie.net/creepypasta/images/4/43/%22The_Soldier%22_Creepypasta_Shadowswimmer_77/revision/latest/scale-to-width-down/50?cb=20191110033540", description: "30 stories including Her Red Right Hand, Jeff the Killer Rewrite.", storyCount: 30 },
      { name: "Shinigami.Eyes", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4a/Madeline.png/revision/latest/scale-to-width-down/18?cb=20120628030907", description: "30 stories including Axaram's Keep, Lilith, Jennifer's Furby.", storyCount: 30 },
      { name: "Cornconic", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c9/Computer_monitor.png/revision/latest/scale-to-width-down/50?cb=20220912185110", description: "27 stories including The Influencing Machine, Poppies and Daffodils.", storyCount: 27 },
      { name: "CertainShadows", image: "https://static.wikia.nocookie.net/creepypasta/images/9/97/%22The_Woodharrow_Stories%22_Creepypasta/revision/latest/scale-to-width-down/50?cb=20201223203415", description: "24 stories including The Children of Woodharrow Park, Hurricane Season.", storyCount: 24 },
      { name: "DrBobSmith", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4a/Electric_Funeral.png/revision/latest/scale-to-width-down/39?cb=20190529052615", description: "24 stories including Electric Funeral, Night Marchers.", storyCount: 24 },
      { name: "AustinDR", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4a/Broodlings_of_Eihort_29.webp/revision/latest/scale-to-width-down/37?cb=20240204200120", description: "26 stories including The Gods Awaken, Vicksburg.", storyCount: 26 },
      { name: "Gomez Capulet", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c3/Twisted.jpeg/revision/latest/scale-to-width-down/50?cb=20180301090503", description: "26 stories including The Basilisk Queen, Twisted Metal Love.", storyCount: 26 },
      { name: "GreyOwl", image: null, description: "26 stories including Aesthetically Pleasing, Nosy Neighbors.", storyCount: 26 },
      { name: "Digigekko", image: "https://static.wikia.nocookie.net/creepypasta/images/a/aa/Enigmamemory.jpg/revision/latest/scale-to-width-down/50?cb=20250731163632", description: "27 stories including Dead Mall, Laser Tag, Enigma Memory.", storyCount: 27 },
      { name: "Kolpik", image: "https://static.wikia.nocookie.net/creepypasta/images/3/37/Mean_Old_Man.jpg/revision/latest/scale-to-width-down/42?cb=20181016142231", description: "28 stories including Knuckle Bones, The Visitors.", storyCount: 28 },
      { name: "Doom Vroom", image: "https://static.wikia.nocookie.net/creepypasta/images/1/1c/Think_Happy_Thoughts_Part_1-_Written_by_Doom_Vroom/revision/latest/scale-to-width-down/50?cb=20170424001548", description: "23 stories including Boulder City Prison, Gumjaw.", storyCount: 23 },
      { name: "Banned In CP", image: "https://static.wikia.nocookie.net/creepypasta/images/c/cd/IStock-592397022.jpg/revision/latest/scale-to-width-down/50?cb=20180831154845", description: "22 stories including August in Carthage, Plague Doctors.", storyCount: 22 },
      { name: "Raidra", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a1/Devotee_under_memory_machine.jpg/revision/latest/scale-to-width-down/36?cb=20161026154437", description: "29 stories including The Memory Machine, White Lady.", storyCount: 29 },
      { name: "MalumLibrum958", image: null, description: "30 stories including Carnevil, Hive Minds and Mind Hives.", storyCount: 30 },
      { name: "MLycantrope", image: "https://static.wikia.nocookie.net/creepypasta/images/6/63/Artwork_by_Max_Taccardi.jpg/revision/latest/scale-to-width-down/37?cb=20241106231510", description: "25 stories including Man Made from Mist, Lighteater.", storyCount: 25 }
    ]
  },

  memes: {
    id: 'memes',
    name: 'Memes',
    description: 'Stories that are well cemented in creepypasta lore or are a certified meme.',
    icon: '😂',
    totalItems: 88,
    entries: [
      { name: "The Backrooms", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e3/Backrooms.jpg/revision/latest?cb=20230222130038", description: "A labyrinthine, seemingly endless maze of rooms, credited with popularising liminal spaces." },
      { name: "BEN Drowned", image: "https://static.wikia.nocookie.net/creepypasta/images/0/00/You_shouldn't_have_done_that_by_sarawtf.jpg/revision/latest?cb=20130928192047", description: "A haunted Majora's Mask cartridge containing the spirit of a boy named BEN." },
      { name: "Candle Cove", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b3/Candlecovestorytelling.jpg/revision/latest?cb=20110709005001", description: "A forum discussion about a strange local TV programme from the early 70s." },
      { name: "The Rake", image: "https://static.wikia.nocookie.net/creepypasta/images/0/04/The_Rake.jpg/revision/latest?cb=20130731220054", description: "A pale, humanoid creature that attacks people in their beds at night." },
      { name: "The Russian Sleep Experiment", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8b/Cccp_rust.jpg/revision/latest?cb=20100908203303", description: "A Soviet-era experiment where prisoners are kept awake for 15 days." },
      { name: "The Slender Man", image: "https://static.wikia.nocookie.net/creepypasta/images/b/bd/Slender_in_background.jpg/revision/latest?cb=20110428131924", description: "A tall, faceless entity in a suit that stalks and abducts people." },
      { name: "NoEnd House", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0b/20090227001613_2008-08-17_0542-1-.jpg/revision/latest?cb=20121104230637", description: "A haunted house with no end, adapted into the TV series Channel Zero." },
      { name: "Normal Porn for Normal People", image: "https://static.wikia.nocookie.net/creepypasta/images/2/20/Angry_chimpanzee.jpg/revision/latest?cb=20120305154102", description: "A mysterious website that hosts bizarre and disturbing videos." },
      { name: "Squidward's Suicide", image: "https://static.wikia.nocookie.net/creepypasta/images/3/39/Squidwards_Suicide_ORIGINAL/revision/latest?cb=20130130215337", description: "A lost episode featuring hyper-realistic eyes and disturbing imagery." },
      { name: "Herobrine", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e0/Herobrineiswatchingyou.jpg/revision/latest?cb=20110223061923", description: "A Minecraft figure with glowing white eyes said to haunt single-player worlds." },
      { name: "Polybius", image: "https://static.wikia.nocookie.net/creepypasta/images/2/27/Polybius_cabinet.jpg/revision/latest?cb=20110219072442", description: "A mysterious arcade cabinet that appeared in Portland, Oregon in 1981." },
      { name: "Lavender Town Syndrome", image: "https://static.wikia.nocookie.net/creepypasta/images/7/76/Lavender_Town_Syndrome.jpg/revision/latest?cb=20130119103754", description: "Children's deaths linked to the Lavender Town theme music." },
      { name: "Rainbow Factory", image: "https://static.wikia.nocookie.net/creepypasta/images/8/86/Imhere.jpg/revision/latest?cb=20121226103856", description: "A My Little Pony pasta about a factory where ponies are turned into rainbows." },
      { name: "WHO WAS PHONE?", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b6/Whowasphone4chan.png/revision/latest?cb=20250131154415", description: "One of the most iconic troll pastas ever written." },
      { name: "Dead Bart", image: "https://static.wikia.nocookie.net/creepypasta/images/4/46/Dead_Bart_-Lost_%22The_Simpsons%22_Episode_VHS_Footage-/revision/latest?cb=20240327214040", description: "A lost Simpsons episode from season 1." },
      { name: "The .GIF", image: "https://static.wikia.nocookie.net/creepypasta/images/5/52/IM_HAPPY.gif/revision/latest?cb=20231126185220", description: "A mysterious animated GIF that spreads through the internet." },
      { name: "AND THEN A SKELETON POPPED OUT", image: "https://static.wikia.nocookie.net/creepypasta/images/a/aa/THE_SKULITEN.jpg/revision/latest?cb=20100819175634", description: "A humorously anti-climactic creepypasta." },
      { name: "TEH DAY OF ALL TEH BLOD", image: "https://static.wikia.nocookie.net/creepypasta/images/f/ff/DAY_OF_ALL_THE_BLOOD/revision/latest?cb=20120405191044", description: "A deliberately poorly-written troll pasta." },
      { name: "BOB", image: "https://static.wikia.nocookie.net/creepypasta/images/9/9a/BOB-wikiasafeversion.jpg/revision/latest?cb=20120212235754", description: "A large pink inflatable pig creature from 4chan." },
      { name: "Another Perspective on BOB", image: "https://static.wikia.nocookie.net/creepypasta/images/f/f5/Piggy_sick.jpg/revision/latest?cb=20110709055327", description: "A retelling of the BOB pasta from an alternate viewpoint." },
      { name: "Google Maps Balcony Creature", image: "https://static.wikia.nocookie.net/creepypasta/images/6/65/Google_Maps_Balcony_Creature.jpg/revision/latest?cb=20120304062502", description: "A creature spotted on Google Maps Street View." },
      { name: "The Grifter", image: "https://static.wikia.nocookie.net/creepypasta/images/3/3a/The_Grifter.jpg/revision/latest?cb=20101003182005", description: "A disturbing underground video that drives viewers to madness." },
      { name: "Götterdämmerung", image: "https://static.wikia.nocookie.net/creepypasta/images/7/70/Slenderman.png/revision/latest?cb=20110312084243", description: "A Slender Man pasta with Norse mythology connections." },
      { name: "Jeff the Killer 2015", image: "https://static.wikia.nocookie.net/creepypasta/images/7/75/%22Jeff_the_Killer%22_by_K._Banning-Kellum_%E2%80%94_Simply_Scary_%E2%80%94_Feature_Length_Reboot/revision/latest?cb=20160306191401", description: "A reboot of the Jeff the Killer story." },
      { name: "Kagome Kagome", image: "https://static.wikia.nocookie.net/creepypasta/images/4/42/Kagome_Circle.jpg/revision/latest?cb=20111201071209", description: "Based on the Japanese children's game with horror elements." },
      { name: "Luna Game", image: "https://static.wikia.nocookie.net/creepypasta/images/d/dc/Aaa.png/revision/latest?cb=20120327213538", description: "A My Little Pony fan-made game with disturbing content." },
      { name: "Majora's Mask", image: "https://static.wikia.nocookie.net/creepypasta/images/1/14/Majora.png/revision/latest?cb=20171001223517", description: "A Legend of Zelda pasta about a haunted copy." },
      { name: "MARIO", image: "https://static.wikia.nocookie.net/creepypasta/images/1/18/MARIO_00003.png/revision/latest?cb=20130113225310", description: "A Super Mario Bros. pasta about a haunted cartridge." },
      { name: "Mereana Mordegard Glesgorv", image: "https://static.wikia.nocookie.net/creepypasta/images/f/ff/Mereana_Mordegard_Glesgorv/revision/latest?cb=20130603233425", description: "A disturbing YouTube video with a horrifying transformation." },
      { name: "Mickey's Best Friend", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e0/Mickey%27s_Best_Friend_%28Title_Card%29.jpg/revision/latest?cb=20150305193624", description: "Disney's Mickey Mouse and a mysterious best friend." },
      { name: "Mr. Bones' Wild Ride", image: "https://static.wikia.nocookie.net/creepypasta/images/e/e3/Mrbones.png/revision/latest?cb=20120805211242", description: "A theme park ride that never ends from RollerCoaster Tycoon." },
      { name: "Mr. Mix", image: "https://static.wikia.nocookie.net/creepypasta/images/a/ac/Mr_mix_by_felixlyons-d4ux8pb.png/revision/latest?cb=20120719035505", description: "A mysterious figure who appears in digital media." },
      { name: "Pokémon Black", image: "https://static.wikia.nocookie.net/creepypasta/images/5/53/Pokemon-black-cartride-gameboy-image.jpg/revision/latest?cb=20121122060603", description: "A bootleg cartridge with disturbing content." },
      { name: "Pokémon Lost Silver", image: "https://static.wikia.nocookie.net/creepypasta/images/5/57/Pok%C3%A9mon_Lost_Silver/revision/latest?cb=20120405191112", description: "A haunted copy of Pokemon Silver." },
      { name: "Repercussions of Evil", image: "https://static.wikia.nocookie.net/creepypasta/images/8/81/Doom.gif/revision/latest?cb=20120321205224", description: "A deliberately badly-written troll pasta about John Zombie." },
      { name: "The Rugrats Theory", image: "https://static.wikia.nocookie.net/creepypasta/images/9/96/Therugratstheoryimage.gif/revision/latest?cb=20111031040253", description: "A conspiracy theory about Rugrats characters." },
      { name: "Smile Dog", image: "https://static.wikia.nocookie.net/creepypasta/images/1/1b/Smile.jpg/revision/latest?cb=20111010204357", description: "A haunted image called 'smile.jpg' with a demonic dog." },
      { name: "The Smiling Man", image: "https://static.wikia.nocookie.net/creepypasta/images/9/96/The_smiling_man.jpg/revision/latest?cb=20121226210053", description: "A tall, thin figure with an unnaturally wide smile." },
      { name: "Stick Stickly", image: "https://static.wikia.nocookie.net/creepypasta/images/2/2a/Stickandlogo.gif/revision/latest?cb=20110129201739", description: "A Nickelodeon stick figure with a disturbing hidden message." },
      { name: "Strangled Red", image: "https://static.wikia.nocookie.net/creepypasta/images/4/4d/Steven_and_S%213v3n.png/revision/latest?cb=20120906085657", description: "A Pokemon pasta about a horrifying version of the game." },
      { name: "Suicidemouse.avi", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0a/Suicidemouse_1/revision/latest?cb=20231210033600", description: "A lost black-and-white Mickey Mouse cartoon." },
      { name: "Survival Guide", image: "https://static.wikia.nocookie.net/creepypasta/images/7/72/Creepypasta_survival_guide.jpg/revision/latest?cb=20120320150653", description: "A humorous guide for encountering creepypasta creatures." },
      { name: "The SCP Foundation", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8f/SCP_Logo_%28secure%2C_contain%2C_protect%29.png/revision/latest?cb=20240213024359", description: "The collaborative writing project about containing anomalies." },
      { name: "Zalgo", image: "https://static.wikia.nocookie.net/creepypasta/images/4/47/Zalgogarfield-1.png/revision/latest?cb=20120825220651", description: "An ancient entity that corrupts text and reality." },
      { name: "Binary DNA", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b3/Binary_DNA.png/revision/latest?cb=20100808212848", description: "The boundary between digital code and biological life." },
      { name: "David's Diary", image: "https://static.wikia.nocookie.net/creepypasta/images/6/6a/Cheyenne%27s_drawing_.jpg/revision/latest?cb=20120801003739", description: "A found-diary pasta with increasingly disturbing entries." },
      { name: "The King Come Down", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a0/Computer_guy.png/revision/latest?cb=20140906182631", description: "A mysterious digital entity." },
      { name: "Hypno's Lullaby", image: "https://static.wikia.nocookie.net/creepypasta/images/c/c4/Hypno%27s_Lullaby_%28CREEPY%21_Based_off_a_Creepypasta%29/revision/latest?cb=20120405191057", description: "A cursed Hypno that lures children." },
      { name: "The Tall Man", image: "https://static.wikia.nocookie.net/creepypasta/images/6/67/Images_%2821%29.jpg/revision/latest?cb=20130728225941", description: "An unnaturally tall figure lurking in the distance." },
      { name: "Tall, Thin and Faceless", image: "https://static.wikia.nocookie.net/creepypasta/images/0/0c/Padded_room.png/revision/latest?cb=20131020163916", description: "A tall, thin, faceless entity." },
      { name: "Username: 666", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a4/Username_666/revision/latest?cb=20131213023842", description: "A mysterious user with the name '666'." },
      { name: "Suit", image: "https://static.wikia.nocookie.net/creepypasta/images/e/eb/Suit.jpeg/revision/latest?cb=20110524195545", description: "A mysterious suit that transforms whoever wears it." },
      { name: "Who Was Conversing With Me on the Cellular Phone?", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8a/Joseph-Ducreaux.jpg/revision/latest?cb=20110325044724", description: "A verbose rephrasing of 'WHO WAS PHONE?'." }
    ]
  },

  trollpasta: {
    id: 'trollpasta',
    name: 'Troll Pasta',
    description: 'Unserious stories with an ironic edge, designed to mislead.',
    icon: '🤡',
    totalItems: 24,
    entries: [
      { name: "WHO WAS PHONE?", image: "https://static.wikia.nocookie.net/creepypasta/images/b/b6/Whowasphone4chan.png/revision/latest?cb=20250131154415", description: "The most iconic troll pasta ever, ending with the absurd twist." },
      { name: "AND THEN A SKELETON POPPED OUT", image: "https://static.wikia.nocookie.net/creepypasta/images/a/aa/THE_SKULITEN.jpg/revision/latest?cb=20100819175634", description: "A humorously anti-climactic creepypasta." },
      { name: "TEH DAY OF ALL TEH BLOD", image: "https://static.wikia.nocookie.net/creepypasta/images/f/ff/DAY_OF_ALL_THE_BLOOD/revision/latest?cb=20120405191044", description: "A deliberately badly-written troll pasta." },
      { name: "Hyper-Realistic", image: "https://static.wikia.nocookie.net/creepypasta/images/f/fb/Basil_Fawlty.jpg/revision/latest?cb=20110529001454", description: "A satire of the overused 'hyper-realistic eyes' trope." },
      { name: "Repercussions of Evil", image: "https://static.wikia.nocookie.net/creepypasta/images/8/81/Doom.gif/revision/latest?cb=20120321205224", description: "A deliberately badly-written pasta about John Zombie." },
      { name: "Busses Suck", image: "https://static.wikia.nocookie.net/creepypasta/images/5/5c/Bus.jpg/revision/latest?cb=20120805154306", description: "A troll pasta about the horrors of riding the bus." },
      { name: "Ed, Edd n Eddy Lost Episode", image: "https://static.wikia.nocookie.net/creepypasta/images/a/a5/Creepypasta_Archives_Ed_Edd_N_Eddy_episode_34_FOUND_FOOTAGE/revision/latest?cb=20121101213230", description: "A troll pasta about a lost episode." },
      { name: "A Haunting Most Mario", image: "https://static.wikia.nocookie.net/creepypasta/images/5/58/4-Welcometothescaryhellplace_-_Copy.png/revision/latest?cb=20111221004824", description: "A humorous Mario-themed troll pasta." },
      { name: "Holder of Fluffy Kittens", image: "https://static.wikia.nocookie.net/creepypasta/images/d/db/Persian_kittens_44.jpg/revision/latest?cb=20111216235353", description: "A parody of the Holders series about fluffy kittens." },
      { name: "The Hook", image: "https://static.wikia.nocookie.net/creepypasta/images/3/35/Brownhook.jpg/revision/latest?cb=20260119011206", description: "A troll pasta playing on the classic urban legend." },
      { name: "Old News", image: "https://static.wikia.nocookie.net/creepypasta/images/2/27/Zombies_in_Graveyard.jpg/revision/latest?cb=20120406213011", description: "Zombies presented as mundane everyday news." },
      { name: "Survival Guide", image: "https://static.wikia.nocookie.net/creepypasta/images/7/72/Creepypasta_survival_guide.jpg/revision/latest?cb=20120320150653", description: "Absurd survival tips for creepypasta creatures." },
      { name: "Marks", image: "https://static.wikia.nocookie.net/creepypasta/images/9/99/Apples.png/revision/latest?cb=20111124040755", description: "Mysterious marks with absurd explanations." },
      { name: "Who Was Conversing With Me on the Cellular Phone?", image: "https://static.wikia.nocookie.net/creepypasta/images/8/8a/Joseph-Ducreaux.jpg/revision/latest?cb=20110325044724", description: "A verbose rephrasing of 'WHO WAS PHONE?'." },
      { name: "The Boy Who Loved to Read", image: null, description: "A troll pasta about a boy whose love for reading leads to absurd consequences." },
      { name: "The Business of Death", image: null, description: "A humorous take on death as a business enterprise." },
      { name: "Cackling", image: null, description: "A troll pasta centered around disturbing laughter." },
      { name: "A Fresh Start", image: null, description: "A troll pasta about starting over with comedic twists." },
      { name: "Harmony", image: null, description: "A troll pasta delivering chaos instead of harmony." },
      { name: "The Keeper", image: null, description: "A troll pasta about an entity that 'keeps' things." },
      { name: "Last Words", image: null, description: "A troll pasta featuring absurd final words." },
      { name: "The Mail Box", image: null, description: "The terrifying horrors of a mailbox." },
      { name: "The Scariest Video Game Ever", image: null, description: "A parody of video game horror stories." },
      { name: "Thug Aim", image: null, description: "A troll pasta known for its absurd content." }
    ]
  }
};

/* === HELPER FUNCTIONS === */

function getWikiUrl(entryName) {
  const encoded = encodeURIComponent(entryName.replace(/ /g, '_'));
  return `https://creepypasta.fandom.com/wiki/${encoded}`;
}

function getArchiveEntries(categoryId) {
  const cat = HM_WIKI_ARCHIVE[categoryId];
  return cat ? cat.entries : [];
}

function getAllArchiveCategories() {
  return Object.values(HM_WIKI_ARCHIVE).map(cat => ({
    id: cat.id,
    name: cat.name,
    description: cat.description,
    icon: cat.icon,
    totalItems: cat.totalItems,
    fetchedCount: cat.entries.length
  }));
}

function searchArchiveEntries(query) {
  const q = query.toLowerCase();
  const results = [];
  for (const [catId, cat] of Object.entries(HM_WIKI_ARCHIVE)) {
    for (const entry of cat.entries) {
      if (entry.name.toLowerCase().includes(q) || (entry.description && entry.description.toLowerCase().includes(q))) {
        results.push({ ...entry, categoryId: catId, categoryName: cat.name });
      }
    }
  }
  return results;
}

function getEntriesByLetter(letter) {
  const l = letter.toLowerCase();
  const results = [];
  for (const [catId, cat] of Object.entries(HM_WIKI_ARCHIVE)) {
    for (const entry of cat.entries) {
      if (entry.name[0] && entry.name[0].toLowerCase() === l) {
        results.push({ ...entry, categoryId: catId });
      }
    }
  }
  return results;
}
