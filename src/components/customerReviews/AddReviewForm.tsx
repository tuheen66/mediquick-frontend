"use client";

import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { TReviews } from "@/types/review";
import { createReview } from "@/services/ReviewService";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { userProfile } from "@/services/AuthService";

const AddReviewForm = () => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<{
    name?: string | undefined;
    review?: string | undefined;
    image?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const user = useUser();
  const userId = user?.user?.userId;
  const form = useForm();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      try {
        const userData = await userProfile(userId as string);
        if (userData?.data) {
          // Set default values in the form
          form.setValue("name", userData.data.name || "");
          form.setValue("image", userData.data.image || "");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.user?.userId]);

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createReview(data as TReviews);

      if (res.success) {
        toast.success(res.message);
        router.push("/customer/dashboard");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex gap-4 items-center justify-center">
        <h1 className="text-2xl font-semibold text-center mb-12">
          Add Your Review
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex gap-8 justify-between items-center mb-4">
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
                      readOnly
                      className=" border-1 border-gray-300 mb-2 rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Profile Image Link</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      readOnly
                      className="border-1 border-gray-300 mb-2 rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Review</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=""
                    className="resize-none rounded-none border-1 border-gray-300"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="mt-5  rounded-none bg-orange-500 text-white hover:bg-orange-700"
            type="submit"
          >
            {isSubmitting ? "Submitting ..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddReviewForm;
