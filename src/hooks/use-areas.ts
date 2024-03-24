import * as React from 'react';

import type { AreaContextValue } from '@/contexts/area-context';
import { AreaContext } from '@/contexts/area-context';

export function useAreas(): AreaContextValue {
  const context = React.useContext(AreaContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
