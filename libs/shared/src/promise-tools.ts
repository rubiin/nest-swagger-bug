export function ack(p) {
  return p.then((res) => [null, res]).catch((err) => [err, null]);
}
