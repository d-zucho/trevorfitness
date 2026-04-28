'use client'
import { Controller, useForm } from 'react-hook-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Form } from './ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { Field, FieldError, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useState } from 'react'
import { contactSchema } from '@/lib/ContactSchema'

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      primaryGoal: 'Overall Health',
    },
  })

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setLoading(true)
    try {
      console.log(values)
      // TODO: wire up API call here
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className='max-w-sm mx-auto bg-card-bg'>
      <CardHeader>
        <CardTitle className='text-xl'>Get In Touch</CardTitle>
        <CardDescription className='text-my-off-white'>
          Let's schedule a free consultation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-6 items-start'
          >
            {/* Name */}
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input
                    placeholder='Enter your name...'
                    type='text'
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    placeholder='johnny@example.com'
                    type='email'
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Primary Goal */}
            <Controller
              name='primaryGoal'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Primary Goal</FieldLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    onOpenChange={() => field.onBlur()}
                  >
                    <SelectTrigger className='min-w-full'>
                      <SelectValue placeholder='Select primary goal' />
                    </SelectTrigger>
                    <SelectContent className='bg-card-bg'>
                      {contactSchema.shape.primaryGoal.options.map((goal) => (
                        <SelectItem key={goal} value={goal}>
                          {goal}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Message */}
            <Controller
              name='message'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className=''>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea
                    className='max-h-100'
                    placeholder='Type your message here'
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button
              type='submit'
              className='px-10 max-sm:w-full'
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
