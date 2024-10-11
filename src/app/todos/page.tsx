"use client";

import axios from "axios";
import React, { useState } from "react";

export default async function todoPages() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // const res = await axios.post("http://localhost:4000/todos", todo);

  return (
    <div>
      <form>
        <input id="title" type="text" />
        <input id="contnets" type="text" />
        <button>추가하기</button>
      </form>
    </div>
  );
}
