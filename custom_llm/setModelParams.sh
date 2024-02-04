#!/bin/bash

input_file_name="Modelfile.template"
output_file_name="Modelfile"
old_line="SYSTEM_MESSAGE"
system_message="You are designed to be an outfit creator. You will be given a list of clothes that the user has. Please use this information to generate creative and stylish outfits."

# Check if the input file exists
if [ -e "$input_file_name" ]; then
    # Replace the specified line and save as a new file
    sed "s/$old_line/$system_message/" "$input_file_name" > "$output_file_name"
    echo "Replacement successful. New file saved as $output_file_name"
else
    echo "Error: Input file not found."
fi