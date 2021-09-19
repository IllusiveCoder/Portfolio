import React from "react";
import ProjectHeader from "./ProjectHeader";

export function MainPage() {
  return (
    <div className="MainPage">
      <header>
        <div className="headline">Illusive Coder</div>
      </header>
      <main>
        <ProjectHeader
          title={"Robert Assistent"}
          desciptive_text={
            "Robert ist ein kleiner Assistent, welcher einige Tools wie eine Galerie, einen Musikplayer und noch vieles mehr besitzt. Außerdem beherrscht er einige Witze und verfügt über ein Hilfemenü."
          }
          link={"https://github.com/IllusiveCoder/Robert-Assistent"}
        ></ProjectHeader>
        <ProjectHeader
          title={"Colour Changer"}
          desciptive_text={"Dieses Programm dient zum Ausprobieren unterschiedlicher Farben für GUIs. Man kann Hexadezimalwerte oder auch die Namen verschiedener Farben angeben."}
          link={"https://github.com/IllusiveCoder/Colourchanger"}
        ></ProjectHeader>
        <ProjectHeader
          title={"Unilexika"}
          desciptive_text={"Dient als kleines Notizbuch, indem man Text-Dateien speichern und auslesen kann."}
          link={"https://github.com/IllusiveCoder/Unilexika"}
        ></ProjectHeader>
        <ProjectHeader
          title={"Updated Unilexika"}
          desciptive_text={"Die geupdatete Version erlaubt nun, vorhandene Einträge zu überarbeiten und nicht nur auszulesen."}
          link={"https://github.com/IllusiveCoder/Updated-Unilexika"}
        ></ProjectHeader>
        <ProjectHeader
          title={"Listen-App"}
          desciptive_text={"Die Listen-App ist dafür gedacht, Seiten aufzulisten, wo man kostenlos Bücher herunterladen kann."}
          link={"https://github.com/IllusiveCoder/Listenapp"}
        ></ProjectHeader>
        <ProjectHeader
          title={"Link-App"}
          desciptive_text={"Mithilfe dieser App, lassen sich Links speichern, löschen und gegebenfalls überarbeiten. Letztendlich erfüllt die App den Zweck, sich Internetseiten leichter merken und erreichen zu können."}
          link={"https://github.com/IllusiveCoder/Link-App"}
        ></ProjectHeader>
        <ProjectHeader
          title={"Pen and Paper Storage System"}
          desciptive_text={"Diese Anwendung ist für Windows vorbehalten und erlaubt es mittels des JSON-Storage Systems, Daten über Charaktere und Story anzulegen, zu bearbeiten und zu löschen."}
          link={"https://github.com/IllusiveCoder/Pen-and-Paper"}
        ></ProjectHeader>
        <ProjectHeader
          title={"Portfolio Website"}
          desciptive_text={"Auf dieser Internetseite befinden Sie sich gerade. Zur besseren Darstellung meiner Projekte, habe ich diese Internetseite programmiert."}
          link={"https://github.com/IllusiveCoder/Portfolio"}
        ></ProjectHeader>
        <ProjectHeader
          title={"Slimy Adventures"}
          desciptive_text={"Wird ein 2D Adventure, in welchem man die Rolle eines schleimartigen Wesens übernimmt und versucht, sein Volk aus der Gefangenschaft einer anderen bösartigen Spezies zu befreien."}
          link={"https://github.com/IllusiveCoder/Slimy-Adventures"}
        ></ProjectHeader>
      </main>
    </div>
  );
}
