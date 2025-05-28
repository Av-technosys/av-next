'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex max-h-[86vh] w-full gap-0 overflow-y-auto p-0 sm:max-w-4xl">
        <div className="flex w-full flex-col gap-4 p-8">
          <p className="text-3xl font-medium">{data?.title || 'Title'}</p>
          <p className="text-gray-600">{data?.description || 'Description'}</p>

          <div className="mt-2">
            <p className="text-lg font-semibold">Features</p>
            <ul className="ml-4 mt-1 flex list-disc flex-col gap-1">
              {data?.features?.map((feature: any, idx: number) => (
                <li key={idx} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
