export interface User {
  first_name: string;
  last_name: string;
  email: string;
  id?: number;
}

class UserAPI {
  // ! Go to //https://retool.com/api-generator to generate a your own API endpoint
  private REQUEST_URL = 'https://api-generator.retool.com/fa3Vj1/users';

  async getAllUsers(): Promise<User[]> {
    const response = await fetch(this.REQUEST_URL); // ? Fetch defaults to GET
    const users = await response.json();
    console.log(users);
    return users;
  }

  async createUser(user: User) {
    const response = await fetch(this.REQUEST_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    return response;
  }


  async getUser(userId: number) {
    const response = await fetch(this.REQUEST_URL+'/'+userId, { // responce is the promise of json object fetch promise based method
      method: 'GET',
    });

    return response;
  }


  
  async update(user: User) { // data -> {col: value, ....}
    const response = await fetch(`${this.REQUEST_URL}/${user
      .id} `, {

    })
    return response;
  }

  async deleteUser(userId: number){
    const response = await fetch(this.REQUEST_URL+'/'+userId, {
      method: 'Delete',

    });
    return response
  }


}

const userAPI = new UserAPI();
export { userAPI };
