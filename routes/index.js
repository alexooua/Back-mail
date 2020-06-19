var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendMessage',async function(req, res, next) {
  "use strict";
  const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
     let testAccount = await nodemailer.createTestAccount();
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


    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'testalexoo@ukr.net', // sender address
      to: "a.zayets1986@gmail.com", // list of receivers
      subject: "Hellxxxo ✔", // Subject line
      text: "Hsdafasdfasxsaxdfsafd?", // plain text body
      html: "<b>54</b>", // html body
    });
     console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    res.send(22) ;
  }

  main().catch(console.error);

});

module.exports = router;
