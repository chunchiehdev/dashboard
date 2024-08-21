import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-dark-slate-gray p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-wheat px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-dark-slate-gray md:text-3xl md:leading-normal`}
          ></p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-mahogany px-6 py-3 text-sm font-medium text-wheat transition-colors hover:bg-dark-purple md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-mahogany">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-darkSlateGray md:text-4xl">
              Empowering Your Business
            </h2>
            <p className="mt-4 text-lg text-darkSlateGray md:text-xl">
              Explore our cutting-edge solutions tailored to meet your unique
              needs.
            </p>
            <div className="mt-6 rounded-lg bg-mahogany px-6 py-4 text-wheat">
              <span className="font-medium">
                Join us today to start your journey!
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
