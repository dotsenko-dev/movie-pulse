import { AccountType, IAccountSchema } from "@/schemas/IAccount";
import { unstable_cache } from "next/cache";
import { axiosInstance } from "../instance";
import { API_ENDPOINT } from "@/constants/api-endpoints";

export const accountService = {
  getAccount: unstable_cache(
    async (): Promise<AccountType> => {
      const response = await axiosInstance.get<AccountType>(
        API_ENDPOINT.ACCOUNT,
      );

      return IAccountSchema.parse(response.data);
    },
    ["account"],
    {
      revalidate: 3600,
    },
  ),
};
