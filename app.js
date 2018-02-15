$(document).ready(function () {

   var nombreAleatoire = Math.floor(Math.random() * 11);
   console.log(nombreAleatoire);

   $("#valider").on("click", function () {
      var nombreSaisi = $('#number').val();

      if (nombreAleatoire == nombreSaisi) {
         console.log("victoire");
      }
      if (nombreAleatoire < nombreSaisi) {
         console.log("c'est plus petit");
      }
      if (nombreAleatoire > nombreSaisi) {
         console.log("c'est plus grand");
      }

   });

});