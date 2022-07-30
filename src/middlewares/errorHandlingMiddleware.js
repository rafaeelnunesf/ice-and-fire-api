import httpStatus from "http-status";

export function handleApplicationErrors(err, _req, res, _next) {
  if (err.name === "EmptyBody") {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  console.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}
