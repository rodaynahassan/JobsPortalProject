const express = require('express');
const router = express.Router();
const JobSeeker = require('../../models/jobSeeker');
const jobSeekerController= require('../../controllers/jobSeekerController');

// get all jobSeekers
router.get('/getAllJobSeekers', async (req,res) => {
  const jobSeekers = await jobSeekerController.search();
  return res.json({ data: jobSeekers });
});

// get a certain jobSeeker by ID
router.get('/getByID/:id', async (req, res) =>{
    const jobSeeker = await jobSeekerController.search('id', req.params.id);
    return res.json({ data: jobSeeker })
}); 

//Create New jobSeeker
router.post('/CreateANewJobSeeker', async (req, res) => {
  const newJobSeeker = await jobSeekerController.create(req.body);
  return res.json({ data: newJobSeeker });
});

//Update An employer
// router.put('/updateAnemployer/:id', async (req,res) => {
//     try {
//      const id = req.params.id
//      const employer = await employerController.update('id',id,req.body);
//      if (!employer) return res.json({ msg: 'ID not there' });
//    if (employer.error) return res.status(400).send(employer);
//    return res.json({ msg: 'employer updated successfully', data: employer });
//     }
//     catch(error) {

//         console.log(error)
//     }  
//  })

router.put('/updateAnJobSeeker/:id', async (req, res) => {
    try {
      const jobSeeker = await JobSeeker.findById(req.params.id)
      if (!jobSeeker) return res.status(404).send({ error: 'JobSeeker does not exist' })
      const updatedJobSeeker= await JobSeeker.findByIdAndUpdate({ _id: req.params.id },req.body)
      res.json({ updatedJobSeeker, msg: 'JobSeeker updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

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
