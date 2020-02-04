
import { Customer } from '../../../models'

const handler = async (request, response, next) => {

  const id = request.params['customerId']

  try {

    let customer = await Customer.findOne({ where: { id }})

    if (!customer) {
      return response.status(404).end('Not found')
    }

    response.json(customer)
    
  } catch(error){
    next(error)
  }
}

export default handler