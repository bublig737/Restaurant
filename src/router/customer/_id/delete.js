
import { Customer } from '../../../models'

const handler = async (request, response, next) => {
  
  const id = request.params['customerId']

  try {

    let customer = await Customer.remove({ id })

    if (!customer) {
      return response.status(404).end('Not found to delete')
    }

    response.json(customer)

  } catch(error){
    next(error)
  }
}

export default handler