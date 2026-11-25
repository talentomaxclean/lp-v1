const motes = [
  { left: "7%", top: "6%", delay: "0s", duration: "8.5s", streak: false },
  { left: "78%", top: "11%", delay: "1.6s", duration: "10s", streak: true },
  { left: "22%", top: "19%", delay: "3.1s", duration: "9s", streak: false },
  { left: "88%", top: "27%", delay: "0.8s", duration: "11s", streak: false },
  { left: "14%", top: "36%", delay: "4.4s", duration: "8s", streak: true },
  { left: "63%", top: "42%", delay: "2.2s", duration: "12s", streak: false },
  { left: "41%", top: "51%", delay: "5s", duration: "9.5s", streak: false },
  { left: "91%", top: "58%", delay: "1.1s", duration: "10.5s", streak: true },
  { left: "9%", top: "66%", delay: "3.8s", duration: "8.8s", streak: false },
  { left: "54%", top: "73%", delay: "6.2s", duration: "11.4s", streak: false },
  { left: "28%", top: "81%", delay: "2.7s", duration: "9.2s", streak: true },
  { left: "73%", top: "88%", delay: "4.9s", duration: "10s", streak: false },
  { left: "16%", top: "94%", delay: "1.9s", duration: "8.4s", streak: false },
] as const;

export function CleanAtmosphere() {
  return (
    <>
      <div className="clean-wash" aria-hidden />
      <div className="clean-field" aria-hidden>
        {motes.map((mote) => (
          <span
            key={`${mote.top}-${mote.left}`}
            className={mote.streak ? "clean-streak" : "clean-mote"}
            style={{
              left: mote.left,
              top: mote.top,
              animationDelay: mote.delay,
              animationDuration: mote.duration,
            }}
          />
        ))}
      </div>
    </>
  );
}
