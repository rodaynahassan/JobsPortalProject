const express = require('express');
const router = express.Router();
const Country = require('../../models/country');
const countryController = require('../../controllers/countryController');

//testing
//Regarding the drop down list

//get all countries
router.get('/', async (req, res) => {
	const countries = await Country.find();
	res.json({ data: countries });
});
//get all countriesCities
router.get('/getByCountryName/:name', async (req, res) => {
	const name2 = req.params.name;
	const countryRequested = await countryController.search('name', name2);
	return res.json({ data: countryRequested.cities });
});

//create a new country
router.post('/', async (req, res) => {
	try {
		const newCountry = await Country.create(req.body);
		res.json({ msg: 'COuntry was created successfully', data: newCountry });
	} catch (error) {
		console.log(error);
	}
});
// router.put('/:id', async (req, res) => {
// 	try {
// 		const governorates = await Governorate.find();
// 		res.json({ msg: 'Governorate was created successfully', data: newGovernorate });
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

//delete a certain country
router.delete('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const deletedCountry = await Country.findByIdAndRemove(id);
		res.json({ msg: 'Country was deleted successfully', data: deletedCountry });
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;
