function whatIsInAName(collection, source) {
  return collection.filter((o) =>
    Object.keys(source).every((k) => o[k] == source[k])
  );
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
