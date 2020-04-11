const express = require('express');
const router = express.Router();
const CareerAdvisor = require('../../models/careerAdvisor');
const careerAdvisorController= require('../../controllers/careerAdvisorController');

// get all career advisors
router.get('/getAllCareerAdvisors', async (req,res) => {
  const careerAdvisors= await careerAdvisorController.search();
  return res.json({ data: careerAdvisors });
});

// get a certain Career Advisor by ID
router.get('/getByID/:id', async (req, res) =>{
    const careerAdvisor = await careerAdvisorsController.search('id', req.params.id);
    return res.json({ data: careerAdvisor })
}); 

//Create New Cv
router.post('/CreateANewCareerAdvisor', async (req, res) => {
  const newCareerAdvisor = await careerAdvisorController.create(req.body);
  return res.json({ data: newCareerAdvisor });
});

//Update A Cv
router.put('/updateACareerAdvisor/:id', async (req, res) => {
    try {
      const updatedCareerAdvisor= await careerAdvisorController.update('id',req.params.id,req.body)
      res.json({ updatedCareerAdvisor, msg: 'Career Advisor updated successfully' })
    } catch (error) {
      console.log(error)
    }
  })

 //Delete A Cv
 router.delete('deleteACareerAdvisor/:id', async (req,res) => {
    try {
     const deletedCareerAdvisor = await careerAdvisorController.remove('id', req.params.id)
     const careerAdvisors= await careerAdvisorController.search()
     res.json({msg:'Career Advisor was deleted successfully',careerAdvisors})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router;

