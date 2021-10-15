import { connect } from 'react-redux'

import { buyIceCream } from '../redux'

const IceCreamContainer = ({ numberOfIceCream, buyIceCream }) => {
  return (
    <div>
      <h2>Number of Ice Cream - {numberOfIceCream}</h2>
      <button onClick={buyIceCream}>Buy ice cream</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  numberOfIceCream: state.iceCream.numberOfIceCream,
})

const mapDispatchToProps = (dispatch) => ({
  buyIceCream: () => dispatch(buyIceCream()),
})

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
