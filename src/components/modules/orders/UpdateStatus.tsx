"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateOrderStatus } from "@/services/OrderService";
import { TOrder } from "@/types";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const statuses = ["Pending", "Processing", "Shipped", "Delivered"];

const UpdateStatus = ({ order }: { order: TOrder }) => {
  const form = useForm();
  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  const orderId = order?._id;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await updateOrderStatus(
        orderId as string,
        data.status as string
      );

      if (res.success) {
        toast.success(res.message);
        router.push("/admin/orders");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
    console.log(data);

    router.push("/admin/orders");
  };

  return (
    <div className="w-1/3 bg-slate-300 p-8 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Update order status
      </h1>

      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select to update order status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-300">
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button
              className="bg-orange-600 text-white hover:bg-orange-800"
              type="submit"
            >
              {isSubmitting ? "Updating Medicine....." : "Update Medicine"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateStatus;
