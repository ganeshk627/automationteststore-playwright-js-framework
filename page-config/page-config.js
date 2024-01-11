
export const homepageConfig = {
    TITLE: 'A place to practice your automation skills!',
};


export const forgotpasswordConfig = {
    TITLE: 'Forgot Your Password?',
    URL: /.*account\/forgotten\/password/,
    RESET_PASSWORD_MESSAGE: 'Success: Password reset link has been sent to your e-mail address.',
}

export const forgotloginConfig = {
    TITLE: 'Forgot Your Login Name?',
    URL: /.*account\/forgotten\/loginname/,
}

export const loginConfig = {
    TITLE: 'Account Login',
    URL: /.*account\/login/,
}

export const dashboardConfig = {
    TITLE: 'My Account',
    URL: /.*account\/account/,
    WELCOME_MESSAGE: /Welcome back.*/,
}

export const productnavigationConfig = {
    URL: /product\/category/,
}

export const productbasketConfig = {
    URL: /checkout\/cart/,
}
 
export const checkoutconfirmationConfig = {
    URL: /checkout\/confirm/,
}




