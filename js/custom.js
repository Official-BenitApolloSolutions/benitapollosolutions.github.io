'use strict';

fetch('https://api.country.is/')
  .then(response => response.json())
  .then(data => {
    console.log('Country Data:', data);
   //  document.getElementById('locale').innerText = data.city + ', ' + data.country;
   if(location.href === 'https://benitapollosolutions.com/coding-bootcamp/pricing/index.html?utm_source=homepage' || location.href === 'https://www.benitapollosolutions.com/coding-bootcamp/pricing/index.html?utm_source=homepage' || location.href === 'https://benitapollosolutions.com/coding-bootcamp/pricing/index.html?utm_source=homepage' || location.href === 'https://www.benitapollosolutions.com/home.html' || location.href === 'https://benitapollosolutions.com/home.html') {
      document.getElementById('country').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
             </svg> ${data.country}`;
      updateFlag();
      countryDetails();
      togglePricingInfo();
    }
    window.data = data;
  })
  .catch(error => console.error('Error fetching country data:', error));

  (()=>{
    const year = new Date().getFullYear();
    document.getElementById('year').innerText = year;
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      document.getElementById('locale').innerText = 'Localhost';
    }
    if (location.hostname === 'benitapollosolutions.com' || location.hostname === 'www.benitapollosolutions.com') {
      const programmingBootcampLink = document.getElementById('programming-bootcamp');
      if (programmingBootcampLink) {
        programmingBootcampLink.href = 'https://codebest.com/coding-bootcamp/pricing/index.html';
      }
    }
    if(location.href.indexOf('utm_source=homepage') !== -1) {
      const pricingSection = document.getElementById('pricing-section');  
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  })();
  // user
  const updateFlag = function () {
    const countryCode = data.country;
    const flagUrl = `https://flagcdn.com/256x192/${countryCode.toLowerCase()}.png`;
    // console.log(flagUrl)
    document.getElementById('flag').src = flagUrl;
  };

  const countryDetails = function() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const tzArr = userTimeZone.split("/");
    const userRegion = tzArr[0];
    console.log(`Region: ${userRegion}`);
    console.log(`Time Zone: ${userTimeZone}`);
    document.getElementById('locale').innerText = `${userRegion}, ${userTimeZone}`;
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);
      document.getElementById('country-details').innerText = `IP: ${data.ip} | Latitude: ${lat} | Longitude: ${lon} | Region: ${userRegion} | Time Zone: ${userTimeZone}`;
    });

    // document.getElementById('country-details').innerText = `IP: ${data.ip} | Latitude: ${data.latitude} | Longitude: ${data.longitude} | Region: ${userRegion} | Time Zone: ${userTimeZone}`;
  }

const togglePricingInfo = function() {
 
  if (data.country !== 'GH' && data.country !== 'US' && data.country === 'UK')  {
    // Update pricing information for non-US visitors
    const nonUsPricing = {
      platinum: '€28.68',
      deluxe: '€21.51',
      gold: '€35.85'
    };
    const moduleNonUsPricing = {
      platinum: '€17.02',
      deluxe: '€10.64',
      gold: '€21.27'
    };
    document.querySelectorAll('.platinum-price').forEach(el => el.innerText = nonUsPricing.platinum);
    document.querySelectorAll('.deluxe-price').forEach(el => el.innerText = nonUsPricing.deluxe);
    document.querySelectorAll('.gold-price').forEach(el => el.innerText = nonUsPricing.gold);
  }
  else if (data.country === 'GH') {
    // Update pricing information for Ghanaian visitors
    const ghPricing = {
    //   monthly: '₵10',
    //   yearly: '₵100',
    //   lifetime: '₵1000'
         platinum: '₵400',
         deluxe: '₵300',
         gold: '₵500'
    };
    const ghModulePricing = {
      platinum: '₵240',
      deluxe: '₵150',
      gold: '₵300'
    }
    document.querySelectorAll('.platinum-price').forEach(el => el.innerText = ghPricing.platinum);
    document.querySelectorAll('.deluxe-price').forEach(el => el.innerText = ghPricing.deluxe);
    document.querySelectorAll('.gold-price').forEach(el => el.innerText = ghPricing.gold);
  }
  else {

    // Update pricing information for other visitors
    const otherPricing = {
      platinum: '$33.32',
      deluxe: '$24.99',
      gold: '$41.65'
    };
    const moduleOtherPricing = {
      platinum: '$33.32',
      deluxe: '$24.99',
      gold: '$41.65'
    }
    document.querySelectorAll('.platinum-price').forEach(el => el.innerText = otherPricing.platinum);
    document.querySelectorAll('.deluxe-price').forEach(el => el.innerText = otherPricing.deluxe);
    document.querySelectorAll('.gold-price').forEach(el => el.innerText = otherPricing.gold);
  }
}

