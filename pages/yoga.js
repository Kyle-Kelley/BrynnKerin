import React from "react";
import { useState, useEffect } from "react";
import * as Contentful from "contentful";
import YogaClass from "../components/YogaClass";

const client = Contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Yoga() {
  const [yogaInfo, setYogaInfo] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "yogaClasses",
      })
      .then((response) => {
        setYogaInfo(response.items);
        // console.log(response.items);
      });
  });
  return <YogaClass yogaInfo={yogaInfo} />;
}
