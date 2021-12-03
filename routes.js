const express = require('express')

const item = require('./models/item')
const router = express.Router()

const default_login_name = process.env.LOGIN_NAME
const default_passsword = process.env.PASSWORD

router.get('/profile', (req, res) => {
    res.render('profile/index.ejs')
})

router.post('/auth', (req, res) => {
    let message = 'ログインできません'
    const login_name = req.body.login_name
    const password = req.body.password

    if (login_name == default_login_name
        && password == default_passsword) {
        message = 'ログインしました'
    }
    res.send(message)
})

router.get('/', (req, res) => {
    let data = {}
    data.title = 'トップページ'
    res.render('index.ejs',data)
})


router.get('/profile', (req, res) => {
    let user={
        id: 1,
        name: '畠中亮輔',
        birthplace:'横浜',
        hoppy:['旅行','グルメ','スポーツ'],
    }
    let data={}
    data.title='プロフィール'
    data.user=user
})

router.get('・/item/:id', (req, res) => {
    const id=req.params.id
    console.log(id)
    console.log(item)
    res.render('profile/show.ejs')
})

module.exports = router