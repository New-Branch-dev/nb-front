"use client";

import { useServerInsertedHTML } from "next/navigation";
import { type PropsWithChildren,useState } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

type EmotionCacheWithFlush = ReturnType<typeof createCache> & {
  flush: () => string[];
};

function createEmotionCache(): EmotionCacheWithFlush {
  const cache = createCache({ key: "emotion" }) as EmotionCacheWithFlush;
  cache.compat = true;

  const prevInsert = cache.insert;
  let inserted: string[] = [];

  cache.insert = (...args) => {
    const serialized = args[1];

    if (cache.inserted[serialized.name] === undefined) {
      inserted.push(serialized.name);
    }

    return prevInsert(...args);
  };

  cache.flush = () => {
    const prevInserted = inserted;
    inserted = [];
    return prevInserted;
  };

  return cache;
}

export function EmotionRegistry({ children }: PropsWithChildren) {
  const [cache] = useState(createEmotionCache);

  useServerInsertedHTML(() => {
    const names = cache.flush();

    if (names.length === 0) {
      return null;
    }

    let styles = "";

    for (const name of names) {
      const style = cache.inserted[name];

      if (typeof style === "string") {
        styles += style;
      }
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
