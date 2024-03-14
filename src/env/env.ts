import { z } from "zod";
import dotenv from "dotenv"

dotenv.config();

const envSchema = z.object({
    DISCORD_CLIENT_ID: z.string(),
    DISCORD_TOKEN: z.string()
})

export const env = envSchema.parse(process.env)