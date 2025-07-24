import Server from "@rikaaa0928/llms";

export const createServer = (config: any): Server => {
  const server = new Server(config);
  return server;
};
