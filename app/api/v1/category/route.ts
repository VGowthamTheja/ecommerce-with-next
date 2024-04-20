import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(
      { categories, message: "Successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Something went wrong! Please check the report logs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await prisma.category.create({ data: body });

    return NextResponse.json(
      { product: res, message: "Creation successful" },
      { status: 201 }
    );
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Something went wrong! Please check the report logs" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    return NextResponse.json({ body });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Something went wrong! Please check the report logs" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    return NextResponse.json({ body });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      { message: "Something went wrong! Please check the report logs" },
      { status: 500 }
    );
  }
}
