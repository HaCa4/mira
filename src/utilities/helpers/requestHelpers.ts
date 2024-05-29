import { NextResponse } from "next/server";
import { baseApiUrl } from "../scripts";

export const errorStatusCode = 500;
export const okStatusCode = 200;

export const unknownErrorMessage = "An unknown error occurred.";

export async function getData(body: any, getResponseErrorMessage: any, headers: any, url: string) {
  const bodyString = JSON.stringify(body);

  if (headers == null) {
    headers = { "Content-Type": "application/json" };
  }

  const options = {
    body: bodyString,
    headers: headers,
    method: "POST",
  };

  const response = await fetch(baseApiUrl + url, options);

  let data;

  try {
    data = await response.json();
  } catch {}

  const statusCode = response.status;

  if (statusCode != okStatusCode) {
    console.log(`status code = ${statusCode}`);

    let message;

    if (!getResponseErrorMessage) {
      getResponseErrorMessage = getDefaultErrorMessage;
    }

    message = getResponseErrorMessage(data);

    if (!message) {
      const statusText = response.statusText;

      message = `When calling ${url}, the status code was ${statusCode} and the status text was '${statusText}'.`;

      const responseString = JSON.stringify(response);

      console.log(`response = ${responseString}`);
    }

    console.log(`error message = ${message}`);

    throw new Error(message);
  }

  return data;
}

export function getSuccessResponse(body: any) {
  return NextResponse.json(body, { status: okStatusCode });
}

export function getFailureResponse(message: string) {
  const body = { error: message };

  return NextResponse.json(body, { status: errorStatusCode });
}

export function getErrorMessageHelper(inputMessage: string, inputError: any) {
  let outputError;

  if (typeof inputError == "string") {
    outputError = inputError;
  } else if (inputError.message) {
    outputError = inputError.message;
  } else {
    outputError = unknownErrorMessage;
  }

  const outputMessage = `${inputMessage} ${outputError}`;

  return outputMessage;
}

function getDefaultErrorMessage(body: any) {
  if (!body) {
    return "";
  }

  const error = body.error;

  if (!error) {
    return "";
  }

  if (typeof error == "string") {
    return error;
  }

  const errorString = JSON.stringify(error);

  return errorString;
}
