function getShippingCost(country){
    let countryLower = country.toLowerCase();
    let costAustralia = 170;
    let costChina = 100;
    let costChile = 250;
    let costJamaica = 120;
    
    switch (countryLower) {
        case 'australia':
            return `Shipping to Australia will cost ${costAustralia} credits`;
        case 'china':
            return `Shipping to China will cost ${costChina} credits`;
        case 'chile':
            return `Shipping to Chile will cost ${costChile} credits`;
        case 'jamaica':
            return `Shipping to Jamaica will cost ${costJamaica} credits`;
        default:
            return "Sorry, there is no delivery to your country";
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
