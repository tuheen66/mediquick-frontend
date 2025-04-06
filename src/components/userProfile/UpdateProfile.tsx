/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

import { updateUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const UpdateProfile = ({ user }: { user: any }) => {
  const userId = user?._id;
  console.log(userId);

  const router=useRouter()

  const form = useForm({
    defaultValues: {
      name: user?.name || "",
      image: user?.image || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const userData = {
      ...data,
      name: data.name || "",
      image: data.image || "",
      email: data.email || "",
      phone: data.phone || "",
      address: data.address || "",
      role: "customer",
    };

    try {
      if (user?._id) {
        const res = await updateUser(user?._id, userData);
        if (res.success) {
          toast.success(res.message);
          router.push("/customer/dashboard")
        } else {
          toast.error(res.message);
        }
      } else {
        toast.error("User ID is missing.");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="lg:w-[90%] my-12 mx-auto flex justify-center items-center">
      <div className=" lg:w-full p-5 border-2 border-gray-300 flex-grow">
        <div>
          <h1 className="text-2xl font-semibold text-center mb-8">Update profile</h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex flex-col lg:flex-row lg:gap-4 justify-between items-center">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        className=" border-1 border-gray-300 mb-4 rounded-none "
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        value={field.value || ""}
                        className="border-1 border-gray-300 mb-4 rounded-none w-full flex-1"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-4 justify-between items-center mb-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        className="border-1 border-gray-300 rounded-none mb-4 lg:mb-0"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone No</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        className="border-1 border-gray-300 rounded-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-4 justify-between items-center">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="w-full lg:w-1/2 mb-4">
                    <FormLabel>Profile Image</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        className="border-1 border-gray-300 rounded-none flex-1"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className=" rounded-none w-full bg-orange-500 text-white hover:bg-orange-700 cursor-pointer flex-1"
                type="submit"
              >
                {isSubmitting ? "Submitting ..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfile;
