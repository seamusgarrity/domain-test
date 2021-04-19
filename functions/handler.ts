export async function test(event) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "HEllO",
      event: event,
    }),
  };

  return response;
}
