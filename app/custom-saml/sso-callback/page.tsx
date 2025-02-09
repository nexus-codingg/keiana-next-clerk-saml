import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'

export default function Page() {
  // Handle the redirect flow by rendering the
  // prebuilt AuthenticateWithRedirectCallback component.
  // This is the final step in the custom Enterprise SSO flow.
  return <AuthenticateWithRedirectCallback />
}