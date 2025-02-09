import { UserDetails } from "../../components/user-details";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { CodeSwitcher } from "../../components/code-switcher";

export default async function SAMLPage() {
  return (
    <>
      <main className="max-w-[75rem] w-full mx-auto">
        <div className="grid grid-cols-[1fr_20.5rem] gap-10 pb-10">
          <div>
            <header className="flex items-center justify-between w-full h-16 gap-4">
              <div className="flex gap-4">
                <div aria-hidden className="w-px h-6 bg-[#C7C7C8]" />
                <h1> You signed in with a SAML Connection </h1>
                <div aria-hidden className="w-px h-6 bg-[#C7C7C8]" />
              </div>
              <div className="flex items-center gap-2">
                <OrganizationSwitcher
                  appearance={{
                    elements: {
                      organizationPreviewAvatarBox: "size-6",
                    },
                  }}
                />
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "size-6",
                    },
                  }}
                />
              </div>
            </header>
            <UserDetails />
          </div>
          <div className="pt-[3.5rem]">
            <CodeSwitcher />
          </div>
        </div>
      </main>
    </>
  );
}
