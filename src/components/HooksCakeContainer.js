import { useSelector, useDispatch } from 'react-redux'

import { buyCake } from '../redux'

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector(({ numberOfCakes }) => numberOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
