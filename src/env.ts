import { z } from "zod"

const envScheme = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const parsedEnv = envScheme.safeParse(process.env)

if (!parsedEnv.success) {
    console.error('invalid environment variables', parsedEnv.error.flatten().fieldErrors)

    throw new Error('invalid environment variables.')
}

export const env = parsedEnv.data