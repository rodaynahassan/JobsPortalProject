const express = require('express');
const router = express.Router();
const UserApplication = require('../../models/userApplication');
const userApplicationController= require('../../controllers/userApplicationController');

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

//Create New User Application
router.post('/CreateANewUserApplication', async (req, res) => {
  const newUserApplication = await userApplication.create(req.body);
  return res.json({ data: newUserApplication });
});

//Update An job
// router.put('/updateAnjob/:id', async (req,res) => {
//     try {
//      const id = req.params.id
//      const job = await jobController.update('id',id,req.body);
//      if (!job) return res.json({ msg: 'ID not there' });
//    if (job.error) return res.status(400).send(job);
//    return res.json({ msg: 'job updated successfully', data: job });
//     }
//     catch(error) {

//         console.log(error)
//     }  
//  })

router.put('/updateAUserApplication/:id', async (req, res) => {
    try {
      const userApplication = await UserApplication.findById(req.params.id)
      if (!userApplication) return res.status(404).send({ error: 'user application does not exist' })
      const updatedUserApplication= await UserApplication.findByIdAndUpdate({ _id: req.params.id },req.body)
      res.json({ updatedUserApplication, msg: 'user application updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

 //Delete A User Application
 router.delete('deleteAUserApplication/:id', async (req,res) => {
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

