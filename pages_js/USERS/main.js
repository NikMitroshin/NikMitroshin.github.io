/* 
    Взята free rest API https://reqres.in/   
    Работа с CRUD (Create, Read, Update, Delete)
    Получение данных о пользователях, распарсивание и отображение на странице.

    Так как API бесплатная, нет возможности удалить/изменить данные, то все действия по отображению сделаны фейково. 
    Во вкладке network можно наблюдать корректность работы

*/
const requstUrl = 'https://reqres.in/api/users',
    blockUsers = document.querySelector(".block-users");
let usersList =[],
    btnDelete,
    btnUpdate, 
    usersUpdated, 
    btnUpdateSubmit,
    maxId = 1, 
    currentUpdated,
    btnCreate = document.querySelector(".btn-new-user"); 

const getUsers = (url, index) => { 
    return fetch(url + index)
        .then(resp => resp.json())
        .then(json => {
            usersList = usersList.concat(json.data);
        });
};
const createTemplate = user => { 
    return template = 
    `
    <div class="box-user-update" data-idUser="${user.id}">
        <div class="user-update" data-idForm="${user.id}">
            <form class="update-form">
                <div class="form-input">
                    <input type="text" data-updateAvatar="${user.id}"  id="updateUserAvatar" placeholder="Avatar url" class="form-input-update__item">
                </div>
                <div class="form-input">
                    <input type="text" data-updateFirstName="${user.id}" id="updateUserFirstName" placeholder="First name" class="form-input-update__item">
                </div>
                <div class="form-input">
                    <input type="text" data-updateLastName="${user.id}" id="updateUserLastName" placeholder="Last name" class="form-input-update__item">
                </div>
                <div class="form-input">
                    <input type="text" data-updateMail="${user.id}" id="updateUserMail" placeholder="Mail" class="form-input-update__item">
                </div>
                <button class="user-update-submit">Обновить</button>
                <button class="user-update-submit-close" type="button">Закрыть</button>
            </form>
        </div>
        <div class="box-user" data-id="${user.id}">
            <img src="${user.avatar}" alt="" class="user__avatar">
            <button class="user__delete"><i class="fas fa-trash-alt"></i></button>
            <button class="user__update"><i class="fas fa-user-edit"></i></button>
            <div class="user__id">${user.id}</div>
            <div class="user__name">${user.first_name} ${user.last_name}</div>
            <div class="user__mail">${user.email}</div>
        </div>
    </div>
    `
};
const checkAvatarUrl = (url) => {
    if (!(/[https://]/.test(url))) {
        url = 'https://kiittnp.in/ea19b38134d463acc8c7b66744a481847ab4b/assets/img/user.png';
        alert('Введена некорректная ссылка на фото профиля');
    }
    return url
}
const deleteUserFromHtml = id => { 
    let boxUsers = document.querySelector(`[data-idUser='${id}']`);
    boxUsers.parentNode.removeChild(boxUsers);
};
const clickOnDeleteButton = e => {
    let idUserDel = e.target.parentNode.dataset.id;
    deleteUser(requstUrl, idUserDel);
};
const clickOnUpdateButton = e => {
    hideUpdatingUser();
    currentUpdated = e.target.parentNode.dataset.id;
    usersUpdated = document.querySelector(`[data-idForm='${currentUpdated}']`);
    usersUpdated.classList.add('show');
};
const clickOnUpdateSubmitButton = e => {
    e.preventDefault();
    hideUpdatingUser();
    updateUser(requstUrl, currentUpdated);
};
const hideUpdatingUser = () => {
    let hideUpdate = document.querySelector('.show');
    if (hideUpdate) hideUpdate.classList.remove('show');
};
const makeBtns = () => { 

    btnDelete = document.querySelectorAll('.user__delete');
    btnDelete.forEach(btn => btn.removeEventListener('click', clickOnDeleteButton));
    btnDelete.forEach(btn => btn.addEventListener('click', clickOnDeleteButton));

    btnUpdate = document.querySelectorAll('.user__update');
    btnUpdate.forEach(btn => btn.removeEventListener('click', clickOnUpdateButton));
    btnUpdate.forEach(btn => btn.addEventListener('click', clickOnUpdateButton));

    btnUpdateSubmit = document.querySelectorAll(".user-update-submit");
    btnUpdateSubmit.forEach(btn => btn.removeEventListener('click', clickOnUpdateSubmitButton));
    btnUpdateSubmit.forEach(btn => btn.addEventListener('click', clickOnUpdateSubmitButton));

    btnUpdateSubmitClose = document.querySelectorAll(".user-update-submit-close");
    btnUpdateSubmitClose.forEach(btn => btn.removeEventListener('click', hideUpdatingUser));
    btnUpdateSubmitClose.forEach(btn => btn.addEventListener('click', hideUpdatingUser));
};

async function getUsersList(){ 
    await getUsers(requstUrl,'?page=1');
    await getUsers(requstUrl,'?page=2');
    usersList.forEach(el => { 
        blockUsers.innerHTML += createTemplate(el);
        maxId++;
    });
    makeBtns();
};
getUsersList(); 
const deleteUser = (url, id) => { 
    fetch(url + '/' + id, {
        method: 'DELETE'
    });
    deleteUserFromHtml(id);
};
const createUser = url => {
    let inputAvatar = checkAvatarUrl(document.getElementById("newUserAvatar").value),
        inputUserId = maxId,
        inputFirstName = document.getElementById("newUserFirstName").value,
        inputLastName = document.getElementById("newUserLastName").value,
        inputMail = document.getElementById("newUserMail").value;

    let createUserObj = {
        id: inputUserId,
        email: inputMail,
        first_name: inputFirstName,
        last_name: inputLastName,
        avatar: inputAvatar
    };
    fetch(url,{ 
        method: 'POST',
        body: JSON.stringify(createUserObj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json());
    blockUsers.innerHTML += createTemplate(createUserObj);
    maxId++;
    makeBtns();
};
btnCreate.addEventListener('click', e => { 
    e.preventDefault();
    createUser(requstUrl);
});

const updateUser = (url, idUser) => {
    let inputAvatarUpdate = checkAvatarUrl(document.querySelector(`[data-updateAvatar='${idUser}']`).value),  
        inputFirstNameUpdate = document.querySelector(`[data-updateFirstName='${idUser}']`).value,
        inputLastNameUpdate = document.querySelector(`[data-updateLastName='${idUser}']`).value,
        inputMailUpdate = document.querySelector(`[data-updateMail='${idUser}']`).value;

    fetch(url + "/" + idUser,{
        method: 'PUT',
        body: JSON.stringify({
            id: idUser,
            email: inputMailUpdate,
            first_name: inputFirstNameUpdate,
            last_name: inputLastNameUpdate,
            avatar: inputAvatarUpdate
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json());
    let createUserObjUpdate = {
        id: idUser,
        email: inputMailUpdate,
        first_name: inputFirstNameUpdate,
        last_name: inputLastNameUpdate,
        avatar: inputAvatarUpdate,
    };
    updateUserInHTML(idUser, createUserObjUpdate);
    makeBtns();
}
const updateUserInHTML = (id, update) =>{
    let updatingPost = document.querySelector(`[data-id='${id}']`);
    updatingPost.innerHTML = `
    <img src="${update.avatar}" alt="" class="user__avatar">
    <button class="user__delete">X</button>
    <button class="user__update">O</button>
    <div class="user__id">${update.id}</div>
    <div class="user__name">${update.first_name} ${update.last_name}</div>
    <div class="user__mail">${update.email}</div>
    `
};

