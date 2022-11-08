import test from "ava";
import {
  GeneratePassword,
  count,
  verify,
  defaultPasswordGeneratorOptions,
} from "../";

test("count", (t) => {
  const abc = "ABC";
  t.truthy(
    count(
      abc,
      Array.from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
    ) === 3
  );
});

test("it should pass with default options", (t) => {
  const pw = GeneratePassword();
  t.truthy(typeof pw === "string");
  t.truthy(verify(pw, defaultPasswordGeneratorOptions));
});
