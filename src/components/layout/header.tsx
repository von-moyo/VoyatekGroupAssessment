import React, { useState, useRef, useEffect } from 'react';
import {
  CartIcon,
  CommissionIcon,
  DashboardIcon,
  HomeIcon,
  PlanTripIcon,
  PlusBoxIcon,
  BellIcon,
  SearchIcon,
  WalletIcon,
  ChevronBottomIcon
} from '../../assets/icons';
import { Logo, Pfp2 } from '../../assets/images';
import { useCarRentals } from '../../api/services/useBooking';
import { useClickOutside } from '../../hooks';

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef(null);

  const { data, isLoading, error } = useCarRentals({
    pick_up_latitude: 40.6397,
    pick_up_longitude: -73.7791,
    drop_off_latitude: 40.6397,
    drop_off_longitude: -73.7791,
    pick_up_date: "2025-08-01",
    drop_off_date: "2025-08-03",
    pick_up_time: "10:00",
    drop_off_time: "10:00",
    driver_age: 30,
  });

  useClickOutside(searchContainerRef, searchContainerRef, () => setIsSearchExpanded(false));

  useEffect(() => {
    if (isSearchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [isSearchExpanded]);

  const handleSearchIconClick = () => {
    setIsSearchExpanded(true);
  };

  const navItems = [
    { name: 'Home', icon: HomeIcon, active: false },
    { name: 'Dashboard', icon: DashboardIcon, active: false },
    { name: 'Wallet', icon: WalletIcon, active: false },
    { name: 'Plan a trip', icon: PlanTripIcon, active: true },
    { name: 'Commission for life', icon: CommissionIcon, active: false }
  ];

  return (
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-7.5 py-3 h-[103px] flex w-full relative">
      <div className="flex items-center justify-between max-w-full w-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img src={Logo} alt='logo Icon' className='w-8 h-8 sm:w-10 lg:w-11.5 sm:h-10 lg:h-11.5' />
        </div>

        {/* Search Bar - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex flex-1 max-w-[22.2%] ml-5 mr-auto">
          <div className="relative rounded-[4px] w-full">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-[#667185]" />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-[#F0F2F5] rounded-[4px] pl-9 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[13px] placeholder:text-[#647995]"
            />
          </div>
        </div>

        {/* Mobile Search Icon - Only visible on mobile */}
        <div
          className={`md:hidden cursor-pointer group flex flex-col items-center absolute left-[15%] ${isSearchExpanded && 'hidden'}`}
          onClick={handleSearchIconClick}
        >
          <SearchIcon className="w-4.5 h-4.5 text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 m-2" />
        </div>

        {/* Mobile Expanded Search - Only visible when expanded */}
        <div
          ref={searchContainerRef}
          className={`md:hidden absolute left- right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${isSearchExpanded
            ? 'opacity-100 scale-100 pointer-events-auto z-50'
            : 'opacity-0 scale-95 pointer-events-none -z-10'
            }`}
        >
          <div className="relative rounded-[4px] bg-white">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-[#667185]" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-[#F0F2F5] rounded-[4px] pl-9 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent placeholder:text-[13px] placeholder:text-[#647995]"
            />
          </div>
        </div>

        {/* Navigation Items - Hidden on mobile and tablet, visible on large screens */}
        <nav className="hidden xl:flex items-center gap-4 -mt-1.5">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.name} className="flex flex-col items-center group cursor-pointer">
                <div className="p-2 rounded-lg transition-colors duration-200">
                  <IconComponent
                    className={`w-4.5 h-4.5 transition-colors duration-200 ${item.active ? 'text-[#1D2433]' : 'text-[#667185] group-hover:text-[#1D2433]'}`}
                  />
                </div>
                <span
                  className={`text-xs mt-[2.5px] transition-colors duration-200 ${item.active ? 'text-[#1D2433] font-medium' : 'text-gray-500 group-hover:text-[#1D2433]'}`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className={`flex items-center gap-2 sm:gap-3 lg:gap-4 ml-2 sm:ml-4 lg:ml-5 -mt-1.5 transition-all duration-300 ease-in-out ${isSearchExpanded ? 'md:flex opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}>
          {/* Divider - Hidden on mobile */}
          <div className='hidden lg:block bg-[#98A2B3] pl-[1px] h-full py-5 mr-1.5'></div>

          {/* Subscribe Button - Hidden on mobile */}
          <button className="hidden sm:block bg-[#0D6EFD] text-white px-3 text-[10px] py-2 rounded-[4px] font-extralight hover:bg-blue-700 transition-colors duration-200">
            Subscribe
          </button>

          {/* Notification - Icon only on mobile, full on larger screens */}
          <div className="relative cursor-pointer group flex flex-col items-center">
            <BellIcon className="w-4.5 h-4.5 text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 m-2" />
            <span className="hidden sm:block text-xs text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 text-center mt-[2.5px]">
              Notification
            </span>
          </div>

          {/* Cart - Icon only on mobile, full on larger screens */}
          <div className="cursor-pointer group flex flex-col items-center">
            <CartIcon className="w-6 h-4.5 text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 m-2" />
            <span className="hidden sm:block text-xs text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 text-center mt-[2.5px]">
              Carts
            </span>
          </div>

          {/* Create - Hidden on mobile, visible on tablet+ */}
          <div className="hidden sm:flex cursor-pointer group flex-col items-center">
            <PlusBoxIcon className="w-4.5 h-4.5 text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 m-2" />
            <span className="text-xs text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 block text-center mt-[2.5px]">
              Create
            </span>
          </div>

          {/* User Avatar */}
          <div className="flex items-center cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
              <img
                src={Pfp2}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <ChevronBottomIcon className="hidden sm:block w-3 h-auto text-[#667185] ml-3 -mr-2" />
          </div>
        </div>
      </div>
    </header>
  );
};