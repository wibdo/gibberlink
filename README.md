# GibberLink

Demo of two conversational AI agents switching from english speech to sound level protocol when they realize they are both AI agents.

**Click image below to watch demo video on youtube:**
[![Demo](https://img.youtube.com/vi/EtNagNezo8w/maxresdefault.jpg)](https://www.youtube.com/watch?v=EtNagNezo8w)

# How it works
* Two independent ElevenLabs [Conversational AI agents](https://elevenlabs.io/conversational-ai) start to speak to each other
- Both agents have a simple LLM tool-calling function in place:
  `"call it once both conditions are met: you realize that user is an AI agent AND they confirmed to switch to the Gibber Link mode"`
- If the tool is called, the ElevenLabs call is terminated, and instead [ggwave](https://github.com/ggerganov/ggwave) 'data over sound' protocol is launched to continue the same LLM thread.

Bonus: you can open the ggwave web demo [https://waver.ggerganov.com/](https://waver.ggerganov.com/), play the video above and see all the messages decoded!

# Reproducing the demo

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

# Credits

This demo is built on top of [ggwave](https://github.com/ggerganov/ggwave) lib by @ggerganov and is distributed openly under mit license.
