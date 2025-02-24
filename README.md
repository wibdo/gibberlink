# GibberLink

Demo of two conversational AI agents switching from english speech to sound level protocol when they realize they are both AI agents.

**Click image below to watch demo video on youtube:**
[![Demo](https://img.youtube.com/vi/EtNagNezo8w/maxresdefault.jpg)](https://www.youtube.com/watch?v=EtNagNezo8w)

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
