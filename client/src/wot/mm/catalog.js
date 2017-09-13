import Battle from './battle';

class Catalog {
  static singleMinTier () {return 1};
  static singleMaxTier () {return 10};
  static doubleMinTier () {return 3};
  static doubleMaxTier () {return 10};
  static tripleMinTier () {return 6};
  static tripleMaxTier () {return 10};
  
  constructor (singleChance, doubleChance, tripleChance) {
    this.battles = [];
  
    //Construct single tier battles
    let singlePossibilities = Catalog.singleMaxTier() - Catalog.singleMinTier() + 1;
    for (let i = Catalog.singleMinTier(); i <= Catalog.singleMaxTier(); i++) {
      this.battles.push(new Battle(i, 1, singleChance / singlePossibilities))
    }
  
    //Construct double tier battles
    let doublePossibilities = Catalog.doubleMaxTier() - Catalog.doubleMinTier() + 1;
    for (let i = Catalog.doubleMinTier(); i <= Catalog.doubleMaxTier(); i++) {
      this.battles.push(new Battle(i, 2, doubleChance / doublePossibilities))
    }
  
    //Construct triple tier battles
    let triplePossibilities = Catalog.tripleMaxTier() - Catalog.tripleMinTier() + 1;
    for (let i = Catalog.tripleMinTier(); i <= Catalog.tripleMaxTier(); i++) {
      this.battles.push(new Battle(i, 3, tripleChance / triplePossibilities))
    }
  }
  
  battlesForTier (tier) {
    if (tier < 1 || tier > 10) {
      return [];
    }
    else {
      return this.battles.filter(battle => {
        return tier <= battle.topTier && tier > battle.topTier - battle.spreadSize;
      })
    }
  }
  
  battlesArrangedByTier () {
    let arrangement =  [];
    //This is dumb and slow way, but quick to code
    for (let tier = 1; tier <= 10; tier++) {
      arrangement.push(this.battlesForTier(tier));
    }
    return arrangement;
  }
}

export default Catalog;