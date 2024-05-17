const mongoose = require('mongoose');

const connectdb = async()=>{

    await mongoose.connect("mongodb+srv://hanatalbi87:9HevDdTYNte7bn6v@cluster0.cucvqei.mongodb.net/",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connect to DB")

        
    })
    .catch((err) => console.log(err))
}

module.exports = connectdb;


// var mongoose = require('mongoose');

// const comment =async()=>{

// await mongoose.connect("mongodb+srv://hanatalbi87:9HevDdTYNte7bn6v@cluster0.cucvqei.mongodb.net/",{useNewUrlParser: true, useUnifiedTopology: true});

// var Comment = mongoose.model('Comment', {
//   commenter: String,
//   date: Date,
//   content: String
// });

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// function sendEmail(comment) {
//   var mailOptions = {
//     from: '',
//     to: '',
//     subject: 'New comment on your post',
//     text: `New comment by ${comment.commenter} on ${comment.date}:\n\n${comment.content}`
//   };

//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }

// function saveCommentAndSendEmail(comment) {
//   var newComment = new Comment({
//     commenter: comment.commenter,
//     date: comment.date,
//     content: comment.content
//   });

//   newComment.save(function(err) {
//     if (err) {
//       console.log('Error saving comment:', err);
//     } else {
//       console.log('Comment saved successfully.');
//       sendEmail(comment);
//     }
//   });
// }

// var sampleComment = {
//   commenter: 'John Doe',
//   date: new Date(),
//   content: 'This is a new comment.'
// };
// }
// saveCommentAndSendEmail(sampleComment);
