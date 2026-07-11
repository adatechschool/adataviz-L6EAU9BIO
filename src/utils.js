// FONCTIONS PURES : FORMATER, FILTRER, TRIER (TESTEES)



export const filtrerNom = (dataArray,recherche ) => {
    if (!recherche) {
        return dataArray
    } else {
        return dataArray.filter((element) => 
        element.nom_ifu.toLowerCase().includes(recherche.toLowerCase())
        )
    }
}

export const filtrerType = (dataArray,typeRecherche) => {
    if(!typeRecherche) {
        return dataArray
    } else {
        return dataArray.filter((element) => 
        element.type_ifu === typeRecherche)
    }
}

export const filtrerHoraires = (dataArray,choix) => {
    if(!choix) {
        return dataArray
    } else if (choix === "avec_horaire") {
        return dataArray.filter((element) => 
        element.horaire_ifu !== null)
    } else if (choix === "sans_horaire") {
        return dataArray.filter((element) => 
        element.horaire_ifu === null)
    }
    return dataArray
}

export const filtrerAdresse = (dataArray,recherche) => {
    if(!recherche) {
        return dataArray
    } else {
        return dataArray.filter((element) =>
        element.adresse_ifu.toLowerCase().includes(recherche.toLowerCase())
        )
    }
}

