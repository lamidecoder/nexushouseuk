import { NextResponse } from "next/server";

/**
 * Stub endpoint: validates the payload and returns success. No email/CRM
 * provider is wired up yet. Plug in Resend/SendGrid/HubSpot etc. here
 * before launch. Deliberately not fabricating a "sent" integration.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.message !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  if (!body.message.trim() || !/^\S+@\S+\.\S+$/.test(body.email)) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  console.log("[contact] new inquiry", {
    market: body.market,
    projectType: body.projectType,
    email: body.email,
    name: body.name,
    heardFrom: body.heardFrom,
    updates: Boolean(body.updates),
  });

  return NextResponse.json({ ok: true });
}
