import { NavBarHome } from '@/components/navBar';
import Link from 'next/link';
import Footer1 from './footer1';
import { TArroeRight } from '@/components/icons';

export default function NotFound() {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between">
      <NavBarHome />
      <div className="m-auto flex h-fit w-fit max-w-md flex-col items-center gap-3 p-8 text-center">
        <h2 className="w-fit rounded bg-yellow-100 px-3 py-2 text-center font-semibold text-yellow-600">
          404
        </h2>
        <p className="text-2xl font-medium text-gray-900 md:text-3xl">
          Oops! Page not found
        </p>
        <p className="leading-relaxed tracking-wide text-gray-500">
          We couldn&apos;t find the page you are looking for. It might have been
          moved or dont exist anymore.
        </p>
        <Link
          className="group mt-12 flex items-center gap-2 rounded bg-yellow-600 px-4 py-2 text-center font-semibold text-white duration-200"
          href="/"
        >
          Back to Home
          <TArroeRight className="duration-300 group-hover:-rotate-45" />
        </Link>
      </div>
      <Footer1 className="mt-auto" />
    </div>
  );
}
