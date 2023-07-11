const express = require('express');
const router = express.Router();
const {getAllUsers,createUser,updateUser,deleteUser,singleUser} = require('../controller/user')

router.route('/users').get(getAllUsers)
router.route('/users').post(createUser)
router.route('/users/:id').put(updateUser)
router.route('/users/:id').delete(deleteUser)

router.route('/users/:id').get(singleUser)

// router.route('/:id').get(singleNote)

module.exports = router