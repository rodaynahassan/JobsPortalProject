const express = require('express');
const router = express.Router();
const UserApplication = require('../../models/userApplication');
const userApplicationController= require('../../controllers/userApplicationController');
const Application = require('../../models/application');
const applicationController= require('../../controllers/applicationController');
const Job = require('../../models/job');
const jobController= require('../../controllers/jobController');

// get all user applications
router.get('/getAllUserApplications', async (req,res) => {
  const userApplications = await userApplicationController.search();
  return res.json({ data: userApplications });
});

// get a certain user application by ID
router.get('/getByID/:id', async (req, res) =>{
    const userApplication = await userApplicationController.search('id', req.params.id);
    return res.json({ data: userApplication })
}); 

// get jobs that a certain user applied to userapplication by userID
router.get('/getByuserID/:userId', async (req, res) =>{
  const userApplications = await userApplicationController.search('userId', req.params.userId);
  return res.json({ data: userApplications })
});

// get an application
router.get('/getApplication/:id', async (req, res) =>{
  const userApplication = await userApplicationController.search('id', req.params.id);
  const applicationId= userApplication.applicationId
  const application = await applicationController.search('id', applicationId);
  return res.json({ userApplication: userApplication , application:application})
}); 

//Create New User Application
router.post('/CreateANewUserApplication/:userId/:applicationId', async (req, res) => {
  const newUserApplication = await userApplicationController.create(req.body,req.params.userId,req.params.applicationId);
  return res.json({ data: newUserApplication });
});

//Update A user application
router.put('/updateAUserApplication/:id', async (req, res) => {
    try {
      const updatedUserApplication= await userApplicationController.update('id',req.params.id,req.body)
      res.json({ updatedUserApplication, msg: 'user application updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

 //Delete A User Application
 router.delete('/deleteAUserApplication/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedUserApplication = await userApplicationController.remove('id', req.params.id)
     const userApplications= await userApplicationController.search()
     res.json({msg:'user application was deleted successfully',userApplications})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;

