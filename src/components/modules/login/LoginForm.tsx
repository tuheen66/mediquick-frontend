/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import login from "@/assets/images/login.jpg";
import logo from "@/assets/images/logo1.jpg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/UserContext";
import { loginUser } from "@/services/AuthService";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import Image from "next/image";

const LoginForm = () => {
  const form = useForm();
  const router = useRouter();
  const { setIsLoading } = useUser();
  const searchParams = useSearchParams();
  const user = useUser();
  console.log(user);

  const redirect = searchParams.get("redirectPath");

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/");

        //? if redirectPath is available then redirect to that path else redirect to profile page
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center gap-10 border-1 border-gray-200 p-4">
      <div className="w-full max-h-screen">
        <Image src={login} alt="image" width={450} height={700} />
      </div>

      <div className="w-full ">
        <div className="flex flex-col gap-4 items-center space-x-4 mb-5 ">
          <div className="flex gap-4 items-center ">
            <Link href="/">
              <Image
                className="rounded-full"
                src={logo}
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
            <h1 className="text-2xl font-semibold text-center">Login</h1>
          </div>
          <div className="flex space-x-2">
            {/* Customer Login Button */}
            <Button
              className=" hover:bg-gray-700 text-gray-800 hover:text-gray-200 border-1 rounded-none px-3 py-1 text-sm "
              onClick={() => {
                form.setValue("email", "kabir@uddin.com");
                form.setValue("password", "12345678");
                form.handleSubmit(onSubmit)();
              }}
            >
              Login as Customer
            </Button>

            {/* Admin Login Button */}
            <Button
              className="hover:bg-gray-700 text-gray-800 hover:text-gray-200 border-1 rounded-none px-3 py-1 text-sm "
              onClick={() => {
                form.setValue("email", "admin@mediquick.com");
                form.setValue("password", "admin123");
                form.handleSubmit(onSubmit)();
              }}
            >
              Login as Admin
            </Button>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                      className="border-1 border-gray-300 mb-4 rounded-none"
                    />
                  </FormControl>
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
                      className="border-1 border-gray-300 mb-4 rounded-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="mt-5 w-full bg-orange-500 rounded-none hover:bg-orange-800 text-white cursor-pointer"
              type="submit"
            >
              {isSubmitting ? "Logging ..." : "Login"}
            </Button>
          </form>
        </Form>
        <p className="text-sm text-gray-600 text-center my-3">
          Do not have any account ? {" "}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
