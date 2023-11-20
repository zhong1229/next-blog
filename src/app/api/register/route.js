import prisma from "@/utils/connect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return new NextResponse(
      JSON.stringify({ message: "参数错误!" }, { status: 400 })
    );
  }
  try {
    const exist = await prisma.user.findUnique({ where: { email } });
    if (exist) {
      return new NextResponse(
        JSON.stringify({ message: "用户已存在" }, { status: 400 })
      );
    }
    const HashPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: HashPassword,
      },
    });
    return new NextResponse(JSON.stringify(user, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.toString() }, { status: 400 })
    );
  }
};
