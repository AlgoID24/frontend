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

  const onSubmit = (values: FormValues) => {
    try {
      console.log(values);
      form.reset();
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="w-[86%] mx-auto">
      <nav className="py-5">
        <Image src="/logo.svg" alt="algo-id logo" width={100} height={100} />
      </nav>

      <section className="p-8 border border-red-500 w-[40%] mx-auto rounded-lg shadow-lg">
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
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
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
  );
}