import jwt from "jsonwebtoken";

export default (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    response.status(401).send("invalid credentials");
  } else {
    const token = authHeader.split(" ")[1];
    console.log(process.env.SECRED);
    jwt.verify(token, process.env.SECRET, (error, decode) => {
      if (error) {
        response.status(403).send("invalid credentials");
      } else {
        next();
      }
    });
  }
};