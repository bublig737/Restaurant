import { CustomerOrder } from '../../models'

const handler = async (request, response, next) => {
  
  let body = request.body

  try{

    let customerOrder = await CustomerOrder.create(body)
    response.json(customerOrder)

  } catch(error){
    next(error)
  }
}

export default handler