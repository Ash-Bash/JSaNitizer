var testJson = {

}

describe('JSaNitizer 1.x JavaScript Library', function () {
  it('is contained within JSaNitizer as CommonJS', function () {
    expect(JSaNitizer).to.be.an('object');
    expect(JSaNitizer).to.not.be.null;
  });

  // JSaNitizer Functions / API's
  it('can be instantiated: JSaNitizer Class', function () {
    expect(JSaNitizer).to.be.defined;
  });

  // Validator Functions / API's
  it('can be instantiated: JSaNitizer.Validator() Class Function', function () {
    expect(JSaNitizer.Validator).to.be.defined;
  });

  // Locator Functions / API's
  it('can be instantiated: JSaNitizer.Locator() Class Function', function () {
    expect(JSaNitizer.Locator).to.be.defined;
  });

  // Optimizer Functions / API's
  it('can be instantiated: JSaNitizer.Optimizer() Class Function', function () {
    expect(JSaNitizer.Optimizer).to.be.defined;
  });

  it('can be instantiated: JSaNitizer.Optimizer().OptimizeJSONFile(filename: string) Class Function', function () {
    expect(JSaNitizer.Optimizer.OptimizeJSONFile('test.json')).to.be.defined;
  });

  it('can be instantiated: JSaNitizer.Optimizer().OptimizeJSONObject(json: Object) Class Function', function () {
    expect(JSaNitizer.Optimizer.OptimizeJSONObject(testJson)).to.be.defined;
  });

  // Sanitizer Functions / API's
  it('can be instantiated: JSaNitizer.Sanitizer() Class Function', function () {
    expect(JSaNitizer.Sanitizer).to.be.defined;
  });

  it('can be instantiated: JSaNitizer.Sanitizer().removeAllItemsInJSONFile(filename: string) Class Function', function () {
    //var jx = new JSaNitizer();
    expect(JSaNitizer.Sanitizer.removeAllItemsInJSONFile('test.json')).to.be.defined;
  });
});

console.log(JSaNitizer.Optimizer.OptimizeJSONObject(testJson));
