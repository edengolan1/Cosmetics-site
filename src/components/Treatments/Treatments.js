import React from 'react';
import './Treatments.css';
import { motion, Variants } from "framer-motion";
import acne from '../../assets/acne1.jpg';
import acne2 from '../../assets/acne2.webp';
import face from '../../assets/face.png';
import face2 from '../../assets/face2.jpg';

interface Props {
  emoji: JSX.Element;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
const aboutTreatments = ["טיפול מיצוק פנים וצוואר באמצעות טכנולוגיה מתקדמת של גלי רדיו  (RF)באורכי גל שונים שונות, מסייעת בהצערת העור, החלקת קמטים וקמטוטים, מיצוק והרמת עור רפוי, העלמת צלקות, שיפור משמעותי במרקם, מבנה ונפח העור, צמצום נקבוביות ועוד.הטיפול אינו פולשני, נעשה באמצעות מכשור טכנולוגי המתקדם בסוגו בתחום הרפואה האסתטית, והתוצאה: מראה עור צעיר, חלק, בריא וזוהר.",
"טיפול זוהר, טיפול זה הינו יסודי, הכולל פילינגים לניקוי עמוק יותר וחידוש העור ולבסוף החדרת לחויות ומריחת מסכות עם ויטמינים ומינרלים להזנה והרגעת העור וכל זה בטיפול אחד. לאחר הטיפול העור יראה זוהר, רענן וחיוני מאוד.","טיפול פנים לצלקות אקנה, הטיפול נעשה בעזרת תכשירים בעלי ריכוז חומר פעיל גבוה ומתבצע תהליך אבחון מדויק, שבמהלכו נגלה נתונים על מאפייני העור, צורכי המטופלת וכיוצא בזה לתוך מערכת מתוחכמת. המערכת משקללת את המידע ומציעה בסוף התהליך תוכנית טיפולים מותאמת אישית",
".טיפול אקנה, הטיפול הוא תהליך מתמשך, ושיפור באקנה לוקח זמן. לכל מטופל אקנה יעבור אבחון עור עם תמי כדי לקבוע מה תהיה תוכנית הטיפול הטובה ביותר עבור המטופל.לאחר מכן, כל מטופל באקנה יקבל תוכנית טיפול קוסמטי משלו לאקנה"]

function Card({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [JSX.Element, number, number][] = [
  [<img src={face2} alt="טיפול פנים" className='face-image' />, 220, 60],
  [<img src={face} alt="acne" className='face-image' />, 340, 10],
  [<img src={acne} alt="acne" className='face-image' />, 60, 90],
  [<img src={acne2} alt="acne" className='face-image' />, 20, 40],
];

export default function Treatments() {
    return (
        <div className='div-treatments'>
          <h2 className='my-treatments'>הטיפולים שלי</h2>
          <div className='types-of-treatments'>
            <div className='treatments'>
                {food.map(([emoji, hueA, hueB],index) => (
                  <div className='about-treatments' key={index}>
                    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
                    <div className='text-treatments'>{aboutTreatments[index]}</div>
                  </div>
                    ))}
            </div>
          </div>
        </div>
    );
}