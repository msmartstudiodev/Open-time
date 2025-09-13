export default function handler(request, response) {
  const currentTime = new Date();

  response.status(200).json({
    time: currentTime.toISOString(),
    timezone: 'IST',
  });
}
