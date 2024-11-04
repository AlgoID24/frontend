"use client";

import { z } from "zod";
import Link from "next/link"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import WeuiEyesOnOutlined from "~icons/weui/eyes-on-outlined";
import WeuiEyesOffFilled from "~icons/weui/eyes-off-filled";
import {
  ResponseStatus,
  useSignInMutation,
} from "@/services/graphql/generated";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    ),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [{ fetching }, mutate] = useSignInMutation();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const { data, error } = await mutate({
      input: {
        email: values.email,
        password: values.password,
      },
    });
    if (data?.emailPasswordSignin.status === ResponseStatus.Success) {
      toast({
        title: "Welcome Back",
        description: data.emailPasswordSignin.message,
      });
      router.replace("/app/profile/kyc");
    } else if (error?.graphQLErrors && error.graphQLErrors.length > 0) {
      error.graphQLErrors.map((error) =>
        toast({
          title: "Login Error",
          description: error.message,
          variant: "destructive",
        }),
      );
    }
  };

  return (
    <div className="bg-gradient-to-b from-primary">
      <nav className="p-10 py-4">
        <Image src="/logo.svg" alt="algo-id logo" width={100} height={100} />
      </nav>

      <section className="p-10 backdrop-blur-[2px] bg-white/30 border shadow-lg md:w-[40%] mx-auto rounded-lg shadow-lg">
        <div>
          <h3 className="text-center text-xl font-semibold">
            Sign in with email
          </h3>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mt-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <article className="relative">
                      <Input
                        className="pr-10"
                        placeholder="Create your password"
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                      <div
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <WeuiEyesOffFilled />
                        ) : (
                          <WeuiEyesOnOutlined />
                        )}
                      </div>
                    </article>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link href='/' className='text-black flex justify-end items-end'>Forgot Password?</Link>

            <Button loading={fetching} type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
}
