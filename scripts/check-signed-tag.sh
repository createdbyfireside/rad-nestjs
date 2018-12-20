#!/bin/sh

echo "Importing authorized publisher's gpg keys"

# Import gpg keys that are authorized to trigger npm publish
gpg --import ./scripts/authorized-publishers.asc

echo "Importing gpg trust store"

# Import trust store
gpg --import-ownertrust < scripts/trusted-keys.txt

echo "Verifying tag $TRAVIS_TAG"

# Verify the current tag with git
git tag -v $TRAVIS_TAG
