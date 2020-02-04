
import { Courier } from '../../../models'

const handler = async (request, response, next) => {

  const id = request.params['courierId']
  const dataToUpdate = request.body
  
  try{

    let courier = await Courier.findOne({where: { id }})

    if (!courier) {
      return response.status(404).end('Not found to update')
    }

    let updatedCourier = await courier.update(dataToUpdate)    
    response.json(updatedCourier)

  } catch(e){
    next(e)
  }
}

export default handler