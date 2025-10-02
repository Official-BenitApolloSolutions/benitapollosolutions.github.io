import { getStartedFunction } from './index.js';

function countdown(endDate) {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      clearInterval(timer);
      console.log("EXPIRED");
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //   console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      document.getElementById('event-date').innerText = `${days}d`;
    }
  }, 1000);
}

const endDate = new Date("September 23, 2025 13:00:00").getTime();
countdown(endDate);

document.addEventListener('DOMContentLoaded', function() {
    getStartedFunction();
});

// fetch('https://ipapi.co/json/')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });   