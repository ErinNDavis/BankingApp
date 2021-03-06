import { Card } from 'react-bootstrap'; 
//import { userContext } from '../userContext';
import React from 'react';
import "./home.css";

function Home(){
    
    return (
        
        <Card className="bg-dark text-white" border="light" >
            <Card.Img src="./bank.jpg" alt="Banking image" />
            <Card.ImgOverlay>
                <Card.Title className="title">Welcome To BadBank</Card.Title>
                <Card.Text className="text">
                    Let us help you with all your banking needs!
                </Card.Text>
            </Card.ImgOverlay>
        </Card>

    );
}

export default Home;