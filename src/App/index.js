import React,{Component} from 'react';
import './index.css';
import Main from '../Main/';
import Logo from '../imagenes/logo3d.png';
import {Footer} from 'mdbreact';
import {Redirect} from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter } from 'react-router';


class App extends Component
{
  constructor(props){
    
    super(props);
    this.state={
      redirected:false
   }


  };


  logout = () => 
  {
   sessionStorage.setItem("userData",'');
   sessionStorage.clear();
    this.setState({redirected:false})
  }

  componentDidMount()
  {
    if(sessionStorage.getItem('userData'))
      {

        this.setState({redirected:true})
      }


  }

  render(){
 

    console.log(this.state.redirected);

    return(
     <div>
       <div className="App">
      
       <div className="text-right opcionesBarra">
         
            {
               !this.state.redirected
               &&
                   <a  href="/login">Iniciar sesión </a> 

             }

                       {
               !this.state.redirected
               &&
                   <a  href="/registro"> Registro</a>
             }
             {
              this.state.redirected
               &&
                   <a  onClick={this.logout}> Cerrar sesión</a>
             }
        
        </div>
          <header className="App-header2" >
            <a href='/'>
                <img src={Logo}/>
                </a>
            
          </header>
 


        <div className="barra2" >
          <ul className="ul2">
              <li><a  href="/buscador">Búsqueda</a></li>
              <li><a href="/registroModelo">Publicar modelo</a></li>
              <li><a href="/Consulta">Consulta </a></li>
              <li><a href="#about">Mi Perfil</a></li>
         </ul>
       </div>
       </div>

        <Main/>


           
      <div>
           <Footer color="indigo">

                <p className="footer-copyright mb-0">
                &copy; {(new Date().getFullYear())} Copyright
                </p>
            </Footer>
       </div>
 
      </div>
       
   );
  }
}

    


export default App;