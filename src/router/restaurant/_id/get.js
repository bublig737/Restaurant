
import { Restaurant } from '../../../models'

const handler = async (request, response, next) => {

  const id = request.params['restaurantId']

  try {

    let restaurant = await Restaurant.findOne({ where: { id }})

    if (!restaurant) {
      return response.status(404).end('Not found')
    }

    response.json(restaurant)
    
  } catch(error){
    next(error)
  }
}

export default handler