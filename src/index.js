const app = document.getElementById("app");

// --- CONFIGURATION: THE OFFICIAL MAPPING ---
// This list defines which Earth dates map to TWO Eorzean Suns.
// Format: Month (0-11): [Day, Day...]
// Note: We include 28 for Feb to handle non-leap years. 
// The logic below automatically handles Leap Years (Feb 29).
const EXTRA_SUN_DATES = {
  0: [28],            // Jan (31 days + 1 = 32 Suns)
  1: [7, 14, 21, 28], // Feb (28 days + 4 = 32 Suns)
  2: [28],            // Mar (31 days + 1 = 32 Suns)
  3: [7, 28],         // Apr (30 days + 2 = 32 Suns)
  4: [29],            // May (31 days + 1 = 32 Suns)
  5: [7, 28],         // Jun (30 days + 2 = 32 Suns)
  6: [28],            // Jul (31 days + 1 = 32 Suns)
  7: [28],            // Aug (31 days + 1 = 32 Suns)
  8: [7, 28],         // Sep (30 days + 2 = 32 Suns)
  9: [28],            // Oct (31 days + 1 = 32 Suns)
  10: [7, 28],        // Nov (30 days + 2 = 32 Suns)
  11: [28]            // Dec (31 days + 1 = 32 Suns)
};

const EORZEAN_TIMELINE = {
  "6AE-470": "The nation of Sharlayan is founded in the Northern Empty.",
  "6AE-547": "Haldrath, the first Azure Dragoon, fells Nidhogg; the nation of Ishgard is founded.",
  "6AE-1021": "The Belah'dian civilization collapses, eventually leading to the founding of Ul'dah and Sil'dih.",
  "6AE-1468": "The Autumn War begins as Ala Mhigo invades the Black Shroud; Gridania and its allies eventually prevail.",
  "6AE-1500": "Ketenramm Blaufystsyn returns to Limsa Lominsa from the New World.",
  "6AE-1521": "The Garlean Empire is founded under Solus zos Galvus.",
  "6AE-1557": "Ala Mhigo falls to the Garlean Empire; Nidhogg awakens and begins his assault on Ishgard.",
  "6AE-1562": "The Bozja Citadel is destroyed by the Meteor Project; the Battle of Silvertear Skies occurs.",
  "6AE-1572": "The Seventh Umbral Calamity; the Battle of Carteneau and the release of Bahamut.",
  "7UE-0": "The realm enters a state of mourning and rebuilding following the Calamity.",
  "7UE-5": "The Seventh Umbral Era reaches its apex; the events of A Realm Reborn begin.",
  "7AE-0": "The Seventh Astral Era is officially declared following the fall of the Ultima Weapon.",
  "7AE-2": "The Dragonsong War reaches its final, bloody conclusion (Heavensward).",
  "7AE-4": "The liberation of Ala Mhigo and Doma from Garlean rule (Stormblood).",
  "7AE-6": "The first cross-rift travel to the First; the thwarting of the Final Days (Shadowbringers).",
  "7AE-8": "The journey to the moon and the final confrontation with Meteion (Endwalker).",
  "7AE-11": "Exploration of the New World, Tural, begins (Dawntrail)."
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
  
  const eventText = EORZEAN_TIMELINE[lookupKey];
  const timelineBox = document.getElementById("timelineBox");
  if (eventText) {
    document.getElementById("timeline-event").innerHTML = eventText;
    timelineBox.style.display = "block";
  } else {
    timelineBox.style.display = "none";
  }
});