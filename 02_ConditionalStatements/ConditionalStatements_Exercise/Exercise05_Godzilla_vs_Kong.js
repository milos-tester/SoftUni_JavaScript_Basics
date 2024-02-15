function solve(budget, people, pricePerClothes) {
    let scena = budget * 0.1
  
    let statisti = people * pricePerClothes;
  
    if (people > 150) {
      statisti = statisti * 0.9;
    }
  
    let UkupnaCena = scena + statisti;
  
    if (budget >= UkupnaCena) {
      console.log(`Action!`);
      console.log(`Wingard starts filming with ${(budget - UkupnaCena).toFixed(2)} USD left.`);
    } else {
      console.log(`Not enough money!`);
      console.log(`Wingard needs ${(UkupnaCena - budget).toFixed(2)} USD more.`);
    }
  }