import React from "react";
import Link from "next/link";

export default function YogaClass({ yogaInfo }) {
  return (
    <div>
      <h1>Join me for some yoga!</h1>
      <div>
        {yogaInfo.map((info) => (
          <div key={info.sys.id}>
            <p>{info.fields.where}</p>
            <p>{info.fields.when}</p>
            <Link href={`{info.fields.zoomLink}`}>{info.fields.zoomLink}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
