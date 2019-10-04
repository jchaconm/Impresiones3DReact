import React  from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Buscador from '../Buscador/';
import Registro from '../Registro/';
import Login from '../InicioSesion/';
import RegistroModelo from '../RegistroModelo/';
import PaginaInicio from '../PaginaInicio/';
import Consulta from '../ConsultaModelo/';
import ExploracionCanales from '../ExploracionCanales/';
import DetallesModelo from '../DetallesModelo/';


const Main =props => (
  

     <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PaginaInicio} />
      <Route exact path="/buscador" component={Buscador} />
      <Route exact path="/registro" component={Registro} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registroModelo" component={RegistroModelo} />
      <Route exact path="/Consulta" component={Consulta} />
      <Route exact path="/ExplorarCanales" component={ExploracionCanales} />
      <Route exact path="/DetalleModelo" component={DetallesModelo} />


    </Switch>
  </BrowserRouter>

);

export default Main;
