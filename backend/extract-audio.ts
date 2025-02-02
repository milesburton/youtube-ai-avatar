import { exec } from "child_process";

export const extractAudio = async (videoPath: string, outputPath: string) => {
    return new Promise((resolve, reject) => {
        const command = `ffmpeg -i ${videoPath} -q:a 0 -map a ${outputPath}`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error extracting audio: ${stderr}`);
            } else {
                resolve(`Audio extracted successfully: ${stdout}`);
            }
        });
    });
};

// Example usage
extractAudio("input.mp4", "output/audio.mp3").then(console.log).catch(console.error);
