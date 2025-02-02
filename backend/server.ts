import express from "express";
import { extractAudio } from "./extract-audio";
import { generateSpeech } from "./generate-speech";
import { lipsync } from "./lipsync";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/process", async (req, res) => {
    try {
        const { videoUrl, text } = req.body;

        // Step 1: Extract audio from video
        await extractAudio(videoUrl, "output/audio.mp3");

        // Step 2: Generate AI speech
        await generateSpeech(text, "output/speech.wav");

        // Step 3: Perform lip sync
        await lipsync(videoUrl, "output/speech.wav", "output/synced.mp4");

        res.json({ message: "Processing complete", output: "output/synced.mp4" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
