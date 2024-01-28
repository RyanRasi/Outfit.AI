#!/bin/sh

# Run 'ollama serve' in the background
ollama serve &

# Introduce a 20 delay to allow for ollama to start
sleep 20

# Run 'ollama create outfit' and 'ollama run outfit' together
ollama create outfit -f ./Modelfile
ollama run outfit