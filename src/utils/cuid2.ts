import { init } from "@paralleldrive/cuid2";

export function generateCuid2ID(options?: { length?: number }) {
  const createId = init({
    length: options?.length ?? 10,
  });

  return createId();
}
