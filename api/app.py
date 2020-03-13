import json
import os

import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

ext_to_ace_mode_map = {
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
    ".txt": "text",
}


@app.route("/<skylink>/metadata")
def get_metadata(skylink):
    response = requests.get(
        f"http://siasky.net/{skylink}",
        headers={"Range": "bytes=0-0"},  # do not fetch server response
    )

    metadata = json.loads(response.headers.get("skynet-file-metadata"))
    filename = metadata.get("filename", "")

    _, ext = os.path.splitext(filename)
    mode = ext_to_ace_mode_map.get(ext)

    return jsonify(
        {"filename": filename or None, "mode": mode, "length": metadata["len"]}
    )


@app.route("/<skylink>/content")
def get_content(skylink):
    response = requests.get(f"http://siasky.net/{skylink}",)
    return jsonify({"content": response.text})


if __name__ == "__main__":
    app.run()
