module.exports = function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");
  response.status(200).json({
    country: request.headers["x-vercel-ip-country"] || "",
    region: request.headers["x-vercel-ip-country-region"] || "",
    city: request.headers["x-vercel-ip-city"] || ""
  });
};
