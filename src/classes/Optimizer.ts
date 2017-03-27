
abstract class IOptimizer {
  abstract OptimizeJSONFile(filename: string) : Object;
  abstract OptimizeJSONObject(json: Object) : Object;
}

export class Optimizer extends IOptimizer {

    OptimizeJSONFile(filename: string): Object {
        return 'Hello, World';
    }

    OptimizeJSONObject(json: Object): Object {
        return 'Hello, World'
    }
}