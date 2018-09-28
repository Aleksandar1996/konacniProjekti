import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { upisSkora } from '../store/actions'

class Upis extends Component {
    render() {
        return (
            <div>
            <div className="unosNick3"><strong>Unesite Nickname</strong></div> 
            <div className="unosNick">
            <input id="nick"></input>
            <div/>
                <button onClick={()=>{this.props.upisSkora(this.props.skor.length,document.getElementById("nick").value,this.props.potezi)
                            }} className="unosNick1">Zapamtite svoj highscore</button>
                            <div/>
                            <button onClick={()=>{
                                var wnd = window.open("about:blank", "", "_blank");
                                let rangLista=""
                                let i=0
                                let sortirani=[]
                                this.props.skor.forEach(element=>{
                                    sortirani[i]=Object.assign({},element)
                                    i++
                                })
                                console.log(this.props.skor)
                                sortirani.sort((a,b)=>{
                                    return a.preostalo_poteza>b.preostalo_poteza?0:1
                                })
                                i=1
                                sortirani.forEach(element => {
                                    rangLista+=i+". "+element.nick+": "+element.preostalo_poteza+" preostalo poteza<div/>"
                                    i++
                                });
                                wnd.document.write(rangLista);
                            }} className="unosNick2">Prikazite highscorove</button> 
                            </div>
                            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        potezi:state.potezi,
        skor:state.skor
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      upisSkora:upisSkora
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Upis);