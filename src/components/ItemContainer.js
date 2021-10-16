import { connect } from 'react-redux'

import { buyCake, buyIceCream } from '../redux'

const ItemContainer = ({ item, buyItem, cake }) => {
  return (
    <div>
      <h2>
        {cake ? 'Cake' : 'Ice Cream'} - {item}
        <button onClick={buyItem}>Buy ice cream</button>
      </h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCream
  return {
    item: itemState,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake(1))
    : () => dispatch(buyIceCream())

  return {
    buyItem: dispatchFunction,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
