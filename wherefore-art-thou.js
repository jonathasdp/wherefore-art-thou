function whatIsInAName(collection, source) {
  return collection.filter((o) =>
    Object.keys(source).every((k) => o[k] == source[k])
  );
}
