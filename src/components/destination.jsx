//import React from "react";
import { Link } from "react-router-dom";
import './destination.css'

function Destination(){

    return(
       <div className="destination-container">
        <div className="destination-left-box">
            <h2 className="destination-left-box-title">
                Welcome to paradise Nursery
            </h2>
            <p className="slogan">Where Green Meets Security</p>
            <button className="btn-start">
                <Link to="/products" className = "btn-start-link">Commencer</Link>
            </button>
        </div>
        <div className="destination-right-box">
            <p className="destination-right-box-paragraph">
                <h4>Bienvenue à la Pépinière Paradis, où le vert rencontre la sérénité !</h4>
                À la Pépinière Paradis, nous sommes passionnés par l idée de rapprocher la nature de vous. Notre mission est de vous offrir une large gamme de plantes de haute qualité qui non seulement embellissent votre environnement, mais contribuent également à un mode de vie plus sain et durable. Des plantes purificatrices d air aux plantes aromatiques parfumées, nous avons de quoi satisfaire chaque amateur de plantes.

Notre équipe d experts est dévouée à garantir que chaque plante répond à nos normes strictes de qualité et de soin. Que vous soyez un jardinier expérimenté ou que vous débutiez votre voyage vers le vert, nous sommes là pour vous accompagner à chaque étape. N hésitez pas à explorer notre collection, à poser des questions et à nous laisser vous aider à trouver la plante parfaite pour votre maison ou votre bureau.

Rejoignez-nous dans notre mission pour créer un monde plus vert et plus sain. Visitez la Pépinière Paradis dès aujourd hui et découvrez la beauté de la nature à votre porte.


            </p>
        </div>
       </div>
    )
}

export default Destination;