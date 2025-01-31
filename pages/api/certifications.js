import fs from "fs";
import path from "path";

const jsonFilePath = path.resolve("public/certifications.json");

export default function handler(req, res) {
  if (!fs.existsSync(jsonFilePath)) {
    return res.status(404).json({ error: "No certifications data found" });
  }

  const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
  res.status(200).json(data);
}
