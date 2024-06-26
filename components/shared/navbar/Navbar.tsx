import { SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Theme from './Theme';
import MobileNav from './MobileNav';
import GlobalSearch from '../search/GlobalSearch';

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1">
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      {/* Global Search */}
      <GlobalSearch />

      <div className="flex-between gap-5">
        {/* Theme */}
        <Theme />
        
        {/* User */}
        <SignedIn>
          <UserButton afterSignOutUrl="/"appearance={{elements: { avatarBox: 'h-10 w-10' },variables: {colorPrimary: '#ff7000'}}}/>
        </SignedIn>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
