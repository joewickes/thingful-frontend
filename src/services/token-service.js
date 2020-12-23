import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    console.log(userName, password);
    const bsf = window.btoa(`${userName}:${password}`)
    console.log(bsf);
    const x =  Buffer
      .from(bsf, 'base64')
      .toString()
      .split(':')
    ;
    console.log(x);
    return `basic ${bsf}`
  },
}

export default TokenService
