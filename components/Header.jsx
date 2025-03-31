import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className="fixed top-0">
        <nav>
            <Link href="/">
                <Image/>
            </Link>
          
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant={"outline"}>
                <LayoutDashboard size={18}/>
                <span>Dashboard</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
              <SignInButton forceRedirectUrl={"/dashboard"} />
              <SignUpButton />
          </SignedOut>
          <SignedIn>
              <UserButton />
          </SignedIn>
        </nav>
    </div>
  )
}

export default Header
