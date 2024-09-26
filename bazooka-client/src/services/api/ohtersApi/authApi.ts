import { apiSlice } from '../rootApi/apiSlice';

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    generateTonProof: builder.mutation({
      query: () => {
        const url = `/auth/generate-verification-payload`;
        const method = 'POST';

        return {
          url,
          method,
        };
      },
    }),

    checkTonProof: builder.mutation({
      query: (body) => {
        const url = `/auth/verify_address`;
        const method = 'POST';

        return {
          url,
          method,
          body
        };
      },
    }),
  }),
});

export const { useGenerateTonProofMutation, useCheckTonProofMutation } = authApi;
