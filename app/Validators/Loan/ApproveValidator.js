'use strict'

const { formatters } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')

class ApproveValidator {
  get validateAll () {
    return true
  }

  get formatter () {
    return formatters.JsonApi
  }

  get rules () {
    return {
      loan_id: 'required',
      lender_id: 'required',
      due_amount: 'required',
      interest: 'required',
      due_at: 'required'
    }
  }

  get messages () {
    return {
      'loan_id.required': 'Loan is required.',
      'lender_id.required': 'Lender is required.',
      'due_amount.required': 'Due amount is required.',
      'interest.required': 'Interest is required.',
      'due_at.required': 'Due date is required.'
    }
  }

  async fails (message) {
    throw new ValidationException(message)
  }
}

module.exports = ApproveValidator
