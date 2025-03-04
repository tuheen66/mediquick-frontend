import MedicineCard from "@/components/medicineCard/MedicineCard";
import { getAllMedicine } from "@/services/MedicineService";
import { IMedicine } from "@/types";

const ShopPage = async () => {
  const { data: medicine } = await getAllMedicine();

  console.log(medicine);

  return (
    <div>
      <h1 className="text-3xl text-center my-4 text-gray-800 font-bold">All Medicines</h1>
      <div className="grid grid-cols-4 gap-8  justify-center">
        {medicine.map((medicine: IMedicine) => (
          <MedicineCard key={medicine._id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
