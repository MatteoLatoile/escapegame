// on donne l'url du site a appeller
fetch('data.json')
.then ((rep)=>{
    return rep.json()

})
.then (donnee=>{
    console.log(donnee.activites);
   afficher(donnee.activites)
   afficher2(donnee.temoignages)
})
//role : afficher
// parametre
//retour
function afficher(activite){
    activite.forEach(act => {
        let nom = act.nom
        let desc = act.description
        let img = act.imageurl
        let template1 = `<div class="card width30">
                <img src="${img}" alt="image en lien avec l'aventure">
                <div>
                    <h3>${nom}</h3>
                    <p>${desc}</p>
                    <a href="">Réservez !</a>
                </div>
            </div>`
            let affichage = document.querySelector("#containerCard")
            affichage.innerHTML += template1

    });
}


function afficher2(temoignage){
    temoignage.forEach(tem => {
        let prenom = tem.prenom
        let titreXP = tem.typeExperience
        let com = tem.commentaire
        let rate = tem.note

        let templateAvis = `<div class="cardAvis marginAvis">
                <div class="flex alignItem">
                    <img src="assets/avis_photo.jpg" alt="">
                    <div class="width45">
                        <h5>${prenom}</h5>
                        <p>${rate}</p>
                    </div>
                </div>
                <h5>${titreXP}</h5>
                <p>${com}</p>
            </div>`

            let affichageAvis = document.querySelector("#containerAvis")
            affichageAvis.innerHTML += templateAvis
    });
    
}