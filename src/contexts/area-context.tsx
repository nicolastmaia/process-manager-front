'use client';

import * as React from 'react';

import { Area } from '@/types/area';
import { logger } from '@/lib/default-logger';
import { areaClient } from '@/lib/resources/area';

export interface AreaContextValue {
  areas: any | null;
  error: string | null;
  isLoading: boolean;
  fetchAreas?: () => Promise<void>;
}

export const AreaContext = React.createContext<AreaContextValue | undefined>(undefined);

export interface AreaProviderProps {
  children: React.ReactNode;
}

export function AreaProvider({ children }: AreaProviderProps): React.JSX.Element {
  const [state, setState] = React.useState<{ areas: any | null; error: string | null; isLoading: boolean }>({
    areas: null,
    error: null,
    isLoading: true,
  });

  const fetchAreas = React.useCallback(async (): Promise<void> => {
    try {
      const { data, error } = await areaClient.getAreas();

      if (error) {
        logger.error(error);
        setState((prev) => ({ ...prev, areas: null, error: 'Something went wrong', isLoading: false }));
        return;
      }

      setState((prev) => ({ ...prev, areas: data ?? null, error: null, isLoading: false }));
    } catch (err) {
      logger.error(err);
      setState((prev) => ({ ...prev, areas: null, error: 'Something went wrong', isLoading: false }));
    }
  }, []);

  React.useEffect(() => {
    fetchAreas().catch((err) => {
      logger.error(err);
      // noop
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, []);

  return <AreaContext.Provider value={{ ...state, fetchAreas }}>{children}</AreaContext.Provider>;
}

export const AreaConsumer = AreaContext.Consumer;
