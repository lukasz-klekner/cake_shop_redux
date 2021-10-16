import { connect } from 'react-redux'

const ItemContainer = ({ item, cake }) => {
  return (
    <div>
      <h2>
        {cake ? 'Cake' : 'Ice Cream'} - {item}
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

export default connect(mapStateToProps)(ItemContainer)
