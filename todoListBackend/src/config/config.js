import {config} from 'dotenv'
config()

export const PORT = process.env.PORT;
export const secretOrPrivateKey = process.env.secretOrPrivateKey;
export const UrlMongoHost = process.env.URLHostMongo;