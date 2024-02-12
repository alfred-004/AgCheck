import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Radar } from 'lucide-react';



export default function Navbar() {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex flex-row lg:ml-0">
                <Link href="/">
                <div className='h-14 w-14 m- 3 flex items-center justify-center rounded-lg bg-slate-700 text-blue-100'>
                    {<Radar className='w-2/3 h-2/3' />}
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    href="/"
                    className={buttonVariants({
                      variant: "ghost",
                    })}
                  >
                    Sign in
                  </Link>

                  <Link href="/" className={buttonVariants()}>
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
