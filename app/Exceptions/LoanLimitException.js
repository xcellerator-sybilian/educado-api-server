'use strict'

const Config = use('Config')
const ResponseHelper = use('ResponseHelper')
const { LogicalException } = require('@adonisjs/generic-exceptions')

class LoanLimitException extends LogicalException {
  handle (error, { response }) {
    const responseStatus = Config.get('response.status.bad_request')
    const responseCode = Config.get('response.code.error.loan_limit')
    const responseData = error.message
    
    ResponseHelper.formatResponse(response, responseStatus, responseCode, responseData)
  }
}

module.exports = LoanLimitException
