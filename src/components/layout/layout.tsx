import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { Header } from "./header";
import { SideBar } from "./sidebar";

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className='bg-white'>
      <Header />
      <div className='flex h-[calc(100dvh-103px)] w-full bg-[#F0F2F5] px-7 pt-6.5 gap-11.5'>
        <SideBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
        <div className='mx-auto w-full overflow-y-auto rounded-[4px]'>
          <Suspense fallback={"Loading..."}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </main>
  );
};


export { MainLayout }