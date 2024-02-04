#!/bin/sh

# Run 'ollama serve' in the background
ollama serve &

# Introduce a 20 delay to allow for ollama to start
sleep 30

# Run 'ollama create outfit' and 'ollama run outfit' together
echo "#############################"
echo "Creating custom model"
echo "#############################"
ollama create outfit -f ./Modelfile
echo "#############################"
ollama list
echo "#############################"
echo "Running custom model"
echo "#############################"
ollama run outfit
echo "#############################"