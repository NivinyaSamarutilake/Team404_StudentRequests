const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const User = require("../models/userModel");

const url = require('url');



exports.deleteUser = catchAsync(async (req, res, next) => {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query
    try{
        let user = await User.deleteOne({indexNo:query.id});
        res.status(200).json({
          status: "Success",
          data: {
            requests: user,
          },
        });
      
      }catch(err){
        res.status(400).json({
          status: "Failed to get user",
          data: {
            err,
          },
        });
      }
      
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
    try{
        let users = await User.find();
        res.status(200).json({
          status: "Success",
          data: {
            requests: users,
          },
        });
      
      }catch(err){
        res.status(400).json({
          status: "Failed to get users",
          data: {
            err,
          },
        });
      }
      
});

exports.getUser = catchAsync(async (req, res, next) => {
    res.send(req.query.id)
    // try{
    //     let user = await User.findOne({indexNo:req.query.id});
    //     res.status(200).json({
    //       status: "Success",
    //       data: {
    //         requests: user,
    //       },
    //       id: req.query.id
    //     });
      
    //   }catch(err){
    //     res.status(400).json({
    //       status: "Failed to get user",
    //       data: {
    //         err,
    //       },
    //     });
    //   }
      
});


exports.updatePassword = catchAsync(async (req, res, next) => {
    res.send(req.query.id)
    // try{
    //     const pw = req.body.password
    //     const cpw = req.body.passwordConfirm
    //     if (pw === cpw){
    //         var result = await Request.findByIdAndUpdate(req.query.id,{password:pw, passwordConfirm:cpw});
    //         res.status(200).json({
    //         status: "Success",
    //         data: {
    //             result: req.id,
    //         },
    //     });
    //     }            
    //     else{
    //         res.status(200).json({
    //             status: "Failure",
    //             message: "Passwords mismatch"
    //         })
    //     }
      
    //   }catch(err){
    //     res.status(400).json({
    //       status: "Failed to approve",
    //       data: {
    //         err,
    //       },
    //     });
    //   }
});
