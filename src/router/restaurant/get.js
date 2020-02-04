import { Restaurant } from '../../models'

const handler = async (request, response, next) => {

  let limit = null

  if (request.query.limit) {
    limit = +request.query.limit
    delete request.query.limit
  }

  let where = request.query || {}

  try{

    let restaurant = await Restaurant.findAll({where, limit})
    
    if (!restaurant) {
      return response.status(404).end('Not found')
    }

    response.json(restaurant)

  } catch(error){
    next(error)
  }
}


export default handler