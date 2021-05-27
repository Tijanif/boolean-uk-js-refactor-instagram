let state = {
  users: [],
};

// ROOT
const rootEl = document.querySelector('#root');

// HEADER SECTION

const headerEl = document.createElement('header');
headerEl.className = 'main-header';

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

const getUsersFromDb = () => {
  return fetch('http://localhost:3000/users').then((response) =>
    response.json()
  );
};
getUsersFromDb().then(function (data) {
  // state = {
  //   ...state,
  //   users: [...data],
  // };
  setState(data);
});

function setState(newState) {
  state = { ...state, users: [...newState] };
  renderUserCard(state);
}
const createUserCard = (user) => {
  const wrapperEl = document.createElement('div');
  wrapperEl.className = 'wrapper';

  const userCard = document.createElement('div');
  userCard.className = 'chip';

  const userAvatar = document.createElement('div');
  userAvatar.className = 'avater-small';

  const userImg = document.createElement('img');
  userImg.src = user.avatar;
  userImg.setAttribute('alt', user.username);

  const userName = document.createElement('span');
  userName.innerText = user.username;

  wrapperEl.append(userCard);

  userCard.append(userAvatar, userName);

  userAvatar.append(userImg);
  return wrapperEl;
};

const renderUserCard = (state) => {
  for (const user of state.users) {
    let userCardEl = createUserCard(user);
    headerEl.append(userCardEl);
  }
};

rootEl.append(headerEl);

// const render = () => {
//   rootEl.innerHTML = '';

// renderUserCard(state);

// };

// render();
