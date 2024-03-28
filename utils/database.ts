'use server'

import mongoose from 'mongoose'

mongoose.set("strictQuery", true)

const dbname = 'formulario-jonatas'
const url = `mongodb+srv://root:${process.env.DB_PWD}@clusterjonatas.dbnd2ho.mongodb.net/${dbname}`

const connect = async () => {
    return await mongoose.connect(url)
}

const disconnect = async () => {
    return await mongoose.disconnect()
}

const database = {
    connect,
    disconnect
}

export default database