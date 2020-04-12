class LoginBoardController {
    constructor() {

    }
}

export default {
    url: '/login',
    controller: LoginBoardController,
    template: require('./loginBoard.html'),
    controllerAs: '$ctrl'
}