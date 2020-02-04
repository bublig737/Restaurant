
import { CustomerOrder, Customer, Restaurant, Courier } from '../../../models'

const handler = async (request, response, next) => {

  const id = request.params['customerOrderId']

  try {

    let customerOrder = await CustomerOrder.findOne({ where: { id },
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