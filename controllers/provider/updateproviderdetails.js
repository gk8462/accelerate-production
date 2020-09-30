/**
 * @description Controller for updating user details.
 * @author Jithin Zacharia
 */

const providerModel = require('../../model/providerModel');


exports.updateProvider = (req, res) => {
    providerModel.find({name: req.body.name}, (err, users)=> {
        if(err) {
            res.status(400).json(err);
        } else if(!users.length) {
            res.status(400).json("User not found. Please register to continue");
        } else {
            providerModel.findOneAndUpdate({name: req.body.name}, {$set: {
               
                name: req.body.name,
                
            }}, (error, newUser) => {
                if(error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json("Profile successfully updated.");
                }
            })
        }
    })
}