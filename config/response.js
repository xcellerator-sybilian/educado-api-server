'use strict'

module.exports = {
  // Response status
  status: {
      success: 200,
      bad_request: 400,
      unauthorized: 401,
      not_found: 404,
      server_error: 500
  },

  // Response codes
  code: {
    success: {
      register: {
        student: 'REGISTER_STUDENT',
        guarantor: 'REGISTER_GUARANTOR',
        school: 'REGISTER_SCHOOL',
        lender: 'REGISTER_LENDER'
      },
      token: {
        request: 'REQUEST_TOKEN',
        refresh: 'REFRESH_TOKEN'
      },
      user: {
        browse: 'BROWSE_USERS',
        read: 'READ_USER',
        edit: 'EDIT_USER',
        add: 'ADD_USER',
        delete: 'DELETE_USER'
      },
      school: {
        browse: 'BROWSE_SCHOOLS',
        read: 'READ_SCHOOL',
        edit: 'EDIT_SCHOOL',
        add: 'ADD_SCHOOL',
        delete: 'DELETE_SCHOOL'
      },
      lender: {
        browse: 'BROWSE_LENDERS',
        read: 'READ_LENDER',
        edit: 'EDIT_LENDER',
        add: 'ADD_LENDER',
        delete: 'DELETE_LENDER'
      },
      student: {
        browse: 'BROWSE_STUDENTS',
        read: 'READ_STUDENT',
        edit: 'EDIT_STUDENT',
        add: 'ADD_STUDENT',
        delete: 'DELETE_STUDENT'
      },
      guarantor: {
        browse: 'BROWSE_GUARANTORS',
        read: 'READ_GUARANTOR',
        edit: 'EDIT_GUARANTOR',
        add: 'ADD_GUARANTOR',
        delete: 'DELETE_GUARANTOR'
      },
      loan: {
        browse: 'BROWSE_LOANS',
        read: 'READ_LOAN',
        apply: 'APPLY_LOAN',
        endorse: 'ENDORSE_LOAN',
        approve: 'APPROVE_LOAN',
        accept: 'ACCEPT_LOAN',
        release: 'RELEASE_LOAN',
        receive: 'RECEIVE_LOAN',
        pay: 'PAY_LOAN',
        cancel: 'CANCEL_LOAN',
        deny: 'DENY_LOAN',
      },
      document: {
        browse: 'BROWSE_DOCUMENTS',
        verify: 'VERIFY_DOCUMENT',
        read: 'READ_DOCUMENT',
        add: 'ADD_DOCUMENT'
      }
    },
    error: {
      loan_limit: 'LOAN_LIMIT',
      document_exists: 'DOCUMENT_EXISTS',
      bad_request: 'BAD_REQUEST',
      unauthorized: 'UNAUTHORIZED',
      invalid_token: 'INVALID_TOKEN',
      expired_token: 'EXPIRED_TOKEN',
      record_not_found: 'RECORD_NOT_FOUND',
      route_not_found: 'ROUTE_NOT_FOUND',
      server_error: 'INTERNAL_SERVER_ERROR'
    }
  }
}