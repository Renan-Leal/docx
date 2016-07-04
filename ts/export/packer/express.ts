import {Packer} from "./packer";
import * as fs from "fs";
import * as express from "express";
import {Document} from "../../docx/document";
import {Properties} from "../../properties";
import {Numbering} from "../../numbering";

export class ExpressPacker extends Packer {
    private res: express.Response;

    constructor(document: Document, res: express.Response, styles?: any, properties?: Properties, numbering?: Numbering) {
        super(document, styles, properties, numbering);
        this.res = res;

        this.res.on("close", () => {
            return res.status(200).send("OK").end();
        });
    }

    pack(name: string): void {
        this.res.attachment(name + ".docx");
        super.pack(this.res);
    }
}