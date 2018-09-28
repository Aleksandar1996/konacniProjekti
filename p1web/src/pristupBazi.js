import * as Rxjs from 'rxjs'

export class pristupBazi{
    constructor()
    {
        this.zaVracanje=[]
    }
    vratiZaposlene(){
        let a=fetch('http://localhost:3000/zaposleni').then(res=>res.json()).then(posts=>posts)
        return Rxjs.Observable.fromPromise(a)
    }
    vratiPica(){
        let a=fetch('http://localhost:4000/pica').then(res=>res.json()).then(posts=>posts)
        return Rxjs.Observable.fromPromise(a)
    }
    vratiJela(){
        let a=fetch('http://localhost:5000/jela').then(res=>res.json()).then(posts=>posts)
        return Rxjs.Observable.fromPromise(a)
    }
}