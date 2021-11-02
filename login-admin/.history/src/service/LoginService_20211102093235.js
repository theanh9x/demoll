import axios from 'axios';
const BASE_URL = "http://localhost:8080/o/authz-rest/";
const BASE_TOKEN = "http://localhost:8080/o/oauth2/token";
const BASE_EMPLOYEE = "http://localhost:8080/o/dogoo/employee-rest-builder/v1.0/employees/";
const BASE_REFRESH_TOKEN = "http://localhost:8080/o/authz-rest/refreshtoken";
class LoginService {

  signIn(username, password, access_token) {
    console.log(access_token);
    return axios.post(
      BASE_URL + "signin",
      {
        'username': username,
        'password': password
      },
      {
        headers:
        {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + access_token,
        }
      }

    );
  }

  getEmployees(page, pageSize, access_token, refreshtoken) {
    console.log(refreshtoken);
    console.log(access_token);
    return axios.get(
      // BASE_EMPLOYEE + "?page="+ page +"&pageSize="+pageSize ,
      BASE_EMPLOYEE,
      {},
      {
        headers: {
          'dogoo-x-user-context-request': access_token,
          'Authorization': 'Bearer ' + refreshtoken,
        }
      }
    )

  }

  getToken() {
    const client_id = "id-8351f41b-74f4-1d3c-bee4-9530ae7099d9";
    const client_secret = "secret-f4cb9b8c-f475-33e6-79ef-fd0d8943ca";
    return axios.post(
      //  BASE_TOKEN + "?grant_type=client_credentials&client_id=id-8351f41b-74f4-1d3c-bee4-9530ae7099d9&client_secret=secret-f4cb9b8c-f475-33e6-79ef-fd0d8943ca",
      BASE_TOKEN +
      "?grant_type=client_credentials&client_id=" +
      client_id +
      "&client_secret=" +
      client_secret,

      {},
      {
        'headers':
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      }
    )

  }

  getRefreshToken(refreshtoken) {
    const options = {
      method: 'POST',
      url: BASE_REFRESH_TOKEN,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + 'e67bdae231e6ff4339864cfda4ff9559d35a2c4bbe850936b9c15d3f85689'
      },
      data: { token:  }
    };
    return axios.request(options)
  }

}

export default new LoginService();