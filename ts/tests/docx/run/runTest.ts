import { assert } from "chai";
import { Run } from "../../../docx/run";
import { TextRun } from "../../../docx/run/text-run";
import { Formatter } from "../../../export/formatter";

function jsonify(obj: object) {
    return JSON.parse(JSON.stringify(obj));
}

describe("Run", () => {
    let run: Run;

    beforeEach(() => {
        run = new Run();
    });

    describe("#bold()", () => {
        it("it should add bold to the properties", () => {
            run.bold();
            const newJson = jsonify(run);
            assert.equal(newJson.root[0].root[0].rootKey, "w:b");
        });
    });

    describe("#italic()", () => {
        it("it should add italics to the properties", () => {
            run.italic();
            const newJson = jsonify(run);
            assert.equal(newJson.root[0].root[0].rootKey, "w:i");
        });
    });

    describe("#underline()", () => {
        it("it should add underline to the properties", () => {
            run.underline();
            const newJson = jsonify(run);
            assert.equal(newJson.root[0].root[0].rootKey, "w:u");
        });
    });

    describe("#smallCaps()", () => {
        it("it should add smallCaps to the properties", () => {
            run.smallCaps();
            const newJson = jsonify(run);
            assert.equal(newJson.root[0].root[0].rootKey, "w:smallCaps");
        });
    });

    describe("#caps()", () => {
        it("it should add caps to the properties", () => {
            run.allCaps();
            const newJson = jsonify(run);
            assert.equal(newJson.root[0].root[0].rootKey, "w:caps");
        });
    });

    describe("#strike()", () => {
        it("it should add strike to the properties", () => {
            run.strike();
            const newJson = jsonify(run);
            assert.equal(newJson.root[0].root[0].rootKey, "w:strike");
        });
    });

    describe("#doubleStrike()", () => {
        it("it should add caps to the properties", () => {
            run.doubleStrike();
            const newJson = jsonify(run);
            assert.equal(newJson.root[0].root[0].rootKey, "w:dstrike");
        });
    });

    describe("#break()", () => {
        it("it should add break to the run", () => {
            run.break();
            const newJson = jsonify(run);
            assert.equal(newJson.root[1].rootKey, "w:br");
        });
    });

    describe("#tab()", () => {
        it("it should add break to the run", () => {
            run.tab();
            const newJson = jsonify(run);
            assert.equal(newJson.root[1].rootKey, "w:tab");
        });
    });
});
