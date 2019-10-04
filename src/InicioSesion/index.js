import React from 'react';
import logo3d from'../imagenes/logo3d.png';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import {Redirect} from 'react-router-dom';
import {Test} from './testrest.js';
import { withRouter } from 'react-router';

class InicioSesion extends React.Component  {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      redirect:false

    };

    this.login=this.login.bind(this);
    this.onChange=this.onChange.bind(this);

   }
 
  login()
  {
     sessionStorage.setItem('userData2','xd');


     Test('login',this.state).then((result)=>{
     let responseJson = result;
     console.log(responseJson); 

     if(responseJson.lsUsuario.length ===1 && responseJson.lsUsuario[0].noPassword ==this.state.password ) {
      
       sessionStorage.setItem('userData',responseJson);
       this.setState({redirect:true});
       console.log('Login exitoso');
       window.location.reload();

       
     }

     else
     {
      console.log('Usuario / contraseña ingresado es incorrecto');

     }

    });
    

  }

  onChange(e)
  {
    
    this.setState({[e.target.name]:e.target.value});
   console.log(e.target.value);

  }

  render() {

   if(this.state.redirect)
   {
    return(<Redirect to={'/'}/>);

   }

     
    return(
      <div className="container">
      <Container >
        <Row>
          <Col md="3" >
          </Col>

          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">¡Bienvenido!</p>
              <div className="grey-text">
                <Input label="Ingresa tu correo" icon="envelope" name="username" group type="email" validate error="wrong" success="right" onChange={this.onChange}/>
                <Input label="Ingresa tu contraseña"  icon="lock" name="password" group type="password" validate onChange={this.onChange}/>
              </div>
              <div className="text-center">
                <Button onClick={this.login}>Ingresar</Button>
              </div>
            </form>
            
          </Col>

          <Col md="3" >




          </Col>
        </Row>
      </Container>
      </div>
    );
  }
};

export default withRouter(InicioSesion);