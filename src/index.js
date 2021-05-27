let state = {
  users: [],
};

// ROOT
const rootEl = document.querySelector('#root');

// Get Users from server
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
  render();
}
// HEADER SECTION
const headerEl = document.createElement('header');
headerEl.className = 'main-header';
const wrapperEl = document.createElement('div');
wrapperEl.classList = 'wrapper';

headerEl.append(wrapperEl);
rootEl.append(headerEl);

// Creating user card
const createUserCard = (user) => {
  const userCard = document.createElement('div');
  userCard.className = 'chip';

  const userAvatar = document.createElement('div');
  userAvatar.className = 'avatar-small';

  const userImg = document.createElement('img');
  userImg.src = user.avatar;
  userImg.setAttribute('alt', user.username);

  const userName = document.createElement('span');
  userName.innerText = user.username;

  userCard.append(userAvatar, userName);

  userAvatar.append(userImg);
  return userCard;
};

// Render user cards
const renderUserCard = (state) => {
  for (const user of state.users) {
    let userCardEl = createUserCard(user);
    wrapperEl.append(userCardEl);
  }
};

const render = () => {
  renderUserCard(state);
};

render();
