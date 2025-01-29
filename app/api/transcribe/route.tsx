import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Necessary for handling file uploads
  },
};

export async function POST(req) {
  const form = new formidable.IncomingForm();
  form.uploadDir = "/tmp";
  form.keepExtensions = true;

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        resolve(NextResponse.json({ error: "File upload error" }, { status: 500 }));
        return;
      }

      try {
        const filePath = files.audioFile.filepath;
        const fileStream = fs.createReadStream(filePath);

        const formData = new FormData();
        formData.append("file", fileStream);
        formData.append("model", "whisper-1");
        formData.append("language", "en");

        const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: formData,
        });

        const data = await response.json();

        resolve(NextResponse.json({ transcript: data.text }, { status: 200 }));
      } catch (error) {
        resolve(NextResponse.json({ error: "Transcription failed", details: error.message }, { status: 500 }));
      }
    });
  });
}
