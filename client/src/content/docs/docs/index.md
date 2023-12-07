---
title: Intro
description: The Micro Storage project docs homepage.
---

Micro Storage is a cloud storage platform that uses the blockchain and NFTs to manage subscriptions.

## How it works

A user calls the subscribe() function of the contract, choosing the storage limit and subscription length. An NFT is minted that contains the storage limit and expiration date of the subscription.

It uses ERC-4907, an NFT rental extension, where the NFT has an expiration date. After the NFT expires, the user no longer owns it.

See [Technical Details](/docs/8-technical) for more information.

## Problems it solves

**Expensive Storage.**
Other cloud storage platforms charge a user for a ton of storage, even though the user may not need it. Micro Storage lets you pay for only the storage you need.

**Anonymous and Safe Payments.** Micro Storage lets you pay with crypto.

**Refunds.**
With other cloud storage platforms, you can't get a refund for unused time, or if you decide to downgrade your account. With Micro Storage, you can cancel your subscription at any time and get a refund for unused time. You can also downgrade your storage capacity and receive a refund for the difference.

**No Auto Renewals.**
With other platforms, you have to remember to cancel your subscription before it renews. With Micro Storage, your subscription will automatically expire after the time you choose.



