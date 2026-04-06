import z from 'zod'

const primaryGoals = ['Weight Loss', 'Muscle Gain', 'Overall Health'] as const

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.').max(20),
  email: z.email(),
  primaryGoal: z.enum(primaryGoals, {
    error: 'Please choose a primary goal',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, "Message can't be more than 500 characters"),
})
