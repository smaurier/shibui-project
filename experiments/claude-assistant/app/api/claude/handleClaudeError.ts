import { NextResponse } from "next/server";

export async function handleClaudeError(
  response: Response
): Promise<NextResponse> {
  const errorText = await response.text();

  try {
    const errorData = JSON.parse(errorText);
    const message =
      errorData.error?.message ||
      errorData.error?.type ||
      JSON.stringify(errorData);

    return NextResponse.json(
      { reply: `Erreur API: ${message}` },
      { status: 500 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        reply: `Erreur API avec code ${response.status}: ${errorText.slice(
          0,
          100
        )}...`,
      },
      { status: 500 }
    );
  }
}
