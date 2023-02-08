// ==UserScript==
// @name        [HFR] Direct to drapals
// @namespace   github.com/fonfano
// @match       https://forum.hardware.fr/*
// @grant       none
// @version     0.5.0
// @author      Lt Ripley
// @description Charge automatiquement la page des drapeaux lorsqu'on clique sur la racine forum.hardware.fr ou sur un lien inséré dans les toolbars et ajoute des liens pages prec page suiv
// ==/UserScript==


// Historique
// 05/02/2023   Upgrade     v 0.5.0 : Ajout de liens page suivante / page précédente dans la toolbar
// 29/04/2022   Upgrade     v 0.4.0 : Ajout d'un lien dans la toolbar
// 07/10/2020   Refonte.    v 0.3.0 : Changement du fonctionnement : Modif de l'adresse des liens au lieu de capter les clics dessus + fonction
// 02/10/2020   Modif.      v 0.2.1 : Petite modification du code pour fonctionner aussi quand il n'y a qu'un seul arbre
// 28/09/2020   Refonte.    v 0.2.0 : Plus rapide.  Va directement sur les drapeaux sans passer par la racine qui aussi maintenant reste accessible sans désactiver le script
// 25/09/2020   Création.   v 0.1.0


// Merci aux devs du topic Pimp my HFR !


//OPTIONS
let drapalsLinkInToolbars = true;  // ajoute un lien dans la toolbar. true = activé, false = désactivé
let pagesPrecSuivLinksInToolbars = true;  // ajoute des liens vers page prec / page suiv.  true = activé




// Partie arbres
if ( document.getElementById("md_arbo_tree_1") )  {
  document.querySelector("#md_arbo_tree_1 > a.Ext" ).href = "https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
}


if ( document.getElementById("md_arbo_tree_b_1") )  {
  document.querySelector("#md_arbo_tree_b_1 > a.Ext" ).href = "https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
}



// partie toolbars
var toolBarCollection = document.getElementsByClassName("toolbar");


// Partie Drapals in toolbars
if (drapalsLinkInToolbars)  {

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


// partie liens page prec page suiv dans les toolbars
if (pagesPrecSuivLinksInToolbars)  {

  var pagePrecExist = false;
  var pageSuivExist = false;

  let pagePrecLien = document.createElement("a");
  let pageSuivLien = document.createElement("a");

  for (var a of document.querySelectorAll(".pagepresuiv" )) {
    if (a.textContent.includes("Page Précédente" )) { // On cherche des éléménts clicables Page précédente dans des classes pagepresuiv
      pagePrecLien.href = a.children[0].href; // Le lien est l'élément child direct de .pagepresuiv
      pagePrecExist = true;
    }
    if (a.textContent.includes("Page Suivante" )) {
      pageSuivLien.href = a.children[0].href;
      pageSuivExist = true;
    }
  }

  for (var a2 of document.querySelectorAll(".cFondu" )) {  // eliminer le/les grisés

    if (a2.textContent.includes("Page Précédente" )) {
      pagePrecExist = false;
    }

    if (a2.textContent.includes("Page Suivante" )) {
      pageSuivExist = false;
    }
  }

  //pagePrecExist && pagesPrecSuivDiv.appendChild(pagePrecLien);  // equivalent à : pagePrecExist ? pagesPrecSuivDiv.appendChild(pagePrecLien) : foo = 1

  if (pagePrecExist || pageSuivExist)  {

    let pagesPrecSuivDiv = document.createElement("div");
    pagesPrecSuivDiv.setAttribute("class", "left" );
    pagesPrecSuivDiv.style.marginLeft = "13px";
    pagesPrecSuivDiv.style.marginRight = "3px";
    pagesPrecSuivDiv.style.marginTop = "2px";

    if (pagePrecExist)  {
      let precTexte = document.createTextNode(" < ");
      pagePrecLien.appendChild(precTexte);
      pagesPrecSuivDiv.appendChild(pagePrecLien);
    }

    if (pageSuivExist)  {
      let suivTexte = document.createTextNode(" > ");
      pageSuivLien.appendChild(suivTexte);
      pagesPrecSuivDiv.appendChild(pageSuivLien);
    }

    for (let toolBar of toolBarCollection) {
      let clone = pagesPrecSuivDiv.cloneNode(true);
      toolBar.insertBefore(clone, toolBar.querySelector("div.spacer" ));
    }
  }
}
