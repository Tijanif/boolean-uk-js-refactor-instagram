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
// Render post section
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

//  Render feed section
const renderFeedSection = () => {
  const feedSectionEl = document.createElement('section');
  feedSectionEl.className = 'feed';

  const ulEl = document.createElement('ul');
  ulEl.className = 'stack';

  const liEl = document.createElement('li');
  liEl.setAttribute('class', 'post');

  const postImgEl = document.createElement('div');
  postImgEl.setAttribute('class', 'post--image');

  const imgEl = document.createElement('img');
  // imgEl.setAttribute('src', post.image.src);
  imgEl.setAttribute('alt', 'Salvador Dali');
  imgEl.src =
    'https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60';

  postImgEl.append(imgEl);

  // POST CONTENT SECTION
  const postContentEl = document.createElement('div');
  postContentEl.setAttribute('class', 'post--content');

  const h2El = document.createElement('h2');
  // h2El.innerText = post.title;

  const pEl = document.createElement('p');
  // pEl.innerText = post.content;

  postContentEl.append(h2El, pEl);

  // POST COMMENTS SECTION
  const postCommentsEl = document.createElement('div');
  postCommentsEl.setAttribute('class', 'post--comments');

  const h3El = document.createElement('h3');
  h3El.innerText = 'Comments';

  postCommentsEl.append(h3El);

  const formEl = document.createElement('form');
  formEl.setAttribute('id', 'create-comment-form');
  formEl.setAttribute('autocomplete', 'off');

  const commentLabelEl = document.createElement('label');
  commentLabelEl.setAttribute('for', 'comment');
  commentLabelEl.innerText = 'Add comment';

  const commentInputEl = document.createElement('input');
  commentInputEl.setAttribute('id', 'comment');
  commentInputEl.setAttribute('name', 'comment');
  commentInputEl.setAttribute('type', 'text');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerText = 'Comment';

  formEl.append(commentLabelEl, commentInputEl, submitBtn);

  liEl.append(postImgEl, postContentEl, postCommentsEl, formEl);
  ulEl.append(liEl);
  feedSectionEl.append(ulEl);

  return feedSectionEl;
};

console.log(renderFeedSection());
// Render main section
const renderMainSection = () => {
  const mainEl = document.createElement('main');
  mainEl.className = 'wrapper';

  let feedSection = renderFeedSection();
  let postSection = renderPostSection();
  mainEl.append(postSection, feedSection);
  return mainEl;
};
rootEl.append(renderMainSection());

const render = () => {
  renderUserCard(state);
};

render();
