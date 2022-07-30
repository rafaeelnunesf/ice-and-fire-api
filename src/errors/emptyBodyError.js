export function EmptyBodyError() {
  return {
    name: "EmptyBody",
    message: "You must pass an array in the request body",
  };
}
