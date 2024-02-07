const mailjet = require ('node-mailjet').connect(process.env('MAILJET_API_KEY'), process.env('MAILJET_SECRET_KEY'));

let sendEmail = function(emailData) {
    return mailjet.post('send', {'version': 'v3.1'}).request({
        'Messages':[
            {
                'From': {
                    'Email': 'hello@funtimesoftplay.co.uk',
                    'Name': 'Fun times'
                },
                'To': [
                    {
                        'Email': emailData.toEmail,
                        'Name': emailData.toName
                    }
                ],
                'Subject': emailData.subject,
                'TextPart': emailData.message,
                'HTMLPart': '<h3>' + emailData.message + '</h3>'
            }
        ]
    })
}

module.exports = sendEmail;