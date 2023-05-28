import jwt from "jsonwebtoken";

export default (req, res) => {
  //res.send("Hello World!");
  if (req.body.password === process.env.PASSWORD) {
    const token = jwt.sign(
      {
        userId: 1,
      },
      process.env.SECRET
    );

    res.json({
      token: token,
    });
  } else {
    res.status("401").send("Wrong password!");
  }
};
