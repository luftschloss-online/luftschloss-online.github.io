import React, { useMemo, useState } from "react";

const DATA = [
  {
    title: "Interaktive City-Screens",
    items: [
      { name: "name a", desc: "Beschreibung hier" },
      { name: "Name B", desc: "Beschreibung hier" },
    ],
  },
  {
    title: "Interaktive City-Screens",
    items: [
      { name: "Name A", desc: "Beschreibung hier" },
      { name: "Name B", desc: "Beschreibung hier" },
    ],
  },
  {
    title: "Interaktive City-Screens",
    items: [
      { name: "Name A", desc: "Beschreibung hier" },
      { name: "Name B", desc: "Beschreibung hier" },
    ],
  },
  {
    title: "Interaktive City-Screens",
    items: [
      { name: "Name A", desc: "Beschreibung hier" },
      { name: "Name B", desc: "Beschreibung hier" },
    ],
  },
];

function CategoryAccordion({ rows }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="cats">
      {rows.map((row, idx) => {
        const open = idx === openIndex;

        return (
          <div key={row.title} className={`row ${open ? "open" : ""}`}>
            <button
              className="head"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              aria-expanded={open}
              type="button"
            >
              <span className="plus">{open ? "–" : "+"}</span>
              <span className="title">{row.title}</span>
            </button>

            <div className="panel" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
              <div className="panelInner">
                <div className="list">
                  {row.items.map((it) => (
                    <div className="item" key={it.name}>
                      <div className="name">{it.name}</div>
                      <div className="desc">{it.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="thumb">
                  <div className="thumbMedia" />
                  <div className="thumbText">
                    <div className="name">Digitaler Adventskalender</div>
                    <div className="desc">
                      Cooles Projekt wooooh.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rule" />
          </div>
        );
      })}

      <style>{`
        .cats{
          padding-top: 18px;
        }
        .row{}
        .head{
          width: 100%;
          display:flex;
          gap: 14px;
          align-items: baseline;
          padding: 18px 0;
        }
        .plus{
          width: 22px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          color: rgba(17,17,17,.45);
          font-weight: 700;
        }
        .title{
          font-size: 16px;
          letter-spacing: -0.02em;
          opacity: .85;
          text-align:left;
        }
        .panel{
          display:grid;
          transition: grid-template-rows 320ms ease;
        }
        .panelInner{
          overflow:hidden;
          display:grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 22px;
          padding: 0 0 18px 36px;
        }
        .list{
          display:flex;
          flex-direction:column;
          gap: 12px;
          padding-top: 8px;
        }
        .item{
          border: 1px solid rgba(17,17,17,.10);
          background: rgba(255,255,255,.35);
          padding: 14px 14px;
        }
        .name{
          font-weight: 750;
          letter-spacing: -0.03em;
        }
        .desc{
          font-size: 13px;
          color: rgba(17,17,17,.60);
          line-height: 1.35;
          margin-top: 4px;
        }
        .thumb{
          border-left: 1px solid rgba(17,17,17,.10);
          padding-left: 18px;
          display:flex;
          flex-direction:column;
          gap: 10px;
          justify-content:center;
        }
        .thumbMedia{
          width: 100%;
          aspect-ratio: 16 / 9;
          background:
            linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,0)),
            url("/images/team.jpg");
          background-size: cover;
          background-position: center;
          filter: saturate(.95) contrast(1.02);
        }
        .thumbText .name{ font-size: 14px; }
        .thumbText .desc{ font-size: 12px; }
        .rule{
          border-bottom: 1px solid rgba(17,17,17,.08);
        }
        @media (max-width: 860px){
          .panelInner{ grid-template-columns: 1fr; padding-left: 0; }
          .thumb{ border-left: 0; padding-left: 0; }
        }
      `}</style>
    </div>
  );
}

export default function ProjectsAccordion() {
  const [open, setOpen] = useState(false); // collapsed by default
  const rows = useMemo(() => DATA, []);

  return (
    <div className="projectsWrap">
      
      <button
        className="projectsToggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        type="button"
      >
        <span class="section-title">projects</span>
        <span class="arrow">{open ? "–" : ">"}</span>
      </button>

      {/* Parent panel */}
      <div className="outerPanel" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="outerInner">
          <CategoryAccordion rows={rows} />
        </div>
      </div>

      <style>{`
        .projectsWrap{
          position: relative;
        }
        .projectsToggle{
          width: 100%;
          top: 0;
          display:flex;
          align-items:baseline;
          gap: 12px;
          padding: 10px 0 14px;
        }
        .outerPanel{
          display:grid;
          transition: grid-template-rows 360ms ease;
        }
        .outerInner{
          overflow:hidden;
          padding-top: 6px;
          border-top: 1px solid rgba(17,17,17,.10);
        }
      `}</style>
    </div>
  );
}
