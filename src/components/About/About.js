import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about' id='about'>
            <h2 className='about-me'>..קצת עליי</h2>
            <div>
                <span>,אני קוסמטיקאית 8 שנים, בעלת ניסיון רב בטיפולי פנים</span>
                <span>.אני מטפלת באקנה ובצלקות ויודעת להתאים לכל אחד בדיוק את החומרים הנחוצים לו לטיפול</span>
                <span>.לכל לקוח אני נותנת את היחס הכי טוב שאני יכולה לתת ומטפלת בחומרים הכי איכותיים וטובים</span>
                <span>,אני לא מתפשרת על איכות וניראות ואצלי לא תתאכזבו</span>
                <span>.בקיצור מבטיחה לכם שתהנו.. ואתם מוזמנים להגיע אליי לטיפול במחירים נוחים</span>
            </div>
        </div>
    );
}

export default About;