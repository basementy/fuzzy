export function fuzzy(items: Record<string, string>[], key: string) {
  return function (query: string) {
    var words = query.toLowerCase().split(' ');

    return items.filter(function (item) {
      var normalizedTerm = item[key].toLowerCase();

      return words.every(function (word) {
        return (normalizedTerm.indexOf(word) > -1);
      });
    });
  };
};
