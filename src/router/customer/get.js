import { Customer } from '../../models'

const handler = async (request, response, next) => {

  let limit = null

  if (request.query.limit) {
    limit = +request.query.limit
    delete request.query.limit
  }

  let where = request.query || {}

  try{

    let customer = await Customer.findAll({where, limit})
    
    if (!customer) {
      return response.status(404).end('Not found')
    }

    response.json(customer)

  } catch(error){
    next(error)
  }
}


export default handler