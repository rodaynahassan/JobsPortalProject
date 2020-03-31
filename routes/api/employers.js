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

router.put('/updateAnEmployer/:id', async (req, res) => {
    try {
      const employer = await employer.findById(req.params.id)
      if (!employer) return res.status(404).send({ error: 'Employer does not exist' })
      const updatedEmployer= await Employer.findByIdAndUpdate({ _id: req.params.id },req.body)
      res.json({ updatedEmployer, msg: 'employer updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

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

