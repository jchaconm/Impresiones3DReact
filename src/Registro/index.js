import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import {Test} from './testrest.js';
import {Redirect} from 'react-router-dom';

class Registro extends React.Component  {

constructor(props)
{
 super(props);

 this.state = { idResulta:0,
                idRol:0,
                idUsuario:0,
                ilActivo:true,
                noNewPassword:'',
                noToken:'',
                no_nombre:'',
                no_apellido:'',
                no_email:'',
                no_login:'',
                no_password:'',
                nu_contacto:'',
                no_direccion:'',
                no_distrito:'',
                registrado:false
              
 }

    this.onChange=this.onChange.bind(this);
    this.registrarUsuario=this.registrarUsuario.bind(this);
    

}

onChange(e)
  {

    console.log(e.target.name);
    
    
    this.setState({[e.target.name]:e.target.value});

    

  }

registrarUsuario()
{

     Test('login',this.state).then((result)=>{
     let responseJson = result;
     this.setState({
       registrado:true     
     },      console.log("1"+this.state.registrado));
     alert("Registro exitoso");


          
    });
  

  }


  render() {
    console.log("2"+this.state.registrado);


   if(this.state.registrado)
   {
    return(<Redirect to={'/'}/>);

   }

    return(
      <Container>
        <Row>
          <Col md="3" >
          </Col>
          <Col md="6">
          <form>

              <p className="h5 text-center mb-4">Registrate</p>
              <div className="grey-text">
                <Input label="Tu nombre" icon="user" group type="text" validate error="wrong"  name="no_nombre"  success="right" onChange={this.onChange}/>
               <Input label="Tus apellidos" icon="user" group type="text" validate error="wrong" name="no_apellido" success="right"  onChange={this.onChange}/>
                <Input label="Tu correo electrónico" icon="envelope" group type="email" name="no_email" validate error="wrong" success="right"  onChange={this.onChange}/>
                <Input label="Nombre de usuario" icon="user" group type="text" name="no_login"  validate error="wrong" success="right"  onChange={this.onChange}/>
                <Input label="Tu contraseña" icon="lock" group type="password"  name="no_password" validate  onChange={this.onChange}/>
          
              <p className="h4 text-center mb-4">Datos de Envío</p>

                <Input label="Ingrese número de contacto" icon="user" group type="text"  name="nu_contacto" validate error="wrong" success="right"  onChange={this.onChange}/>
                <Input label="Ingrese direccion" icon="user" group type="text" name="no_direccion" validate error="wrong" success="right"  onChange={this.onChange}/>
                <Input label="Ingrese distrito" icon="user" group type="text" validate error="wrong" name="no_distrito" success="right"  onChange={this.onChange}/>


               </div>
              <div className="text-center">
                <Button color="primary"  onClick={this.registrarUsuario}>Registrarme</Button>
              </div>
            </form>
           </Col>
        
            <Col md="3" >
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Registro;