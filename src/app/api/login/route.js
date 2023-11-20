import { generateToken } from "@/utils/auth";
import prisma from "@/utils/connect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { email, password } = await req.json();
  if (!email || !password) {
    return new NextResponse(
      JSON.stringify({ message: "邮箱或密码不能为空" }, { status: 400 })
    );
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "用户不存在" }, { status: 400 })
      );
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      return new NextResponse(
        JSON.stringify({ message: "用户密码错误" }, { status: 400 })
      );
    }

    const access_token = generateToken(user);

    return new NextResponse(
      JSON.stringify({ user, access_token }, { status: 200 })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: error.toString() }, { status: 400 })
    );
  }
};
