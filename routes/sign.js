const express = require('express')
const router = express.Router()

const Sign = require('../controller/user')
const authfb = require('../controller/loginFb')
const midle = require('../authentication/loginFb')

    router.post('/signup',Sign.signUp)
    router.post('/signin',Sign.signIn)
    router.post('/facebooklogin',midle,authfb.signin)

    
module.exports=router;