'use server';
import AWS from 'aws-sdk';

// Set the region
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_REGION,
});

export async function sendLeadMail({ email, name, message, number, slug }) {
  var params = {
    Destination: {
      /* required */
      // CcAddresses: [
      //   "EMAIL_ADDRESS",
      //   /* more items */
      // ],
      ToAddresses: ['sales@avtechnosys.com'],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: 'UTF-8',
          Data: `<div>
        <h1>Hello from ${name}</h1>
        <p>Message: ${message}</p>
        <p>Mobile Number: ${number}</p>
        <p>From: ${slug}</p>
        <p>Email: ${email}</p>
        </div>`,
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'TEXT_FORMAT_BODY',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: '🚀 New lead alert! Time to make magic happen!',
      },
    },
    Source: 'new-lead@avtechnosys.com' /* required */,
    ReplyToAddresses: [
      'sales@avtechnosys.com',
      /* more items */
    ],
  };

  // Create the promise and SES service object
  var sendMail = new AWS.SES({ apiVersion: '2010-12-01' })
    .sendEmail(params)
    .promise();

  return sendMail;
}
