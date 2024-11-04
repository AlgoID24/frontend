import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { kycAtom } from "@/state/atoms/kyc";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(1, "Please enter first name"),
  lastName: z.string().min(1, "Please enter last name"),
  nin: z.string().min(1, "Please enter your NIN"),
});

export type FormSchema = z.infer<typeof formSchema>;

interface ProfileInfoFormProps {
  onNextStep: () => void; 
}

const ProfileInfoForm: React.FC<ProfileInfoFormProps> = ({ onNextStep }) => {
  const [, setKycData] = useAtom(kycAtom);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (value: FormSchema) => {
    setKycData(value); 
    onNextStep(); 
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
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
        <div className="flex items-center justify-center gap-5">
          <Button className="mt-4">
            <Link
              href="https://nimc.gov.ng/preenrolment-online/"
              target="_blank"
            >
              Register NIN
            </Link>
          </Button>
          <Button type="submit" className="mt-4">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileInfoForm;
