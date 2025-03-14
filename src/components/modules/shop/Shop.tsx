// "use client";
// import MedicineCard from "@/components/medicineCard/MedicineCard";
// import { getAllMedicine } from "@/services/MedicineService";
// import { IMedicine } from "@/types";
// import { useEffect, useState } from "react";

// const Shop1 = () => {
//   const [medicines, setMedicines] = useState<IMedicine[]>([]);

//   useEffect(() => {
//     const fetchMedicines = async () => {
//       const result = await getAllMedicine();
//       setMedicines(result);
//     };

//     fetchMedicines();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-3 gap-12">
//         {medicines.map((medicine: IMedicine) => (
//           <MedicineCard key={medicine._id} medicine={medicine} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop1