const bugs_to_resolve = (req, res) => {
  let bugs = req.body.bugs;

  res.send(
    bugs.filter(
      ({ prioridade, idade }) => prioridade === "critico" || idade === 3
    )
  );
};

const assign_bugs = (req, res) => {
  let bugs = req.body.bugs;
  let maxValue = 8;
  let result = bugs.reduce((r, o) => {
    const temp = r.find(
      (a) =>
        a.reduce((e, { estimativa }) => e + estimativa, 0) + o.estimativa <= maxValue);
    if (temp) temp.push(o);
    else r.push([o]);
    return r;
  }, []);

  
  res.send(result);
};

exports.bugs_to_resolve = bugs_to_resolve;
exports.assign_bugs = assign_bugs;
