import { Restaurant } from '../../models'

const handler = async (request, response, next) => {
  
  let body = request.body

  try{

    let restaurant = await Restaurant.create(body)
    response.json(restaurant)

  } catch(error){
    next(error)
  }
}

export default handler