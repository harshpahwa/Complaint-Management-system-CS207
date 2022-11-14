
const development ={
    name: "development",
    asset_path: './assets',
    session_cookie_key: 'abcxyz',
    db: 'codeial_development',
    smtp:{
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'b21100@students.iitmandi.ac.in', // generated ethereal user
            pass: '' // generated ethereal password
        }
    },
    google_client_id:"247973150184-q9di1c5hf0f0v9vtjb1876kvee66k3q2.apps.googleusercontent.com",
    google_client_secret:"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",
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",

}

const production ={
    name: "production"
}


module.exports = development;