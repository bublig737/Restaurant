import { Courier } from '../../models'

const handler = async (request, response, next) => {

  let limit = null

  if (request.query.limit) {
    limit = +request.query.limit
    delete request.query.limit
  }

  let where = request.query || {}

  try{

    let courier = await Courier.findAll({where, limit})
    
    if (!courier) {
      return response.status(404).end('Not found')
    }

    response.json(courier)

  } catch(error){
    next(error)
  }
}


export default handler