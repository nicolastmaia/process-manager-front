import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import { AreaProvider } from '@/contexts/area-context';
import { UserProvider } from '@/contexts/user-context';
import { AreasGuard } from '@/components/auth/areas-guard';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <UserProvider>
            <AreaProvider>
              <AreasGuard>
                <ThemeProvider>{children}</ThemeProvider>
              </AreasGuard>
            </AreaProvider>
          </UserProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
