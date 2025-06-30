import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const ContactUsButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  function navigateContactUs() {
    router.push('/contact-us');
  }
  return (
    <button
      onClick={navigateContactUs}
      className={cn(
        'whitespace-nowrap rounded-md bg-yellow-500 px-3 py-2 text-sm uppercase text-white hover:bg-yellow-600',
        className
      )}
    >
      Contact Us
    </button>
  );
};

export default ContactUsButton;
