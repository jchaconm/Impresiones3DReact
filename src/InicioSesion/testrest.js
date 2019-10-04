import stringInject from 'stringinject';

export function Test(type,userData){


  var idUsuario = parseInt(1);


  //let BaseUrl='http://localhost:9002/canal/listar?pIdUsuario='+idUsuario+'&pNoTipo=%201%20%20%20%20%20&pTiFun=1';
  //var BaseUrl=stringInject('http://localhost:8085/http://localhost:9007/api/ms-commons/canal/listar?pIdUsuario={idUsuario}&pNoTipo=%201%20%20%20%20%20&pTiFun=1',{idUsuario:idUsuario});
  var BaseUrl='http://localhost:8085/http://localhost:9002/usuario/listUser';

  return new Promise((resolve,reject) =>{
   
    const xs=JSON.stringify(userData) ;



    fetch(BaseUrl,{
        method:'POST',
        mode:'cors',
        body:JSON.stringify({  "pnombre": userData.username}),
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
        

    })
    .then((response)=> response.json())
    .then((responseJson)=>{
        resolve(responseJson); 


    })
    .catch((error)=> { 
      console.log("xs"+error);
    })


  });



}