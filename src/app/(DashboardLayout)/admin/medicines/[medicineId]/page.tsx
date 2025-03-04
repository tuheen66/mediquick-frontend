import UpdateMedicineForm from "@/components/modules/medicine/updateMedicineForm";
import { getSingleMedicine } from "@/services/MedicineService";

const UpdateMedicinePage = async ({
  params,
}: {
  params: Promise<{ medicineId: string }>;
}) => {
  const { medicineId } = await params;

  const { data: medicine } = await getSingleMedicine(medicineId);
  return (
    <div>
      <UpdateMedicineForm medicine={medicine} />
    </div>
  );
};

export default UpdateMedicinePage;
