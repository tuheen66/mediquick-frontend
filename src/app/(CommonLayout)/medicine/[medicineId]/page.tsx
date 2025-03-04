import { Button } from "@/components/ui/button";
import { getSingleMedicine } from "@/services/MedicineService";
import Image from "next/image";

const MedicineDetailsPage = async ({
  params,
}: {
  params: Promise<{ medicineId: string }>;
}) => {
  const { medicineId } = await params;

  const { data: medicine } = await getSingleMedicine(medicineId);

  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold text-center mb-4">{medicine.name}</h1>
      <div className="flex items-center justify-center gap-8 w-[70%] mx-auto  p-4 mb-8">
        <div className="shadow-lg shadow-slate-400">
          <Image src={medicine.image} width={400} height={400} alt="image" />
        </div>

        <div className="text-gray-800 space-y-2">
          <p>
            Price:
            <span className="font-bold text-orange-500">
              BDT {medicine.price}
            </span>{" "}
          </p>

          <p>
            Category: <span className="font-semibold">{medicine.category}</span>
          </p>
          <p>
            Manufacturer:
            <span className="font-semibold">{medicine.manufacturerName}</span>{" "}
          </p>
          <p>
            Prescription required:
            <span className="uppercase font-semibold">
              {medicine.prescriptionRequired}
            </span>{" "}
          </p>
          <p>
            Stock : <span className="font-semibold"> {medicine.quantity}</span>
            units
          </p>
          <p>
            Expiry:{" "}
            <span className="font-semibold"> {medicine.expiryDate}</span>
          </p>
          <div>
            <Button className="bg-orange-500 hover:bg-orange-800 text-white w-full">
              Buy now
            </Button>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto space-y-2">
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {medicine.description}
        </p>
        <p>
          <span className="font-semibold">Manufacturer Details:</span>{" "}
          {medicine.manufacturerDetails}
        </p>
      </div>
    </div>
  );
};

export default MedicineDetailsPage;
