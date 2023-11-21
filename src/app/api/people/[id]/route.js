import { NextResponse } from "next/server";


export function GET() {
    return NextResponse.json("Hello from the id!" );
}
export function POST() {
    return NextResponse.json("Hello from the API!" );
}