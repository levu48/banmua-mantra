
const setupLoginFormStates = function() {
    return  {
        SIGN_IN: Symbol('SIGN_IN'),
        SIGN_UP: Symbol('SIGN_UP'),
        PASSWORD_CHANGE: Symbol('PASSWORD_CHANGE'),
        PASSWORD_RESET: Symbol('PASSWORD_RESET')
    }
};

export default setupLoginFormStates;