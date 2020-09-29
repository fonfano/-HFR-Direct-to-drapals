// ==UserScript==
// @name        [HFR] Direct to drapals
// @namespace   github.com/fonfano
// @match       https://forum.hardware.fr/*
// @grant       none
// @version     0.2.0
// @author      Lt Ripley
// @description Charge automatiquement la page des drapeaux lorsqu'on va sur la racine du forum.hardware.fr
// ==/UserScript==


// Historique
// 28/09/2020   Refonte.    v 0.2.0 : Plus rapide.  Va directement sur les drapeaux sans passer par la racine qui en plus maintenant reste accessible sans désactiver le script
// 25/09/2020   Création.   v 0.1.0


// Merci aux devs du topic Pimp my HFR !


if ( document.getElementById("md_arbo_tree_1") && document.getElementById("md_arbo_tree_b_1") )   // double condition pour s'assurer qu'on est dans un topic
                                                                                                  // et laisser l'accès a la racine quand on est pas dans un topic
{
  let upRootLink = document.getElementById("md_arbo_tree_1");     // lien vers la racine dans l'arbre du haut
  let downRootLink = document.getElementById("md_arbo_tree_b_1"); // du bas
  
  upRootLink.onclick = toDrapals;
  downRootLink.onclick = toDrapals;
}


function toDrapals() {
  
  console.log("toDrapals passe");
  
  event.preventDefault();  // bloquer le comportement par défaut (aller sur la racine)

  document.location.href="https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
}
