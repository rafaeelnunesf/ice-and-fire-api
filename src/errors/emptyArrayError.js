export function EmptyArrayError() {
  return {
    name: "EmptyArray",
    message: "You must pass id values in the array in the request body",
  };
}
