let state = {
  users: [],
};

// const getUsers = () => {
// let users = [];

//   return users;
// };

// ROOT
const rootEl = document.querySelector('#root');

// HEADER SECTION

const headerEl = document.createElement('header');
headerEl.className = 'main-header';
const wrapperEl = document.createElement('div');
wrapperEl.className = 'wrapper';

const userCard = document.createElement('div');
userCard.className = 'chip';

const userAvatar = document.createElement('div');
userAvatar.className = 'avater-small';

const userImg = document.createElement('img');
// userImg.src = usersFromDb[0].avatar;
// userImg.setAttribute('alt', usersFromDb[0].username);

const userName = document.createElement('span');
// userName.innerText = usersFromDb[0].username;

{
  /* <header class='main-header'>
  <div class='wrapper'>
    <div class='chip active'>
      <div class='avatar-small'>
        <img
          src='https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg'
          alt='Salvador Dali'
        />
      </div>
      <span>Salvador Dali</span>
    </div>
    <div class='chip'>
      <div class='avatar-small'>
        <img
          src='https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg'
          alt='Picasso'
        />
      </div>
      <span>Picasso</span>
    </div>
    <div class='chip'>
      <div class='avatar-small'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU'
          alt='Van Gogh'
        />
      </div>
      <span>Van Gogh</span>
    </div>
  </div>
</header>; */
}
// appends
headerEl.append(wrapperEl);

wrapperEl.append(userCard);

userCard.append(userAvatar, userName);

userAvatar.append(userImg);

rootEl.append(headerEl);

// console.log(rootEl);
function getUsersFromDb() {
  return fetch('http://localhost:3000/users').then((response) =>
    response.json()
  );
  // .then((data) => {

  // for (const user of data) {
  //   console.log(user);
  //   userImg.src = user.avatar;
  //   userImg.setAttribute('alt', user.username);
  //   userName.innerText = user.username;

  //   console.log(userImg);
  // }
  // });
}
getUsersFromDb().then(function (data) {
  console.log(state);

  state = {
    ...state,
    users: [...data],
  };
  console.log(state);
});
console.log(state);
