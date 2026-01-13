const app = document.getElementById("app");

// [STRUCTURE UPDATE] Arrays allow multiple events per year
const EORZEAN_TIMELINE = {
  "6AE-470": [
    "The nation of Sharlayan is founded in the Northern Empty."
  ],
  "6AE-547": [
    "Haldrath, the first Azure Dragoon, fells Nidhogg.",
    "The nation of Ishgard is founded.",
    "This test item is created."
  ],
  "6AE-1021": [
    "The Belah'dian civilization collapses.",
    "The founding of Ul'dah and Sil'dih follows shortly after."
  ],
  "6AE-1468": [
    "The Autumn War begins as Ala Mhigo invades the Black Shroud.",
    "Gridania and its allies eventually prevail."
  ],
  "6AE-1500": [
    "Ketenramm Blaufystsyn returns to Limsa Lominsa from the New World."
  ],
  "6AE-1501": [
    "Word of Ketenramm's miraculous discovery spreads across the city-state, and more and more Lominsans set sail in search of glory and riches in the The New World, ushering in a golden age of exploration. These voyages are met with difficulties—shipwrecks in the rough western seas, ambushes by the Sahagin of the Indigo Deep—and the docks and alehouses of the capital are abuzz with tales of fortune and woe.",
    "The starglobe Atlas is built as a recreation based on sketches of Lewphon, the father of Sharlayan astromancy."
  ],
  "6AE-1502": [
    "Word of Ketenramm's miraculous discovery spreads across the city-state, and more and more Lominsans set sail in search of glory and riches in the The New World, ushering in a golden age of exploration. These voyages are met with difficulties—shipwrecks in the rough western seas, ambushes by the Sahagin of the Indigo Deep—and the docks and alehouses of the capital are abuzz with tales of fortune and woe.",
    "The starglobe Atlas is built as a recreation based on sketches of Lewphon, the father of Sharlayan astromancy."
  ],
  "6AE-1503": [
    "Word of Ketenramm's miraculous discovery spreads across the city-state, and more and more Lominsans set sail in search of glory and riches in the The New World, ushering in a golden age of exploration. These voyages are met with difficulties—shipwrecks in the rough western seas, ambushes by the Sahagin of the Indigo Deep—and the docks and alehouses of the capital are abuzz with tales of fortune and woe.",
    "The starglobe Atlas is built as a recreation based on sketches of Lewphon, the father of Sharlayan astromancy."
  ],
  "6AE-1504": [
    "Word of Ketenramm's miraculous discovery spreads across the city-state, and more and more Lominsans set sail in search of glory and riches in the The New World, ushering in a golden age of exploration. These voyages are met with difficulties—shipwrecks in the rough western seas, ambushes by the Sahagin of the Indigo Deep—and the docks and alehouses of the capital are abuzz with tales of fortune and woe.",
    "The starglobe Atlas is built as a recreation based on sketches of Lewphon, the father of Sharlayan astromancy."
  ],
  "6AE-1505": [
    "Solus Galvus enlists in the Republican army at the age of sixteen."
  ],
  "6AE-1513": [
    "Solus Galvus's exploits in battle earn him a promotion to legatus at the age of twenty and four. He promptly pushes through reforms which sanction the use of magitek in the Republican legions."
  ],
  "6AE-1515": [
    "The Republic of Garlemald begins forcefully subjugating and annexing its neighboring city-states."
  ],
  "6AE-1517": [
    "Limsa Lominsa signs a non-aggression pact with the kobold tribes.",
    "Solus van Galvus is named Dictator of Garlemald at age 28.",
    "Republican Airships are launched in battle for the first time; Nhalmasque is conquered."
  ],
  "6AE-1518": [
    "The Battle of Indigo Deep: The Knights of the Barracuda and pirate fleets fail to subjugate the Sahagin."
  ],
  "6AE-1520": [
    "Cornelia unites gladiators to form the Pugilists' Guild."
  ],
  "6AE-1521": [
    "The Garlean Empire is founded under Solus zos Galvus."
  ],
  "6AE-1522": [
    "Solus zos Galvus crowns himself Emperor; Ilsabard is unified under Garlean rule.",
    "The Garlean Empire adopts its own calendar based on the Emperor's reign.",
    "Tatanora manufactures dirigibles, leading to a surge in exploration by flight.",
    "The Battle of Bloodshore: Mistbeard's crew clashes with the League of Lost Bastards."
  ],
  "6AE-1525": [
    "Admiral Guolskyf 'Mastcleaver' Bhaldwaensyn establishes the Culinarians' Guild."
  ],
  "6AE-1528": [
    "The imperial legions of Garlemald launch a military campaign on the eastern continent."
  ],
  "6AE-1529": [
    "Archon Matoya completes 'On Aetheric Convergence'; the tome is banned by the Forum."
  ],
  "6AE-1531": [
    "Tatanora founds Highwind Skyways."
  ],
  "6AE-1535": [
    "Merlwyb Bloefhiswyn is born."
  ],
  "6AE-1539": [
    "The Darklight Raiders eradicate a giant snake in the Aurum Vale."
  ],
  "6AE-1542": [
    "The Thousand Maws of Toto-Rak are closed due to inhumane treatment of prisoners."
  ],
  "6AE-1544": [
    "The Darklight Raiders are disbanded after a failed attempt to purge Cutter's Cry."
  ],
  "6AE-1546": [
    "Theodoric the First ascends the throne as King of Ala Mhigo."
  ],
  "6AE-1552": [
    "King Theodoric razes the Temple of the Fist.",
    "Raubahn Aldynn earns renown for suppressing a mob without bloodshed.",
    "The imperial legions conquer and annex Doma."
  ],
  "6AE-1553": [
    "The XIVth Legion advances on the Ala Mhigan border."
  ],
  "6AE-1554": [
    "Merlwyb kills her father in a duel and assumes command of the League of Lost Bastards.",
    "Raubahn and his comrades keep imperial forces at bay with diversionary maneuvers."
  ],
  "6AE-1555": [
    "Raubahn is promoted to high command after defeating a magitek contingent.",
    "Merlwyb leads an expedition to the New World.",
    "Kan-E-Senna becomes a conjurer at age six.",
    "Sultan Sasabal Ul Sisibal weds Nanasha Ul Nasha.",
    "The pirate Mistbeard vanishes after plundering royal wedding gifts."
  ],
  "6AE-1556": [
    "Raubahn is wounded by a sniper and returns to Coldhearth.",
    "Raubahn meets Curtis Hext, leader of the Ala Mhigan Resistance.",
    "Merlwyb returns to Limsa Lominsa with safe passage to the New World.",
    "Nanamo Ul Namo is born."
  ],
  "6AE-1557": [
    "The people of Ala Mhigo revolt against King Theodric.",
    "The XIVth Legion annexes Ala Mhigo.",
    "Raubahn leaves Gyr Abania to wander the realm.",
    "The Sharlayan colony in Dravania prepares for exodus.",
    "Nidhogg awakens and lays waste to Ferndale."
  ],
  "6AE-1558": [
    "Count Tarresson de Dzemael finances the construction of Dzemael Darkhold."
  ],
  "6AE-1559": [
    "Merlwyb forms a merchant armada.",
    "Ul'dah enacts a law forbidding dealings with beast tribes; beastmen are evicted.",
    "Raubahn is imprisoned in Ul'dah and forced to fight in the gladiator pits."
  ],
  "6AE-1560": [
    "Thordan VII is ordained Archbishop of the Holy See."
  ],
  "6AE-1561": [
    "Kan-E-Senna is named a Seedseer at age twelve.",
    "Nanamo Ul Namo is crowned Sultana at age five after her parents die.",
    "The Eorzean Alliance is formally inaugurated.",
    "Alphinaud and Alisaie are born."
  ],
  "6AE-1562": [
    "The Battle of Silvertear Skies: The Agrius crashes into Midgardsormr.",
    "Sharlayans abandon the Dravanian colony in a mass exodus.",
    "Archon Louisoix forms the Circle of Knowing.",
    "Archons arrive in Eorzea to advocate for the Grand Companies.",
    "Kobolds summon Titan; Sahagin amass crystals for Leviathan.",
    "Ixal summon Garuda and invent the airstone.",
    "Garleans construct Baelsar's Wall.",
    "The Citadel Bozja is destroyed by a Project Meteor field test.",
    "Ascilia (Minfilia) is orphaned during a goobbue rampage."
  ],
  "6AE-1563": [
    "Ishgard withdraws from the Eorzean Alliance.",
    "The Eorzean Alliance's military ties dissolve.",
    "Merlwyb is inaugurated as Admiral of Limsa Lominsa.",
    "Piracy is outlawed; the Upright Thieves become the Rogues' Guild.",
    "Highwind Skyways and Garlond Ironworks partner to create ceruleum-engine airships."
  ],
  "6AE-1564": [
    "Dzemael Darkhold construction is delayed.",
    "Ifrit is sighted for the first time at Mythril Pit T-3."
  ],
  "6AE-1565": [
    "The Company of Heroes is tasked with subduing Titan and Leviathan.",
    "Sultana Nanamo spares Raubahn's life in the Coliseum.",
    "Ishgard restricts chocobo exports."
  ],
  "6AE-1566": [
    "The Company of Heroes vanquishes Titan.",
    "Leviathan is felled by a joint offensive.",
    "Titan and Leviathan are summoned anew."
  ],
  "6AE-1567": [
    "Kobolds construct U'Ghamaro Mines.",
    "Hildibrand Manderville runs away from home.",
    "Voidsent attack Dzemael Darkhold; construction is postponed."
  ],
  "6AE-1568": [
    "Minfilia (18) meets Louisoix and learns of the Echo."
  ],
  "6AE-1569": [
    "Tarresson de Dzemael passes the countship to his son.",
    "A XIVth Legion dreadnaught shoots down a civilian airship."
  ],
  "6AE-1570": [
    "Highwind Skyways suspends regular airship service.",
    "Raubahn achieves 1,000 victories, buys the Coliseum, and joins the Syndicate.",
    "Aldis is banished from Ul'dah after a fixed match kills the Guildmaster.",
    "Minfilia (20) founds the Path of the Twelve."
  ],
  "6AE-1571": [
    "Circle of Knowing Archons infiltrate Gyr Abania; the operation ends in tragedy."
  ],
"6AE-1572": [
    "The Wandering Minstrel sets off for Eorzea.",
    "Alphinaud and Alisaie enter the Studium at age 11.",
    "Limsa Lominsa, Ul'dah, and Gridania form their Grand Companies.",
    "The Seventh Umbral Calamity; the Battle of Carteneau and the release of Bahamut."
  ],
  "7UE-0": [
    "The Wandering Minstrel sets off for Eorzea.",
    "Alphinaud and Alisaie enter the Studium at age 11.",
    "Limsa Lominsa, Ul'dah, and Gridania form their Grand Companies.",
    "The Seventh Umbral Calamity; the Battle of Carteneau and the release of Bahamut."
  ],
  "7UE-1": [
    "The realm is in a state of mourning and rebuilding following the Calamity."
  ],
  "7UE-2": [
    "The realm is in a state of mourning and rebuilding following the Calamity."
  ],
  "7UE-3": [
    "The realm is in a state of mourning and rebuilding following the Calamity."
  ],
  "7UE-4": [
    "The realm is in a state of mourning and rebuilding following the Calamity."
  ],
  "7UE-5": [
    "The Seventh Umbral Era reaches its apex.",
    "The events of A Realm Reborn begin."
  ],
  "7AE-0": [
    "The Seventh Astral Era is officially declared following the fall of the Ultima Weapon.",
    "The Scions move their headquarters to the Rising Stones."
  ],
  "7AE-2": [
    "The Dragonsong War reaches its final, bloody conclusion (Heavensward)."
  ],
  "7AE-4": [
    "The liberation of Ala Mhigo from Garlean rule.",
    "The liberation of Doma (Stormblood)."
  ],
  "7AE-6": [
    "The first cross-rift travel to the First.",
    "The thwarting of the Final Days (Shadowbringers)."
  ],
  "7AE-8": [
    "The journey to the moon.",
    "The final confrontation with Meteion (Endwalker)."
  ],
  "7AE-11": [
    "Exploration of the New World, Tural, begins (Dawntrail)."
  ]
};

const ASTRAL_MOONS = [
  "1st Astral Moon", "2nd Astral Moon", "3rd Astral Moon",
  "4th Astral Moon", "5th Astral Moon", "6th Astral Moon",
];
const UMBRAL_MOONS = [
  "1st Umbral Moon", "2nd Umbral Moon", "3rd Umbral Moon",
  "4th Umbral Moon", "5th Umbral Moon", "6th Umbral Moon",
];

function getOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function getDateComponents(totalSuns) {
  const moonIdx = Math.floor((totalSuns - 1) / 32);
  const sun = ((totalSuns - 1) % 32) + 1;
  const list = moonIdx % 2 === 0 ? ASTRAL_MOONS : UMBRAL_MOONS;
  const moonName = list[Math.floor(moonIdx / 2)];
  return { sun, moonName };
}

function getEorzeanDate(earthDate) {
  const year = earthDate.getFullYear();
  const month = earthDate.getMonth();
  const day = earthDate.getDate(); 
  const localDate = new Date(year, month, day);

  // ACCORD NEXUS PROTOCOL
  if (year < 435) {
    document.getElementById("output").classList.add("denied");
    return `
      <div class="denied-message">
        <div class="denied-l1">ACCESS DENIED BY ORDER OF THE</div>
        <div class="denied-l2">Accord Nexus</div>
        <div class="denied-l3">Choose a date within your registered transtemporal range or risk existential ablation.</div>
      </div>
    `;
  }

  document.getElementById("output").classList.remove("denied");

  // 1. AUGHT REVISION (Aug 27, 2013 - Dec 31, 2013)
  const aughtStart = new Date(2013, 7, 27);
  const yearEnd = new Date(2013, 11, 31);

  if (localDate >= aughtStart && localDate <= yearEnd) {
    const diffTime = localDate.getTime() - aughtStart.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const totalSuns = Math.floor(diffDays * 3.0397) + 1;
    return formatEorzean(totalSuns, 0, "7AE");
  }

  // STANDARD MAPPING LOGIC (Used for 7AE, 7UE, 6AE)
  // We pass 'year' to handle Leap Years correctly
  let currentSuns = getNominalTotalSuns(month, day, year);
  let prevSuns = getNominalTotalSuns(month, day - 1, year); 
  
  // Logic: If today is Sun 30, and yesterday was Sun 28, span is 2.
  let span = currentSuns - prevSuns; 
  if (span < 1) span = 1; 

  // 2. STANDARD 7AE (2014+)
  if (year >= 2014) {
    return formatEorzean(currentSuns, year - 2013, "7AE", span);
  }

  // 3. 7UE (2008 - Aug 26, 2013)
  if (year >= 2008 && localDate < aughtStart) {
    return formatEorzean(currentSuns, year - 2008, "7UE", span);
  }

  // 4. 6AE (Pre-2008)
  return formatEorzean(currentSuns, 1572 - (2007 - year), "6AE", span);
}

// --- CORE ENGINE UPGRADE: Earth Day Summation ---
function getNominalTotalSuns(month, day, year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
  // Earth Days per month
  const earthDaysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  let totalSuns = 0;

  // 1. Add up all previous months
  for (let m = 0; m < month; m++) {
    totalSuns += earthDaysInMonth[m]; // Add pure Earth days
    
    // Add slides from previous months
    if (EXTRA_SUN_DATES[m]) {
      let slides = EXTRA_SUN_DATES[m];
      // LEAP YEAR FIX: If it's a leap year, ignore the Feb 28th slide
      if (isLeap && m === 1) {
        slides = slides.filter(d => d !== 28);
      }
      totalSuns += slides.length;
    }
  }

  // 2. Add days from current month
  totalSuns += day;

  // 3. Add slides from current month up to today
  if (EXTRA_SUN_DATES[month]) {
    let slides = EXTRA_SUN_DATES[month];
    // LEAP YEAR FIX: If it's a leap year, ignore the Feb 28th slide
    if (isLeap && month === 1) {
      slides = slides.filter(d => d !== 28);
    }
    const extraDays = slides.filter(d => day >= d);
    totalSuns += extraDays.length;
  }

  return totalSuns;
}

function formatEorzean(endSun, year, era, span = 1) {
  const eraNames = {
    "7AE": "7th Astral Era",
    "7UE": "7th Umbral Era",
    "6AE": "6th Astral Era"
  };

  let dateString = "";

  if (span === 1) {
    const { sun, moonName } = getDateComponents(endSun);
    dateString = `${getOrdinal(sun)} Sun of the ${moonName}`;
  } else {
    const startSun = endSun - span + 1;
    const startComp = getDateComponents(startSun);
    const endComp = getDateComponents(endSun);

    if (startComp.moonName === endComp.moonName) {
      if (span > 2) { 
         dateString = `${getOrdinal(startComp.sun)} &ndash; ${getOrdinal(endComp.sun)} Sun of the ${startComp.moonName}`;
      } else { 
         dateString = `${getOrdinal(startComp.sun)} or ${getOrdinal(endComp.sun)} Sun of the ${startComp.moonName}`;
      }
    } else {
      dateString = `${getOrdinal(startComp.sun)} Sun of the ${startComp.moonName} <br><span style="font-size:0.8em">or</span><br> ${getOrdinal(endComp.sun)} Sun of the ${endComp.moonName}`;
    }
  }

  return `
    <div class="output-sun">${dateString}</div>
    <div class="output-year">Year ${year} of the ${eraNames[era] || era}</div>
  `;
}

// --- APP INIT ---
app.innerHTML = `
  <div class="main-container">
    <div class="converter-box">
      <h1>
        <span class="title-the">The</span>
        <span class="title-brand">FFXIV-Arcwolf</span>
        <span class="title-app">Eorzean Date Converter v1.5</span>
      </h1>
      <input type="date" id="dateInput">
      <div id="output">Choose an Earth calendar date to begin</div>
      <div class="timeline-box" id="timelineBox" style="display: none;">
          <h3>This Year in Eorzea</h3>
          <div id="timeline-event"></div>
      </div>
    </div>
    
    <div class="era-sidebar">
      <h3>The Lived Chronology Protocol</h3>
      <div class="era-item">
        <strong>Year Aught (0:7AE):</strong>
        <p>A compressed timeline where 384 suns pass in 127 Earth days (303.97% speed) to align the calendars by Jan 1, 2014.</p>
      </div>
      <div class="era-item">
        <strong>Seventh Astral Era (1+:7AE):</strong>
        <p>The current epoch. Uses a 1:1 isochronal mapping where Etheiryan Year = Earth Year – 2013.</p>
      </div>
      <div class="era-item">
        <strong>Legacy Eras (7UE & 6AE):</strong>
        <p>Standardized historical mappings extending back 1,572 years prior to the Seventh Umbral Calamity.</p>
      </div>
    </div>
  </div>
`; 

// --- SECTION 2: THE LOGIC LISTENER (UPDATED) ---
document.getElementById("dateInput").addEventListener("change", (e) => {
  const [y, m, d] = e.target.value.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setFullYear(y); 
  const result = getEorzeanDate(date);
  document.getElementById("output").innerHTML = result;
  
  const eraKey = result.includes("7th Astral") ? "7AE" : result.includes("7th Umbral") ? "7UE" : "6AE";
  const yearMatch = result.match(/Year (\d+)/);
  const yearNum = yearMatch ? yearMatch[1] : null;
  const lookupKey = `${eraKey}-${yearNum}`;
  
  // THE TEMPORAL SHROUD: Only show box if event exists
  const eventsList = EORZEAN_TIMELINE[lookupKey]; // Now retrieves an Array
  const timelineBox = document.getElementById("timelineBox");
  const eventContainer = document.getElementById("timeline-event");

  if (eventsList && eventsList.length > 0) {
    // Convert array to bullet points
    const listHTML = `
      <ul>
        ${eventsList.map(event => `<li>${event}</li>`).join('')}
      </ul>
    `;
    eventContainer.innerHTML = listHTML;
    timelineBox.style.display = "block";
  } else {
    timelineBox.style.display = "none";
  }
});