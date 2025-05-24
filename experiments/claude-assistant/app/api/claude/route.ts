import { buildPrompt } from "@/app/lib/prompt";
import { NextRequest, NextResponse } from "next/server";
import { callClaude } from "./callClaude";
import { handleClaudeError } from "./handleClaudeError";
import { parseClaudeResponse } from "@/app/lib/claude";

export async function POST(request: NextRequest) {
  const { message } = await request.json();
  const prompt = buildPrompt(message);
  const response = await callClaude(prompt);

  if (!response.ok) {
    return handleClaudeError(response);
  }

  const data = await response.json();
  const reply = parseClaudeResponse(data);

  return NextResponse.json({ reply });
}
