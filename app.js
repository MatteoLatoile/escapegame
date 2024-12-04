// on donne l'url du site a appeller
fetch('data.json')
.then ((rep)=>{
    return rep.json()

})
.then (donnee=>{
    console.log(donnee.activites);
   
})
//role : afficher
// parametre
//retour
function afficher(activite){
    activite.activites.forEach(element => {     
    });
}