const { ModelName } = require('../models'); // Import the relevant model

// create 
const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({
        user,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

// read
const getAllUsers = async (req, res) => {
    try {

    }
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
}


// update

// delete
