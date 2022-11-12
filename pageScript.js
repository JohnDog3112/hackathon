function logInSignUp(type) {
    const usernameElm = document.getElementById("username");
    if(!checkWarnTextVal(usernameElm)) return;
    const passwordElm = document.getElementById("password");
    if(!checkWarnTextVal(passwordElm)) return;
    
    const username = usernameElm.value;
    const password = passwordElm.value;
    
    login(username, password);
    getGroupIBelongTo().then(group_id => {
        console.log(group_id);
    }).catch(err => {
        swap("loginScreen", "groupJoinScreen");
    });
}

function joinGroupButton() {
    const usernameElm = document.getElementById("groupID");
    if(!checkWarnTextVal(usernameElm)) return;
    const group_id = usernameElm.value;
    reset_swaps();
}