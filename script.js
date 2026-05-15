// Target date: August 15, 2026
const targetDate = new Date('August 15, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        if(document.getElementById('countdown-compact')) {
            document.getElementById('countdown-compact').innerText = "LIVE!";
            document.getElementById('days-compact').innerText = "Happy Birthday!";
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update compact display if it exists
    const compactTimer = document.getElementById('countdown-compact');
    const compactDays = document.getElementById('days-compact');

    if (compactTimer) {
        compactTimer.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    if (compactDays) {
        compactDays.innerText = `${days} Days to go`;
    }

    // Legacy support for older IDs just in case
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
    if (minsEl) minsEl.innerText = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.innerText = String(seconds).padStart(2, '0');
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
