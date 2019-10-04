import React,{Component} from 'react';
import {MDBBtn,MDBIcon,Button, Input, Footer, Card,Col, CardBody,Fa, CardImage, CardTitle, CardText,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import imgCanal from '../imagenes/canalIcon.png';
import StarRatings from 'react-star-ratings';
import {Redirect} from 'react-router-dom';


class ConsultaCanal extends Component {

constructor(props) {
    super(props);
    this. state={
     lCanal:[],
     seleccionado:false,
     fetched:false
    }

        this.explorarCanal=this.explorarCanal.bind(this);

}

    renderCanal= canal =>{

   
        return <div className="col-md-3">
               <Card  className="col-md-12"  style={{ height: "24rem" }}>
         <CardBody >
                    <p className=""><img className="card-img-top" src={imgCanal}  /></p>
                
                 <div className="text-center">
                     <p style={{fontSize:12}}  >
                         {canal.noTipo} <br/>
                    </p>
                     <p style={{fontSize:16,fontWeight:"bold"}}  >
                         {canal.noDescripcion} <br/>
                    </p>
                     
                     <StarRatings 
                            rating={parseInt(canal.nuPuntuacion)}
                            starDimension="20px"
                            starSpacing="4px"
                            numberOfStars={5}
                            starRatedColor="blue"
                      />

                 </div>
                 <div className="text-center">
                    <MDBBtn rounded size="sm" color="info" onClick={() =>this.explorarCanal(canal)}><MDBIcon icon="eye" size="2x"/></MDBBtn>
                    <MDBBtn rounded size="sm" color="info"><MDBIcon icon="heart" size="2x"/></MDBBtn>
                </div>
                </CardBody>
        </Card>
        </div>

        
    }

 getCanal(){
  var BaseUrl='http://localhost:8085/http://localhost:9002/canal/listar';

 const xs=JSON.stringify({  "pIdUsuario": null,
                            "pNoTipo": null,
                            "pTiFun": 2
                        });
    

  return fetch(BaseUrl,{
        method:'POST',
        mode:'cors',
        body:xs,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
     }).then((response) => response.json())
};

 explorarCanal(e)
 {

      sessionStorage.setItem('canalSeleccionado',e);

      this.setState({seleccionado:true});


 }


 componentDidMount() {
    
    this.getCanal().then((canales) => {
       // both have loaded!
        this.setState({lCanal:canales,fetched:true});
    })


}
prueba(xd)
{
   
            console.log(xd);
        

    return 2;
}    

render()
{

    const {lCanal,fetched,seleccionado} =this.state;


if(fetched && !seleccionado)
{
 const filt=lCanal.lsCanal;

return(
  <div className="container">
      <div className="row">
        <div className="col-md-12">
           <h1 > <b> Canales </b> </h1>
            
                   Aquí encontrarás los canales de tus usuarios favoritos así como los que estén generando tendencia
                <br/>
        </div>
                                {
                                    filt.map( modelo =>{
                                        return this.renderCanal(modelo)
                                    })
                                }
                                
        </div>
    </div>                                 );


  }

  if(seleccionado)
  {
    return(<Redirect to={'/'}/>);

  }

  else{ console.log("uwu"); return("hola mundo" );}

  


 }




}



export default ConsultaCanal;
