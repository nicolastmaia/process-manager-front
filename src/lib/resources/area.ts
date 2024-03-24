'use client';

import type { Area } from '@/types/area';

import { axiosClient } from '../axios-client';

class AreaClient {
  async getAreas(): Promise<{ data?: any | null; error?: string }> {
    // Make API request

    const areas = await axiosClient.get('/areas');

    return { data: areas };
  }
}

export const areaClient = new AreaClient();
