import React from 'react';


class ArticleFor extends React.Component{
    render(){
        return(  
            <article class="article">
                    <div class="headr_article">
                        <span class="h1 p">{this.props.title}</span>
                    </div>
                    <div class="footer_article">
                        <span class="p">{this.props.text}</span>
                    </div>
            </article>
        );
    }
}




export default ArticleFor;