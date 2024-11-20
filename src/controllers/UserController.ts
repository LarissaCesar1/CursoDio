import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController {
    createUser  (req: Request, res: Response) {
        const userService = new UserService()
        const user = req.body

    if(!user.name){
        res.status(400).json({message: 'Bad request! Name obrigatorio'})
        return 
}

        userService.createUser(user.name, user.email)
        res.status(201).json({ message: 'Usuário criado'})
        return 
    }

    getAllUsers (req: Request, res: Response) {
        const userService = new UserService()

        const users = userService.getAllUsers()
        res.status(200).json(users)
        return 
    }
}