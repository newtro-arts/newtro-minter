'use client';

import Button from '../Button';
import { useZoraCreateProvider } from '@/providers/ZoraCreateProvider';

const CreateButton = ({ chainId, children }: any) => {
  const { create } = useZoraCreateProvider();

  return (
    <Button
      onClick={() => create(chainId)}
      className="
       w-auto 
        text-[20px] font-light bg-[#191919] border border-[#D1F121] text-[#191919] w-full py-4 
        px-8 duration-700 hover:text-[#D1F121] hover:shadow-lg hover:border-[#D1F121]
      "
    >
      {children}
    </Button>
  );
}

export default CreateButton;
