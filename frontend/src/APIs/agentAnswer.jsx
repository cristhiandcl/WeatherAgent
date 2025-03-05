import { loader } from "../utils/icons";
import { isCancel } from "axios";
import { AGENT_URL } from "../utils/urls";

export async function callAPI(
  e,
  abortController,
  setAbortController,
  setChatText,
  setChatH,
  setIsDisable,
  setRestoreMerli,
  chatHistory,
  chatText,
) {
  try {
    e.preventDefault();

    if (abortController) {
      abortController.abort();
    }

    // Create a new AbortController
    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    setChatText("");

    // Use local time rather than a passed-in currentHour function
    const hour = new Date().toLocaleTimeString();

    setChatH((prev) => [
      ...prev,
      { value: chatText, type: "human", hour },
      { value: loader, type: "bot" },
    ]);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input_string: chatText
      }),
      signal: newAbortController.signal,
    };

    setIsDisable(true);

    const url = AGENT_URL;

    const response = await fetch(url, requestOptions).catch((err) => {
      if (isCancel(err)) {
        setRestoreMerli((prev) => !prev);
      } else {
        console.log(err);
      }
    });

    if (!response.ok) {
      if (response.status === 422) {
        console.error("Unprocessable Entity: Check the request payload.");
        const errorResponse = await response.json();
        console.error("Error Response:", errorResponse);
      }
      throw new Error("Network response was not ok");
    }

    const stream = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();

    let result = "";

    while (true) {
      const { done, value } = await stream.read();
      if (done) {
        break;
      }

      result += value;

      const pattern =
        /\{\s?(?:\"|\')\s?result\s?(?:\"|\')\s?:(?:\"|\')(.+)(?:\"|\')\}/;
      const message = result.match(pattern);

      if (message) {
        result = message[1];
      }

      chatHistory(value === undefined ? "" : result);
    }
    setIsDisable(false);

  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request was canceled");
    } else {
      console.error("Error:", error);
    }
  }
}
