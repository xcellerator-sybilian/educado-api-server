'use strict'

const Encryption = use('Encryption')
const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * LenderTransformer class
 *
 * @class LenderTransformer
 * @constructor
 */
class LenderTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      id: model.id,
      user_id: model.user_id,
      name: model.name,
      phone_number: model.phone_number,
      email: model.email,
      address: model.address,
      bank_account_number: Encryption.decrypt(model.bank_account_number),
      created_at: model.created_at,
      updated_at: model.updated_at
    }
  }
}

module.exports = LenderTransformer
