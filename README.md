# NomiJS

A JavaScript backend framework.

NomiJS is in early development.

## Initial API

```js
import { createNomiServer } from "nomijs";

const server = createNomiServer((req, res) => {
  res.end("Hello from NomiJS!");
});

server.listen(3000);
```

## Status

Early development. Public framework releases are not yet available.

Website: https://nomijs.com
