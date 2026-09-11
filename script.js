// Kiss Counter Settings
// Starts at 0 on September 11, 2026.
// The count increases by 2 after every full 24-hour period.

const START_DATE = new Date("2026-09-11T00:00:00");
const STARTING_COUNT = 0;
const KISSES_PER_DAY = 2;
const ONE_DAY = 24 * 60 * 60 * 1000;

function updateCounter() {
  const now = new Date();

  const daysPassed = Math.floor(
    (now - START_DATE) / ONE_DAY
  );

  const kissCount =
    STARTING_COUNT +
    Math.max(0, daysPassed) * KISSES_PER_DAY;

  document.getElementById("count").textContent = kissCount;
}

updateCounter();
setInterval(updateCounter, 60 * 1000);
