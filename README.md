# Issue Description

## Problem:

When using multiple SAML connections in Clerk (e.g., one for `gmail.com` and another for `drafteq.com`), users are being redirected to the same Identity Provider (IdP) instead of their respective IdP based on their email domain.

### Expected Behavior:

- Users with an email domain `gmail.com` should be redirected to the IdP configured for `gmail.com`.
- Users with an email domain `drafteq.com` should be redirected to the IdP configured for `drafteq.com`.

### Actual Behavior:

- Regardless of the email domain entered, users are always redirected to the IdP configured for `gmail.com`.
- The expected domain-based routing for IdP selection is not functioning correctly.

## Steps to Reproduce:

1. Attempt to log in using an email with the domain `gmail.com`.
2. Attempt to log in using an email with the domain `drafteq.com`.
3. Observe that the user is redirected to the IdP configured for `gmail.com` instead of the expected IdP for `drafteq.com`.

## Notes:

- The issue does not lie in redirection to the IdP itself but rather in the incorrect selection of the IdP based on email domain.
- Clerk’s documentation does not specify additional configurations required to enforce domain-based IdP selection.
