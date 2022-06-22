const axios = require('axios')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json());

app.post('/foods', async (req, res) => {
      console.log(req.body.foodtype)
      const foodtype = req.body.foodtype

     try {
            const response = await axios.get(`https://ig-food-menus.herokuapp.com/${foodtype}`);

            const foodselements = [];
      
            for (const key in response.data) {
              foodselements.push({
                    key: key,
                    id: response.data[key].id,
                    name: response.data[key].name,
                    type: foodtype,
                    img: response.data[key].img,
                    price: response.data[key].price,
                    rate: response.data[key].rate,
                });
            }
            console.log(foodselements)

            res.send(foodselements)
      
        }catch (e){
            console.log(e);
        }

})
app.listen(3001)