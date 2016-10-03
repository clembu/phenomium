//@flow

module.exports = function (
  {
  frontMatter: GrayMatterResult,
  result: PhenomicCollectionItem,
  options: PhenomicLoaderOptions,
  }
) => {
  console.log(options.pathToMetadata.paths.map((string) => {
    var keys = [];
    pathToRegexp(string, keys);
    return keys;
  }
  ));
  return {
    ...result,

  }
}
// TODO: ask for support for es6 in plugins (or location)
