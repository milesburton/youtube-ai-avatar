import { exec } from "child_process";

export const lipsync = async (videoPath: string, audioPath: string, outputPath: string) => {
    return new Promise((resolve, reject) => {
        const command = `python3 Wav2Lip/inference.py --checkpoint_path Wav2Lip/checkpoints/wav2lip.pth --face ${videoPath} --audio ${audioPath} --outfile ${outputPath}`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error syncing lips: ${stderr}`);
            } else {
                resolve(`Lip sync completed successfully: ${stdout}`);
            }
        });
    });
};

// Example usage
lipsync("input.mp4", "output/speech.wav", "output/synced.mp4").then(console.log).catch(console.error);
