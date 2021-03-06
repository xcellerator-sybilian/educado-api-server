'use strict'

const Config = use('Config')
const ResponseHelper = use('ResponseHelper')
const UserRepository = use('UserRepository')

class AddController {
  async add ({ request, response, transform }) {
    // Get request body
    const userDetails = request.only(['username', 'password'])
    
    // Process
    let user = await transform.item(UserRepository.add(userDetails), 'UserTransformer')

    // Set response body
    const responseStatus = Config.get('response.status.success')
    const responseCode = Config.get('response.code.success.user.add')
    const responseData = user
    const responseBody = ResponseHelper.formatResponse(response, responseStatus, responseCode, responseData)

    return responseBody
  }
}

module.exports = AddController
