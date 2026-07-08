const card = document.querySelector(".card_container")

const fetchData = async () => {
  try {
    const response = await fetch("https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_ilot-fraicheur-nantes-metropole/records?limit=20")
    const data = await response.json()
    console.log(data);
    
    data.results.forEach((element) =>{
      const card_content = 
      `<p> ${element.nom_ifu} </p>
      <p>${element.type_ifu}</p>
      <p>${ element.horaire_ifu !== null ? element.horaire_ifu : "Pas d'horaires"}</p>
      <p>${element.adresse_ifu}</p>
      <p>${element.code_insee}</p>
      <p>${element.commune}</p>`
      card.insertAdjacentHTML("beforeend", card_content)
      
      // const type = `<article> ${element.type_ifu} </article>`
      // card.insertAdjacentHTML("beforeend", type)
      
      // const horaire = `<article> ${ element.horaire_ifu !== null ? element.horaire_ifu : "Pas d'horaires"}
      //  </article>`
      // card.insertAdjacentHTML("beforeend", horaire)

      // const adress = `<article> ${element.adresse_ifu} </article>`
      // card.insertAdjacentHTML("beforeend", adress)
      
      // const code = `<article> ${element.code_insee} </article>`
      // card.insertAdjacentHTML("beforeend", code)
      
      // const commune = `<article> ${element.commune} </article>`
      // card.insertAdjacentHTML("beforeend", commune)
      
      
    })
  } catch (err) {
    console.error(err.message)
  }
}

fetchData()
