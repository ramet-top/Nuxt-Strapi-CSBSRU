import Cookies from 'js-cookie'

export const state = () => {}

export const mutations = {
  setUser(state, user) {
    state.user = user
    Cookies.set('user', user)
  },
  logout(state) {
    state.user = ''
    Cookies.set('user', '')
  }
}

export const getters = {
  email: state => {
    return state.user && state.user.email
  },
  username: state => {
    return state.user && state.user.username
  }
}