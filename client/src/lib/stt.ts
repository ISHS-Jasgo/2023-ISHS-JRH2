import { getBeap } from './beap';
import { playAudio } from './tts';

async function speechToText(interval = 3000): Promise<string> {
  //play record.mp3
  const beap = getBeap();
  await playAudio(beap, 3);
  //final return value
  let sttResult = '';

  //audioBase64: plain b64 string
  const b64AudioToString = async (audioBase64: string) => {
    const googleCloudKey = process.env.REACT_APP_GOOGLE_CLOUD_KEY;
    const url = `https://speech.googleapis.com/v1/speech:recognize?key=${googleCloudKey}`;

    // POST data
    const data = {
      config: {
        encoding: 'WEBM_OPUS',
        languageCode: 'ko-KR',
        audio_channel_count: 1,
      },
      audio: {
        content: audioBase64,
      },
    };

    // POST request
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });
    const results = await response.json();

    //return text
    try {
      return results.results[0].alternatives[0].transcript;
    } catch (err) {
      console.log(err);
    }
  };

  // input stream
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });

  //input recorder
  const recorder = new MediaRecorder(stream);

  //start & stop recording
  return new Promise((resolve) => {
    console.log('recording start!');
    recorder.start();

    setTimeout(() => {
      recorder.stop();
      console.log('recording stop!');
    }, interval);

    recorder.addEventListener(
      'dataavailable',
      (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.data);

        reader.onloadend = async () => {
          if (!reader.result || typeof reader.result !== 'string') return;
          const base64String = reader.result.replace(
            'data:audio/webm;codecs=opus;base64,',
            ''
          );
          sttResult = await b64AudioToString(base64String);
          console.log(sttResult);
          resolve(sttResult);
        };
      },
      { once: true }
    );
  });
}

export { speechToText };
