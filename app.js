$(document).ready(function () {
   $("#rejouer").hide();
   var nombreAleatoire = Math.floor(Math.random() * 11);
   console.log("nombre Aléatoire", nombreAleatoire);
   var essais = 0;

   function newAleatoire() {
      nombreAleatoire = Math.floor(Math.random() * 11);
      essais = 0;
   }

   $("#valider").on("click", function () {
      essais += 1; // essais++ ou essais = essais + 1
      console.log("nombre d'essais", essais);
      var nombreSaisi = $('#number').val();
      if (nombreSaisi.length !== 0) {
         if (nombreAleatoire == nombreSaisi) {
            $("#réponse").html("victoire");
            $("#valider").hide();
            $("#rejouer").show();
            // $("#réponse").html("");
         }
         if (nombreAleatoire < nombreSaisi && essais < 4) {
            $("#réponse").html("c'est plus petit");
         }
         if (nombreAleatoire > nombreSaisi && essais < 4) {
            $("#réponse").html("c'est plus grand");
         }
         if (essais >= 3) {
            $("#valider").hide();
            $("#rejouer").show();
         }
      } else {
         console.log("saisir un nombre valide")
      }

   });

   $("#rejouer").on("click", function () {
      $("#réponse").html("");
      $("#valider").show();
      $("#rejouer").hide();
      $("#number").val("");
      newAleatoire();
   })



});