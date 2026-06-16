const SITE_URL = "https://www.tecnotitan.com";

function twiml(body) {
  return `<?xml version="1.0" encoding="UTF-8"?><Response>${body}</Response>`;
}

function say(text) {
  return `<Say voice="alice" language="en-US">${text}</Say>`;
}

module.exports = async function handler(request, response) {
  if (!["GET", "POST"].includes(request.method)) {
    response.setHeader("Allow", "GET, POST");
    return response.status(405).send("Method not allowed");
  }

  const intro = [
    "Welcome to Tecnotitan.",
    "We are a technology company building enterprise software, artificial intelligence systems, robotics, video games, and agentic products for global markets.",
    "Tecnotitan is building the future from Latin America, with a vision for investors, companies, and partners around the world.",
    "Join us as an investor on this exciting road."
  ].join(" ");

  const menu = [
    "Press 1 to hear investor contact information.",
    "Press 2 to hear a short overview of Tecnotitan products.",
    "Press 3 to leave a message for the Tecnotitan team."
  ].join(" ");

  response.setHeader("Content-Type", "text/xml; charset=utf-8");
  return response.status(200).send(
    twiml(`
      ${say(intro)}
      <Pause length="1"/>
      <Gather numDigits="1" action="${SITE_URL}/api/twilio-voice-menu" method="POST" timeout="7">
        ${say(menu)}
      </Gather>
      ${say("We did not receive a selection. For investor information, please visit www dot tecnotitan dot com slash en slash investors, or email info at tecnotitan dot com. Thank you for calling Tecnotitan.")}
      <Hangup/>
    `)
  );
};
