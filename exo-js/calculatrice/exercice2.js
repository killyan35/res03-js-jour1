let aujd = new Date();
let année = aujd.getFullYear();
let mois = aujd.getMonth();
let jour = aujd.getDate();
let anniv = jour + mois + année ;
const userjour = (jour + (window.prompt("quel jour ?")));
const usermois = (mois + (window.prompt("quel mois ?")));
const userannée = (année - (window.prompt("quel année ?")));

const userName = window.prompt("Comment tu t'appelle ?");
const userName2 = window.prompt("Quel est ton nom de famille ?");
console.log(`${année}`);
console.log(`Salut ${userName} ${userName2}, cette année tu aura ${userannée} dans ${userjour} jour ${usermois} mois  !`);