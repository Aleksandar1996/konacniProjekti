
import { pristupBazi } from './pristupBazi'
var prijava
var lozinka
var that
export class Aplikacija{
constructor(nasl,linkzasliku)
{
    this.spisakNarudzbina=""
    this.zaposleni=[]
    this.trZaposleni
    this.linkZaSliku=linkzasliku
    this.baza=new pristupBazi()
    this.cena=0
    this.stanjePrograma=0
    this.naso
    this.kolicina
    this.cena1
    this.naslov1="Kafic : "+nasl
    this.naslov
    that=this
    this.citajIz
    this.zaposleni
    this.ui
    this.gui
    this.centar
    this.lista
    this.login
    this.lista1
    this.slika
    this.iznos
    this.lista2
    this.re3
    this.odjava
}
zapocni(){
    this.crtajInterfejs()
    this.crtajPrijavu()
    this.ui.style.display='none'
}
prikaziPrijavu(){
    this.ui.style.display='none'
    this.centar.style.display='block'
}
dodajNarudzbinu(){
    that.resetujSliku()
    var tekst
    if(that.citajIz==0){
        that.cena1=that.lista[that.lista.selectedIndex].value*that.kolicina.value
        tekst=that.lista[that.lista.selectedIndex].text
    }
    else{
        that.cena1=that.lista2[that.lista2.selectedIndex].value*that.kolicina.value
        tekst=that.lista2[that.lista2.selectedIndex].text
    }
    that.cena+=that.cena1
    let opcija=document.createElement("option")
    opcija.text=tekst+" x "+that.kolicina.value+" = ("+that.cena1+" rsd)"
    opcija.className="opcija"
    opcija.value=that.cena1
    that.lista1.add(opcija)
    that.izmeniTrCenu()
}
izmeniTrCenu(){
    if(that.cena!=0){
        that.iznos.innerHTML="<Strong>cena: "+that.cena+" rsd <br/> baksis: "+(that.cena*0.2)+" rsd <br/> ukupna cena: "+(that.cena+(that.cena*0.2))+" rsd</Strong>"
    }
    else{
        that.iznos.innerHTML=""
    }
}
poruci(){
    let n=that.lista1.options.length
    for(let i=0;i<n;i++){
        that.spisakNarudzbina+=("<br/>"+that.lista.options[i].text)
    }
    that.spisakNarudzbina+="<br/>"+that.iznos.innerHTML+"<br/>"+"-------------------------------------------------"+"<br/>"
    that.resetujNarudzbinu()
}
resetujNarudzbinu(){
    that.cena=0
    that.izmeniTrCenu()
    let i=that.lista1.options.length
    while(that.lista1.options.length>0){
    that.lista1.options.remove(i)
    i--
    }
}
spisakRacuna(){
    var wnd = window.open("about:blank", "", "_blank");
    wnd.document.write(that.spisakNarudzbina);
}
obrisiStavku(){
    that.cena=that.cena-that.lista1.options[that.lista1.selectedIndex].value
    that.lista1.remove(that.lista1.selectedIndex)
    that.izmeniTrCenu()
}
resetujSliku(){
    that.slika.src=that.linkZaSliku
}
prikaziUI(){
    that.resetujSliku()
    this.ui.style.display='block'
    this.centar.style.display='none'
    let mbr=that.baza.vratiPica()
    mbr.subscribe(itemi=>{
        itemi.forEach(el =>{
            let op=document.createElement("option")
            op.text=el.ime+" ("+el.cena+" rsd)"
            op.className="opcija"
            op.value=el.cena
            op.onclick=that.prikaziSliku
            that.lista.add(op)
        })
    })
    mbr=that.baza.vratiJela()
    mbr.subscribe(itemi=>{
        itemi.forEach(el =>{
            let op=document.createElement("option")
            op.text=el.ime+" ("+el.cena+" rsd)"
            op.className="opcija"
            op.value=el.cena
            op.onclick=that.prikaziSliku1
            that.lista2.add(op)
        })
    })

}
prikaziSliku(){
    let mbr=that.baza.vratiPica()
    var id=that.lista.selectedIndex
    mbr.subscribe(function(itemi){
        that.slika.src=itemi[id].slika
    })
    that.kolicina.value=1
    that.citajIz=0
}
prikaziSliku1(){
    let mbr=that.baza.vratiJela()
    var id=that.lista2.selectedIndex
    mbr.subscribe(function(itemi){
        that.slika.src=itemi[id].slika
    })
    that.kolicina.value=1
    that.citajIz=1
}
menjajStanje(){
    if(that.stanjePrograma==1)
    {
        let i=that.lista.options.length
        while(that.lista.options.length>0){
        that.lista.options.remove(i)
        i--
        }
        i=that.lista2.options.length
        while(that.lista2.options.length>0){
        that.lista2.options.remove(i)
        i--
        }
        that.prikaziPrijavu()
        that.stanjePrograma=0
    }
    else
    {
        that.zaposleni=that.baza.vratiZaposlene()
        that.zaposleni.subscribe(itemi=>{
            itemi.forEach(el =>{
                if(prijava.value==el.nick)
                {
                    if(lozinka.value==el.lozinka)
                    {
                        that.trZaposleni.innerHTML="Radi: "+el.ime
                        that.prikaziUI()
                        that.stanjePrograma=1
                        prijava.value=""
                        lozinka.value=""
                    }
                }
            })
        })
    }
}
crtajInterfejs(){
    this.gui=document.createElement("div")
    this.gui.className="gui"
    this.gui.style.backgroundImage="url('./src/slike/slika.jpg')"
    document.body.appendChild(this.gui)
    this.ui=document.createElement("div")
    this.ui.className="ui"
    this.gui.appendChild(this.ui)
    this.naslov=document.createElement("div")
    this.naslov.className="naslov"
    this.naslov.style.backgroundImage="url('./src/slike/tvrdjava.jpg')"
    this.ui.appendChild(this.naslov)
    var red2=document.createElement("div")
    red2.className="red2"
    this.ui.appendChild(red2)
    var red21=document.createElement("div")
    red21.className="red21 isti_red"
    red2.appendChild(red21)
    var red211=document.createElement("div")
    red211.className="red211"
    red211.innerHTML="<Strong>Pica: </Strong>"
    red21.appendChild(red211)
    this.lista=document.createElement("select")
    this.lista.className="ceo_red lista"
    this.lista.size=10
    red211.appendChild(this.lista)
    var red212=document.createElement("div")
    red212.className="red212"
    red212.innerHTML="<Strong>Jela: </Strong>"
    red21.appendChild(red212)
    this.lista2=document.createElement("select")
    this.lista2.className="ceo_red lista"
    this.lista2.size=10
    red212.appendChild(this.lista2)
    var detalji=document.createElement("div")
    detalji.className="isti_red detalji"
    red2.appendChild(detalji)
    var detalji1=document.createElement("div")
    detalji1.className="detalji1"
    detalji.appendChild(detalji1)
    var detalji2=document.createElement("div")
    detalji2.className="detalji2"
    detalji.appendChild(detalji2)
    this.slika=document.createElement("img")
    this.slika.className="isti_red slika zaobljen"
    detalji1.appendChild(this.slika)
    var x=document.createElement("div")
    x.innerHTML="X"
    x.className="isti_red x"
    detalji1.appendChild(x)
    this.kolicina=document.createElement("input")
    this.kolicina.className="isti_red kolicina zaobljen opcija"
    detalji1.appendChild(this.kolicina)
    var porudzbine=document.createElement("div")
    porudzbine.className="isti_red red22 desno"
    red2.appendChild(porudzbine)
    var dodaj=document.createElement("button")
    dodaj.className="dodaj zaobljen dugme"
    dodaj.onclick=this.dodajNarudzbinu
    dodaj.innerHTML="Dodaj"
    detalji2.appendChild(dodaj)
    var kspisak=document.createElement("div")
    kspisak.className="kspisak"
    kspisak.innerHTML="<Strong>Spisak porudzbina za ovaj racun: </Strong>"
    porudzbine.appendChild(kspisak)
    this.lista1=document.createElement("select")
    this.lista1.className="lista1"
    this.lista1.size=23
    porudzbine.appendChild(this.lista1)
    var dugme=document.createElement("button")
    dugme.className="ceo_red d zaobljen dugme"
    dugme.onclick=this.obrisiStavku
    dugme.innerHTML="Obrisi stavku"
    porudzbine.appendChild(dugme)
    var dugme1=document.createElement("button")
    dugme1.className="ceo_red d1 zaobljen dugme"
    dugme1.onclick=this.resetujNarudzbinu
    dugme1.innerHTML="Resetuj narudzbinu"
    porudzbine.appendChild(dugme1)
    this.red3=document.createElement("div")
    this.red3.className="red3"
    this.ui.appendChild(this.red3)
    this.iznos=document.createElement("div")
    this.iznos.style.backgroundColor="white"
    this.iznos.className="ceo_red treci_deo iznos zaobljen"
    this.red3.appendChild(this.iznos)
    var dugmeta=document.createElement("div")
    dugmeta.className="dugmeta"
    dugmeta.style.backgroundColor="#F0FFFF"
    this.red3.appendChild(dugmeta)
    var text=document.createElement("div")
    text.innerHTML=this.naslov1
    text.className="naslov_text"
    this.red3.appendChild(text)
    var red321=document.createElement("button")
    red321.innerHTML="Naruci"
    red321.onclick=this.poruci
    red321.className="dugme_size zaobljen dugme"
    dugmeta.appendChild(red321)
    var red331=document.createElement("button")
    red331.innerHTML="Spisak racuna za ovo prijavljivanje"
    red331.onclick=this.spisakRacuna
    red331.className="dugme_size1 zaobljen dugme"
    dugmeta.appendChild(red331)
    this.trZaposleni=document.createElement("div")
    this.trZaposleni.className="ime_zaposlenog"//bilo je levo
    dugmeta.appendChild(this.trZaposleni)
    this.odjava=document.createElement("button")
    this.odjava.className="odjava zaobljen dugme"//bilo je desno zaobljen
    this.odjava.onclick=this.menjajStanje
    this.odjava.innerHTML="Odjava"
    dugmeta.appendChild(this.odjava)
    /*var scrollEventHandler = function()
    {
        window.scroll(0, window.pageYOffset)
    }

    window.addEventListener("scroll", scrollEventHandler, false);
    }*/
}
    
crtajPrijavu(){
        this.centar=document.createElement("div")
        this.centar.className="centar najveca_vaznost zaobljen"
        this.centar.style.backgroundColor="white"
        this.gui.appendChild(this.centar)
        var centar1=document.createElement("div")
        centar1.className="centar1"
        centar1.innerText="Korisnicko ime: "
        this.centar.appendChild(centar1)
        prijava=document.createElement("input")
        prijava.className="login_unos ceo_red zaobljen opcija"
        centar1.appendChild(prijava)
        var centar2=document.createElement("div")
        centar2.className="centar2 centar1"
        centar2.innerText="Lozinka: "
        this.centar.appendChild(centar2)
        lozinka=document.createElement("input")
        lozinka.type="password"
        lozinka.className="login_unos ceo_red zaobljen opcija"
        centar2.appendChild(lozinka)
        this.login=document.createElement("button")
        this.login.className="login zaobljen dugme"
        this.login.onclick=this.menjajStanje
        this.login.innerHTML="Uloguj se"
        this.centar.appendChild(this.login)
}
}






