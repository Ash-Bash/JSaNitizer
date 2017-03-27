
export class Validator {

  constructor() {
    
  }

  static IsJSONFileSafe(filename: String) : boolean {
    return false;
  }

  static IsJSONObjectSafe(json: Object) : boolean {
    return false;
  }

  static CheckJSONFile(filename: String) {
    if (this.IsJSONFileSafe(filename) == true) {
      return 'JSON File is Safe to Use';
    }
    else {
      return 'JSON File is NOT Safe to Use';
    }
  }

  static CheckJSONObject(json: Object) {
    if (this.IsJSONObjectSafe(json) == true) {
      return 'JSON Object is Safe to Use';
    }
    else {
      return 'JSON Object is NOT Safe to Use';
    }
  }

  static doesJSONFileContainStrings(filename: String) : boolean  {
    return false;
  }

  static doesJSONObjectContainStrings(json: Object) : boolean  {
    return false;
  }

  static doesJSONFileContainInts(filename: String) : boolean  {
    return false;
  }

  static doesJSONObjectContainInts(json: Object) : boolean  {
    return false;
  }

  static doesJSONFileContainFloats(filename: String) : boolean  {
    return false;
  }

  static doesJSONObjectContainFloats(json: Object) : boolean  {
    return false;
  }

  static doesJSONFileContainArrays(filename: String) : boolean  {
    return false;
  }

  static doesJSONObjectContainArrays(json: Object) : boolean  {
    return false;
  }

  static doesJSONFileContainObjects(filename: String) : boolean  {
    return false;
  }

  static doesJSONObjectContainObjects(json: Object) : boolean  {
    return false;
  }

  static doesJSONFileContainFunctions(filename: String) : boolean  {
    return false;
  }

  static doesJSONObjectContainFunctions(json: Object) : boolean  {
    return false;
  }

  static doesJSONFileContainNulls(filename: String) : boolean {
    return false;
  }

  static doesJSONObjectContainNulls(json: Object) : boolean  {
    return false;
  }

  static doesJSONItemContainString(json: Object, key: String) : boolean {
    if (typeof json == 'string') {
      return true;
    }
    else {
      return false;
    }
  }

  static doesJSONItemContainInt(json: Object, key: String) : boolean {
    return false;
  }

  static doesJSONItemContainFloat(json: Object, key: String) : boolean {
    return false;
  }

  static doesJSONItemContainArray(json: Object, key: String) : boolean {
    return false;
  }

  static doesJSONItemContainObject(json: Object, key: String) : boolean {
    return false;
  }

  static doesJSONItemContainFunction(json: Object, key: String) : boolean {
    return false;
  }

  static doesJSONItemContainNull(json: Object, key: String) : boolean {
    return false;
  }
}