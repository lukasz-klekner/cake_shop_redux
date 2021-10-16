import { connect } from 'react-redux'
import { useState, useEffect } from 'react'

import { fetchUsers } from '../redux'

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers()
  }, [])

  console.log(userData)
  return userData?.loading ? (
    <h5>Loading...</h5>
  ) : userData?.error ? (
    <h4>{userData.error}</h4>
  ) : (
    <div>
      <h3>User list</h3>
      <div>
        {console.log(userData, 'p')}
        {userData &&
          userData.users &&
          userData?.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userData: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
