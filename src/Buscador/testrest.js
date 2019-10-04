export function getdataFile(type,userData){



 var BaseUrl='http://localhost:9005/post3d/retrieveAll';

  return new Promise((resolve,reject) =>{
   
    const xs=JSON.stringify(userData) ;

    fetch(BaseUrl,{
        method:'GET',
        mode:'cors',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
        

    })
    .then((response)=> response.json())
    .then((responseJson)=>{
        resolve(responseJson);
        console.log("prueba 2");
              console.log(responseJson.list[2].dataFile[0].data.data);

      




    })
    .catch((error)=> {
      console.log(error);
    })


  });



}