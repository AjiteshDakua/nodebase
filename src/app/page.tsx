import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const page = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className="min-h-screen min-w-screeen flex items-center justify-center ">
      {JSON.stringify(users)}
    </div>
  );
};

export default page;
