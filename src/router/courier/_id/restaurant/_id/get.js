
import { CourierRestaurant } from '../../../../../models'

const handler = async (request, response, next) => {

  const { courierId, restaurantId } = request.params
  
  try {

    let courierRestaurant = await CourierRestaurant.findOne({ where: { courierId, restaurantId }, include: ['restaurant']})

    if(!courierRestaurant || !courierRestaurant.restaurant){
      return response.status(404).end('Not found such courier or restaurant')
    }

    response.json(courierRestaurant.restaurant)

  } catch(e){
    next(e)
  }
}

export default handler