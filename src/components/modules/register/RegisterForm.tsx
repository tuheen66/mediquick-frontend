/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
import { registerUser } from "@/services/AuthService";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterForm = () => {
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch("password");
  const passwordConfirm = form.watch("passwordConfirm");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md w-full p-5 border-2 border-gray-300 rounded-xl bg-gray-200  flex-grow">
      <div>
        <h1 className="text-2xl font-semibold text-center">Register</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-300 border-none mb-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-300 border-none mb-4"
                  />
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
                  <Input
                    type="text"
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-300 border-none mb-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    value={field.value || ""}
                    className="bg-gray-300 border-none"
                  />
                </FormControl>
                {passwordConfirm && password !== passwordConfirm ? (
                  <FormMessage>Password does not match</FormMessage>
                ) : (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />

          <Button
            disabled={passwordConfirm && password !== passwordConfirm}
            className="mt-5 w-full bg-orange-500 text-white hover:bg-orange-700"
            type="submit"
          >
            {isSubmitting ? "Registering ..." : "Register"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Already have an account ?
        <Link href="/login" className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
