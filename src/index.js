export default function checkStatus(response) {
  const { status, statusText } = response;

  if (status >= 200 && status < 300) return response;

  const error = new Error(statusText);
  error.response = response;
  throw error;
}
