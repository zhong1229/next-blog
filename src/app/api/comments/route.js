import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");
  // console.log(postSlug);
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug: parseInt(postSlug) }),
      },
      orderBy: {
        createdAt: "desc",
      },
      include: { post: true },
    });
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "服务器错误" }, { status: 500 })
    );
  }
};

// CREATE A COMMENT
export const POST = async (req) => {
  const randomInteger = Math.floor(Math.random() * 10) + 1;

  try {
    const body = await req.json();
    const { name, desc, userEmail } = body;
    if (!name || !desc || !userEmail) {
      return new NextResponse(
        JSON.stringify({ message: "评论失败" }, { status: 500 })
      );
    }

    const comment = await prisma.comment.create({
      data: { ...body, img: `/avatar/${randomInteger}.png` },
    });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "服务器错误" }, { status: 500 })
    );
  }
};
//
