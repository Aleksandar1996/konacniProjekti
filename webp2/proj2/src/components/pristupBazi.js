
export default function(slike){
    fetch('http://localhost:3001/slike').then(res=>res.json()).then(posts=>{
        let i=0
        posts.forEach(element => {
            slike[i++]=element.slika
        });
    })
}