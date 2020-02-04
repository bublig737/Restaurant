
import { Restaurant } from '../../../models'

const handler = async (request, response, next) => {

  const id = request.params['restaurantId']
  const dataToUpdate = request.body
  
  try{

    let restaurant = await Restaurant.findOne({where: { id }})

    if (!restaurant) {
      return response.status(404).end('Not found to update')
    }

    let updatedRestaurant = await restaurant.update(dataToUpdate)    
    response.json(updatedRestaurant)

  } catch(e){
    next(e)
  }
}

export default handler