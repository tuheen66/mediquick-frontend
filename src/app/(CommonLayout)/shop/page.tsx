// import MedicineCard from "@/components/medicineCard/MedicineCard";
// import Shop from "@/components/modules/shop/Shop";
import Shop1 from "@/components/modules/shop/Shop";

// import { getAllMedicine } from "@/services/MedicineService";

// import { IMedicine } from "@/types";

const ShopPage = () => {
  // const { data: medicine } = await getAllMedicine();

  return (
    <div>
      <h1 className="text-3xl text-center my-4 text-gray-800 font-bold">
        All Medicines
      </h1>
      {/* <div className="grid grid-cols-4 gap-8  justify-center">
        {medicine?.map((medicine: IMedicine) => (
          <MedicineCard key={medicine._id} medicine={medicine} />
        ))}
      </div> */}

      <Shop/>
    </div>
  );
};

export default ShopPage;
