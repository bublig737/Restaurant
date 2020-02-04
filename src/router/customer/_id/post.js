
import { Customer } from '../../../models'

const handler = async (request, response, next) => {

  const id = request.params['customerId']
  const dataToUpdate = request.body
  
  try{

    let customer = await Customer.findOne({where: { id }})

    if (!customer) {
      return response.status(404).end('Not found to update')
    }

    let updatedCustomer = await customer.update(dataToUpdate)    
    response.json(updatedCustomer)

  } catch(e){
    next(e)
  }
}

export default handler