import MedicineDetailsCard from "@/components/medicineDetailsCard/MedicineDetailsCard";
import { getSingleMedicine } from "@/services/MedicineService";


const MedicineDetailsPage = async ({
  params,
}: {
  params: Promise<{ medicineId: string }>;
}) => {
  const { medicineId } = await params;

  const { data: medicine } = await getSingleMedicine(medicineId);
  return (
    <div>
      <MedicineDetailsCard medicine={medicine}/>
    </div>
  );
};

export default MedicineDetailsPage;