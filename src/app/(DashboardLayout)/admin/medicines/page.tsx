import ManageMedicine from '@/components/modules/medicine/ManageMedicine';
import { deleteMedicine } from '@/services/MedicineService';
import React from 'react';

const ManageMedicinePge =async () => {

  

  return (
    <div className='w-[95%] '>
      <ManageMedicine/>
    </div>
  );
};

export default ManageMedicinePge;