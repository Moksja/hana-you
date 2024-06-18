export class Plant {
    constructor(name, src, category, id, price, bestseller, favourite, arrosage, lumiere) {
      this.name = name;
      this.src = src;
      this.category = category;
      this.id = id;
      this.price = price;
      this.bestseller = bestseller;
      this.favourite = favourite;
      this.arrosage = arrosage;
      this.lumiere = lumiere;
    }
}

export const plantList = [
    new Plant('monstera', require('../assets/images/plants/monsterra.png'),'classique', 'monstera-0', 10.99, false, false, 2, 3),
    new Plant('ficus lyrata', require('../assets/images/plants/ficus.png'), 'classique', 'ficusLyrata-1', 15.99, false, false, 3, 3),
    new Plant('pothos argenté', require('../assets/images/plants/pothos.png'), 'classique', 'pothosArgente-2', 12.99, false, false, 2, 2),
    new Plant('yucca', require('../assets/images/plants/yucca.png'), 'classique', 'yucca-3', 18.99, false, false, 1, 3),
    new Plant('olivier', require('../assets/images/plants/olivier.png'), 'extérieur', 'olivier-4', 25.99, false, false, 1, 3),
    new Plant('géranium', require('../assets/images/plants/geranium.png'), 'extérieur', 'geranium-5', 5.99, false, false, 2, 2),
    new Plant('basilic', require('../assets/images/plants/basilic.png'), 'extérieur', 'basilic-6', 3.99, false, false, 3, 2),
    new Plant('aloe', require('../assets/images/plants/aloe.png'), 'plante grasse', 'aloe-7', 7.99, false, false, 1, 3),
    new Plant('succulente', require('../assets/images/plants/succulente.png'), 'plante grasse', 'succulente-8', 4.99, false, false, 1, 2),
    new Plant('cactus', require('../assets/images/plants/cactus.png'), 'plante grasse', 'cactus-9', 9.99, true, false, 1, 3) 
];

export let cartList = [];
