import { useSelector } from 'react-redux'

import { buyCake } from '../redux'

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector(({ numberOfCakes }) => numberOfCakes)
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
