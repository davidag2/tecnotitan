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

  const digits = String(request.body?.Digits || request.query?.Digits || "");
  let body = "";

  if (digits === "1") {
    body = `
      ${say("Investor information. Visit www dot tecnotitan dot com slash en slash investors to review the company vision, products, and investor path. You can also email info at tecnotitan dot com.")}
      <Pause length="1"/>
      ${say("Thank you for your interest in Tecnotitan.")}
      <Hangup/>
    `;
  } else if (digits === "2") {
    body = `
      ${say("Tecnotitan products include Copiloto PyME for small and medium businesses, TitanOS, a voice-first agentic operating system, Life Copilot, a personal AI mobile companion, Tecnotitan Engine for interactive experiences, Academia Tecnotitan, and Call Center AI Tecnotitan.")}
      <Pause length="1"/>
      ${say("To learn more, visit www dot tecnotitan dot com slash en slash products.")}
      <Hangup/>
    `;
  } else if (digits === "3") {
    body = `
      ${say("Please leave a short message after the tone. Include your name, company, email address, and investment interest.")}
      <Record action="${SITE_URL}/api/twilio-voice-recording" method="POST" maxLength="90" playBeep="true" trim="trim-silence"/>
      ${say("We did not receive a recording. Thank you for calling Tecnotitan.")}
      <Hangup/>
    `;
  } else {
    body = `
      ${say("That option was not recognized.")}
      <Redirect method="POST">${SITE_URL}/api/twilio-voice</Redirect>
    `;
  }

  response.setHeader("Content-Type", "text/xml; charset=utf-8");
  return response.status(200).send(twiml(body));
};
