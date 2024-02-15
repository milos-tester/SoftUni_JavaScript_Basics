function solve(budzet, videoCards, procesori, RAMs){

    let cenaVideoCards = 250 * videoCards
    let cenaPocesori = cenaVideoCards * 0.35 * procesori
    let cenaRAMs = cenaVideoCards * 0.1 * RAMs
    
    let ukupnaCena = cenaVideoCards + cenaPocesori + cenaRAMs

    if (videoCards > procesori){
    ukupnaCena = ukupnaCena - ukupnaCena * 0.15
    }

    if (budzet >= ukupnaCena){
    console.log(`You have ${(budzet - ukupnaCena).toFixed(2)} USD left!`)
    } else {
    console.log (`Not enough money! You need ${(ukupnaCena - budzet).toFixed(2)} USD more!`)
    }
}