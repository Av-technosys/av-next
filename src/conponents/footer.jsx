import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    // <footer className="bg-cover relative bg-center text-white py-10 px-6">
    <div
      className="relative h-full min-h-96 w-full px-4 pb-4 pt-24"
      style={{
        backgroundImage: "url('/footer-bg.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <img
        src="/footer-top.png"
        className="absolute left-0 top-0 z-10"
        alt=""
      />
      <div className="left-0 top-20 !z-50 w-full text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 pb-6">
          <p className="text-4xl font-semibold">LOGO</p>
          <div className="mb-2 mt-6 flex justify-end gap-3">
            {[Instagram, Facebook].map((Icon, idx) => (
              <div
                key={idx}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white text-sm transition hover:bg-white hover:text-black"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col flex-wrap justify-between gap-6 pb-10 md:flex-row md:gap-8">
          <div className="md:text-lg">
            <h3 className="mb-3 text-2xl font-semibold md:mb-6">Address</h3>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
          </div>

          <div className="md:text-lg">
            <h3 className="mb-3 text-2xl font-semibold md:mb-6">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/trip" className="hover:underline">
                  trip page
                </Link>
              </li>
              <li>
                <Link href="/add-review" className="hover:underline">
                  Add Review
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:text-lg">
            <Link href={'/contact-us'} className="text-2xl font-semibold">
              Contact Us
            </Link>

            <p className="mt-3 md:mt-6">+1 500 321 852 789</p>
            <p>+1 500 321 852 789</p>
          </div>

          <div className="md:text-lg">
            <h3 className="mb-3 text-2xl font-semibold md:mb-6">
              Utility Pages
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/blog" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/blog/1" className="hover:underline">
                  Blogs single
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-400 pt-4 text-center text-sm">
          Copyright © Roam Fy Planners | Developed by - Ashish Bishnoi
        </div>
      </div>
    </div>
  );
};

export default Footer;
