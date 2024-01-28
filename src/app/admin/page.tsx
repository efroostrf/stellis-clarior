import { notFound } from "next/navigation";
import { FC } from "react";

import { isAdminAction } from "../_actions/auth/isAdmin";

const AdminPage: FC = async () => {
  const isAdmin = await isAdminAction();

  if (!isAdmin) {
    return notFound();
  }

  return <></>;
};

export default AdminPage;
