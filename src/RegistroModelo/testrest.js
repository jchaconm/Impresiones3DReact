
import stringInject from 'stringinject';

export function Test(type,userData){


  var idUsuario = parseInt(1);


  //let BaseUrl='http://localhost:9002/canal/listar?pIdUsuario='+idUsuario+'&pNoTipo=%201%20%20%20%20%20&pTiFun=1';
  var BaseUrl=stringInject('http://localhost:9005/post3d/newArticle',{idUsuario:idUsuario,idPublicacion:idPublicacion,file:file});
  //var str = stringInject("My username is {username} on {platform}", { username: "tjcafferkey", platform: "GitHub" });
  return new Promise((resolve,reject) =>{
   
    const xs=JSON.stringify(userData) ;

    console.log(xs);

/*
    var data = new FormData();
    data.append( "json", JSON.stringify( userData ) );
*/
    fetch(BaseUrl,{
        method:'POST',
        mode:'cors',
        body:JSON.stringify({
        "publicacion": {
            "fePublicacion": new Date().now(),
            "idCanal": userData.idCanal,
            "idPublicacion": 0,
            "ilActivo": true,
            "noCategoria":"General",
            "noDescripcion": userData.noDescripcion,
            "noPublicacion":userData.noPublicacion,
            "nuAlto":userData.nuAlto,
            "nuAncho": userData.nuAncho,
            "nuLargo": userData.nuLargo,
            "nuPuntuacion": "0"
        }
      }
        ),
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
        

    })
    .then((response)=> response.json())
    .then((responseJson)=>{
        resolve(responseJson);
              console.log(responseJson);

      




    })
    .catch((error)=> {
      console.log(error);
    })


  });



}