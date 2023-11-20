import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const category = await prisma.category.findUnique({
      where: { slug: slug },
    });

    return new NextResponse(JSON.stringify(category, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "服务器错误" }, { status: 500 })
    );
  }
};

export const PUT = async (req, { params }) => {
  const { slug } = params;
  const session = await getAuthSession(
    req.headers.get("authorization").split(" ")[1]
  );

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "令牌过期!" }, { status: 401 })
    );
  }

  try {
    const data = await req.json();

    const category = await prisma.category.update({
      where: { slug: slug },
      data,
    });

    return new NextResponse(JSON.stringify(category, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "更新失败", error }, { status: 500 })
    );
  }
};

export const DELETE = async (req, { params }) => {
  const { slug } = params;

  const session = await getAuthSession(
    req.headers.get("authorization").split(" ")[1]
  );

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "令牌过期!" }, { status: 401 })
    );
  }

  try {
    const category = await prisma.category.delete({ where: { slug } });

    if (!category) {
      return new NextResponse(
        JSON.stringify({ message: "删除失败", error }, { status: 500 })
      );
    }
    return new NextResponse(JSON.stringify(category, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "删除失败", error }, { status: 500 })
    );
  }
};
