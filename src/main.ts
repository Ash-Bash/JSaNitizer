import { Sanitizer } from './classes/Sanitizer';
import { Validator } from './classes/Validator';
import { Optimizer } from './classes/Optimizer';
import { Locator } from './classes/Locator';

abstract class IJSaNitizer {
    abstract Validator() : Validator;
    abstract Locator() : Locator;
    abstract Sanitizer() : Sanitizer;
    abstract Optimizer() : Optimizer;
}

export class JSaNitizer extends IJSaNitizer {

    Validator(): Validator {
        return new Validator();
    }

    Locator(): Locator {
        return new Locator();
    }

    Sanitizer(): Sanitizer {
        return new Sanitizer();
    }

    Optimizer(): Optimizer {
        return new Optimizer();
    }
}