import { IMedicine } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";


const MedicineCard = ({ medicine }: { medicine: IMedicine }) => {
  return (
    <div className="bg-slate-200 rounded-xl p-4 shadow-xl shadow-slate-500 flex flex-col flex-grow items-stretch justify-between">
      <div className="flex justify-center relative">
        <Image
          className="rounded-xl"
          src={medicine.image}
          alt="image"
          width={250}
          height={250}
        />
        <div className="absolute top-5 right-12
         bg-orange-500 text-white rounded-md p-1">TK {medicine.price}</div>
      </div>
      <div className="mt-4 text-gray-800 space-y-2">
        <h2 className="text-xl font-semibold  ">{medicine.name}</h2>
        <p>
          <span className="font-semibold">Category :</span> {medicine.category}
        </p>
        <p>
          <span className="font-semibold">Manufacturer :</span>{" "}
          {medicine.manufacturerName}
        </p>
        <p>
          <span className="font-semibold">Prescription required : </span><span className="uppercase">

          {medicine.prescriptionRequired}
          </span>
        </p>
        <p>
          <span className="font-semibold">Description :</span>{" "}
          {medicine.description.slice(0, 50) + " ..."}
        </p>
        <p>
          <span className="font-semibold">Expiry :</span> {medicine.expiryDate}
        </p>
      </div>
      <div className="mt-4 justify-center">
        <Link href={`/medicine/${medicine._id}`}>
          <Button className="bg-orange-500 hover:bg-orange-800 text-white w-full cursor-pointer">
            View details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MedicineCard;
