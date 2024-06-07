import { useState } from "react";
import '../styles/Progressbar.css';

function ProgressBar() {
    const [scroll, setScroll] = useState(0);

    window.onscroll = () => {
        const scrollCheck = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        setScroll(scrollCheck * 100);
    };

    return (
        <div className="progress-bar" style={{ width: `${scroll}%` }} />
    );
}

export default ProgressBar;