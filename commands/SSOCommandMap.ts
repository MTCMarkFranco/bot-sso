import { SSOCommand } from "./SSOCommand";
import { CallDownStreamAPI } from "./CallDownStreamAPI";


export const SSOCommands: SSOCommand[] = [
  new CallDownStreamAPI(),
];

export const SSOCommandMap: Map<string, SSOCommand> = new Map(
  SSOCommands.map((command) => [command.commandMessage, command])
);
