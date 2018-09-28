import Polje from './polje'


class Matrica{
    constructor(dimenzije){
        this.dimenzije=dimenzije
        this.mat=[]
        for(let i=0;i<dimenzije;i++){
            this.mat[i]=[]
        }
        for(let i=0;i<dimenzije;i++){
            for(let j=0;j<dimenzije;j++){
                this.mat[i][j]=new Polje(0)
            }
        }
    }
    vratiMatricu(){
        return this.mat
    }
}
export default Matrica