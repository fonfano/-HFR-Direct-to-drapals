// ==UserScript==
// @name        [HFR] Direct to drapals
// @namespace   github.com/fonfano
// @match       https://forum.hardware.fr/*
// @grant       none
// @version     0.4.0
// @author      Lt Ripley
// @description Charge automatiquement la page des drapeaux lorsqu'on clique sur la racine forum.hardware.fr
// ==/UserScript==


// Historique
// 29/04/2022   Upgrade     v 0.4.0 : Ajout d'un lien dans la toolbar
// 07/10/2020   Refonte.    v 0.3.0 : Changement du fonctionnement : Modif de l'adresse des liens au lieu de capter les clics dessus + fonction
// 02/10/2020   Modif.      v 0.2.1 : Petite modification du code pour fonctionner aussi quand il n'y a qu'un seul arbre
// 28/09/2020   Refonte.    v 0.2.0 : Plus rapide.  Va directement sur les drapeaux sans passer par la racine qui aussi maintenant reste accessible sans désactiver le script
// 25/09/2020   Création.   v 0.1.0


// Merci aux devs du topic Pimp my HFR !


//OPTIONS
let drapalsLinkInToolbars = true;  // ajoute un lien dans la toolbar. true = activé, false = désactivé




// Partie arbres

if ( document.getElementById("md_arbo_tree_1") )  {
  
  document.querySelector("#md_arbo_tree_1 > a.Ext" ).href = "https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
  }


if ( document.getElementById("md_arbo_tree_b_1") )  {
  
  document.querySelector("#md_arbo_tree_b_1 > a.Ext" ).href = "https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
  }



// Partie toolbars

if (drapalsLinkInToolbars)  {

  let toolBarCollection = document.getElementsByClassName("toolbar");

  let drapalsDiv = document.createElement("div");
  
  drapalsDiv.setAttribute("class", "left" );
  drapalsDiv.style.marginLeft = "13px";
  drapalsDiv.style.marginRight = "3px";
  drapalsDiv.style.marginTop = "3px";
   
  let drapalsLien = document.createElement("a");
  let texteLien = document.createTextNode("DRAPALS");
  drapalsLien.appendChild(texteLien);
  drapalsLien.href = "https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
  
  drapalsDiv.appendChild(drapalsLien);

  for (let toolBar of toolBarCollection) {

    let clone = drapalsDiv.cloneNode(true);

    toolBar.insertBefore(clone, toolBar.querySelector("div.spacer" ));
  }
  
}
