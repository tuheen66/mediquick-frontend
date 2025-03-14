"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

import { updateUser } from "@/services/AuthService";
import { toast } from "sonner";

const UpdateProfile = ({ user }: { user: any }) => {
  const userId = user?._id;
  console.log(userId);

  const form = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    const userData = {
      ...data,
      name: data.name || "",
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
    <div className="lg:w-1/2 my-12 mx-auto flex justify-center items-center">
      <div className="max-w-md w-full p-5 border-2 border-gray-300 rounded-xl bg-gray-200  flex-grow">
        <div>
          <h1 className="text-2xl font-semibold text-center">Update profile</h1>
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
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone No</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      className="bg-gray-300 border-none mb-4"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      className="bg-gray-300 border-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="mt-5 w-full bg-orange-500 text-white hover:bg-orange-700 cursor-pointer"
              type="submit"
            >
              {isSubmitting ? "Submitting ..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfile;
