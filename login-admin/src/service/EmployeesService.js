import axios from 'axios';

const BASE_EMPLOYEE = "http://localhost:8080/o/dogoo/employee-rest-builder/v1.0/employees/";
const BASE_REFRESH_TOKEN = "http://localhost:8080/o/authz-rest/refreshtoken";

class EmployeesService {

  getEmployees(page, pageSize, access_token, refreshtoken) {
    console.log(refreshtoken);
    console.log(access_token);
    return axios.get(
      // BASE_EMPLOYEE + "?page="+ page +"&pageSize="+pageSize ,
      BASE_EMPLOYEE,
      {
        headers: {
          'dogoo-x-user-context-request': access_token,
          'Authorization': 'Bearer ' + refreshtoken,
        }
      }
    )

  }

}

export default new EmployeesService();