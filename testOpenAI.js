import openai from "./util/openaiClient";

(async () => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Hello, who are you?" },
      ],
    });

    console.log("Response from OpenAI:", response.choices[0].message.content);
  } catch (error) {
    console.error("Error with OpenAI:", error);
  }
})();
