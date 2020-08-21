import React from 'react';
import ArticleFor from './ArticleFor';

class Articles extends React.Component{
    
    
    render(){


        if (this.props.article){
            const list = this.props.title.map((item, index) => {
                return <ArticleFor text={this.props.text[index]} title={this.props.title[index]} />;
            });

        return(
            <div class="article">
                    {list}
            </div>
        );}
        else{
            return ('');
        }
    }
}





export default Articles;