import Applicative from "../../interfaces/Applicative";
import Traversable from "../../interfaces/Traversable";

export default function traverse<A, B>(applicativeTypeRep: { of: (value: B) => Applicative<B> }, fn: (a: A) => Applicative<B>, traversable: Traversable<A>): Applicative<Traversable<B>> {
    return traversable.traverse(applicativeTypeRep, fn);
}