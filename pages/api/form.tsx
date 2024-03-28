import userController from "@/utils/controllers/UserController"

export default async function handler(req: { body: any }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: void): void; new(): any } } }) {
    const response = await userController.saveUser(req.body)
    .then((data)=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })

    res.status(200).json(response)
}