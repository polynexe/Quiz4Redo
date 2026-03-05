import { configureStore } from '@reduxjs/toolkit'
import { projectListReducer } from './reducers/projectReducers'
import { userLoginReducer } from './reducers/userReducers'

const preloadedState = {
  userLogin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
}

const store = configureStore({
  reducer: {
    projectList: projectListReducer,
    userLogin: userLoginReducer,
  },
  preloadedState,
})

export default store
