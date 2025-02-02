import { exec } from "child_process";

export const generateSpeech = async (text: string, outputPath: string) => {
    return new Promise((resolve, reject) => {
        const command = `python3 -m TTS --text "${text}" --out_path ${outputPath}`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error generating speech: ${stderr}`);
            } else {
                resolve(`Speech generated successfully: ${stdout}`);
            }
        });
    });
};

// Example usage
generateSpeech("Hello, this is an AI-generated voice.", "output/speech.wav").then(console.log).catch(console.error);
