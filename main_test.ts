import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";

import * as Effect from "npm:@effect/io/Effect";

Deno.test("running an Effect", async () => {
  const result = await Effect.runPromise(
    Effect.promise(() => Promise.resolve("success"))
  );

  assertEquals(result, "success");
});
