
import { Restaurant, Courier, CourierRestaurant } from '../../../../../models'

const handler = async (request, response, next) => {

  const { courierId, restaurantId } = request.params
  
  try{

    let courier = await Courier.findOne({ where: { id: courierId }})
    let restaurant = await Restaurant.findOne({ where: { id: restaurantId }})

    if(!courier || !restaurant){
      return response.status(404).end('Not found such courier or restaurant')
    }

    await CourierRestaurant.create({ courierId, restaurantId })

    response.json(restaurant)

  } catch(e){
    next(e)
  }
}

export default handler