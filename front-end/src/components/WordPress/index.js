import  React, { Component } from  'react';
import  './App.css';

class  WordPress  extends  Component {
    constructor(){
        super();
        this.state  = {
            isOpen:  false,
            sections: [],
            current:  null,
            dataRoute: 'https://paintedpirate.test/wp-json/sections/v3/post'
        }
    }

    get  scaledSections(){
        var  nbr  = (this.state.sections.length/3)
            .toString()
            .split('.');
        var  sections  = [];
        for(var  i  =  0; i  <  nbr[0]; i++){
            sections[i] = [];
                for(var  j  =  1; j  <=  3; j++ ){
                    sections[i].push(this.state.sections[i*3  +  j  -  1]);
            }
        }
        if(nbr[1]){
            var  missing  =  nbr[1].startsWith('3')
                ?  1
                :  2;
            sections.push([]);
            for(var  k  =  0; k  <  missing; k++){
                sections[sections.length  -  1].push(this.state.sections[nbr[0]*  3 +  k]);
            }
        }
        return  sections;
    }

    componentDidMount(){
        fetch(this.state.dataRoute)
            .then(res  =>  res.json())
            .then(sections  =>  this.setState((prevState, props) => {
                return { sections:  sections.map(this.mapSection)};
            }));
    }

    mapSection(section){
        return {
            img:  section.acf.image,
            // src:  section.acf.image.url,
            title:  section.post_title,
            key:  section.post_title,
            description:  section.post_content,
            author: {
                name:  section.acf.author_name,
                link:  section.acf.author_link
            }
        }
    }

    render() {
        return (
            <div  className='App'>
                <header  className='App-header'>
                    
                </header>           
                <div>
                    {this.scaledSections.map((level, i) =>
                    <div  className='columns'  key={i}>
                        {level.map((section, j) =>
                        <div  className='column'  key={j}>
                            <img
                                className='image'
                                alt=''
                                src={section.src}
                                // height={section.img['small-height']}
                                onClick={() => this.openPopupbox(this.state.sections[i*3+j])}/>
                        </div>
                        )}
                    </div>
                    )} 
                </div>    
            
            </div>
        );
    }
}

export  default  WordPress;