// const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customer/cartController')
const Menu = require('../../models/menu')


function initRoutes(app) {

    // app.get('/', homeController().index)
    app.get('/', async (req, res) => {
        const items = await Menu.find()
        return res.render('home', { items: items })
    }
    )

    app.get('/login', authController().login)

    app.get('/register', authController().register)

    app.get('/cart', cartController().index)

}


module.exports = initRoutes
