const fetch = require("node-fetch");

var listData = [];
async function getUsers() {
  let res = await fetch("https://api.github.com/users");
  let data = await res.json();
   for (const user of data) {
    fetch(`https://api.github.com/users/${user.login}`)
      .then((resName) => {
        return resName.json();
      })
      .then(async (fullData) => {
        const login = await fullData.login;
        const name = await fullData.name;
        listData.push({ login: login, name: name });
        if (listData.length == data.length) console.log(listData)
      });
  }
}

getUsers()
