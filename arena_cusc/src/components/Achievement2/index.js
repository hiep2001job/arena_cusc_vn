import React from 'react';
import './style.css';
import Title from '../../components/shared/Title';
import BrandImg from '../../assets/images/No1_Brand.png';
import Icon_1 from '../../assets/images/icon_Diem_noi_bat_cua_ARENA/icon-1.png';
import Icon_2 from '../../assets/images/icon_Diem_noi_bat_cua_ARENA/icon-2.png';
import Icon_3 from '../../assets/images/icon_Diem_noi_bat_cua_ARENA/icon-3.png';
import Icon_4 from '../../assets/images/icon_Diem_noi_bat_cua_ARENA/icon-4.png';

const data = [
  { img: Icon_1, value: 25, title: 'năm kinh nghiệm' },
  { img: Icon_2, value: 20, title: 'quốc gia' },
  { img: Icon_3, value: 450000, title: 'sinh viên trên thế giới' },
  { img: Icon_4, value: 250, title: 'trung tâm' },
];

function Achievements() {
  return (
    <>
      <div className="achievement" style={{ margin: 50 }}>
        <Title className="text-center text-primary-color">những điểm nổi bật của arena</Title>
        <div className="achievement-content" style={styles.container}>
          <BrandItem />
          {data.map((val, idx) => (
            <Highlighttem key={`highlight-key-${idx}`} {...val} />
          ))}
        </div>
      </div>
    </>
  );
}

const BrandItem = () => {
  return (
    <div className='achievement-box brand-img' style={styles.brand}>
      <img src={BrandImg} alt="brand-img" />
    </div>
  );
};

const Highlighttem = ({ img, value, title }) => {
  const [width, setWidth] = React.useState(imageSize);
  const ref = React.useRef(null);
  React.useEffect(() => {
    // console.log(ref?.current);
    if (ref?.current?.clientWidth) {
      setWidth(ref?.current?.clientWidth / 2);
    }
  }, [ref.current]);

  return (
     <div className='achievement-box ' style={styles.highlight.box} ref={ref}>
      <div className='achievement-box-container' style={styles.highlight.container} ref={ref}>
        <div
          className="header"
          style={{
            ...styles.highlight.header.container,
            height: width / 2,
          }}
        >
          <img
            src={img}
            alt="highlight-img"
            style={{
              ...styles.highlight.header.icon,
              width: width,
              height: width,
            }}
          />
        </div>
        <div
          className="content"
          style={{
            ...styles.highlight.content.container,
            paddingTop: width / 2,
            height: `calc(100% - ${(width + footerHeight) / 2}px)`,
          }}
        >
          <div className='number' style={styles.highlight.content.value}>
            {(value || 0).toLocaleString('de-DE', { minimumFractionDigits: 0 })}
          </div>
          <div className='titile' style={styles.highlight.content.title}>{title?.toUpperCase()}</div>
        </div>
        <div className="footer" style={styles.highlight.footer.container}>
          <div className="circle-top" style={styles.highlight.footer.circleTop}></div>
          <div className="center-line" style={styles.highlight.footer.centerLine}></div>
          <div className="circle-bottom" style={styles.highlight.footer.circleBottom}></div>
        </div>
      </div>
    </div>
  );
};

const imageSize = 120;
const circleTopSize = 40;
const circleBottomSize = 25;
const footerHeight = 60;

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'stretch',
    borderBottom: '4px solid red',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    width: '20%',
  },
  highlight: {
    box: {
      width: '20%',
      paddingLeft: 20,
    },
    container: {
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      position: 'relative',
      height: '100%',
    },
    header: {
      container: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        height: imageSize / 2,
        width: '100%',
      },
      icon: {
        position: 'absolute',
        height: imageSize,
        width: imageSize,
      },
    },
    content: {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: `calc(100% - ${(imageSize + footerHeight) / 2}px)`,
        borderWidth: 2,
        borderColor: '#fff212',
        borderRadius: 10,
        paddingTop: imageSize / 2 + 10,
        paddingBottom: circleTopSize / 2 + 5,
        paddingLeft: 15,
        paddingRight: 15,
        boxShadow: '0px 0px 10px #adb5bd',
      },
      value: {
        fontSize: '2.8rem',
        color: 'red',
        fontWeight: 700,
      },
      title: {
        fontSize: '1.4rem',
        fontWeight: 700,
        textAlign: 'center',
      },
    },
    footer: {
      container: {
        display: 'flex',
        justifyContent: 'center',
        height: footerHeight,
        position: 'relative',
      },
      circleTop: {
        width: circleTopSize,
        height: circleTopSize,
        borderWidth: 3,
        borderColor: 'red',
        borderRadius: '50%',
        position: 'absolute',
        backgroundColor: 'white',
        transform: 'translate(0, -50%)',
      },
      centerLine: {
        height: '100%',
        width: 3,
        backgroundColor: 'red',
      },
      circleBottom: {
        width: circleBottomSize,
        height: circleBottomSize,
        borderWidth: 3,
        borderColor: 'red',
        borderRadius: '50%',
        position: 'absolute',
        backgroundColor: 'white',
        transform: 'translate(0, calc(50% + 1px))',
        bottom: 0,
      },
    },
  },
};

export default Achievements;
