fetch('data.json')
    .then((rep) => {
        return rep.json()

    })
    .then(donnee => {
        console.log(donnee.activites)
        afficher3(donnee.heroActivite)
    })
//role : afficher
// parametre
//retour

function afficher3(hero) {
    hero.forEach(elementHero => {
        //mes vars pour les integrer dans le template
        let mission = elementHero.nomHero
        let descAventure = elementHero.descHero
        let imgAventure = elementHero.imgFond
        let templateAventure = `<div class="hero">
            <img src="${imgAventure}"
                alt="">
            <div class="bgDivHero">
                <h2>${mission}</h2>
                <p>${descAventure}</p>
                <a href="" class="btnHero alignItem">Réservez
                    votre
                    aventure</a>
            </div>
        </div>`
        //let affichageAventure = document.querySelector("#containerAventure")
        //affichageAventure.innerHTML += templateAventure

    });
}

function dynamique(heros) {
    // Role afficher la bonne activité en fonction de l'id qu'il y a dans l'url
    // parametre: les activtes différentes
    // retour rien 

    // 1 : quel est l'id dans l'url ? 
    let tab = window.location.href.split("=")
    let id = tab[1]
    let idAct = donnee.activites.id

    // 2 : je fouille dans la donnee pour reucperer l'activité qui a l'id corfrespondant
    if (id === idAct) {
        console.log("vrai")
    }
    // 3: je crée le temlpate de l'activité

    // 4: j'affiche le template dans la page html
}