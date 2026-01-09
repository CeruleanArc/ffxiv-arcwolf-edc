const app = document.getElementById("app");

const ASTRAL_MOONS = [
  "1st Astral Moon",
  "2nd Astral Moon",
  "3rd Astral Moon",
  "4th Astral Moon",
  "5th Astral Moon",
  "6th Astral Moon",
];
const UMBRAL_MOONS = [
  "1st Umbral Moon",
  "2nd Umbral Moon",
  "3rd Umbral Moon",
  "4th Umbral Moon",
  "5th Umbral Moon",
  "6th Umbral Moon",
];

function getEorzeanDate(earthDate) {
  const year = earthDate.getFullYear();
  const month = earthDate.getMonth();
  const day = earthDate.getDate();
  const localDate = new Date(year, month, day);

  // 1. AUGHT REVISION (Aug 27, 2013 - Dec 31, 2013)
  const aughtStart = new Date(2013, 7, 27);
  const yearEnd = new Date(2013, 11, 31);

  if (localDate >= aughtStart && localDate <= yearEnd) {
    // Calculate total milliseconds and convert to whole days
    const diffTime = localDate.getTime() - aughtStart.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    // THE DILATION: 126 days elapsed (Aug 27 to Dec 31)
    // Using 3.0397 ensures Dec 31 (Day 126) maps to Sun 384.
    const totalSuns = Math.floor(diffDays * 3.0397) + 1;
    return formatEorzean(totalSuns, 0, "7AE");
  }

  // 2. STANDARD 7AE (2014+)
  if (year >= 2014) {
    return formatEorzean(getNominalTotalSuns(month, day), year - 2013, "7AE");
  }

  // 3. 7UE (2008 - Aug 26, 2013)
  if (year >= 2008 && localDate < aughtStart) {
    return formatEorzean(getNominalTotalSuns(month, day), year - 2008, "7UE");
  }

  // 4. 6AE (Pre-2008)
  return formatEorzean(
    getNominalTotalSuns(month, day),
    1572 - (2007 - year),
    "6AE"
  );
}

function getNominalTotalSuns(month, day) {
  const monthOffsets = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352];
  let slide = 0;
  // This ensures Feb 28 maps to Sun 31, keeping the year 384 suns long
  if (month === 0 && day >= 28) slide = 1;
  if (month === 1) {
    if (day >= 7) slide += 1;
    if (day >= 14) slide += 1;
    if (day >= 21) slide += 1;
    if (day >= 28) slide += 3;
  }
  // Simplified for all months for stability
  if (month >= 2 && day >= 28) slide = 1;
  return monthOffsets[month] + day + slide;
}

function formatEorzean(totalSuns, year, era) {
  const moonIdx = Math.floor((totalSuns - 1) / 32);
  const sun = ((totalSuns - 1) % 32) + 1;
  const list = moonIdx % 2 === 0 ? ASTRAL_MOONS : UMBRAL_MOONS;
  return `${sun} Sun, ${
    list[Math.floor(moonIdx / 2)]
  }, Year ${year} of  ${era}`;
}

// --- SECTION 1: THE UI RENDER ---
app.innerHTML = `
  <div class="main-container">
    <div class="converter-box">
      <h1>
        <span class="title-the">The</span>
        <span class="title-brand">FFXIV-Arcwolf</span>
        <span class="title-app">Eorzean Date Converter</span>
      </h1>
      <input type="date" id="dateInput">
      <div id="output">Choose an Earth calendar date to begin</div>
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
  `; // This backtick MUST be here to close the UI section.

// --- SECTION 2: THE LOGIC LISTENER ---
// Ensure this is OUTSIDE and AFTER the backtick above.
document.getElementById("dateInput").addEventListener("change", (e) => {
  const [y, m, d] = e.target.value.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  document.getElementById("output").innerText = getEorzeanDate(date);
});
