import { useEffect, useRef, useState } from 'react';
import { textToSpeech } from '../../lib/tts';
import { speechToText } from '../../lib/stt';
import { positiveResponse } from '../../lib/sttHandle';
import { useLocation } from 'react-router-dom';
import styles from './RcResult.module.css';
import NonColorPET from '../../images/NonColorPET.jpg';
import Plastic from '../../images/Plastic.jpg';
import Can from '../../images/Can.jpg';
import Glass from '../../images/Glass.jpg';
import Paper from '../../images/Paper.jpg';
import PlainCarton from '../../images/PlainCarton.jpg';
import SterileCarton from '../../images/SterileCarton.jpg';
import PaperCarton from '../../images/PaperCarton.png';
import Vinyl from '../../images/Vinyl.jpg';
import useNavigateTo from '../../hooks/useNavigateTo';
import Button from '../../components/Global/Button';

function RcResult() {
  const navigateTo = useNavigateTo();
  const location = useLocation();

  const [component, setComponent] = useState<any>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    console.log(location.state.resRecycle);
    switch (location.state.resRecycle) {
      case '무색페트류':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>무색페트류</h1>
            <ul className={styles.decoul}>
              <li>
                내용물을 비우고 라벨을 제거한 후 압착하여 투명 페트병
                전용배출함에 배출
              </li>
            </ul>
            <img className={styles.forimg} src={NonColorPET} alt="pet" />
          </div>
        );
        setMessage(
          '무색페트류 입니다. 내용물을 비우고 라벨을 제거한 후 압착하여 투명 페트병 전용 배출함에 배출해야합니다.'
        );
        break;

      case '플라스틱류':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>플라스틱류</h1>
            <ul className={styles.decoul}>
              <li>내용물을 비우고 이물질을 제거해 배출</li>
              <li>다른 재질로 된 뚜껑은 제거해 배출</li>
            </ul>
            <img className={styles.forimg} src={Plastic} alt="pla" />
          </div>
        );
        setMessage(
          '플라스틱류 입니다. 내용물을 비우고 이물질을 제거해 배출해야합니다. 다른 재질로 된 뚜껑이 있다면 제거해 배출해야합니다.'
        );
        break;

      case '비닐류':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>비닐류</h1>
            <ul className={styles.decoul}>
              <li>이물질을 제거해 투명 비닐봉투에 배출</li>
              <li>이물질 제거가 어려운 경우 일반 종량제 봉투에 배출</li>
            </ul>
            <img className={styles.forimg} src={Vinyl} alt="vinyl" />
          </div>
        );
        setMessage(
          '비닐류 입니다. 이물질을 제거하고 투명 비닐봉투에 넣어 배출해야합니다. 이물질 제거가 어려운 경우 일반 종량제 봉투에 넣어서 배출해야합니다.'
        );
        break;

      case '캔류':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>캔류</h1>
            <ul className={styles.decoul}>
              <li>내용물을 비우고 이물질을 제거해 말린 후 배출</li>
              <li>다른 재질은 제거 후 배출</li>
            </ul>
            <img className={styles.forimg} src={Can} alt="can" />
          </div>
        );
        setMessage(
          '캔류 입니다. 내용물을 비우고 이물질을 제거해 말린 후 배출해야합니다. 캔류와 다른 재질은 제거 후 배출해야합니다.'
        );
        break;

      case '종이팩':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>종이팩류</h1>
            <ul className={styles.decoul}>
              <li>
                내용물을 비우고 이물질을 제거한 후 압착하여 종이팩 전용 수거함에
                배출
              </li>
              <li>
                종이팩 전용 수거함이 없는 경우 일반 종이류와 혼합되지 않게 끈
                등으로 묶어 구분 배출
              </li>
            </ul>
            <img className={styles.forimg} src={PaperCarton} alt="pack" />
          </div>
        );
        setMessage(
          '종이팩류 입니다. 내용물을 비우고 이물질을 제거한 후 압착하여 종이팩 적용 수거함에 배출해야합니다. 종이팩 전용 수거함이 없는 경우 일반 종이류와 혼합되지 않게 끈 등으로 묶어 구분하여 배출해야합니다.'
        );
        break;

      case '일반팩':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>일반팩류</h1>
            <ul className={styles.decoul}>
              <li>
                내용물을 비우고 이물질을 제거한 후 압착하여 일반팩 전용 수거함에
                배출
              </li>
              <li>
                전용 수거함이 없는 경우 일반 종이류 및 멸균팩과 혼합되지 않게 끈
                등으로 묶어 구분 배출
              </li>
            </ul>
            <img className={styles.forimg} src={PlainCarton} alt="pack" />
          </div>
        );
        setMessage(
          '일반팩류 입니다. 내용물을 비우고 이물질을 제거한 후 압착하여 일반팩 전용 수거함에 배출해야합니다. 전용 수거함이 없는 경우 일반 종이류 및 멸균팩과 혼합되지 않게 끈 등으로 묶어 구분하여 배출해야합니다. '
        );
        break;

      case '멸균팩':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>멸균팩</h1>
            <ul className={styles.decoul}>
              <li>
                내용물을 비우고 이물질을 제거한 후 압착하여 멸균팩 전용 수거함에
                배출
              </li>
              <li>
                전용 수거함이 없는 경우 일반 종이류 및 일반팩과 혼합되지 않게 끈
                등으로 묶어 구분 배출
              </li>
            </ul>
            <img className={styles.forimg} src={SterileCarton} alt="pack" />
          </div>
        );
        setMessage(
          '멸균팩 입니다. 내용물을 비우고 이물질을 제거한 후 압착하여 멸균팩 전용 수거함에 배출해야합니다. 전용 수거함이 없는 경우 일반 종이류 및 일반팩과 혼합되지 않게 끈 등으로 묶어 구분하여 배출해야합니다.'
        );
        break;

      case '종이':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>종이</h1>
            <ul className={styles.decoul}>
              <li>물기에 젖지 않게 묶거나 박스류에 담아서 배출</li>
            </ul>

            <img className={styles.forimg} src={Paper} alt="paper" />
          </div>
        );
        setMessage(
          '종이 입니다. 물기에 젖기 않게 묶거나 박스류에 담아서 배출해야합니다.'
        );
        break;

      case '유리':
        setComponent(
          <div className={styles.setfont}>
            <h1 className={styles.typerecyle}>유리병류</h1>
            <ul className={styles.decoul}>
              <li>
                병뚜껑을 제거하고 내용물을 비운 후 이물질 제거해 말린 후 배출
              </li>
              <li>가능하면 상표를 제거한 후 배출</li>
              <li>깨진 경우 신문지 등에 싸서 종량제 봉투 배출</li>
            </ul>

            <img className={styles.forimg} src={Glass} alt="glass" />
          </div>
        );
        setMessage(
          '유리 입니다. 병뚜껑을 제거하고 내용물을 비운 후 이물질을 제거해 말린 후 배출해야 합니다. 가능하면 상표를 제거한 후 배출해야합니다. 깨진 경우 신문지 등에 싸서 종량제 봉투에 배출해야합니다.'
        );
        break;

      default:
        console.log('no way!');
    }
  }, [location.state.resRecycle]);

  // useEffect(() => {
  //   const readRecyle = async () => {
  //     if (!message) return;
  //     await textToSpeech(message, 5);
  //     await textToSpeech('분리배출 방법을 다시 들려드릴까요?', 3);
  //     const userRes = await speechToText(3000);
  //     if (positiveResponse.has(userRes)) {
  //       readRecyle();
  //     } else {
  //       await textToSpeech('첫 화면으로 이동합니다.', 3);
  //       navigateTo('/home');
  //     }
  //   };

  //   readRecyle();
  // }, [message]);

  return <div>
    {component}
    <Button classname='' text="홈 화면으로" onClick={() => navigateTo('/home')}/>
    </div>;
}

export default RcResult;
