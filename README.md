## BAZOOKA LAUNCHPAD MONOREPO

## Prerequisites

To run this project, you need to have Node.js installed on your system. Here are the basic requirements:

- Node.js (version 14.x or higher)

## [Client-App](/bazooka-client/)

- Build with Next.js
- Integrates Tonwalletconnect to interact with smart contracts.
- Utilizes toncenter apis to read data from blockchain

## [Smart Contracts](/bazooka-contracts/)

- TON smart contracts built on FunC
- These smart contracts are built and tested with the help of Blueprint Framework for TON.

## [Server](/bazooka-server/)

- Backend server built with Nestjs
- Server has minimal role to play with the system , majorly used for data availability for client-app.
