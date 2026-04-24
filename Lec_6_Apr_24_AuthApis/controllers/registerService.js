import { User } from "../modals/User.js"
import bcrypt from 'bcrypt'
import jwt, { decode } from 'jsonwebtoken'
import transporter from "../utils/sendEmail.js"

export const registerService = async (req, res) => {
    try {
        //registration logic
        const { username, email, password } = req.body
        // check already registered
        const user = await User.findOne({ email })
        if (user) {
            return res.send('already registered, please login.')
        }
        const hashedPass = await bcrypt.hash(password, 10)
        const u = await User.insertOne({ username, email, password: hashedPass })
        res.status(201).json({ success: true, message: "registration success", u })

    } catch (error) {
        console.log('error in registerService', error.message)
    }
}
export const loginService = async (req, res) => {
    try {
        //registration logic
        const { email, password } = req.body
        // check if registered
        const user = await User.findOne({ email })
        if (!user) {
            return res.send('register first.')
        }
        //check password
        const result = await bcrypt.compare(password, user.password) // boolean
        if (!result) {
            return res.status(401).send('invalid creds.')
        }
        // token generate
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.status(200).json({ success: true, user, token })

    } catch (error) {
        console.log('error in registerService', error.message)
    }
}
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body
        // check already registered
        const user = await User.findOne({ email })
        if (!user) {
            return res.send('please login.')
        }

        // token generate
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '10m' })
        console.log(token)

        await transporter.sendMail({
            to: email,
            subject: "Reset Email",
            html: `
            <h2> Use this token to reset you password </h2>
            <p> ${token} </p>
            `
        })

        return res.status(200).send('check your email.')

    } catch (error) {
        console.log('error in forgot password', error)
    }
}
export const resetPassword = async (req, res) => {
    try {
        const { newpassword, token } = req.body
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.userId)
        if (!user) {
            return res.status(401).send('invalid user')
        }
        const hashPass = await bcrypt.hash(newpassword, 10)
        user.password = hashPass
        await user.save()

        return res.status(200).send('password reset successfully.')

    } catch (error) {
        console.log('error in reset password', error)
    }
}