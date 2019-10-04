import React, { Component } from 'react';
import images1 from '../imagenes/porta1.jpg';
import images2 from '../imagenes/porta2.jpg';
import images3 from '../imagenes/porta3.jpg';
import './index.css';
import StarRatings from 'react-star-ratings';
import modelosList from '../modelos.json';
import {todos} from './todos.json';
import YouTube from 'react-youtube';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from 'mdbreact';
import {  Button,ButtonToolbar,img,Input, Footer, Card, CardBody, CardImage, CardTitle, CardText,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class PaginaInicio extends Component {

  state = {
        search : ""
    }
 

  

      
  rendermodelo = modelo =>{
        const {search} = this.state;



        /*if( search !== "" && modelo.nombre.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }*/

        return <div className='row'>
               <Card className='col-md-12 '>
                <CardBody>
                    <p className=""><img className="card-img-top" src={modelo.img}  alt={modelo.nombre} /></p>
                    <CardTitle  style={{fontSize:15}} title={modelo.nombre}>Titulo {modelo.nombre.substring(0, 15)}{ modelo.nombre.length > 15 && "..."} </CardTitle>
                
                     <CardText > Descripcio: {modelo.Descripcion} </CardText>
                     <p> Autor : {modelo.autor}</p>
                    <p> acupacio: {modelo.ocupacion}  </p>
                    <p>Precio: {modelo.Precio}</p>

                    <div className="text-center">
                                        <StarRatings 
                            rating={modelo.calificacion}
                            starDimension="20px"
                            starSpacing="4px"
                            numberOfStars={5}
                            starRatedColor="blue"
                                  />
                                
                    </div>
                </CardBody>
            </Card>
        </div>
    }



  render() {

   

        

        const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
       }
    }

        return (
    <div className="Carousel">
      
  <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img className="d-block w-100" src={images1} alt="First slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">3D+D Delivery donde encontrarás los mejores modelos</h3>
           
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img className="d-block w-100" src={images2} alt="Second slide" />
              <Mask overlay="black-strong" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Servicio de Impresión de Modelos</h3>
              
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img className="d-block w-100" src={images3} alt="Third slide" />
              <Mask overlay="black-slight" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Entrega a casa de la mejor manera</h3>
            </CarouselCaption>
          </CarouselItem>
         
        </CarouselInner>
      </Carousel>
        <br/>
       <div className="row">
    
        <div className="container">
            <YouTube
            videoId="pWD1MXfO13g"
            opts={opts}
            onReady={this._onReady}
        />
        </div>
       </div>
      </div>
        );
  
}
 

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }           
     
}

export default PaginaInicio;
