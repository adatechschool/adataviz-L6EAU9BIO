const card = document.querySelector(".card_container")

const fetchData = async () => {
  try {
    const response = await fetch("https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_ilot-fraicheur-nantes-metropole/records?limit=100")
    const data = await response.json()
    console.log(data);
    
    data.results.forEach((element) =>{
      const card_content = 
      `<article class="card"><p class="nom_ilot_card"> ${element.nom_ifu} </p>
      <p>${element.type_ifu}</p>
      <p>${ element.horaire_ifu !== null ? element.horaire_ifu : "Pas d'horaires"}</p>
      <p>${element.adresse_ifu}</p>
      <p>${element.code_insee}</p>
      <p>${element.commune}</p>
      </article>`
      card.insertAdjacentHTML("beforeend", card_content)
    })
    } catch (err) {
    console.error(err.message)
   }
}

fetchData()
