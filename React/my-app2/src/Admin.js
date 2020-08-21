import React from 'react';

class Admin extends React.Component{
    render(){
        if(this.props.article){
        return(
            <div class="admin">
                    <span class="header">{this.props.name}</span>
                    <span class="header">{this.props.email}</span>
                    <button id="admin" onClick={this.props.onClick1}>Выйти</button>
                    <button id="new_articles" onClick={this.props.onClick2}>+</button>
            </div>


        );}
        else{
            return('');
        }
    }
}



export default Admin;