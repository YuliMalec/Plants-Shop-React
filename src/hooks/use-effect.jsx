import axios from 'axios'



const getData = async ()=>{

let res= await  axios.get('https://fakestoreapi.com/products?limit=9')
  .then(function (response) {
    // handle success

   return response.data;
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
 return res
}





export default getData;