# Application built for fulfilment to HackOmania 2019's AI Challenge 

Simple, Reverse Cahoots-like game built using Framework 7 and Django utilizng Ai Singapore's singlish speech to text transcription api

## Game Rules

1.Players take turn to play the role of a host
2.Host receives a question and suggested answer
3.Players record their voice response, which is transcribed into singlish and are offered an opportunity to correct any errors from the transcription
4.Players submit their answer anonymously along
5.Players vote for the answer that is most likely to be correct
6.Host reveals selected correct answer

## Usage

### 1. Download this repository
```
git clone https://github.com/SengCheong/HackOmania
```

### 2. Install dependencies

Go to the downloaded repository folder and run:
```
npm install yarn
yarn serve
```

This will download latest version of Framework7 (to `/www/framework7/`) and required icon fonts (to `/www/fonts/`)

### 3. Run the app

```
npm run serve
```

App will be opened in browser at `http://localhost:8080/`

