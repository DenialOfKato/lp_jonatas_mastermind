import User from "../schemas/UserSchema";
import database from "../database";

const saveUser = async (queryUser) => {
    if(!database.connect()) return false

    const newUser = new User(queryUser)
    return await newUser.save()

    database.disconnect()
}

const userController = {
    
    saveUser
}

export default userController