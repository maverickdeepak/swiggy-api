import { Router } from "express";

class UserRoutes {
    public router: Router;

    constructor () {
        // initialize the constructor for router and getRoutes
        this.router = Router();
        this.getRoutes();
    }

    getRoutes() {
        this.router.get('/login', (req, res) => {
            const data = {id:1, name:'Swiggy', email: 'swiggy@gmail.com'};
            res.json({
                message: 'success',
                data: data
            })
        });
        
        this.router.get('/login/test', (req, res, next) => {
          next()
          res.send('test api')
        })
    }
}

export default new UserRoutes().router