export const NOVA_IGRA = 'NOVA_IGRA'
export const NOVI_KLIK = 'NOVI_KLIK'
export const POVECAJ_POENE = 'POVECAJ_POENE'
export const VRATI_POTEZ = 'VRATI_POTEZ'
export const KRAJ_PARTIJE = 'KRAJ_PARTIJE'
export const PROVERA_POBEDE = 'PROVERA_POBEDE'
export const NOVI_SKOR = 'NOVI_SKOR'

export function zapocni(n,dif){
    return{
        type: NOVA_IGRA,
        payload:{
            dimenzije: n,
            tezina: dif
        }
    }
}
export function vratiPotez(n,dif,mat){
    return{
        type: VRATI_POTEZ,
        payload:{
            dimenzije: n,
            tezina: dif,
            matrica:mat
        }
    }
}
export function krajPartije(){
    return{
        type: KRAJ_PARTIJE
    }
}

export function proveraPobede(matrix,n){
    return{
        type: PROVERA_POBEDE,
        payload:{
            matrica:matrix,
            dimenzije:n
        }
    }
}

export function klik(i1,j1,n,mat){
    return{
        type: NOVI_KLIK,
        payload:{
            i:i1,
            j:j1,
            dimenzije:n,
            matrica:mat
        }
    }
}
export function upisSkora(brojElemenata,n,preostaloPoteza){
    console.log(brojElemenata,n,preostaloPoteza)
    return{
        type: NOVI_SKOR,
        payload:{
            brEl:brojElemenata,
            nick: n,
            potezi: preostaloPoteza
        }
    }
}