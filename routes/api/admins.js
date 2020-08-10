const express = require('express');
const router = express.Router();
const Admin = require('../../models/admin');
const adminController = require('../../controllers/adminController');


//get all admins
router.get('/getAllAdmins', async (req, res) => {
	const admins = await Admin.find();
	res.json({ data: admins });
});

// get a certain admin by ID
router.get('/getByID/:id', async (req, res) =>{
    const admin = await adminController.search('id', req.params.id);
    return res.json({ data: admin })
});


//create a new country
router.post('/CreateANewAdmin', async (req, res) => {
	try {
		const newAdmin = await Admin.create(req.body);
		res.json({ msg: 'Admin was created successfully', data: newAdmin });
	} catch (error) {
		console.log(error);
	}
});

// Change password
router.post('/changePassword/:id', async (req, res) => {
	const id = req.params.id;
	const admin = await adminController.search('id', id);
	const oldPassword = req.body.oldPassword;
	const newPassword = req.body.newPassword;
	const confirmPassword = req.body.confirmPassword;
  // const doesItMatch = await bcrypt.compareSync(oldPassword, user.password);
  if(oldPassword===admin.password)
  {
    if (newPassword === confirmPassword) {
			// const salt = await bcrypt.genSalt(10);
			// newPasswordEnc = await bcrypt.hash(newPassword, salt);
			admin.password = newPassword;
			await admin.save();
			return res.json({ msg: 'Password was updated successfully', data: admin });
		} else return res.json({ msg: 'The passwords do not match!' });
  }
	// if (doesItMatch) {
	// 	if (newPassword === confirmPassword) {
	// 		const salt = await bcrypt.genSalt(10);
	// 		newPasswordEnc = await bcrypt.hash(newPassword, salt);
	// 		user.password = newPasswordEnc;
	// 		await user.save();
	// 		return res.json({ msg: 'Password was updated successfully', data: user });
	// 	} else return res.json({ msg: 'The passwords do not match!' });
  // } 
  else {
		return res.json({ msg: 'The old password does not match with your current password! Please check it again' });
	}
});

// Change email
router.post('/changeEmail/:id', async (req, res) => {
	const id = req.params.id;
	const admin = await adminController.search('id', id);
	const oldEmail = req.body.oldEmail;
	const newEmail = req.body.newEmail;
	const confirmEmail = req.body.confirmEmail;
  // const doesItMatch = await bcrypt.compareSync(oldPassword, user.password);
  if(oldEmail===admin.email)
  {
    if (newEmail === confirmEmail) {
			// const salt = await bcrypt.genSalt(10);
			// newPasswordEnc = await bcrypt.hash(newPassword, salt);
			admin.email = newEmail;
			await admin.save();
			return res.json({ msg: 'Email was updated successfully', data: admin });
		} else return res.json({ msg: 'The emails do not match!' });
  }
	// if (doesItMatch) {
	// 	if (newPassword === confirmPassword) {
	// 		const salt = await bcrypt.genSalt(10);
	// 		newPasswordEnc = await bcrypt.hash(newPassword, salt);
	// 		user.password = newPasswordEnc;
	// 		await user.save();
	// 		return res.json({ msg: 'Password was updated successfully', data: user });
	// 	} else return res.json({ msg: 'The passwords do not match!' });
  // } 
  else {
		return res.json({ msg: 'The old email does not match with your current email! Please check it again' });
	}
});


//update an admin
router.put('/updateAnAdmin/:id', async (req, res) => {
    try {
      const updatedAdmin= await adminController.update('id',req.params.id,req.body)
      res.json({ updatedAdmin, msg: 'admin updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })


//delete a certain admin
router.delete('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const deletedAdmin = await Admin.findByIdAndRemove(id);
		res.json({ msg: 'Admin was deleted successfully', data: deletedCountry });
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;
