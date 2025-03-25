import { IMedicine } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const MedicineCard = ({ medicine }: { medicine: IMedicine }) => {
  return (
    <div className="  p-4  flex flex-col flex-grow items-stretch border border-gray-300 justify-between">
      <div>
        <div className="flex justify-center relative">
          <Image
            className=""
            src={medicine.image}
            alt="image"
            width={180}
            height={180}
          />
          <div
            className="absolute top-2 right-15 lg:right-2 text-sm
         bg-orange-400 text-white p-1"
          >
            TK {medicine.price}
          </div>
        </div>

        <div className="mt-4 text-gray-800 space-y-0.5">
          <h2 className="text-lg  ">{medicine.name}</h2>
          <p>
            <span className="">Category :</span> {medicine.category}
          </p>
          <p>
            <span className="">Manufacturer :</span> {medicine.manufacturerName}
          </p>
          <p>
            <span className="">Prescription required : </span>
            <span className="uppercase">{medicine.prescriptionRequired}</span>
          </p>

          <p>
            <span className="">Expiry :</span> {medicine.expiryDate}
          </p>
        </div>
      </div>
      <div className="mt-4 justify-center">
        <Link href={`/medicine/${medicine._id}`}>
          <Button className=" bg-orange-500 hover:bg-orange-700 rounded-none text-white w-full cursor-pointer">
            View details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MedicineCard;
