
import { CourierRestaurant, Restaurant } from '../../../../models'

const handler = async (request, response, next) => {
  
  const courierId = request.params['courierId']

  let limit = null

  if (request.query.limit) {
    limit = +request.query.limit
    delete request.query.limit
  }

  let where = request.query || {}

  try{

    let courierRestaurants = await CourierRestaurant.findAll({where: {courierId}, limit, 
      include:[{model: Restaurant, as: 'restaurant', where}]
    })
    
    if (!courierRestaurants.length) {
      return response.status(404).end('Not found any restaurants for this courier')
    }

    let restaurants = courierRestaurants.map(({ restaurant }) => restaurant)

    response.json(restaurants)

  } catch(error){
    next(error)
  }
}

export default handler