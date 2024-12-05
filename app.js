// on donne l'url du site a appeller
fetch('data.json')
    .then((rep) => {
        return rep.json()

    })
    .then(donnee => {
        console.log(donnee.activites);
        afficher(donnee.activites)
        afficher2(donnee.temoignages)
        afficher3(donnee.heroActivite)
    })
//role : afficher
// parametre
//retour
function afficher(activite) {
    activite.forEach(act => {
        let nom = act.nom
        let desc = act.description
        let img = act.imageurl
        let template1 = `<div class="card width30">
                <img src="${img}" alt="image en lien avec l'aventure">
                <div>
                    <h3>${nom}</h3>
                    <p>${desc}</p>
                    <a href="aventure.html?id=${act.id}" target="_blank">Réservez !</a>
                </div>
            </div>`
        let affichage = document.querySelector("#containerCard")
        affichage.innerHTML += template1

    });
}


function afficher2(temoignage) {
    temoignage.forEach(tem => {
        let prenom = tem.prenom
        let titreXP = tem.typeExperience
        let com = tem.commentaire
        let rate = tem.note
        let etoilePleine = "★"
        let etoileVide = "☆"
        let rateEtoile = etoilePleine.repeat(rate)
        let rateEtoileV = etoileVide.repeat(5 - rate)

        let templateAvis = `<div class="cardAvis marginAvis">
                <div class="flex alignItem">
                    <img src="assets/avis_photo.jpg" alt="">
                    <div class="width45">
                        <h5>${prenom}</h5>
                        <p>${rateEtoile}${rateEtoileV}</p>
                    </div>
                </div>
                <h5>${titreXP}</h5>
                <p>${com}</p>
            </div>`
        /*il faut que mon nombre sur 5 dans chaque avis ce traduise en étoile selon le nombre sur et le nombre d'étoile manquant
devient une etoile vide je crée donc 2 boites qui va contenir mes étoile vide et remplisle nombre d'etoile plaine correspondra a ma not et le nombre d'etoile vide sera le resultat de ma note (donc le nombre d'etoile) moins 5 (qui me donnera donc le nombre d'etoile vide)  */



        let affichageAvis = document.querySelector("#containerAvis")
        affichageAvis.innerHTML += templateAvis
    });

    // fonction pour remplacer des element de template du hero aventure
}
function afficher3(hero) {
    hero.forEach(elementHero => {

        // url
        let url = new URL("http://127.0.0.1:5500/aventure.html?id=2")
        let elementUrl = url.pathname;
        
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
                <a href="#aventures" class="btnHero alignItem">Réservez
                    votre
                    aventure</a>
            </div>
        </div>`
        //let affichageAventure = document.querySelector("#containerAventure")
        //affichageAventure.innerHTML += templateAventure

    });
}


/*il faut que mon nombre sur 5 dans chaque avis ce traduise en étoile selon le nombre sur et le nombre d'étoile manquant
devient une etoile vide je crée donc 2 boites qui va contenir mes étoile vide et remplisle nombre d'etoile plaine correspondra a ma not et le nombre d'etoile vide sera le resultat de ma note (donc le nombre d'etoile) moins 5 (qui me donnera donc le nombre d'etoile vide)  */


