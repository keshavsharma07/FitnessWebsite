import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Carousel,useState} from 'reactstrap';
import './styling.css';
import {FadeTransform} from 'react-animation-components';


function RenderCard({item}){
return(
    <FadeTransform in
    transformProps={{
        exitTransform: 'scale(0.5) translate(-50%)'
    }}
    >



<Card className="cardhome">
    <CardImg src={item.image} className="rounded" alt={item.name}/>
    <CardBody>
        <CardTitle className="cardhometitle">{item.name}</CardTitle>
        {item.designation ? <CardSubtitle className="subtitle">{item.designation}</CardSubtitle>:null}
<CardText className="classhometext">{item.description}</CardText>
    </CardBody>
</Card>
</FadeTransform>
);
}

  


function Home(props){
    return(
        <div className="container">


               
          
            <div className="row align-items-start">

                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}></RenderCard>

                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}></RenderCard>
                    
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}></RenderCard>
                    
                </div>
            </div>


          

        </div>



    );
}

export default Home;