// ==UserScript==
// @name        [HFR] Direct to drapals
// @namespace   github.com/fonfano
// @match       https://forum.hardware.fr/*
// @grant       none
// @version     0.1.0
// @author      Lt Ripley
// @description Charge automatiquement la page des drapeaux lorsqu'on va sur la racine forum.hardware.fr
// ==/UserScript==

// Creation 25/09/2020

// Merci aux devs du topic Pimp my HFR

let urlDeBase = document.location.href;

if (urlDeBase == "https://forum.hardware.fr/")  {
  
  document.location.href="https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
  
}
