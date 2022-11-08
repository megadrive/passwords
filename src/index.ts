import { Animals as rawAnimals } from "./lib/animals";
import { Adjectives as rawAdjectives } from "./lib/adjectives";

export const defaultPasswordGeneratorOptions = {
  minLength: 14,
  minAlpha: 1,
  minNumeric: 1,
  minSymbols: 1,
  /** Alliterate the password. Example: AggrivatedAlligator */
  alliteration: true,
  dicts: {
    alpha: "ABCDEFGHIJKLOPQRSTUVWXYZ",
    numeric: "0123456789",
    symbol: "!@#$%^&*()_+-={}[]",
  },
};

type PasswordGeneratorOptions = typeof defaultPasswordGeneratorOptions;

function collateWords() {
  const parse = (s: string) => {
    return s.split(/\n/g).map((el) =>
      el
        .replace(/\(.+\)/g, "")
        .replace(/[^A-Za-z]/g, "")
        .trim()
    );
  };

  const animals = parse(rawAnimals);
  const adjectives = parse(rawAnimals);

  return { animals, adjectives };
}

function randomInArray(arr: unknown[]) {
  if (Array.isArray(arr) && typeof arr[0] === "string") {
    return arr[Math.floor(arr.length * Math.random())];
  }
  return arr[Math.floor(arr.length * Math.random())];
}

export function GeneratePassword(
  options: Partial<PasswordGeneratorOptions> = {}
): string {
  const resolvedOpts = Object.assign(defaultPasswordGeneratorOptions, options);
  const interim: string[] = [];

  const words = collateWords();

  const adjective = randomInArray(words.adjectives);
  let noun = randomInArray(words.animals);

  if (resolvedOpts.alliteration) {
    while (adjective[0].toLowerCase() !== noun[0].toLowerCase()) {
      noun = randomInArray(words.animals);
    }
  }

  interim.push(...[adjective, noun]);
  interim.push(randomInArray(Array.from(resolvedOpts.dicts.symbol)));
  interim.push(randomInArray(Array.from(resolvedOpts.dicts.numeric)));
  interim.push(randomInArray(Array.from(resolvedOpts.dicts.numeric)));
  interim.push(randomInArray(Array.from(resolvedOpts.dicts.numeric)));
  interim.push(randomInArray(Array.from(resolvedOpts.dicts.symbol)));

  const generated = interim.join("");

  if (!verify(generated, resolvedOpts)) {
    console.log(`${generated} not good, regenerating`);
    return GeneratePassword(resolvedOpts);
  }

  return generated;
}

export function count(str: string, dict: string[] | number[]) {
  const constructedRegex = new RegExp(`[${dict.join("")}]`, "g");
  return [...str.matchAll(constructedRegex)].map((e) => e[0]).length;
}

export function verify(password: string, options: PasswordGeneratorOptions) {
  if (password.length < options.minLength) {
    console.log("length");
    return false;
  }

  if (count(password, Array.from(options.dicts.alpha)) < options.minAlpha) {
    console.log("alpha");
    return false;
  }

  if (count(password, Array.from(options.dicts.numeric)) < options.minNumeric) {
    console.log("numeric");
    return false;
  }

  if (count(password, Array.from(options.dicts.symbol)) < options.minSymbols) {
    console.log("symbols");
    return false;
  }

  return true;
}

GeneratePassword();
