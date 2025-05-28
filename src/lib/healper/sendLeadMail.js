import emailjs from '@emailjs/browser';
import { ZContactUser } from './../../ZTypes/contact';
export const sendEmail = async ({
  setLoading,
  setShowMessage,
  setErrorMessage,
  formDetails,
  setFormDetails,
}) => {
  setLoading(true);
  const msg = ZContactUser.safeParse(formDetails);

  if (!msg.success) {
    setErrorMessage(msg.error.issues[0].message);
    setLoading(false);
    return;
  }

  const templatePhrase = {
    from_name: formDetails.name,
    from_email: formDetails.email,
    from_number: formDetails.number,
    from_company: '',
    message: formDetails.number,
  };

  // console.log(templatePhrase);
  await emailjs
    .send('service_tz902dr', 'template_bjzmbng', templatePhrase, {
      publicKey: '7e3pjCOJgYjLD4Mu-',
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        // @ts-ignore
        e.target.reset();
        setLoading(false);
      },
      (error) => {
        console.log('FAILED...', error);
        setErrorMessage('Something went wrong. Please try again.');
      }
    );

  setShowMessage('Successfully Sent');
  setErrorMessage('');
  setFormDetails({
    name: '',
    email: '',
    message: '',
    number: '+91',
  });
  setLoading(false);
};
