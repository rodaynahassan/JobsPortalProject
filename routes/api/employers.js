const express = require('express');
const router = express.Router();
const Employer = require('../../models/employer');
const employerController= require('../../controllers/employerController');

// get all employers
router.get('/getAllemployers', async (req,res) => {
  const employers = await employerController.search();
  return res.json({ data: employers });
});

// get a certain employer by ID
router.get('/getByID/:id', async (req, res) =>{
    const employer = await employerController.search('id', req.params.id);
    return res.json({ data: employer })
}); 

//Create New employer
router.post('/CreateANewEmployer', async (req, res) => {
  const newEmployer = await employerController.create(req.body);
  return res.json({ data: newEmployer });
});

//Update An employer
router.put('/updateAnEmployer/:id', async (req, res) => {
    try {
      const updatedEmployer= await employerController.update('id',req.params.id,req.body)
      res.json({ updatedEmployer, msg: 'employer updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

  // Change email
router.post('/changeEmail/:id', async (req, res) => {
	const id = req.params.id;
	const employer = await employerController.search('id', id);
	const oldEmail = req.body.oldEmail;
	const newEmail = req.body.newEmail;
	const confirmEmail = req.body.confirmEmail;
  // const doesItMatch = await bcrypt.compareSync(oldPassword, user.password);
  if(oldEmail===employer.email)
  {
    if (newEmail === confirmEmail) {
			// const salt = await bcrypt.genSalt(10);
			// newPasswordEnc = await bcrypt.hash(newPassword, salt);
			employer.email = newEmail;
			await employer.save();
			return res.json({ msg: 'Email was updated successfully', data: employer });
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

// Change password
router.post('/changePassword/:id', async (req, res) => {
	const id = req.params.id;
	const employer = await employerController.search('id', id);
	const oldPassword = req.body.oldPassword;
	const newPassword = req.body.newPassword;
	const confirmPassword = req.body.confirmPassword;
  // const doesItMatch = await bcrypt.compareSync(oldPassword, user.password);
  if(oldPassword===employer.password)
  {
    if (newPassword === confirmPassword) {
			// const salt = await bcrypt.genSalt(10);
			// newPasswordEnc = await bcrypt.hash(newPassword, salt);
			employer.password = newPassword;
			await employer.save();
			return res.json({ msg: 'Password was updated successfully', data: employer });
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

 //Delete An employer
 router.delete('deleteAnEmployer/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedEmployer = await employerController.remove('id', req.params.id)
     const employers= await employerController.search()
     res.json({msg:'employer was deleted successfully',employers})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;

