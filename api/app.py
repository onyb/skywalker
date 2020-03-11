from flask import Flask, jsonify

import requests

import os
import json

app = Flask(__name__)

ext_to_language_map = {
    ".js": "javascript",
    ".py": "python",
    ".md": "markdown",
    ".java": "java",
    ".xml": "xml",
    ".json": "json",
    ".go": "golang",
    ".rb": "ruby",
    ".sql": "mysql",
    ".css": "css",
    "": "text",
}


@app.route("/<skylink>")
def get_metadata(skylink):
    response = requests.get(f"http://siasky.net/{skylink}")

    metadata = json.loads(response.headers["Skynet-File-Metadata"])
    filename = metadata.get("filename", "")
    _, ext = os.path.splitext(filename)
    langauge = ext_to_language_map.get(ext)

    return jsonify({"filename": filename or None, "language": langauge})


if __name__ == "__main__":
    app.run()
