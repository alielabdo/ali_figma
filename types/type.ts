
export enum CursorMode {
  Hidden,
  Chat,
  ReactionSelector,
  Reaction,
}

export type CursorState =
| {
    mode: CursorMode.Hidden;
  }
| {
    mode: CursorMode.Chat;
    message: string;
    previousMessage: string | null;
  }
| {
    mode: CursorMode.ReactionSelector;
  }
| {
    mode: CursorMode.Reaction;
    reaction: string;
    isPressed: boolean;
  };
