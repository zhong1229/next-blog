import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug: parseInt(slug) },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
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

    const post = await prisma.post.update({
      where: { slug: parseInt(slug) },
      data,
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "文章更新失败", error }, { status: 500 })
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
    await prisma.comment.deleteMany({
      where: { postSlug: parseInt(slug) },
    });

    const post = await prisma.post.delete({ where: { slug: parseInt(slug) } });

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "文章删除失败" }, { status: 500 })
      );
    }
    return new NextResponse(
      JSON.stringify({ message: "文章删除成功" }, { status: 200 })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "文章删除失败", error }, { status: 500 })
    );
  }
};
