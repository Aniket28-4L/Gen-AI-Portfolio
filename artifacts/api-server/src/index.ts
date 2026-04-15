import app from "./app";
import { logger } from "./lib/logger";

const rawPort = process.env["PORT"];

const startingPort = rawPort ? Number(rawPort) : 3000;

if (Number.isNaN(startingPort) || startingPort <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const MAX_PORT_RETRIES = 20;

const listenOnPort = (port: number, retriesLeft: number) => {
  app.listen(port, (err) => {
    if (!err) {
      logger.info({ port }, "Server listening");
      return;
    }

    const isAddressInUse =
      typeof err === "object" &&
      err !== null &&
      "code" in err &&
      err.code === "EADDRINUSE";

    if (isAddressInUse && retriesLeft > 0) {
      const nextPort = port + 1;
      logger.warn(
        { port, nextPort },
        "Port in use, retrying on next port",
      );
      listenOnPort(nextPort, retriesLeft - 1);
      return;
    }

    logger.error({ err }, "Error listening on port");
    process.exit(1);
  });
};

listenOnPort(startingPort, MAX_PORT_RETRIES);
