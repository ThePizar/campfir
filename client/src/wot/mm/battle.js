
class Battle {
  constructor (topTier, spreadSize, chance) {
    this.topTier = topTier;
    this.spreadSize = spreadSize;
    this.chance  = chance;
    switch (spreadSize) {
      case 1:
        this.composition = [15];
        break;
      case 2:
        this.composition = [10, 5];
        break;
      case 3:
        this.composition = [7, 5, 3];
        break;
      default:
        this.composition = [];
    }
  }
}

export default Battle