import User from '../models/User';

class HouseController {
    async store(req, res) {
        console.log(req.body);
        console.log(req.file);
        
        return res.json(true);
    }
}

export default new HouseController();