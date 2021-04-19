export async function test(event) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      event: event,
    }),
  };

  return response;
}
