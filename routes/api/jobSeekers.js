const express = require('express');
const router = express.Router();
const JobSeeker = require('../../models/jobSeeker');
const Cv = require('../../models/cv');
const jobSeekerController= require('../../controllers/jobSeekerController');
// const cvValidator = require('../validations/cvValidations')
const cvController= require('../../controllers/cvController');

// get all jobSeekers
router.get('/getAllJobSeekers', async (req,res) => {
  const jobSeekers = await jobSeekerController.search();
  return res.json({ data: jobSeekers });
});

// get a certain jobSeeker by ID
router.get('/getByID/:id', async (req, res) =>{
    const jobSeeker = await jobSeekerController.search('id', req.params.id);
    console.log(jobSeeker)
    return res.json({ data: jobSeeker })
}); 

//Create New jobSeeker
router.post('/CreateANewJobSeeker', async (req, res) => {
  const newJobSeeker = await jobSeekerController.create(req.body);
  return res.json({ data: newJobSeeker });
});

//Update A Job Seeker
router.put('/updateAJobSeeker/:id', async (req, res) => {
    try {
      const updatedJobSeeker= await jobSeekerController.update('id',req.params.id,req.body)
      const cv = await cvController.search('jobSeekerId', updatedJobSeeker._id);
      const temp=updatedJobSeeker.address + "-" + updatedJobSeeker.city + "-" + updatedJobSeeker.country+ ".";
      cv[0].address=temp
      await cv[0].save();
      console.log(cv)
      res.json({ updatedJobSeeker, msg: 'JobSeeker updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

// Change password
router.post('/changePassword/:id', async (req, res) => {
	const id = req.params.id;
	const jobSeeker = await jobSeekerController.search('id', id);
	const oldPassword = req.body.oldPassword;
	const newPassword = req.body.newPassword;
	const confirmPassword = req.body.confirmPassword;
  // const doesItMatch = await bcrypt.compareSync(oldPassword, user.password);
  if(oldPassword===jobSeeker.password)
  {
    if (newPassword === confirmPassword) {
			// const salt = await bcrypt.genSalt(10);
			// newPasswordEnc = await bcrypt.hash(newPassword, salt);
			jobSeeker.password = newPassword;
			await jobSeeker.save();
			return res.json({ msg: 'Password was updated successfully', data: jobSeeker });
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
	const jobSeeker = await jobSeekerController.search('id', id);
	const oldEmail = req.body.oldEmail;
	const newEmail = req.body.newEmail;
	const confirmEmail = req.body.confirmEmail;
  // const doesItMatch = await bcrypt.compareSync(oldPassword, user.password);
  if(oldEmail===jobSeeker.email)
  {
    if (newEmail === confirmEmail) {
			// const salt = await bcrypt.genSalt(10);
			// newPasswordEnc = await bcrypt.hash(newPassword, salt);
			jobSeeker.email = newEmail;
			await jobSeeker.save();
			return res.json({ msg: 'Email was updated successfully', data: jobSeeker });
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


 //Delete An JobSeeker
 router.delete('deleteAnJobSeeker/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedJobSeeker = await jobSeekerController.remove('id', req.params.id)
     const jobSeekers= await jobSeekerController.search()
     res.json({msg:'jobSeeker was deleted successfully',jobSeekers})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;
