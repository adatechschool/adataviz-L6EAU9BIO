import { describe, it, expect } from "vitest"
import { filtrerNom, filtrerType, filtrerHoraires, filtrerAdresse } from "./utils.js"


// DONNEES DE TEST
const mockData = [
  { nom_ifu: "Parc de Procé", type_ifu: "Parcs et jardins", horaire_ifu: "8h-20h", adresse_ifu: "Rue de Procé" },
  { nom_ifu: "Jardin des Plantes", type_ifu: "Parcs et jardins", horaire_ifu: null, adresse_ifu: "Rue Stanislas Baudry" },
  { nom_ifu: "Square Élisa Mercœur", type_ifu: "Espaces naturels aménagés", horaire_ifu: "24h/24", adresse_ifu: "Rue Élisa Mercœur" },
]


// TEST FILTRE NOM

describe("filterNom", () => {
    it("Retourne elemeent de recherche (insensibel à la casse)", () => {
        const result = filtrerNom(mockData, "parc")
        expect(result).toEqual([mockData[0]])
    })    
})
describe("filterNom", () => {
    it("Retourne mockdata si recherche vide", () => {
        const result = filtrerNom(mockData, "")
        expect(result).toEqual(mockData)
    })    
})
describe("filterNom", () => {
    it("Retourne [] si recherche non comprise", () => {
        const result = filtrerNom(mockData, "zzz")
        expect(result).toEqual([])
    })    
})

// TEST FILTRE TYPE

describe("filtrerType", () => {
    it("Retourne element de recherche ", () => {
        const result = filtrerType(mockData, "Parcs et jardins")
        expect(result).toEqual([mockData[0], mockData[1]])
    })
})

describe("filtrerType", () => {
    it("Retourne mockData pour recherche vide ", () => {
        const result = filtrerType(mockData, "")
        expect(result).toEqual(mockData)
    })
})

// TEST FILTRE HORAIRES

describe("filtrerHoraires", () => {
    it("Retourne element de recherche pour avec horaires ", () => {
        const result = filtrerHoraires(mockData, "avec_horaire")
        expect(result).toEqual([mockData[0],mockData[2]])
    })
})
describe("filtrerHoraires", () => {
    it("Retourne element de recherche pour sans horaires", () => {
        const result = filtrerHoraires(mockData, "sans_horaire")
        expect(result).toEqual([mockData[1]])
    })
})


// TEST ADRESSE

describe("filterAdresse", () => {
    it("Retourne elemeent de recherche (insensibel à la casse)", () => {
        const result = filtrerAdresse(mockData, "rue éli")
        expect(result).toEqual([mockData[2]])
    })    
})
describe("filterAdresse", () => {
    it("Retourne mockdata si recherche vide", () => {
        const result = filtrerAdresse(mockData, "")
        expect(result).toEqual(mockData)
    })    
})
describe("filterAdresse", () => {
    it("Retourne [] si recherche non comprise", () => {
        const result = filtrerAdresse(mockData, "zzz")
        expect(result).toEqual([])
    })    
})
