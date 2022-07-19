import Axios from 'axios'
import { DOMAIN, TOKEN, TokenCybersoft } from 'src/config/configApi'

export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'PUT',
      data: model,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(TOKEN),
        TokenCybersoft: `${TokenCybersoft}`
      } //JWT
    })
  }

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'POST',
      data: model,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(TOKEN),
        TokenCybersoft: `${TokenCybersoft}`
      } //JWT
    })
  }

  get = url => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'GET',
      headers: {
        // Authorization: 'Bearer ' + localStorage.getItem(TOKEN),
        TokenCybersoft:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIzMS8wMS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzUxMjMyMDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NTI3MDgwMH0.AIuCmZwqwz4ytkjLFFDsoctOuwji561du2mf20MNwnc'
      }
    })
  }

  delete = url => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(TOKEN),
        TokenCybersoft: `${TokenCybersoft}`
      }
    })
  }
}
