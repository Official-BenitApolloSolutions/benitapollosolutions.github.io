import {loadUrl} from './index.js';

const communityLink = document.getElementById('community');
if (communityLink) {
    communityLink.addEventListener('dblclick', loadUrl);
}

communityLink.style.cursor = 'pointer';

fetch('https://api.country.is/')
  .then(response => response.json())
  .then(data => {
    document.getElementById('country').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
             </svg> ${data.country}`;
              // ${data.countryInfo.flag ? `<img src="${data.countryInfo.flag}" alt="Flag" style="width:20px; height:auto; vertical-align:middle; margin-left:5px;">` : ''}`;
    window.data = data;
    togglePricingInfo();
  })
  .catch(error => console.error('Error fetching country data:', error));

function toggleCountryInfo() {
  const countryInfo = document.getElementById('country');
  countryInfo.style.display = countryInfo.style.display === 'none' ? 'block' : 'none';
}

function togglePricingInfo() {
//   const pricingInfo = document.getElementById('pricing');
//   const currency = document.getElementById('currency').value;
//   pricingInfo.style.display = pricingInfo.style.display === 'none' ? 'block' : 'none';
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
    document.getElementById('module-platinum-price').innerText = moduleNonUsPricing.platinum;
    document.getElementById('module-deluxe-price').innerText = moduleNonUsPricing.deluxe;
    document.getElementById('module-gold-price').innerText = moduleNonUsPricing.gold;
    document.getElementById('platinum-price').innerText = nonUsPricing.platinum;
    document.getElementById('deluxe-price').innerText = nonUsPricing.deluxe;
    document.getElementById('gold-price').innerText = nonUsPricing.gold;
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
    document.getElementById('module-platinum-price').innerText = ghModulePricing.platinum;
    document.getElementById('module-deluxe-price').innerText = ghModulePricing.deluxe;
    document.getElementById('module-gold-price').innerText = ghModulePricing.gold;
    document.getElementById('platinum-price').innerText = ghPricing.platinum;
    document.getElementById('deluxe-price').innerText = ghPricing.deluxe;
    document.getElementById('gold-price').innerText = ghPricing.gold;
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
    document.getElementById('platinum-price').innerText = otherPricing.platinum;
    document.getElementById('deluxe-price').innerText = otherPricing.deluxe;
    document.getElementById('gold-price').innerText = otherPricing.gold;
  }
}

