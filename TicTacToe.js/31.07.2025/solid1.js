class User {
  constructor(name,email) {
    this.name = name;
    this.email = email;
  }

  getData() {
    // simulate fetching user data
    return { name : this.name,
      email :this.email
    };
  }
}
class UserProfileRender {
  constructor(user) {
    this.user = user;
  }
  render() {
     const { name, email } = this.user.getData();

    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${name}</h2>
      <p>${email}</p>
    `;
    document.body.appendChild(div);
  }
}

 