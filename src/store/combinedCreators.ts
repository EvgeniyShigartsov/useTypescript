import * as UserActionCreators from './users/actions'
import * as TodoActionCreators from './todos/actions'

export const combinedCreators = {
  ...UserActionCreators,
  ...TodoActionCreators,
}
