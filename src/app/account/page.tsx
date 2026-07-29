import { AccountInfo } from "@/components/account-info/AccountInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account | Movies App",
  description: "User profile information in Movies App",
};

const AccountPage = () => {
  return <AccountInfo />;
};

export default AccountPage;
