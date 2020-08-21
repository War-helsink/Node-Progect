import React from 'react';
import Articles from './Articles';
import Form from './Form';
import Admin from './Admin';


class Start extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:null,
            email:null,
            article:false,
            text:["Hello word!","dsgfd"],
            title:["Good game!!!","dfd"],
            titles:"Ваше имя",
        };
    }
   

    NewArticles(){
        let div = document.getElementById('article');
        //document.body.style.opacity = "0.5";
        div.style.display = "block";
        //div.style.opacity = "1";
            
    }

    ClickBreak(){

        this.setState({name:null,email:null,article:false});
    }
    ClickLok(){
        let names = document.getElementById('user'),
            emails = document.getElementById('email');
        if(names.value !== ''&& names.value !== null && emails.value !== '' && emails.value !== null){
            this.setState({email:emails.value,name:names.value,article: true,titles:names.value});
        }
        else{
            let forms = document.querySelector('.form');
            let text = document.createTextNode('Введите имя и email');   
            forms.appendChild(text);
        }
    }
    
    render(){
        let titel = document.querySelector('.title');
        titel.textContent = this.state.titles;
        
        return(
            <div class="background">
                <header class="header">
                    <Admin onClick2={() => this.NewArticles()} article={this.state.article} email={this.state.email} name={this.state.name} onClick1={() => this.ClickBreak()}/>
                </header>
                <div  class="article">
                    <div id="article"></div>
                    <Form article={this.state.article} onClick={()=> this.ClickLok()}/>
                    <Articles article={this.state.article} title={this.state.title} text={this.state.text}/>
                </div>
                <footer class="footer"></footer>
            </div>
        );
    }
}


export default Start;