let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new Ui();
searchBtn.addEventListener('click', (e) => {
  let userText = searchUser.value;
  if(userText !== '') {
    //fetch 
    fetch(`https://api.github.com/users/${userText}`)
      .then(res => res.json())
      .then(data => {
        if(data.message == 'Not Found'){
          //show alert
        }else{
          //show profile
          ui.showProfile(data)
        }
      })
      .catch(error => alert(error))
  }
  searchUser.value = "";
})