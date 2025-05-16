'use client';
import { DatePicker } from '@/components/datePicker';
import { cn } from '@/lib/utils';

const TitleDatepicker = ({ title, value, onChange, className }) => {
  return (
    <div className={cn('flex w-full flex-col gap-1', className)}>
      <p className="font-medium">{title}</p>
      <DatePicker date={value} setDate={onChange} />
    </div>
  );
};

export default TitleDatepicker;
