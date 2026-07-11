import { describe, it, expect } from "vitest"
import { filtrerNom, filtrerType, filtrerHoraires, filtrerAdresse } from "./utils.js"


// DONNEES DE TEST
const mockData = [
  { nom_ifu: "Parc de Procé", type_ifu: "Parcs et jardins", horaire_ifu: "8h-20h", adresse_ifu: "Rue de Procé" },
  { nom_ifu: "Jardin des Plantes", type_ifu: "Parcs et jardins", horaire_ifu: null, adresse_ifu: "Rue Stanislas Baudry" },
  { nom_ifu: "Square Élisa Mercœur", type_ifu: "Espaces naturels aménagés", horaire_ifu: "24h/24", adresse_ifu: "Rue Élisa Mercœur" },
]

describe("filterNom", () => {
it("Retourne elemeent de recherche (insensibel à la casse)", () => {
    const result = filtrerNom(mockData, "parc")
    expect(result).toEqual([mockData[0]])
}
)    

})