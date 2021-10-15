import { connect } from 'react-redux'
import { useState } from 'react'

import { buyCake } from '../redux'

const CakeContainer = ({ numberOfCakes, buyCake }) => {
  const [number, setNumber] = useState(1)

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
      <button onClick={() => buyCake(number)}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  numberOfCakes: state.cake.numberOfCakes,
})

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
