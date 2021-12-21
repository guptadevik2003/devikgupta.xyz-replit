module.exports.isAuth = (req, res, next) => {
    if (req.session.isAuth) {
        next()
    } else {
        res.redirect('/login?redirectmsg=need_to_login_first')
    }
}

module.exports.isNotAuth = (req, res, next) => {
    if (req.session.isAuth) {
        res.redirect('/dashboard?redirectmsg=already_logged_in')
    } else {
        next()
    }
}
