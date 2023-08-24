const transporterGmail = require('../config/mailer')
require('dotenv').config()

const approvedPayment = async (name, email) => {
  const message = await transporterGmail.sendMail({
    from: '"Cava Group" <$nona.larson17@ethereal.email> ',
    to: email,
    subject: '✔ Purchase successfully registered ✔',
    text: `Thank you for your purchase, ${name}. We hope you enjoy your products.`,
    html: `<h1> 🌐 GreenLand ♻ </h1>
            <p>Thank you for your purchase, ${name}. We hope you enjoy your products.</p>`
  })
  console.log('Message sent: %s', message.messageId)
}

const declinedPayment = async (name, email) => {
  await transporterGmail.sendMail({
    from: `"Cava Group" <${process.env.OUTLOOK_USER}>`,
    to: email,
    subject: '✖ Purchase rejected ✖',
    text: `Ops! 😓, ${name}. It occurred failed to purchase`,
    html: `<h1> BE OR NOT BE</h1>
            <p>Thank you for your purchase, ${name}. We hope you enjoy your products.</p>`
  })
}

const pendingPayment = async (name, email) => {
  await transporterGmail.sendMail({
    from: `"Cava Group" <${process.env.OUTLOOK_USER}>`,
    to: email,
    subject: 'Purchase successfully registered',
    text: `Thank you for your purchase, ${name}. We hope you enjoy your products.`,
    html: `<h1> BE OR NOT BE</h1>
            <p>Thank you for your purchase, ${name}. We hope you enjoy your products.</p>`
  })
}

const newUserEmail = async (name, email) => {
  const htmlContent = `
    <h1>Welcome to our platform, ${name}!</h1>
    <p>Thank you for joining us. We are excited to have you as a new user.</p>
    <p>We hope you enjoy your experience with us.</p>
  `

  try {
    await transporterGmail.sendMail({
      from: 'Cava Group',
      to: email,
      subject: 'Welcome to Our Platform',
      html: htmlContent
    })
    return { success: true, message: 'Welcome email sent successfully' }
  } catch (error) {
    console.error('Error sending welcome email:', error)
    return { success: false, message: 'Welcome email could not be sent' }
  }
}

const loginUserSuccess = async (name, email) => {
  const loginTime = new Date().toLocaleTimeString()
  const htmlContent = `
    <h1>Welcome back to our platform, ${name}!</h1>
    <p>Thank you for logging in successfully.</p>
    <p>Your login was successful at ${loginTime}.</p>
    <p>We hope you have a wonderful experience with us.</p>
  `

  try {
    await transporterGmail.sendMail({
      from: '"Greenland Group"',
      to: email,
      subject: 'Successful Login to Our Platform',
      html: htmlContent
    })
    return { success: true, message: '' }
  } catch (error) {
    console.error('Error sending login success email:', error)
    return { success: false, message: 'login success email could not be sent' }
  }
}

module.exports = {
  approvedPayment,
  declinedPayment,
  pendingPayment,
  newUserEmail,
  loginUserSuccess
}
