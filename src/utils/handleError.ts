import toast from "react-hot-toast";

export function handleError(error: unknown) {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An error has occured";
  }

  return toast.error(message);
}
