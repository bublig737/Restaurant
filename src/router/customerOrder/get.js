import { CustomerOrder, Customer, Restaurant, Courier } from '../../models'

const handler = async (request, response, next) => {

  let limit = null

  if (request.query.limit) {
    limit = +request.query.limit
    delete request.query.limit
  }

  let where = request.query || {}

  try {

    let customerOrder = await CustomerOrder.findAll({where, limit, 
      include: [
        {model: Customer, as: 'customer'},
        {model: Restaurant, as: 'restaurant'},
        {model: Courier, as: 'courier'},
      ]
    })
    
    if (!customerOrder) {
      return response.status(404).end('Not found')
    }

    response.json(customerOrder)

  } catch(error){
    next(error)
  }
}


export default handler