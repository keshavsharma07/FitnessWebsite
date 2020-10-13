import React from 'react';
import './styling.css';
import { Card, CardImg, CardImgOverlay,
    CardTitle, 
    Breadcrumb,
    BreadcrumbItem, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card className="cardmenu"
                >
                    <a href={ `/menu/${dish.id}` } >
                <CardImg className="imgmenu" src={dish.image} alt={dish.name} />
               
               <CardBody className="menucard">{dish.name}</CardBody>
            

                </a>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish}  />
                </div>
            );
        });

        return (
            <div className="container">

                <div classname="row">
                    
                    <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active> Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div classname="col-12">
                    <h3>Menu</h3>
                    <hr />
                    </div>

                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;