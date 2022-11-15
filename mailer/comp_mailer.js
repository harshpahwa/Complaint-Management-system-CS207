const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newComp = (complaint) => {
    console.log('inside mailer');
 
    nodeMailer.transporter.sendMail({
       from: 'b21100@students.iitmandi.ac.in',
       to: 'harsh100pahwa@gmail.com',
       subject: "New Complaint!",
       name: complaint.name,
       html: nodeMailer.renderTemplate('mail.ejs')
       
    }, 
    //info carries the info of the mail that has been sent
    (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}