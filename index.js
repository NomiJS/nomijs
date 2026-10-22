import { createServer } from "node:http";

export function createNomiServer(handler) {
  return createServer(handler);
}
