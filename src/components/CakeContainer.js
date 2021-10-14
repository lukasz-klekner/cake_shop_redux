import { connect } from 'react-redux'

import { buyCake } from '../redux'

const CakeContainer = ({ numberOfCakes, buyCake }) => {
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  numberOfCakes: state.numberOfCakes,
})

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
