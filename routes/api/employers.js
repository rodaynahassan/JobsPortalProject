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

