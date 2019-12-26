const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'syamjalla@gmail.com',
        subject: 'Thank you for joining',
        text: `Welcome to the app, ${name}. Let me know how you get along`
    })
}

const sendCancellationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'syamjalla@gmail.com',
        subject: 'Very sad to see you leave',
        text: `Goodbye ${name}. I hope to see you sometime soon`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancellationMail
}
