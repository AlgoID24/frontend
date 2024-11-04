"use client";

import { z } from "zod";
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
import WeuiEyesOnOutlined from "~icons/weui/eyes-on-outlined";
import WeuiEyesOffFilled from "~icons/weui/eyes-off-filled";
import { useState } from "react";
import {
  ResponseStatus,
  useSignUpMutation,
} from "@/services/graphql/generated";
import { descriptors } from "chart.js/dist/core/core.defaults";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/router";

const formSchema = z
  .object({
    email: z
      .string()
      .email("Please enter a valid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

type FormValues = z.infer<typeof formSchema>;

export default function SignUpPage() {
  const router = useRouter();
  const [{ data, fetching, error }, mutate] = useSignUpMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Renamed to SignUpPage
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const { data, error } = await mutate({
        input: {
          email: values.email,
          password1: values.password,
          password2: values.confirmPassword,
        },
      });
      if (data?.emailPasswordSignup.status === ResponseStatus.Success) {
        toast({
          title: "Sign up successful",
          description: data.emailPasswordSignup.message,
        });
        router.replace("/app/profile/kyc");
      } else if (error?.graphQLErrors && error.graphQLErrors.length > 0) {
        error.graphQLErrors.map((error) =>
          toast({
            title: "Sign up error",
            description: error.message,
            variant: "destructive",
          })
        );
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full">
        <nav className="py-3 p-4">
          <Image src="/logo.svg" alt="algo-id logo" width={100} height={100} />
        </nav>

        <section className="p-8 backdrop-blur-[2px] bg-primary/30 border shadow-lg w-[70%] mx-auto rounded-lg shadow-lg">
          <div>
            <h3 className="text-center text-xl font-semibold">
              Create your account
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <article className="relative">
                        <Input
                          className="pr-10"
                          placeholder="Confirm your password"
                          type={showConfirmPassword ? "text" : "password"}
                          {...field}
                        />
                        <div
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
                          onClick={() =>
                            setShowConfirmPassword((prev) => !prev)
                          }
                        >
                          {showConfirmPassword ? (
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

              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Form>
        </section>
      </div>
      <div className='bg-gradient-to-b from-primary to-purple-400'>
        {/* <Image src="/signup.jpg" alt="algo-id sign_up" width={900} height={1000}/> */}
      </div>
    </div>
  );
}
