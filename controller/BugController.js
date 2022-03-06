const bugs_to_resolve = (req, res) => {
  bugs = req.body.bugs;
  res.send(bugs)
};

exports.bugs_to_resolve = bugs_to_resolve;
