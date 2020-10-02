// ==UserScript==
// @name        [HFR] Direct to drapals
// @namespace   github.com/fonfano
// @match       https://forum.hardware.fr/*
// @grant       none
// @version     0.2.1
// @author      Lt Ripley
// @description Charge automatiquement la page des drapeaux lorsqu'on va sur la racine forum.hardware.fr
// ==/UserScript==


// Historique
// 02/10/2020   Modif       v 0.2.1 : Petite modification du code pour fonctionner aussi quand il n'y a qu'un seul arbre
// 28/09/2020   Refonte.    v 0.2.0 : Plus rapide.  Va directement sur les drapeaux sans passer par la racine qui aussi maintenant reste accessible sans désactiver le script
// 25/09/2020   Création.   v 0.1.0


// Merci aux devs du topic Pimp my HFR !


if ( document.getElementById("md_arbo_tree_1") )  {
  
  let upperRootLink = document.getElementById("md_arbo_tree_1");     // lien vers la racine dans l'arbre du haut
  upperRootLink.onclick = toDrapals;
  }


if ( document.getElementById("md_arbo_tree_b_1") )  {
  
  let lowerRootLink = document.getElementById("md_arbo_tree_b_1"); // du bas
  lowerRootLink.onclick = toDrapals;
  }

function toDrapals() {
  
  console.log("toDrapals passe");
  
  event.preventDefault();  // bloquer le comportement par défaut (aller sur la racine)

  document.location.href="https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
}
