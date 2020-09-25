// ==UserScript==
// @name        [HFR] Direct to drapals
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     0.1
// @author      Lt Ripley
// @description : Charge automatiquement la page des drapeaux lorsqu'on va sur la racine du forum.hardware.fr
// 21/09/2020 à 14:11:14
// ==/UserScript==
// Merci aux dev du topic Pimp my HFR



let urlDeBase = document.location.href;

if (urlDeBase == "https://forum.hardware.fr/")  {
  
  document.location.href="https://forum.hardware.fr/forum1f.php?config=hfr.inc&owntopic=1&new=0&nojs=0";
  
}