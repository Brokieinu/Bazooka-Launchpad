import { apiSlice } from '../rootApi/apiSlice';

const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: (status: any) => {
        const url = status ? `/project/all?status=${status}` : `/project/all`;
        const method = 'GET';

        return {
          url,
          method,
        };
      },
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
