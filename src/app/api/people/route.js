import { NextResponse } from "next/server";
import { conn } from "@/libs/bd.js";

export async function GET() {
    const result = await conn.query('SELECT NOW()')
    console.log(result)
    return NextResponse.json("Hello from the API!");
}

export async function POST(request) {

    const { username, password, email } = await request.json();

    const result = await conn.query('INSERT INTO users SET ?', {
        username,
        password,
        email
    });
    console.log(result)

    return NextResponse.json("Hello from the API!");
}

export function PUT() {
    return NextResponse.json("Hello from the id!");
}

export function DELETE() {
    return NextResponse.json("Hello from the API!");
}

