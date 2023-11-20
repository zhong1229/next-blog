import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

export const DELETE = async (req, { params }) => {
  const { id } = params;

  const session = await getAuthSession(
    req.headers.get("authorization").split(" ")[1]
  );

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "令牌过期!" }, { status: 401 })
    );
  }

  try {
    const comment = await prisma.comment.delete({ where: { id } });

    if (!comment) {
      return new NextResponse(
        JSON.stringify({ message: "删除失败", error }, { status: 500 })
      );
    }
    return new NextResponse(
      JSON.stringify({ message: "删除成功" }, { status: 200 })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "删除失败", error }, { status: 500 })
    );
  }
};
