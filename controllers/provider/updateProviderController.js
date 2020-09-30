
const providerModel = require('../../model/providerModel');

exports.updateProvider = (req, res) => {
    providerModel.find({partnerId: req.body.partnerId}, (err, providers)=> {
        if(err) {
            res.status(400).json(err);
        } else if(!providers.length) {
            res.status(400).json("Provider not found. Please register to continue");
        } else {
            providerModel.findOneAndUpdate({partnerId: req.body.partnerId}, {$set: {
                email: req.body.email,
                fullName: req.body.fullName,
                mobileNumber: req.body.mobileNumber,
                Fees: req.body.Fees,
                City: req.body.City
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