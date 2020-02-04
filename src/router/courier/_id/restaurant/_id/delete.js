
import { CourierRestaurant } from '../../../../../models'

const handler = async (request, response, next) => {

  const { courierId, restaurantId } = request.params
  
  try{

    let courierRestaurant = await CourierRestaurant.findOne({ where: { courierId, restaurantId }})

    if(!courierRestaurant){
      return response.status(404).end('This restaurant is not use by courier')
    }

    await CourierRestaurant.remove({ courierId, restaurantId })

    response.json('Restaurant successfully deleted from courier s list')

  } catch(e){
    next(e)
  }
}

export default handler