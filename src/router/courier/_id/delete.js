
import { Courier } from '../../../models'

const handler = async (request, response, next) => {

  const id = request.params['courierId']

  try {

    let courier = await Courier.remove({ id })

    if (!courier) {
      return response.status(404).end('Not found to delete')
    }

    response.json(courier)

  } catch(error){
    next(error)
  }
}

export default handler