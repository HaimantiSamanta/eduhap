const Users = require('../models/registration');
const Otps = require('../models/loginViaOtp');


exports.registration = async (req, res) => {
    if (!req.body.fullname || !req.body.email || !req.body.state || !req.body.bio || !req.body.standard || !req.body.board || !req.body.mobilenumber) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const user = new Users({
        name: req.body.fullname,
        email: req.body.email,
        state: req.body.state,
        bio: req.body.bio ,
        standard:req.body.standard,
        board:req.body.board,
        mobilenumber:req.body.mobilenumber  
    });
    
    // if(regverify===0 && ){
    // }



    await user.save().then(data => {
        res.send({
            message:"User registration successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

exports.loginViaOtp = async (req, res) => { 
    
    const {mobilenumber} = req.body;
    // if (!req.body.mobilenumber){
    //     res.status(400).send({ message: "Mobile Number can not be empty!" });
    // }

    var otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);

    const x = new Otps({
        mobilenumber:req.body.mobilenumber,
        otp:otp,
        otpverify : '0'

    });   

    await x.save().then(data => {
        res.send({
            message:"otp send successfully!!",
            x:data

        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
 };

 exports.otpVerify = async (req, res) => {
   // try{ 
        const {mobilenumber,otp} = req.body;
        Otps.find({
            mobilenumber,otp
        })
            .then(response => {
                if (response.length == 0) {
                    //  Otps.updateOne(
                    //     { mobilenumber, otp },
                    //     { otpverify: '0' }
                    //     ).exec();
                    return res.json({
                        status: 'False',
                        message: 'Otp mismatched'
                    });
                }
                else {
                                  Otps.updateOne(
                                  //  { mobilenumber, otp },
                                    { otpverify: '1' }
                                ).exec();
                                return res.json({
                                    status: 'True',
                                    message: 'Otp verified successfully'
                                });
                }
                // res.status(200).json(
                //     {
                //         isAuthenticated,
                //         message,
                //         Otps: response
                //     })
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })

 }
        // if(!mobilenumber || !otp){
        //     return res.status(406).json({Status:false,message:'mobilenumber and otp required fields'})
        // } 
        //     else{
        //             // const data = await otpmaster.findOne({mobilenumber})
        //             //     if(data){
        //             //           return data;
        //             //       }else{ return false;
        //             //     }



                //  let otpresult = await Otps.find({ mobilenumber }).exec();
                //      if (otpresult.length != 0) {
                //         let OtpRes = await Otps.find({ mobilenumber:mobilenumber, otp:otp, otpverify: "" }).exec();
                //         if (otp !== otp){
                //             let updateRes = await Otps.updateOne(
                //                 { mobilenumber, otp },
                //                 { otpverify: '0' }
                //             ).exec();
                //          return res.json({ status: 'False', message: 'Otp Value is mismatched' });
                         
                //                }
                //            // let data = `${mobilenumber}.${otp}`
                //             else{
                //             if(mobilenumber===mobilenumber && otp===otp){
                //             // return res.json({ status: 'False', message: 'Otp Value is matched' });
                //                  updateRes = await Otps.updateOne(
                //                     { mobilenumber, otp },
                //                     { otpverify: '1' }
                //                 ).exec();
                //                 return res.json({
                //                     status: 'True',
                //                     message: 'Otp verified successfully'
                //                 });
                //             }
                //             }
                //      }
 
                // }


    // }catch(err){
    // console.log(err);
    // return res.status(400).json({Status:'Error',message:'somthing went wrong'})
    // }

 //}

 