import { Courier } from '../../models'

const handler = async (request, response, next) => {
  
  let body = request.body

  try{

    let courier = await Courier.create(body)
    response.json(courier)

  } catch(error){
    next(error)
  }
}

export default handler