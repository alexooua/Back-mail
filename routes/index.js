const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  ssl:true,
  auth: {
    user: "testalexoo@ukr.net" , // generated ethereal user
    pass: "MB9A6uk5qm88wxMa", // generated ethereal password
  },
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendMessage', async  function(req, res, next) {
// async..await is not allowed in global scope, must use a wrapper
//   function main() {
    // send mail with defined transport object
  try{
    let info = await  transporter.sendMail({
      from: 'testalexoo@ukr.net', // sender address
      to: "a.zayets1986@gmail.com", // list of receivers
      subject: "44 ✔", // Subject line
      text: "Hsdafasdfasxsaxdfsafd?", // plain text body
      html: "<b>22</b>", // html body
    });
  }catch (e) {
    console.log(e)
  }finally {
    console.log("finish")
  }
   console.log(res)
  // }

  // main().catch(console.error);

});

module.exports = router;
