import { HfInference } from "https://esm.sh/@huggingface/inference"

const hf = new HfInference('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')

console.log(userInput)
for await (const output of hf.textGenerationStream({
    model: "google/flan-t5-xxl",
    inputs: userInput,
    parameters: { max_new_tokens: 250 }
})) {
    console.log(output.token.text, output.generated_text);
    const x = output.generated_text;
    if (x != null) {
        sendMessage(x)
    }

}