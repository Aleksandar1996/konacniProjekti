import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { klik } from '../store/actions'
import './style.css'
import citajBazu from './pristupBazi'
import { zapocni } from '../store/actions'
import { vratiPotez } from '../store/actions'
import { krajPartije } from '../store/actions'
import { proveraPobede } from '../store/actions'
import { BrowserRouter, Route } from 'react-router-dom'
import Upis from './upis'

class Matrica extends Component{
    constructor(props){
        super(props)
        this.renderButtons=this.renderButtons.bind(this)
        this.buttons=[]
        this.slike=[]
        citajBazu(this.slike)
    }
    render(){
        if(this.props.stanje.dimenzije===0){
            return(
                <div className="text_preinit">
                    <strong>Unesite vrednosti da bi zapoceli novu igru</strong>
                </div>
            )}
            else{
                if(this.props.potezi===0 || this.props.kraj===1){
                    if(this.props.kraj===0){
                        this.props.krajPartije()
                    }
                    return(
                        <div className="matrica">
                            {this.renderButtons()}
                            <div><strong>Izgubili ste!</strong></div>
                        </div>
                    )
                }
                else{
                    this.props.proveraPobede(this.props.matrix,this.props.stanje.dimenzije)
                    if(this.props.potezi!==0 && this.props.pobeda===1){
                        return(//prvo vrsis proveru dal je pobedjena(zoves jos jednu f-ju koja proverava celu matricu)
                        <div className="matrica">
                            {this.renderButtons()}
                            <div className="pobeda">
                            <strong>Pobedili ste! </strong>
                            </div>
                            <BrowserRouter>
                            <div>
                            <Route path='/' component={Upis} />
                            </div>
                            </BrowserRouter>
                        </div>
                    )}
                    else{
                    return(//prvo vrsis proveru dal je pobedjena(zoves jos jednu f-ju koja proverava celu matricu)
                        <div className="matrica"> 
                            {this.renderButtons()}
                            <div className="ispis">
                            <strong>Trenutno imate: {this.props.potezi} preostalih poteza </strong><br/>
                            <button
                            className="dugme2"
                            onClick={()=>{this.props.potezNazad(this.props.stanje.dimenzije,this.props.stanje.tezina,this.props.matrix)}}
                            >Vrati potez</button><br/>
                            <button
                            className="dugme3"
                            onClick={()=>{this.props.zap(this.props.stanje.dimenzije,this.props.stanje.tezina)}}
                            >Restart</button>
                            </div>
                        </div>
                    )}
                }
                }
        }
renderButtons(){
            let pictures=[]
            var kljuc=0
            let n=this.props.stanje.dimenzije
            for(let i=0;i<n;i++){
                for(let j=0;j<n;j++){                    
                    let kljuc1=kljuc
                    let i2=i
                    let j2=j
                    if(this.props.matrix[i][j].stanje===1||this.props.matrix[i][j].stanje===2){
                        pictures.push(<img 
                            src={process.env.PUBLIC_URL+this.slike[this.props.matrix[i][j].id-1]}
                            alt="error"
                            key={kljuc1}
                            value={{
                                i1:i2,
                                j1:j2
                            }}
                            className="otvorena dimenzije isti_red"
                            onClick={()=>this.props.kliknut(i,j,n,this.props.matrix)}
                        />)
                    }
                    else{
                        pictures.push(<img 
                            src={process.env.PUBLIC_URL+'/slike/default.png'}
                            alt="error"
                            key={kljuc1}
                            value={{
                                i1:i2,
                                j1:j2
                            }}
                            className="zatvorena dimenzije isti_red"
                            onClick={()=>this.props.kliknut(i,j,n,this.props.matrix)}
                        />)
                    }
                    kljuc+=1
                }
                pictures.push(<br key={kljuc++}/>)
            }
            return pictures
        }
    }


function mapStateToProps(state){
    return{
        stanje:state.tipIgre,
        matrix:state.matrica,
        potezi:state.potezi,
        kraj:state.krajPartije,
        pobeda:state.pobeda
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      kliknut:klik,
      zap:zapocni,
      potezNazad:vratiPotez,
      krajPartije:krajPartije,
      proveraPobede:proveraPobede
    }, dispatch);
  }


export default connect(mapStateToProps, mapDispatchToProps)(Matrica)