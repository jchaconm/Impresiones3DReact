import React, { Component } from 'react';
import DynamicForm from './DynamicForm';
import './App.css';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import imagenCargar from '../imagenes/descarga.jpg'
import CategoriasList from '../categoria.json'
import noImg from '../imagenes/icon-no-image.svg'
import moment from "moment";


class RegistroModelo extends Component {
 
  constructor(){

  super();  
  this.state = {
   
      selectedFile: null,
      loaded: 0,
      noPublicacion:'',
      noDescripcion:'',
      nuAncho:'',
      nuLargo:'',
      nuAlto:'',
      categoria:CategoriasList,
      categoriaSeleccionada:'',
      imgPreliminar:false,
      rutaPreliminar:''}

    this.onChange=this.onChange.bind(this);
    
     

    }

  
 onChange(e)
  {

     
    this.setState({[e.target.name]:e.target.value});

    

  }

  selectddlChange(event)
  {
      var index = event.nativeEvent.target.selectedIndex;
      var seleccion=event.nativeEvent.target[index].text;

      this.setState({
       categoriaSeleccionada:seleccion

     })

  }
   
onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({rutaPreliminar: e.target.result,imgPreliminar:true});
            };
            reader.readAsDataURL(event.target.files[0]);
        }

            this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })

    }

  handleselectedFile = event => {

   

  }
 handleUpload = () => {
   const xd=this.state.selectedFile;

   const xa=JSON.stringify({
        "publicacion": {
            "fePublicacion": moment(),
            "idCanal": 1,
            "idPublicacion": 0,
            "ilActivo": true,
            "noCategoria":this.state.categoriaSeleccionada,
            "noDescripcion": this.state.noDescripcion,
            "noPublicacion":this.state.noPublicacion,
            "nuAlto":this.state.nuAlto,
            "nuAncho": this.state.nuAncho,
            "nuLargo": this.state.nuLargo,
            "nuPuntuacion": "0"
        }});

      var xhr = new XMLHttpRequest();
   
      xhr.open("POST", "http://localhost:9002/publicacion/insertar");

      xhr.setRequestHeader("Content-Type", "application/json");

       xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
          alert(xhr.responseText);
      }
  }
    xhr.send(xa);
   
    xhr.onload = function(){
    const dataresponse = xhr.response;
    var xhr2 = new XMLHttpRequest();
     const dataPublicacion =JSON.parse(dataresponse);

     console.log(dataPublicacion);

     
     const data = new FormData()
     var id_usuario=1;
     data.append('file', xd)
     data.append('id_usuario',id_usuario);
      data.append('id_publicacion',dataPublicacion.idExtra);

      xhr2.open("POST", "http://localhost:9005/post3d/newArticle");
      xhr2.onreadystatechange = function() {
      if (xhr2.readyState == XMLHttpRequest.DONE) {
          alert(xhr2.responseText);
      }

      
  }
    xhr2.send(data);
//   xhr2.responseType='json';

    xhr2.onload = function(){
    const prueba2 = xhr2.response;
         console.log(prueba2);
    }

}

 }

  render() {

    
    return (
          <Container >
        <Row>
          <Col md="6" >
     
     <p className="h5 text-center mb-4">Registra tu Modelo</p>
              <div className="grey-text">
                <Input label="Nombre"  group type="text" name="noPublicacion" validate error="wrong" success="right" onChange={this.onChange}/>
                <Input label="Descripcion" group type="text" name="noDescripcion"  validate error="wrong" success="right" onChange={this.onChange}/>
                <Input label="Ancho"  group type="number" name="nuAncho"  validate error="wrong" success="right" onChange={this.onChange}/>
                <Input label="Alto"  group type="number" name="nuLargo"  validate error="wrong" success="right" onChange={this.onChange}/>
                <Input label="Largo"  group type="number" name="nuAlto"  validate error="wrong" success="right" onChange={this.onChange}/>
                <p> Categoría
                </p>
                     {['nombre'] .map(key => (
                     <select className="browser-default custom-select" key={key} value={this.state.categoriaSeleccionada} onChange={e => this.selectddlChange(e)} ref={el => this.ddlCategoria = el}>
                          {this.state.categoria.map(({ [key]: value }) => <option key={value}>{value}</option>)}
                     </select>
                                 )
                                 )
                                 }

              <div className="text-center">
                <Button color="primary" onClick={this.handleUpload}>Registrar publicacion</Button>
              </div>


         </div>
           
    </Col>

      <Col md="6" >

      <Input   group type="text" validate error="wrong" success="right" style={{visibility:  'hidden'}}/>
                <Input  group type="text" validate error="wrong" success="right" style={{visibility:  'hidden'}}/>
  <div className="text-center">

      { !this.state.imgPreliminar &&
        <img src={noImg} width="400" height="400"/>
        
        }

     { this.state.imgPreliminar && 
        <img src={this.state.rutaPreliminar} width="400" height="400"/>
        
        }

        
        <input type="file" name="" id="" onChange={this.onImageChange.bind(this)}  />
        <div> {Math.round(this.state.loaded, 2)} %</div>
      </div>
       
          </Col>
      </Row>

      </Container>
     


      
    );
   
    
  }
}

export default RegistroModelo;
