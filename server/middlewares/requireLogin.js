module.exports = (req, res, next) => {
  //next is the callback
  if (!req.user) {
    return res.status(401).send({ error: "You must log in" });
  }
  next();
};
