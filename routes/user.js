const express = require('express')
const router = express.Router()
const { body } = require("express-validator");
const UserService = require('../services/user.service')

router.post('/register', 
  body("firstName")
  .trim()
  .notEmpty()
  .withMessage("First name is required"),
  body("lastName")
  .trim()
  .notEmpty()
  .withMessage("Last name is required"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email address is required")
    .isEmail()
    .withMessage("Enter a valid email addres"),
  body("country")
    .trim()
    .notEmpty()
    .withMessage("Counrty is required"),
  body("state")
    .trim()
    .notEmpty()
    .withMessage("State is required"),
  body("city")
    .trim()
    .notEmpty()
    .withMessage("City is required"),
  body("dob")
    .trim()
    .notEmpty()
    .withMessage("Birth of Date is required"),
    UserService.signup
)

router.get('/profile/:userId', UserService.getMe)

module.exports = router;