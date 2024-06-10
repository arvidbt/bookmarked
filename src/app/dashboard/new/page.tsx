'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function InputForm() {
  const FormSchema = z.object({
    folder: z
      .string()
      .min(2, {
        message: 'Folder must be at least 2 characters.',
      })
      .max(20, {
        message: 'Folder must not be more than 20 characters',
      }),
    description: z
      .string()
      .max(255, {
        message: 'Description must not exceed 255 characters',
      })
      .optional(),
    folderVisibility: z.boolean(),
    folderSize: z.number().nonnegative().min(1, {
      message: 'Folder must be at least of size 1',
    }),
    icon: z.string().emoji().optional(),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      folder: '',
      folderVisibility: false,
      folderSize: 100,
      icon: '📁',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <>
      <div className="flex w-full p-4 sm:h-[calc(100vh-6rem-1px)]">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center py-6">
          <div className="flex grow flex-col items-center">
            <div>
              <h1 className="text-2xl font-extrabold">
                {"Let's create your new folder"}
              </h1>
            </div>
            <div className="mt-4 flex flex-col gap-4 text-xs sm:text-sm">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-4"
                >
                  <div className="grid grid-cols-4 gap-2">
                    <div className="col-span-2">
                      <FormField
                        control={form.control}
                        name="folder"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Folder name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Important links" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="folderSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Folder size *</FormLabel>
                          <FormControl>
                            <Input placeholder="100" {...field} />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="icon"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Icon</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="📁" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <div className="grid grid-cols-4 md:grid-cols-6">
                                <SelectItem value="📁">📁</SelectItem>
                                <SelectItem value="📄">📄</SelectItem>
                                <SelectItem value="📊">📊</SelectItem>
                                <SelectItem value="📈">📈</SelectItem>
                                <SelectItem value="📉">📉</SelectItem>
                                <SelectItem value="📑">📑</SelectItem>
                                <SelectItem value="🗂️">🗂️</SelectItem>
                                <SelectItem value="🗃️">🗃️</SelectItem>
                                <SelectItem value="🗄️">🗄️</SelectItem>
                                <SelectItem value="📝">📝</SelectItem>
                                <SelectItem value="🖋️">🖋️</SelectItem>
                                <SelectItem value="📚">📚</SelectItem>
                                <SelectItem value="📖">📖</SelectItem>
                                <SelectItem value="🎓">🎓</SelectItem>
                                <SelectItem value="🏫">🏫</SelectItem>
                                <SelectItem value="💼">💼</SelectItem>
                                <SelectItem value="🛠️">🛠️</SelectItem>
                                <SelectItem value="💡">💡</SelectItem>
                                <SelectItem value="🖼️">🖼️</SelectItem>
                                <SelectItem value="🎨">🎨</SelectItem>
                                <SelectItem value="🎵">🎵</SelectItem>
                                <SelectItem value="🎬">🎬</SelectItem>
                                <SelectItem value="📸">📸</SelectItem>
                                <SelectItem value="🌐">🌐</SelectItem>
                                <SelectItem value="🔒">🔒</SelectItem>
                                <SelectItem value="🧾">🧾</SelectItem>
                                <SelectItem value="🏠">🏠</SelectItem>
                                <SelectItem value="🍴">🍴</SelectItem>
                                <SelectItem value="⚽">⚽</SelectItem>
                              </div>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Description{' '}
                          <span className="text-gray-500">{'(optional)'}</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="A brief description about your folder"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormField
                      control={form.control}
                      name="folderVisibility"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between gap-4 rounded-lg border p-4 ">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Is your folder public?
                            </FormLabel>
                            <FormDescription>
                              ⚠️ Public folders can be accessed by anyone. This
                              cannot be changed once created.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              aria-readonly
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-end justify-end">
                    <Button
                      className="rounded-lg bg-red-500 hover:bg-red-600"
                      type="submit"
                    >
                      Create folder
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
