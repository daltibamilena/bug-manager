const bugs_to_resolve = (req, res) => {
  let bugs = req.body.bugs;

  res.send(bugs.filter(({ prioridade, idade }) => prioridade === "critico" || idade === 3));
};

exports.bugs_to_resolve = bugs_to_resolve;
