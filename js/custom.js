'use strict';

fetch('https://api.country.is/')
  .then(response => response.json())
  .then(data => {
    document.getElementById('country').innerText = `Visitor's country: ${data.country}`;
    window.data = data; // Make data accessible globally
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
  if (data.country !== 'GH' && data.country !== 'US') {
    // Update pricing information for non-US visitors
    const nonUsPricing = {
      platinum: '€28.68',
      deluxe: '€21.51',
      gold: '€35.85'
    };
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
    document.getElementById('platinum-price').innerText = otherPricing.platinum;
    document.getElementById('deluxe-price').innerText = otherPricing.deluxe;
    document.getElementById('gold-price').innerText = otherPricing.gold;
  }
}