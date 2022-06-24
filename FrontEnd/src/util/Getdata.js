import { useCallback } from 'react'
//firebase
import db from './util/Firebase.js'
import { ref, onValue } from "firebase/database"



  //https://www.youtube.com/watch?v=jcnBoWRGw4o&ab_channel=MartinDichtler
  //https://firebase.google.com/docs/web/setup

  //https://firebase.google.com/docs/database/web/read-and-write  -- adatkezelés



  const fetchMoviesHandler = useCallback( async (foodtype,setFoods,setLoading) => {
      setLoading(true);
      try {
         
        // Axios példa:
        // const response = await axios.get( `https://ig-food-menus.herokuapp.com/best-foods` );
        // const data = await response.data;
        // console.log(data);
       
        // const foodselements = [];
        // for (const key in data) {
        //   foodselements.push({
        //         id: data[key].id,
        //         name: data[key].name,
        //         img: data[key].img,
        //         price: data[key].price,
        //         rate: data[key].rate,
        //     });
        // }
        // setFoods(foodselements);
        // console.log(foodselements);
  
  
          const fireRequest = ref(db, `/foods/${foodtype}`)
          onValue(fireRequest, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
            const response = childSnapshot.val()
  
            const data = response
              console.log(data)
            const foodselements = [];
    
          for (const key in data) {
            foodselements.push({
                key: key,
                id: data[key].id,
                name: data[key].name,
                type: foodtype,
                img: data[key].img,
                price: data[key].price,
                rate: data[key].rate
              });
          }
          //console.log(foodselements)
          setFoods(foodselements);
            })
            
          })
  
  
      }catch (e){
          console.log(e);
      }
      setLoading(false);
    }, [])



    export default fetchMoviesHandler;