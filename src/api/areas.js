import { stageApi } from './base';

const areaApi = {
  getAll: async () => {
    try {
      const response = await stageApi.get('/areas');
      const areas = response.data;
      return areas;
    } catch (error) {
      return [];
    }
  },

  getOne: async (id) => {
    const response = await stageApi.get();
    return response.data;
  },

  createInterest: async (areaId) => {
    await stageApi.post(`/areas/findOne/${areaId}`, {});
  },

  removeInterest: async (areaId) => {
    await stageApi.delete(`/areas/${areaId}`, {});
  },

  post: async (area) => {},
  edit: async (id, newData) => {},
  remove: async (id) => {},
};

export default areaApi;
