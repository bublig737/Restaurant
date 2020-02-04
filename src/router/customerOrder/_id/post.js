
import { CustomerOrder } from '../../../models'

const handler = async (request, response, next) => {

  const id = request.params['customerOrderId']
  const dataToUpdate = request.body
  
  try{

    let customerOrder = await CustomerOrder.findOne({where: { id }})

    if (!customerOrder) {
      return response.status(404).end('Not found to update')
    }

    let updatedCustomerOrder = await customerOrder.update(dataToUpdate)    
    response.json(updatedCustomerOrder)

  } catch(e){
    next(e)
  }
}

export default handler