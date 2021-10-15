import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { buyCake } from '../redux'

const HooksCakeContainer = () => {
  const [number, setNumber] = useState(1)
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
  const dispatch = useDispatch()

  const changeNumber = (event) => setNumber(event.target.value)

  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <input
        type='text'
        placeholder='how many cakes'
        value={number}
        onChange={changeNumber}
      />
      <button onClick={() => dispatch(buyCake(number))}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
