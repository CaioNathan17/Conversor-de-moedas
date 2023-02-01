import React, { Component } from "react"


export default class Conversor extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            moedaA_valor: "", //campo onde vai digitar o valor da moeda
            moedaB_valor: 0, //valor calculado depois que houver a conversão da moeda

        }

        this.converter = this.converter.bind(this); //com essa metodo voce pode passar algum objeto por esse bind, que no caso vai ser dentro da função this

        
    }

    converter()
    { //metodo que vai converter a moedaA pra a moedaB

        // console.log(this.state) fazendo relação com o bind!!! desativei o codigo

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`// ativa a parte de converter uma moeda para outra dentro dessa variavel
        let url = ` http://economia.awesomeapi.com.br/json/last/${de_para}USD-BRL`
        
        fetch(url) //acessa a URL e pega o dado no site
        .then(res=>{

            return res.json()

        })
        .then(json=>{
            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2) // quer dizer que so quero duas casas decimais no resultado
            this.setState({moedaB_valor})
        })   
    }


    render() {
        return(
            <div classname="Conversor"> 
               <h2> {this.props.moedaA} para {this.props.moedaB}</h2>
               <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input> 
               <button type="button" onClick = {this.converter}>Converter</button>
               <h2> {this.state.moedaB_valor}</h2>

                
            </div>
            )   
        }   
    }