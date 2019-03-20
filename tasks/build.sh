#!/bin/bash

function print_help {
  echo "Usage: ${0} [OPTIONS]"
  echo ""
  echo "OPTIONS:"
  echo "  --help                    print this message and exit"
  echo ""
}

# Start in tasks even if run from root directory
cd "$(dirname "$0")"

# Exit the script on any command with non 0 return code
# We assume that all the commands in the pipeline set their return code
# properly and that we do not need to validate that the output is correct
set -e

# Echo every command being executed
set -x

# Go to root
cd ..
root_path=$PWD

# Parse our CLI arguments, most notably --env
while [ "$1" != "" ]; do
  case $1 in
    "--help")
      print_help
      exit 0
      ;;
  esac
  shift
done

# Remove the .cache directory to prevent any weirdness
rm -rf .cache

# Generate build timestamp
/bin/sh ./tasks/build-timestamp.sh

$(yarn bin)/gatsby build --prefix-paths
