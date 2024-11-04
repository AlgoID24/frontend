import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string({ message: "Please enter first name" }),
  lastName: z.string({ message: "Please enter last name" }),
  nin: z.string({ message: "Please enter your NIN" }),
});

export type FormSchema = z.infer<typeof formSchema>;

const ProfileInfoForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (value: FormSchema) => {
    // setValue(c => ({...c, }))
  };

  return (
    <Form {...form}>
      <form className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIN</FormLabel>
                <FormControl>
                  <Input placeholder="10942019328" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="self-end">Next</Button>
      </form>
    </Form>
  );
};

export default ProfileInfoForm;
