"use client";
import { Button } from "@/components/ui/button";
import { addMedicine } from "@/redux/features/cartSlice";
import { useAppDispatch} from "@/redux/hooks";
import { IMedicine } from "@/types";
import Image from "next/image";
import Link from "next/link";


const MedicineDetailsCard = ({ medicine }: { medicine: IMedicine }) => {
  const dispatch = useAppDispatch();
  // const prescription = useAppSelector(prescriptionSelector);

 

  const handleAddMedicine = (medicine: IMedicine) => {
    dispatch(addMedicine(medicine));
  };
  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold text-center mb-4">{medicine.name}</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:w-[70%] mx-auto  p-4 mb-8">
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
            <span className="font-semibold">
              {medicine.manufacturerName}
            </span>{" "}
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
          {/* <div>
            {medicine.prescriptionRequired === "yes" && (
              <div className="mt-2  ">
                <PrescriptionModal />
              </div>
            )}
          </div> */}

          
              <div>
                <Link href="/cart">
                  <Button
                    onClick={() => handleAddMedicine(medicine)}
                    className="bg-orange-500 hover:bg-orange-800 text-white w-full cursor-pointer"
                  >
                    Add to cart
                  </Button>
                </Link>
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

export default MedicineDetailsCard;
