
export function Test(type,userData){


  var BaseUrl='http://localhost:8085/http://localhost:9002/usuario/insertUser';
  //var str = stringInject("My username is {username} on {platform}", { username: "tjcafferkey", platform: "GitHub" });
  return new Promise((resolve,reject) =>{
   
    const xs=JSON.stringify({"usuario":{
      "idResulta": 0,
    "idRol": 0,
    "idUsuario": 0,
    "ilActivo": true,
    "noApellido": userData.no_apellido,
    "noDescripcion": "aaaaa",
    "noDireccion": userData.no_direccion,
    "noDistrito": userData.no_distrito,
    "noEmail": userData.no_email,
    "noLogin": userData.no_login,
    "noNewPassword": "",
    "noNombre": userData.no_nombre,
    "nuContacto": userData.nu_contacto,
    "noPassword": userData.no_password,
    "noToken": "1"
    }}) ;
    console.log(xs);

    fetch(BaseUrl,{
        method:'POST',
        mode:'cors',
        body:xs,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
        

    })
    .then((response)=> response.json())
    .then((responseJson)=>{
        resolve(responseJson);
           //   console.log(responseJson);

      




    })
    .catch((error)=> {
      console.log(error);
    })


  });



}