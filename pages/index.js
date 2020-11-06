import React from "react";
import { useState, useEffect } from "react";
import * as Contentful from "contentful";

const client = Contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Home({}) {
  const [testis, setTestis] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "testimonials",
      })
      .then((response) => {
        setTestis(response.items);
        console.log(response.items);
      });
  }, []);
  return (
    <div>
      <h1>Hello I'm Brynn Suckas!</h1>
      <div>
        {testis.map((test) => (
          <div>
            <p>{test.fields.body}</p>
            <span>{test.fields.clientName}</span>
            <span>{test.fields.career}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
