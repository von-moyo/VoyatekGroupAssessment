import React, { useState, useRef, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-dom';
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
  ChevronBottomIcon,
} from '../../assets/icons';
import { Logo, Pfp2 } from '../../assets/images';
import { useCarRentals } from '../../api/services/useBooking';
import { useClickOutside } from '../../hooks';
import { useSearch } from '../../context';
import { toast } from 'sonner';

export const Header = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [debouncedSearch] = useDebounce(searchTerm, 500);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownPopupRef = useRef(null);

  const { data, isLoading, error } = useCarRentals({
    pick_up_latitude: 40.6397,
    pick_up_longitude: -73.7791,
    drop_off_latitude: 40.6397,
    drop_off_longitude: -73.7791,
    pick_up_date: '2025-08-01',
    drop_off_date: '2025-08-03',
    pick_up_time: '10:00',
    drop_off_time: '10:00',
    driver_age: 30,
  });

  useEffect(() => {
    if (error) {
      toast.error('Error Fetching Search Results')
    }
  }, [debouncedSearch])

  useClickOutside(searchContainerRef, searchContainerRef, () => setIsSearchExpanded(false));

  useClickOutside(dropdownPopupRef, dropdownButtonRef, () =>
    setDropdown(false)
  );

  useEffect(() => {
    if (isSearchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [isSearchExpanded]);

  const handleSearchIconClick = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setDropdown(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && debouncedSearch.trim()) {
      setIsSearchExpanded(false);
      navigate('/search');
      setDropdown(false);
    }
  };

  const filteredResults = data?.data?.search_results?.filter(
    (result: any) =>
      result.vehicle_info.v_name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      result.supplier_info.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  ) || [];

  const navItems = [
    { name: 'Home', icon: HomeIcon, active: false },
    { name: 'Dashboard', icon: DashboardIcon, active: false },
    { name: 'Wallet', icon: WalletIcon, active: false },
    { name: 'Plan a trip', icon: PlanTripIcon, active: true },
    { name: 'Commission for life', icon: CommissionIcon, active: false },
  ];

  return (
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-7.5 py-3 h-[103px] flex w-full relative">
      <div className="flex items-center justify-between max-w-full w-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0" onClick={() => navigate('/')}>
          <img src={Logo} alt="logo Icon" className="w-8 h-8 sm:w-10 lg:w-11.5 sm:h-10 lg:h-11.5 cursor-pointer" />
        </div>

        {/* Search Bar - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex flex-1 max-w-[22.2%] ml-5 mr-auto relative">
          <div className="relative rounded-[4px] w-full" ref={searchContainerRef}>
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-[#667185]" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              className="w-full bg-[#F0F2F5] rounded-[4px] pl-9 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[13px] placeholder:text-[#647995]"
            />
            {/* Search Results Popup */}
            {dropdown && searchTerm && filteredResults.length > 0 && (
              <div ref={dropdownPopupRef} className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-[4px] mt-1 shadow-lg max-h-80 overflow-y-auto z-[999]">
                {filteredResults.map((result: any) => (
                  <div
                    key={result.vehicle_id}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => {
                      setSearchTerm(result.vehicle_info.v_name);
                      setIsSearchExpanded(false);
                      navigate('/search');
                    }}
                  >
                    <img
                      src={result.vehicle_info.image_thumbnail_url}
                      alt={result.vehicle_info.v_name}
                      className="w-12 h-12 object-cover mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium">{result.vehicle_info.v_name}</p>
                      <p className="text-xs text-gray-500">{result.supplier_info.name}</p>
                      <p className="text-xs text-gray-500">
                        {result.pricing_info.price} {result.pricing_info.currency}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {searchTerm && filteredResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-[4px] mt-1 shadow-lg p-4 z-50">
                <p className="text-sm text-gray-500">No results found</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search Icon - Only visible on mobile */}
        <div
          className={`md:hidden cursor-pointer group flex flex-col items-center absolute left-[15%] ${isSearchExpanded && 'hidden'
            }`}
          onClick={handleSearchIconClick}
        >
          <SearchIcon className="w-4.5 h-4.5 text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 m-2" />
        </div>

        {/* Mobile Expanded Search - Only visible when expanded */}
        <div
          ref={searchContainerRef}
          className={`md:hidden absolute left-4 right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${isSearchExpanded
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
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              className="w-full bg-[#F0F2F5] rounded-[4px] pl-9 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent placeholder:text-[13px] placeholder:text-[#647995]"
            />
            {/* Mobile Search Results Popup */}
            {dropdown && searchTerm && filteredResults.length > 0 && (
              <div ref={dropdownPopupRef} className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-[4px] mt-1 shadow-lg max-h-80 overflow-y-auto z-50">
                {filteredResults.map((result: any) => (
                  <div
                    key={result.vehicle_id}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => {
                      setSearchTerm(result.vehicle_info.v_name);
                      setIsSearchExpanded(false);
                      navigate('/search');
                    }}
                  >
                    <img
                      src={result.vehicle_info.image_thumbnail_url}
                      alt={result.vehicle_info.v_name}
                      className="w-12 h-12 object-cover mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium">{result.vehicle_info.v_name}</p>
                      <p className="text-xs text-gray-500">{result.supplier_info.name}</p>
                      <p className="text-xs text-gray-500">
                        {result.pricing_info.price} {result.pricing_info.currency}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {searchTerm && filteredResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-[4px] mt-1 shadow-lg p-4 z-50">
                <p className="text-sm text-gray-500">No results found</p>
              </div>
            )}
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
                    className={`w-4.5 h-4.5 transition-colors duration-200 ${item.active ? 'text-[#1D2433]' : 'text-[#667185] group-hover:text-[#1D2433]'
                      }`}
                  />
                </div>
                <span
                  className={`text-xs mt-[2.5px] transition-colors duration-200 ${item.active ? 'text-[#1D2433] font-medium' : 'text-gray-500 group-hover:text-[#1D2433]'
                    }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div
          className={`flex items-center gap-2 sm:gap-3 lg:gap-4 ml-2 sm:ml-4 lg:ml-5 -mt-1.5 transition-all duration-300 ease-in-out ${isSearchExpanded ? 'md:flex opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
            }`}
        >
          <div className="hidden lg:block bg-[#98A2B3] pl-[1px] h-full py-5 mr-1.5"></div>
          <button className="hidden sm:block bg-[#0D6EFD] text-white px-3 text-[10px] py-2 rounded-[4px] font-extralight hover:bg-blue-700 transition-colors duration-200">
            Subscribe
          </button>
          <div className="relative cursor-pointer group flex flex-col items-center">
            <BellIcon className="w-4.5 h-4.5 text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 m-2" />
            <span className="hidden sm:block text-xs text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 text-center mt-[2.5px]">
              Notification
            </span>
          </div>
          <div className="cursor-pointer group flex flex-col items-center">
            <CartIcon className="w-6 h-4.5 text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 m-2" />
            <span className="hidden sm:block text-xs text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 text-center mt-[2.5px]">
              Carts
            </span>
          </div>
          <div className="hidden sm:flex cursor-pointer group flex-col items-center">
            <PlusBoxIcon className="w-4.5 h-4.5 text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 m-2" />
            <span className="text-xs text-gray-500 group-hover:text-[#1D2433] transition-colors duration-200 block text-center mt-[2.5px]">
              Create
            </span>
          </div>
          <div className="flex items-center cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
              <img src={Pfp2} alt="User avatar" className="w-full h-full object-cover" />
            </div>
            <ChevronBottomIcon className="hidden sm:block w-3 h-auto text-[#667185] ml-3 -mr-2" />
          </div>
        </div>
      </div>
    </header>
  );
};