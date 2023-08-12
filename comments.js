//create web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/numbers/add") {
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;
    const x = parseInt(query.x);
    const y = parseInt(query.y);
    const sum = x + y;
    res.write(`Sum of ${x} and ${y} is ${sum}`);
    res.end();
  }
  if (req.url === "/api/numbers/prime") {
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;
    const n = parseInt(query.number);
    let prime = true;
    if (n <= 1) {
        prime = false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i == 0) prime = false;
      }
      prime = true;

    res.write(`${n} is prime number: ${prime}`);
    res.end();
  }
});