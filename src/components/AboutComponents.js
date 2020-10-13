import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styling.css';
import {Stagger,Fade} from 'react-animation-components';
const RenderLeader=({leader})=>{
    return(
        
        <Stagger in>
            <Fade>
            
                
            <Media>
            <Media className="  media-top m-2">
                <img className="aboutimage" src={leader.image}/>
            </Media>
            <Media body>
                <Media heading className="trainername">{leader.name}</Media>
                <h2 className="trainerdesignation">{leader.designation}</h2>
                <div class="d-none d-sm-block">
                <p className="trainerdescription">
                {leader.description}
                </p>
                </div>
            </Media>
        </Media>
        

            </Fade>
            
        </Stagger>
    );
}



function About(props) {
    const leaders = props.leaders.map((leader) => {return(
        <Media list>
        <RenderLeader key={leader.id} leader={leader}/>
        </Media>
    )});


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                   <p>We believe movement is at the core of what it means to feel healthy, to feel alive, to engage in the human experience. We believe every step, jump, or lap puts people on the path toward a more active, and fulfilling life. Whether that means an afternoon walk, an invigorating dance class, or a heart-pounding set of squats, movement is vitally important. In fact, it's so important that we've made it our mission to Get People Moving.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">"... recognize the importance of exercise in your life, and its influence on your ability to work more effectively.".</p>
                                <footer className="blockquote-footer">Michael Hetherington
                               
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>OUR TRAINERS</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    