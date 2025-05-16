import { cn } from '@/lib/utils';

function Textarea({ title, placeholder, value, onChange, className }) {
  return (
    <div className={cn('flex w-full flex-col gap-1.5', className)}>
      <p className="font-medium">{title}</p>
      <textarea
        placeholder={placeholder}
        value={value}
        rows={4}
        onChange={onChange}
        className="rounded-md border bg-white px-2 py-1.5"
      />
    </div>
  );
}

export default Textarea;
