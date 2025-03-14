import MedicineCard from "@/components/medicineCard/MedicineCard";
import { featuredMedicine } from "@/services/MedicineService";
import { IMedicine } from "@/types";

const FeaturedMedicine = async () => {
  const { data: allMedicines } = await featuredMedicine();

  const medicines = allMedicines.slice(0, 6);
  return (
    <div>
        <h2 className="text-3xl text-gray-800 font-bold text-center my-8">Featured Medicines</h2>
      <div className="grid grid-cols-3 gap-12">
        {medicines.map((medicine: IMedicine) => (
          <MedicineCard key={medicine._id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMedicine;
