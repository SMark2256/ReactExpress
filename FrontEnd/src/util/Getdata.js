//firebase
import db from './Firebase.js'
import { ref, onValue } from "firebase/database"

const fetchMoviesHandler = (foodtype,setFoods,setLoading) => {
      setLoading(true)
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
                  const foodselements = []

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
                  setFoods(foodselements)
                  })
                  
                  })


            }catch (e){
                  console.log(e)
            }

      setTimeout(() => {
            setLoading(false)
      }, 300);
}



export default fetchMoviesHandler;