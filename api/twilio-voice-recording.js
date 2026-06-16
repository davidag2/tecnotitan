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

  console.info("tecnotitan_twilio_voice_recording", JSON.stringify({
    callSid: request.body?.CallSid || "unknown",
    recordingSid: request.body?.RecordingSid || "unknown",
    recordingDuration: request.body?.RecordingDuration || "unknown"
  }));

  response.setHeader("Content-Type", "text/xml; charset=utf-8");
  return response.status(200).send(
    twiml(`
      ${say("Thank you. Your message has been received. The Tecnotitan team will review it. Goodbye.")}
      <Hangup/>
    `)
  );
};
