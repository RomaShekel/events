import dotenv from 'dotenv'

dotenv.config()

export const env = (name) => {
    const value = process.env[name]

    if (value) return value;

    throw new Error(`Missing env: ${name}`)
}