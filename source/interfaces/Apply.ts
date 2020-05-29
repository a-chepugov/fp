import {Functor} from './Functor';

export {Functor} from './Functor';

export interface Apply<A> extends Functor<A> {
    // ap :: Apply f => f a ~> f (a -> b) -> f b
    ap<B>(other: Apply<(a: A) => B>): Apply<B>
}

export default Apply;
