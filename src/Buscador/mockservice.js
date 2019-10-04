export function Test(type,userData){

  let BaseUrl='https://36a3cf15-ace1-4ad2-b698-1dd14010f1af.mock.pstmn.io/post3d/retrieveAll';

  return new Promise((resolve,reject) =>{
   
    fetch(BaseUrl,{
        method:'GET'
        /*,
        body:JSON.stringify(userData)*/
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