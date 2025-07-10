@@ .. @@
    }, [endConversation, genMyNextMessage, setLLMChat, setLatestUserMessage, setGlMode, isProcessingInput, llmChat, agentType]);

    useEffect(() => {
        // Debug code - currently disabled
        // console.log('DEBUG')
        // setGlMode(true);
        // setConversation(null);
        // startRecording();

        // setTimeout(() => {
        //     const msg = agentType === 'inbound' ? 'Hey there? how are you?' : 'Hello hello AI-buddy!'
        //     setLatestUserMessage(msg)
        //     sendAudioMessage(msg, agentType === 'inbound');
        // }, 5000);
    }, [agentType])


    const endConversation = useCallback(async () => {