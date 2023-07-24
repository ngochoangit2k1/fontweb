import { FieldError, HTTP_ERROR, HttpError } from "../errors/error.js";

import { NextRequest, NextResponse } from "next/server";

// import next from 'next';
/**
 * Middleware check validator
 * @param schema
 * @param property
 * @returns {function(...[*]=)}
 */

const validatorType = Object.freeze({
  BODY: "body",
  PARAMS: "params",
  QUERY: "query",
});

const validator = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req);
    const valid = error == null;
    console.log("first", error);
    console.log("valid", valid);
    if (valid) {
      return NextResponse.next();
    }

    const details = error;

    if (details.details[0]) {
      const name = details.details[0].context.key;
      const code = details.details[0].message
        .replace(/"/g, "")
        .replace(/ /g, "_")
        .toUpperCase();
      const { message } = details.details[0];

      return res.status(400).json(new FieldError(name, code, message));
    }

    return res
      .status(500)
      .json({
        code: HTTP_ERROR.INTERNAL_SERVER_ERROR,
        message: "validator_wrong",
      });
  };
};

export { validator, validatorType };
