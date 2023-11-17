const User = require('../models/user.model');
const { validationResult } = require("express-validator");


const UserService = {
  
    signup: async (req, res) => {
        let createUser = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(500).json({status: false, Error: errors});
        } else {
            try {
              const newUser = new User(createUser);
              let savedUser = await newUser.save();
              console.log('savedUser: ', savedUser);
              if (savedUser) {
                res.status(200).json({status: true, data: savedUser })
              }
            } catch (e) {
              res.status(500).json({status: false, Error: e});
            }
        }
    },

    getMe: async (req, res) => {
      const userId = req.params.userId
      try {
        let userData = await User.findOne({_id: userId});
        if (userData) {
          res.status(200).json({status: true,data: userData })
        } else {
          res.status(200).json({status: true, data: {} })
        }
      } catch (e) {
        res.status(500).json({status: false, Error: e})
      }
    }
}

module.exports = UserService;