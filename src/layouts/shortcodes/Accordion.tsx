import React, { useState, useRef, useEffect } from "react";

const Accordion = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [show, setShow] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (show && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [show]);

  return (
    <div className={`accordion ${show ? "active" : ""} ${className}`}>
      <button className="accordion-header" onClick={() => setShow(!show)}>
        <svg
          className="accordion-icon "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--token-5b0acdec-92c4-4aa3-b648-2536f4675475, rgb(240, 240, 240))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        {title}
      </button>
      <div ref={contentRef} className="accordion-content">
        {children}
      </div>
    </div>
  );
};

export default Accordion;
