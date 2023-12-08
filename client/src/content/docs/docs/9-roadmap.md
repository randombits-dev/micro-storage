---
title: Roadmap
description: See the roadmap for the project.
---

# Roadmap

## Next steps

### 1. Document management improvements

Most of the work went into the subscription part of the app, including the contract, and learning chainlink. The actual document management and editing functionality is very basic right now and can use tons of improvement, including but not limited to:

* Sorting / Filtering of documents
* A better rich text editor
* Faster performance by caching documents in indexedDB
* Bulk uploads and downloads

### 2. Allow sharing of storage accounts

Allow users to create multiple storage accounts, with the ability to share them with other users by sharing the NFT.

### 3. Handle previewing uploaded files

Allow the user to preview files in the browser, like PDF files and images.

### 4. Client side encryption

Although the documents are encrypted during transit and at rest, it would be better if the platform offered client side encryption, so the users didn't have to trust the backend server at all. The process for this would be generating an asymmetric key with the user's wallet, and using that to encrypt a random symmetric key that would be used to encrypt each document.
