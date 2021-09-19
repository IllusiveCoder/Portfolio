import React, { ReactNode } from "react";
import { useState } from "react";

interface Props {
  title: ReactNode;
  desciptive_text: ReactNode;
  link: string;
}

export default function MainPage({ title, desciptive_text, link }: Props) {
  const [showinfo, setShowInfo] = useState(false);
  return (
    <div
      style={{
        alignItems: "left",
        flexDirection: "column",
        display: "flex",
        width: "600px",
        height: "300px",
        margin: "5px",
        position: "relative",
      }}
    >
      <div className="Dropdownmenü" onClick={() => setShowInfo(!showinfo)}>
        <h1 style={{ transform: "skew(36deg)" }}>{title}</h1>
      </div>
      <div
        className="Dropdownmenü-Element"
        style={{
          left: "-7%",
          top: "-1.9%",
          animation: showinfo
            ? "fade-in 1 350ms forwards"
            : "fade-out 1 350ms forwards",
        }}
      >
        <div
          style={{
            height: "100px",
            width: "500px",
            overflow: "hidden",
            padding: "10px",
          }}
        >
          {desciptive_text}
        </div>
        <a href={link}>
          <button
            className="Dropdown-Menü-btn btn"
            style={{
              animation: showinfo
                ? "fade-in-btn 1 350ms forwards"
                : "fade-out-btn 1 350ms forwards",
            }}
          >
            Zu {title}
          </button>
        </a>
      </div>
    </div>
  );
}
