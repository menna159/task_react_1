import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const petApi = createApi({
  reducerPath: 'petApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://pets-v2.dev-apis.com'}),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id) => ({url: 'pets', params: {id}}),
      transformResponse: (response) => response.pets[0],
    }),
    getBreed: builder.query({
      query: (animal) => ({url: 'breeds', params: {animal}}),
      transformResponse: (response) => response.breeds,
    }),
  }),
});
export const {useGetPetQuery,useGetBreedQuery}=petApi;
