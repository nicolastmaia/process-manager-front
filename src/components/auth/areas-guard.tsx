'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Alert from '@mui/material/Alert';

import { paths } from '@/paths';
import { logger } from '@/lib/default-logger';
import { useAreas } from '@/hooks/use-areas';
import { useUser } from '@/hooks/use-user';

export interface AreasGuardProps {
  children: React.ReactNode;
}

export function AreasGuard({ children }: AreasGuardProps): React.JSX.Element | null {
  const router = useRouter();
  const { areas, error, isLoading } = useAreas();
  const [isChecking, setIsChecking] = React.useState<boolean>(true);

  React.useEffect(() => {
    checkPermissions().catch(() => {
      // noop
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, [areas, error, isLoading]);

  if (error) {
    return <Alert color="error">{error}</Alert>;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
