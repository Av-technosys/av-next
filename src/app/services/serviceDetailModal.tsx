'use client';
import { Modal } from 'antd';

export default function ServiceDetailsModal({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: any;
  data: any;
}) {
  return (
    <Modal
      open={open}
      title=""
      height=""
      width={800}
      onCancel={() => setOpen(false)}
      styles={{
        content: {
          backgroundColor: '#404040',
          color: 'white',
          borderRadius: 25,
        },
      }}
      footer={[]}
    >
      <div className="mt-6 flex w-full flex-col gap-4 px-2 text-white md:px-4">
        <p className="text-3xl font-medium text-white">
          {data?.title || 'Title'}
        </p>
        <p className="text-gray-300">{data?.description || 'Description'}</p>

        <div className="mt-2">
          <p className="text-lg font-semibold">Features</p>
          <ul className="ml-4 mt-1 flex list-disc flex-col gap-1">
            {data?.features?.map((feature: any, idx: number) => (
              <li key={idx} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
