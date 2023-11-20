import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "服务器错误" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession(
    req.headers.get("authorization").split(" ")[1]
  );

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const category = await prisma.category.create({
      data: { ...body },
    });

    return new NextResponse(JSON.stringify(category, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: err }, { status: 500 }));
  }
};
