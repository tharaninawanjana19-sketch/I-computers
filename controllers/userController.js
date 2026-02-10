import user from "../models/user"

export async function createUser(req,res){
    try{

    const newUser = new user({
        email: req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : req.body.password
    })

    await newUser.save()
    res.json({

        Message : "User Created Successfully"
    
    })
}catch(error){
    res.json({
        Message : "Error creating user"
    }
)
}


}