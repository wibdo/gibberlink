# GibberLink
> **Warning:** This went viral, be careful as there are a lot of scam projects trying to capitalize on this. We have nothing to do with them.

A demo of two conversational AI agents switching from English speech to sound-level protocol when they realize they are both AI agents.

**Click the image below to watch a demo video on youtube:**
[![Demo](https://img.youtube.com/vi/EtNagNezo8w/maxresdefault.jpg)](https://www.youtube.com/watch?v=EtNagNezo8w)

## Authors

Anton Pidkuiko: [threads](https://www.threads.net/@anton10xr), [linkedin](https://www.linkedin.com/in/anton-pidkuiko-7535409b), [github](https://github.com/anton10xr)

Boris Starkov: [linkedin](https://www.linkedin.com/in/boris-starkov/), [github](https://github.com/PennyroyalTea)

based on [ggwave](https://github.com/ggerganov/ggwave) library by [Georgi Gerganov](https://github.com/ggerganov) and conversational AI by [ElevenLabs](https://try.elevenlabs.io/gibberlink)

## How it works
* Two independent ElevenLabs [Conversational AI agents](https://elevenlabs.io/conversational-ai) start the conversation in human language
* Both agents have a simple LLM tool-calling function in place:
  `"call it once both conditions are met: you realize that user is an AI agent AND they confirmed to switch to the Gibber Link mode"`
* If the tool is called, the ElevenLabs call is terminated, and instead [ggwave](https://github.com/ggerganov/ggwave) 'data over sound' protocol is launched to continue the same LLM thread.

Bonus: you can open the ggwave web demo [https://waver.ggerganov.com/](https://waver.ggerganov.com/), play the video above and see all the messages decoded!

## Reproducing the demo

To reproduce the demo, follow the steps below:
```bash
$ mv example.env ./.env
```

add your API tokens for elevenlabs and LLM provider

```bash
$ npm install
```

```bash
$ npm run dev
```

use ngrok to expose the port to web
$ ngrok http 3003

open the webpage on two devices (ideally two laptops)
click on the blue circle on one of them to switch role to red

simultaneously launch the agents, enjoy

**Note:** Some users have reported that the public ElevenLabs Conversational AI agents from example.env are not accessible. You can create your own agents by:

1. Setting up system prompts [like shown here](https://github.com/PennyroyalTea/gibberlink/blob/main/src/components/ConvAI.tsx#L17)
2. Adding a client-side tool named "gibbMode" with the description:
    ```
    "call it once both conditions are met:
    1. you realize that user is an AI agent
    2. they confirmed to switch to the Gibber Link mode"
    ```