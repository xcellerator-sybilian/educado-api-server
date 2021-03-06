'use strict'

const { formatters } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')

class EditValidator {
  get validateAll () {
    return true
  }

  get formatter () {
    return formatters.JsonApi
  }

  get rules () {
    return {
      username: 'required|unique:users',
      password: 'required'
    }
  }

  get messages () {
    return {
      'username.required': 'Username is required.',
      'username.unique': 'Username already taken.',
      'password.required': 'Password is required.'
    }
  }

  async fails (message) {
    throw new ValidationException(message)
  }
}

module.exports = EditValidator
