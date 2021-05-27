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
const renderPostSection = () => {
  const sectionEl = document.createElement('section');
  sectionEl.className = 'create-post-section';

  const formEl = document.createElement('form');
  formEl.setAttribute('id', 'create-post-form', 'autocomplete', 'off');

  const h2El = document.createElement('h2');
  h2El.innerText = 'Create a post';

  const imageLabel = document.createElement('label');
  imageLabel.setAttribute('for', 'image');
  imageLabel.innerText = 'Image';

  const imageInput = document.createElement('input');
  imageInput.setAttribute('id', 'image', 'name', 'image');

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.innerText = 'Title';

  const titleInput = document.createElement('input');
  titleInput.setAttribute('id', 'title', 'name', 'title');

  const textareaEl = document.createElement('textarea');
  textareaEl.setAttribute('id', 'content', 'name', 'content');
  textareaEl.setAttribute('row', '2', 'columns', '30');

  const divBtns = document.createElement('div');
  divBtns.className = 'action-btns';
  const buttonPreview = document.createElement('button');
  buttonPreview.setAttribute('id', 'preview-btn', 'type', 'button');
  buttonPreview.innerText = 'Preview';
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerText = 'Post';

  divBtns.append(buttonPreview, submitBtn);
  formEl.append(
    h2El,
    imageLabel,
    imageInput,
    titleLabel,
    titleInput,
    textareaEl,
    divBtns
  );

  sectionEl.append(formEl);

  return sectionEl;
};
const renderMainSection = () => {
  const mainEl = document.createElement('main');
  mainEl.className = 'wrapper';

  let postSection = renderPostSection();
  mainEl.append(postSection);
  return mainEl;
};
rootEl.append(renderMainSection());

const render = () => {
  renderUserCard(state);
};

render();
