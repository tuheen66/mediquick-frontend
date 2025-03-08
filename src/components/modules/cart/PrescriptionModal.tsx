"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { prescriptionLink } from "@/redux/features/cartSlice";

import { useAppDispatch } from "@/redux/hooks";
import { useForm } from "react-hook-form";

const PrescriptionModal = () => {
  const form = useForm();
  const dispatch = useAppDispatch();

  const {
    formState: { isSubmitting },
  } = form;

  const handleSubmitPrescriptionLink = (data: any) => {
    dispatch(prescriptionLink(data));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-1 border-orange-500 rounded w-full hover:bg-orange-500 hover:text-white cursor-pointer">
          Upload Prescription
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-100">
        <DialogHeader>
          <DialogTitle>Upload Prescription</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitPrescriptionLink)}>
            <FormField
              control={form.control}
              name="prescriptionLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prescription link</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="mt-5 w-full bg-orange-500 hover:bg-orange-800 text-white cursor pointer"
              type="submit"
            >
              {isSubmitting ? "Submitting ..." : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PrescriptionModal;
