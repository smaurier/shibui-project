export type ClaudeMessage = { text: string };

export type ClaudeResponse =
  | { content: ClaudeMessage[] }
  | { completion: string }
  | { error: { message?: string } };
