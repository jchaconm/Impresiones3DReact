import React, { Component } from 'react';
import { Button, Input, Footer, Card,Col, CardBody,Fa, CardImage, CardTitle, CardText,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import StarRatings from 'react-star-ratings';
import blankImg from '../logo.svg'
import '../App/index.css';
import modelosList from '../modelos.json'
import CategoriasList from '../categoria.json'
import sortList from '../Prueba.js'
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {getdataFile} from "./testrest.js";
import {Test} from "./mockservice.js";

class Buscador extends Component {


      constructor(props) {
    super(props);
    this.state = {
         search : "",
         data:modelosList,
         ordenCalificacion: false,
         startDate: moment(),
         nroMinDescarga:'',
         dataFiltrada:[],
         categoria:CategoriasList,
         categoriaSeleccionada:'',
         publicaciones:modelosList,
         rating:0
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }
 

  handleChange(date) {
    
    this.setState({ startDate: date});

     
  }

  selectddlChange(event)
  {
      var index = event.nativeEvent.target.selectedIndex;
      var seleccion=event.nativeEvent.target[index].text;

      this.setState({
       categoriaSeleccionada:seleccion

     })

  }
 
 
   convertir(img)
    {

      return  'data:'+this.state.tipo+';base64,'+img;
    }


componentDidMount(){
    
   getdataFile('login',this.state).then((result)=>{
    let responseJson= result;
      
    this.setState({publicaciones:responseJson});

    });

  }

    renderpublicacion = modelo =>{
        const {search} = this.state;

        /*if( search !== "" && modelo.nombre.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }*/



         return <div className="col-md-3">
     <Card  className="col-md-12"  style={{ height: "25rem" }}>
         <CardBody >
                    <p className=""><img className="card-img-top" src={modelo.img}  alt={modelo.nombre} /></p>
                    <CardTitle  style={{fontSize:17,fontWeight:'bold'}} title={modelo.nombre}> {modelo.nombre.substring(0, 15)}{ modelo.nombre.length > 15 && "..."} </CardTitle>
                
                     <p style={{fontSize:14,lineHeight: 1.8}} >
                      Autor : {modelo.autor} <br/>
                    Precio: {modelo.precio} <br/>
                     Fecha : {modelo.fechaCreacion} <br/>
                     Descargas : {modelo.descargas} 
                                        </p>


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

    onchange = e =>{
        this.setState({ search : e.target.value });

    }

    nroDescargaschange =e=>{
     var input=e.target.value;
  
      this.setState({nroMinDescarga:input})


    }

    changeRating =rating=> {
       
       
      this.setState({
        rating: rating},
          this.filtrarModelos);


    }

    
    
   
    ordenarPorCalificacionAsc =e =>
    { 
  
     const {data}=this.state;
     let newBuscador=data;
      
               newBuscador=data.sort((a,b)=>a.calificacion-b.calificacion)
         
       this.setState({
       data:newBuscador
     })

    }

        ordenarPorCalificacionDesc =e =>
    { 
  
     const {data}=this.state;
     let newBuscador=data;
      
               newBuscador=data.sort((a,b)=>b.calificacion-a.calificacion)
             
       this.setState({
       data:newBuscador
     })

    }

    ordenarPorFechaDesc =e =>
    { 
  
     const {data}=this.state;
     let newBuscador=data;
      
      newBuscador=data.sort((a,b)=> new Date(b.fechaCreacion).getTime()-new Date(a.fechaCreacion).getTime())

       this.setState({
       data:newBuscador
     })

    }


    ordenarPorFechaAsc =e =>
    { 
  
     const {data}=this.state;
     let newBuscador=data;
      
      newBuscador=data.sort((a,b)=> new Date(a.fechaCreacion).getTime()-new Date(b.fechaCreacion).getTime())

       this.setState({
       data:newBuscador
     })

    }


        ordenarPorDescargaAsc =e =>
    { 
  
     const {data}=this.state;
     let newBuscador=data;
      
      console.log(data);

      newBuscador=data.sort((a,b)=> a.descargas-b.descargas)
         
       this.setState({
       data:newBuscador
     })

    }

     ordenarPorDescargaDesc =e =>
    { 
  
     const {data}=this.state;
     let newBuscador=data;
      
               newBuscador=data.sort((a,b)=>b.descargas-a.descargas)
             
       this.setState({
       data:newBuscador
     })

    }

    ordenarPorNombre =e =>
    { 
  
     const {data}=this.state;
     let newBuscador=data;
      
     newBuscador=data.sort((a,b)=>a.nombre.toLowerCase()-b.nombre.toLowerCase());
             

       this.setState({
       data:newBuscador
     })

    }
     
      borrarFiltros =e =>
    { 
  
     const {data}=this.state;
     let newBuscador=modelosList;
      
 
    this.setState({
       data:newBuscador,
       startDate:'',
       nroMinDescarga:'',
       rating:0,
       categoriaSeleccionada:CategoriasList[0].nombre
     })

    }


      filtrarModelos =e =>
  {
    const {data}=this.state;
    const {startDate}=this.state;
        const {rating}=this.state;


     let newBuscador=data;

     let valorFecha=startDate;
    var fecha=Date.parse(valorFecha.format('MM-DD-YYYY'));
     
       console.log(rating );
             

     let meme;

     meme=data.filter( data =>data.calificacion >= rating);
                       
     console.log(meme);


        
     
  }


  
componentDidMount(){

  /*
    
   Test('login',this.state).then((result)=>{
    let responseJson= result;
    console.log(responseJson);
    this.setState({data:responseJson});

    });
*/
  }

/*
componentWillUpdate(){
    this.filtrarModelos();
}
*/



    render() {

        const {search,rating} = this.state;
     
  const filteredmodelos = this.state.data.filter( modelo =>{
            return modelo.nombre.toLowerCase().indexOf( search.toLowerCase() ) !== -1  && modelo.descargas>this.state.nroMinDescarga
                   && modelo.calificacion >=this.state.rating
        });
     
      console.log(filteredmodelos);

       return (

      
            <main style={{marginTop: '4rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col">

                          </div> 
                          
                        <div className="col">
                        </div>
                        <div className="col text-right">
                          
                        
                           <Dropdown>
                              <DropdownToggle caret color="primary">
                              Ordenar por
                              </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem href="#" onClick={this.ordenarPorNombre} >Nombre</DropdownItem>
                                  <DropdownItem href="#" onClick={this.ordenarPorFechaDesc}>Más reciente a más antiguo</DropdownItem>
                                  <DropdownItem href="#" onClick={this.ordenarPorFechaAsc} >Más antiguo a más reciente</DropdownItem>
                                  <DropdownItem href="#" onClick={this.ordenarPorCalificacionDesc}>Mayor a menor calificación </DropdownItem>
                                  <DropdownItem href="#" onClick={this.ordenarPorCalificacionAsc}>Menor a mayor calificación </DropdownItem>
                                  <DropdownItem href="#" onClick={this.ordenarPorDescargaDesc}>Mayor a menor descargas </DropdownItem>
                                   <DropdownItem href="#" onClick={this.ordenarPorDescargaAsc}>Menor a mayor descargas </DropdownItem>


                                </DropdownMenu>
                              </Dropdown>
                              
                        
                        </div>

                    </div>

                    <div className="row">

                      <div className="col-md-3">
                          <div>
                           <Input label="Buscar modelo" icon="search" onChange={this.onchange}/>
                          </div>
                           <Input label=" Mínimo nro de descargas" type="number" min="1" value={this.state.nroMinDescarga} className="mb-2" onChange={this.nroDescargaschange}/>

                          <div>
                              <p>Min Fecha  </p>
                                <DatePicker id="calendario"  ref={el => this.calendario = el} placeholderText="Selecciona una fecha"
                                    dateFormat="DD/MM/YYYY"
                                    isClearable={true}
                                    selected={this.state.startDate}
                                    onSelect={this.handleSelect} //when day is clicked
                                    onChange={this.handleChange} //only when value has changed
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"

                                    minDate={moment().subtract(9, "month")}
                                    maxDate={moment()}                                    
                                    />
                           </div>
                                <br/>

                            <div>
                                <p> Min. Calificacion </p> 
                               <StarRatings 
                                    rating={this.state.rating}
                                    starRatedColor="blue"
                                    changeRating={this.changeRating}
                                    starDimension="20px"
                                    starSpacing="4px"
                                /> 
                                </div>
                                <div>
                              <p> Categoría
                                  </p>

                                 {['nombre'] .map(key => (
                            <select className="browser-default custom-select" key={key} value={this.state.categoriaSeleccionada}  onChange={e => this.selectddlChange(e)}  ref={el => this.ddlCategoria = el}>
                                {this.state.categoria.map(({ [key]: value }) => <option key={value}>{value}</option>)}
                            </select>
                                 )
                                 )
                                 }
                          </div>

                          <div>

                             <Button color="primary" className="botonFiltro" onClick={this.borrarFiltros}><Fa icon="trash" className="mr-1" />Borrar filtros </Button>

                              </div>

                        </div>
                        
                      <div className="col-md-9">

                       <div className="row">
                        
                               { filteredmodelos.length==0 &&
                                  <p> CHUPALA GIRALDO </p>


                               }

                             {
                                    filteredmodelos.map( modelo =>{
                                        return this.renderpublicacion(modelo)
                                    })
                                }
                                


                
                       </div>
                      </div>
                    </div>
                </div>
            </main>
       
        );
        
    }
}

export default Buscador;