
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config({})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yoursemail',
    pass: process.env.NODEMAILER_PASSWORD
  }
});

export default transporter