import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(
      { products, message: "Successful!" },
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
    const res = await prisma.product.create({ data: body });

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
    const foundProduct = await prisma.product.update({
      where: { id: body.id },
      data: body,
    });

    return NextResponse.json(
      { product: foundProduct, message: "Updation successful!" },
      { status: 202 }
    );
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
    const params = req.nextUrl.searchParams;
    await prisma.product.delete({ where: { id: Number(params.get("id")) } });
    return NextResponse.json(
      { message: "Deletion successful!" },
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
