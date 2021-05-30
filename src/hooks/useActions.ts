import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { combinedCreators } from '../store/combinedCreators'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(combinedCreators, dispatch)
}
