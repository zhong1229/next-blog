import { getAuthSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getAuthSession(
    req.headers.get("authorization").split(" ")[1]
  );

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "令牌过期!" }, { status: 401 })
    );
  }

  return new NextResponse(
    JSON.stringify({ user: session.user }, { status: 200 })
  );
};
