import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { zapocni } from '../store/actions'
import './style.css'

class Inicijalizacija extends Component{
    render(){
        return(
            <div className="inicijalizacija tekst1">
                <br/>
                <div className="naslov"><strong><i>MEMORY GAME</i></strong></div>
                <div className="opcije">
                <div><strong>Izaberite tezinu igre:</strong></div>
                <select id="tezina"
                className="select1">
                    <option value={3}>Lako</option>
                    <option value={2}>Srednje</option>
                    <option value={1}>Tesko</option>
                </select><br/>
                <div className="text"><strong>Izaberite dimenzije matrice:</strong></div>
                <select id="dimenzije"
                className="select2">
                    <option value={4}>4x4</option>
                    <option value={6}>6x6</option>
                    <option value={8}>8x8</option>
                </select><br/>
                </div>
                <button className="dugme1" onClick={()=>{
                    this.props.zap(document.getElementById("dimenzije").value,document.getElementById("tezina").value)
                    }
                }>Zapocni</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        stanje:state.tipIgre,
        pobeda:state.pobeda
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    zap:zapocni
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inicijalizacija)