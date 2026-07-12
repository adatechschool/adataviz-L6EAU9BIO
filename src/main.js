// IMPORTS

import {filtrerNom} from "./utils.js"
import { filtrerType } from "./utils.js"
import { filtrerHoraires } from "./utils.js"
import { filtrerAdresse } from "./utils.js"

// SELCTEURS
const card = document.querySelector(".card_container")
const total_ilot = document.querySelector(".total_ilot")

// CONTIENTB TOUTE LA DATE BRUTE
let allData = []

//APPLICATEUR DE FILTRES

const applyFilters = () => {
  let result = allData

  const nomValue = document.querySelector(".nom_ilot").value
  const typeValue = document.querySelector(".type_ilot").value
  const horairesValue = document.querySelector(".horaires_ilot").value
  const adresseValue = document.querySelector(".adress_ilot").value

  result = filtrerNom(result, nomValue)
  result = filtrerType(result, typeValue)
  result = filtrerHoraires(result, horairesValue)
  result = filtrerAdresse(result, adresseValue)

  displayCards(result)
}

document.querySelector(".nom_ilot").addEventListener("input", applyFilters)
document.querySelector(".type_ilot").addEventListener("input", applyFilters)
document.querySelector(".horaires_ilot").addEventListener("input", applyFilters)
document.querySelector(".adress_ilot").addEventListener("input", applyFilters)




// CONTENEUR QUI SE VIDE AU FUR ET A MESURE
const displayCards = (dataArray) => {
  card.querySelectorAll(".card, .no_result").forEach((el) =>el.remove())
  
  if (dataArray.length === 0) {
  card.insertAdjacentHTML("beforeend", `<p class="no_result">Aucun îlot ne correspond à votre recherche</p>`)
  return
}  else {
  
  dataArray.forEach((element) => {
  

    const card_content = 
        `<article class="card"><p class="nom_ilot_card"> ${element.nom_ifu} </p>
        <p>${element.type_ifu}</p>
        <p>${ element.horaire_ifu !== null ? element.horaire_ifu : "Pas d'horaires"}</p>
        <p>${element.adresse_ifu}</p>
        <!-- JEU DE DONNES COROMPU SUR CES DEUX ELEMENTS DEPUIS JEUDI 09/07<p>${element.code_insee}</p>
        <p>${element.commune}</p> -->
        </article>`
        
        card.insertAdjacentHTML("beforeend", card_content)
  })}
}



// APPEL DONNEES API
const fetchData = async () => {
  try {
    const response = await fetch("https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_ilot-fraicheur-nantes-metropole/records?limit=100")
    const data = await response.json()
    
    allData = data.results
    
      const total_ilot_content = 
      `<p> Total des Ilots de fraicheur: ${data.total_count}</p>`
      console.log(total_ilot_content);
      
      total_ilot.insertAdjacentHTML("beforeend",total_ilot_content)

    displayCards(allData)
    
  } catch (err) {
    console.error(err.message)
  }
}

fetchData()

