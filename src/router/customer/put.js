import { Customer } from '../../models'

const handler = async (request, response, next) => {
  
  let body = request.body

  try{

    let customer = await Customer.create(body)
    response.json(customer)

  } catch(error){
    next(error)
  }
}

export default handler