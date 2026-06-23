import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current =
        (window.scrollY / totalHeight) * 100;

      setScroll(current);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div
      className="fixed top-0 left-0 z-[100] h-[4px] bg-blue-600"
      style={{
        width: `${scroll}%`
      }}
    ></div>

  );
}

export default ScrollProgress;