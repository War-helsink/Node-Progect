import React from 'react';

class Form extends React.Component{
    
    render(){
        if (!this.props.article){
        return(
            <div class="avtoriset">
                <div class="form">
                    <label for="user">Введите имя:</label><br/>
                    <input id="user" type="text" /><br/>
                    <label for="email">Введите email:</label><br/>
                    <input id="email" type="text" /><br/>
                    <button class="button" onClick={this.props.onClick} >Войти</button><br/>
                </div>
            </div>
        );}
        else{
            return('');
        }
    }
}


export default Form;