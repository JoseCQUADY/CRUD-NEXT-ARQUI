import { NextResponse } from "next/server";


export function GET() {
    return NextResponse.json("Hello from the API!" );
}

export function POST() {
    return NextResponse.json("Hello from the API!" );
}

export function PUT() {
    return NextResponse.json("Hello from the id!" );
}

export function DELETE() {
    return NextResponse.json("Hello from the API!" );
}