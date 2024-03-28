const sanitizeUserInput = (user)=>{
    return {
        fullName: user.fullName,
        email: user.email.trim().toLowerCase(),
        password: user.password.trim(),
        phone: user.phone.trim()
    }
}

module.exports = sanitizeUserInput