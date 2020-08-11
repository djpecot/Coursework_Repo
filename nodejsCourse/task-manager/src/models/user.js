const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        unique: true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value) {
            if (!validator.isEmail(value)){
                throw new Error ("Email is invalid!")
            }
        }
    },
    password: {
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(value) {
            if (value.toLowerCase().includes("password")) {
                throw new Error ("Cannot contain the word password!")
            }
        }
    },
    tokens: [{
        token: {
            type: String, 
            required: true
        }
    }]
}, {timestamps: { createdAt: 'created_at' }})


userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user
    
}

userSchema.methods.genAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'This is my new course')
    user.tokens = user.tokens.concat({ token })
    return token
}

// Hash before storing
userSchema.pre('save', async function(next) {

    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User