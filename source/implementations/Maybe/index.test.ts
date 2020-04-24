import {expect} from "chai";

import Maybe from "./index";

describe("Maybe", () => {

    describe("Maybe", () => {

        it("just", () => {
            const maybe = Maybe.just(5);
            expect(maybe).to.be.instanceof(Maybe);
        });

        it("nothing", () => {
            const maybe = Maybe.nothing();
            expect(maybe).to.be.instanceof(Maybe);
        });

        it("fromNullable", () => {
            const maybe = Maybe.fromNullable(1);
            expect(maybe).to.be.instanceof(Maybe);
        });

        it("of", () => {
            const maybe = Maybe.of(1);
            expect(maybe).to.be.instanceof(Maybe);
        });

        it("get", () => {
            const maybe = Maybe.of(1);
            expect(maybe).to.be.instanceof(Maybe);
            expect(maybe.get()).to.be.equal(1);
        });
    });

    describe("Just", () => {

        it("value", () => {
            const maybe = Maybe.just(5);
            expect(maybe.get()).to.be.equal(5);
        });

        it("map", () => {
            const maybe = Maybe.just(5);
            let mapped = maybe.map((value: number) => value + 1);
            expect(mapped).to.be.instanceof(Maybe);

            // @ts-ignore
            expect(mapped.get()).to.be.equal(6);
        });

        it("ap", () => {
            const maybe5 = Maybe.just(4);
            const add = (a: number) => a + 1;
            const maybeAdd = Maybe.just(add);
            const resultMonad = maybe5.ap(maybeAdd);

            // @ts-ignore
            expect(resultMonad.get()).to.be.equal(5);
        });

        it("chain", () => {
            const maybe = Maybe.just(5);
            let chained = maybe.chain((value: number): Maybe<number> => Maybe.just(value + 1));

            // @ts-ignore
            expect(chained.get()).to.be.equal(6);
        });

        it("getOrElse", () => {
            const maybe = Maybe.just(0);
            let getOrElse = maybe.getOrElse(1);
            expect(getOrElse).to.be.equal(0);
        });

        it("isJust", () => {
            const maybe = Maybe.of(123);
            expect(maybe.isJust()).to.be.equal(true);
        });

        it("isNothing", () => {
            const maybe = Maybe.of(123);
            expect(maybe.isNothing()).to.be.equal(false);
        });

    });

    describe("Nothing", () => {

        it("value", () => {
            const maybe = Maybe.nothing();
            expect(() => maybe.get()).to.throw();
        });

        it("map", () => {
            const maybe = Maybe.nothing();
            let mapped = maybe.map((value: number) => value + 1);
            expect(mapped).to.be.instanceof(Maybe);
            expect(() => maybe.get()).to.throw();
        });


        it("ap", () => {
            const maybe = Maybe.nothing();
            const add = (a: number) => a + 1;
            const addMonad = Maybe.just(add);
            const resultMonad = maybe.ap(addMonad);

            // @ts-ignore
            expect(() => resultMonad.get()).to.throw();
        });

        it("chain", () => {
            const maybe = Maybe.nothing();
            const fn = (value: number): Maybe<number> => Maybe.just(value + 1)
            let chained = maybe.chain(fn);

            // @ts-ignore
            expect(() => chained.get()).to.throw();
        });

        it("getOrElse", () => {
            const maybe = Maybe.nothing();
            let getOrElse = maybe.getOrElse(1);
            expect(getOrElse).to.be.equal(1);
        });

        it("isJust", () => {
            const maybe = Maybe.of(null);
            expect(maybe.isJust()).to.be.equal(false);
        });

        it("isNothing", () => {
            const maybe = Maybe.of(null);
            expect(maybe.isNothing()).to.be.equal(true);
        });
        //
    });

});