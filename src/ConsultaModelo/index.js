import React,{Component} from 'react';
import StarRatings from 'react-star-ratings';
import { Button, Input, Footer, Card,Col, CardBody,Fa, CardImage, CardTitle, CardText,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import {getdataFile} from '../Buscador/testrest.js';
import {
  Badge,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import {listaPosts} from './testrest.js';
import posts from './posts.json';
import publicaciones from './publicaciones.json';
import {Redirect} from 'react-router-dom';


class Consulta extends Component {

constructor(props) {
    super(props);
    this. state={
     lPosts:[],
     lPublicaciones:[],
     fetched:false,
     canalSeleccionado: JSON.parse(sessionStorage.getItem('canalSeleccionado')),
     clickeado:false
    }
}

    convertir(img)
    {

      return  'data:'+this.state.tipo+';base64,'+img;
    }


    renderpublicacion = publicacion =>{

       const imageClick = () => {

           sessionStorage.setItem('modeloSeleccionado' ,JSON.stringify(publicacion));
           const wa=sessionStorage.getItem('modeloSeleccionado');
           this.setState({clickeado :true});
           

        } 

        /*if( search !== "" && publicacion.nombre.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }*/


        return <div className="col-md-3">
               <Card  className="col-md-12"  style={{ height: "22rem" }}>
         <CardBody >
                    <p className=""><img className="card-img-top" src={this.convertir(publicacion.post.dataFile[0].data.data)} style={{height:200, width:200}} onClick={() => imageClick()}  /></p>
                
                
                     <p style={{fontSize:14,lineHeight: 1.8}} >
                      Autor : {publicacion.idPublicacion} <br/>
                      Fecha : {publicacion.post.uploadDate} <br/>
                                        </p>

                </CardBody>
        </Card>
        </div>

        
    }



 getPosts(){
    var BaseUrl='http://localhost:9005/post3d/retrieveAll';


  return fetch(BaseUrl,{
        method:'GET',
        mode:'cors',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
     }).then((response) => response.json())
};

 getPublicaciones(){

  var canal=this.state.canalSeleccionado;
 
  console.log(canal);
       const xs=JSON.stringify({
      "pIdCanal": canal.idCanal});
    
      var BaseUrl2='http://localhost:8085/http://localhost:9002/publicacion/listar';

  return fetch(BaseUrl2,{
        method:'POST',
        body:xs,
        mode:'cors',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
    }).then((response) => response.json())
};

// Request both students and scores in parallel and return a Promise for both values.
// `Promise.all` returns a new Promise that resolves when all of its arguments resolve.
 getDataPosts(){
  return Promise.all([this.getPublicaciones(), this.getPosts()])
}

// When this Promise resolves, both values will be available.

  
 componentDidMount() {
    
    this.getDataPosts().then(([publicaciones, posts]) => {
       // both have loaded!
    this.setState({lPublicaciones:publicaciones, lPosts:posts});
     
    const xd=this.state.lPublicaciones.lsPublicacion;
    const xd2=this.state.lPosts.list;

    for(var i=0; i<xd.length;i++)
   {
      
    var o = Object.assign({}, xd[i]);
   const result = xd2.find(obj => {
 //   console.log(obj.metadata.id_publicacion);
   return obj.metadata.id_publicacion == xd[i].idPublicacion
})
   o.post=result;
   xd[i]=o;
}
 
 //console.log(xd);
  this.setState({lPublicaciones:xd,fetched:true})
 

    })

}
prueba(xd)
{
   
            console.log(xd);
        

    return 2;
}    

render()
{
    const {lPublicaciones,fetched,clickeado} =this.state;


if(fetched && !clickeado)
{
const filt=lPublicaciones;
  console.log("2");
  console.log(filt);
return(
  <div className="container">

      <div className="row">

         <div className="col-md-12">

           <br/>
           <div className="row">
          
             <div className="col-md-10">
            
              <h1 > <b> Canal de  {this.state.canalSeleccionado.noNombre} {this.state.canalSeleccionado.noApellido} </b> </h1>
            

              </div> 

               <div className="col-md-2">

                <h2>  
                 <Badge color="cyan"><Fa icon="eye" aria-hidden="true"/>
                   {this.state.canalSeleccionado.nuVisitas}
                 </Badge>
               </h2> 


              </div>
           </div>

     
        <div className="row">
          
             <div className="col-md-9">
                
                  <h3> {this.state.canalSeleccionado.noDescripcion} </h3>
            
              </div>        
              
                <div className="col-md-3 text-center">
                       
                          <h4> Calificación </h4>  <StarRatings 
                            rating={parseInt(this.state.canalSeleccionado.nuPuntuacion)}
                            starDimension="20px"
                            starSpacing="4px"
                            numberOfStars={5}
                            starRatedColor="blue"
                      />

                    </div>
             </div>
             
            </div>
        
         <div className="col-md-12">
         <div className="text-center">
          <h2> <b>   Modelos Publicados </b> </h2>
          
        
          </div>
        </div>
        <div className="row">

                                {
                                    filt.map( modelo =>{
                                        return this.renderpublicacion(modelo)
                                    })
                                }
                                
               </div>
         </div>                                   

      </div>                             
                                   
);

}

if(clickeado)
{
        return(<Redirect to={'/DetalleModelo'}/>);

}

else{ console.log("uwu"); return("hola mundo" );}

  


}




}


export default Consulta;